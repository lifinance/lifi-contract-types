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
export declare namespace StargateFacet {
    type StargateDataStruct = {
        router: string;
        dstChainId: BigNumberish;
        srcPoolId: BigNumberish;
        dstPoolId: BigNumberish;
        amountLD: BigNumberish;
        minAmountLD: BigNumberish;
        dstGasForCall: BigNumberish;
        callTo: BytesLike;
        callData: BytesLike;
    };
    type StargateDataStructOutput = [
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        router: string;
        dstChainId: number;
        srcPoolId: BigNumber;
        dstPoolId: BigNumber;
        amountLD: BigNumber;
        minAmountLD: BigNumber;
        dstGasForCall: BigNumber;
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
export interface StargateFacetInterface extends utils.Interface {
    functions: {
        "completeBridgeTokensViaStargate((bytes32,string,address,address,address,address,uint256,uint256),address,address,uint256)": FunctionFragment;
        "initStargate(address)": FunctionFragment;
        "quoteLayerZeroFee((address,uint16,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
        "startBridgeTokensViaStargate((bytes32,string,address,address,address,address,uint256,uint256),(address,uint16,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "swapAndCompleteBridgeTokensViaStargate((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],address,address)": FunctionFragment;
        "swapAndStartBridgeTokensViaStargate((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,uint16,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "completeBridgeTokensViaStargate" | "initStargate" | "quoteLayerZeroFee" | "sgReceive" | "startBridgeTokensViaStargate" | "swapAndCompleteBridgeTokensViaStargate" | "swapAndStartBridgeTokensViaStargate"): FunctionFragment;
    encodeFunctionData(functionFragment: "completeBridgeTokensViaStargate", values: [ILiFi.LiFiDataStruct, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initStargate", values: [string]): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "sgReceive", values: [
        BigNumberish,
        BytesLike,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaStargate", values: [ILiFi.LiFiDataStruct, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokensViaStargate", values: [ILiFi.LiFiDataStruct, LibSwap.SwapDataStruct[], string, string]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaStargate", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        StargateFacet.StargateDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "completeBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaStargate", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
        "StargateInitialized(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateInitialized"): EventFragment;
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
export interface StargateInitializedEventObject {
    stargateRoutert: string;
}
export declare type StargateInitializedEvent = TypedEvent<[
    string
], StargateInitializedEventObject>;
export declare type StargateInitializedEventFilter = TypedEventFilter<StargateInitializedEvent>;
export interface StargateFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateFacetInterface;
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
        completeBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _assetId: string, _receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initStargate(_stargateRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteLayerZeroFee(_stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, _amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _finalAssetId: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    completeBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _assetId: string, _receiver: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initStargate(_stargateRouter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteLayerZeroFee(_stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, _amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _finalAssetId: string, _receiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        completeBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _assetId: string, _receiver: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initStargate(_stargateRouter: string, overrides?: CallOverrides): Promise<void>;
        quoteLayerZeroFee(_stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, _amountLD: BigNumberish, _payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _finalAssetId: string, _receiver: string, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        "StargateInitialized(address)"(stargateRoutert?: null): StargateInitializedEventFilter;
        StargateInitialized(stargateRoutert?: null): StargateInitializedEventFilter;
    };
    estimateGas: {
        completeBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _assetId: string, _receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initStargate(_stargateRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteLayerZeroFee(_stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, _amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _finalAssetId: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        completeBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _assetId: string, _receiver: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initStargate(_stargateRouter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sgReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, _amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _finalAssetId: string, _receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
