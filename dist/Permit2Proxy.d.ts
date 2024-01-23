import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IPermit2 {
    type TokenPermissionsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitBatchTransferFromStruct = {
        permitted: IPermit2.TokenPermissionsStruct[];
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitBatchTransferFromStructOutput = [
        IPermit2.TokenPermissionsStructOutput[],
        BigNumber,
        BigNumber
    ] & {
        permitted: IPermit2.TokenPermissionsStructOutput[];
        nonce: BigNumber;
        deadline: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: IPermit2.TokenPermissionsStruct;
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitTransferFromStructOutput = [
        IPermit2.TokenPermissionsStructOutput,
        BigNumber,
        BigNumber
    ] & {
        permitted: IPermit2.TokenPermissionsStructOutput;
        nonce: BigNumber;
        deadline: BigNumber;
    };
}
export interface Permit2ProxyInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "diamondWhitelist(address)": FunctionFragment;
        "gaslessWitnessDiamondCallMultipleTokens(((address,uint256)[],uint256,uint256),uint256[],bytes,address,bytes)": FunctionFragment;
        "gaslessWitnessDiamondCallSingleToken(((address,uint256),uint256,uint256),uint256,bytes,address,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "permit2()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateWhitelist(address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "diamondWhitelist" | "gaslessWitnessDiamondCallMultipleTokens" | "gaslessWitnessDiamondCallSingleToken" | "owner" | "pendingOwner" | "permit2" | "transferOwnership" | "updateWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "gaslessWitnessDiamondCallMultipleTokens", values: [
        IPermit2.PermitBatchTransferFromStruct,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "gaslessWitnessDiamondCallSingleToken", values: [
        IPermit2.PermitTransferFromStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateWhitelist", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaslessWitnessDiamondCallMultipleTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaslessWitnessDiamondCallSingleToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateWhitelist", data: BytesLike): Result;
    events: {
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "WhitelistUpdated(address[],bool[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
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
export interface WhitelistUpdatedEventObject {
    addresses: string[];
    values: boolean[];
}
export declare type WhitelistUpdatedEvent = TypedEvent<[
    string[],
    boolean[]
], WhitelistUpdatedEventObject>;
export declare type WhitelistUpdatedEventFilter = TypedEventFilter<WhitelistUpdatedEvent>;
export interface Permit2Proxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Permit2ProxyInterface;
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
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        gaslessWitnessDiamondCallMultipleTokens(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gaslessWitnessDiamondCallSingleToken(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        permit2(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    gaslessWitnessDiamondCallMultipleTokens(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gaslessWitnessDiamondCallSingleToken(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    permit2(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        gaslessWitnessDiamondCallMultipleTokens(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        gaslessWitnessDiamondCallSingleToken(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        permit2(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "WhitelistUpdated(address[],bool[])"(addresses?: null, values?: null): WhitelistUpdatedEventFilter;
        WhitelistUpdated(addresses?: null, values?: null): WhitelistUpdatedEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        gaslessWitnessDiamondCallMultipleTokens(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gaslessWitnessDiamondCallSingleToken(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        permit2(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaslessWitnessDiamondCallMultipleTokens(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gaslessWitnessDiamondCallSingleToken(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, senderAddress: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
