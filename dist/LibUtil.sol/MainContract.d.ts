import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface MainContractInterface extends utils.Interface {
    functions: {
        "topLevelFunction1(address)": FunctionFragment;
        "topLevelFunction2(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "topLevelFunction1" | "topLevelFunction2"): FunctionFragment;
    encodeFunctionData(functionFragment: "topLevelFunction1", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "topLevelFunction2", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "topLevelFunction1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "topLevelFunction2", data: BytesLike): Result;
    events: {};
}
export interface MainContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MainContractInterface;
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
        topLevelFunction1(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        topLevelFunction2(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    topLevelFunction1(callTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    topLevelFunction2(callTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        topLevelFunction1(callTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        topLevelFunction2(callTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        topLevelFunction1(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        topLevelFunction2(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        topLevelFunction1(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        topLevelFunction2(callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
