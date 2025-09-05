import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export declare namespace ChainflipFacet {
    type ChainflipDataStruct = {
        nonEVMReceiver: PromiseOrValue<BytesLike>;
        dstToken: PromiseOrValue<BigNumberish>;
        dstCallReceiver: PromiseOrValue<string>;
        dstCallSwapData: LibSwap.SwapDataStruct[];
        gasAmount: PromiseOrValue<BigNumberish>;
        cfParameters: PromiseOrValue<BytesLike>;
    };
    type ChainflipDataStructOutput = [
        string,
        number,
        string,
        LibSwap.SwapDataStructOutput[],
        BigNumber,
        string
    ] & {
        nonEVMReceiver: string;
        dstToken: number;
        dstCallReceiver: string;
        dstCallSwapData: LibSwap.SwapDataStructOutput[];
        gasAmount: BigNumber;
        cfParameters: string;
    };
}
export interface ChainflipFacetInterface extends utils.Interface {
    functions: {
        "chainflipVault()": FunctionFragment;
        "startBridgeTokensViaChainflip((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,uint32,address,(address,address,address,address,uint256,bytes,bool)[],uint256,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaChainflip((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,uint32,address,(address,address,address,address,uint256,bytes,bool)[],uint256,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "chainflipVault" | "startBridgeTokensViaChainflip" | "swapAndStartBridgeTokensViaChainflip"): FunctionFragment;
    encodeFunctionData(functionFragment: "chainflipVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaChainflip", values: [ILiFi.BridgeDataStruct, ChainflipFacet.ChainflipDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaChainflip", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        ChainflipFacet.ChainflipDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "chainflipVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaChainflip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaChainflip", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
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
export interface ChainflipFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ChainflipFacetInterface;
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
        chainflipVault(overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    chainflipVault(overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        chainflipVault(overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
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
    };
    estimateGas: {
        chainflipVault(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        chainflipVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaChainflip(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _chainflipData: ChainflipFacet.ChainflipDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
