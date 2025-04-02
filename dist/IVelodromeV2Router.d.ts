import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IVelodromeV2Router {
    type RouteStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        stable: PromiseOrValue<boolean>;
        factory: PromiseOrValue<string>;
    };
    type RouteStructOutput = [string, string, boolean, string] & {
        from: string;
        to: string;
        stable: boolean;
        factory: string;
    };
    type ZapStruct = {
        tokenA: PromiseOrValue<string>;
        tokenB: PromiseOrValue<string>;
        stable: PromiseOrValue<boolean>;
        factory: PromiseOrValue<string>;
        amountOutMinA: PromiseOrValue<BigNumberish>;
        amountOutMinB: PromiseOrValue<BigNumberish>;
        amountAMin: PromiseOrValue<BigNumberish>;
        amountBMin: PromiseOrValue<BigNumberish>;
    };
    type ZapStructOutput = [
        string,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenA: string;
        tokenB: string;
        stable: boolean;
        factory: string;
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    };
}
export interface IVelodromeV2RouterInterface extends utils.Interface {
    functions: {
        "ETHER()": FunctionFragment;
        "UNSAFE_swapExactTokensForTokens(uint256[],(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "defaultFactory()": FunctionFragment;
        "factoryRegistry()": FunctionFragment;
        "generateZapInParams(address,address,bool,address,uint256,uint256,(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
        "generateZapOutParams(address,address,bool,address,uint256,(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool,address)[])": FunctionFragment;
        "getReserves(address,address,bool,address)": FunctionFragment;
        "poolFor(address,address,bool,address)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,address,uint256,uint256)": FunctionFragment;
        "quoteRemoveLiquidity(address,address,bool,address,uint256)": FunctionFragment;
        "quoteStableLiquidityRatio(address,address,address)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHSupportingFeeOnTransferTokens(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "sortTokens(address,address)": FunctionFragment;
        "swapExactETHForTokens(uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,(address,address,bool,address)[],address,uint256)": FunctionFragment;
        "voter()": FunctionFragment;
        "zapIn(address,uint256,uint256,(address,address,bool,address,uint256,uint256,uint256,uint256),(address,address,bool,address)[],(address,address,bool,address)[],address,bool)": FunctionFragment;
        "zapOut(address,uint256,(address,address,bool,address,uint256,uint256,uint256,uint256),(address,address,bool,address)[],(address,address,bool,address)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ETHER" | "UNSAFE_swapExactTokensForTokens" | "addLiquidity" | "addLiquidityETH" | "defaultFactory" | "factoryRegistry" | "generateZapInParams" | "generateZapOutParams" | "getAmountsOut" | "getReserves" | "poolFor" | "quoteAddLiquidity" | "quoteRemoveLiquidity" | "quoteStableLiquidityRatio" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHSupportingFeeOnTransferTokens" | "sortTokens" | "swapExactETHForTokens" | "swapExactETHForTokensSupportingFeeOnTransferTokens" | "swapExactTokensForETH" | "swapExactTokensForETHSupportingFeeOnTransferTokens" | "swapExactTokensForTokens" | "swapExactTokensForTokensSupportingFeeOnTransferTokens" | "voter" | "zapIn" | "zapOut"): FunctionFragment;
    encodeFunctionData(functionFragment: "ETHER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNSAFE_swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>[],
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "defaultFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "factoryRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "generateZapInParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        IVelodromeV2Router.RouteStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "generateZapOutParams", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        IVelodromeV2Router.RouteStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [PromiseOrValue<BigNumberish>, IVelodromeV2Router.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "poolFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quoteRemoveLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quoteStableLiquidityRatio", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETH", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "sortTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "voter", values?: undefined): string;
    encodeFunctionData(functionFragment: "zapIn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.ZapStruct,
        IVelodromeV2Router.RouteStruct[],
        IVelodromeV2Router.RouteStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "zapOut", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        IVelodromeV2Router.ZapStruct,
        IVelodromeV2Router.RouteStruct[],
        IVelodromeV2Router.RouteStruct[]
    ]): string;
    decodeFunctionResult(functionFragment: "ETHER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNSAFE_swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateZapInParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateZapOutParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteStableLiquidityRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "voter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zapIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zapOut", data: BytesLike): Result;
    events: {};
}
export interface IVelodromeV2Router extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVelodromeV2RouterInterface;
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
        ETHER(overrides?: CallOverrides): Promise<[string]>;
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultFactory(overrides?: CallOverrides): Promise<[string]>;
        factoryRegistry(overrides?: CallOverrides): Promise<[string]>;
        generateZapInParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        generateZapOutParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        quoteStableLiquidityRatio(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            ratio: BigNumber;
        }>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        voter(overrides?: CallOverrides): Promise<[string]>;
        zapIn(tokenIn: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, zapInPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, stake: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        zapOut(tokenOut: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, zapOutPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ETHER(overrides?: CallOverrides): Promise<string>;
    UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultFactory(overrides?: CallOverrides): Promise<string>;
    factoryRegistry(overrides?: CallOverrides): Promise<string>;
    generateZapInParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    }>;
    generateZapOutParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountOutMinA: BigNumber;
        amountOutMinB: BigNumber;
        amountAMin: BigNumber;
        amountBMin: BigNumber;
    }>;
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
    }>;
    quoteStableLiquidityRatio(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
        token0: string;
        token1: string;
    }>;
    swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    voter(overrides?: CallOverrides): Promise<string>;
    zapIn(tokenIn: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, zapInPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, stake: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    zapOut(tokenOut: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, zapOutPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ETHER(overrides?: CallOverrides): Promise<string>;
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
        defaultFactory(overrides?: CallOverrides): Promise<string>;
        factoryRegistry(overrides?: CallOverrides): Promise<string>;
        generateZapInParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        generateZapOutParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountOutMinA: BigNumber;
            amountOutMinB: BigNumber;
            amountAMin: BigNumber;
            amountBMin: BigNumber;
        }>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        quoteStableLiquidityRatio(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string, string] & {
            token0: string;
            token1: string;
        }>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        voter(overrides?: CallOverrides): Promise<string>;
        zapIn(tokenIn: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, zapInPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, stake: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        zapOut(tokenOut: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, zapOutPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ETHER(overrides?: CallOverrides): Promise<BigNumber>;
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultFactory(overrides?: CallOverrides): Promise<BigNumber>;
        factoryRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        generateZapInParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        generateZapOutParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quoteStableLiquidityRatio(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        voter(overrides?: CallOverrides): Promise<BigNumber>;
        zapIn(tokenIn: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, zapInPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, stake: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        zapOut(tokenOut: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, zapOutPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ETHER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNSAFE_swapExactTokensForTokens(amounts: PromiseOrValue<BigNumberish>[], routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, amountTokenDesired: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateZapInParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generateZapOutParams(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, amountADesired: PromiseOrValue<BigNumberish>, amountBDesired: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteRemoveLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteStableLiquidityRatio(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountAMin: PromiseOrValue<BigNumberish>, amountBMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, liquidity: PromiseOrValue<BigNumberish>, amountTokenMin: PromiseOrValue<BigNumberish>, amountETHMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sortTokens(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zapIn(tokenIn: PromiseOrValue<string>, amountInA: PromiseOrValue<BigNumberish>, amountInB: PromiseOrValue<BigNumberish>, zapInPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], to: PromiseOrValue<string>, stake: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        zapOut(tokenOut: PromiseOrValue<string>, liquidity: PromiseOrValue<BigNumberish>, zapOutPool: IVelodromeV2Router.ZapStruct, routesA: IVelodromeV2Router.RouteStruct[], routesB: IVelodromeV2Router.RouteStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
