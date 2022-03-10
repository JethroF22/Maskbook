import type { Plugin } from '@masknet/plugin-infra'
import { base } from '../../base'
import { Web3UI } from '../Web3UI'
import { setupStorage, StorageDefaultValue } from '../../storage'
import { InjectedProviderBridge } from '../components/InjectedProviderBridge'
import { FortmaticProviderBridge } from '../components/FortmaticProviderBridge'
import { ProviderType } from '@masknet/web3-shared-evm'
import { WalletConnectProviderBridge } from '../components/WalletConnectProviderBridge'

const sns: Plugin.SNSAdaptor.Definition = {
    ...base,
    init(signal, context) {
        setupStorage(context.createKVStorage('memory', StorageDefaultValue))
    },
    Web3UI,
    Web3State: {},
    GlobalInjection() {
        return (
            <>
                <InjectedProviderBridge injectedProviderType={ProviderType.MetaMask} />
                <InjectedProviderBridge injectedProviderType={ProviderType.Coin98} />
                <WalletConnectProviderBridge />
                <FortmaticProviderBridge />
            </>
        )
    },
}

export default sns
