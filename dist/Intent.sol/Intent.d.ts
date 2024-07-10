import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IIntent {
    type CallStruct = {
        to: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type CallStructOutput = [string, BigNumber, string] & {
        to: string;
        value: BigNumber;
        data: string;
    };
    type InitDataStruct = {
        intentId: PromiseOrValue<BytesLike>;
        receiver: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        amountOutMin: PromiseOrValue<BigNumberish>;
    };
    type InitDataStructOutput = [string, string, string, BigNumber] & {
        intentId: string;
        receiver: string;
        tokenOut: string;
        amountOutMin: BigNumber;
    };
}
export interface IntentInterface extends utils.Interface {
    functions: {
        "amountOutMin()": FunctionFragment;
        "execute((address,uint256,bytes)[])": FunctionFragment;
        "executed()": FunctionFragment;
        "factory()": FunctionFragment;
        "implementation()": FunctionFragment;
        "init((bytes32,address,address,uint256))": FunctionFragment;
        "intentId()": FunctionFragment;
        "receiver()": FunctionFragment;
        "salt()": FunctionFragment;
        "tokenOut()": FunctionFragment;
        "withdrawAll(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "amountOutMin" | "execute" | "executed" | "factory" | "implementation" | "init" | "intentId" | "receiver" | "salt" | "tokenOut" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "amountOutMin", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [IIntent.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "executed", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [IIntent.InitDataStruct]): string;
    encodeFunctionData(functionFragment: "intentId", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
    encodeFunctionData(functionFragment: "salt", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenOut", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "amountOutMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "intentId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "salt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface Intent extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IntentInterface;
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
        amountOutMin(overrides?: CallOverrides): Promise<[BigNumber]>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executed(overrides?: CallOverrides): Promise<[boolean]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        intentId(overrides?: CallOverrides): Promise<[string]>;
        receiver(overrides?: CallOverrides): Promise<[string]>;
        salt(overrides?: CallOverrides): Promise<[string]>;
        tokenOut(overrides?: CallOverrides): Promise<[string]>;
        withdrawAll(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    amountOutMin(overrides?: CallOverrides): Promise<BigNumber>;
    execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executed(overrides?: CallOverrides): Promise<boolean>;
    factory(overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    intentId(overrides?: CallOverrides): Promise<string>;
    receiver(overrides?: CallOverrides): Promise<string>;
    salt(overrides?: CallOverrides): Promise<string>;
    tokenOut(overrides?: CallOverrides): Promise<string>;
    withdrawAll(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        amountOutMin(overrides?: CallOverrides): Promise<BigNumber>;
        execute(calls: IIntent.CallStruct[], overrides?: CallOverrides): Promise<void>;
        executed(overrides?: CallOverrides): Promise<boolean>;
        factory(overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        init(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<void>;
        intentId(overrides?: CallOverrides): Promise<string>;
        receiver(overrides?: CallOverrides): Promise<string>;
        salt(overrides?: CallOverrides): Promise<string>;
        tokenOut(overrides?: CallOverrides): Promise<string>;
        withdrawAll(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        amountOutMin(overrides?: CallOverrides): Promise<BigNumber>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executed(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        intentId(overrides?: CallOverrides): Promise<BigNumber>;
        receiver(overrides?: CallOverrides): Promise<BigNumber>;
        salt(overrides?: CallOverrides): Promise<BigNumber>;
        tokenOut(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAll(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        amountOutMin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        intentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        salt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenOut(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawAll(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
