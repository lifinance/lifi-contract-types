import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
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
export declare namespace ITransactionManager {
    type InvariantTransactionDataStruct = {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
    };
    type InvariantTransactionDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        callDataHash: string;
        transactionId: string;
    };
}
export declare namespace NXTPFacet {
    type NXTPDataStruct = {
        invariantData: ITransactionManager.InvariantTransactionDataStruct;
        expiry: BigNumberish;
        encryptedCallData: BytesLike;
        encodedBid: BytesLike;
        bidSignature: BytesLike;
        encodedMeta: BytesLike;
    };
    type NXTPDataStructOutput = [
        ITransactionManager.InvariantTransactionDataStructOutput,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        invariantData: ITransactionManager.InvariantTransactionDataStructOutput;
        expiry: BigNumber;
        encryptedCallData: string;
        encodedBid: string;
        bidSignature: string;
        encodedMeta: string;
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
export interface NXTPFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensViaNXTP((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaNXTP((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "startBridgeTokensViaNXTP" | "swapAndStartBridgeTokensViaNXTP"): FunctionFragment;
    encodeFunctionData(functionFragment: "startBridgeTokensViaNXTP", values: [ILiFi.BridgeDataStruct, NXTPFacet.NXTPDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaNXTP", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        NXTPFacet.NXTPDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaNXTP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaNXTP", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
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
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface NXTPFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NXTPFacetInterface;
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
        startBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        startBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaNXTP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: NXTPFacet.NXTPDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
