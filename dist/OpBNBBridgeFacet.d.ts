import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OpBNBBridgeFacet {
    type ConfigStruct = {
        assetId: PromiseOrValue<string>;
        bridge: PromiseOrValue<string>;
    };
    type ConfigStructOutput = [string, string] & {
        assetId: string;
        bridge: string;
    };
    type OpBNBDataStruct = {
        assetIdOnL2: PromiseOrValue<string>;
        l2Gas: PromiseOrValue<BigNumberish>;
        isSynthetix: PromiseOrValue<boolean>;
    };
    type OpBNBDataStructOutput = [string, number, boolean] & {
        assetIdOnL2: string;
        l2Gas: number;
        isSynthetix: boolean;
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
export interface OpBNBBridgeFacetInterface extends utils.Interface {
    functions: {
        "initOpBNB((address,address)[],address)": FunctionFragment;
        "registerOpBNBBridge(address,address)": FunctionFragment;
        "startBridgeTokensViaOpBNBBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,uint32,bool))": FunctionFragment;
        "swapAndStartBridgeTokensViaOpBNBBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,uint32,bool))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initOpBNB" | "registerOpBNBBridge" | "startBridgeTokensViaOpBNBBridge" | "swapAndStartBridgeTokensViaOpBNBBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "initOpBNB", values: [OpBNBBridgeFacet.ConfigStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerOpBNBBridge", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOpBNBBridge", values: [ILiFi.BridgeDataStruct, OpBNBBridgeFacet.OpBNBDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOpBNBBridge", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OpBNBBridgeFacet.OpBNBDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initOpBNB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerOpBNBBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOpBNBBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOpBNBBridge", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OptimismBridgeRegistered(address,address)": EventFragment;
        "OptimismInitialized(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptimismBridgeRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptimismInitialized"): EventFragment;
}
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
export interface OptimismBridgeRegisteredEventObject {
    assetId: string;
    bridge: string;
}
export declare type OptimismBridgeRegisteredEvent = TypedEvent<[
    string,
    string
], OptimismBridgeRegisteredEventObject>;
export declare type OptimismBridgeRegisteredEventFilter = TypedEventFilter<OptimismBridgeRegisteredEvent>;
export interface OptimismInitializedEventObject {
    configs: OpBNBBridgeFacet.ConfigStructOutput[];
}
export declare type OptimismInitializedEvent = TypedEvent<[
    OpBNBBridgeFacet.ConfigStructOutput[]
], OptimismInitializedEventObject>;
export declare type OptimismInitializedEventFilter = TypedEventFilter<OptimismInitializedEvent>;
export interface OpBNBBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OpBNBBridgeFacetInterface;
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
        initOpBNB(configs: OpBNBBridgeFacet.ConfigStruct[], standardBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerOpBNBBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initOpBNB(configs: OpBNBBridgeFacet.ConfigStruct[], standardBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerOpBNBBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initOpBNB(configs: OpBNBBridgeFacet.ConfigStruct[], standardBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registerOpBNBBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
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
        "OptimismBridgeRegistered(address,address)"(assetId?: PromiseOrValue<string> | null, bridge?: null): OptimismBridgeRegisteredEventFilter;
        OptimismBridgeRegistered(assetId?: PromiseOrValue<string> | null, bridge?: null): OptimismBridgeRegisteredEventFilter;
        "OptimismInitialized(tuple[])"(configs?: null): OptimismInitializedEventFilter;
        OptimismInitialized(configs?: null): OptimismInitializedEventFilter;
    };
    estimateGas: {
        initOpBNB(configs: OpBNBBridgeFacet.ConfigStruct[], standardBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerOpBNBBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initOpBNB(configs: OpBNBBridgeFacet.ConfigStruct[], standardBridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerOpBNBBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOpBNBBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _opBNBData: OpBNBBridgeFacet.OpBNBDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
