import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct;
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput,
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput;
        nonce: BigNumber;
        deadline: BigNumber;
    };
}
export interface Permit2ProxyInterface extends utils.Interface {
    functions: {
        "PERMIT2()": FunctionFragment;
        "PERMIT_WITH_WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPE_STRING()": FunctionFragment;
        "callDiamondWithEIP2612Signature(address,uint256,uint256,uint8,bytes32,bytes32,address,bytes)": FunctionFragment;
        "callDiamondWithPermit2SignatureSingle(address,bytes,address,((address,uint256),uint256,uint256),bytes)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "diamondWhitelist(address)": FunctionFragment;
        "getPermit2MsgHash(address,bytes,address,uint256,uint256,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateWhitelist(address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PERMIT2" | "PERMIT_WITH_WITNESS_TYPEHASH" | "WITNESS_TYPEHASH" | "WITNESS_TYPE_STRING" | "callDiamondWithEIP2612Signature" | "callDiamondWithPermit2SignatureSingle" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "diamondWhitelist" | "getPermit2MsgHash" | "owner" | "pendingOwner" | "transferOwnership" | "updateWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_WITH_WITNESS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPE_STRING", values?: undefined): string;
    encodeFunctionData(functionFragment: "callDiamondWithEIP2612Signature", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2SignatureSingle", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        ISignatureTransfer.PermitTransferFromStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPermit2MsgHash", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateWhitelist", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_WITH_WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithEIP2612Signature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2SignatureSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermit2MsgHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
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
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<[string]>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2SignatureSingle(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        getPermit2MsgHash(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            msgHash: string;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
    callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2SignatureSingle(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    getPermit2MsgHash(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callDiamondWithPermit2SignatureSingle(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getPermit2MsgHash(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
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
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<BigNumber>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callDiamondWithPermit2SignatureSingle(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPermit2MsgHash(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondAddress: PromiseOrValue<string>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2SignatureSingle(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPermit2MsgHash(_diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateWhitelist(addresses: PromiseOrValue<string>[], values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
