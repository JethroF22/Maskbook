import type { RequestArguments } from 'web3-core'
import { defer } from '@dimensiondev/kit'
import { EthereumMethodType } from '@masknet/web3-shared-evm'
import { BaseProvider } from './Base'
import type { Provider } from '../types'
import { EVM_Messages } from '../../../../plugins/EVM/messages'

export class WalletConnectProvider extends BaseProvider implements Provider {
    private id = 0

    override async request<T extends unknown>(requestArguments: RequestArguments) {
        const requestId = this.id++
        const [deferred, resolve, reject] = defer<T, Error | null>()

        const onResponse = ({ payload, result, error }: EVM_Messages['WALLET_CONNECT_PROVIDER_RPC_RESPONSE']) => {
            if (payload.id !== requestId) return
            if (error) reject(error)
            else resolve(result as T)
        }

        const timer = setTimeout(
            () => {
                reject(new Error('The request is timeout.'))
            },
            requestArguments.method === EthereumMethodType.ETH_REQUEST_ACCOUNTS ? 3 * 60 * 1000 : 45 * 1000,
        )

        deferred.finally(() => {
            clearTimeout(timer)
            EVM_Messages.events.WALLET_CONNECT_PROVIDER_RPC_RESPONSE.off(onResponse)
        })

        EVM_Messages.events.WALLET_CONNECT_PROVIDER_RPC_RESPONSE.on(onResponse)
        EVM_Messages.events.WALLET_CONNECT_PROVIDER_RPC_REQUEST.sendToVisiblePages({
            payload: {
                jsonrpc: '2.0',
                id: requestId,
                params: [],
                ...requestArguments,
            },
        })

        return deferred
    }
}
