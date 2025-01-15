import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: string;
        amount: BigNumberish;
    };
    type TokenPermissionsStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type PermitTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct;
        nonce: BigNumberish;
        deadline: BigNumberish;
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
        "LIFI_DIAMOND()": FunctionFragment;
        "PERMIT2()": FunctionFragment;
        "PERMIT_WITH_WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPE_STRING()": FunctionFragment;
        "callDiamondWithEIP2612Signature(address,uint256,uint256,uint8,bytes32,bytes32,bytes)": FunctionFragment;
        "callDiamondWithPermit2(bytes,((address,uint256),uint256,uint256),bytes)": FunctionFragment;
        "callDiamondWithPermit2Witness(bytes,address,((address,uint256),uint256,uint256),bytes)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "getPermit2MsgHash(bytes,address,uint256,uint256,uint256)": FunctionFragment;
        "nextNonce(address)": FunctionFragment;
        "nextNonceAfter(address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "LIFI_DIAMOND" | "PERMIT2" | "PERMIT_WITH_WITNESS_TYPEHASH" | "WITNESS_TYPEHASH" | "WITNESS_TYPE_STRING" | "callDiamondWithEIP2612Signature" | "callDiamondWithPermit2" | "callDiamondWithPermit2Witness" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "getPermit2MsgHash" | "nextNonce" | "nextNonceAfter" | "owner" | "pendingOwner" | "transferOwnership" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "LIFI_DIAMOND", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_WITH_WITNESS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPE_STRING", values?: undefined): string;
    encodeFunctionData(functionFragment: "callDiamondWithEIP2612Signature", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2", values: [BytesLike, ISignatureTransfer.PermitTransferFromStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2Witness", values: [
        BytesLike,
        string,
        ISignatureTransfer.PermitTransferFromStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPermit2MsgHash", values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nextNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "nextNonceAfter", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "LIFI_DIAMOND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_WITH_WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithEIP2612Signature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2Witness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermit2MsgHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextNonceAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TokensWithdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensWithdrawn"): EventFragment;
}
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
export interface TokensWithdrawnEventObject {
    assetId: string;
    receiver: string;
    amount: BigNumber;
}
export type TokensWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TokensWithdrawnEventObject>;
export type TokensWithdrawnEventFilter = TypedEventFilter<TokensWithdrawnEvent>;
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
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<[string]>;
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<[string]>;
        callDiamondWithEIP2612Signature(tokenAddress: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, diamondCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2(_diamondCalldata: BytesLike, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2Witness(_diamondCalldata: BytesLike, _signer: string, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPermit2MsgHash(_diamondCalldata: BytesLike, _assetId: string, _amount: BigNumberish, _nonce: BigNumberish, _deadline: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            msgHash: string;
        }>;
        nextNonce(owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        nextNonceAfter(owner: string, start: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    LIFI_DIAMOND(overrides?: CallOverrides): Promise<string>;
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
    callDiamondWithEIP2612Signature(tokenAddress: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, diamondCalldata: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2(_diamondCalldata: BytesLike, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2Witness(_diamondCalldata: BytesLike, _signer: string, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPermit2MsgHash(_diamondCalldata: BytesLike, _assetId: string, _amount: BigNumberish, _nonce: BigNumberish, _deadline: BigNumberish, overrides?: CallOverrides): Promise<string>;
    nextNonce(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    nextNonceAfter(owner: string, start: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<string>;
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
        callDiamondWithEIP2612Signature(tokenAddress: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, diamondCalldata: BytesLike, overrides?: CallOverrides): Promise<string>;
        callDiamondWithPermit2(_diamondCalldata: BytesLike, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        callDiamondWithPermit2Witness(_diamondCalldata: BytesLike, _signer: string, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        getPermit2MsgHash(_diamondCalldata: BytesLike, _assetId: string, _amount: BigNumberish, _nonce: BigNumberish, _deadline: BigNumberish, overrides?: CallOverrides): Promise<string>;
        nextNonce(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextNonceAfter(owner: string, start: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "TokensWithdrawn(address,address,uint256)"(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
        TokensWithdrawn(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
    };
    estimateGas: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<BigNumber>;
        callDiamondWithEIP2612Signature(tokenAddress: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, diamondCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        callDiamondWithPermit2(_diamondCalldata: BytesLike, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        callDiamondWithPermit2Witness(_diamondCalldata: BytesLike, _signer: string, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPermit2MsgHash(_diamondCalldata: BytesLike, _assetId: string, _amount: BigNumberish, _nonce: BigNumberish, _deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nextNonce(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        nextNonceAfter(owner: string, start: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callDiamondWithEIP2612Signature(tokenAddress: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, diamondCalldata: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2(_diamondCalldata: BytesLike, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2Witness(_diamondCalldata: BytesLike, _signer: string, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPermit2MsgHash(_diamondCalldata: BytesLike, _assetId: string, _amount: BigNumberish, _nonce: BigNumberish, _deadline: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextNonce(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextNonceAfter(owner: string, start: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Permit2Proxy.d.ts.map