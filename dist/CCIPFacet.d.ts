import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace CCIPFacet {
    type ChainSelectorStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        selector: PromiseOrValue<BigNumberish>;
    };
    type ChainSelectorStructOutput = [BigNumber, BigNumber] & {
        chainId: BigNumber;
        selector: BigNumber;
    };
    type CCIPDataStruct = {
        callData: PromiseOrValue<BytesLike>;
        extraArgs: PromiseOrValue<BytesLike>;
    };
    type CCIPDataStructOutput = [string, string] & {
        callData: string;
        extraArgs: string;
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
export interface CCIPFacetInterface extends utils.Interface {
    functions: {
        "initCCIP((uint256,uint64)[])": FunctionFragment;
        "routerClient()": FunctionFragment;
        "setCCIPChainSelector(uint256,uint64)": FunctionFragment;
        "startBridgeTokensViaCCIP((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes,bytes))": FunctionFragment;
        "swapAndStartBridgeTokensViaCCIP((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initCCIP" | "routerClient" | "setCCIPChainSelector" | "startBridgeTokensViaCCIP" | "swapAndStartBridgeTokensViaCCIP"): FunctionFragment;
    encodeFunctionData(functionFragment: "initCCIP", values: [CCIPFacet.ChainSelectorStruct[]]): string;
    encodeFunctionData(functionFragment: "routerClient", values?: undefined): string;
    encodeFunctionData(functionFragment: "setCCIPChainSelector", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCCIP", values: [ILiFi.BridgeDataStruct, CCIPFacet.CCIPDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaCCIP", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        CCIPFacet.CCIPDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initCCIP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerClient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCCIPChainSelector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCCIP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaCCIP", data: BytesLike): Result;
    events: {
        "CCIPChainSelectorUpdated(uint256,uint64)": EventFragment;
        "CCIPInitialized(tuple[])": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CCIPChainSelectorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CCIPInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface CCIPChainSelectorUpdatedEventObject {
    chainId: BigNumber;
    selector: BigNumber;
}
export declare type CCIPChainSelectorUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], CCIPChainSelectorUpdatedEventObject>;
export declare type CCIPChainSelectorUpdatedEventFilter = TypedEventFilter<CCIPChainSelectorUpdatedEvent>;
export interface CCIPInitializedEventObject {
    chainSelectors: CCIPFacet.ChainSelectorStructOutput[];
}
export declare type CCIPInitializedEvent = TypedEvent<[
    CCIPFacet.ChainSelectorStructOutput[]
], CCIPInitializedEventObject>;
export declare type CCIPInitializedEventFilter = TypedEventFilter<CCIPInitializedEvent>;
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
export interface CCIPFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CCIPFacetInterface;
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
        initCCIP(chainSelectors: CCIPFacet.ChainSelectorStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        routerClient(overrides?: CallOverrides): Promise<[string]>;
        setCCIPChainSelector(_chainId: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initCCIP(chainSelectors: CCIPFacet.ChainSelectorStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    routerClient(overrides?: CallOverrides): Promise<string>;
    setCCIPChainSelector(_chainId: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initCCIP(chainSelectors: CCIPFacet.ChainSelectorStruct[], overrides?: CallOverrides): Promise<void>;
        routerClient(overrides?: CallOverrides): Promise<string>;
        setCCIPChainSelector(_chainId: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _ccipData: CCIPFacet.CCIPDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _ccipData: CCIPFacet.CCIPDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CCIPChainSelectorUpdated(uint256,uint64)"(chainId?: PromiseOrValue<BigNumberish> | null, selector?: null): CCIPChainSelectorUpdatedEventFilter;
        CCIPChainSelectorUpdated(chainId?: PromiseOrValue<BigNumberish> | null, selector?: null): CCIPChainSelectorUpdatedEventFilter;
        "CCIPInitialized(tuple[])"(chainSelectors?: null): CCIPInitializedEventFilter;
        CCIPInitialized(chainSelectors?: null): CCIPInitializedEventFilter;
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
        initCCIP(chainSelectors: CCIPFacet.ChainSelectorStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        routerClient(overrides?: CallOverrides): Promise<BigNumber>;
        setCCIPChainSelector(_chainId: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initCCIP(chainSelectors: CCIPFacet.ChainSelectorStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        routerClient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCCIPChainSelector(_chainId: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaCCIP(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _ccipData: CCIPFacet.CCIPDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
