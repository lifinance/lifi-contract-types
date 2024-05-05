import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare type ExactInputSingleParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    fee: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    deadline: PromiseOrValue<BigNumberish>;
    amountIn: PromiseOrValue<BigNumberish>;
    amountOutMinimum: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
};
export declare type ExactInputSingleParamsStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    deadline: BigNumber;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    sqrtPriceLimitX96: BigNumber;
};
export interface ISwapRouterInterface extends utils.Interface {
    functions: {
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exactInputSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [ExactInputSingleParamsStruct]): string;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    events: {};
}
export interface ISwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISwapRouterInterface;
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
        exactInputSingle(params: ExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exactInputSingle(params: ExactInputSingleParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exactInputSingle(params: ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        exactInputSingle(params: ExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exactInputSingle(params: ExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
