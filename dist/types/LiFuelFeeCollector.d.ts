import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface LiFuelFeeCollectorInterface extends utils.Interface {
    functions: {
        "batchWithdrawFees(address[])": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "collectNativeGasFees(uint256,uint256,address)": FunctionFragment;
        "collectTokenGasFees(address,uint256,uint256,address)": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawFees(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchWithdrawFees" | "cancelOwnershipTransfer" | "collectNativeGasFees" | "collectTokenGasFees" | "confirmOwnershipTransfer" | "owner" | "pendingOwner" | "transferOwnership" | "withdrawFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchWithdrawFees", values: [string[]]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectNativeGasFees", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "collectTokenGasFees", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [string]): string;
    decodeFunctionResult(functionFragment: "batchWithdrawFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectNativeGasFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectTokenGasFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    events: {
        "FeesWithdrawn(address,address,uint256)": EventFragment;
        "GasFeesCollected(address,uint256,address,uint256)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasFeesCollected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface FeesWithdrawnEventObject {
    token: string;
    to: string;
    amount: BigNumber;
}
export type FeesWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], FeesWithdrawnEventObject>;
export type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;
export interface GasFeesCollectedEventObject {
    token: string;
    chainId: BigNumber;
    receiver: string;
    feeAmount: BigNumber;
}
export type GasFeesCollectedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], GasFeesCollectedEventObject>;
export type GasFeesCollectedEventFilter = TypedEventFilter<GasFeesCollectedEvent>;
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
export interface LiFuelFeeCollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiFuelFeeCollectorInterface;
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
        batchWithdrawFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collectNativeGasFees(feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collectTokenGasFees(tokenAddress: string, feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawFees(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    batchWithdrawFees(tokenAddresses: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collectNativeGasFees(feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collectTokenGasFees(tokenAddress: string, feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawFees(tokenAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchWithdrawFees(tokenAddresses: string[], overrides?: CallOverrides): Promise<void>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        collectNativeGasFees(feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<void>;
        collectTokenGasFees(tokenAddress: string, feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawFees(tokenAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FeesWithdrawn(address,address,uint256)"(token?: string | null, to?: string | null, amount?: null): FeesWithdrawnEventFilter;
        FeesWithdrawn(token?: string | null, to?: string | null, amount?: null): FeesWithdrawnEventFilter;
        "GasFeesCollected(address,uint256,address,uint256)"(token?: string | null, chainId?: BigNumberish | null, receiver?: string | null, feeAmount?: null): GasFeesCollectedEventFilter;
        GasFeesCollected(token?: string | null, chainId?: BigNumberish | null, receiver?: string | null, feeAmount?: null): GasFeesCollectedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        batchWithdrawFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        collectNativeGasFees(feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        collectTokenGasFees(tokenAddress: string, feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawFees(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchWithdrawFees(tokenAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collectNativeGasFees(feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collectTokenGasFees(tokenAddress: string, feeAmount: BigNumberish, chainId: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawFees(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=LiFuelFeeCollector.d.ts.map