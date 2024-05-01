import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace MayanFacet {
    type ConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        wormholeChainId: PromiseOrValue<BigNumberish>;
    };
    type ConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        wormholeChainId: number;
    };
    type MayanDataStruct = {
        mayanAddr: PromiseOrValue<BytesLike>;
        referrer: PromiseOrValue<BytesLike>;
        tokenOutAddr: PromiseOrValue<BytesLike>;
        receiver: PromiseOrValue<BytesLike>;
        swapFee: PromiseOrValue<BigNumberish>;
        redeemFee: PromiseOrValue<BigNumberish>;
        refundFee: PromiseOrValue<BigNumberish>;
        transferDeadline: PromiseOrValue<BigNumberish>;
        swapDeadline: PromiseOrValue<BigNumberish>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        unwrap: PromiseOrValue<boolean>;
        gasDrop: PromiseOrValue<BigNumberish>;
    };
    type MayanDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber
    ] & {
        mayanAddr: string;
        referrer: string;
        tokenOutAddr: string;
        receiver: string;
        swapFee: BigNumber;
        redeemFee: BigNumber;
        refundFee: BigNumber;
        transferDeadline: BigNumber;
        swapDeadline: BigNumber;
        amountOutMin: BigNumber;
        unwrap: boolean;
        gasDrop: BigNumber;
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
export interface MayanFacetInterface extends utils.Interface {
    functions: {
        "initMayan((uint256,uint16)[])": FunctionFragment;
        "mayan()": FunctionFragment;
        "setMayanChainIdMapping(uint256,uint16)": FunctionFragment;
        "startBridgeTokensViaMayan((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes32,bytes32,bytes32,bytes32,uint64,uint64,uint64,uint256,uint64,uint64,bool,uint64))": FunctionFragment;
        "swapAndStartBridgeTokensViaMayan((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes32,bytes32,bytes32,bytes32,uint64,uint64,uint64,uint256,uint64,uint64,bool,uint64))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initMayan" | "mayan" | "setMayanChainIdMapping" | "startBridgeTokensViaMayan" | "swapAndStartBridgeTokensViaMayan"): FunctionFragment;
    encodeFunctionData(functionFragment: "initMayan", values: [MayanFacet.ConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "mayan", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMayanChainIdMapping", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaMayan", values: [ILiFi.BridgeDataStruct, MayanFacet.MayanDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaMayan", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        MayanFacet.MayanDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initMayan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mayan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMayanChainIdMapping", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaMayan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaMayan", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes32)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "MayanChainIdMapped(uint256,uint256)": EventFragment;
        "MayanInitialized(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MayanChainIdMapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MayanInitialized"): EventFragment;
}
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    destinationChainId: BigNumber;
    receiver: string;
}
export declare type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainEventObject>;
export declare type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
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
export declare type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export declare type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export declare type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
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
export interface MayanChainIdMappedEventObject {
    lifiChainId: BigNumber;
    wormholeChainId: BigNumber;
}
export declare type MayanChainIdMappedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MayanChainIdMappedEventObject>;
export declare type MayanChainIdMappedEventFilter = TypedEventFilter<MayanChainIdMappedEvent>;
export interface MayanInitializedEventObject {
    configs: MayanFacet.ConfigStructOutput[];
}
export declare type MayanInitializedEvent = TypedEvent<[
    MayanFacet.ConfigStructOutput[]
], MayanInitializedEventObject>;
export declare type MayanInitializedEventFilter = TypedEventFilter<MayanInitializedEvent>;
export interface MayanFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MayanFacetInterface;
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
        initMayan(configs: MayanFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mayan(overrides?: CallOverrides): Promise<[string]>;
        setMayanChainIdMapping(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initMayan(configs: MayanFacet.ConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mayan(overrides?: CallOverrides): Promise<string>;
    setMayanChainIdMapping(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initMayan(configs: MayanFacet.ConfigStruct[], overrides?: CallOverrides): Promise<void>;
        mayan(overrides?: CallOverrides): Promise<string>;
        setMayanChainIdMapping(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _mayanData: MayanFacet.MayanDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _mayanData: MayanFacet.MayanDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
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
        "MayanChainIdMapped(uint256,uint256)"(lifiChainId?: PromiseOrValue<BigNumberish> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null): MayanChainIdMappedEventFilter;
        MayanChainIdMapped(lifiChainId?: PromiseOrValue<BigNumberish> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null): MayanChainIdMappedEventFilter;
        "MayanInitialized(tuple[])"(configs?: null): MayanInitializedEventFilter;
        MayanInitialized(configs?: null): MayanInitializedEventFilter;
    };
    estimateGas: {
        initMayan(configs: MayanFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mayan(overrides?: CallOverrides): Promise<BigNumber>;
        setMayanChainIdMapping(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initMayan(configs: MayanFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mayan(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMayanChainIdMapping(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaMayan(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _mayanData: MayanFacet.MayanDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
