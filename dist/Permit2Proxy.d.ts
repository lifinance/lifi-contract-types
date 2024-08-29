import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
        "LIFI_DIAMOND()": FunctionFragment;
        "PERMIT2()": FunctionFragment;
        "PERMIT_WITH_WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPE_STRING()": FunctionFragment;
        "callDiamondWithEIP2612Signature(address,uint256,uint256,uint8,bytes32,bytes32,bytes)": FunctionFragment;
        "callDiamondWithPermit2SignatureSingle(bytes,address,((address,uint256),uint256,uint256),bytes)": FunctionFragment;
        "diamondWhitelist(address)": FunctionFragment;
        "getPermit2MsgHash(bytes,address,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "LIFI_DIAMOND" | "PERMIT2" | "PERMIT_WITH_WITNESS_TYPEHASH" | "WITNESS_TYPEHASH" | "WITNESS_TYPE_STRING" | "callDiamondWithEIP2612Signature" | "callDiamondWithPermit2SignatureSingle" | "diamondWhitelist" | "getPermit2MsgHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "LIFI_DIAMOND", values?: undefined): string;
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
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callDiamondWithPermit2SignatureSingle", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        ISignatureTransfer.PermitTransferFromStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "diamondWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPermit2MsgHash", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "LIFI_DIAMOND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_WITH_WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithEIP2612Signature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callDiamondWithPermit2SignatureSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermit2MsgHash", data: BytesLike): Result;
    events: {
        "WhitelistUpdated(address[],bool[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
}
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
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<[string]>;
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<[string]>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callDiamondWithPermit2SignatureSingle(_diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        getPermit2MsgHash(_diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            msgHash: string;
        }>;
    };
    LIFI_DIAMOND(overrides?: CallOverrides): Promise<string>;
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
    callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callDiamondWithPermit2SignatureSingle(_diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    getPermit2MsgHash(_diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<string>;
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        callDiamondWithPermit2SignatureSingle(_diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getPermit2MsgHash(_diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "WhitelistUpdated(address[],bool[])"(addresses?: null, values?: null): WhitelistUpdatedEventFilter;
        WhitelistUpdated(addresses?: null, values?: null): WhitelistUpdatedEventFilter;
    };
    estimateGas: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<BigNumber>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callDiamondWithPermit2SignatureSingle(_diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPermit2MsgHash(_diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        LIFI_DIAMOND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PERMIT_WITH_WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callDiamondWithEIP2612Signature(tokenAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, diamondCalldata: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callDiamondWithPermit2SignatureSingle(_diamondCalldata: PromiseOrValue<BytesLike>, _signer: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamondWhitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPermit2MsgHash(_diamondCalldata: PromiseOrValue<BytesLike>, _assetId: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
