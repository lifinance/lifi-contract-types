import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IntentReceiver {
    type SwapIntentStruct = {
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
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        fromAsset: string;
        toAsset: string;
        fromAmount: BigNumber;
        minAmountOut: BigNumber;
        deadline: BigNumber;
        receiver: string;
    };
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
}
export interface ReceiverInterface extends utils.Interface {
    functions: {
        "amarokRouter()": FunctionFragment;
        "cancelIntent((address,address,uint256,uint256,uint256,address),address)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "executeIntent((address,address,uint256,uint256,uint256,address),(address,bytes,uint256,uint256))": FunctionFragment;
        "feeCollector()": FunctionFragment;
        "getIntentId((address,address,uint256,uint256,uint256,address))": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "refundExpiredIntent((address,address,uint256,uint256,uint256,address),uint256)": FunctionFragment;
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
        "sgRouter()": FunctionFragment;
        "swapIntents(bytes32)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amarokRouter" | "cancelIntent" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "executeIntent" | "feeCollector" | "getIntentId" | "owner" | "pendingOwner" | "refundExpiredIntent" | "sgReceive" | "sgRouter" | "swapIntents" | "transferOwnership" | "xReceive"): FunctionFragment;
    encodeFunctionData(functionFragment: "amarokRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelIntent", values: [IntentReceiver.SwapIntentStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeIntent", values: [
        IntentReceiver.SwapIntentStruct,
        IntentReceiver.IntentExecutionStruct
    ]): string;
    encodeFunctionData(functionFragment: "feeCollector", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIntentId", values: [IntentReceiver.SwapIntentStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "refundExpiredIntent", values: [IntentReceiver.SwapIntentStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "sgReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sgRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapIntents", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "xReceive", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "amarokRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIntentId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundExpiredIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapIntents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;
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
export interface Receiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReceiverInterface;
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
        amarokRouter(overrides?: CallOverrides): Promise<[string]>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        feeCollector(overrides?: CallOverrides): Promise<[string]>;
        getIntentId(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<[string]>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    amarokRouter(overrides?: CallOverrides): Promise<string>;
    cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    feeCollector(overrides?: CallOverrides): Promise<string>;
    getIntentId(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sgRouter(overrides?: CallOverrides): Promise<string>;
    swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amarokRouter(overrides?: CallOverrides): Promise<string>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: CallOverrides): Promise<void>;
        feeCollector(overrides?: CallOverrides): Promise<string>;
        getIntentId(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, feeAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sgRouter(overrides?: CallOverrides): Promise<string>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        amarokRouter(overrides?: CallOverrides): Promise<BigNumber>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        feeCollector(overrides?: CallOverrides): Promise<BigNumber>;
        getIntentId(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sgRouter(overrides?: CallOverrides): Promise<BigNumber>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amarokRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIntentId(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, feeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        xReceive(arg0: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
