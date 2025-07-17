import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface WhitelistManagerFacetInterface extends utils.Interface {
    functions: {
        "addToWhitelist(address)": FunctionFragment;
        "batchAddToWhitelist(address[])": FunctionFragment;
        "batchRemoveFromWhitelist(address[])": FunctionFragment;
        "batchSetFunctionApprovalBySelector(bytes4[],bool)": FunctionFragment;
        "getApprovedFunctionSelectors()": FunctionFragment;
        "getWhitelistedAddresses()": FunctionFragment;
        "isAddressWhitelisted(address)": FunctionFragment;
        "isFunctionApproved(bytes4)": FunctionFragment;
        "isMigrated()": FunctionFragment;
        "migrate(bytes4[],address[],bytes4[])": FunctionFragment;
        "removeFromWhitelist(address)": FunctionFragment;
        "setFunctionApprovalBySelector(bytes4,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToWhitelist" | "batchAddToWhitelist" | "batchRemoveFromWhitelist" | "batchSetFunctionApprovalBySelector" | "getApprovedFunctionSelectors" | "getWhitelistedAddresses" | "isAddressWhitelisted" | "isFunctionApproved" | "isMigrated" | "migrate" | "removeFromWhitelist" | "setFunctionApprovalBySelector"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batchAddToWhitelist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchRemoveFromWhitelist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchSetFunctionApprovalBySelector", values: [PromiseOrValue<BytesLike>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "getApprovedFunctionSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAddressWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isFunctionApproved", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isMigrated", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrate", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "removeFromWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySelector", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchAddToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchRemoveFromWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSetFunctionApprovalBySelector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApprovedFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAddressWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMigrated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFunctionApprovalBySelector", data: BytesLike): Result;
    events: {
        "AddressRemoved(address)": EventFragment;
        "AddressWhitelisted(address)": EventFragment;
        "FunctionSelectorApprovalChanged(bytes4,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressWhitelisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionSelectorApprovalChanged"): EventFragment;
}
export interface AddressRemovedEventObject {
    removedAddress: string;
}
export type AddressRemovedEvent = TypedEvent<[
    string
], AddressRemovedEventObject>;
export type AddressRemovedEventFilter = TypedEventFilter<AddressRemovedEvent>;
export interface AddressWhitelistedEventObject {
    whitelistedAddress: string;
}
export type AddressWhitelistedEvent = TypedEvent<[
    string
], AddressWhitelistedEventObject>;
export type AddressWhitelistedEventFilter = TypedEventFilter<AddressWhitelistedEvent>;
export interface FunctionSelectorApprovalChangedEventObject {
    functionSelector: string;
    approved: boolean;
}
export type FunctionSelectorApprovalChangedEvent = TypedEvent<[
    string,
    boolean
], FunctionSelectorApprovalChangedEventObject>;
export type FunctionSelectorApprovalChangedEventFilter = TypedEventFilter<FunctionSelectorApprovalChangedEvent>;
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
        addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchSetFunctionApprovalBySelector(_selectors: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApprovedFunctionSelectors(overrides?: CallOverrides): Promise<[string[]] & {
            selectors: string[];
        }>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        isFunctionApproved(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        isMigrated(overrides?: CallOverrides): Promise<[boolean]>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFunctionApprovalBySelector(_selector: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchSetFunctionApprovalBySelector(_selectors: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApprovedFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
    isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFunctionApproved(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isMigrated(overrides?: CallOverrides): Promise<boolean>;
    migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFunctionApprovalBySelector(_selector: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchSetFunctionApprovalBySelector(_selectors: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getApprovedFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFunctionApproved(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isMigrated(overrides?: CallOverrides): Promise<boolean>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFunctionApprovalBySelector(_selector: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressRemoved(address)"(removedAddress?: PromiseOrValue<string> | null): AddressRemovedEventFilter;
        AddressRemoved(removedAddress?: PromiseOrValue<string> | null): AddressRemovedEventFilter;
        "AddressWhitelisted(address)"(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        AddressWhitelisted(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        "FunctionSelectorApprovalChanged(bytes4,bool)"(functionSelector?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSelectorApprovalChangedEventFilter;
        FunctionSelectorApprovalChanged(functionSelector?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSelectorApprovalChangedEventFilter;
    };
    estimateGas: {
        addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchSetFunctionApprovalBySelector(_selectors: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApprovedFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFunctionApproved(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isMigrated(overrides?: CallOverrides): Promise<BigNumber>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFunctionApprovalBySelector(_selector: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchSetFunctionApprovalBySelector(_selectors: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApprovedFunctionSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFunctionApproved(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMigrated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(_selectorsToRemove: PromiseOrValue<BytesLike>[], _contractsToAdd: PromiseOrValue<string>[], _selectorsToAdd: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFunctionApprovalBySelector(_selector: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
