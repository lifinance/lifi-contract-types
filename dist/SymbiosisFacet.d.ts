import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
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
export declare namespace SymbiosisFacet {
    type SymbiosisDataStruct = {
        firstSwapCalldata: BytesLike;
        secondSwapCalldata: BytesLike;
        intermediateToken: string;
        firstDexRouter: string;
        secondDexRouter: string;
        approvedTokens: string[];
        callTo: string;
        callData: BytesLike;
    };
    type SymbiosisDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string[],
        string,
        string
    ] & {
        firstSwapCalldata: string;
        secondSwapCalldata: string;
        intermediateToken: string;
        firstDexRouter: string;
        secondDexRouter: string;
        approvedTokens: string[];
        callTo: string;
        callData: string;
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
export interface SymbiosisFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensViaSymbiosis((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,bytes,address,address,address,address[],address,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaSymbiosis((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,bytes,address,address,address,address[],address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "startBridgeTokensViaSymbiosis" | "swapAndStartBridgeTokensViaSymbiosis"): FunctionFragment;
    encodeFunctionData(functionFragment: "startBridgeTokensViaSymbiosis", values: [ILiFi.BridgeDataStruct, SymbiosisFacet.SymbiosisDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaSymbiosis", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        SymbiosisFacet.SymbiosisDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaSymbiosis", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaSymbiosis", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
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
export interface SymbiosisFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SymbiosisFacetInterface;
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
        startBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: CallOverrides): Promise<void>;
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
    };
    estimateGas: {
        startBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaSymbiosis(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _symbiosisData: SymbiosisFacet.SymbiosisDataStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
