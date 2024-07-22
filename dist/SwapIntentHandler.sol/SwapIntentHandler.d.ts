import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
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
        owner: PromiseOrValue<string>;
        receiver: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type InitDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        intentId: string;
        owner: string;
        receiver: string;
        tokenOut: string;
        amountOutMin: BigNumber;
        deadline: BigNumber;
    };
}
export interface SwapIntentHandlerInterface extends utils.Interface {
    functions: {
        "config()": FunctionFragment;
        "execute((address,uint256,bytes)[])": FunctionFragment;
        "implementation()": FunctionFragment;
        "init((bytes32,address,address,address,uint256,uint256))": FunctionFragment;
        "withdrawAll(address[],address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "config" | "execute" | "implementation" | "init" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "config", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [IIntent.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [IIntent.InitDataStruct]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {
        "IntentExecuted(bytes32,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IntentExecuted"): EventFragment;
}
export interface IntentExecutedEventObject {
    intentId: string;
    receiver: string;
    tokenOut: string;
    amountOut: BigNumber;
}
export declare type IntentExecutedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], IntentExecutedEventObject>;
export declare type IntentExecutedEventFilter = TypedEventFilter<IntentExecutedEvent>;
export interface SwapIntentHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapIntentHandlerInterface;
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
        config(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            number
        ] & {
            intentId: string;
            salt: string;
            owner: string;
            receiver: string;
            factory: string;
            tokenOut: string;
            amountOutMin: BigNumber;
            deadline: BigNumber;
            executed: number;
        }>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(tokens: PromiseOrValue<string>[], receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    config(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        intentId: string;
        salt: string;
        owner: string;
        receiver: string;
        factory: string;
        tokenOut: string;
        amountOutMin: BigNumber;
        deadline: BigNumber;
        executed: number;
    }>;
    execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<string>;
    init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(tokens: PromiseOrValue<string>[], receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        config(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            number
        ] & {
            intentId: string;
            salt: string;
            owner: string;
            receiver: string;
            factory: string;
            tokenOut: string;
            amountOutMin: BigNumber;
            deadline: BigNumber;
            executed: number;
        }>;
        execute(calls: IIntent.CallStruct[], overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
        init(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<void>;
        withdrawAll(tokens: PromiseOrValue<string>[], receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "IntentExecuted(bytes32,address,address,uint256)"(intentId?: PromiseOrValue<BytesLike> | null, receiver?: null, tokenOut?: null, amountOut?: null): IntentExecutedEventFilter;
        IntentExecuted(intentId?: PromiseOrValue<BytesLike> | null, receiver?: null, tokenOut?: null, amountOut?: null): IntentExecutedEventFilter;
    };
    estimateGas: {
        config(overrides?: CallOverrides): Promise<BigNumber>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawAll(tokens: PromiseOrValue<string>[], receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        config(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_initData: IIntent.InitDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(tokens: PromiseOrValue<string>[], receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
