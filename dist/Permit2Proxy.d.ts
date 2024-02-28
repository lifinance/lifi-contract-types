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
        "callDiamondWithEIP2612Signature(address,address,uint256,uint256,uint8,bytes32,bytes32,address,bytes)": FunctionFragment;
        "callDiamondWithPermit2SignatureBatch(((address,uint256)[],uint256,uint256),uint256[],bytes,address,bytes)": FunctionFragment;
        "callDiamondWithPermit2SignatureSingle(((address,uint256),uint256,uint256),uint256,bytes,address,bytes)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "diamondWhitelist(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "permit2()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateWhitelist(address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "callDiamondWithEIP2612Signature" | "callDiamondWithPermit2SignatureBatch" | "callDiamondWithPermit2SignatureSingle" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "diamondWhitelist" | "owner" | "pendingOwner" | "permit2" | "transferOwnership" | "updateWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "callDiamondWithEIP2612Signature", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2SignatureBatch", values: [
        IPermit2.PermitBatchTransferFromStruct,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2SignatureSingle", values: [
        IPermit2.PermitTransferFromStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateWhitelist", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    decodeFunctionResult(functionFragment: "callDiamondWithEIP2612Signature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2SignatureBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2SignatureSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondWhitelist", data: BytesLike): Result;
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
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2SignatureBatch(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2SignatureSingle(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
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
    callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2SignatureBatch(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2SignatureSingle(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callDiamondWithPermit2SignatureBatch(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callDiamondWithPermit2SignatureSingle(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callDiamondWithPermit2SignatureBatch(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callDiamondWithPermit2SignatureSingle(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
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
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, owner: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2SignatureBatch(permit: IPermit2.PermitBatchTransferFromStruct, amounts: PromiseOrValue<BigNumberish>[], witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2SignatureSingle(permit: IPermit2.PermitTransferFromStruct, amount: PromiseOrValue<BigNumberish>, witnessData: PromiseOrValue<BytesLike>, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
