import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IDeBridgeGate {
    type ChainSupportInfoStruct = {
        fixedNativeFee: PromiseOrValue<BigNumberish>;
        isSupported: PromiseOrValue<boolean>;
        transferFeeBps: PromiseOrValue<BigNumberish>;
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
    encodeFunctionData(functionFragment: "getChainToConfig", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "globalFixedNativeFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
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
        getChainToConfig(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IDeBridgeGate.ChainSupportInfoStructOutput]>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        send(_tokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _chainIdTo: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _permit: PromiseOrValue<BytesLike>, _useAssetFee: PromiseOrValue<boolean>, _referralCode: PromiseOrValue<BigNumberish>, _autoParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getChainToConfig(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IDeBridgeGate.ChainSupportInfoStructOutput>;
    globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
    send(_tokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _chainIdTo: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _permit: PromiseOrValue<BytesLike>, _useAssetFee: PromiseOrValue<boolean>, _referralCode: PromiseOrValue<BigNumberish>, _autoParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getChainToConfig(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IDeBridgeGate.ChainSupportInfoStructOutput>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
        send(_tokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _chainIdTo: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _permit: PromiseOrValue<BytesLike>, _useAssetFee: PromiseOrValue<boolean>, _referralCode: PromiseOrValue<BigNumberish>, _autoParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getChainToConfig(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
        send(_tokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _chainIdTo: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _permit: PromiseOrValue<BytesLike>, _useAssetFee: PromiseOrValue<boolean>, _referralCode: PromiseOrValue<BigNumberish>, _autoParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getChainToConfig(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        send(_tokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _chainIdTo: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _permit: PromiseOrValue<BytesLike>, _useAssetFee: PromiseOrValue<boolean>, _referralCode: PromiseOrValue<BigNumberish>, _autoParams: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
