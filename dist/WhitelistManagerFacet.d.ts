import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface WhitelistManagerFacetInterface extends utils.Interface {
    functions: {
        "addToWhitelist(address)": FunctionFragment;
        "batchAddToWhitelist(address[])": FunctionFragment;
        "batchRemoveFromWhitelist(address[])": FunctionFragment;
        "batchSetFunctionApprovalBySignature(bytes4[],bool)": FunctionFragment;
        "getApprovedFunctionSignatures()": FunctionFragment;
        "getWhitelistedAddresses()": FunctionFragment;
        "isAddressWhitelisted(address)": FunctionFragment;
        "isFunctionApproved(bytes4)": FunctionFragment;
        "removeFromWhitelist(address)": FunctionFragment;
        "setFunctionApprovalBySignature(bytes4,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToWhitelist" | "batchAddToWhitelist" | "batchRemoveFromWhitelist" | "batchSetFunctionApprovalBySignature" | "getApprovedFunctionSignatures" | "getWhitelistedAddresses" | "isAddressWhitelisted" | "isFunctionApproved" | "removeFromWhitelist" | "setFunctionApprovalBySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batchAddToWhitelist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchRemoveFromWhitelist", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchSetFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "getApprovedFunctionSignatures", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAddressWhitelisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isFunctionApproved", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "removeFromWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchAddToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchRemoveFromWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSetFunctionApprovalBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApprovedFunctionSignatures", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAddressWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFunctionApprovalBySignature", data: BytesLike): Result;
    events: {
        "AddressRemoved(address)": EventFragment;
        "AddressWhitelisted(address)": EventFragment;
        "FunctionSignatureApprovalChanged(bytes4,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressWhitelisted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionSignatureApprovalChanged"): EventFragment;
}
export interface AddressRemovedEventObject {
    removedAddress: string;
}
export declare type AddressRemovedEvent = TypedEvent<[
    string
], AddressRemovedEventObject>;
export declare type AddressRemovedEventFilter = TypedEventFilter<AddressRemovedEvent>;
export interface AddressWhitelistedEventObject {
    whitelistedAddress: string;
}
export declare type AddressWhitelistedEvent = TypedEvent<[
    string
], AddressWhitelistedEventObject>;
export declare type AddressWhitelistedEventFilter = TypedEventFilter<AddressWhitelistedEvent>;
export interface FunctionSignatureApprovalChangedEventObject {
    functionSignature: string;
    approved: boolean;
}
export declare type FunctionSignatureApprovalChangedEvent = TypedEvent<[
    string,
    boolean
], FunctionSignatureApprovalChangedEventObject>;
export declare type FunctionSignatureApprovalChangedEventFilter = TypedEventFilter<FunctionSignatureApprovalChangedEvent>;
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
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApprovedFunctionSignatures(overrides?: CallOverrides): Promise<[string[]] & {
            signatures: string[];
        }>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
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
    batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApprovedFunctionSignatures(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
    isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToWhitelist(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        batchAddToWhitelist(_addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchRemoveFromWhitelist(_addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        getApprovedFunctionSignatures(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<string[]>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressRemoved(address)"(removedAddress?: PromiseOrValue<string> | null): AddressRemovedEventFilter;
        AddressRemoved(removedAddress?: PromiseOrValue<string> | null): AddressRemovedEventFilter;
        "AddressWhitelisted(address)"(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        AddressWhitelisted(whitelistedAddress?: PromiseOrValue<string> | null): AddressWhitelistedEventFilter;
        "FunctionSignatureApprovalChanged(bytes4,bool)"(functionSignature?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSignatureApprovalChangedEventFilter;
        FunctionSignatureApprovalChanged(functionSignature?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSignatureApprovalChangedEventFilter;
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
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApprovedFunctionSignatures(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApprovedFunctionSignatures(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAddressWhitelisted(_address: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFromWhitelist(_address: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
