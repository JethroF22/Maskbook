import { useCallback, useEffect } from 'react'
import { useMount } from 'react-use'
import { first } from 'lodash-unified'
import { ChainId, EthereumMethodType, isFortmaticSupported, ProviderType } from '@masknet/web3-shared-evm'
import * as Fortmatic from '@masknet/web3-shared-evm/providers/Fortmatic'
import { NetworkPluginID, useChainId, useProviderType } from '@masknet/plugin-infra'
import { isDashboardPage, isPopupPage } from '@masknet/shared-base'
import { EVM_Messages } from '../../messages'
import Services from '../../../../extension/service'

const isContextMatched = !isDashboardPage() && !isPopupPage()

export interface FortmaticProviderBridgeProps {}

export function FortmaticProviderBridge(props: FortmaticProviderBridgeProps) {
    const chainId = useChainId<ChainId>(NetworkPluginID.PLUGIN_EVM)
    const providerType = useProviderType<ProviderType>(NetworkPluginID.PLUGIN_EVM)

    const onMounted = useCallback(async () => {
        if (!isContextMatched) return
        if (providerType !== ProviderType.Fortmatic) return
        await Services.Ethereum.connect(providerType)
    }, [chainId, providerType])

    useEffect(() => {
        return EVM_Messages.events.FORTMATIC_PROVIDER_RPC_REQUEST.on(async ({ payload }) => {
            if (!isContextMatched) return
            const handleResponse = (error: unknown, result?: any) => {
                if (error) {
                    EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                        payload,
                        error: error instanceof Error ? error : new Error('Failed to send transction.'),
                    })
                    return
                }
                EVM_Messages.events.FORTMATIC_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                    payload,
                    result,
                    error: null,
                })
            }

            const chainIdFinally = (
                payload.method === EthereumMethodType.MASK_REQUEST_ACCOUNTS ? first<ChainId>(payload.params) : chainId
            ) as Fortmatic.ChainIdFortmatic
            if (!chainIdFinally || !isFortmaticSupported(chainIdFinally)) throw new Error('Not supported.')

            try {
                switch (payload.method) {
                    case EthereumMethodType.MASK_REQUEST_ACCOUNTS:
                        handleResponse(null, {
                            chainId: chainIdFinally,
                            accounts: await Fortmatic.login(chainIdFinally),
                        })
                        break
                    case EthereumMethodType.MASK_DISMISS_ACCOUNTS:
                        handleResponse(null, await Fortmatic.logout(chainIdFinally))
                        break
                    default:
                        const provider = Fortmatic.createProvider(chainIdFinally)
                        handleResponse(null, await provider.send(payload.method, payload.params))
                        break
                }
            } catch (error) {
                handleResponse(error)
            }
        })
    }, [chainId])

    useMount(onMounted)

    return null
}
