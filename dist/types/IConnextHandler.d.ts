import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IConnextHandlerInterface extends utils.Interface {
    functions: {
        "xcall(uint32,address,address,address,uint256,uint256,bytes)": FunctionFragment;
        "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "xcall(uint32,address,address,address,uint256,uint256,bytes)" | "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"): FunctionFragment;
    encodeFunctionData(functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes)", values: [
        BigNumberish,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)", values: [
        BigNumberish,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)", data: BytesLike): Result;
    events: {};
}
export interface IConnextHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConnextHandlerInterface;
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
        "xcall(uint32,address,address,address,uint256,uint256,bytes)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, _relayerFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    "xcall(uint32,address,address,address,uint256,uint256,bytes)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, _relayerFee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        "xcall(uint32,address,address,address,uint256,uint256,bytes)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, overrides?: CallOverrides): Promise<string>;
        "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, _relayerFee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        "xcall(uint32,address,address,address,uint256,uint256,bytes)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, _relayerFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "xcall(uint32,address,address,address,uint256,uint256,bytes)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(destination: BigNumberish, recipient: string, tokenAddress: string, delegate: string, amount: BigNumberish, slippage: BigNumberish, callData: BytesLike, _relayerFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IConnextHandler.d.ts.map