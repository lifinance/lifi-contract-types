import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
}
export interface IVelodromeV2RouterInterface extends utils.Interface {
    functions: {
        "getAmountsOut(uint256,(address,address,bool,address)[])": FunctionFragment;
        "poolFor(address,address,bool,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAmountsOut" | "poolFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [PromiseOrValue<BigNumberish>, IVelodromeV2Router.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "poolFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFor", data: BytesLike): Result;
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
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
    };
    getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAmountsOut(amountIn: PromiseOrValue<BigNumberish>, routes: IVelodromeV2Router.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFor(tokenA: PromiseOrValue<string>, tokenB: PromiseOrValue<string>, stable: PromiseOrValue<boolean>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
