import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface PermitHashInterface extends utils.Interface {
    functions: {
        "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH()": FunctionFragment;
        "_PERMIT_BATCH_TYPEHASH()": FunctionFragment;
        "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB()": FunctionFragment;
        "_PERMIT_DETAILS_TYPEHASH()": FunctionFragment;
        "_PERMIT_SINGLE_TYPEHASH()": FunctionFragment;
        "_PERMIT_TRANSFER_FROM_TYPEHASH()": FunctionFragment;
        "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB()": FunctionFragment;
        "_TOKEN_PERMISSIONS_TYPEHASH()": FunctionFragment;
        "_TOKEN_PERMISSIONS_TYPESTRING()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH" | "_PERMIT_BATCH_TYPEHASH" | "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB" | "_PERMIT_DETAILS_TYPEHASH" | "_PERMIT_SINGLE_TYPEHASH" | "_PERMIT_TRANSFER_FROM_TYPEHASH" | "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB" | "_TOKEN_PERMISSIONS_TYPEHASH" | "_TOKEN_PERMISSIONS_TYPESTRING"): FunctionFragment;
    encodeFunctionData(functionFragment: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_BATCH_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_DETAILS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_SINGLE_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_TRANSFER_FROM_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "_TOKEN_PERMISSIONS_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "_TOKEN_PERMISSIONS_TYPESTRING", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_BATCH_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_DETAILS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_SINGLE_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_TRANSFER_FROM_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_TOKEN_PERMISSIONS_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_TOKEN_PERMISSIONS_TYPESTRING", data: BytesLike): Result;
    events: {};
}
export interface PermitHash extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PermitHashInterface;
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
        _PERMIT_BATCH_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_BATCH_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_DETAILS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_SINGLE_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB(overrides?: CallOverrides): Promise<[string]>;
        _TOKEN_PERMISSIONS_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        _TOKEN_PERMISSIONS_TYPESTRING(overrides?: CallOverrides): Promise<[string]>;
    };
    _PERMIT_BATCH_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _PERMIT_BATCH_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB(overrides?: CallOverrides): Promise<string>;
    _PERMIT_DETAILS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _PERMIT_SINGLE_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _PERMIT_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB(overrides?: CallOverrides): Promise<string>;
    _TOKEN_PERMISSIONS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    _TOKEN_PERMISSIONS_TYPESTRING(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _PERMIT_BATCH_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _PERMIT_BATCH_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB(overrides?: CallOverrides): Promise<string>;
        _PERMIT_DETAILS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _PERMIT_SINGLE_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _PERMIT_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB(overrides?: CallOverrides): Promise<string>;
        _TOKEN_PERMISSIONS_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        _TOKEN_PERMISSIONS_TYPESTRING(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _PERMIT_BATCH_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_BATCH_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_DETAILS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_SINGLE_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB(overrides?: CallOverrides): Promise<BigNumber>;
        _TOKEN_PERMISSIONS_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        _TOKEN_PERMISSIONS_TYPESTRING(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _PERMIT_BATCH_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_BATCH_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_DETAILS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_SINGLE_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_TRANSFER_FROM_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _TOKEN_PERMISSIONS_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _TOKEN_PERMISSIONS_TYPESTRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PermitHash.d.ts.map