import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ReferenceAccessGateInterface extends utils.Interface {
    functions: {
        "allowlistEnabled()": FunctionFragment;
        "allowlisted(address)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "denylisted(address)": FunctionFragment;
        "isAllowed(address)": FunctionFragment;
        "isSanctioned(address)": FunctionFragment;
        "isTransferable(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "sanctioned(address)": FunctionFragment;
        "setAllowlistEnabled(bool)": FunctionFragment;
        "setAllowlisted(address,bool)": FunctionFragment;
        "setAllowlistedBatch(address[],bool)": FunctionFragment;
        "setDenylisted(address,bool)": FunctionFragment;
        "setDenylistedBatch(address[],bool)": FunctionFragment;
        "setSanctioned(address,bool)": FunctionFragment;
        "setSanctionedBatch(address[],bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowlistEnabled" | "allowlisted" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "denylisted" | "isAllowed" | "isSanctioned" | "isTransferable" | "owner" | "pendingOwner" | "sanctioned" | "setAllowlistEnabled" | "setAllowlisted" | "setAllowlistedBatch" | "setDenylisted" | "setDenylistedBatch" | "setSanctioned" | "setSanctionedBatch" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowlistEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowlisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "denylisted", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAllowed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isSanctioned", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTransferable", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "sanctioned", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAllowlistEnabled", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setAllowlisted", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setAllowlistedBatch", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDenylisted", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDenylistedBatch", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSanctioned", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setSanctionedBatch", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "allowlistEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowlisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denylisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSanctioned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTransferable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sanctioned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowlistEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowlisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowlistedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDenylisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDenylistedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSanctioned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSanctionedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AllowlistEnabledSet(bool)": EventFragment;
        "AllowlistedSet(address,bool)": EventFragment;
        "DenylistedSet(address,bool)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SanctionedSet(address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllowlistEnabledSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AllowlistedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DenylistedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SanctionedSet"): EventFragment;
}
export interface AllowlistEnabledSetEventObject {
    enabled: boolean;
}
export type AllowlistEnabledSetEvent = TypedEvent<[
    boolean
], AllowlistEnabledSetEventObject>;
export type AllowlistEnabledSetEventFilter = TypedEventFilter<AllowlistEnabledSetEvent>;
export interface AllowlistedSetEventObject {
    account: string;
    allowed: boolean;
}
export type AllowlistedSetEvent = TypedEvent<[
    string,
    boolean
], AllowlistedSetEventObject>;
export type AllowlistedSetEventFilter = TypedEventFilter<AllowlistedSetEvent>;
export interface DenylistedSetEventObject {
    account: string;
    denied: boolean;
}
export type DenylistedSetEvent = TypedEvent<[
    string,
    boolean
], DenylistedSetEventObject>;
export type DenylistedSetEventFilter = TypedEventFilter<DenylistedSetEvent>;
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SanctionedSetEventObject {
    account: string;
    flagged: boolean;
}
export type SanctionedSetEvent = TypedEvent<[
    string,
    boolean
], SanctionedSetEventObject>;
export type SanctionedSetEventFilter = TypedEventFilter<SanctionedSetEvent>;
export interface ReferenceAccessGate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReferenceAccessGateInterface;
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
        allowlistEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        allowlisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        denylisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        sanctioned(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        setAllowlistEnabled(_enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAllowlisted(_account: PromiseOrValue<string>, _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAllowlistedBatch(_accounts: PromiseOrValue<string>[], _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDenylisted(_account: PromiseOrValue<string>, _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDenylistedBatch(_accounts: PromiseOrValue<string>[], _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSanctioned(_account: PromiseOrValue<string>, _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSanctionedBatch(_accounts: PromiseOrValue<string>[], _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowlistEnabled(overrides?: CallOverrides): Promise<boolean>;
    allowlisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    denylisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    sanctioned(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    setAllowlistEnabled(_enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAllowlisted(_account: PromiseOrValue<string>, _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAllowlistedBatch(_accounts: PromiseOrValue<string>[], _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDenylisted(_account: PromiseOrValue<string>, _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDenylistedBatch(_accounts: PromiseOrValue<string>[], _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSanctioned(_account: PromiseOrValue<string>, _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSanctionedBatch(_accounts: PromiseOrValue<string>[], _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowlistEnabled(overrides?: CallOverrides): Promise<boolean>;
        allowlisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        denylisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        sanctioned(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setAllowlistEnabled(_enabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setAllowlisted(_account: PromiseOrValue<string>, _allowed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setAllowlistedBatch(_accounts: PromiseOrValue<string>[], _allowed: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDenylisted(_account: PromiseOrValue<string>, _denied: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDenylistedBatch(_accounts: PromiseOrValue<string>[], _denied: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSanctioned(_account: PromiseOrValue<string>, _flagged: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setSanctionedBatch(_accounts: PromiseOrValue<string>[], _flagged: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AllowlistEnabledSet(bool)"(enabled?: null): AllowlistEnabledSetEventFilter;
        AllowlistEnabledSet(enabled?: null): AllowlistEnabledSetEventFilter;
        "AllowlistedSet(address,bool)"(account?: PromiseOrValue<string> | null, allowed?: null): AllowlistedSetEventFilter;
        AllowlistedSet(account?: PromiseOrValue<string> | null, allowed?: null): AllowlistedSetEventFilter;
        "DenylistedSet(address,bool)"(account?: PromiseOrValue<string> | null, denied?: null): DenylistedSetEventFilter;
        DenylistedSet(account?: PromiseOrValue<string> | null, denied?: null): DenylistedSetEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "SanctionedSet(address,bool)"(account?: PromiseOrValue<string> | null, flagged?: null): SanctionedSetEventFilter;
        SanctionedSet(account?: PromiseOrValue<string> | null, flagged?: null): SanctionedSetEventFilter;
    };
    estimateGas: {
        allowlistEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        allowlisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        denylisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        sanctioned(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAllowlistEnabled(_enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAllowlisted(_account: PromiseOrValue<string>, _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAllowlistedBatch(_accounts: PromiseOrValue<string>[], _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDenylisted(_account: PromiseOrValue<string>, _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDenylistedBatch(_accounts: PromiseOrValue<string>[], _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSanctioned(_account: PromiseOrValue<string>, _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSanctionedBatch(_accounts: PromiseOrValue<string>[], _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowlistEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowlisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        denylisted(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sanctioned(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAllowlistEnabled(_enabled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAllowlisted(_account: PromiseOrValue<string>, _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAllowlistedBatch(_accounts: PromiseOrValue<string>[], _allowed: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDenylisted(_account: PromiseOrValue<string>, _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDenylistedBatch(_accounts: PromiseOrValue<string>[], _denied: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSanctioned(_account: PromiseOrValue<string>, _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSanctionedBatch(_accounts: PromiseOrValue<string>[], _flagged: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
