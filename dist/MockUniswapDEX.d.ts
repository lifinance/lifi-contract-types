import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MockUniswapDEXInterface extends utils.Interface {
    functions: {
        "inputAmount()": FunctionFragment;
        "outputAmount()": FunctionFragment;
        "outputToken()": FunctionFragment;
        "setSwapOutput(uint256,address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "inputAmount" | "outputAmount" | "outputToken" | "setSwapOutput" | "swapExactTokensForTokens" | "swapTokensForExactTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "inputAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "outputAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "outputToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "setSwapOutput", values: [
        PromiseOrValue<BigNumberish>,
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
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "inputAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outputAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSwapOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
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
        outputAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        outputToken(overrides?: CallOverrides): Promise<[string]>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
    outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
    outputToken(overrides?: CallOverrides): Promise<string>;
    setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputToken(overrides?: CallOverrides): Promise<string>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        inputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputAmount(overrides?: CallOverrides): Promise<BigNumber>;
        outputToken(overrides?: CallOverrides): Promise<BigNumber>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        inputAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outputAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outputToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setSwapOutput(_inputAmount: PromiseOrValue<BigNumberish>, _outputToken: PromiseOrValue<string>, _outputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(arg0: PromiseOrValue<BigNumberish>, amountInMax: PromiseOrValue<BigNumberish>, path: PromiseOrValue<string>[], to: PromiseOrValue<string>, arg4: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
