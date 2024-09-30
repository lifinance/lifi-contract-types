import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ForwarderInterface extends utils.Interface {
    functions: {
        "_diamond()": FunctionFragment;
        "withDiamondDeposit(address,bytes)": FunctionFragment;
        "withForwarderDeposit(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_diamond" | "withDiamondDeposit" | "withForwarderDeposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "_diamond", values?: undefined): string;
    encodeFunctionData(functionFragment: "withDiamondDeposit", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withForwarderDeposit", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "_diamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withDiamondDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withForwarderDeposit", data: BytesLike): Result;
    events: {};
}
export interface Forwarder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForwarderInterface;
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
        _diamond(overrides?: CallOverrides): Promise<[string]>;
        withDiamondDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withForwarderDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _diamond(overrides?: CallOverrides): Promise<string>;
    withDiamondDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withForwarderDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _diamond(overrides?: CallOverrides): Promise<string>;
        withDiamondDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withForwarderDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _diamond(overrides?: CallOverrides): Promise<BigNumber>;
        withDiamondDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withForwarderDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _diamond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withDiamondDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withForwarderDeposit(inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
