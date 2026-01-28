import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export interface GenericSwapFacetV3Interface extends utils.Interface {
    functions: {
        "NATIVE_ADDRESS()": FunctionFragment;
        "swapTokensMultipleV3ERC20ToERC20(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool)[])": FunctionFragment;
        "swapTokensMultipleV3ERC20ToNative(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool)[])": FunctionFragment;
        "swapTokensMultipleV3NativeToERC20(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool)[])": FunctionFragment;
        "swapTokensSingleV3ERC20ToERC20(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool))": FunctionFragment;
        "swapTokensSingleV3ERC20ToNative(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool))": FunctionFragment;
        "swapTokensSingleV3NativeToERC20(bytes32,string,string,address,uint256,(address,address,address,address,uint256,bytes,bool))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "NATIVE_ADDRESS" | "swapTokensMultipleV3ERC20ToERC20" | "swapTokensMultipleV3ERC20ToNative" | "swapTokensMultipleV3NativeToERC20" | "swapTokensSingleV3ERC20ToERC20" | "swapTokensSingleV3ERC20ToNative" | "swapTokensSingleV3NativeToERC20"): FunctionFragment;
    encodeFunctionData(functionFragment: "NATIVE_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapTokensMultipleV3ERC20ToERC20", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensMultipleV3ERC20ToNative", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensMultipleV3NativeToERC20", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensSingleV3ERC20ToERC20", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensSingleV3ERC20ToNative", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensSingleV3NativeToERC20", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        LibSwap.SwapDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "NATIVE_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensMultipleV3ERC20ToERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensMultipleV3ERC20ToNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensMultipleV3NativeToERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensSingleV3ERC20ToERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensSingleV3ERC20ToNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensSingleV3NativeToERC20", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
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
export interface GenericSwapFacetV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GenericSwapFacetV3Interface;
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
        NATIVE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        swapTokensMultipleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensMultipleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensMultipleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensSingleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensSingleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensSingleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    NATIVE_ADDRESS(overrides?: CallOverrides): Promise<string>;
    swapTokensMultipleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensMultipleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensMultipleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensSingleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensSingleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensSingleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        NATIVE_ADDRESS(overrides?: CallOverrides): Promise<string>;
        swapTokensMultipleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: CallOverrides): Promise<void>;
        swapTokensMultipleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: CallOverrides): Promise<void>;
        swapTokensMultipleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: CallOverrides): Promise<void>;
        swapTokensSingleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: CallOverrides): Promise<void>;
        swapTokensSingleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: CallOverrides): Promise<void>;
        swapTokensSingleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
        BridgeToNonEVMChainBytes32(transactionId?: PromiseOrValue<BytesLike> | null, destinationChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainBytes32EventFilter;
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
        NATIVE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        swapTokensMultipleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensMultipleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensMultipleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensSingleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensSingleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensSingleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        NATIVE_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapTokensMultipleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensMultipleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensMultipleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensSingleV3ERC20ToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensSingleV3ERC20ToNative(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensSingleV3NativeToERC20(_transactionId: PromiseOrValue<BytesLike>, _integrator: PromiseOrValue<string>, _referrer: PromiseOrValue<string>, _receiver: PromiseOrValue<string>, _minAmountOut: PromiseOrValue<BigNumberish>, _swapData: LibSwap.SwapDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
