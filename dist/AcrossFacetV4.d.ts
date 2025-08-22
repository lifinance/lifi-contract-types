import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace AcrossFacetV4 {
    type AcrossV4DataStruct = {
        receiverAddress: PromiseOrValue<BytesLike>;
        refundAddress: PromiseOrValue<BytesLike>;
        sendingAssetId: PromiseOrValue<BytesLike>;
        receivingAssetId: PromiseOrValue<BytesLike>;
        outputAmount: PromiseOrValue<BigNumberish>;
        outputAmountMultiplier: PromiseOrValue<BigNumberish>;
        exclusiveRelayer: PromiseOrValue<BytesLike>;
        quoteTimestamp: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        exclusivityDeadline: PromiseOrValue<BigNumberish>;
        message: PromiseOrValue<BytesLike>;
    };
    type AcrossV4DataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        number,
        number,
        number,
        string
    ] & {
        receiverAddress: string;
        refundAddress: string;
        sendingAssetId: string;
        receivingAssetId: string;
        outputAmount: BigNumber;
        outputAmountMultiplier: BigNumber;
        exclusiveRelayer: string;
        quoteTimestamp: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
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
export interface AcrossFacetV4Interface extends utils.Interface {
    functions: {
        "ACROSS_CHAIN_ID_SOLANA()": FunctionFragment;
        "SPOKEPOOL()": FunctionFragment;
        "WRAPPED_NATIVE()": FunctionFragment;
        "startBridgeTokensViaAcrossV4((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes32,bytes32,bytes32,bytes32,uint256,uint128,bytes32,uint32,uint32,uint32,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaAcrossV4((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes32,bytes32,bytes32,bytes32,uint256,uint128,bytes32,uint32,uint32,uint32,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ACROSS_CHAIN_ID_SOLANA" | "SPOKEPOOL" | "WRAPPED_NATIVE" | "startBridgeTokensViaAcrossV4" | "swapAndStartBridgeTokensViaAcrossV4"): FunctionFragment;
    encodeFunctionData(functionFragment: "ACROSS_CHAIN_ID_SOLANA", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPOKEPOOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "WRAPPED_NATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossV4", values: [ILiFi.BridgeDataStruct, AcrossFacetV4.AcrossV4DataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaAcrossV4", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        AcrossFacetV4.AcrossV4DataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "ACROSS_CHAIN_ID_SOLANA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPOKEPOOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WRAPPED_NATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossV4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaAcrossV4", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface AssetSwappedEventObject {
    transactionId: string;
    dex: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
    timestamp: BigNumber;
}
export type AssetSwappedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AssetSwappedEventObject>;
export type AssetSwappedEventFilter = TypedEventFilter<AssetSwappedEvent>;
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
export interface AcrossFacetV4 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossFacetV4Interface;
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
        ACROSS_CHAIN_ID_SOLANA(overrides?: CallOverrides): Promise<[BigNumber]>;
        SPOKEPOOL(overrides?: CallOverrides): Promise<[string]>;
        WRAPPED_NATIVE(overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ACROSS_CHAIN_ID_SOLANA(overrides?: CallOverrides): Promise<BigNumber>;
    SPOKEPOOL(overrides?: CallOverrides): Promise<string>;
    WRAPPED_NATIVE(overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ACROSS_CHAIN_ID_SOLANA(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKEPOOL(overrides?: CallOverrides): Promise<string>;
        WRAPPED_NATIVE(overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        BridgeToNonEVMChainBytes32(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
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
        ACROSS_CHAIN_ID_SOLANA(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKEPOOL(overrides?: CallOverrides): Promise<BigNumber>;
        WRAPPED_NATIVE(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ACROSS_CHAIN_ID_SOLANA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPOKEPOOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WRAPPED_NATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaAcrossV4(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _acrossData: AcrossFacetV4.AcrossV4DataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
