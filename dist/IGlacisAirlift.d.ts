import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type FeeStruct = {
    nativeFee: PromiseOrValue<BigNumberish>;
    tokenFee: PromiseOrValue<BigNumberish>;
};
export type FeeStructOutput = [BigNumber, BigNumber] & {
    nativeFee: BigNumber;
    tokenFee: BigNumber;
};
export type AirliftFeeInfoStruct = {
    airliftFee: FeeStruct;
    correctedAmount: PromiseOrValue<BigNumberish>;
    correctedValue: PromiseOrValue<BigNumberish>;
};
export type AirliftFeeInfoStructOutput = [
    FeeStructOutput,
    BigNumber,
    BigNumber
] & {
    airliftFee: FeeStructOutput;
    correctedAmount: BigNumber;
    correctedValue: BigNumber;
};
export type QuoteSendInfoStruct = {
    gmpFee: FeeStruct;
    amountSent: PromiseOrValue<BigNumberish>;
    valueSent: PromiseOrValue<BigNumberish>;
    airliftFeeInfo: AirliftFeeInfoStruct;
};
export type QuoteSendInfoStructOutput = [
    FeeStructOutput,
    BigNumber,
    BigNumber,
    AirliftFeeInfoStructOutput
] & {
    gmpFee: FeeStructOutput;
    amountSent: BigNumber;
    valueSent: BigNumber;
    airliftFeeInfo: AirliftFeeInfoStructOutput;
};
export interface IGlacisAirliftInterface extends utils.Interface {
    functions: {
        "quoteSend(address,uint256,bytes32,uint256,address,uint256)": FunctionFragment;
        "send(address,uint256,bytes32,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteSend" | "send"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteSend", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    events: {};
}
export interface IGlacisAirlift extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGlacisAirliftInterface;
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
        quoteSend(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    quoteSend(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        quoteSend(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<QuoteSendInfoStructOutput>;
        send(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        quoteSend(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteSend(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
