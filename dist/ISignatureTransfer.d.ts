import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
    type SignatureTransferDetailsStruct = {
        to: PromiseOrValue<string>;
        requestedAmount: PromiseOrValue<BigNumberish>;
    };
    type SignatureTransferDetailsStructOutput = [string, BigNumber] & {
        to: string;
        requestedAmount: BigNumber;
    };
    type PermitBatchTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct[];
        nonce: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
    };
    type PermitBatchTransferFromStructOutput = [
        ISignatureTransfer.TokenPermissionsStructOutput[],
        BigNumber,
        BigNumber
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput[];
        nonce: BigNumber;
        deadline: BigNumber;
    };
}
export interface ISignatureTransferInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "invalidateUnorderedNonces(uint256,uint256)": FunctionFragment;
        "nonceBitmap(address,uint256)": FunctionFragment;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)": FunctionFragment;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)": FunctionFragment;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)": FunctionFragment;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "invalidateUnorderedNonces" | "nonceBitmap" | "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)" | "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)" | "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)" | "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "invalidateUnorderedNonces", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonceBitmap", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateUnorderedNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonceBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", data: BytesLike): Result;
    events: {
        "UnorderedNonceInvalidation(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UnorderedNonceInvalidation"): EventFragment;
}
export interface UnorderedNonceInvalidationEventObject {
    owner: string;
    word: BigNumber;
    mask: BigNumber;
}
export type UnorderedNonceInvalidationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UnorderedNonceInvalidationEventObject>;
export type UnorderedNonceInvalidationEventFilter = TypedEventFilter<UnorderedNonceInvalidationEvent>;
export interface ISignatureTransfer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISignatureTransferInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "UnorderedNonceInvalidation(address,uint256,uint256)"(owner?: PromiseOrValue<string> | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
        UnorderedNonceInvalidation(owner?: PromiseOrValue<string> | null, word?: null, mask?: null): UnorderedNonceInvalidationEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        invalidateUnorderedNonces(wordPos: PromiseOrValue<BigNumberish>, mask: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nonceBitmap(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct, owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"(permit: ISignatureTransfer.PermitBatchTransferFromStruct, transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[], owner: PromiseOrValue<string>, witness: PromiseOrValue<BytesLike>, witnessTypeString: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
