import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IDeBridgeGate {
    type ChainSupportInfoStruct = {
        fixedNativeFee: BigNumberish;
        isSupported: boolean;
        transferFeeBps: BigNumberish;
    };
    type ChainSupportInfoStructOutput = [BigNumber, boolean, number] & {
        fixedNativeFee: BigNumber;
        isSupported: boolean;
        transferFeeBps: number;
    };
}
export interface IDeBridgeGateInterface extends utils.Interface {
    functions: {
        "getChainToConfig(uint256)": FunctionFragment;
        "globalFixedNativeFee()": FunctionFragment;
        "send(address,uint256,uint256,bytes,bytes,bool,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getChainToConfig" | "globalFixedNativeFee" | "send"): FunctionFragment;
    encodeFunctionData(functionFragment: "getChainToConfig", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "globalFixedNativeFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        boolean,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "getChainToConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalFixedNativeFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    events: {};
}
export interface IDeBridgeGate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDeBridgeGateInterface;
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
        getChainToConfig(arg0: BigNumberish, overrides?: CallOverrides): Promise<[IDeBridgeGate.ChainSupportInfoStructOutput]>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        send(_tokenAddress: string, _amount: BigNumberish, _chainIdTo: BigNumberish, _receiver: BytesLike, _permit: BytesLike, _useAssetFee: boolean, _referralCode: BigNumberish, _autoParams: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    getChainToConfig(arg0: BigNumberish, overrides?: CallOverrides): Promise<IDeBridgeGate.ChainSupportInfoStructOutput>;
    globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
    send(_tokenAddress: string, _amount: BigNumberish, _chainIdTo: BigNumberish, _receiver: BytesLike, _permit: BytesLike, _useAssetFee: boolean, _referralCode: BigNumberish, _autoParams: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        getChainToConfig(arg0: BigNumberish, overrides?: CallOverrides): Promise<IDeBridgeGate.ChainSupportInfoStructOutput>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
        send(_tokenAddress: string, _amount: BigNumberish, _chainIdTo: BigNumberish, _receiver: BytesLike, _permit: BytesLike, _useAssetFee: boolean, _referralCode: BigNumberish, _autoParams: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getChainToConfig(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
        send(_tokenAddress: string, _amount: BigNumberish, _chainIdTo: BigNumberish, _receiver: BytesLike, _permit: BytesLike, _useAssetFee: boolean, _referralCode: BigNumberish, _autoParams: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getChainToConfig(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        send(_tokenAddress: string, _amount: BigNumberish, _chainIdTo: BigNumberish, _receiver: BytesLike, _permit: BytesLike, _useAssetFee: boolean, _referralCode: BigNumberish, _autoParams: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDeBridgeGate.d.ts.map