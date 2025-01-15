import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace DeBridgeDlnFacet {
    type ChainIdConfigStruct = {
        chainId: BigNumberish;
        deBridgeChainId: BigNumberish;
    };
    type ChainIdConfigStructOutput = [BigNumber, BigNumber] & {
        chainId: BigNumber;
        deBridgeChainId: BigNumber;
    };
    type DeBridgeDlnDataStruct = {
        receivingAssetId: BytesLike;
        receiver: BytesLike;
        orderAuthorityDst: BytesLike;
        minAmountOut: BigNumberish;
    };
    type DeBridgeDlnDataStructOutput = [
        string,
        string,
        string,
        BigNumber
    ] & {
        receivingAssetId: string;
        receiver: string;
        orderAuthorityDst: string;
        minAmountOut: BigNumber;
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
export interface DeBridgeDlnFacetInterface extends utils.Interface {
    functions: {
        "dlnSource()": FunctionFragment;
        "getDeBridgeChainId(uint256)": FunctionFragment;
        "initDeBridgeDln((uint256,uint256)[])": FunctionFragment;
        "setDeBridgeChainId(uint256,uint256)": FunctionFragment;
        "startBridgeTokensViaDeBridgeDln((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,bytes,bytes,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaDeBridgeDln((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,bytes,bytes,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dlnSource" | "getDeBridgeChainId" | "initDeBridgeDln" | "setDeBridgeChainId" | "startBridgeTokensViaDeBridgeDln" | "swapAndStartBridgeTokensViaDeBridgeDln"): FunctionFragment;
    encodeFunctionData(functionFragment: "dlnSource", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeBridgeChainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initDeBridgeDln", values: [DeBridgeDlnFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setDeBridgeChainId", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaDeBridgeDln", values: [ILiFi.BridgeDataStruct, DeBridgeDlnFacet.DeBridgeDlnDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaDeBridgeDln", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        DeBridgeDlnFacet.DeBridgeDlnDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "dlnSource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeBridgeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initDeBridgeDln", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeBridgeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaDeBridgeDln", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaDeBridgeDln", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "DeBridgeChainIdSet(uint256,uint256)": EventFragment;
        "DeBridgeInitialized((uint256,uint256)[])": EventFragment;
        "DlnOrderCreated(bytes32)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeBridgeChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeBridgeInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DlnOrderCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    destinationChainId: BigNumber;
    receiver: string;
}
export type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainEventObject>;
export type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
export interface DeBridgeChainIdSetEventObject {
    chainId: BigNumber;
    deBridgeChainId: BigNumber;
}
export type DeBridgeChainIdSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], DeBridgeChainIdSetEventObject>;
export type DeBridgeChainIdSetEventFilter = TypedEventFilter<DeBridgeChainIdSetEvent>;
export interface DeBridgeInitializedEventObject {
    chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStructOutput[];
}
export type DeBridgeInitializedEvent = TypedEvent<[
    DeBridgeDlnFacet.ChainIdConfigStructOutput[]
], DeBridgeInitializedEventObject>;
export type DeBridgeInitializedEventFilter = TypedEventFilter<DeBridgeInitializedEvent>;
export interface DlnOrderCreatedEventObject {
    orderId: string;
}
export type DlnOrderCreatedEvent = TypedEvent<[
    string
], DlnOrderCreatedEventObject>;
export type DlnOrderCreatedEventFilter = TypedEventFilter<DlnOrderCreatedEvent>;
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
export interface DeBridgeDlnFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeBridgeDlnFacetInterface;
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
        dlnSource(overrides?: CallOverrides): Promise<[string]>;
        getDeBridgeChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDeBridgeChainId(_chainId: BigNumberish, _deBridgeChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    dlnSource(overrides?: CallOverrides): Promise<string>;
    getDeBridgeChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDeBridgeChainId(_chainId: BigNumberish, _deBridgeChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        dlnSource(overrides?: CallOverrides): Promise<string>;
        getDeBridgeChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setDeBridgeChainId(_chainId: BigNumberish, _deBridgeChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: BytesLike | null, destinationChainId?: BigNumberish | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: BytesLike | null, destinationChainId?: BigNumberish | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "DeBridgeChainIdSet(uint256,uint256)"(chainId?: BigNumberish | null, deBridgeChainId?: null): DeBridgeChainIdSetEventFilter;
        DeBridgeChainIdSet(chainId?: BigNumberish | null, deBridgeChainId?: null): DeBridgeChainIdSetEventFilter;
        "DeBridgeInitialized((uint256,uint256)[])"(chainIdConfigs?: null): DeBridgeInitializedEventFilter;
        DeBridgeInitialized(chainIdConfigs?: null): DeBridgeInitializedEventFilter;
        "DlnOrderCreated(bytes32)"(orderId?: BytesLike | null): DlnOrderCreatedEventFilter;
        DlnOrderCreated(orderId?: BytesLike | null): DlnOrderCreatedEventFilter;
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
    };
    estimateGas: {
        dlnSource(overrides?: CallOverrides): Promise<BigNumber>;
        getDeBridgeChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDeBridgeChainId(_chainId: BigNumberish, _deBridgeChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        dlnSource(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeBridgeChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDeBridgeChainId(_chainId: BigNumberish, _deBridgeChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DeBridgeDlnFacet.d.ts.map