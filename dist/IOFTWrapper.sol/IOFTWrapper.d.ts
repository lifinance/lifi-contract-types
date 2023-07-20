import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace IOFTWrapper {
    type FeeObjStruct = {
        callerBps: PromiseOrValue<BigNumberish>;
        caller: PromiseOrValue<string>;
        partnerId: PromiseOrValue<BytesLike>;
    };
    type FeeObjStructOutput = [BigNumber, string, string] & {
        callerBps: BigNumber;
        caller: string;
        partnerId: string;
    };
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
export interface IOFTWrapperInterface extends utils.Interface {
    functions: {
        "estimateSendFee(address,uint16,bytes,uint256,bool,bytes,(uint256,address,bytes2))": FunctionFragment;
        "estimateSendFeeV2(address,uint16,bytes32,uint256,bool,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendOFT(address,uint16,bytes,uint256,uint256,address,address,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendOFTFeeV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendOFTV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFT(address,uint16,bytes,uint256,uint256,address,address,bytes,(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFTFeeV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
        "sendProxyOFTV2(address,uint16,bytes32,uint256,uint256,(address,address,bytes),(uint256,address,bytes2))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "estimateSendFee" | "estimateSendFeeV2" | "sendOFT" | "sendOFTFeeV2" | "sendOFTV2" | "sendProxyOFT" | "sendProxyOFTFeeV2" | "sendProxyOFTV2"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFTFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IOFTWrapper.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendOFTV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IOFTWrapper.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFTFeeV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IOFTWrapper.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendProxyOFTV2", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IOFTWrapper.LzCallParamsStruct,
        IOFTWrapper.FeeObjStruct
    ]): string;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFTFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOFTV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFTFeeV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendProxyOFTV2", data: BytesLike): Result;
    events: {};
}
export interface IOFTWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOFTWrapperInterface;
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
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        estimateSendFee(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendOFT(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOFTFeeV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOFTV2(_oft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFT(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _zroPaymentAddress: PromiseOrValue<string>, _adapterParams: PromiseOrValue<BytesLike>, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFTFeeV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendProxyOFTV2(_proxyOft: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _minAmount: PromiseOrValue<BigNumberish>, _callParams: IOFTWrapper.LzCallParamsStruct, _feeObj: IOFTWrapper.FeeObjStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
