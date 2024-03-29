import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IStargateRouter {
    type LzTxObjStruct = {
        dstGasForCall: PromiseOrValue<BigNumberish>;
        dstNativeAmount: PromiseOrValue<BigNumberish>;
        dstNativeAddr: PromiseOrValue<BytesLike>;
    };
    type LzTxObjStructOutput = [BigNumber, BigNumber, string] & {
        dstGasForCall: BigNumber;
        dstNativeAmount: BigNumber;
        dstNativeAddr: string;
    };
    type SwapAmountStruct = {
        amountLD: PromiseOrValue<BigNumberish>;
        minAmountLD: PromiseOrValue<BigNumberish>;
    };
    type SwapAmountStructOutput = [BigNumber, BigNumber] & {
        amountLD: BigNumber;
        minAmountLD: BigNumber;
    };
}
export interface IStargateRouterInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "quoteLayerZeroFee(uint16,uint8,bytes,bytes,(uint256,uint256,bytes))": FunctionFragment;
        "swap(uint16,uint256,uint256,address,uint256,uint256,(uint256,uint256,bytes),bytes,bytes)": FunctionFragment;
        "swapETHAndCall(uint16,address,bytes,(uint256,uint256),(uint256,uint256,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "quoteLayerZeroFee" | "swap" | "swapETHAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteLayerZeroFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        IStargateRouter.LzTxObjStruct
    ]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        IStargateRouter.LzTxObjStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swapETHAndCall", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        IStargateRouter.SwapAmountStruct,
        IStargateRouter.LzTxObjStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteLayerZeroFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHAndCall", data: BytesLike): Result;
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
        quoteLayerZeroFee(dstChainId: PromiseOrValue<BigNumberish>, functionType: PromiseOrValue<BigNumberish>, toAddress: PromiseOrValue<BytesLike>, transferAndCallPayload: PromiseOrValue<BytesLike>, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        swap(dstChainId: PromiseOrValue<BigNumberish>, srcPoolId: PromiseOrValue<BigNumberish>, dstPoolId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, minAmountLD: PromiseOrValue<BigNumberish>, lzTxParams: IStargateRouter.LzTxObjStruct, to: PromiseOrValue<BytesLike>, payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapETHAndCall(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _swapAmount: IStargateRouter.SwapAmountStruct, _lzTxParams: IStargateRouter.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    quoteLayerZeroFee(dstChainId: PromiseOrValue<BigNumberish>, functionType: PromiseOrValue<BigNumberish>, toAddress: PromiseOrValue<BytesLike>, transferAndCallPayload: PromiseOrValue<BytesLike>, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    swap(dstChainId: PromiseOrValue<BigNumberish>, srcPoolId: PromiseOrValue<BigNumberish>, dstPoolId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, minAmountLD: PromiseOrValue<BigNumberish>, lzTxParams: IStargateRouter.LzTxObjStruct, to: PromiseOrValue<BytesLike>, payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapETHAndCall(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _swapAmount: IStargateRouter.SwapAmountStruct, _lzTxParams: IStargateRouter.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        quoteLayerZeroFee(dstChainId: PromiseOrValue<BigNumberish>, functionType: PromiseOrValue<BigNumberish>, toAddress: PromiseOrValue<BytesLike>, transferAndCallPayload: PromiseOrValue<BytesLike>, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        swap(dstChainId: PromiseOrValue<BigNumberish>, srcPoolId: PromiseOrValue<BigNumberish>, dstPoolId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, minAmountLD: PromiseOrValue<BigNumberish>, lzTxParams: IStargateRouter.LzTxObjStruct, to: PromiseOrValue<BytesLike>, payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        swapETHAndCall(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _swapAmount: IStargateRouter.SwapAmountStruct, _lzTxParams: IStargateRouter.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        quoteLayerZeroFee(dstChainId: PromiseOrValue<BigNumberish>, functionType: PromiseOrValue<BigNumberish>, toAddress: PromiseOrValue<BytesLike>, transferAndCallPayload: PromiseOrValue<BytesLike>, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<BigNumber>;
        swap(dstChainId: PromiseOrValue<BigNumberish>, srcPoolId: PromiseOrValue<BigNumberish>, dstPoolId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, minAmountLD: PromiseOrValue<BigNumberish>, lzTxParams: IStargateRouter.LzTxObjStruct, to: PromiseOrValue<BytesLike>, payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapETHAndCall(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _swapAmount: IStargateRouter.SwapAmountStruct, _lzTxParams: IStargateRouter.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteLayerZeroFee(dstChainId: PromiseOrValue<BigNumberish>, functionType: PromiseOrValue<BigNumberish>, toAddress: PromiseOrValue<BytesLike>, transferAndCallPayload: PromiseOrValue<BytesLike>, lzTxParams: IStargateRouter.LzTxObjStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(dstChainId: PromiseOrValue<BigNumberish>, srcPoolId: PromiseOrValue<BigNumberish>, dstPoolId: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, amountLD: PromiseOrValue<BigNumberish>, minAmountLD: PromiseOrValue<BigNumberish>, lzTxParams: IStargateRouter.LzTxObjStruct, to: PromiseOrValue<BytesLike>, payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapETHAndCall(_dstChainId: PromiseOrValue<BigNumberish>, _refundAddress: PromiseOrValue<string>, _toAddress: PromiseOrValue<BytesLike>, _swapAmount: IStargateRouter.SwapAmountStruct, _lzTxParams: IStargateRouter.LzTxObjStruct, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
