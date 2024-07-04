import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IIntent {
    type InitDataStruct = {
        intentId: PromiseOrValue<BytesLike>;
        receiver: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<string>;
        amoutOutMin: PromiseOrValue<BigNumberish>;
    };
    type InitDataStructOutput = [string, string, string, BigNumber] & {
        intentId: string;
        receiver: string;
        tokenOut: string;
        amoutOutMin: BigNumber;
    };
    type CallStruct = {
        to: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type CallStructOutput = [string, BigNumber, string] & {
        to: string;
        value: BigNumber;
        data: string;
    };
}
export interface IntentFactoryInterface extends utils.Interface {
    functions: {
        "deployAndExecuteIntent((bytes32,address,address,uint256),(address,uint256,bytes)[])": FunctionFragment;
        "deployAndWithdrawAll((bytes32,address,address,uint256),address[])": FunctionFragment;
        "getIntentAddress((bytes32,address,address,uint256))": FunctionFragment;
        "implementation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deployAndExecuteIntent" | "deployAndWithdrawAll" | "getIntentAddress" | "implementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "deployAndExecuteIntent", values: [IIntent.InitDataStruct, IIntent.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "deployAndWithdrawAll", values: [IIntent.InitDataStruct, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getIntentAddress", values: [IIntent.InitDataStruct]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deployAndExecuteIntent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployAndWithdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIntentAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    events: {};
}
export interface IntentFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IntentFactoryInterface;
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
        deployAndExecuteIntent(_initData: IIntent.InitDataStruct, _calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployAndWithdrawAll(_initData: IIntent.InitDataStruct, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIntentAddress(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<[string]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
    };
    deployAndExecuteIntent(_initData: IIntent.InitDataStruct, _calls: IIntent.CallStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployAndWithdrawAll(_initData: IIntent.InitDataStruct, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIntentAddress(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deployAndExecuteIntent(_initData: IIntent.InitDataStruct, _calls: IIntent.CallStruct[], overrides?: CallOverrides): Promise<void>;
        deployAndWithdrawAll(_initData: IIntent.InitDataStruct, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        getIntentAddress(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        deployAndExecuteIntent(_initData: IIntent.InitDataStruct, _calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployAndWithdrawAll(_initData: IIntent.InitDataStruct, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIntentAddress(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deployAndExecuteIntent(_initData: IIntent.InitDataStruct, _calls: IIntent.CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployAndWithdrawAll(_initData: IIntent.InitDataStruct, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIntentAddress(_initData: IIntent.InitDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
