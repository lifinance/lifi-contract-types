import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export declare namespace StargateFacet {
    type PoolIdConfigStruct = {
        token: PromiseOrValue<string>;
        poolId: PromiseOrValue<BigNumberish>;
    };
    type PoolIdConfigStructOutput = [string, number] & {
        token: string;
        poolId: number;
    };
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        layerZeroChainId: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        layerZeroChainId: number;
    };
    type StargateDataStruct = {
        dstPoolId: PromiseOrValue<BigNumberish>;
        minAmountLD: PromiseOrValue<BigNumberish>;
        dstGasForCall: PromiseOrValue<BigNumberish>;
        lzFee: PromiseOrValue<BigNumberish>;
        refundAddress: PromiseOrValue<string>;
        callTo: PromiseOrValue<BytesLike>;
        callData: PromiseOrValue<BytesLike>;
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
export interface TestStargateFacetInterface extends utils.Interface {
    functions: {
        "addDex(address)": FunctionFragment;
        "initStargate((address,uint16)[],(uint256,uint16)[])": FunctionFragment;
        "quoteLayerZeroFee(uint256,(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "setFunctionApprovalBySignature(bytes4)": FunctionFragment;
        "setLayerZeroChainId(uint256,uint16)": FunctionFragment;
        "setStargatePoolId(address,uint16)": FunctionFragment;
        "startBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaStargate((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,address,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDex" | "initStargate" | "quoteLayerZeroFee" | "setFunctionApprovalBySignature" | "setLayerZeroChainId" | "setStargatePoolId" | "startBridgeTokensViaStargate" | "swapAndStartBridgeTokensViaStargate"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initStargate", values: [
        StargateFacet.PoolIdConfigStruct[],
        StargateFacet.ChainIdConfigStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [PromiseOrValue<BigNumberish>, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setLayerZeroChainId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setStargatePoolId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaStargate", values: [ILiFi.BridgeDataStruct, StargateFacet.StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaStargate", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        StargateFacet.StargateDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "addDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFunctionApprovalBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStargatePoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaStargate", data: BytesLike): Result;
    events: {
        "LayerZeroChainIdSet(uint256,uint16)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "StargateInitialized(tuple[],tuple[])": EventFragment;
        "StargatePoolIdSet(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LayerZeroChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
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
export interface TestStargateFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestStargateFacetInterface;
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
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        quoteLayerZeroFee(_destinationChainId: PromiseOrValue<BigNumberish>, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStargatePoolId(_token: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    quoteLayerZeroFee(_destinationChainId: PromiseOrValue<BigNumberish>, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStargatePoolId(_token: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDex(_dex: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        quoteLayerZeroFee(_destinationChainId: PromiseOrValue<BigNumberish>, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setStargatePoolId(_token: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LayerZeroChainIdSet(uint256,uint16)"(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        LayerZeroChainIdSet(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "StargateInitialized(tuple[],tuple[])"(poolIdConfigs?: null, chainIdConfigs?: null): StargateInitializedEventFilter;
        StargateInitialized(poolIdConfigs?: null, chainIdConfigs?: null): StargateInitializedEventFilter;
        "StargatePoolIdSet(address,uint256)"(token?: PromiseOrValue<string> | null, poolId?: null): StargatePoolIdSetEventFilter;
        StargatePoolIdSet(token?: PromiseOrValue<string> | null, poolId?: null): StargatePoolIdSetEventFilter;
    };
    estimateGas: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        quoteLayerZeroFee(_destinationChainId: PromiseOrValue<BigNumberish>, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStargatePoolId(_token: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initStargate(poolIdConfigs: StargateFacet.PoolIdConfigStruct[], chainIdConfigs: StargateFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(_destinationChainId: PromiseOrValue<BigNumberish>, _stargateData: StargateFacet.StargateDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStargatePoolId(_token: PromiseOrValue<string>, _poolId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaStargate(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _stargateData: StargateFacet.StargateDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
