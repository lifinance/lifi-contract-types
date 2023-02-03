import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export interface ReceiverTestInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "IS_TEST()": FunctionFragment;
        "createUsers(uint256)": FunctionFragment;
        "failed()": FunctionFragment;
        "getNextUserAddress()": FunctionFragment;
        "mineBlocks(uint256)": FunctionFragment;
        "setUp()": FunctionFragment;
        "test_OwnerCanUpdateExecutorAddress()": FunctionFragment;
        "test_OwnerCanUpdateRecoverGas()": FunctionFragment;
        "test_amarok_ExecutesCrossChainMessage()": FunctionFragment;
        "test_amarok_ForwardsFundsToReceiverIfDestCallFails()": FunctionFragment;
        "test_amarok_OwnerCanUpdateRouterAddress()": FunctionFragment;
        "test_revert_OwnerCanPullToken()": FunctionFragment;
        "test_revert_PullTokenNonOwner()": FunctionFragment;
        "test_revert_UpdateExecutorAddressNonOwner()": FunctionFragment;
        "test_revert_UpdateRecoverGasNonOwner()": FunctionFragment;
        "test_revert_amarok_UpdateRouterAddressNonOwner()": FunctionFragment;
        "test_revert_stargate_UpdateRouterAddressNonOwner()": FunctionFragment;
        "test_stargate_EmitsCorrectEventOnRecovery()": FunctionFragment;
        "test_stargate_ExecutesCrossChainMessage()": FunctionFragment;
        "test_stargate_OwnerCanUpdateRouterAddress()": FunctionFragment;
        "vm()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "IS_TEST" | "createUsers" | "failed" | "getNextUserAddress" | "mineBlocks" | "setUp" | "test_OwnerCanUpdateExecutorAddress" | "test_OwnerCanUpdateRecoverGas" | "test_amarok_ExecutesCrossChainMessage" | "test_amarok_ForwardsFundsToReceiverIfDestCallFails" | "test_amarok_OwnerCanUpdateRouterAddress" | "test_revert_OwnerCanPullToken" | "test_revert_PullTokenNonOwner" | "test_revert_UpdateExecutorAddressNonOwner" | "test_revert_UpdateRecoverGasNonOwner" | "test_revert_amarok_UpdateRouterAddressNonOwner" | "test_revert_stargate_UpdateRouterAddressNonOwner" | "test_stargate_EmitsCorrectEventOnRecovery" | "test_stargate_ExecutesCrossChainMessage" | "test_stargate_OwnerCanUpdateRouterAddress" | "vm"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "createUsers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNextUserAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "mineBlocks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OwnerCanUpdateExecutorAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_OwnerCanUpdateRecoverGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_amarok_ExecutesCrossChainMessage", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_amarok_ForwardsFundsToReceiverIfDestCallFails", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_amarok_OwnerCanUpdateRouterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_OwnerCanPullToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_PullTokenNonOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_UpdateExecutorAddressNonOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_UpdateRecoverGasNonOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_amarok_UpdateRouterAddressNonOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_revert_stargate_UpdateRouterAddressNonOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_stargate_EmitsCorrectEventOnRecovery", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_stargate_ExecutesCrossChainMessage", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_stargate_OwnerCanUpdateRouterAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "vm", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createUsers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextUserAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mineBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OwnerCanUpdateExecutorAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_OwnerCanUpdateRecoverGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_amarok_ExecutesCrossChainMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_amarok_ForwardsFundsToReceiverIfDestCallFails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_amarok_OwnerCanUpdateRouterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_OwnerCanPullToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_PullTokenNonOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_UpdateExecutorAddressNonOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_UpdateRecoverGasNonOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_amarok_UpdateRouterAddressNonOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_revert_stargate_UpdateRouterAddressNonOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_stargate_EmitsCorrectEventOnRecovery", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_stargate_ExecutesCrossChainMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_stargate_OwnerCanUpdateRouterAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;
    events: {
        "AmarokRouterSet(address)": EventFragment;
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "ExecutorSet(address)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "RecoverGasSet(uint256)": EventFragment;
        "StargateRouterSet(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_array(uint256[])": EventFragment;
        "log_array(int256[])": EventFragment;
        "log_array(address[])": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_array(string,uint256[])": EventFragment;
        "log_named_array(string,int256[])": EventFragment;
        "log_named_array(string,address[])": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AmarokRouterSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutorSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverGasSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateRouterSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,uint256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,int256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,address[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface AmarokRouterSetEventObject {
    router: string;
}
export declare type AmarokRouterSetEvent = TypedEvent<[
    string
], AmarokRouterSetEventObject>;
export declare type AmarokRouterSetEventFilter = TypedEventFilter<AmarokRouterSetEvent>;
export interface AssetSwappedEventObject {
    transactionId: string;
    dex: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
    timestamp: BigNumber;
}
export declare type AssetSwappedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], AssetSwappedEventObject>;
export declare type AssetSwappedEventFilter = TypedEventFilter<AssetSwappedEvent>;
export interface ExecutorSetEventObject {
    executor: string;
}
export declare type ExecutorSetEvent = TypedEvent<[string], ExecutorSetEventObject>;
export declare type ExecutorSetEventFilter = TypedEventFilter<ExecutorSetEvent>;
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
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_array_uint256_array_EventObject {
    val: BigNumber[];
}
export declare type log_array_uint256_array_Event = TypedEvent<[
    BigNumber[]
], log_array_uint256_array_EventObject>;
export declare type log_array_uint256_array_EventFilter = TypedEventFilter<log_array_uint256_array_Event>;
export interface log_array_int256_array_EventObject {
    val: BigNumber[];
}
export declare type log_array_int256_array_Event = TypedEvent<[
    BigNumber[]
], log_array_int256_array_EventObject>;
export declare type log_array_int256_array_EventFilter = TypedEventFilter<log_array_int256_array_Event>;
export interface log_array_address_array_EventObject {
    val: string[];
}
export declare type log_array_address_array_Event = TypedEvent<[
    string[]
], log_array_address_array_EventObject>;
export declare type log_array_address_array_EventFilter = TypedEventFilter<log_array_address_array_Event>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_array_string_uint256_array_EventObject {
    key: string;
    val: BigNumber[];
}
export declare type log_named_array_string_uint256_array_Event = TypedEvent<[
    string,
    BigNumber[]
], log_named_array_string_uint256_array_EventObject>;
export declare type log_named_array_string_uint256_array_EventFilter = TypedEventFilter<log_named_array_string_uint256_array_Event>;
export interface log_named_array_string_int256_array_EventObject {
    key: string;
    val: BigNumber[];
}
export declare type log_named_array_string_int256_array_Event = TypedEvent<[
    string,
    BigNumber[]
], log_named_array_string_int256_array_EventObject>;
export declare type log_named_array_string_int256_array_EventFilter = TypedEventFilter<log_named_array_string_int256_array_Event>;
export interface log_named_array_string_address_array_EventObject {
    key: string;
    val: string[];
}
export declare type log_named_array_string_address_array_Event = TypedEvent<[
    string,
    string[]
], log_named_array_string_address_array_EventObject>;
export declare type log_named_array_string_address_array_EventFilter = TypedEventFilter<log_named_array_string_address_array_Event>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface ReceiverTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReceiverTestInterface;
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
        IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        createUsers(userNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        failed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getNextUserAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mineBlocks(numBlocks: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_OwnerCanUpdateExecutorAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_OwnerCanUpdateRecoverGas(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_amarok_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_amarok_ForwardsFundsToReceiverIfDestCallFails(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_amarok_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_OwnerCanPullToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_PullTokenNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_UpdateExecutorAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_UpdateRecoverGasNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_amarok_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_revert_stargate_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_stargate_EmitsCorrectEventOnRecovery(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_stargate_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        test_stargate_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vm(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    createUsers(userNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    failed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getNextUserAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mineBlocks(numBlocks: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUp(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_OwnerCanUpdateExecutorAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_OwnerCanUpdateRecoverGas(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_amarok_ExecutesCrossChainMessage(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_amarok_ForwardsFundsToReceiverIfDestCallFails(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_amarok_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_OwnerCanPullToken(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_PullTokenNonOwner(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_UpdateExecutorAddressNonOwner(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_UpdateRecoverGasNonOwner(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_amarok_UpdateRouterAddressNonOwner(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_revert_stargate_UpdateRouterAddressNonOwner(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_stargate_EmitsCorrectEventOnRecovery(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_stargate_ExecutesCrossChainMessage(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    test_stargate_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vm(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        createUsers(userNum: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        getNextUserAddress(overrides?: CallOverrides): Promise<string>;
        mineBlocks(numBlocks: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUp(overrides?: CallOverrides): Promise<void>;
        test_OwnerCanUpdateExecutorAddress(overrides?: CallOverrides): Promise<void>;
        test_OwnerCanUpdateRecoverGas(overrides?: CallOverrides): Promise<void>;
        test_amarok_ExecutesCrossChainMessage(overrides?: CallOverrides): Promise<void>;
        test_amarok_ForwardsFundsToReceiverIfDestCallFails(overrides?: CallOverrides): Promise<void>;
        test_amarok_OwnerCanUpdateRouterAddress(overrides?: CallOverrides): Promise<void>;
        test_revert_OwnerCanPullToken(overrides?: CallOverrides): Promise<void>;
        test_revert_PullTokenNonOwner(overrides?: CallOverrides): Promise<void>;
        test_revert_UpdateExecutorAddressNonOwner(overrides?: CallOverrides): Promise<void>;
        test_revert_UpdateRecoverGasNonOwner(overrides?: CallOverrides): Promise<void>;
        test_revert_amarok_UpdateRouterAddressNonOwner(overrides?: CallOverrides): Promise<void>;
        test_revert_stargate_UpdateRouterAddressNonOwner(overrides?: CallOverrides): Promise<void>;
        test_stargate_EmitsCorrectEventOnRecovery(overrides?: CallOverrides): Promise<void>;
        test_stargate_ExecutesCrossChainMessage(overrides?: CallOverrides): Promise<void>;
        test_stargate_OwnerCanUpdateRouterAddress(overrides?: CallOverrides): Promise<void>;
        vm(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AmarokRouterSet(address)"(router?: PromiseOrValue<string> | null): AmarokRouterSetEventFilter;
        AmarokRouterSet(router?: PromiseOrValue<string> | null): AmarokRouterSetEventFilter;
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        "ExecutorSet(address)"(executor?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
        ExecutorSet(executor?: PromiseOrValue<string> | null): ExecutorSetEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "RecoverGasSet(uint256)"(recoverGas?: PromiseOrValue<BigNumberish> | null): RecoverGasSetEventFilter;
        RecoverGasSet(recoverGas?: PromiseOrValue<BigNumberish> | null): RecoverGasSetEventFilter;
        "StargateRouterSet(address)"(router?: PromiseOrValue<string> | null): StargateRouterSetEventFilter;
        StargateRouterSet(router?: PromiseOrValue<string> | null): StargateRouterSetEventFilter;
        "Transfer(address,address,uint256)"(from?: null, to?: null, amount?: null): TransferEventFilter;
        Transfer(from?: null, to?: null, amount?: null): TransferEventFilter;
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
        "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
        "log_array(address[])"(val?: null): log_array_address_array_EventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_array(string,uint256[])"(key?: null, val?: null): log_named_array_string_uint256_array_EventFilter;
        "log_named_array(string,int256[])"(key?: null, val?: null): log_named_array_string_int256_array_EventFilter;
        "log_named_array(string,address[])"(key?: null, val?: null): log_named_array_string_address_array_EventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        createUsers(userNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        failed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getNextUserAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mineBlocks(numBlocks: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_OwnerCanUpdateExecutorAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_OwnerCanUpdateRecoverGas(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_amarok_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_amarok_ForwardsFundsToReceiverIfDestCallFails(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_amarok_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_OwnerCanPullToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_PullTokenNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_UpdateExecutorAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_UpdateRecoverGasNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_amarok_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_revert_stargate_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_stargate_EmitsCorrectEventOnRecovery(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_stargate_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        test_stargate_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vm(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createUsers(userNum: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        failed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getNextUserAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mineBlocks(numBlocks: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_OwnerCanUpdateExecutorAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_OwnerCanUpdateRecoverGas(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_amarok_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_amarok_ForwardsFundsToReceiverIfDestCallFails(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_amarok_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_OwnerCanPullToken(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_PullTokenNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_UpdateExecutorAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_UpdateRecoverGasNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_amarok_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_revert_stargate_UpdateRouterAddressNonOwner(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_stargate_EmitsCorrectEventOnRecovery(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_stargate_ExecutesCrossChainMessage(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        test_stargate_OwnerCanUpdateRouterAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
