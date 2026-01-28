import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace DeBridgeDlnFacet {
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        deBridgeChainId: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, BigNumber] & {
        chainId: BigNumber;
        deBridgeChainId: BigNumber;
    };
    type DeBridgeDlnDataStruct = {
        receivingAssetId: PromiseOrValue<BytesLike>;
        receiver: PromiseOrValue<BytesLike>;
        orderAuthorityDst: PromiseOrValue<BytesLike>;
        minAmountOut: PromiseOrValue<BigNumberish>;
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
export interface DeBridgeDlnFacetInterface extends utils.Interface {
    functions: {
        "DLN_SOURCE()": FunctionFragment;
        "getDeBridgeChainId(uint256)": FunctionFragment;
        "initDeBridgeDln((uint256,uint256)[])": FunctionFragment;
        "setDeBridgeChainId(uint256,uint256)": FunctionFragment;
        "startBridgeTokensViaDeBridgeDln((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,bytes,bytes,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaDeBridgeDln((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,bytes,bytes,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DLN_SOURCE" | "getDeBridgeChainId" | "initDeBridgeDln" | "setDeBridgeChainId" | "startBridgeTokensViaDeBridgeDln" | "swapAndStartBridgeTokensViaDeBridgeDln"): FunctionFragment;
    encodeFunctionData(functionFragment: "DLN_SOURCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeBridgeChainId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initDeBridgeDln", values: [DeBridgeDlnFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setDeBridgeChainId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaDeBridgeDln", values: [ILiFi.BridgeDataStruct, DeBridgeDlnFacet.DeBridgeDlnDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaDeBridgeDln", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        DeBridgeDlnFacet.DeBridgeDlnDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "DLN_SOURCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeBridgeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initDeBridgeDln", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeBridgeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaDeBridgeDln", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaDeBridgeDln", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
        "DeBridgeChainIdSet(uint256,uint256)": EventFragment;
        "DeBridgeInitialized(tuple[])": EventFragment;
        "DlnOrderCreated(bytes32)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
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
export interface BridgeToNonEVMChainBytes32EventObject {
    transactionId: string;
    destinationChainId: BigNumber;
    receiver: string;
}
export type BridgeToNonEVMChainBytes32Event = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainBytes32EventObject>;
export type BridgeToNonEVMChainBytes32EventFilter = TypedEventFilter<BridgeToNonEVMChainBytes32Event>;
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
        DLN_SOURCE(overrides?: CallOverrides): Promise<[string]>;
        getDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, _deBridgeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DLN_SOURCE(overrides?: CallOverrides): Promise<string>;
    getDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, _deBridgeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DLN_SOURCE(overrides?: CallOverrides): Promise<string>;
        getDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, _deBridgeChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        BridgeToNonEVMChainBytes32(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        "DeBridgeChainIdSet(uint256,uint256)"(chainId?: PromiseOrValue<BigNumberish> | null, deBridgeChainId?: null): DeBridgeChainIdSetEventFilter;
        DeBridgeChainIdSet(chainId?: PromiseOrValue<BigNumberish> | null, deBridgeChainId?: null): DeBridgeChainIdSetEventFilter;
        "DeBridgeInitialized(tuple[])"(chainIdConfigs?: null): DeBridgeInitializedEventFilter;
        DeBridgeInitialized(chainIdConfigs?: null): DeBridgeInitializedEventFilter;
        "DlnOrderCreated(bytes32)"(orderId?: PromiseOrValue<BytesLike> | null): DlnOrderCreatedEventFilter;
        DlnOrderCreated(orderId?: PromiseOrValue<BytesLike> | null): DlnOrderCreatedEventFilter;
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
        DLN_SOURCE(overrides?: CallOverrides): Promise<BigNumber>;
        getDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, _deBridgeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DLN_SOURCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initDeBridgeDln(chainIdConfigs: DeBridgeDlnFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDeBridgeChainId(_chainId: PromiseOrValue<BigNumberish>, _deBridgeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaDeBridgeDln(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _deBridgeData: DeBridgeDlnFacet.DeBridgeDlnDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
