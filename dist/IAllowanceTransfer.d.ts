import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IAllowanceTransfer {
    type TokenSpenderPairStruct = {
        token: PromiseOrValue<string>;
        spender: PromiseOrValue<string>;
    };
    type TokenSpenderPairStructOutput = [string, string] & {
        token: string;
        spender: string;
    };
    type PermitDetailsStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        expiration: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
    };
    type PermitDetailsStructOutput = [
        string,
        BigNumber,
        number,
        number
    ] & {
        token: string;
        amount: BigNumber;
        expiration: number;
        nonce: number;
    };
    type PermitBatchStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct[];
        spender: PromiseOrValue<string>;
        sigDeadline: PromiseOrValue<BigNumberish>;
    };
    type PermitBatchStructOutput = [
        IAllowanceTransfer.PermitDetailsStructOutput[],
        string,
        BigNumber
    ] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput[];
        spender: string;
        sigDeadline: BigNumber;
    };
    type PermitSingleStruct = {
        details: IAllowanceTransfer.PermitDetailsStruct;
        spender: PromiseOrValue<string>;
        sigDeadline: PromiseOrValue<BigNumberish>;
    };
    type PermitSingleStructOutput = [
        IAllowanceTransfer.PermitDetailsStructOutput,
        string,
        BigNumber
    ] & {
        details: IAllowanceTransfer.PermitDetailsStructOutput;
        spender: string;
        sigDeadline: BigNumber;
    };
    type AllowanceTransferDetailsStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        token: PromiseOrValue<string>;
    };
    type AllowanceTransferDetailsStructOutput = [
        string,
        string,
        BigNumber,
        string
    ] & {
        from: string;
        to: string;
        amount: BigNumber;
        token: string;
    };
}
export interface IAllowanceTransferInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address,address)": FunctionFragment;
        "approve(address,address,uint160,uint48)": FunctionFragment;
        "invalidateNonces(address,address,uint48)": FunctionFragment;
        "lockdown((address,address)[])": FunctionFragment;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)": FunctionFragment;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)": FunctionFragment;
        "transferFrom((address,address,uint160,address)[])": FunctionFragment;
        "transferFrom(address,address,uint160,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "invalidateNonces" | "lockdown" | "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)" | "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)" | "transferFrom((address,address,uint160,address)[])" | "transferFrom(address,address,uint160,address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "approve", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "invalidateNonces", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "lockdown", values: [IAllowanceTransfer.TokenSpenderPairStruct[]]): string;
    encodeFunctionData(functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)", values: [
        PromiseOrValue<string>,
        IAllowanceTransfer.PermitBatchStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)", values: [
        PromiseOrValue<string>,
        IAllowanceTransfer.PermitSingleStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferFrom((address,address,uint160,address)[])", values: [IAllowanceTransfer.AllowanceTransferDetailsStruct[]]): string;
    encodeFunctionData(functionFragment: "transferFrom(address,address,uint160,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom((address,address,uint160,address)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom(address,address,uint160,address)", data: BytesLike): Result;
    events: {
        "Approval(address,address,address,uint160,uint48)": EventFragment;
        "Lockdown(address,address,address)": EventFragment;
        "NonceInvalidation(address,address,address,uint48,uint48)": EventFragment;
        "Permit(address,address,address,uint160,uint48,uint48)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Lockdown"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceInvalidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Permit"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    token: string;
    spender: string;
    amount: BigNumber;
    expiration: number;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface LockdownEventObject {
    owner: string;
    token: string;
    spender: string;
}
export type LockdownEvent = TypedEvent<[
    string,
    string,
    string
], LockdownEventObject>;
export type LockdownEventFilter = TypedEventFilter<LockdownEvent>;
export interface NonceInvalidationEventObject {
    owner: string;
    token: string;
    spender: string;
    newNonce: number;
    oldNonce: number;
}
export type NonceInvalidationEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    number
], NonceInvalidationEventObject>;
export type NonceInvalidationEventFilter = TypedEventFilter<NonceInvalidationEvent>;
export interface PermitEventObject {
    owner: string;
    token: string;
    spender: string;
    amount: BigNumber;
    expiration: number;
    nonce: number;
}
export type PermitEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    number
], PermitEventObject>;
export type PermitEventFilter = TypedEventFilter<PermitEvent>;
export interface IAllowanceTransfer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAllowanceTransferInterface;
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
        allowance(user: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "transferFrom(address,address,uint160,address)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(user: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number
    ] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
    }>;
    approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "transferFrom(address,address,uint160,address)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(user: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number
        ] & {
            amount: BigNumber;
            expiration: number;
            nonce: number;
        }>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: CallOverrides): Promise<void>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: CallOverrides): Promise<void>;
        "transferFrom(address,address,uint160,address)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,address,uint160,uint48)"(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null): ApprovalEventFilter;
        "Lockdown(address,address,address)"(owner?: PromiseOrValue<string> | null, token?: null, spender?: null): LockdownEventFilter;
        Lockdown(owner?: PromiseOrValue<string> | null, token?: null, spender?: null): LockdownEventFilter;
        "NonceInvalidation(address,address,address,uint48,uint48)"(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        NonceInvalidation(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, newNonce?: null, oldNonce?: null): NonceInvalidationEventFilter;
        "Permit(address,address,address,uint160,uint48,uint48)"(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null, nonce?: null): PermitEventFilter;
        Permit(owner?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, amount?: null, expiration?: null, nonce?: null): PermitEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(user: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "transferFrom(address,address,uint160,address)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(user: PromiseOrValue<string>, token: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, expiration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        invalidateNonces(token: PromiseOrValue<string>, spender: PromiseOrValue<string>, newNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockdown(approvals: IAllowanceTransfer.TokenSpenderPairStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "permit(address,((address,uint160,uint48,uint48)[],address,uint256),bytes)"(owner: PromiseOrValue<string>, permitBatch: IAllowanceTransfer.PermitBatchStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(owner: PromiseOrValue<string>, permitSingle: IAllowanceTransfer.PermitSingleStruct, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transferFrom((address,address,uint160,address)[])"(transferDetails: IAllowanceTransfer.AllowanceTransferDetailsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "transferFrom(address,address,uint160,address)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
