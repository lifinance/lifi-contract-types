import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IRootChainManagerInterface extends utils.Interface {
    functions: {
        "depositEtherFor(address)": FunctionFragment;
        "depositFor(address,address,bytes)": FunctionFragment;
        "rootToChildToken(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositEtherFor" | "depositFor" | "rootToChildToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositEtherFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "rootToChildToken", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "depositEtherFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootToChildToken", data: BytesLike): Result;
    events: {};
}
export interface IRootChainManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRootChainManagerInterface;
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
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rootToChildToken(rootToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            childToken: string;
        }>;
    };
    depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rootToChildToken(rootToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        depositEtherFor(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        rootToChildToken(rootToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rootToChildToken(rootToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        depositEtherFor(user: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositFor(user: PromiseOrValue<string>, rootToken: PromiseOrValue<string>, depositData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rootToChildToken(rootToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
