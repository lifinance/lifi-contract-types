import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MockUniswapDEXInterface extends utils.Interface {
    functions: {
        "inputAmount()": FunctionFragment;
        "mockSwapWillRevertWithReason(string)": FunctionFragment;
        "mockSwapWithPresetInputAndOutput(uint256,uint256,address[],address)": FunctionFragment;
        "outputAmount()": FunctionFragment;
        "outputToken()": FunctionFragment;
        "setSwapOutput(uint256,address,uint256)": FunctionFragment;
        "swapETHForExactTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "inputAmount" | "mockSwapWillRevertWithReason" | "mockSwapWithPresetInputAndOutput" | "outputAmount" | "outputToken" | "setSwapOutput" | "swapETHForExactTokens" | "swapExactETHForTokens" | "swapExactTokensForETH" | "swapExactTokensForTokens" | "swapTokensForExactETH" | "swapTokensForExactTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "inputAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockSwapWillRevertWithReason", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mockSwapWithPresetInputAndOutput", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "outputAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "outputToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "setSwapOutput", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapETHForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "inputAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockSwapWillRevertWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockSwapWithPresetInputAndOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outputAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSwapOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    events: {};
}
export interface MockUniswapDEX extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockUniswapDEXInterface;
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
        inputAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        mockSwapWillRevertWithReason(reason: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mockSwapWithPresetInputAndOutput(amountInIfNotPreset: PromiseOrValue<BigNumberish>, amountOutIfNotPreset: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        outputAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        outputToken(overrides?: CallOverrides): Promise<[string]>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
    mockSwapWillRevertWithReason(reason: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mockSwapWithPresetInputAndOutput(amountInIfNotPreset: PromiseOrValue<BigNumberish>, amountOutIfNotPreset: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
    outputToken(overrides?: CallOverrides): Promise<string>;
    setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        mockSwapWillRevertWithReason(reason: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        mockSwapWithPresetInputAndOutput(amountInIfNotPreset: PromiseOrValue<BigNumberish>, amountOutIfNotPreset: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputToken(overrides?: CallOverrides): Promise<string>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        mockSwapWillRevertWithReason(reason: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mockSwapWithPresetInputAndOutput(amountInIfNotPreset: PromiseOrValue<BigNumberish>, amountOutIfNotPreset: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputToken(overrides?: CallOverrides): Promise<BigNumber>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        inputAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mockSwapWillRevertWithReason(reason: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mockSwapWithPresetInputAndOutput(amountInIfNotPreset: PromiseOrValue<BigNumberish>, amountOutIfNotPreset: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        outputAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outputToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapETHForExactTokens(amountOut: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg3: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactETH(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
