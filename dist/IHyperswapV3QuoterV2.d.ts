import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IHyperswapV3QuoterV2 {
    type QuoteExactInputSingleParamsStruct = {
        tokenIn: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        amountIn: PromiseOrValue<BigNumberish>;
        fee: PromiseOrValue<BigNumberish>;
        sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
    };
    type QuoteExactInputSingleParamsStructOutput = [
        string,
        string,
        BigNumber,
        number,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        fee: number;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface IHyperswapV3QuoterV2Interface extends utils.Interface {
    functions: {
        "quoteExactInputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteExactInputSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteExactInputSingle", values: [IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct]): string;
    decodeFunctionResult(functionFragment: "quoteExactInputSingle", data: BytesLike): Result;
    events: {};
}
export interface IHyperswapV3QuoterV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHyperswapV3QuoterV2Interface;
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
        quoteExactInputSingle(params: IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    quoteExactInputSingle(params: IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        quoteExactInputSingle(params: IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber
        ] & {
            amountOut: BigNumber;
            sqrtPriceX96After: BigNumber;
            initializedTicksCrossed: number;
            gasEstimate: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        quoteExactInputSingle(params: IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteExactInputSingle(params: IHyperswapV3QuoterV2.QuoteExactInputSingleParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
