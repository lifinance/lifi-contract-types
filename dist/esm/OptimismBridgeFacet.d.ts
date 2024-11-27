import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace OptimismBridgeFacet {
    type ConfigStruct = {
        assetId: string;
        bridge: string;
    };
    type ConfigStructOutput = [string, string] & {
        assetId: string;
        bridge: string;
    };
    type OptimismDataStruct = {
        assetIdOnL2: string;
        l2Gas: BigNumberish;
        isSynthetix: boolean;
    };
    type OptimismDataStructOutput = [string, number, boolean] & {
        assetIdOnL2: string;
        l2Gas: number;
        isSynthetix: boolean;
    };
}
export declare namespace ILiFi {
    type BridgeDataStruct = {
        transactionId: BytesLike;
        bridge: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receiver: string;
        minAmount: BigNumberish;
        destinationChainId: BigNumberish;
        hasSourceSwaps: boolean;
        hasDestinationCall: boolean;
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
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
        requiresDeposit: boolean;
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
export interface OptimismBridgeFacetInterface extends utils.Interface {
    functions: {
        "initOptimism((address,address)[],address)": FunctionFragment;
        "registerOptimismBridge(address,address)": FunctionFragment;
        "startBridgeTokensViaOptimismBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,uint32,bool))": FunctionFragment;
        "swapAndStartBridgeTokensViaOptimismBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,uint32,bool))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initOptimism" | "registerOptimismBridge" | "startBridgeTokensViaOptimismBridge" | "swapAndStartBridgeTokensViaOptimismBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "initOptimism", values: [OptimismBridgeFacet.ConfigStruct[], string]): string;
    encodeFunctionData(functionFragment: "registerOptimismBridge", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOptimismBridge", values: [ILiFi.BridgeDataStruct, OptimismBridgeFacet.OptimismDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOptimismBridge", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OptimismBridgeFacet.OptimismDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initOptimism", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerOptimismBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOptimismBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOptimismBridge", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
        "OptimismBridgeRegistered(address,address)": EventFragment;
        "OptimismInitialized((address,address)[])": EventFragment;
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
export type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface OptimismBridgeRegisteredEventObject {
    assetId: string;
    bridge: string;
}
export type OptimismBridgeRegisteredEvent = TypedEvent<[
    string,
    string
], OptimismBridgeRegisteredEventObject>;
export type OptimismBridgeRegisteredEventFilter = TypedEventFilter<OptimismBridgeRegisteredEvent>;
export interface OptimismInitializedEventObject {
    configs: OptimismBridgeFacet.ConfigStructOutput[];
}
export type OptimismInitializedEvent = TypedEvent<[
    OptimismBridgeFacet.ConfigStructOutput[]
], OptimismInitializedEventObject>;
export type OptimismInitializedEventFilter = TypedEventFilter<OptimismInitializedEvent>;
export interface OptimismBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OptimismBridgeFacetInterface;
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
        initOptimism(configs: OptimismBridgeFacet.ConfigStruct[], standardBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        registerOptimismBridge(assetId: string, bridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    initOptimism(configs: OptimismBridgeFacet.ConfigStruct[], standardBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    registerOptimismBridge(assetId: string, bridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        initOptimism(configs: OptimismBridgeFacet.ConfigStruct[], standardBridge: string, overrides?: CallOverrides): Promise<void>;
        registerOptimismBridge(assetId: string, bridge: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        LiFiSwappedGeneric(transactionId?: BytesLike | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "OptimismBridgeRegistered(address,address)"(assetId?: string | null, bridge?: null): OptimismBridgeRegisteredEventFilter;
        OptimismBridgeRegistered(assetId?: string | null, bridge?: null): OptimismBridgeRegisteredEventFilter;
        "OptimismInitialized((address,address)[])"(configs?: null): OptimismInitializedEventFilter;
        OptimismInitialized(configs?: null): OptimismInitializedEventFilter;
    };
    estimateGas: {
        initOptimism(configs: OptimismBridgeFacet.ConfigStruct[], standardBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        registerOptimismBridge(assetId: string, bridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initOptimism(configs: OptimismBridgeFacet.ConfigStruct[], standardBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        registerOptimismBridge(assetId: string, bridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOptimismBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _optimismData: OptimismBridgeFacet.OptimismDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
