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
        "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)": FunctionFragment;
        "send(address,uint256,bytes32,uint256,address,bytes32)": FunctionFragment;
        "send(address,uint256,bytes32,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteSend(address,uint256,bytes32,uint256,address,uint256)" | "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)" | "send(address,uint256,bytes32,uint256,address,bytes32)" | "send(address,uint256,bytes32,uint256,address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteSend(address,uint256,bytes32,uint256,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send(address,uint256,bytes32,uint256,address,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "send(address,uint256,bytes32,uint256,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "quoteSend(address,uint256,bytes32,uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send(address,uint256,bytes32,uint256,address,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send(address,uint256,bytes32,uint256,address)", data: BytesLike): Result;
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
        "quoteSend(address,uint256,bytes32,uint256,address,uint256)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, outputToken: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "send(address,uint256,bytes32,uint256,address,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, outputToken: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "send(address,uint256,bytes32,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    "quoteSend(address,uint256,bytes32,uint256,address,uint256)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, outputToken: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "send(address,uint256,bytes32,uint256,address,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, outputToken: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "send(address,uint256,bytes32,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "quoteSend(address,uint256,bytes32,uint256,address,uint256)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<QuoteSendInfoStructOutput>;
        "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, outputToken: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<QuoteSendInfoStructOutput>;
        "send(address,uint256,bytes32,uint256,address,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, outputToken: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "send(address,uint256,bytes32,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        "quoteSend(address,uint256,bytes32,uint256,address,uint256)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, outputToken: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "send(address,uint256,bytes32,uint256,address,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, outputToken: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "send(address,uint256,bytes32,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "quoteSend(address,uint256,bytes32,uint256,address,uint256)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "quoteSend(address,uint256,bytes32,uint256,address,uint256,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, msgValue: PromiseOrValue<BigNumberish>, outputToken: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "send(address,uint256,bytes32,uint256,address,bytes32)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, outputToken: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "send(address,uint256,bytes32,uint256,address)"(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BytesLike>, destinationChainId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
