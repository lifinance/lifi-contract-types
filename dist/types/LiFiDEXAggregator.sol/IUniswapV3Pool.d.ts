import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface IUniswapV3PoolInterface extends utils.Interface {
    functions: {
        "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [string, boolean, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolInterface;
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
        swap(recipient: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token0(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token1(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    swap(recipient: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token0(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token1(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(recipient: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        swap(recipient: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token0(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token1(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(recipient: string, zeroForOne: boolean, amountSpecified: BigNumberish, sqrtPriceLimitX96: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token1(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IUniswapV3Pool.d.ts.map