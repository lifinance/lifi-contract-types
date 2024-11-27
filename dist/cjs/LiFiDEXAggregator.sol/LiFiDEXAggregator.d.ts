import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface LiFiDEXAggregatorInterface extends utils.Interface {
    functions: {
        "algebraSwapCallback(int256,int256,bytes)": FunctionFragment;
        "bentoBox()": FunctionFragment;
        "owner()": FunctionFragment;
        "pancakeV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "pause()": FunctionFragment;
        "priviledgedUsers(address)": FunctionFragment;
        "processRoute(address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "resume()": FunctionFragment;
        "setPriviledge(address,bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "transferValueAndprocessRoute(address,uint256,address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "algebraSwapCallback" | "bentoBox" | "owner" | "pancakeV3SwapCallback" | "pause" | "priviledgedUsers" | "processRoute" | "renounceOwnership" | "resume" | "setPriviledge" | "transferOwnership" | "transferValueAndprocessRoute" | "uniswapV3SwapCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "algebraSwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "bentoBox", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pancakeV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "priviledgedUsers", values: [string]): string;
    encodeFunctionData(functionFragment: "processRoute", values: [string, BigNumberish, string, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "resume", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPriviledge", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "transferValueAndprocessRoute", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        string,
        BigNumberish,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "algebraSwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bentoBox", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pancakeV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priviledgedUsers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriviledge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferValueAndprocessRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
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
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RouteEventObject {
    from: string;
    to: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOutMin: BigNumber;
    amountOut: BigNumber;
}
export type RouteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RouteEventObject>;
export type RouteEventFilter = TypedEventFilter<RouteEvent>;
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
        algebraSwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        bentoBox(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pancakeV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        priviledgedUsers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        processRoute(tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resume(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPriviledge(user: string, priviledge: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferValueAndprocessRoute(transferValueTo: string, amountValueTransfer: BigNumberish, tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    algebraSwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    bentoBox(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pancakeV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    priviledgedUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    processRoute(tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resume(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPriviledge(user: string, priviledge: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferValueAndprocessRoute(transferValueTo: string, amountValueTransfer: BigNumberish, tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        algebraSwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        bentoBox(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pancakeV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        priviledgedUsers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        processRoute(tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        resume(overrides?: CallOverrides): Promise<void>;
        setPriviledge(user: string, priviledge: boolean, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferValueAndprocessRoute(transferValueTo: string, amountValueTransfer: BigNumberish, tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Route(address,address,address,address,uint256,uint256,uint256)"(from?: string | null, to?: null, tokenIn?: string | null, tokenOut?: string | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
        Route(from?: string | null, to?: null, tokenIn?: string | null, tokenOut?: string | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
    };
    estimateGas: {
        algebraSwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        bentoBox(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pancakeV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        priviledgedUsers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        processRoute(tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resume(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPriviledge(user: string, priviledge: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferValueAndprocessRoute(transferValueTo: string, amountValueTransfer: BigNumberish, tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        algebraSwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        bentoBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pancakeV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        priviledgedUsers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processRoute(tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resume(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPriviledge(user: string, priviledge: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferValueAndprocessRoute(transferValueTo: string, amountValueTransfer: BigNumberish, tokenIn: string, amountIn: BigNumberish, tokenOut: string, amountOutMin: BigNumberish, to: string, route: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
