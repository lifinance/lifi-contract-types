import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IntentReceiver {
    type SwapIntentStruct = {
        id: PromiseOrValue<BytesLike>;
        fromAsset: PromiseOrValue<string>;
        toAsset: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        receiver: PromiseOrValue<string>;
    };
    type SwapIntentStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: string;
        fromAsset: string;
        toAsset: string;
        fromAmount: BigNumber;
        deadline: BigNumber;
        receiver: string;
    };
    type IntentExecutionStruct = {
        callTo: PromiseOrValue<string>;
        callData: PromiseOrValue<BytesLike>;
        value: PromiseOrValue<BigNumberish>;
    };
    type IntentExecutionStructOutput = [string, string, BigNumber] & {
        callTo: string;
        callData: string;
        value: BigNumber;
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
export declare namespace CelerIM {
    type CelerIMDataStruct = {
        maxSlippage: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
        callTo: PromiseOrValue<BytesLike>;
        callData: PromiseOrValue<BytesLike>;
        messageBusFee: PromiseOrValue<BigNumberish>;
        bridgeType: PromiseOrValue<BigNumberish>;
    };
    type CelerIMDataStructOutput = [
        number,
        BigNumber,
        string,
        string,
        BigNumber,
        number
    ] & {
        maxSlippage: number;
        nonce: BigNumber;
        callTo: string;
        callData: string;
        messageBusFee: BigNumber;
        bridgeType: number;
    };
}
export interface RelayerCelerIMInterface extends utils.Interface {
    functions: {
        "cBridgeMessageBus()": FunctionFragment;
        "cancelIntent((bytes32,address,address,uint256,uint256,address),address)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "diamondAddress()": FunctionFragment;
        "executeIntent((bytes32,address,address,uint256,uint256,address),(address,bytes,uint256))": FunctionFragment;
        "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
        "forwardSendMessageWithTransfer(address,uint256,address,bytes32,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "refundExpiredIntent((bytes32,address,address,uint256,uint256,address))": FunctionFragment;
        "sendTokenTransfer((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
        "swapIntents(bytes32)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "triggerRefund(address,bytes,address,address,uint256)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cBridgeMessageBus" | "cancelIntent" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "diamondAddress" | "executeIntent" | "executeMessageWithTransfer" | "executeMessageWithTransferRefund" | "forwardSendMessageWithTransfer" | "owner" | "pendingOwner" | "refundExpiredIntent" | "sendTokenTransfer" | "swapIntents" | "transferOwnership" | "triggerRefund" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "cBridgeMessageBus", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelIntent", values: [IntentReceiver.SwapIntentStruct, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeIntent", values: [
        IntentReceiver.SwapIntentStruct,
        IntentReceiver.IntentExecutionStruct
    ]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransferRefund", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "forwardSendMessageWithTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "refundExpiredIntent", values: [IntentReceiver.SwapIntentStruct]): string;
    encodeFunctionData(functionFragment: "sendTokenTransfer", values: [ILiFi.BridgeDataStruct, CelerIM.CelerIMDataStruct]): string;
    encodeFunctionData(functionFragment: "swapIntents", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "triggerRefund", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "cBridgeMessageBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forwardSendMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundExpiredIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapIntents", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "ExpiredIntentRefunded(tuple)": EventFragment;
        "IntentAdded(tuple)": EventFragment;
        "IntentCancelled(tuple,address)": EventFragment;
        "IntentExecuted(tuple)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "LogWithdraw(address,address,uint256)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExpiredIntentRefunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntentExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
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
export interface LogWithdrawEventObject {
    _assetAddress: string;
    _to: string;
    amount: BigNumber;
}
export declare type LogWithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LogWithdrawEventObject>;
export declare type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;
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
export interface RelayerCelerIM extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RelayerCelerIMInterface;
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
        cBridgeMessageBus(overrides?: CallOverrides): Promise<[string]>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondAddress(overrides?: CallOverrides): Promise<[string]>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: string;
            fromAsset: string;
            toAsset: string;
            fromAmount: BigNumber;
            deadline: BigNumber;
            receiver: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cBridgeMessageBus(overrides?: CallOverrides): Promise<string>;
    cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondAddress(overrides?: CallOverrides): Promise<string>;
    executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        id: string;
        fromAsset: string;
        toAsset: string;
        fromAmount: BigNumber;
        deadline: BigNumber;
        receiver: string;
    }>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cBridgeMessageBus(overrides?: CallOverrides): Promise<string>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        diamondAddress(overrides?: CallOverrides): Promise<string>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: CallOverrides): Promise<void>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, overrides?: CallOverrides): Promise<void>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            transferId: string;
            bridgeAddress: string;
        }>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            string
        ] & {
            id: string;
            fromAsset: string;
            toAsset: string;
            fromAmount: BigNumber;
            deadline: BigNumber;
            receiver: string;
        }>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
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
        "LogWithdraw(address,address,uint256)"(_assetAddress?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, amount?: null): LogWithdrawEventFilter;
        LogWithdraw(_assetAddress?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, amount?: null): LogWithdrawEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cBridgeMessageBus(overrides?: CallOverrides): Promise<BigNumber>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondAddress(overrides?: CallOverrides): Promise<BigNumber>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cBridgeMessageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelIntent(intent: IntentReceiver.SwapIntentStruct, refundTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeIntent(intent: IntentReceiver.SwapIntentStruct, exec: IntentReceiver.IntentExecutionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        refundExpiredIntent(intent: IntentReceiver.SwapIntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIM.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapIntents(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
