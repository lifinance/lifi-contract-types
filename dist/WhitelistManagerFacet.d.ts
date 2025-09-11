import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface WhitelistManagerFacetInterface extends utils.Interface {
    functions: {
        "batchSetContractSelectorWhitelist(address[],bytes4[],bool)": FunctionFragment;
        "getWhitelistedAddresses()": FunctionFragment;
        "getWhitelistedFunctionSelectors()": FunctionFragment;
        "isAddressWhitelisted(address)": FunctionFragment;
        "isContractSelectorWhitelisted(address,bytes4)": FunctionFragment;
        "isFunctionSelectorWhitelisted(bytes4)": FunctionFragment;
        "isMigrated()": FunctionFragment;
        "migrate(bytes4[],address[],bytes4[])": FunctionFragment;
        "setContractSelectorWhitelist(address,bytes4,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchSetContractSelectorWhitelist" | "getWhitelistedAddresses" | "getWhitelistedFunctionSelectors" | "isAddressWhitelisted" | "isContractSelectorWhitelisted" | "isFunctionSelectorWhitelisted" | "isMigrated" | "migrate" | "setContractSelectorWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchSetContractSelectorWhitelist", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getWhitelistedAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedFunctionSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAddressWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isContractSelectorWhitelisted", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isFunctionSelectorWhitelisted", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isMigrated", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrate", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "setContractSelectorWhitelist", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "batchSetContractSelectorWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAddressWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContractSelectorWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionSelectorWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMigrated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractSelectorWhitelist", data: BytesLike): Result;
    events: {
        "AddressWhitelisted(address)": EventFragment;
        "ContractSelectorWhitelistChanged(address,bytes4,bool)": EventFragment;
        "FunctionSelectorWhitelistChanged(bytes4,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressWhitelisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractSelectorWhitelistChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionSelectorWhitelistChanged"): EventFragment;
}
export interface AddressWhitelistedEventObject {
    whitelistedAddress: string;
}
export type AddressWhitelistedEvent = TypedEvent<[
    string
], AddressWhitelistedEventObject>;
export type AddressWhitelistedEventFilter = TypedEventFilter<AddressWhitelistedEvent>;
export interface ContractSelectorWhitelistChangedEventObject {
    contractAddress: string;
    selector: string;
    whitelisted: boolean;
}
export type ContractSelectorWhitelistChangedEvent = TypedEvent<[
    string,
    string,
    boolean
], ContractSelectorWhitelistChangedEventObject>;
export type ContractSelectorWhitelistChangedEventFilter = TypedEventFilter<ContractSelectorWhitelistChangedEvent>;
export interface FunctionSelectorWhitelistChangedEventObject {
    selector: string;
    whitelisted: boolean;
}
export type FunctionSelectorWhitelistChangedEvent = TypedEvent<[
    string,
    boolean
], FunctionSelectorWhitelistChangedEventObject>;
export type FunctionSelectorWhitelistChangedEventFilter = TypedEventFilter<FunctionSelectorWhitelistChangedEvent>;
export interface WhitelistManagerFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WhitelistManagerFacetInterface;
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
        batchSetContractSelectorWhitelist(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        getWhitelistedFunctionSelectors(overrides?: CallOverrides): Promise<[string[]] & {
            selectors: string[];
        }>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            whitelisted: boolean;
        }>;
        isContractSelectorWhitelisted(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            whitelisted: boolean;
        }>;
        isFunctionSelectorWhitelisted(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            whitelisted: boolean;
        }>;
        isMigrated(overrides?: CallOverrides): Promise<[boolean]>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setContractSelectorWhitelist(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    batchSetContractSelectorWhitelist(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
    isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isContractSelectorWhitelisted(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isFunctionSelectorWhitelisted(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isMigrated(overrides?: CallOverrides): Promise<boolean>;
    migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setContractSelectorWhitelist(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchSetContractSelectorWhitelist(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], _whitelisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isContractSelectorWhitelisted(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isFunctionSelectorWhitelisted(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isMigrated(overrides?: CallOverrides): Promise<boolean>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        setContractSelectorWhitelist(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, _whitelisted: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressWhitelisted(address)"(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        AddressWhitelisted(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        "ContractSelectorWhitelistChanged(address,bytes4,bool)"(contractAddress?: PromiseOrValue<string> | null, selector?: PromiseOrValue<BytesLike> | null, whitelisted?: PromiseOrValue<boolean> | null): ContractSelectorWhitelistChangedEventFilter;
        ContractSelectorWhitelistChanged(contractAddress?: PromiseOrValue<string> | null, selector?: PromiseOrValue<BytesLike> | null, whitelisted?: PromiseOrValue<boolean> | null): ContractSelectorWhitelistChangedEventFilter;
        "FunctionSelectorWhitelistChanged(bytes4,bool)"(selector?: PromiseOrValue<BytesLike> | null, whitelisted?: PromiseOrValue<boolean> | null): FunctionSelectorWhitelistChangedEventFilter;
        FunctionSelectorWhitelistChanged(selector?: PromiseOrValue<BytesLike> | null, whitelisted?: PromiseOrValue<boolean> | null): FunctionSelectorWhitelistChangedEventFilter;
    };
    estimateGas: {
        batchSetContractSelectorWhitelist(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isContractSelectorWhitelisted(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isFunctionSelectorWhitelisted(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isMigrated(overrides?: CallOverrides): Promise<BigNumber>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setContractSelectorWhitelist(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchSetContractSelectorWhitelist(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedFunctionSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContractSelectorWhitelisted(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFunctionSelectorWhitelisted(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMigrated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setContractSelectorWhitelist(_contract: PromiseOrValue<string>, _selector: PromiseOrValue<BytesLike>, _whitelisted: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
