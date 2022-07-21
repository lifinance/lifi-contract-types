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
export declare namespace PolygonBridgeFacet {
    type BridgeDataStruct = {
        assetId: string;
        amount: BigNumberish;
        receiver: string;
    };
    type BridgeDataStructOutput = [string, BigNumber, string] & {
        assetId: string;
        amount: BigNumber;
        receiver: string;
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
export interface PolygonBridgeFacetInterface extends utils.Interface {
    functions: {
        "initPolygonBridge(address,address)": FunctionFragment;
        "startBridgeTokensViaPolygonBridge((bytes32,string,address,address,address,address,uint256,uint256),(address,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaPolygonBridge((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initPolygonBridge" | "startBridgeTokensViaPolygonBridge" | "swapAndStartBridgeTokensViaPolygonBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "initPolygonBridge", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaPolygonBridge", values: [ILiFi.LiFiDataStruct, PolygonBridgeFacet.BridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaPolygonBridge", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        PolygonBridgeFacet.BridgeDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initPolygonBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaPolygonBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaPolygonBridge", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
        "PolygonBridgeInitialized(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PolygonBridgeInitialized"): EventFragment;
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
export interface PolygonBridgeInitializedEventObject {
    rootChainManager: string;
    erc20Predicate: string;
}
export declare type PolygonBridgeInitializedEvent = TypedEvent<[
    string,
    string
], PolygonBridgeInitializedEventObject>;
export declare type PolygonBridgeInitializedEventFilter = TypedEventFilter<PolygonBridgeInitializedEvent>;
export interface PolygonBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PolygonBridgeFacetInterface;
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
        initPolygonBridge(_rootChainManager: string, _erc20Predicate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initPolygonBridge(_rootChainManager: string, _erc20Predicate: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initPolygonBridge(_rootChainManager: string, _erc20Predicate: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        "PolygonBridgeInitialized(address,address)"(rootChainManager?: null, erc20Predicate?: null): PolygonBridgeInitializedEventFilter;
        PolygonBridgeInitialized(rootChainManager?: null, erc20Predicate?: null): PolygonBridgeInitializedEventFilter;
    };
    estimateGas: {
        initPolygonBridge(_rootChainManager: string, _erc20Predicate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initPolygonBridge(_rootChainManager: string, _erc20Predicate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaPolygonBridge(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _bridgeData: PolygonBridgeFacet.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
