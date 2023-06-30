import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export declare namespace OFTWrapperFacet {
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        layerZeroChainId: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        layerZeroChainId: number;
    };
    type OFTWrapperDataStruct = {
        tokenType: PromiseOrValue<BigNumberish>;
        receiver: PromiseOrValue<BytesLike>;
        minAmount: PromiseOrValue<BigNumberish>;
        lzFee: PromiseOrValue<BigNumberish>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type OFTWrapperDataStructOutput = [
        number,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        tokenType: number;
        receiver: string;
        minAmount: BigNumber;
        lzFee: BigNumber;
        adapterParams: string;
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
export interface OFTWrapperFacetInterface extends utils.Interface {
    functions: {
        "estimateSendFee((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint8,bytes32,uint256,uint256,bytes))": FunctionFragment;
        "initOFTWrapper((uint256,uint16)[])": FunctionFragment;
        "setOFTLayerZeroChainId(uint256,uint16)": FunctionFragment;
        "startBridgeTokensViaOFTWrapper((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint8,bytes32,uint256,uint256,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaOFTWrapper((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint8,bytes32,uint256,uint256,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "estimateSendFee" | "initOFTWrapper" | "setOFTLayerZeroChainId" | "startBridgeTokensViaOFTWrapper" | "swapAndStartBridgeTokensViaOFTWrapper"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "initOFTWrapper", values: [OFTWrapperFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setOFTLayerZeroChainId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOFTWrapper", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOFTWrapper", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OFTWrapperFacet.OFTWrapperDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initOFTWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOFTWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOFTWrapper", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint16,bytes32)": EventFragment;
        "LayerZeroChainIdSet(uint256,uint16)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OFTWrapperInitialized(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LayerZeroChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTWrapperInitialized"): EventFragment;
}
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    layerZeroChainId: number;
    receiver: string;
}
export declare type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    number,
    string
], BridgeToNonEVMChainEventObject>;
export declare type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
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
export interface OFTWrapperInitializedEventObject {
    chainIdConfigs: OFTWrapperFacet.ChainIdConfigStructOutput[];
}
export declare type OFTWrapperInitializedEvent = TypedEvent<[
    OFTWrapperFacet.ChainIdConfigStructOutput[]
], OFTWrapperInitializedEventObject>;
export declare type OFTWrapperInitializedEventFilter = TypedEventFilter<OFTWrapperInitializedEvent>;
export interface OFTWrapperFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTWrapperFacetInterface;
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
        estimateSendFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    estimateSendFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        estimateSendFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint16,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, layerZeroChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, layerZeroChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "LayerZeroChainIdSet(uint256,uint16)"(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        LayerZeroChainIdSet(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
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
        "OFTWrapperInitialized(tuple[])"(chainIdConfigs?: null): OFTWrapperInitializedEventFilter;
        OFTWrapperInitialized(chainIdConfigs?: null): OFTWrapperInitializedEventFilter;
    };
    estimateGas: {
        estimateSendFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        estimateSendFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOFTWrapper(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
