import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface IHopBridgeInterface extends utils.Interface {
    functions: {
        "send(uint256,address,uint256,uint256,uint256,uint256)": FunctionFragment;
        "sendToL2(uint256,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "swapAndSend(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "send" | "sendToL2" | "swapAndSend"): FunctionFragment;
    encodeFunctionData(functionFragment: "send", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "sendToL2", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapAndSend", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToL2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndSend", data: BytesLike): Result;
    events: {};
}
export interface IHopBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHopBridgeInterface;
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
        send(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    send(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        send(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        send(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        send(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
