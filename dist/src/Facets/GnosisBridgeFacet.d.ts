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
export interface GnosisBridgeFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensViaXDaiBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": FunctionFragment;
        "swapAndStartBridgeTokensViaXDaiBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "startBridgeTokensViaXDaiBridge" | "swapAndStartBridgeTokensViaXDaiBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "startBridgeTokensViaXDaiBridge", values: [ILiFi.BridgeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaXDaiBridge", values: [ILiFi.BridgeDataStruct, LibSwap.SwapDataStruct[]]): string;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaXDaiBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaXDaiBridge", data: BytesLike): Result;
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
export interface GnosisBridgeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GnosisBridgeFacetInterface;
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
        startBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        startBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaXDaiBridge(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
