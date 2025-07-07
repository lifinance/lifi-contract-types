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
export declare namespace LIFIIntentFacet {
    type LIFIIntentDataStruct = {
        receiverAddress: PromiseOrValue<BytesLike>;
        inputAssetId: PromiseOrValue<BigNumberish>;
        user: PromiseOrValue<string>;
        nonce: PromiseOrValue<BigNumberish>;
        expires: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        inputOracle: PromiseOrValue<string>;
        outputOracle: PromiseOrValue<BytesLike>;
        outputSettler: PromiseOrValue<BytesLike>;
        outputToken: PromiseOrValue<BytesLike>;
        outputAmount: PromiseOrValue<BigNumberish>;
        outputCall: PromiseOrValue<BytesLike>;
        outputContext: PromiseOrValue<BytesLike>;
        expectedClaimHash: PromiseOrValue<BytesLike>;
        broadcast: PromiseOrValue<boolean>;
    };
    type LIFIIntentDataStructOutput = [
        string,
        BigNumber,
        string,
        BigNumber,
        number,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        string,
        boolean
    ] & {
        receiverAddress: string;
        inputAssetId: BigNumber;
        user: string;
        nonce: BigNumber;
        expires: number;
        fillDeadline: number;
        inputOracle: string;
        outputOracle: string;
        outputSettler: string;
        outputToken: string;
        outputAmount: BigNumber;
        outputCall: string;
        outputContext: string;
        expectedClaimHash: string;
        broadcast: boolean;
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
export interface LIFIIntentFacetInterface extends utils.Interface {
    functions: {
        "COMPACT()": FunctionFragment;
        "LIFI_INTENT_COMPACT_SETTLER()": FunctionFragment;
        "startBridgeTokensViaLIFIIntent((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes32,uint256,address,uint256,uint32,uint32,address,bytes32,bytes32,bytes32,uint256,bytes,bytes,bytes32,bool))": FunctionFragment;
        "swapAndStartBridgeTokensViaLIFIIntent((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes32,uint256,address,uint256,uint32,uint32,address,bytes32,bytes32,bytes32,uint256,bytes,bytes,bytes32,bool))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "COMPACT" | "LIFI_INTENT_COMPACT_SETTLER" | "startBridgeTokensViaLIFIIntent" | "swapAndStartBridgeTokensViaLIFIIntent"): FunctionFragment;
    encodeFunctionData(functionFragment: "COMPACT", values?: undefined): string;
    encodeFunctionData(functionFragment: "LIFI_INTENT_COMPACT_SETTLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaLIFIIntent", values: [ILiFi.BridgeDataStruct, LIFIIntentFacet.LIFIIntentDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaLIFIIntent", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        LIFIIntentFacet.LIFIIntentDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "COMPACT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "LIFI_INTENT_COMPACT_SETTLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaLIFIIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaLIFIIntent", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
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
export declare type AssetSwappedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AssetSwappedEventObject>;
export declare type AssetSwappedEventFilter = TypedEventFilter<AssetSwappedEvent>;
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
export interface LIFIIntentFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LIFIIntentFacetInterface;
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
        COMPACT(overrides?: CallOverrides): Promise<[string]>;
        LIFI_INTENT_COMPACT_SETTLER(overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    COMPACT(overrides?: CallOverrides): Promise<string>;
    LIFI_INTENT_COMPACT_SETTLER(overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        COMPACT(overrides?: CallOverrides): Promise<string>;
        LIFI_INTENT_COMPACT_SETTLER(overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
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
        COMPACT(overrides?: CallOverrides): Promise<BigNumber>;
        LIFI_INTENT_COMPACT_SETTLER(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        COMPACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        LIFI_INTENT_COMPACT_SETTLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaLIFIIntent(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _lifiIntentData: LIFIIntentFacet.LIFIIntentDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
