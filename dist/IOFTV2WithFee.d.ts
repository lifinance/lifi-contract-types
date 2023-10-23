import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IOFTV2 {
    type LzCallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type LzCallParamsStructOutput = [string, string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
        adapterParams: string;
    };
}
export interface IOFTV2WithFeeInterface extends utils.Interface {
    functions: {
        "sendFrom(address,uint16,bytes32,uint256,uint256,(address,address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "sendFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IOFTV2.LzCallParamsStruct
    ]): string;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    events: {};
}
export interface IOFTV2WithFee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOFTV2WithFeeInterface;
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
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTV2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTV2.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTV2.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTV2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sendFrom(_from: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTV2.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
