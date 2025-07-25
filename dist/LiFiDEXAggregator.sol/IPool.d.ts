import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IPool {
    type TokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
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
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "burnSingle", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "flashSwap", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAmountIn", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "poolIdentifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [PromiseOrValue<BytesLike>]): string;
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
        burn(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnSingle(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flashSwap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAmountIn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            finalAmountIn: BigNumber;
        }>;
        getAmountOut(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            finalAmountOut: BigNumber;
        }>;
        getAssets(overrides?: CallOverrides): Promise<[string[]]>;
        mint(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        poolIdentifier(overrides?: CallOverrides): Promise<[string]>;
        swap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    burn(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnSingle(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flashSwap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAmountIn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountOut(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getAssets(overrides?: CallOverrides): Promise<string[]>;
    mint(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    poolIdentifier(overrides?: CallOverrides): Promise<string>;
    swap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IPool.TokenAmountStructOutput[]>;
        burnSingle(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        flashSwap(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountIn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssets(overrides?: CallOverrides): Promise<string[]>;
        mint(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        poolIdentifier(overrides?: CallOverrides): Promise<string>;
        swap(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Swap(address,address,address,uint256,uint256)"(recipient?: PromiseOrValue<string> | null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOut?: null): SwapEventFilter;
        Swap(recipient?: PromiseOrValue<string> | null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOut?: null): SwapEventFilter;
    };
    estimateGas: {
        burn(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnSingle(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flashSwap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAmountIn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mint(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        poolIdentifier(overrides?: CallOverrides): Promise<BigNumber>;
        swap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnSingle(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flashSwap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAmountIn(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        poolIdentifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
