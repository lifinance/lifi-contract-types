import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IAllBridgeInterface extends utils.Interface {
    functions: {
        "getBridgingCostInTokens(uint256,uint8,address)": FunctionFragment;
        "getMessageCost(uint256,uint8)": FunctionFragment;
        "getTransactionCost(uint256)": FunctionFragment;
        "pools(bytes32)": FunctionFragment;
        "swapAndBridge(bytes32,uint256,bytes32,uint256,bytes32,uint256,uint8,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getBridgingCostInTokens" | "getMessageCost" | "getTransactionCost" | "pools" | "swapAndBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "getBridgingCostInTokens", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getMessageCost", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTransactionCost", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pools", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "swapAndBridge", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
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
        getBridgingCostInTokens(destinationChainId: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMessageCost(chainId: PromiseOrValue<BigNumberish>, protocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTransactionCost(chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        pools(addr: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndBridge(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, receiveToken: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, feeTokenAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getBridgingCostInTokens(destinationChainId: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getMessageCost(chainId: PromiseOrValue<BigNumberish>, protocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTransactionCost(chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    pools(addr: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndBridge(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, receiveToken: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, feeTokenAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getBridgingCostInTokens(destinationChainId: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageCost(chainId: PromiseOrValue<BigNumberish>, protocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionCost(chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pools(addr: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        swapAndBridge(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, receiveToken: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, feeTokenAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getBridgingCostInTokens(destinationChainId: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMessageCost(chainId: PromiseOrValue<BigNumberish>, protocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTransactionCost(chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pools(addr: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndBridge(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, receiveToken: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, feeTokenAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getBridgingCostInTokens(destinationChainId: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMessageCost(chainId: PromiseOrValue<BigNumberish>, protocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransactionCost(chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pools(addr: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndBridge(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, receiveToken: PromiseOrValue<BytesLike>, nonce: PromiseOrValue<BigNumberish>, messenger: PromiseOrValue<BigNumberish>, feeTokenAmount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
