import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ISynapseRouter {
    type SwapQueryStruct = {
        swapAdapter: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        minAmountOut: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        rawParams: PromiseOrValue<BytesLike>;
    };
    type SwapQueryStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string
    ] & {
        swapAdapter: string;
        tokenOut: string;
        minAmountOut: BigNumber;
        deadline: BigNumber;
        rawParams: string;
    };
    type BridgeTokenStruct = {
        symbol: PromiseOrValue<string>;
        token: PromiseOrValue<string>;
    };
    type BridgeTokenStructOutput = [string, string] & {
        symbol: string;
        token: string;
    };
    type DestRequestStruct = {
        symbol: PromiseOrValue<string>;
        amountIn: PromiseOrValue<BigNumberish>;
    };
    type DestRequestStructOutput = [string, BigNumber] & {
        symbol: string;
        amountIn: BigNumber;
    };
}
export interface ISynapseRouterInterface extends utils.Interface {
    functions: {
        "bridge(address,uint256,address,uint256,(address,address,uint256,uint256,bytes),(address,address,uint256,uint256,bytes))": FunctionFragment;
        "getConnectedBridgeTokens(address)": FunctionFragment;
        "getDestinationAmountOut((string,uint256)[],address)": FunctionFragment;
        "getOriginAmountOut(address,string[],uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridge" | "getConnectedBridgeTokens" | "getDestinationAmountOut" | "getOriginAmountOut"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridge", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        ISynapseRouter.SwapQueryStruct,
        ISynapseRouter.SwapQueryStruct
    ]): string;
    encodeFunctionData(functionFragment: "getConnectedBridgeTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDestinationAmountOut", values: [ISynapseRouter.DestRequestStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getOriginAmountOut", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConnectedBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDestinationAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOriginAmountOut", data: BytesLike): Result;
    events: {};
}
export interface ISynapseRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISynapseRouterInterface;
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
        bridge(to: PromiseOrValue<string>, chainId: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConnectedBridgeTokens(tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            ISynapseRouter.BridgeTokenStructOutput[]
        ] & {
            tokens: ISynapseRouter.BridgeTokenStructOutput[];
        }>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            ISynapseRouter.SwapQueryStructOutput[]
        ] & {
            destQueries: ISynapseRouter.SwapQueryStructOutput[];
        }>;
        getOriginAmountOut(tokenIn: PromiseOrValue<string>, tokenSymbols: PromiseOrValue<string>[], amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            ISynapseRouter.SwapQueryStructOutput[]
        ] & {
            originQueries: ISynapseRouter.SwapQueryStructOutput[];
        }>;
    };
    bridge(to: PromiseOrValue<string>, chainId: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConnectedBridgeTokens(tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISynapseRouter.BridgeTokenStructOutput[]>;
    getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    getOriginAmountOut(tokenIn: PromiseOrValue<string>, tokenSymbols: PromiseOrValue<string>[], amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    callStatic: {
        bridge(to: PromiseOrValue<string>, chainId: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: CallOverrides): Promise<void>;
        getConnectedBridgeTokens(tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISynapseRouter.BridgeTokenStructOutput[]>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
        getOriginAmountOut(tokenIn: PromiseOrValue<string>, tokenSymbols: PromiseOrValue<string>[], amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        bridge(to: PromiseOrValue<string>, chainId: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConnectedBridgeTokens(tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getOriginAmountOut(tokenIn: PromiseOrValue<string>, tokenSymbols: PromiseOrValue<string>[], amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridge(to: PromiseOrValue<string>, chainId: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConnectedBridgeTokens(tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOriginAmountOut(tokenIn: PromiseOrValue<string>, tokenSymbols: PromiseOrValue<string>[], amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
