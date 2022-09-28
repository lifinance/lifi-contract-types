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
export declare namespace AmarokFacet {
    type AmarokDataStruct = {
        dstChainDomain: BigNumberish;
        callData: BytesLike;
        forceSlow: boolean;
        receiveLocal: boolean;
        callback: string;
        callbackFee: BigNumberish;
        relayerFee: BigNumberish;
        slippageTol: BigNumberish;
        originMinOut: BigNumberish;
    };
    type AmarokDataStructOutput = [
        number,
        string,
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dstChainDomain: number;
        callData: string;
        forceSlow: boolean;
        receiveLocal: boolean;
        callback: string;
        callbackFee: BigNumber;
        relayerFee: BigNumber;
        slippageTol: BigNumber;
        originMinOut: BigNumber;
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
export interface AmarokFacetInterface extends utils.Interface {
    functions: {
        "startBridgeTokensViaAmarok((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,bytes,bool,bool,address,uint256,uint256,uint256,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaAmarok((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint32,bytes,bool,bool,address,uint256,uint256,uint256,uint256))": FunctionFragment;
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
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: ILiFi.BridgeDataStruct | null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        startBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaAmarok(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _amarokData: AmarokFacet.AmarokDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
