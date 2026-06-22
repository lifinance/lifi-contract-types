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
export declare namespace LiFiIntentEscrowFacetV2 {
    type LiFiIntentEscrowDataV2Struct = {
        dstCallReceiver: PromiseOrValue<BytesLike>;
        recipient: PromiseOrValue<BytesLike>;
        depositAndRefundAddress: PromiseOrValue<string>;
        nonce: PromiseOrValue<BigNumberish>;
        expires: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        inputOracle: PromiseOrValue<string>;
        outputOracle: PromiseOrValue<BytesLike>;
        outputSettler: PromiseOrValue<BytesLike>;
        outputToken: PromiseOrValue<BytesLike>;
        outputAmountMultiplier: PromiseOrValue<BigNumberish>;
        dstCallSwapData: LibSwap.SwapDataStruct[];
        outputContext: PromiseOrValue<BytesLike>;
    };
    type LiFiIntentEscrowDataV2StructOutput = [
        string,
        string,
        string,
        BigNumber,
        number,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        LibSwap.SwapDataStructOutput[],
        string
    ] & {
        dstCallReceiver: string;
        recipient: string;
        depositAndRefundAddress: string;
        nonce: BigNumber;
        expires: number;
        fillDeadline: number;
        inputOracle: string;
        outputOracle: string;
        outputSettler: string;
        outputToken: string;
        outputAmountMultiplier: BigNumber;
        dstCallSwapData: LibSwap.SwapDataStructOutput[];
        outputContext: string;
    };
}
export interface LiFiIntentEscrowFacetV2Interface extends utils.Interface {
    functions: {
        "LIFI_INTENT_ESCROW_SETTLER()": FunctionFragment;
        "MULTIPLIER_BASE()": FunctionFragment;
        "startBridgeTokensViaLiFiIntentEscrowV2((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes32,bytes32,address,uint256,uint32,uint32,address,bytes32,bytes32,bytes32,uint128,(address,address,address,address,uint256,bytes,bool)[],bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaLiFiIntentEscrowV2((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes32,bytes32,address,uint256,uint32,uint32,address,bytes32,bytes32,bytes32,uint128,(address,address,address,address,uint256,bytes,bool)[],bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "LIFI_INTENT_ESCROW_SETTLER" | "MULTIPLIER_BASE" | "startBridgeTokensViaLiFiIntentEscrowV2" | "swapAndStartBridgeTokensViaLiFiIntentEscrowV2"): FunctionFragment;
    encodeFunctionData(functionFragment: "LIFI_INTENT_ESCROW_SETTLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "MULTIPLIER_BASE", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaLiFiIntentEscrowV2", values: [
        ILiFi.BridgeDataStruct,
        LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaLiFiIntentEscrowV2", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct
    ]): string;
    decodeFunctionResult(functionFragment: "LIFI_INTENT_ESCROW_SETTLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MULTIPLIER_BASE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaLiFiIntentEscrowV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaLiFiIntentEscrowV2", data: BytesLike): Result;
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
export interface LiFiIntentEscrowFacetV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiFiIntentEscrowFacetV2Interface;
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
        LIFI_INTENT_ESCROW_SETTLER(overrides?: CallOverrides): Promise<[string]>;
        MULTIPLIER_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;
        startBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    LIFI_INTENT_ESCROW_SETTLER(overrides?: CallOverrides): Promise<string>;
    MULTIPLIER_BASE(overrides?: CallOverrides): Promise<BigNumber>;
    startBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        LIFI_INTENT_ESCROW_SETTLER(overrides?: CallOverrides): Promise<string>;
        MULTIPLIER_BASE(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: CallOverrides): Promise<void>;
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
        LIFI_INTENT_ESCROW_SETTLER(overrides?: CallOverrides): Promise<BigNumber>;
        MULTIPLIER_BASE(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        LIFI_INTENT_ESCROW_SETTLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MULTIPLIER_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaLiFiIntentEscrowV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
