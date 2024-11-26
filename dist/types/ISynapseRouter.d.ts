import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISynapseRouter {
    type SwapQueryStruct = {
        swapAdapter: string;
        tokenOut: string;
        minAmountOut: BigNumberish;
        deadline: BigNumberish;
        rawParams: BytesLike;
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
        symbol: string;
        token: string;
    };
    type BridgeTokenStructOutput = [string, string] & {
        symbol: string;
        token: string;
    };
    type DestRequestStruct = {
        symbol: string;
        amountIn: BigNumberish;
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
        string,
        BigNumberish,
        string,
        BigNumberish,
        ISynapseRouter.SwapQueryStruct,
        ISynapseRouter.SwapQueryStruct
    ]): string;
    encodeFunctionData(functionFragment: "getConnectedBridgeTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "getDestinationAmountOut", values: [ISynapseRouter.DestRequestStruct[], string]): string;
    encodeFunctionData(functionFragment: "getOriginAmountOut", values: [string, string[], BigNumberish]): string;
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
        bridge(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getConnectedBridgeTokens(tokenOut: string, overrides?: CallOverrides): Promise<[
            ISynapseRouter.BridgeTokenStructOutput[]
        ] & {
            tokens: ISynapseRouter.BridgeTokenStructOutput[];
        }>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: string, overrides?: CallOverrides): Promise<[
            ISynapseRouter.SwapQueryStructOutput[]
        ] & {
            destQueries: ISynapseRouter.SwapQueryStructOutput[];
        }>;
        getOriginAmountOut(tokenIn: string, tokenSymbols: string[], amountIn: BigNumberish, overrides?: CallOverrides): Promise<[
            ISynapseRouter.SwapQueryStructOutput[]
        ] & {
            originQueries: ISynapseRouter.SwapQueryStructOutput[];
        }>;
    };
    bridge(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getConnectedBridgeTokens(tokenOut: string, overrides?: CallOverrides): Promise<ISynapseRouter.BridgeTokenStructOutput[]>;
    getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: string, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    getOriginAmountOut(tokenIn: string, tokenSymbols: string[], amountIn: BigNumberish, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    callStatic: {
        bridge(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: CallOverrides): Promise<void>;
        getConnectedBridgeTokens(tokenOut: string, overrides?: CallOverrides): Promise<ISynapseRouter.BridgeTokenStructOutput[]>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: string, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
        getOriginAmountOut(tokenIn: string, tokenSymbols: string[], amountIn: BigNumberish, overrides?: CallOverrides): Promise<ISynapseRouter.SwapQueryStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        bridge(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getConnectedBridgeTokens(tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        getOriginAmountOut(tokenIn: string, tokenSymbols: string[], amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridge(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, originQuery: ISynapseRouter.SwapQueryStruct, destQuery: ISynapseRouter.SwapQueryStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getConnectedBridgeTokens(tokenOut: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDestinationAmountOut(requests: ISynapseRouter.DestRequestStruct[], tokenOut: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOriginAmountOut(tokenIn: string, tokenSymbols: string[], amountIn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISynapseRouter.d.ts.map