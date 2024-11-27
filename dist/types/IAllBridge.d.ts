import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IAllBridgeInterface extends utils.Interface {
    functions: {
        "getBridgingCostInTokens(uint256,uint8,address)": FunctionFragment;
        "getMessageCost(uint256,uint8)": FunctionFragment;
        "getTransactionCost(uint256)": FunctionFragment;
        "pools(bytes32)": FunctionFragment;
        "swapAndBridge(bytes32,uint256,bytes32,uint256,bytes32,uint256,uint8,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getBridgingCostInTokens" | "getMessageCost" | "getTransactionCost" | "pools" | "swapAndBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "getBridgingCostInTokens", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getMessageCost", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTransactionCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pools", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "swapAndBridge", values: [
        BytesLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "getBridgingCostInTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMessageCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTransactionCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndBridge", data: BytesLike): Result;
    events: {};
}
export interface IAllBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAllBridgeInterface;
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
        getBridgingCostInTokens(destinationChainId: BigNumberish, messenger: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMessageCost(chainId: BigNumberish, protocol: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTransactionCost(chainId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        pools(addr: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndBridge(token: BytesLike, amount: BigNumberish, recipient: BytesLike, destinationChainId: BigNumberish, receiveToken: BytesLike, nonce: BigNumberish, messenger: BigNumberish, feeTokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    getBridgingCostInTokens(destinationChainId: BigNumberish, messenger: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    getMessageCost(chainId: BigNumberish, protocol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTransactionCost(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    pools(addr: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndBridge(token: BytesLike, amount: BigNumberish, recipient: BytesLike, destinationChainId: BigNumberish, receiveToken: BytesLike, nonce: BigNumberish, messenger: BigNumberish, feeTokenAmount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        getBridgingCostInTokens(destinationChainId: BigNumberish, messenger: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageCost(chainId: BigNumberish, protocol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionCost(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pools(addr: BytesLike, overrides?: CallOverrides): Promise<string>;
        swapAndBridge(token: BytesLike, amount: BigNumberish, recipient: BytesLike, destinationChainId: BigNumberish, receiveToken: BytesLike, nonce: BigNumberish, messenger: BigNumberish, feeTokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getBridgingCostInTokens(destinationChainId: BigNumberish, messenger: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageCost(chainId: BigNumberish, protocol: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionCost(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        pools(addr: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndBridge(token: BytesLike, amount: BigNumberish, recipient: BytesLike, destinationChainId: BigNumberish, receiveToken: BytesLike, nonce: BigNumberish, messenger: BigNumberish, feeTokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getBridgingCostInTokens(destinationChainId: BigNumberish, messenger: BigNumberish, tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMessageCost(chainId: BigNumberish, protocol: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionCost(chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pools(addr: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndBridge(token: BytesLike, amount: BigNumberish, recipient: BytesLike, destinationChainId: BigNumberish, receiveToken: BytesLike, nonce: BigNumberish, messenger: BigNumberish, feeTokenAmount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAllBridge.d.ts.map