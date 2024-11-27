import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export type TicketStruct = {
    ticketId: BigNumberish;
    passengerBytes: BytesLike;
};
export type TicketStructOutput = [BigNumber, string] & {
    ticketId: BigNumber;
    passengerBytes: string;
};
export declare namespace IStargate {
    type SendParamStruct = {
        dstEid: BigNumberish;
        to: BytesLike;
        amountLD: BigNumberish;
        minAmountLD: BigNumberish;
        extraOptions: BytesLike;
        composeMsg: BytesLike;
        oftCmd: BytesLike;
    };
    type SendParamStructOutput = [
        number,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        dstEid: number;
        to: string;
        amountLD: BigNumber;
        minAmountLD: BigNumber;
        extraOptions: string;
        composeMsg: string;
        oftCmd: string;
    };
    type OFTLimitStruct = {
        minAmountLD: BigNumberish;
        maxAmountLD: BigNumberish;
    };
    type OFTLimitStructOutput = [BigNumber, BigNumber] & {
        minAmountLD: BigNumber;
        maxAmountLD: BigNumber;
    };
    type OFTFeeDetailStruct = {
        feeAmountLD: BigNumberish;
        description: string;
    };
    type OFTFeeDetailStructOutput = [BigNumber, string] & {
        feeAmountLD: BigNumber;
        description: string;
    };
    type OFTReceiptStruct = {
        amountSentLD: BigNumberish;
        amountReceivedLD: BigNumberish;
    };
    type OFTReceiptStructOutput = [BigNumber, BigNumber] & {
        amountSentLD: BigNumber;
        amountReceivedLD: BigNumber;
    };
    type MessagingFeeStruct = {
        nativeFee: BigNumberish;
        lzTokenFee: BigNumberish;
    };
    type MessagingFeeStructOutput = [BigNumber, BigNumber] & {
        nativeFee: BigNumber;
        lzTokenFee: BigNumber;
    };
    type MessagingReceiptStruct = {
        guid: BytesLike;
        nonce: BigNumberish;
        fee: IStargate.MessagingFeeStruct;
    };
    type MessagingReceiptStructOutput = [
        string,
        BigNumber,
        IStargate.MessagingFeeStructOutput
    ] & {
        guid: string;
        nonce: BigNumber;
        fee: IStargate.MessagingFeeStructOutput;
    };
}
export interface IStargateInterface extends utils.Interface {
    functions: {
        "quoteOFT((uint32,bytes32,uint256,uint256,bytes,bytes,bytes))": FunctionFragment;
        "quoteSend((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),bool)": FunctionFragment;
        "sendToken((uint32,bytes32,uint256,uint256,bytes,bytes,bytes),(uint256,uint256),address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteOFT" | "quoteSend" | "sendToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteOFT", values: [IStargate.SendParamStruct]): string;
    encodeFunctionData(functionFragment: "quoteSend", values: [IStargate.SendParamStruct, boolean]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [IStargate.SendParamStruct, IStargate.MessagingFeeStruct, string]): string;
    decodeFunctionResult(functionFragment: "quoteOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    events: {};
}
export interface IStargate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStargateInterface;
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
        quoteOFT(_sendParam: IStargate.SendParamStruct, overrides?: CallOverrides): Promise<[
            IStargate.OFTLimitStructOutput,
            IStargate.OFTFeeDetailStructOutput[],
            IStargate.OFTReceiptStructOutput
        ] & {
            oftFeeDetails: IStargate.OFTFeeDetailStructOutput[];
        }>;
        quoteSend(_sendParam: IStargate.SendParamStruct, _payInLzToken: boolean, overrides?: CallOverrides): Promise<[IStargate.MessagingFeeStructOutput]>;
        sendToken(_sendParam: IStargate.SendParamStruct, _fee: IStargate.MessagingFeeStruct, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    quoteOFT(_sendParam: IStargate.SendParamStruct, overrides?: CallOverrides): Promise<[
        IStargate.OFTLimitStructOutput,
        IStargate.OFTFeeDetailStructOutput[],
        IStargate.OFTReceiptStructOutput
    ] & {
        oftFeeDetails: IStargate.OFTFeeDetailStructOutput[];
    }>;
    quoteSend(_sendParam: IStargate.SendParamStruct, _payInLzToken: boolean, overrides?: CallOverrides): Promise<IStargate.MessagingFeeStructOutput>;
    sendToken(_sendParam: IStargate.SendParamStruct, _fee: IStargate.MessagingFeeStruct, _refundAddress: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        quoteOFT(_sendParam: IStargate.SendParamStruct, overrides?: CallOverrides): Promise<[
            IStargate.OFTLimitStructOutput,
            IStargate.OFTFeeDetailStructOutput[],
            IStargate.OFTReceiptStructOutput
        ] & {
            oftFeeDetails: IStargate.OFTFeeDetailStructOutput[];
        }>;
        quoteSend(_sendParam: IStargate.SendParamStruct, _payInLzToken: boolean, overrides?: CallOverrides): Promise<IStargate.MessagingFeeStructOutput>;
        sendToken(_sendParam: IStargate.SendParamStruct, _fee: IStargate.MessagingFeeStruct, _refundAddress: string, overrides?: CallOverrides): Promise<[
            IStargate.MessagingReceiptStructOutput,
            IStargate.OFTReceiptStructOutput,
            TicketStructOutput
        ] & {
            msgReceipt: IStargate.MessagingReceiptStructOutput;
            oftReceipt: IStargate.OFTReceiptStructOutput;
            ticket: TicketStructOutput;
        }>;
    };
    filters: {};
    estimateGas: {
        quoteOFT(_sendParam: IStargate.SendParamStruct, overrides?: CallOverrides): Promise<BigNumber>;
        quoteSend(_sendParam: IStargate.SendParamStruct, _payInLzToken: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        sendToken(_sendParam: IStargate.SendParamStruct, _fee: IStargate.MessagingFeeStruct, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteOFT(_sendParam: IStargate.SendParamStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteSend(_sendParam: IStargate.SendParamStruct, _payInLzToken: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendToken(_sendParam: IStargate.SendParamStruct, _fee: IStargate.MessagingFeeStruct, _refundAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
