import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface WhitelistRecoveryFacetInterface extends utils.Interface {
    functions: {
        "clearContractSelectorsArray(address)": FunctionFragment;
        "clearWhitelistArrays()": FunctionFragment;
        "fullWhitelistStorageReset()": FunctionFragment;
        "fullWhitelistStorageReset(address[],bytes4[][])": FunctionFragment;
        "fullWhitelistStorageResetBatch(address[],bytes4[][])": FunctionFragment;
        "resetMigratedFlag()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "clearContractSelectorsArray" | "clearWhitelistArrays" | "fullWhitelistStorageReset()" | "fullWhitelistStorageReset(address[],bytes4[][])" | "fullWhitelistStorageResetBatch" | "resetMigratedFlag"): FunctionFragment;
    encodeFunctionData(functionFragment: "clearContractSelectorsArray", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "clearWhitelistArrays", values?: undefined): string;
    encodeFunctionData(functionFragment: "fullWhitelistStorageReset()", values?: undefined): string;
    encodeFunctionData(functionFragment: "fullWhitelistStorageReset(address[],bytes4[][])", values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[][]]): string;
    encodeFunctionData(functionFragment: "fullWhitelistStorageResetBatch", values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[][]]): string;
    encodeFunctionData(functionFragment: "resetMigratedFlag", values?: undefined): string;
    decodeFunctionResult(functionFragment: "clearContractSelectorsArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearWhitelistArrays", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullWhitelistStorageReset()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullWhitelistStorageReset(address[],bytes4[][])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullWhitelistStorageResetBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetMigratedFlag", data: BytesLike): Result;
    events: {
        "MigratedFlagReset(address)": EventFragment;
        "WhitelistArraysCleared(address)": EventFragment;
        "WhitelistStorageCleared(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MigratedFlagReset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistArraysCleared"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistStorageCleared"): EventFragment;
}
export interface MigratedFlagResetEventObject {
    caller: string;
}
export type MigratedFlagResetEvent = TypedEvent<[
    string
], MigratedFlagResetEventObject>;
export type MigratedFlagResetEventFilter = TypedEventFilter<MigratedFlagResetEvent>;
export interface WhitelistArraysClearedEventObject {
    caller: string;
}
export type WhitelistArraysClearedEvent = TypedEvent<[
    string
], WhitelistArraysClearedEventObject>;
export type WhitelistArraysClearedEventFilter = TypedEventFilter<WhitelistArraysClearedEvent>;
export interface WhitelistStorageClearedEventObject {
    caller: string;
}
export type WhitelistStorageClearedEvent = TypedEvent<[
    string
], WhitelistStorageClearedEventObject>;
export type WhitelistStorageClearedEventFilter = TypedEventFilter<WhitelistStorageClearedEvent>;
export interface WhitelistRecoveryFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitelistRecoveryFacetInterface;
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
        clearContractSelectorsArray(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearWhitelistArrays(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "fullWhitelistStorageReset()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "fullWhitelistStorageReset(address[],bytes4[][])"(_additionalContracts: PromiseOrValue<string>[], _additionalSelectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fullWhitelistStorageResetBatch(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resetMigratedFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    clearContractSelectorsArray(_contract: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearWhitelistArrays(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "fullWhitelistStorageReset()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "fullWhitelistStorageReset(address[],bytes4[][])"(_additionalContracts: PromiseOrValue<string>[], _additionalSelectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fullWhitelistStorageResetBatch(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resetMigratedFlag(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        clearContractSelectorsArray(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        clearWhitelistArrays(overrides?: CallOverrides): Promise<void>;
        "fullWhitelistStorageReset()"(overrides?: CallOverrides): Promise<void>;
        "fullWhitelistStorageReset(address[],bytes4[][])"(_additionalContracts: PromiseOrValue<string>[], _additionalSelectors: PromiseOrValue<BytesLike>[][], overrides?: CallOverrides): Promise<void>;
        fullWhitelistStorageResetBatch(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[][], overrides?: CallOverrides): Promise<void>;
        resetMigratedFlag(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MigratedFlagReset(address)"(caller?: PromiseOrValue<string> | null): MigratedFlagResetEventFilter;
        MigratedFlagReset(caller?: PromiseOrValue<string> | null): MigratedFlagResetEventFilter;
        "WhitelistArraysCleared(address)"(caller?: PromiseOrValue<string> | null): WhitelistArraysClearedEventFilter;
        WhitelistArraysCleared(caller?: PromiseOrValue<string> | null): WhitelistArraysClearedEventFilter;
        "WhitelistStorageCleared(address)"(caller?: PromiseOrValue<string> | null): WhitelistStorageClearedEventFilter;
        WhitelistStorageCleared(caller?: PromiseOrValue<string> | null): WhitelistStorageClearedEventFilter;
    };
    estimateGas: {
        clearContractSelectorsArray(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearWhitelistArrays(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "fullWhitelistStorageReset()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "fullWhitelistStorageReset(address[],bytes4[][])"(_additionalContracts: PromiseOrValue<string>[], _additionalSelectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fullWhitelistStorageResetBatch(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resetMigratedFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        clearContractSelectorsArray(_contract: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearWhitelistArrays(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "fullWhitelistStorageReset()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "fullWhitelistStorageReset(address[],bytes4[][])"(_additionalContracts: PromiseOrValue<string>[], _additionalSelectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fullWhitelistStorageResetBatch(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[][], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resetMigratedFlag(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
