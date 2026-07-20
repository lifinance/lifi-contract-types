import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace FraxFacet {
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        lzEid: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        lzEid: number;
    };
    type FraxDataStruct = {
        oft: PromiseOrValue<string>;
        dstEid: PromiseOrValue<BigNumberish>;
        nativeFee: PromiseOrValue<BigNumberish>;
        refundRecipient: PromiseOrValue<string>;
    };
    type FraxDataStructOutput = [string, number, BigNumber, string] & {
        oft: string;
        dstEid: number;
        nativeFee: BigNumber;
        refundRecipient: string;
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
export interface FraxFacetInterface extends utils.Interface {
    functions: {
        "HOP()": FunctionFragment;
        "PATH_USD()": FunctionFragment;
        "TIP_FEE_MANAGER()": FunctionFragment;
        "getChainIdToEid(uint256)": FunctionFragment;
        "initFrax((uint256,uint32)[])": FunctionFragment;
        "setChainIdToEid((uint256,uint32)[])": FunctionFragment;
        "startBridgeTokensViaFrax((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,uint32,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaFrax((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,uint32,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HOP" | "PATH_USD" | "TIP_FEE_MANAGER" | "getChainIdToEid" | "initFrax" | "setChainIdToEid" | "startBridgeTokensViaFrax" | "swapAndStartBridgeTokensViaFrax"): FunctionFragment;
    encodeFunctionData(functionFragment: "HOP", values?: undefined): string;
    encodeFunctionData(functionFragment: "PATH_USD", values?: undefined): string;
    encodeFunctionData(functionFragment: "TIP_FEE_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainIdToEid", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initFrax", values: [FraxFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setChainIdToEid", values: [FraxFacet.ChainIdConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaFrax", values: [ILiFi.BridgeDataStruct, FraxFacet.FraxDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaFrax", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        FraxFacet.FraxDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "HOP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PATH_USD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TIP_FEE_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIdToEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initFrax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainIdToEid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaFrax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaFrax", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
        "ChainIdToEidSet(uint256,uint32)": EventFragment;
        "FraxChainMappingsInitialized(tuple[])": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainIdToEidSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FraxChainMappingsInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
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
export interface FraxChainMappingsInitializedEventObject {
    chainIdConfigs: FraxFacet.ChainIdConfigStructOutput[];
}
export type FraxChainMappingsInitializedEvent = TypedEvent<[
    FraxFacet.ChainIdConfigStructOutput[]
], FraxChainMappingsInitializedEventObject>;
export type FraxChainMappingsInitializedEventFilter = TypedEventFilter<FraxChainMappingsInitializedEvent>;
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
export interface FraxFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FraxFacetInterface;
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
        HOP(overrides?: CallOverrides): Promise<[string]>;
        PATH_USD(overrides?: CallOverrides): Promise<[string]>;
        TIP_FEE_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            lzEid: number;
        }>;
        initFrax(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setChainIdToEid(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    HOP(overrides?: CallOverrides): Promise<string>;
    PATH_USD(overrides?: CallOverrides): Promise<string>;
    TIP_FEE_MANAGER(overrides?: CallOverrides): Promise<string>;
    getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initFrax(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setChainIdToEid(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        HOP(overrides?: CallOverrides): Promise<string>;
        PATH_USD(overrides?: CallOverrides): Promise<string>;
        TIP_FEE_MANAGER(overrides?: CallOverrides): Promise<string>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initFrax(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setChainIdToEid(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _fraxData: FraxFacet.FraxDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _fraxData: FraxFacet.FraxDataStruct, overrides?: CallOverrides): Promise<void>;
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
        "FraxChainMappingsInitialized(tuple[])"(chainIdConfigs?: null): FraxChainMappingsInitializedEventFilter;
        FraxChainMappingsInitialized(chainIdConfigs?: null): FraxChainMappingsInitializedEventFilter;
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
        HOP(overrides?: CallOverrides): Promise<BigNumber>;
        PATH_USD(overrides?: CallOverrides): Promise<BigNumber>;
        TIP_FEE_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initFrax(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setChainIdToEid(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        HOP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PATH_USD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TIP_FEE_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainIdToEid(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initFrax(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setChainIdToEid(_chainIdConfigs: FraxFacet.ChainIdConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaFrax(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _fraxData: FraxFacet.FraxDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
