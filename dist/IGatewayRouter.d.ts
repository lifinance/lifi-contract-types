import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IGatewayRouterInterface extends utils.Interface {
    functions: {
        "calculateL2TokenAddress(address)": FunctionFragment;
        "getGateway(address)": FunctionFragment;
        "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
        "unsafeCreateRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calculateL2TokenAddress" | "getGateway" | "outboundTransfer" | "unsafeCreateRetryableTicket"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateL2TokenAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getGateway", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "outboundTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "unsafeCreateRetryableTicket", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "calculateL2TokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outboundTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeCreateRetryableTicket", data: BytesLike): Result;
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
        calculateL2TokenAddress(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getGateway(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        outboundTransfer(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unsafeCreateRetryableTicket(_destAddr: PromiseOrValue<string>, _l2CallValue: PromiseOrValue<BigNumberish>, _maxSubmissionCost: PromiseOrValue<BigNumberish>, _excessFeeRefundAddress: PromiseOrValue<string>, _callValueRefundAddress: PromiseOrValue<string>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    calculateL2TokenAddress(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getGateway(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    outboundTransfer(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unsafeCreateRetryableTicket(_destAddr: PromiseOrValue<string>, _l2CallValue: PromiseOrValue<BigNumberish>, _maxSubmissionCost: PromiseOrValue<BigNumberish>, _excessFeeRefundAddress: PromiseOrValue<string>, _callValueRefundAddress: PromiseOrValue<string>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calculateL2TokenAddress(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getGateway(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        outboundTransfer(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        unsafeCreateRetryableTicket(_destAddr: PromiseOrValue<string>, _l2CallValue: PromiseOrValue<BigNumberish>, _maxSubmissionCost: PromiseOrValue<BigNumberish>, _excessFeeRefundAddress: PromiseOrValue<string>, _callValueRefundAddress: PromiseOrValue<string>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        calculateL2TokenAddress(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getGateway(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        outboundTransfer(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unsafeCreateRetryableTicket(_destAddr: PromiseOrValue<string>, _l2CallValue: PromiseOrValue<BigNumberish>, _maxSubmissionCost: PromiseOrValue<BigNumberish>, _excessFeeRefundAddress: PromiseOrValue<string>, _callValueRefundAddress: PromiseOrValue<string>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calculateL2TokenAddress(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGateway(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outboundTransfer(_token: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unsafeCreateRetryableTicket(_destAddr: PromiseOrValue<string>, _l2CallValue: PromiseOrValue<BigNumberish>, _maxSubmissionCost: PromiseOrValue<BigNumberish>, _excessFeeRefundAddress: PromiseOrValue<string>, _callValueRefundAddress: PromiseOrValue<string>, _maxGas: PromiseOrValue<BigNumberish>, _gasPriceBid: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
