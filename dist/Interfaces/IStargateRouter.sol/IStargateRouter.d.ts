import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IStargateRouter {
    type LzTxObjStruct = {
        dstGasForCall: BigNumberish;
        dstNativeAmount: BigNumberish;
        dstNativeAddr: BytesLike;
    };
    type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
        dstGasForCall: BigNumber;
        dstNativeAmount: BigNumber;
        dstNativeAddr: string;
    };
}
export interface IStargateRouterInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "quoteLayerZeroFee(uint16,uint8,bytes,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "swap(uint16,uint256,uint256,address,uint256,uint256,(uint256,uint256,bytes),bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "quoteLayerZeroFee" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        IStargateRouter.LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        IStargateRouter.LzTxObjStruct,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IStargateRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStargateRouterInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        quoteLayerZeroFee(dstChainId: BigNumberish, functionType: BigNumberish, toAddress: BytesLike, transferAndCallPayload: BytesLike, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        swap(dstChainId: BigNumberish, srcPoolId: BigNumberish, dstPoolId: BigNumberish, refundAddress: string, amountLD: BigNumberish, minAmountLD: BigNumberish, lzTxParams: IStargateRouter.LzTxObjStruct, to: BytesLike, payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    quoteLayerZeroFee(dstChainId: BigNumberish, functionType: BigNumberish, toAddress: BytesLike, transferAndCallPayload: BytesLike, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    swap(dstChainId: BigNumberish, srcPoolId: BigNumberish, dstPoolId: BigNumberish, refundAddress: string, amountLD: BigNumberish, minAmountLD: BigNumberish, lzTxParams: IStargateRouter.LzTxObjStruct, to: BytesLike, payload: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        quoteLayerZeroFee(dstChainId: BigNumberish, functionType: BigNumberish, toAddress: BytesLike, transferAndCallPayload: BytesLike, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        swap(dstChainId: BigNumberish, srcPoolId: BigNumberish, dstPoolId: BigNumberish, refundAddress: string, amountLD: BigNumberish, minAmountLD: BigNumberish, lzTxParams: IStargateRouter.LzTxObjStruct, to: BytesLike, payload: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        quoteLayerZeroFee(dstChainId: BigNumberish, functionType: BigNumberish, toAddress: BytesLike, transferAndCallPayload: BytesLike, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        swap(dstChainId: BigNumberish, srcPoolId: BigNumberish, dstPoolId: BigNumberish, refundAddress: string, amountLD: BigNumberish, minAmountLD: BigNumberish, lzTxParams: IStargateRouter.LzTxObjStruct, to: BytesLike, payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(dstChainId: BigNumberish, functionType: BigNumberish, toAddress: BytesLike, transferAndCallPayload: BytesLike, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(dstChainId: BigNumberish, srcPoolId: BigNumberish, dstPoolId: BigNumberish, refundAddress: string, amountLD: BigNumberish, minAmountLD: BigNumberish, lzTxParams: IStargateRouter.LzTxObjStruct, to: BytesLike, payload: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
