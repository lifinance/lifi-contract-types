import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface LiFiDEXAggregatorInterface extends utils.Interface {
    functions: {
        "algebraSwapCallback(int256,int256,bytes)": FunctionFragment;
        "bentoBox()": FunctionFragment;
        "dragonswapV2SwapCallback(int256,int256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pancakeV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "pause()": FunctionFragment;
        "priviledgedUsers(address)": FunctionFragment;
        "processRoute(address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "ramsesV2SwapCallback(int256,int256,bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "resume()": FunctionFragment;
        "setPriviledge(address,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferValueAndprocessRoute(address,uint256,address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "xeiV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "algebraSwapCallback" | "bentoBox" | "dragonswapV2SwapCallback" | "owner" | "pancakeV3SwapCallback" | "pause" | "priviledgedUsers" | "processRoute" | "ramsesV2SwapCallback" | "renounceOwnership" | "resume" | "setPriviledge" | "transferOwnership" | "transferValueAndprocessRoute" | "uniswapV3SwapCallback" | "xeiV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "algebraSwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "bentoBox", values?: undefined): string;
    encodeFunctionData(functionFragment: "dragonswapV2SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pancakeV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "priviledgedUsers", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "processRoute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "ramsesV2SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPriviledge", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferValueAndprocessRoute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "xeiV3SwapCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "algebraSwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bentoBox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dragonswapV2SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pancakeV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priviledgedUsers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ramsesV2SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriviledge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferValueAndprocessRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xeiV3SwapCallback", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "Route(address,address,address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Route"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RouteEventObject {
    from: string;
    to: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOutMin: BigNumber;
    amountOut: BigNumber;
}
export declare type RouteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RouteEventObject>;
export declare type RouteEventFilter = TypedEventFilter<RouteEvent>;
export interface LiFiDEXAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiFiDEXAggregatorInterface;
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
        algebraSwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bentoBox(overrides?: CallOverrides): Promise<[string]>;
        dragonswapV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pancakeV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        priviledgedUsers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ramsesV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPriviledge(user: PromiseOrValue<string>, priviledge: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferValueAndprocessRoute(transferValueTo: PromiseOrValue<string>, amountValueTransfer: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        xeiV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    algebraSwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bentoBox(overrides?: CallOverrides): Promise<string>;
    dragonswapV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pancakeV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    priviledgedUsers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ramsesV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPriviledge(user: PromiseOrValue<string>, priviledge: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferValueAndprocessRoute(transferValueTo: PromiseOrValue<string>, amountValueTransfer: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    xeiV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        algebraSwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        bentoBox(overrides?: CallOverrides): Promise<string>;
        dragonswapV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pancakeV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        priviledgedUsers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        ramsesV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        resume(overrides?: CallOverrides): Promise<void>;
        setPriviledge(user: PromiseOrValue<string>, priviledge: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferValueAndprocessRoute(transferValueTo: PromiseOrValue<string>, amountValueTransfer: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        xeiV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Route(address,address,address,address,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
        Route(from?: PromiseOrValue<string> | null, to?: null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
    };
    estimateGas: {
        algebraSwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bentoBox(overrides?: CallOverrides): Promise<BigNumber>;
        dragonswapV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pancakeV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        priviledgedUsers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ramsesV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPriviledge(user: PromiseOrValue<string>, priviledge: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferValueAndprocessRoute(transferValueTo: PromiseOrValue<string>, amountValueTransfer: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        xeiV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        algebraSwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bentoBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dragonswapV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pancakeV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        priviledgedUsers(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ramsesV2SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPriviledge(user: PromiseOrValue<string>, priviledge: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferValueAndprocessRoute(transferValueTo: PromiseOrValue<string>, amountValueTransfer: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        xeiV3SwapCallback(amount0Delta: PromiseOrValue<BigNumberish>, amount1Delta: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
