import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface TestAMMInterface extends utils.Interface {
    functions: {
        "swap(address,uint256,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface TestAMM extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestAMMInterface;
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
        swap(_fromToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _toToken: PromiseOrValue<string>, _amountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swap(_fromToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _toToken: PromiseOrValue<string>, _amountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(_fromToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _toToken: PromiseOrValue<string>, _amountOut: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swap(_fromToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _toToken: PromiseOrValue<string>, _amountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(_fromToken: PromiseOrValue<string>, _amountIn: PromiseOrValue<BigNumberish>, _toToken: PromiseOrValue<string>, _amountOut: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
