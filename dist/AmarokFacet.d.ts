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
export declare namespace AmarokFacet {
    type AmarokDataStruct = {
        callData: PromiseOrValue<BytesLike>;
        callTo: PromiseOrValue<string>;
        relayerFee: PromiseOrValue<BigNumberish>;
        slippageTol: PromiseOrValue<BigNumberish>;
        delegate: PromiseOrValue<string>;
        destChainDomainId: PromiseOrValue<BigNumberish>;
    };
    type AmarokDataStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        number
    ] & {
        callData: string;
        callTo: string;
        relayerFee: BigNumber;
        slippageTol: BigNumber;
        delegate: string;
        destChainDomainId: number;
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
export interface AmarokFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensViaAmarok((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,address,uint256,uint256,address,uint32))": FunctionFragment;
        "swapAndStartBridgeTokensViaAmarok((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,address,uint256,uint256,address,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "startBridgeTokensViaAmarok" | "swapAndStartBridgeTokensViaAmarok"): FunctionFragment;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAmarok", values: [ILiFi.BridgeDataStruct, AmarokFacet.AmarokDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaAmarok", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        AmarokFacet.AmarokDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAmarok", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaAmarok", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
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
export interface AmarokFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AmarokFacetInterface;
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
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: CallOverrides): Promise<void>;
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
    };
    estimateGas: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
