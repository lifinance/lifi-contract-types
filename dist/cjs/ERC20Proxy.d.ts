import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ERC20ProxyInterface extends utils.Interface {
    functions: {
        "authorizedCallers(address)": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setAuthorizedCaller(address,bool)": FunctionFragment;
        "transferFrom(address,address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "authorizedCallers" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "owner" | "pendingOwner" | "setAuthorizedCaller" | "transferFrom" | "transferOwnership" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "authorizedCallers", values: [string]): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthorizedCaller", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "authorizedCallers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthorizedCaller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "AuthorizationChanged(address,bool)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TokensWithdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AuthorizationChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensWithdrawn"): EventFragment;
}
export interface AuthorizationChangedEventObject {
    caller: string;
    authorized: boolean;
}
export type AuthorizationChangedEvent = TypedEvent<[
    string,
    boolean
], AuthorizationChangedEventObject>;
export type AuthorizationChangedEventFilter = TypedEventFilter<AuthorizationChangedEvent>;
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
export interface ERC20Proxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20ProxyInterface;
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
        authorizedCallers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setAuthorizedCaller(caller: string, authorized: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(tokenAddress: string, from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    authorizedCallers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setAuthorizedCaller(caller: string, authorized: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(tokenAddress: string, from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        authorizedCallers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setAuthorizedCaller(caller: string, authorized: boolean, overrides?: CallOverrides): Promise<void>;
        transferFrom(tokenAddress: string, from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AuthorizationChanged(address,bool)"(caller?: string | null, authorized?: null): AuthorizationChangedEventFilter;
        AuthorizationChanged(caller?: string | null, authorized?: null): AuthorizationChangedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "TokensWithdrawn(address,address,uint256)"(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
        TokensWithdrawn(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
    };
    estimateGas: {
        authorizedCallers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthorizedCaller(caller: string, authorized: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(tokenAddress: string, from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        authorizedCallers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthorizedCaller(caller: string, authorized: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(tokenAddress: string, from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawToken(assetId: string, receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
