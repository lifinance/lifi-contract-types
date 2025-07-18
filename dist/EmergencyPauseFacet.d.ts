import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace LibDiamond {
    type FacetCutStruct = {
        facetAddress: PromiseOrValue<string>;
        action: PromiseOrValue<BigNumberish>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface EmergencyPauseFacetInterface extends utils.Interface {
    functions: {
        "pauseDiamond()": FunctionFragment;
        "pauserWallet()": FunctionFragment;
        "removeFacet(address)": FunctionFragment;
        "unpauseDiamond(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "pauseDiamond" | "pauserWallet" | "removeFacet" | "unpauseDiamond"): FunctionFragment;
    encodeFunctionData(functionFragment: "pauseDiamond", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauserWallet", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeFacet", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpauseDiamond", values: [PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "pauseDiamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauserWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFacet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseDiamond", data: BytesLike): Result;
    events: {
        "DiamondCut(tuple[],address,bytes)": EventFragment;
        "EmergencyFacetRemoved(address,address)": EventFragment;
        "EmergencyPaused(address)": EventFragment;
        "EmergencyUnpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyFacetRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyPaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyUnpaused"): EventFragment;
}
export interface DiamondCutEventObject {
    _diamondCut: LibDiamond.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export type DiamondCutEvent = TypedEvent<[
    LibDiamond.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface EmergencyFacetRemovedEventObject {
    facetAddress: string;
    msgSender: string;
}
export type EmergencyFacetRemovedEvent = TypedEvent<[
    string,
    string
], EmergencyFacetRemovedEventObject>;
export type EmergencyFacetRemovedEventFilter = TypedEventFilter<EmergencyFacetRemovedEvent>;
export interface EmergencyPausedEventObject {
    msgSender: string;
}
export type EmergencyPausedEvent = TypedEvent<[
    string
], EmergencyPausedEventObject>;
export type EmergencyPausedEventFilter = TypedEventFilter<EmergencyPausedEvent>;
export interface EmergencyUnpausedEventObject {
    msgSender: string;
}
export type EmergencyUnpausedEvent = TypedEvent<[
    string
], EmergencyUnpausedEventObject>;
export type EmergencyUnpausedEventFilter = TypedEventFilter<EmergencyUnpausedEvent>;
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
        pauseDiamond(overrides?: CallOverrides): Promise<void>;
        pauserWallet(overrides?: CallOverrides): Promise<string>;
        removeFacet(_facetAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        "EmergencyFacetRemoved(address,address)"(facetAddress?: PromiseOrValue<string> | null, msgSender?: PromiseOrValue<string> | null): EmergencyFacetRemovedEventFilter;
        EmergencyFacetRemoved(facetAddress?: PromiseOrValue<string> | null, msgSender?: PromiseOrValue<string> | null): EmergencyFacetRemovedEventFilter;
        "EmergencyPaused(address)"(msgSender?: PromiseOrValue<string> | null): EmergencyPausedEventFilter;
        EmergencyPaused(msgSender?: PromiseOrValue<string> | null): EmergencyPausedEventFilter;
        "EmergencyUnpaused(address)"(msgSender?: PromiseOrValue<string> | null): EmergencyUnpausedEventFilter;
        EmergencyUnpaused(msgSender?: PromiseOrValue<string> | null): EmergencyUnpausedEventFilter;
    };
    estimateGas: {
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
