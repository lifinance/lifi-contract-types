import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IL2AmmWrapperInterface extends utils.Interface {
    functions: {
        "bridge()": FunctionFragment;
        "exchangeAddress()": FunctionFragment;
        "hToken()": FunctionFragment;
        "l2CanonicalToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridge" | "exchangeAddress" | "hToken" | "l2CanonicalToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "hToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2CanonicalToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2CanonicalToken", data: BytesLike): Result;
    events: {};
}
export interface IL2AmmWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL2AmmWrapperInterface;
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
        bridge(overrides?: CallOverrides): Promise<[string]>;
        exchangeAddress(overrides?: CallOverrides): Promise<[string]>;
        hToken(overrides?: CallOverrides): Promise<[string]>;
        l2CanonicalToken(overrides?: CallOverrides): Promise<[string]>;
    };
    bridge(overrides?: CallOverrides): Promise<string>;
    exchangeAddress(overrides?: CallOverrides): Promise<string>;
    hToken(overrides?: CallOverrides): Promise<string>;
    l2CanonicalToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        bridge(overrides?: CallOverrides): Promise<string>;
        exchangeAddress(overrides?: CallOverrides): Promise<string>;
        hToken(overrides?: CallOverrides): Promise<string>;
        l2CanonicalToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        hToken(overrides?: CallOverrides): Promise<BigNumber>;
        l2CanonicalToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        l2CanonicalToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
