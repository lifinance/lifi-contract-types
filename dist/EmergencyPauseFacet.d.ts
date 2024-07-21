import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface EmergencyPauseFacetInterface extends utils.Interface {
    functions: {
        "emergencyPauseFacetAddress()": FunctionFragment;
        "pauseDiamond()": FunctionFragment;
        "pauserWallet()": FunctionFragment;
        "removeFacet(address)": FunctionFragment;
        "unpauseDiamond(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emergencyPauseFacetAddress" | "pauseDiamond" | "pauserWallet" | "removeFacet" | "unpauseDiamond"): FunctionFragment;
    encodeFunctionData(functionFragment: "emergencyPauseFacetAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseDiamond", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauserWallet", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeFacet", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseDiamond", values: [PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "emergencyPauseFacetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseDiamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauserWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFacet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseDiamond", data: BytesLike): Result;
    events: {
        "EmergencyFacetRemoved(address,address)": EventFragment;
        "EmergencyPaused(address)": EventFragment;
        "EmergencyUnpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EmergencyFacetRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyPaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyUnpaused"): EventFragment;
}
export interface EmergencyFacetRemovedEventObject {
    facetAddress: string;
    msgSender: string;
}
export declare type EmergencyFacetRemovedEvent = TypedEvent<[
    string,
    string
], EmergencyFacetRemovedEventObject>;
export declare type EmergencyFacetRemovedEventFilter = TypedEventFilter<EmergencyFacetRemovedEvent>;
export interface EmergencyPausedEventObject {
    msgSender: string;
}
export declare type EmergencyPausedEvent = TypedEvent<[
    string
], EmergencyPausedEventObject>;
export declare type EmergencyPausedEventFilter = TypedEventFilter<EmergencyPausedEvent>;
export interface EmergencyUnpausedEventObject {
    msgSender: string;
}
export declare type EmergencyUnpausedEvent = TypedEvent<[
    string
], EmergencyUnpausedEventObject>;
export declare type EmergencyUnpausedEventFilter = TypedEventFilter<EmergencyUnpausedEvent>;
export interface EmergencyPauseFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EmergencyPauseFacetInterface;
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
        emergencyPauseFacetAddress(overrides?: CallOverrides): Promise<[string]>;
        pauseDiamond(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pauserWallet(overrides?: CallOverrides): Promise<[string]>;
        removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emergencyPauseFacetAddress(overrides?: CallOverrides): Promise<string>;
    pauseDiamond(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pauserWallet(overrides?: CallOverrides): Promise<string>;
    removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emergencyPauseFacetAddress(overrides?: CallOverrides): Promise<string>;
        pauseDiamond(overrides?: CallOverrides): Promise<void>;
        pauserWallet(overrides?: CallOverrides): Promise<string>;
        removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EmergencyFacetRemoved(address,address)"(facetAddress?: null, msgSender?: null): EmergencyFacetRemovedEventFilter;
        EmergencyFacetRemoved(facetAddress?: null, msgSender?: null): EmergencyFacetRemovedEventFilter;
        "EmergencyPaused(address)"(msgSender?: null): EmergencyPausedEventFilter;
        EmergencyPaused(msgSender?: null): EmergencyPausedEventFilter;
        "EmergencyUnpaused(address)"(msgSender?: null): EmergencyUnpausedEventFilter;
        EmergencyUnpaused(msgSender?: null): EmergencyUnpausedEventFilter;
    };
    estimateGas: {
        emergencyPauseFacetAddress(overrides?: CallOverrides): Promise<BigNumber>;
        pauseDiamond(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pauserWallet(overrides?: CallOverrides): Promise<BigNumber>;
        removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emergencyPauseFacetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseDiamond(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pauserWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
