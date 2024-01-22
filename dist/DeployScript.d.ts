import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DeployScriptInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "run(address,address,string,string,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "run"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "run", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
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
        run(_deployerAddress: PromiseOrValue<string>, _create3FactoryAddress: PromiseOrValue<string>, _network: PromiseOrValue<string>, _saltPrefix: PromiseOrValue<string>, _isProduction: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    run(_deployerAddress: PromiseOrValue<string>, _create3FactoryAddress: PromiseOrValue<string>, _network: PromiseOrValue<string>, _saltPrefix: PromiseOrValue<string>, _isProduction: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        run(_deployerAddress: PromiseOrValue<string>, _create3FactoryAddress: PromiseOrValue<string>, _network: PromiseOrValue<string>, _saltPrefix: PromiseOrValue<string>, _isProduction: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            deployed: string;
            constructorArgs: string;
        }>;
    };
    filters: {};
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        run(_deployerAddress: PromiseOrValue<string>, _create3FactoryAddress: PromiseOrValue<string>, _network: PromiseOrValue<string>, _saltPrefix: PromiseOrValue<string>, _isProduction: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        run(_deployerAddress: PromiseOrValue<string>, _create3FactoryAddress: PromiseOrValue<string>, _network: PromiseOrValue<string>, _saltPrefix: PromiseOrValue<string>, _isProduction: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
