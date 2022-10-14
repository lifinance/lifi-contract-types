import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IHyphenRouterInterface extends utils.Interface {
    functions: {
        "depositErc20(uint256,address,address,uint256,string)": FunctionFragment;
        "depositNative(address,uint256,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositErc20" | "depositNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositErc20", values: [BigNumberish, string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "depositNative", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "depositErc20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    events: {};
}
export interface IHyphenRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHyphenRouterInterface;
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
        depositErc20(toChainId: BigNumberish, tokenAddress: string, receiver: string, amount: BigNumberish, tag: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositNative(receiver: string, toChainId: BigNumberish, tag: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    depositErc20(toChainId: BigNumberish, tokenAddress: string, receiver: string, amount: BigNumberish, tag: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositNative(receiver: string, toChainId: BigNumberish, tag: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositErc20(toChainId: BigNumberish, tokenAddress: string, receiver: string, amount: BigNumberish, tag: string, overrides?: CallOverrides): Promise<void>;
        depositNative(receiver: string, toChainId: BigNumberish, tag: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        depositErc20(toChainId: BigNumberish, tokenAddress: string, receiver: string, amount: BigNumberish, tag: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositNative(receiver: string, toChainId: BigNumberish, tag: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositErc20(toChainId: BigNumberish, tokenAddress: string, receiver: string, amount: BigNumberish, tag: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositNative(receiver: string, toChainId: BigNumberish, tag: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
