import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export declare namespace IPool {
    type TokenAmountStruct = {
        token: string;
        amount: BigNumberish;
    };
    type TokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
}
export interface IPoolInterface extends utils.Interface {
    functions: {
        "burn(bytes)": FunctionFragment;
        "burnSingle(bytes)": FunctionFragment;
        "flashSwap(bytes)": FunctionFragment;
        "getAmountIn(bytes)": FunctionFragment;
        "getAmountOut(bytes)": FunctionFragment;
        "getAssets()": FunctionFragment;
        "mint(bytes)": FunctionFragment;
        "poolIdentifier()": FunctionFragment;
        "swap(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "burnSingle" | "flashSwap" | "getAmountIn" | "getAmountOut" | "getAssets" | "mint" | "poolIdentifier" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "burnSingle", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "flashSwap", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAmountIn", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "poolIdentifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolIdentifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {
        "Swap(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}
export interface SwapEventObject {
    recipient: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
}
export type SwapEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], SwapEventObject>;
export type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface IPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolInterface;
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
        burn(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        burnSingle(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashSwap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAmountIn(data: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            finalAmountIn: BigNumber;
        }>;
        getAmountOut(data: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            finalAmountOut: BigNumber;
        }>;
        getAssets(overrides?: CallOverrides): Promise<[string[]]>;
        mint(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        poolIdentifier(overrides?: CallOverrides): Promise<[string]>;
        swap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    burn(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    burnSingle(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashSwap(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAmountIn(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountOut(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getAssets(overrides?: CallOverrides): Promise<string[]>;
    mint(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    poolIdentifier(overrides?: CallOverrides): Promise<string>;
    swap(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(data: BytesLike, overrides?: CallOverrides): Promise<IPool.TokenAmountStructOutput[]>;
        burnSingle(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        flashSwap(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountIn(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAssets(overrides?: CallOverrides): Promise<string[]>;
        mint(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        poolIdentifier(overrides?: CallOverrides): Promise<string>;
        swap(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Swap(address,address,address,uint256,uint256)"(recipient?: string | null, tokenIn?: string | null, tokenOut?: string | null, amountIn?: null, amountOut?: null): SwapEventFilter;
        Swap(recipient?: string | null, tokenIn?: string | null, tokenOut?: string | null, amountIn?: null, amountOut?: null): SwapEventFilter;
    };
    estimateGas: {
        burn(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        burnSingle(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashSwap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAmountIn(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mint(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        poolIdentifier(overrides?: CallOverrides): Promise<BigNumber>;
        swap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        burnSingle(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashSwap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAmountIn(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        poolIdentifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IPool.d.ts.map