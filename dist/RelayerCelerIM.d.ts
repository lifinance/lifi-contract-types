import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace CelerIMFacet {
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
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "diamondAddress()": FunctionFragment;
        "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
        "executor()": FunctionFragment;
        "forwardSendMessageWithTransfer(address,uint256,address,bytes32,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "sendTokenTransfer((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
        "setCBridgeMessageBus(address)": FunctionFragment;
        "setDiamondAddress(address)": FunctionFragment;
        "setExecutor(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "triggerRefund(address,bytes,address,address,uint256)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cBridgeMessageBus" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "diamondAddress" | "executeMessageWithTransfer" | "executeMessageWithTransferRefund" | "executor" | "forwardSendMessageWithTransfer" | "owner" | "pendingOwner" | "sendTokenTransfer" | "setCBridgeMessageBus" | "setDiamondAddress" | "setExecutor" | "transferOwnership" | "triggerRefund" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "cBridgeMessageBus", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondAddress", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "executor", values?: undefined): string;
    encodeFunctionData(functionFragment: "forwardSendMessageWithTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendTokenTransfer", values: [ILiFi.BridgeDataStruct, CelerIMFacet.CelerIMDataStruct]): string;
    encodeFunctionData(functionFragment: "setCBridgeMessageBus", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setDiamondAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setExecutor", values: [PromiseOrValue<string>]): string;
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
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forwardSendMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokenTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCBridgeMessageBus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDiamondAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerRefund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "CBridgeMessageBusSet(address)": EventFragment;
        "DiamondAddressSet(address)": EventFragment;
        "ExecutorSet(address)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "LogWithdraw(address,address,uint256)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CBridgeMessageBusSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondAddressSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutorSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface CBridgeMessageBusSetEventObject {
    messageBusAddress: string;
}
export declare type CBridgeMessageBusSetEvent = TypedEvent<[
    string
], CBridgeMessageBusSetEventObject>;
export declare type CBridgeMessageBusSetEventFilter = TypedEventFilter<CBridgeMessageBusSetEvent>;
export interface DiamondAddressSetEventObject {
    diamondAddress: string;
}
export declare type DiamondAddressSetEvent = TypedEvent<[
    string
], DiamondAddressSetEventObject>;
export declare type DiamondAddressSetEventFilter = TypedEventFilter<DiamondAddressSetEvent>;
export interface ExecutorSetEventObject {
    executorAddress: string;
}
export declare type ExecutorSetEvent = TypedEvent<[string], ExecutorSetEventObject>;
export declare type ExecutorSetEventFilter = TypedEventFilter<ExecutorSetEvent>;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondAddress(overrides?: CallOverrides): Promise<[string]>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executor(overrides?: CallOverrides): Promise<[string]>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIMFacet.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCBridgeMessageBus(_messageBusAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDiamondAddress(_diamondAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setExecutor(_executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondAddress(overrides?: CallOverrides): Promise<string>;
    executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executor(overrides?: CallOverrides): Promise<string>;
    forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIMFacet.CelerIMDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCBridgeMessageBus(_messageBusAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDiamondAddress(_diamondAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setExecutor(_executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
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
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        diamondAddress(overrides?: CallOverrides): Promise<string>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        executor(overrides?: CallOverrides): Promise<string>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIMFacet.CelerIMDataStruct, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            transferId: string;
            bridgeAddress: string;
        }>;
        setCBridgeMessageBus(_messageBusAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setDiamondAddress(_diamondAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setExecutor(_executorAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CBridgeMessageBusSet(address)"(messageBusAddress?: PromiseOrValue<string> | null): CBridgeMessageBusSetEventFilter;
        CBridgeMessageBusSet(messageBusAddress?: PromiseOrValue<string> | null): CBridgeMessageBusSetEventFilter;
        "DiamondAddressSet(address)"(diamondAddress?: PromiseOrValue<string> | null): DiamondAddressSetEventFilter;
        DiamondAddressSet(diamondAddress?: PromiseOrValue<string> | null): DiamondAddressSetEventFilter;
        "ExecutorSet(address)"(executorAddress?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
        ExecutorSet(executorAddress?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondAddress(overrides?: CallOverrides): Promise<BigNumber>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executor(overrides?: CallOverrides): Promise<BigNumber>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIMFacet.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCBridgeMessageBus(_messageBusAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDiamondAddress(_diamondAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setExecutor(_executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeMessageWithTransfer(arg0: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg5: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferRefund(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _message: PromiseOrValue<BytesLike>, arg3: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forwardSendMessageWithTransfer(_receiver: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _srcBridge: PromiseOrValue<string>, _srcTransferId: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendTokenTransfer(_bridgeData: ILiFi.BridgeDataStruct, _celerIMData: CelerIMFacet.CelerIMDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCBridgeMessageBus(_messageBusAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDiamondAddress(_diamondAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setExecutor(_executorAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
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
