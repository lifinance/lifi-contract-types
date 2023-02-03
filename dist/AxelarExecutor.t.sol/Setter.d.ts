import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface SetterInterface extends utils.Interface {
    functions: {
        "message()": FunctionFragment;
        "setMessage(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "message" | "setMessage"): FunctionFragment;
    encodeFunctionData(functionFragment: "message", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMessage", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMessage", data: BytesLike): Result;
    events: {};
}
export interface Setter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SetterInterface;
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
        message(overrides?: CallOverrides): Promise<[string]>;
        setMessage(_message: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    message(overrides?: CallOverrides): Promise<string>;
    setMessage(_message: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        message(overrides?: CallOverrides): Promise<string>;
        setMessage(_message: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        message(overrides?: CallOverrides): Promise<BigNumber>;
        setMessage(_message: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        message(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMessage(_message: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
