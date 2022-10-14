import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace StargateFacet {
    type PoolIdConfigStruct = {
        token: string;
        poolId: BigNumberish;
    };
    type PoolIdConfigStructOutput = [string, number] & {
        token: string;
        poolId: number;
    };
    type ChainIdConfigStruct = {
        chainId: BigNumberish;
        layerZeroChainId: BigNumberish;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        layerZeroChainId: number;
    };
    type StargateDataStruct = {
        dstPoolId: BigNumberish;
        minAmountLD: BigNumberish;
        dstGasForCall: BigNumberish;
        lzFee: BigNumberish;
        refundAddress: string;
        callTo: BytesLike;
        callData: BytesLike;
    };
    type StargateDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        dstPoolId: BigNumber;
        minAmountLD: BigNumber;
        dstGasForCall: BigNumber;
        lzFee: BigNumber;
        refundAddress: string;
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
export interface StargateFacetInterface extends utils.Interface {
    functions: {
        "initStargate((address,uint16)[],(uint256,uint16)[])": FunctionFragment;
        "quoteLayerZeroFee(uint256,(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "setLayerZeroChainId(uint256,uint16)": FunctionFragment;
        "setStargatePoolId(address,uint16)": FunctionFragment;
        "startBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initStargate" | "quoteLayerZeroFee" | "setLayerZeroChainId" | "setStargatePoolId" | "startBridgeTokensViaStargate" | "swapAndStartBridgeTokensViaStargate"): FunctionFragment;
    encodeFunctionData(functionFragment: "initStargate", values: [
        StargateFacet.PoolIdConfigStruct[],
        StargateFacet.ChainIdConfigStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [BigNumberish, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "setLayerZeroChainId", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setStargatePoolId", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaStargate", values: [ILiFi.BridgeDataStruct, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaStargate", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        StargateFacet.StargateDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStargatePoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaStargate", data: BytesLike): Result;
    events: {
        "LayerZeroChainIdSet(uint256,uint16)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "StargateInitialized(tuple[],tuple[])": EventFragment;
        "StargatePoolIdSet(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LayerZeroChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargatePoolIdSet"): EventFragment;
}
export interface LayerZeroChainIdSetEventObject {
    chainId: BigNumber;
    layerZeroChainId: number;
}
export declare type LayerZeroChainIdSetEvent = TypedEvent<[
    BigNumber,
    number
], LayerZeroChainIdSetEventObject>;
export declare type LayerZeroChainIdSetEventFilter = TypedEventFilter<LayerZeroChainIdSetEvent>;
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
export interface StargateInitializedEventObject {
    poolIdConfigs: StargateFacet.PoolIdConfigStructOutput[];
    chainIdConfigs: StargateFacet.ChainIdConfigStructOutput[];
}
export declare type StargateInitializedEvent = TypedEvent<[
    StargateFacet.PoolIdConfigStructOutput[],
    StargateFacet.ChainIdConfigStructOutput[]
], StargateInitializedEventObject>;
export declare type StargateInitializedEventFilter = TypedEventFilter<StargateInitializedEvent>;
export interface StargatePoolIdSetEventObject {
    token: string;
    poolId: BigNumber;
}
export declare type StargatePoolIdSetEvent = TypedEvent<[
    string,
    BigNumber
], StargatePoolIdSetEventObject>;
export declare type StargatePoolIdSetEventFilter = TypedEventFilter<StargatePoolIdSetEvent>;
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
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStargatePoolId(_token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStargatePoolId(_token: string, _poolId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setStargatePoolId(_token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LayerZeroChainIdSet(uint256,uint16)"(chainId?: BigNumberish | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        LayerZeroChainIdSet(chainId?: BigNumberish | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "StargateInitialized(tuple[],tuple[])"(poolIdConfigs?: null, chainIdConfigs?: null): StargateInitializedEventFilter;
        StargateInitialized(poolIdConfigs?: null, chainIdConfigs?: null): StargateInitializedEventFilter;
        "StargatePoolIdSet(address,uint256)"(token?: string | null, poolId?: null): StargatePoolIdSetEventFilter;
        StargatePoolIdSet(token?: string | null, poolId?: null): StargatePoolIdSetEventFilter;
    };
    estimateGas: {
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStargatePoolId(_token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_destinationChainId: BigNumberish, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setLayerZeroChainId(_chainId: BigNumberish, _layerZeroChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStargatePoolId(_token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
