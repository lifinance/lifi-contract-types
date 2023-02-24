import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface DeployScriptInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "fromCode(bytes4)": FunctionFragment;
        "run()": FunctionFragment;
        "vm()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "fromCode" | "run" | "vm"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "fromCode", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "run", values?: undefined): string;
    encodeFunctionData(functionFragment: "vm", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;
    events: {};
}
export interface DeployScript extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeployScriptInterface;
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
        IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;
        fromCode(code: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vm(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    fromCode(code: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    run(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vm(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        fromCode(code: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        run(overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            deployed: string;
            constructorArgs: string;
        }>;
        vm(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        fromCode(code: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vm(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fromCode(code: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
