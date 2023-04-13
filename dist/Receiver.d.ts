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
export interface ReceiverInterface extends utils.Interface {
    functions: {
        "amarokRouter()": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "executor()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "pullToken(address,address,uint256)": FunctionFragment;
        "recoverGas()": FunctionFragment;
        "setAmarokRouter(address)": FunctionFragment;
        "setExecutor(address)": FunctionFragment;
        "setRecoverGas(uint256)": FunctionFragment;
        "setStargateRouter(address)": FunctionFragment;
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
        "sgRouter()": FunctionFragment;
        "swapAndCompleteBridgeTokens(bytes32,(address,address,address,address,uint256,bytes,bool)[],address,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amarokRouter" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "executor" | "owner" | "pendingOwner" | "pullToken" | "recoverGas" | "setAmarokRouter" | "setExecutor" | "setRecoverGas" | "setStargateRouter" | "sgReceive" | "sgRouter" | "swapAndCompleteBridgeTokens" | "transferOwnership" | "xReceive"): FunctionFragment;
    encodeFunctionData(functionFragment: "amarokRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "executor", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pullToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "recoverGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAmarokRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setExecutor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRecoverGas", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setStargateRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sgReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sgRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokens", values: [
        PromiseOrValue<BytesLike>,
        LibSwap.SwapDataStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
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
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pullToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmarokRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRecoverGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStargateRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;
    events: {
        "AmarokRouterSet(address)": EventFragment;
        "ExecutorSet(address)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RecoverGasSet(uint256)": EventFragment;
        "StargateRouterSet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AmarokRouterSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutorSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverGasSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateRouterSet"): EventFragment;
}
export interface AmarokRouterSetEventObject {
    router: string;
}
export declare type AmarokRouterSetEvent = TypedEvent<[
    string
], AmarokRouterSetEventObject>;
export declare type AmarokRouterSetEventFilter = TypedEventFilter<AmarokRouterSetEvent>;
export interface ExecutorSetEventObject {
    executor: string;
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
export interface RecoverGasSetEventObject {
    recoverGas: BigNumber;
}
export declare type RecoverGasSetEvent = TypedEvent<[
    BigNumber
], RecoverGasSetEventObject>;
export declare type RecoverGasSetEventFilter = TypedEventFilter<RecoverGasSetEvent>;
export interface StargateRouterSetEventObject {
    router: string;
}
export declare type StargateRouterSetEvent = TypedEvent<[
    string
], StargateRouterSetEventObject>;
export declare type StargateRouterSetEventFilter = TypedEventFilter<StargateRouterSetEvent>;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executor(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        pullToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverGas(overrides?: CallOverrides): Promise<[BigNumber]>;
        setAmarokRouter(_amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setExecutor(_executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRecoverGas(_recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStargateRouter(_sgRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<[string]>;
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        xReceive(_transferId: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    amarokRouter(overrides?: CallOverrides): Promise<string>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executor(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    pullToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverGas(overrides?: CallOverrides): Promise<BigNumber>;
    setAmarokRouter(_amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setExecutor(_executor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRecoverGas(_recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStargateRouter(_sgRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sgRouter(overrides?: CallOverrides): Promise<string>;
    swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    xReceive(_transferId: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amarokRouter(overrides?: CallOverrides): Promise<string>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        executor(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        pullToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        recoverGas(overrides?: CallOverrides): Promise<BigNumber>;
        setAmarokRouter(_amarokRouter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setExecutor(_executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRecoverGas(_recoverGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setStargateRouter(_sgRouter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sgRouter(overrides?: CallOverrides): Promise<string>;
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        xReceive(_transferId: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AmarokRouterSet(address)"(router?: PromiseOrValue<string> | null): AmarokRouterSetEventFilter;
        AmarokRouterSet(router?: PromiseOrValue<string> | null): AmarokRouterSetEventFilter;
        "ExecutorSet(address)"(executor?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
        ExecutorSet(executor?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
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
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "RecoverGasSet(uint256)"(recoverGas?: PromiseOrValue<BigNumberish> | null): RecoverGasSetEventFilter;
        RecoverGasSet(recoverGas?: PromiseOrValue<BigNumberish> | null): RecoverGasSetEventFilter;
        "StargateRouterSet(address)"(router?: PromiseOrValue<string> | null): StargateRouterSetEventFilter;
        StargateRouterSet(router?: PromiseOrValue<string> | null): StargateRouterSetEventFilter;
    };
    estimateGas: {
        amarokRouter(overrides?: CallOverrides): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executor(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        pullToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverGas(overrides?: CallOverrides): Promise<BigNumber>;
        setAmarokRouter(_amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setExecutor(_executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRecoverGas(_recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStargateRouter(_sgRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sgRouter(overrides?: CallOverrides): Promise<BigNumber>;
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        xReceive(_transferId: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amarokRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pullToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAmarokRouter(_amarokRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setExecutor(_executor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRecoverGas(_recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStargateRouter(_sgRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sgReceive(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _amountLD: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapAndCompleteBridgeTokens(_transactionId: PromiseOrValue<BytesLike>, _swapData: LibSwap.SwapDataStruct[], assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        xReceive(_transferId: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _asset: PromiseOrValue<string>, arg3: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, _callData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
