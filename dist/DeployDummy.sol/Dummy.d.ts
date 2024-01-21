import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface DummyInterface extends utils.Interface {
    functions: {
        "getHello()": FunctionFragment;
        "hello()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getHello" | "hello"): FunctionFragment;
    encodeFunctionData(functionFragment: "getHello", values?: undefined): string;
    encodeFunctionData(functionFragment: "hello", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getHello", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hello", data: BytesLike): Result;
    events: {};
}
export interface Dummy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DummyInterface;
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
        getHello(overrides?: CallOverrides): Promise<[string]>;
        hello(overrides?: CallOverrides): Promise<[string]>;
    };
    getHello(overrides?: CallOverrides): Promise<string>;
    hello(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getHello(overrides?: CallOverrides): Promise<string>;
        hello(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getHello(overrides?: CallOverrides): Promise<BigNumber>;
        hello(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getHello(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hello(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
