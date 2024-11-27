import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IAcrossSpokePoolInterface extends utils.Interface {
    functions: {
        "deposit(address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositV3(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "depositV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "depositV3", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV3", data: BytesLike): Result;
    events: {};
}
export interface IAcrossSpokePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAcrossSpokePoolInterface;
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
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
