import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IntentReceiver {
    type IntentExecutionStruct = {
        callTo: PromiseOrValue<string>;
        callData: PromiseOrValue<BytesLike>;
        value: PromiseOrValue<BigNumberish>;
        feeAmount: PromiseOrValue<BigNumberish>;
    };
    type IntentExecutionStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        callTo: string;
        callData: string;
        value: BigNumber;
        feeAmount: BigNumber;
    };
    type SwapIntentStruct = {
        id: PromiseOrValue<BytesLike>;
        fromAsset: PromiseOrValue<string>;
        toAsset: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        minAmountOut: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        receiver: PromiseOrValue<string>;
    };
    type SwapIntentStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: string;
        fromAsset: string;
        toAsset: string;
        fromAmount: BigNumber;
        minAmountOut: BigNumber;
        deadline: BigNumber;
        receiver: string;
    };
}
export interface IntentReceiverInterface extends utils.Interface {
    functions: {
        "cancelIntent(bytes32,address)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "executeIntent(bytes32,(address,bytes,uint256,uint256))": FunctionFragment;
        "feeCollector()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "refundExpiredIntent(bytes32,uint256)": FunctionFragment;
        "swapIntents(bytes32)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelIntent" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "executeIntent" | "feeCollector" | "owner" | "pendingOwner" | "refundExpiredIntent" | "swapIntents" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelIntent", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeIntent", values: [PromiseOrValue<BytesLike>, IntentReceiver.IntentExecutionStruct]): string;
    encodeFunctionData(functionFragment: "feeCollector", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "refundExpiredIntent", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "swapIntents", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "cancelIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundExpiredIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapIntents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "ExpiredIntentRefunded(tuple)": EventFragment;
        "IntentAdded(tuple)": EventFragment;
        "IntentCancelled(tuple,address)": EventFragment;
        "IntentExecuted(tuple)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExpiredIntentRefunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface ExpiredIntentRefundedEventObject {
    details: IntentReceiver.SwapIntentStructOutput;
}
export declare type ExpiredIntentRefundedEvent = TypedEvent<[
    IntentReceiver.SwapIntentStructOutput
], ExpiredIntentRefundedEventObject>;
export declare type ExpiredIntentRefundedEventFilter = TypedEventFilter<ExpiredIntentRefundedEvent>;
export interface IntentAddedEventObject {
    details: IntentReceiver.SwapIntentStructOutput;
}
export declare type IntentAddedEvent = TypedEvent<[
    IntentReceiver.SwapIntentStructOutput
], IntentAddedEventObject>;
export declare type IntentAddedEventFilter = TypedEventFilter<IntentAddedEvent>;
export interface IntentCancelledEventObject {
    details: IntentReceiver.SwapIntentStructOutput;
    refundedTo: string;
}
export declare type IntentCancelledEvent = TypedEvent<[
    IntentReceiver.SwapIntentStructOutput,
    string
], IntentCancelledEventObject>;
export declare type IntentCancelledEventFilter = TypedEventFilter<IntentCancelledEvent>;
export interface IntentExecutedEventObject {
    details: IntentReceiver.SwapIntentStructOutput;
}
export declare type IntentExecutedEvent = TypedEvent<[
    IntentReceiver.SwapIntentStructOutput
], IntentExecutedEventObject>;
export declare type IntentExecutedEventFilter = TypedEventFilter<IntentExecutedEvent>;
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export declare type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export declare type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface IntentReceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IntentReceiverInterface;
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
        cancelIntent(intentId: PromiseOrValue<BytesLike>, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeIntent(intentId: PromiseOrValue<BytesLike>, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        feeCollector(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        refundExpiredIntent(intentId: PromiseOrValue<BytesLike>, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: string;
            fromAsset: string;
            toAsset: string;
            fromAmount: BigNumber;
            minAmountOut: BigNumber;
            deadline: BigNumber;
            receiver: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelIntent(intentId: PromiseOrValue<BytesLike>, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeIntent(intentId: PromiseOrValue<BytesLike>, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    feeCollector(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    refundExpiredIntent(intentId: PromiseOrValue<BytesLike>, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: string;
        fromAsset: string;
        toAsset: string;
        fromAmount: BigNumber;
        minAmountOut: BigNumber;
        deadline: BigNumber;
        receiver: string;
    }>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelIntent(intentId: PromiseOrValue<BytesLike>, refundTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        executeIntent(intentId: PromiseOrValue<BytesLike>, exec: IntentReceiver.IntentExecutionStruct, overrides?: CallOverrides): Promise<void>;
        feeCollector(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        refundExpiredIntent(intentId: PromiseOrValue<BytesLike>, feeAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: string;
            fromAsset: string;
            toAsset: string;
            fromAmount: BigNumber;
            minAmountOut: BigNumber;
            deadline: BigNumber;
            receiver: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExpiredIntentRefunded(tuple)"(details?: null): ExpiredIntentRefundedEventFilter;
        ExpiredIntentRefunded(details?: null): ExpiredIntentRefundedEventFilter;
        "IntentAdded(tuple)"(details?: null): IntentAddedEventFilter;
        IntentAdded(details?: null): IntentAddedEventFilter;
        "IntentCancelled(tuple,address)"(details?: null, refundedTo?: null): IntentCancelledEventFilter;
        IntentCancelled(details?: null, refundedTo?: null): IntentCancelledEventFilter;
        "IntentExecuted(tuple)"(details?: null): IntentExecutedEventFilter;
        IntentExecuted(details?: null): IntentExecutedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cancelIntent(intentId: PromiseOrValue<BytesLike>, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeIntent(intentId: PromiseOrValue<BytesLike>, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        feeCollector(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        refundExpiredIntent(intentId: PromiseOrValue<BytesLike>, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelIntent(intentId: PromiseOrValue<BytesLike>, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeIntent(intentId: PromiseOrValue<BytesLike>, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundExpiredIntent(intentId: PromiseOrValue<BytesLike>, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
