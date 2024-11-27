import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface TokenWrapperInterface extends utils.Interface {
    functions: {
        "deposit()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "wrappedToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "withdraw" | "wrappedToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "wrappedToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedToken", data: BytesLike): Result;
    events: {};
}
export interface TokenWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenWrapperInterface;
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
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wrappedToken(overrides?: CallOverrides): Promise<[string]>;
    };
    deposit(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wrappedToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deposit(overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        wrappedToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        wrappedToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wrappedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TokenWrapper.d.ts.map