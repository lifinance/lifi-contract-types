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
export interface OmniBridgeFacetTestInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "IS_TEST()": FunctionFragment;
        "createUsers(uint256)": FunctionFragment;
        "failed()": FunctionFragment;
        "getNextUserAddress()": FunctionFragment;
        "mineBlocks(uint256)": FunctionFragment;
        "setUp()": FunctionFragment;
        "testBase_CanBridgeNativeTokens()": FunctionFragment;
        "testBase_CanBridgeTokens()": FunctionFragment;
        "testBase_CanBridgeTokens_fuzzed(uint256)": FunctionFragment;
        "testBase_CanSwapAndBridgeNativeTokens()": FunctionFragment;
        "testBase_CanSwapAndBridgeTokens()": FunctionFragment;
        "testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress()": FunctionFragment;
        "testBase_Revert_BridgeToSameChainId()": FunctionFragment;
        "testBase_Revert_BridgeWithInvalidAmount()": FunctionFragment;
        "testBase_Revert_BridgeWithInvalidDestinationCallFlag()": FunctionFragment;
        "testBase_Revert_BridgeWithInvalidReceiverAddress()": FunctionFragment;
        "testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag()": FunctionFragment;
        "testBase_Revert_CallerHasInsufficientFunds()": FunctionFragment;
        "testBase_Revert_SwapAndBridgeToSameChainId()": FunctionFragment;
        "testBase_Revert_SwapAndBridgeWithInvalidAmount()": FunctionFragment;
        "testBase_Revert_SwapAndBridgeWithInvalidSwapData()": FunctionFragment;
        "vm()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "IS_TEST" | "createUsers" | "failed" | "getNextUserAddress" | "mineBlocks" | "setUp" | "testBase_CanBridgeNativeTokens" | "testBase_CanBridgeTokens" | "testBase_CanBridgeTokens_fuzzed" | "testBase_CanSwapAndBridgeNativeTokens" | "testBase_CanSwapAndBridgeTokens" | "testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress" | "testBase_Revert_BridgeToSameChainId" | "testBase_Revert_BridgeWithInvalidAmount" | "testBase_Revert_BridgeWithInvalidDestinationCallFlag" | "testBase_Revert_BridgeWithInvalidReceiverAddress" | "testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag" | "testBase_Revert_CallerHasInsufficientFunds" | "testBase_Revert_SwapAndBridgeToSameChainId" | "testBase_Revert_SwapAndBridgeWithInvalidAmount" | "testBase_Revert_SwapAndBridgeWithInvalidSwapData" | "vm"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "createUsers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNextUserAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "mineBlocks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_CanBridgeNativeTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_CanBridgeTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_CanBridgeTokens_fuzzed", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "testBase_CanSwapAndBridgeNativeTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_CanSwapAndBridgeTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_BridgeToSameChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_BridgeWithInvalidAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_BridgeWithInvalidDestinationCallFlag", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_BridgeWithInvalidReceiverAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_CallerHasInsufficientFunds", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_SwapAndBridgeToSameChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_SwapAndBridgeWithInvalidAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBase_Revert_SwapAndBridgeWithInvalidSwapData", values?: undefined): string;
    encodeFunctionData(functionFragment: "vm", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createUsers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextUserAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mineBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_CanBridgeNativeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_CanBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_CanBridgeTokens_fuzzed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_CanSwapAndBridgeNativeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_CanSwapAndBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_BridgeToSameChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_BridgeWithInvalidAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_BridgeWithInvalidDestinationCallFlag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_BridgeWithInvalidReceiverAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_CallerHasInsufficientFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_SwapAndBridgeToSameChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_SwapAndBridgeWithInvalidAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBase_Revert_SwapAndBridgeWithInvalidSwapData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;
    events: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
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
export interface OmniBridgeFacetTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OmniBridgeFacetTestInterface;
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
        testBase_CanBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_CanBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_CanBridgeTokens_fuzzed(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_CanSwapAndBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_CanSwapAndBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_BridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_BridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_BridgeWithInvalidDestinationCallFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_BridgeWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_CallerHasInsufficientFunds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_SwapAndBridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_SwapAndBridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testBase_Revert_SwapAndBridgeWithInvalidSwapData(overrides?: Overrides & {
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
    testBase_CanBridgeNativeTokens(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_CanBridgeTokens(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_CanBridgeTokens_fuzzed(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_CanSwapAndBridgeNativeTokens(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_CanSwapAndBridgeTokens(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_BridgeToSameChainId(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_BridgeWithInvalidAmount(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_BridgeWithInvalidDestinationCallFlag(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_BridgeWithInvalidReceiverAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_CallerHasInsufficientFunds(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_SwapAndBridgeToSameChainId(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_SwapAndBridgeWithInvalidAmount(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testBase_Revert_SwapAndBridgeWithInvalidSwapData(overrides?: Overrides & {
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
        testBase_CanBridgeNativeTokens(overrides?: CallOverrides): Promise<void>;
        testBase_CanBridgeTokens(overrides?: CallOverrides): Promise<void>;
        testBase_CanBridgeTokens_fuzzed(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        testBase_CanSwapAndBridgeNativeTokens(overrides?: CallOverrides): Promise<void>;
        testBase_CanSwapAndBridgeTokens(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_BridgeToSameChainId(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_BridgeWithInvalidAmount(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_BridgeWithInvalidDestinationCallFlag(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_BridgeWithInvalidReceiverAddress(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_CallerHasInsufficientFunds(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_SwapAndBridgeToSameChainId(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_SwapAndBridgeWithInvalidAmount(overrides?: CallOverrides): Promise<void>;
        testBase_Revert_SwapAndBridgeWithInvalidSwapData(overrides?: CallOverrides): Promise<void>;
        vm(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        AssetSwapped(transactionId?: null, dex?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null, timestamp?: null): AssetSwappedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
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
        testBase_CanBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_CanBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_CanBridgeTokens_fuzzed(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_CanSwapAndBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_CanSwapAndBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_BridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_BridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_BridgeWithInvalidDestinationCallFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_BridgeWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_CallerHasInsufficientFunds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_SwapAndBridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_SwapAndBridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testBase_Revert_SwapAndBridgeWithInvalidSwapData(overrides?: Overrides & {
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
        testBase_CanBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_CanBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_CanBridgeTokens_fuzzed(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_CanSwapAndBridgeNativeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_CanSwapAndBridgeTokens(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_BridgeAndSwapWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_BridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_BridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_BridgeWithInvalidDestinationCallFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_BridgeWithInvalidReceiverAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_CallBridgeOnlyFunctionWithSourceSwapFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_CallerHasInsufficientFunds(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_SwapAndBridgeToSameChainId(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_SwapAndBridgeWithInvalidAmount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testBase_Revert_SwapAndBridgeWithInvalidSwapData(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
