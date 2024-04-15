import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ServiceFeeCollectorInterface extends utils.Interface {
    functions: {
        "batchWithdrawFees(address[])": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "collectNativeInsuranceFees(address)": FunctionFragment;
        "collectTokenInsuranceFees(address,uint256,address)": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawFees(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchWithdrawFees" | "cancelOwnershipTransfer" | "collectNativeInsuranceFees" | "collectTokenInsuranceFees" | "confirmOwnershipTransfer" | "owner" | "pendingOwner" | "transferOwnership" | "withdrawFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchWithdrawFees", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectNativeInsuranceFees", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "collectTokenInsuranceFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "batchWithdrawFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectNativeInsuranceFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectTokenInsuranceFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    events: {
        "FeesWithdrawn(address,address,uint256)": EventFragment;
        "GasFeesCollected(address,uint256,address,uint256)": EventFragment;
        "InsuranceFeesCollected(address,address,uint256)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasFeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InsuranceFeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface FeesWithdrawnEventObject {
    token: string;
    to: string;
    amount: BigNumber;
}
export declare type FeesWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], FeesWithdrawnEventObject>;
export declare type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;
export interface GasFeesCollectedEventObject {
    token: string;
    chainId: BigNumber;
    receiver: string;
    feeAmount: BigNumber;
}
export declare type GasFeesCollectedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], GasFeesCollectedEventObject>;
export declare type GasFeesCollectedEventFilter = TypedEventFilter<GasFeesCollectedEvent>;
export interface InsuranceFeesCollectedEventObject {
    token: string;
    receiver: string;
    feeAmount: BigNumber;
}
export declare type InsuranceFeesCollectedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], InsuranceFeesCollectedEventObject>;
export declare type InsuranceFeesCollectedEventFilter = TypedEventFilter<InsuranceFeesCollectedEvent>;
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
export interface ServiceFeeCollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ServiceFeeCollectorInterface;
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
        batchWithdrawFees(tokenAddresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectNativeInsuranceFees(receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectTokenInsuranceFees(tokenAddress: PromiseOrValue<string>, feeAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFees(tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    batchWithdrawFees(tokenAddresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectNativeInsuranceFees(receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectTokenInsuranceFees(tokenAddress: PromiseOrValue<string>, feeAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFees(tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchWithdrawFees(tokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        collectNativeInsuranceFees(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        collectTokenInsuranceFees(tokenAddress: PromiseOrValue<string>, feeAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawFees(tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeesWithdrawn(address,address,uint256)"(token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): FeesWithdrawnEventFilter;
        FeesWithdrawn(token?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): FeesWithdrawnEventFilter;
        "GasFeesCollected(address,uint256,address,uint256)"(token?: PromiseOrValue<string> | null, chainId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<string> | null, feeAmount?: null): GasFeesCollectedEventFilter;
        GasFeesCollected(token?: PromiseOrValue<string> | null, chainId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<string> | null, feeAmount?: null): GasFeesCollectedEventFilter;
        "InsuranceFeesCollected(address,address,uint256)"(token?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, feeAmount?: null): InsuranceFeesCollectedEventFilter;
        InsuranceFeesCollected(token?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, feeAmount?: null): InsuranceFeesCollectedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        batchWithdrawFees(tokenAddresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectNativeInsuranceFees(receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectTokenInsuranceFees(tokenAddress: PromiseOrValue<string>, feeAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFees(tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchWithdrawFees(tokenAddresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectNativeInsuranceFees(receiver: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectTokenInsuranceFees(tokenAddress: PromiseOrValue<string>, feeAmount: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFees(tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
