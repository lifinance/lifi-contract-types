import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
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
    encodeFunctionData(functionFragment: "addDex", values: [string]): string;
    encodeFunctionData(functionFragment: "approvedDexs", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchAddDex", values: [string[]]): string;
    encodeFunctionData(functionFragment: "batchRemoveDex", values: [string[]]): string;
    encodeFunctionData(functionFragment: "batchSetFunctionApprovalBySignature", values: [BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: "isFunctionApproved", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "removeDex", values: [string]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySignature", values: [BytesLike, boolean]): string;
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
        addDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        batchSetFunctionApprovalBySignature(_signatures: BytesLike[], _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isFunctionApproved(_signature: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFunctionApprovalBySignature(_signature: BytesLike, _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addDex(_dex: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    approvedDexs(overrides?: CallOverrides): Promise<string[]>;
    batchAddDex(_dexs: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    batchRemoveDex(_dexs: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    batchSetFunctionApprovalBySignature(_signatures: BytesLike[], _approval: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isFunctionApproved(_signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    removeDex(_dex: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFunctionApprovalBySignature(_signature: BytesLike, _approval: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDex(_dex: string, overrides?: CallOverrides): Promise<void>;
        approvedDexs(overrides?: CallOverrides): Promise<string[]>;
        batchAddDex(_dexs: string[], overrides?: CallOverrides): Promise<void>;
        batchRemoveDex(_dexs: string[], overrides?: CallOverrides): Promise<void>;
        batchSetFunctionApprovalBySignature(_signatures: BytesLike[], _approval: boolean, overrides?: CallOverrides): Promise<void>;
        isFunctionApproved(_signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        removeDex(_dex: string, overrides?: CallOverrides): Promise<void>;
        setFunctionApprovalBySignature(_signature: BytesLike, _approval: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DexAdded(address)"(dexAddress?: string | null): DexAddedEventFilter;
        DexAdded(dexAddress?: string | null): DexAddedEventFilter;
        "DexRemoved(address)"(dexAddress?: string | null): DexRemovedEventFilter;
        DexRemoved(dexAddress?: string | null): DexRemovedEventFilter;
        "FunctionSignatureApprovalChanged(bytes4,bool)"(functionSignature?: BytesLike | null, approved?: boolean | null): FunctionSignatureApprovalChangedEventFilter;
        FunctionSignatureApprovalChanged(functionSignature?: BytesLike | null, approved?: boolean | null): FunctionSignatureApprovalChangedEventFilter;
    };
    estimateGas: {
        addDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        approvedDexs(overrides?: CallOverrides): Promise<BigNumber>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        batchSetFunctionApprovalBySignature(_signatures: BytesLike[], _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isFunctionApproved(_signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFunctionApprovalBySignature(_signature: BytesLike, _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        approvedDexs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchAddDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        batchRemoveDex(_dexs: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        batchSetFunctionApprovalBySignature(_signatures: BytesLike[], _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isFunctionApproved(_signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeDex(_dex: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFunctionApprovalBySignature(_signature: BytesLike, _approval: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DexManagerFacet.d.ts.map