import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface TransferrableOwnershipInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "owner" | "pendingOwner" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export declare type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export declare type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TransferrableOwnership extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TransferrableOwnershipInterface;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
