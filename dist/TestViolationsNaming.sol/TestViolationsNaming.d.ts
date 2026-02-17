import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface TestViolationsNamingInterface extends utils.Interface {
    functions: {
        "anotherFunction(string)": FunctionFragment;
        "testConstant()": FunctionFragment;
        "testFunction(uint256,address)": FunctionFragment;
        "testImmutable()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "anotherFunction" | "testConstant" | "testFunction" | "testImmutable"): FunctionFragment;
    encodeFunctionData(functionFragment: "anotherFunction", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "testConstant", values?: undefined): string;
    encodeFunctionData(functionFragment: "testFunction", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "testImmutable", values?: undefined): string;
    decodeFunctionResult(functionFragment: "anotherFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testConstant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testImmutable", data: BytesLike): Result;
    events: {};
}
export interface TestViolationsNaming extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestViolationsNamingInterface;
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
        anotherFunction(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        testConstant(overrides?: CallOverrides): Promise<[BigNumber]>;
        testFunction(amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        testImmutable(overrides?: CallOverrides): Promise<[string]>;
    };
    anotherFunction(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    testConstant(overrides?: CallOverrides): Promise<BigNumber>;
    testFunction(amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    testImmutable(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        anotherFunction(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        testConstant(overrides?: CallOverrides): Promise<BigNumber>;
        testFunction(amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        testImmutable(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        anotherFunction(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        testConstant(overrides?: CallOverrides): Promise<BigNumber>;
        testFunction(amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        testImmutable(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        anotherFunction(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        testConstant(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        testFunction(amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        testImmutable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
