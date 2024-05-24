import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace StdInvariant {
    type FuzzSelectorStruct = {
        addr: PromiseOrValue<string>;
        selectors: PromiseOrValue<BytesLike>[];
    };
    type FuzzSelectorStructOutput = [string, string[]] & {
        addr: string;
        selectors: string[];
    };
}
export interface StdInvariantInterface extends utils.Interface {
    functions: {
        "excludeArtifacts()": FunctionFragment;
        "excludeContracts()": FunctionFragment;
        "excludeSenders()": FunctionFragment;
        "targetArtifactSelectors()": FunctionFragment;
        "targetArtifacts()": FunctionFragment;
        "targetContracts()": FunctionFragment;
        "targetSelectors()": FunctionFragment;
        "targetSenders()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "excludeArtifacts" | "excludeContracts" | "excludeSenders" | "targetArtifactSelectors" | "targetArtifacts" | "targetContracts" | "targetSelectors" | "targetSenders"): FunctionFragment;
    encodeFunctionData(functionFragment: "excludeArtifacts", values?: undefined): string;
    encodeFunctionData(functionFragment: "excludeContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "excludeSenders", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetArtifactSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetArtifacts", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetSenders", values?: undefined): string;
    decodeFunctionResult(functionFragment: "excludeArtifacts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeSenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetArtifactSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetArtifacts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetSenders", data: BytesLike): Result;
    events: {};
}
export interface StdInvariant extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StdInvariantInterface;
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
        excludeArtifacts(overrides?: CallOverrides): Promise<[string[]] & {
            excludedArtifacts_: string[];
        }>;
        excludeContracts(overrides?: CallOverrides): Promise<[string[]] & {
            excludedContracts_: string[];
        }>;
        excludeSenders(overrides?: CallOverrides): Promise<[string[]] & {
            excludedSenders_: string[];
        }>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<[
            StdInvariant.FuzzSelectorStructOutput[]
        ] & {
            targetedArtifactSelectors_: StdInvariant.FuzzSelectorStructOutput[];
        }>;
        targetArtifacts(overrides?: CallOverrides): Promise<[string[]] & {
            targetedArtifacts_: string[];
        }>;
        targetContracts(overrides?: CallOverrides): Promise<[string[]] & {
            targetedContracts_: string[];
        }>;
        targetSelectors(overrides?: CallOverrides): Promise<[
            StdInvariant.FuzzSelectorStructOutput[]
        ] & {
            targetedSelectors_: StdInvariant.FuzzSelectorStructOutput[];
        }>;
        targetSenders(overrides?: CallOverrides): Promise<[string[]] & {
            targetedSenders_: string[];
        }>;
    };
    excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;
    excludeContracts(overrides?: CallOverrides): Promise<string[]>;
    excludeSenders(overrides?: CallOverrides): Promise<string[]>;
    targetArtifactSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
    targetArtifacts(overrides?: CallOverrides): Promise<string[]>;
    targetContracts(overrides?: CallOverrides): Promise<string[]>;
    targetSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
    targetSenders(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;
        excludeContracts(overrides?: CallOverrides): Promise<string[]>;
        excludeSenders(overrides?: CallOverrides): Promise<string[]>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
        targetArtifacts(overrides?: CallOverrides): Promise<string[]>;
        targetContracts(overrides?: CallOverrides): Promise<string[]>;
        targetSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
        targetSenders(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        excludeArtifacts(overrides?: CallOverrides): Promise<BigNumber>;
        excludeContracts(overrides?: CallOverrides): Promise<BigNumber>;
        excludeSenders(overrides?: CallOverrides): Promise<BigNumber>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        targetArtifacts(overrides?: CallOverrides): Promise<BigNumber>;
        targetContracts(overrides?: CallOverrides): Promise<BigNumber>;
        targetSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        targetSenders(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        excludeArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        excludeContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        excludeSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
