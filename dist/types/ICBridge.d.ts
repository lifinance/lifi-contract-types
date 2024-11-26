import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ICBridgeInterface extends utils.Interface {
    functions: {
        "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
        "sendNative(address,uint256,uint64,uint64,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "send" | "sendNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "send", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "sendNative", values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNative", data: BytesLike): Result;
    events: {};
}
export interface ICBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICBridgeInterface;
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
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    send(_receiver: string, _token: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sendNative(_receiver: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        send(_receiver: string, _token: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sendNative(_receiver: string, _amount: BigNumberish, _dstChainId: BigNumberish, _nonce: BigNumberish, _maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ICBridge.d.ts.map