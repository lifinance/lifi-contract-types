import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IGatewayRouterInterface extends utils.Interface {
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
        "getGateway(address)": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateL2TokenAddress" | "createRetryableTicketNoRefundAliasRewrite" | "getGateway" | "outboundTransfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "createRetryableTicketNoRefundAliasRewrite", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "getGateway", values: [string]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRetryableTicketNoRefundAliasRewrite", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    events: {};
}
export interface IGatewayRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGatewayRouterInterface;
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
        calculateL2TokenAddress(_token: string, overrides?: CallOverrides): Promise<[string]>;
        createRetryableTicketNoRefundAliasRewrite(_destAddr: string, _l2CallValue: BigNumberish, _maxSubmissionCost: BigNumberish, _excessFeeRefundAddress: string, _callValueRefundAddress: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    calculateL2TokenAddress(_token: string, overrides?: CallOverrides): Promise<string>;
    createRetryableTicketNoRefundAliasRewrite(_destAddr: string, _l2CallValue: BigNumberish, _maxSubmissionCost: BigNumberish, _excessFeeRefundAddress: string, _callValueRefundAddress: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGateway(_token: string, overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateL2TokenAddress(_token: string, overrides?: CallOverrides): Promise<string>;
        createRetryableTicketNoRefundAliasRewrite(_destAddr: string, _l2CallValue: BigNumberish, _maxSubmissionCost: BigNumberish, _excessFeeRefundAddress: string, _callValueRefundAddress: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        calculateL2TokenAddress(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        createRetryableTicketNoRefundAliasRewrite(_destAddr: string, _l2CallValue: BigNumberish, _maxSubmissionCost: BigNumberish, _excessFeeRefundAddress: string, _callValueRefundAddress: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createRetryableTicketNoRefundAliasRewrite(_destAddr: string, _l2CallValue: BigNumberish, _maxSubmissionCost: BigNumberish, _excessFeeRefundAddress: string, _callValueRefundAddress: string, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGateway(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_token: string, _to: string, _amount: BigNumberish, _maxGas: BigNumberish, _gasPriceBid: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
