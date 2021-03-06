import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace ILiFi {
    type LiFiDataStruct = {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
    };
    type LiFiDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        transactionId: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumber;
        amount: BigNumber;
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
    type PrepareArgsStruct = {
        invariantData: ITransactionManager.InvariantTransactionDataStruct;
        amount: BigNumberish;
        expiry: BigNumberish;
        encryptedCallData: BytesLike;
        encodedBid: BytesLike;
        bidSignature: BytesLike;
        encodedMeta: BytesLike;
    };
    type PrepareArgsStructOutput = [
        ITransactionManager.InvariantTransactionDataStructOutput,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        invariantData: ITransactionManager.InvariantTransactionDataStructOutput;
        amount: BigNumber;
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
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
    };
}
export interface NXTPFacetInterface extends utils.Interface {
    functions: {
        "completeBridgeTokensViaNXTP((bytes32,string,address,address,address,address,uint256,uint256),address,address,uint256)": FunctionFragment;
        "getNXTPTransactionManager()": FunctionFragment;
        "initNXTP(address)": FunctionFragment;
        "startBridgeTokensViaNXTP((bytes32,string,address,address,address,address,uint256,uint256),((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
        "swapAndCompleteBridgeTokensViaNXTP((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],address,address)": FunctionFragment;
        "swapAndStartBridgeTokensViaNXTP((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "completeBridgeTokensViaNXTP" | "getNXTPTransactionManager" | "initNXTP" | "startBridgeTokensViaNXTP" | "swapAndCompleteBridgeTokensViaNXTP" | "swapAndStartBridgeTokensViaNXTP"): FunctionFragment;
    encodeFunctionData(functionFragment: "completeBridgeTokensViaNXTP", values: [ILiFi.LiFiDataStruct, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNXTPTransactionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "initNXTP", values: [string]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaNXTP", values: [ILiFi.LiFiDataStruct, ITransactionManager.PrepareArgsStruct]): string;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokensViaNXTP", values: [ILiFi.LiFiDataStruct, LibSwap.SwapDataStruct[], string, string]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaNXTP", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        ITransactionManager.PrepareArgsStruct
    ]): string;
    decodeFunctionResult(functionFragment: "completeBridgeTokensViaNXTP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNXTPTransactionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initNXTP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaNXTP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokensViaNXTP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaNXTP", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
        "NXTPInitialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NXTPInitialized"): EventFragment;
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
    transactionId: string;
    bridge: string;
    bridgeData: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    hasSourceSwap: boolean;
    hasDestinationCall: boolean;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
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
    boolean,
    boolean
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface NXTPInitializedEventObject {
    txMgrAddr: string;
}
export declare type NXTPInitializedEvent = TypedEvent<[
    string
], NXTPInitializedEventObject>;
export declare type NXTPInitializedEventFilter = TypedEventFilter<NXTPInitializedEvent>;
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
        completeBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, assetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getNXTPTransactionManager(overrides?: CallOverrides): Promise<[string]>;
        initNXTP(_txMgrAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndCompleteBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], finalAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    completeBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, assetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getNXTPTransactionManager(overrides?: CallOverrides): Promise<string>;
    initNXTP(_txMgrAddr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndCompleteBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], finalAssetId: string, receiver: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        completeBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, assetId: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getNXTPTransactionManager(overrides?: CallOverrides): Promise<string>;
        initNXTP(_txMgrAddr: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: CallOverrides): Promise<void>;
        swapAndCompleteBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], finalAssetId: string, receiver: string, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        "NXTPInitialized(address)"(txMgrAddr?: null): NXTPInitializedEventFilter;
        NXTPInitialized(txMgrAddr?: null): NXTPInitializedEventFilter;
    };
    estimateGas: {
        completeBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, assetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getNXTPTransactionManager(overrides?: CallOverrides): Promise<BigNumber>;
        initNXTP(_txMgrAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndCompleteBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], finalAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        completeBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, assetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getNXTPTransactionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initNXTP(_txMgrAddr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndCompleteBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], finalAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaNXTP(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _nxtpData: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
