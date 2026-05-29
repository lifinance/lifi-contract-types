import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace SupersetFacet {
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        lzEid: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        lzEid: number;
    };
    type SupersetDataStruct = {
        path: PromiseOrValue<BytesLike>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        amountOutMinPercent: PromiseOrValue<BigNumberish>;
        refundAddress: PromiseOrValue<string>;
        fallbackEoA: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        toEid: PromiseOrValue<BigNumberish>;
        options: PromiseOrValue<BytesLike>;
        lzFee: PromiseOrValue<BigNumberish>;
    };
    type SupersetDataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        number,
        string,
        BigNumber
    ] & {
        path: string;
        amountOutMin: BigNumber;
        amountOutMinPercent: BigNumber;
        refundAddress: string;
        fallbackEoA: string;
        deadline: BigNumber;
        toEid: number;
        options: string;
        lzFee: BigNumber;
    };
}
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
export interface SupersetFacetInterface extends utils.Interface {
    functions: {
        "IS_HUB()": FunctionFragment;
        "POOL_MANAGER()": FunctionFragment;
        "getChainIdToEid(uint256)": FunctionFragment;
        "initSuperset((uint256,uint32)[])": FunctionFragment;
        "setChainIdToEid((uint256,uint32)[])": FunctionFragment;
        "startBridgeTokensViaSuperset((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,uint256,uint64,address,address,uint256,uint32,bytes,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaSuperset((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,uint256,uint64,address,address,uint256,uint32,bytes,uint256))": FunctionFragment;
        "unsetChainIdToEid(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_HUB" | "POOL_MANAGER" | "getChainIdToEid" | "initSuperset" | "setChainIdToEid" | "startBridgeTokensViaSuperset" | "swapAndStartBridgeTokensViaSuperset" | "unsetChainIdToEid"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainIdToEid", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initSuperset", values: [SupersetFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setChainIdToEid", values: [SupersetFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaSuperset", values: [ILiFi.BridgeDataStruct, SupersetFacet.SupersetDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaSuperset", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        SupersetFacet.SupersetDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "unsetChainIdToEid", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "IS_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIdToEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initSuperset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainIdToEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaSuperset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaSuperset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsetChainIdToEid", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
        "ChainIdToEidSet(uint256,uint32)": EventFragment;
        "ChainIdToEidUnset(uint256)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "SupersetChainMappingsInitialized(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainIdToEidSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainIdToEidUnset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupersetChainMappingsInitialized"): EventFragment;
}
export interface AssetSwappedEventObject {
    transactionId: string;
    dex: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
    timestamp: BigNumber;
}
export type AssetSwappedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AssetSwappedEventObject>;
export type AssetSwappedEventFilter = TypedEventFilter<AssetSwappedEvent>;
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    destinationChainId: BigNumber;
    receiver: string;
}
export type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainEventObject>;
export type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
export interface BridgeToNonEVMChainBytes32EventObject {
    transactionId: string;
    destinationChainId: BigNumber;
    receiver: string;
}
export type BridgeToNonEVMChainBytes32Event = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainBytes32EventObject>;
export type BridgeToNonEVMChainBytes32EventFilter = TypedEventFilter<BridgeToNonEVMChainBytes32Event>;
export interface ChainIdToEidSetEventObject {
    chainId: BigNumber;
    lzEid: number;
}
export type ChainIdToEidSetEvent = TypedEvent<[
    BigNumber,
    number
], ChainIdToEidSetEventObject>;
export type ChainIdToEidSetEventFilter = TypedEventFilter<ChainIdToEidSetEvent>;
export interface ChainIdToEidUnsetEventObject {
    chainId: BigNumber;
}
export type ChainIdToEidUnsetEvent = TypedEvent<[
    BigNumber
], ChainIdToEidUnsetEventObject>;
export type ChainIdToEidUnsetEventFilter = TypedEventFilter<ChainIdToEidUnsetEvent>;
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
export type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface SupersetChainMappingsInitializedEventObject {
    chainIdConfigs: SupersetFacet.ChainIdConfigStructOutput[];
}
export type SupersetChainMappingsInitializedEvent = TypedEvent<[
    SupersetFacet.ChainIdConfigStructOutput[]
], SupersetChainMappingsInitializedEventObject>;
export type SupersetChainMappingsInitializedEventFilter = TypedEventFilter<SupersetChainMappingsInitializedEvent>;
export interface SupersetFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SupersetFacetInterface;
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
        IS_HUB(overrides?: CallOverrides): Promise<[boolean]>;
        POOL_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            lzEid: number;
        }>;
        initSuperset(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setChainIdToEid(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unsetChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    IS_HUB(overrides?: CallOverrides): Promise<boolean>;
    POOL_MANAGER(overrides?: CallOverrides): Promise<string>;
    getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initSuperset(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setChainIdToEid(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unsetChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_HUB(overrides?: CallOverrides): Promise<boolean>;
        POOL_MANAGER(overrides?: CallOverrides): Promise<string>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initSuperset(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setChainIdToEid(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _supersetData: SupersetFacet.SupersetDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _supersetData: SupersetFacet.SupersetDataStruct, overrides?: CallOverrides): Promise<void>;
        unsetChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        BridgeToNonEVMChainBytes32(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        "ChainIdToEidSet(uint256,uint32)"(chainId?: PromiseOrValue<BigNumberish> | null, lzEid?: null): ChainIdToEidSetEventFilter;
        ChainIdToEidSet(chainId?: PromiseOrValue<BigNumberish> | null, lzEid?: null): ChainIdToEidSetEventFilter;
        "ChainIdToEidUnset(uint256)"(chainId?: PromiseOrValue<BigNumberish> | null): ChainIdToEidUnsetEventFilter;
        ChainIdToEidUnset(chainId?: PromiseOrValue<BigNumberish> | null): ChainIdToEidUnsetEventFilter;
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
        "SupersetChainMappingsInitialized(tuple[])"(chainIdConfigs?: null): SupersetChainMappingsInitializedEventFilter;
        SupersetChainMappingsInitialized(chainIdConfigs?: null): SupersetChainMappingsInitializedEventFilter;
    };
    estimateGas: {
        IS_HUB(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initSuperset(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setChainIdToEid(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unsetChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initSuperset(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setChainIdToEid(_chainIdConfigs: SupersetFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaSuperset(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _supersetData: SupersetFacet.SupersetDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unsetChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
