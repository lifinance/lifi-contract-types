import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DexManagerFacetInterface extends utils.Interface {
    functions: {
        "addDex(address)": FunctionFragment;
        "approvedDexs()": FunctionFragment;
        "batchAddDex(address[])": FunctionFragment;
        "batchRemoveDex(address[])": FunctionFragment;
        "batchSetFunctionApprovalBySignature(bytes4[],bool)": FunctionFragment;
        "isFunctionApproved(bytes4)": FunctionFragment;
        "removeDex(address)": FunctionFragment;
        "setFunctionApprovalBySignature(bytes4,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDex" | "approvedDexs" | "batchAddDex" | "batchRemoveDex" | "batchSetFunctionApprovalBySignature" | "isFunctionApproved" | "removeDex" | "setFunctionApprovalBySignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approvedDexs", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchAddDex", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchRemoveDex", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "batchSetFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isFunctionApproved", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "removeDex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "addDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approvedDexs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchAddDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchRemoveDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSetFunctionApprovalBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFunctionApprovalBySignature", data: BytesLike): Result;
    events: {
        "DexAdded(address)": EventFragment;
        "DexRemoved(address)": EventFragment;
        "FunctionSignatureApprovalChanged(bytes4,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DexAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DexRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionSignatureApprovalChanged"): EventFragment;
}
export interface DexAddedEventObject {
    dexAddress: string;
}
export type DexAddedEvent = TypedEvent<[string], DexAddedEventObject>;
export type DexAddedEventFilter = TypedEventFilter<DexAddedEvent>;
export interface DexRemovedEventObject {
    dexAddress: string;
}
export type DexRemovedEvent = TypedEvent<[string], DexRemovedEventObject>;
export type DexRemovedEventFilter = TypedEventFilter<DexRemovedEvent>;
export interface FunctionSignatureApprovalChangedEventObject {
    functionSignature: string;
    approved: boolean;
}
export type FunctionSignatureApprovalChangedEvent = TypedEvent<[
    string,
    boolean
], FunctionSignatureApprovalChangedEventObject>;
export type FunctionSignatureApprovalChangedEventFilter = TypedEventFilter<FunctionSignatureApprovalChangedEvent>;
export interface DexManagerFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DexManagerFacetInterface;
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
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        batchAddDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchRemoveDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        removeDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approvedDexs(overrides?: CallOverrides): Promise<string[]>;
    batchAddDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchRemoveDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    removeDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDex(_dex: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        approvedDexs(overrides?: CallOverrides): Promise<string[]>;
        batchAddDex(_dexs: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchRemoveDex(_dexs: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        removeDex(_dex: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DexAdded(address)"(dexAddress?: PromiseOrValue<string> | null): DexAddedEventFilter;
        DexAdded(dexAddress?: PromiseOrValue<string> | null): DexAddedEventFilter;
        "DexRemoved(address)"(dexAddress?: PromiseOrValue<string> | null): DexRemovedEventFilter;
        DexRemoved(dexAddress?: PromiseOrValue<string> | null): DexRemovedEventFilter;
        "FunctionSignatureApprovalChanged(bytes4,bool)"(functionSignature?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSignatureApprovalChangedEventFilter;
        FunctionSignatureApprovalChanged(functionSignature?: PromiseOrValue<BytesLike> | null, approved?: PromiseOrValue<boolean> | null): FunctionSignatureApprovalChangedEventFilter;
    };
    estimateGas: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approvedDexs(overrides?: CallOverrides): Promise<BigNumber>;
        batchAddDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchRemoveDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchAddDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchRemoveDex(_dexs: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchSetFunctionApprovalBySignature(_signatures: PromiseOrValue<BytesLike>[], _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, _approval: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
