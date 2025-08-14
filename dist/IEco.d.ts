import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IEco {
    type RewardStruct = {
        prover: PromiseOrValue<string>;
        tokens: PromiseOrValue<string>[];
        amounts: PromiseOrValue<BigNumberish>[];
        deadline: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
    };
    type RewardStructOutput = [
        string,
        string[],
        BigNumber[],
        BigNumber,
        BigNumber
    ] & {
        prover: string;
        tokens: string[];
        amounts: BigNumber[];
        deadline: BigNumber;
        nonce: BigNumber;
    };
    type RouteStruct = {
        source: PromiseOrValue<string>;
        destination: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type RouteStructOutput = [string, BigNumber, string] & {
        source: string;
        destination: BigNumber;
        data: string;
    };
    type IntentStruct = {
        route: IEco.RouteStruct;
        reward: IEco.RewardStruct;
    };
    type IntentStructOutput = [
        IEco.RouteStructOutput,
        IEco.RewardStructOutput
    ] & {
        route: IEco.RouteStructOutput;
        reward: IEco.RewardStructOutput;
    };
}
export interface IEcoInterface extends utils.Interface {
    functions: {
        "fund(bytes32,(address,address[],uint256[],uint256,uint256),bool)": FunctionFragment;
        "publish(((address,uint256,bytes),(address,address[],uint256[],uint256,uint256)))": FunctionFragment;
        "publishAndFund(((address,uint256,bytes),(address,address[],uint256[],uint256,uint256)),bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fund" | "publish" | "publishAndFund"): FunctionFragment;
    encodeFunctionData(functionFragment: "fund", values: [
        PromiseOrValue<BytesLike>,
        IEco.RewardStruct,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "publish", values: [IEco.IntentStruct]): string;
    encodeFunctionData(functionFragment: "publishAndFund", values: [IEco.IntentStruct, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishAndFund", data: BytesLike): Result;
    events: {};
}
export interface IEco extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEcoInterface;
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
        fund(routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        publish(intent: IEco.IntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        publishAndFund(intent: IEco.IntentStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    fund(routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    publish(intent: IEco.IntentStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    publishAndFund(intent: IEco.IntentStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        fund(routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        publish(intent: IEco.IntentStruct, overrides?: CallOverrides): Promise<string>;
        publishAndFund(intent: IEco.IntentStruct, allowPartial: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        fund(routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        publish(intent: IEco.IntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        publishAndFund(intent: IEco.IntentStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        fund(routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        publish(intent: IEco.IntentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        publishAndFund(intent: IEco.IntentStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
