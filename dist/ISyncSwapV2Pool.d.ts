import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ISyncSwapV2Pool {
    type TokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
}
export interface ISyncSwapV2PoolInterface extends utils.Interface {
    functions: {
        "swap(bytes,address,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface ISyncSwapV2Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISyncSwapV2PoolInterface;
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
        swap(data: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, callback: PromiseOrValue<string>, callbackData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swap(data: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, callback: PromiseOrValue<string>, callbackData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(data: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, callback: PromiseOrValue<string>, callbackData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ISyncSwapV2Pool.TokenAmountStructOutput>;
    };
    filters: {};
    estimateGas: {
        swap(data: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, callback: PromiseOrValue<string>, callbackData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(data: PromiseOrValue<BytesLike>, sender: PromiseOrValue<string>, callback: PromiseOrValue<string>, callbackData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
