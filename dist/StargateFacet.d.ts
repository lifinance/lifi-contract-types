import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace StargateFacet {
    type ChainIdConfigStruct = {
        chainId: BigNumberish;
        layerZeroChainId: BigNumberish;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        layerZeroChainId: number;
    };
    type StargateDataStruct = {
        srcPoolId: BigNumberish;
        dstPoolId: BigNumberish;
        minAmountLD: BigNumberish;
        dstGasForCall: BigNumberish;
        lzFee: BigNumberish;
        refundAddress: string;
        callTo: BytesLike;
        callData: BytesLike;
    };
    type StargateDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        srcPoolId: BigNumber;
        dstPoolId: BigNumber;
        minAmountLD: BigNumber;
        dstGasForCall: BigNumber;
        lzFee: BigNumber;
        refundAddress: string;
        callTo: string;
        callData: string;
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
export interface StargateFacetInterface extends utils.Interface {
    functions: {
        "initStargate((uint256,uint16)[])": FunctionFragment;
        "quoteLayerZeroFee(uint256,(uint256,uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "setLayerZeroChainId(uint256,uint16)": FunctionFragment;
        "startBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initStargate" | "quoteLayerZeroFee" | "setLayerZeroChainId" | "startBridgeTokensViaStargate" | "swapAndStartBridgeTokensViaStargate"): FunctionFragment;
    encodeFunctionData(functionFragment: "initStargate", values: [StargateFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [BigNumberish, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "setLayerZeroChainId", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaStargate", values: [ILiFi.BridgeDataStruct, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaStargate", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        StargateFacet.StargateDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaStargate", data: BytesLike): Result;
    events: {
        "LayerZeroChainIdSet(uint256,uint16)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
        "PartnerSwap(bytes2)": EventFragment;
        "StargateInitialized((uint256,uint16)[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LayerZeroChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartnerSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateInitialized"): EventFragment;
}
export interface LayerZeroChainIdSetEventObject {
    chainId: BigNumber;
    layerZeroChainId: number;
}
export declare type LayerZeroChainIdSetEvent = TypedEvent<[
    BigNumber,
    number
], LayerZeroChainIdSetEventObject>;
export declare type LayerZeroChainIdSetEventFilter = TypedEventFilter<LayerZeroChainIdSetEvent>;
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
export interface PartnerSwapEventObject {
    partnerId: string;
}
export declare type PartnerSwapEvent = TypedEvent<[string], PartnerSwapEventObject>;
export declare type PartnerSwapEventFilter = TypedEventFilter<PartnerSwapEvent>;
export interface StargateInitializedEventObject {
    chainIdConfigs: StargateFacet.ChainIdConfigStructOutput[];
}
export declare type StargateInitializedEvent = TypedEvent<[
    StargateFacet.ChainIdConfigStructOutput[]
], StargateInitializedEventObject>;
export declare type StargateInitializedEventFilter = TypedEventFilter<StargateInitializedEvent>;
export interface StargateFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateFacetInterface;
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
        initStargate(chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    initStargate(chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        initStargate(chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LayerZeroChainIdSet(uint256,uint16)"(chainId?: BigNumberish | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        LayerZeroChainIdSet(chainId?: BigNumberish | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
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
        "PartnerSwap(bytes2)"(partnerId?: null): PartnerSwapEventFilter;
        PartnerSwap(partnerId?: null): PartnerSwapEventFilter;
        "StargateInitialized((uint256,uint16)[])"(chainIdConfigs?: null): StargateInitializedEventFilter;
        StargateInitialized(chainIdConfigs?: null): StargateInitializedEventFilter;
    };
    estimateGas: {
        initStargate(chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initStargate(chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
