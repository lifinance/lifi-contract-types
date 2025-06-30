import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface TestContractOneInterface extends utils.Interface {
    functions: {
        "balances(address)": FunctionFragment;
        "deposit()": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balances" | "deposit" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "balances", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface TestContractOne extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestContractOneInterface;
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
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    deposit(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
