import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IHopBridgeInterface extends utils.Interface {
    functions: {
        "sendToL2(uint256,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "swapAndSend(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "sendToL2" | "swapAndSend"): FunctionFragment;
    encodeFunctionData(functionFragment: "sendToL2", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapAndSend", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
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
        sendToL2(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndSend(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    sendToL2(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndSend(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sendToL2(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapAndSend(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        sendToL2(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndSend(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sendToL2(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, relayer: PromiseOrValue<string>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndSend(chainId: PromiseOrValue<BigNumberish>, recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, destinationDeadline: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
