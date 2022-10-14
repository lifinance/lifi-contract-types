import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface FeeCollectorInterface extends utils.Interface {
    functions: {
        "batchWithdrawIntegratorFees(address[])": FunctionFragment;
        "batchWithdrawLifiFees(address[])": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "collectNativeFees(uint256,uint256,address)": FunctionFragment;
        "collectTokenFees(address,uint256,uint256,address)": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "getLifiTokenBalance(address)": FunctionFragment;
        "getTokenBalance(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawIntegratorFees(address)": FunctionFragment;
        "withdrawLifiFees(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchWithdrawIntegratorFees" | "batchWithdrawLifiFees" | "cancelOwnershipTransfer" | "collectNativeFees" | "collectTokenFees" | "confirmOwnershipTransfer" | "getLifiTokenBalance" | "getTokenBalance" | "owner" | "pendingOwner" | "transferOwnership" | "withdrawIntegratorFees" | "withdrawLifiFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchWithdrawIntegratorFees", values: [string[]]): string;
    encodeFunctionData(functionFragment: "batchWithdrawLifiFees", values: [string[]]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectNativeFees", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "collectTokenFees", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLifiTokenBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getTokenBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawIntegratorFees", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawLifiFees", values: [string]): string;
    decodeFunctionResult(functionFragment: "batchWithdrawIntegratorFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchWithdrawLifiFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectNativeFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectTokenFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLifiTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawIntegratorFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawLifiFees", data: BytesLike): Result;
    events: {
        "FeesCollected(address,address,uint256,uint256)": EventFragment;
        "FeesWithdrawn(address,address,uint256)": EventFragment;
        "LiFiFeesWithdrawn(address,address,uint256)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiFeesWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface FeesCollectedEventObject {
    _token: string;
    _integrator: string;
    _integratorFee: BigNumber;
    _lifiFee: BigNumber;
}
export declare type FeesCollectedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], FeesCollectedEventObject>;
export declare type FeesCollectedEventFilter = TypedEventFilter<FeesCollectedEvent>;
export interface FeesWithdrawnEventObject {
    _token: string;
    _to: string;
    _amount: BigNumber;
}
export declare type FeesWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], FeesWithdrawnEventObject>;
export declare type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;
export interface LiFiFeesWithdrawnEventObject {
    _token: string;
    _to: string;
    _amount: BigNumber;
}
export declare type LiFiFeesWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LiFiFeesWithdrawnEventObject>;
export declare type LiFiFeesWithdrawnEventFilter = TypedEventFilter<LiFiFeesWithdrawnEvent>;
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
export interface FeeCollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FeeCollectorInterface;
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
        batchWithdrawIntegratorFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        batchWithdrawLifiFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collectNativeFees(integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collectTokenFees(tokenAddress: string, integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getLifiTokenBalance(tokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenBalance(integratorAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawIntegratorFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawLifiFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    batchWithdrawIntegratorFees(tokenAddresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    batchWithdrawLifiFees(tokenAddresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collectNativeFees(integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collectTokenFees(tokenAddress: string, integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getLifiTokenBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenBalance(integratorAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawIntegratorFees(tokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawLifiFees(tokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchWithdrawIntegratorFees(tokenAddresses: string[], overrides?: CallOverrides): Promise<void>;
        batchWithdrawLifiFees(tokenAddresses: string[], overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        collectNativeFees(integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: CallOverrides): Promise<void>;
        collectTokenFees(tokenAddress: string, integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        getLifiTokenBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenBalance(integratorAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawIntegratorFees(tokenAddress: string, overrides?: CallOverrides): Promise<void>;
        withdrawLifiFees(tokenAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeesCollected(address,address,uint256,uint256)"(_token?: string | null, _integrator?: string | null, _integratorFee?: null, _lifiFee?: null): FeesCollectedEventFilter;
        FeesCollected(_token?: string | null, _integrator?: string | null, _integratorFee?: null, _lifiFee?: null): FeesCollectedEventFilter;
        "FeesWithdrawn(address,address,uint256)"(_token?: string | null, _to?: string | null, _amount?: null): FeesWithdrawnEventFilter;
        FeesWithdrawn(_token?: string | null, _to?: string | null, _amount?: null): FeesWithdrawnEventFilter;
        "LiFiFeesWithdrawn(address,address,uint256)"(_token?: string | null, _to?: string | null, _amount?: null): LiFiFeesWithdrawnEventFilter;
        LiFiFeesWithdrawn(_token?: string | null, _to?: string | null, _amount?: null): LiFiFeesWithdrawnEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        batchWithdrawIntegratorFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        batchWithdrawLifiFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collectNativeFees(integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collectTokenFees(tokenAddress: string, integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getLifiTokenBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenBalance(integratorAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawIntegratorFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawLifiFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchWithdrawIntegratorFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        batchWithdrawLifiFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collectNativeFees(integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collectTokenFees(tokenAddress: string, integratorFee: BigNumberish, lifiFee: BigNumberish, integratorAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getLifiTokenBalance(tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenBalance(integratorAddress: string, tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawIntegratorFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawLifiFees(tokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
