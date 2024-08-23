import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
        "WITNESS_TYPEHASH()": FunctionFragment;
        "WITNESS_TYPE_STRING()": FunctionFragment;
        "diamondCallSingle(address,address,bytes,address,((address,uint256),uint256,uint256),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PERMIT2" | "WITNESS_TYPEHASH" | "WITNESS_TYPE_STRING" | "diamondCallSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPE_STRING", values?: undefined): string;
    encodeFunctionData(functionFragment: "diamondCallSingle", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        ISignatureTransfer.PermitTransferFromStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamondCallSingle", data: BytesLike): Result;
    events: {};
}
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
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<[string]>;
        diamondCallSingle(_tokenReceiver: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
    diamondCallSingle(_tokenReceiver: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<string>;
        diamondCallSingle(_tokenReceiver: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<BigNumber>;
        diamondCallSingle(_tokenReceiver: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WITNESS_TYPE_STRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        diamondCallSingle(_tokenReceiver: PromiseOrValue<string>, _diamondAddress: PromiseOrValue<string>, _diamondCalldata: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, _permit: ISignatureTransfer.PermitTransferFromStruct, _signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
