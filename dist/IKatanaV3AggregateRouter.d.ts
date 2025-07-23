import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IKatanaV3AggregateRouterInterface extends utils.Interface {
    functions: {
        "execute(bytes,bytes[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute"): FunctionFragment;
    encodeFunctionData(functionFragment: "execute", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    events: {};
}
export interface IKatanaV3AggregateRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKatanaV3AggregateRouterInterface;
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
        execute(commands: PromiseOrValue<BytesLike>, inputs: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    execute(commands: PromiseOrValue<BytesLike>, inputs: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        execute(commands: PromiseOrValue<BytesLike>, inputs: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        execute(commands: PromiseOrValue<BytesLike>, inputs: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(commands: PromiseOrValue<BytesLike>, inputs: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
