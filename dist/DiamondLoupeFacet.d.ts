import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IDiamondLoupe {
    type FacetStruct = {
        facetAddress: PromiseOrValue<string>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetStructOutput = [string, string[]] & {
        facetAddress: string;
        functionSelectors: string[];
    };
}
export interface DiamondLoupeFacetInterface extends utils.Interface {
    functions: {
        "facetAddress(bytes4)": FunctionFragment;
        "facetAddresses()": FunctionFragment;
        "facetCount()": FunctionFragment;
        "facetFunctionSelectors(address)": FunctionFragment;
        "facets()": FunctionFragment;
        "hasFacets()": FunctionFragment;
        "loupeVersion()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "facetAddress" | "facetAddresses" | "facetCount" | "facetFunctionSelectors" | "facets" | "hasFacets" | "loupeVersion" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "facetAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "facetAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetFunctionSelectors", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "facets", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasFacets", values?: undefined): string;
    encodeFunctionData(functionFragment: "loupeVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "facetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasFacets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loupeVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface DiamondLoupeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondLoupeFacetInterface;
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
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        facetAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            facetAddresses_: string[];
        }>;
        facetCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            count_: BigNumber;
        }>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            facetFunctionSelectors_: string[];
        }>;
        facets(overrides?: CallOverrides): Promise<[
            IDiamondLoupe.FacetStructOutput[]
        ] & {
            facets_: IDiamondLoupe.FacetStructOutput[];
        }>;
        hasFacets(overrides?: CallOverrides): Promise<[boolean] & {
            hasFacets_: boolean;
        }>;
        loupeVersion(overrides?: CallOverrides): Promise<[number] & {
            version_: number;
        }>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    facetAddresses(overrides?: CallOverrides): Promise<string[]>;
    facetCount(overrides?: CallOverrides): Promise<BigNumber>;
    facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
    hasFacets(overrides?: CallOverrides): Promise<boolean>;
    loupeVersion(overrides?: CallOverrides): Promise<number>;
    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        facetAddresses(overrides?: CallOverrides): Promise<string[]>;
        facetCount(overrides?: CallOverrides): Promise<BigNumber>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        facets(overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
        hasFacets(overrides?: CallOverrides): Promise<boolean>;
        loupeVersion(overrides?: CallOverrides): Promise<number>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        facetCount(overrides?: CallOverrides): Promise<BigNumber>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        facets(overrides?: CallOverrides): Promise<BigNumber>;
        hasFacets(overrides?: CallOverrides): Promise<BigNumber>;
        loupeVersion(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        facetAddress(_functionSelector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetFunctionSelectors(_facet: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasFacets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loupeVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
