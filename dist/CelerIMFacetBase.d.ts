import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace CelerIMFacetBase {
    type ZkLikeChainIdRelayerConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        relayer: PromiseOrValue<string>;
    };
    type ZkLikeChainIdRelayerConfigStructOutput = [BigNumber, string] & {
        chainId: BigNumber;
        relayer: string;
    };
}
export declare namespace ILiFi {
    type BridgeDataStruct = {
        transactionId: PromiseOrValue<BytesLike>;
        bridge: PromiseOrValue<string>;
        integrator: PromiseOrValue<string>;
        referrer: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        minAmount: PromiseOrValue<BigNumberish>;
        destinationChainId: PromiseOrValue<BigNumberish>;
        hasSourceSwaps: PromiseOrValue<boolean>;
        hasDestinationCall: PromiseOrValue<boolean>;
    };
    type BridgeDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        transactionId: string;
        bridge: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receiver: string;
        minAmount: BigNumber;
        destinationChainId: BigNumber;
        hasSourceSwaps: boolean;
        hasDestinationCall: boolean;
    };
}
export declare namespace CelerIM {
    type CelerIMDataStruct = {
        maxSlippage: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
        callTo: PromiseOrValue<BytesLike>;
        callData: PromiseOrValue<BytesLike>;
        messageBusFee: PromiseOrValue<BigNumberish>;
        bridgeType: PromiseOrValue<BigNumberish>;
    };
    type CelerIMDataStructOutput = [
        number,
        BigNumber,
        string,
        string,
        BigNumber,
        number
    ] & {
        maxSlippage: number;
        nonce: BigNumber;
        callTo: string;
        callData: string;
        messageBusFee: BigNumber;
        bridgeType: number;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: PromiseOrValue<string>;
        approveTo: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receivingAssetId: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        callData: PromiseOrValue<BytesLike>;
        requiresDeposit: PromiseOrValue<boolean>;
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string,
        boolean
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
        requiresDeposit: boolean;
    };
}
export interface CelerIMFacetBaseInterface extends utils.Interface {
    functions: {
        "RELAYER()": FunctionFragment;
        "initCelerIM((uint256,address)[])": FunctionFragment;
        "startBridgeTokensViaCelerIM((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
        "swapAndStartBridgeTokensViaCelerIM((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
        "updateRelayerConfigForZkLikeChains((uint256,address)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "RELAYER" | "initCelerIM" | "startBridgeTokensViaCelerIM" | "swapAndStartBridgeTokensViaCelerIM" | "updateRelayerConfigForZkLikeChains"): FunctionFragment;
    encodeFunctionData(functionFragment: "RELAYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "initCelerIM", values: [CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCelerIM", values: [ILiFi.BridgeDataStruct, CelerIM.CelerIMDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaCelerIM", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        CelerIM.CelerIMDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "updateRelayerConfigForZkLikeChains", values: [CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[]]): string;
    decodeFunctionResult(functionFragment: "RELAYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initCelerIM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCelerIM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaCelerIM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRelayerConfigForZkLikeChains", data: BytesLike): Result;
    events: {
        "CelerIMInitialized(tuple[])": EventFragment;
        "CelerIMRelayerConfig(tuple[])": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CelerIMInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CelerIMRelayerConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface CelerIMInitializedEventObject {
    zkLikeChainIdRelayerConfigs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStructOutput[];
}
export declare type CelerIMInitializedEvent = TypedEvent<[
    CelerIMFacetBase.ZkLikeChainIdRelayerConfigStructOutput[]
], CelerIMInitializedEventObject>;
export declare type CelerIMInitializedEventFilter = TypedEventFilter<CelerIMInitializedEvent>;
export interface CelerIMRelayerConfigEventObject {
    zkLikeChainIdRelayerConfigs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStructOutput[];
}
export declare type CelerIMRelayerConfigEvent = TypedEvent<[
    CelerIMFacetBase.ZkLikeChainIdRelayerConfigStructOutput[]
], CelerIMRelayerConfigEventObject>;
export declare type CelerIMRelayerConfigEventFilter = TypedEventFilter<CelerIMRelayerConfigEvent>;
export interface LiFiGenericSwapCompletedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    receiver: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export declare type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export declare type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export declare type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export declare type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface CelerIMFacetBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CelerIMFacetBaseInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        RELAYER(overrides?: CallOverrides): Promise<[string]>;
        initCelerIM(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateRelayerConfigForZkLikeChains(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    RELAYER(overrides?: CallOverrides): Promise<string>;
    initCelerIM(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateRelayerConfigForZkLikeChains(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        RELAYER(overrides?: CallOverrides): Promise<string>;
        initCelerIM(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _celerIMData: CelerIM.CelerIMDataStruct, overrides?: CallOverrides): Promise<void>;
        updateRelayerConfigForZkLikeChains(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CelerIMInitialized(tuple[])"(zkLikeChainIdRelayerConfigs?: null): CelerIMInitializedEventFilter;
        CelerIMInitialized(zkLikeChainIdRelayerConfigs?: null): CelerIMInitializedEventFilter;
        "CelerIMRelayerConfig(tuple[])"(zkLikeChainIdRelayerConfigs?: null): CelerIMRelayerConfigEventFilter;
        CelerIMRelayerConfig(zkLikeChainIdRelayerConfigs?: null): CelerIMRelayerConfigEventFilter;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        LiFiSwappedGeneric(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        RELAYER(overrides?: CallOverrides): Promise<BigNumber>;
        initCelerIM(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateRelayerConfigForZkLikeChains(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        RELAYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initCelerIM(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaCelerIM(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateRelayerConfigForZkLikeChains(configs: CelerIMFacetBase.ZkLikeChainIdRelayerConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
