import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IMessageReceiverAppInterface extends utils.Interface {
    functions: {
        "executeMessage(bytes,uint64,bytes,address)": FunctionFragment;
        "executeMessage(address,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
        "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeMessage(bytes,uint64,bytes,address)" | "executeMessage(address,uint64,bytes,address)" | "executeMessageWithTransfer" | "executeMessageWithTransferFallback" | "executeMessageWithTransferRefund"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeMessage(bytes,uint64,bytes,address)", values: [BytesLike, BigNumberish, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "executeMessage(address,uint64,bytes,address)", values: [string, BigNumberish, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransfer", values: [string, string, BigNumberish, BigNumberish, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransferFallback", values: [string, string, BigNumberish, BigNumberish, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "executeMessageWithTransferRefund", values: [string, BigNumberish, BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "executeMessage(bytes,uint64,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessage(address,uint64,bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferFallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMessageWithTransferRefund", data: BytesLike): Result;
    events: {};
}
export interface IMessageReceiverApp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMessageReceiverAppInterface;
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
        "executeMessage(bytes,uint64,bytes,address)"(_sender: BytesLike, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "executeMessage(address,uint64,bytes,address)"(_sender: string, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeMessageWithTransfer(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferFallback(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeMessageWithTransferRefund(_token: string, _amount: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    "executeMessage(bytes,uint64,bytes,address)"(_sender: BytesLike, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "executeMessage(address,uint64,bytes,address)"(_sender: string, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeMessageWithTransfer(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferFallback(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeMessageWithTransferRefund(_token: string, _amount: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: BytesLike, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: CallOverrides): Promise<number>;
        "executeMessage(address,uint64,bytes,address)"(_sender: string, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransfer(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferFallback(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: CallOverrides): Promise<number>;
        executeMessageWithTransferRefund(_token: string, _amount: BigNumberish, _message: BytesLike, _executor: string, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: BytesLike, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "executeMessage(address,uint64,bytes,address)"(_sender: string, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeMessageWithTransfer(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeMessageWithTransferFallback(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeMessageWithTransferRefund(_token: string, _amount: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "executeMessage(bytes,uint64,bytes,address)"(_sender: BytesLike, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "executeMessage(address,uint64,bytes,address)"(_sender: string, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransfer(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferFallback(_sender: string, _token: string, _amount: BigNumberish, _srcChainId: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeMessageWithTransferRefund(_token: string, _amount: BigNumberish, _message: BytesLike, _executor: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
