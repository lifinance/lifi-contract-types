import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type FeeConfigStruct = {
    rateBps: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ];
};
export type FeeConfigStructOutput = [[number, number, number, number]] & {
    rateBps: [number, number, number, number];
};
export type FeeReceiverStruct = {
    wallet: PromiseOrValue<string>;
    bps: PromiseOrValue<BigNumberish>;
};
export type FeeReceiverStructOutput = [string, number] & {
    wallet: string;
    bps: number;
};
export interface LiFiVaultWrapperInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "accessGate()": FunctionFragment;
        "adapter()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "deposit(uint256,address,uint256)": FunctionFragment;
        "depositsPaused()": FunctionFragment;
        "distributeFees()": FunctionFragment;
        "factory()": FunctionFragment;
        "feeEnabled(uint8)": FunctionFragment;
        "feeRate(uint8)": FunctionFragment;
        "initialize(address,address,address,uint16[4],(uint16[4]),(address,uint16)[],address)": FunctionFragment;
        "initialized()": FunctionFragment;
        "integratorFeeAssets()": FunctionFragment;
        "integratorFeeReceivers(uint256)": FunctionFragment;
        "integratorFeeShares()": FunctionFragment;
        "integratorShareBps(uint256)": FunctionFragment;
        "lastMgmtAccrual()": FunctionFragment;
        "lifiFeeAssets()": FunctionFragment;
        "lifiFeeShares()": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address,uint256)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "perfHighWaterMarkPps()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "redeem(uint256,address,address,uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAccessGate(address)": FunctionFragment;
        "setFeeRate(uint8,uint16)": FunctionFragment;
        "setIntegratorFeeReceivers((address,uint16)[])": FunctionFragment;
        "shareDecimalsOffset()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "underlying()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(uint256,address,address,uint256)": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "accessGate" | "adapter" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit(uint256,address)" | "deposit(uint256,address,uint256)" | "depositsPaused" | "distributeFees" | "factory" | "feeEnabled" | "feeRate" | "initialize" | "initialized" | "integratorFeeAssets" | "integratorFeeReceivers" | "integratorFeeShares" | "integratorShareBps" | "lastMgmtAccrual" | "lifiFeeAssets" | "lifiFeeShares" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint(uint256,address,uint256)" | "mint(uint256,address)" | "name" | "owner" | "pause" | "paused" | "pendingOwner" | "perfHighWaterMarkPps" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem(uint256,address,address,uint256)" | "redeem(uint256,address,address)" | "renounceOwnership" | "setAccessGate" | "setFeeRate" | "setIntegratorFeeReceivers" | "shareDecimalsOffset" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "underlying" | "unpause" | "withdraw(uint256,address,address,uint256)" | "withdraw(uint256,address,address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "accessGate", values?: undefined): string;
    encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit(uint256,address)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposit(uint256,address,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositsPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "distributeFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeEnabled", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feeRate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        FeeConfigStruct,
        FeeReceiverStruct[],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "integratorFeeAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "integratorFeeReceivers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "integratorFeeShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "integratorShareBps", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "lastMgmtAccrual", values?: undefined): string;
    encodeFunctionData(functionFragment: "lifiFeeAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "lifiFeeShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint(uint256,address,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mint(uint256,address)", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "perfHighWaterMarkPps", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeem(uint256,address,address,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeem(uint256,address,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAccessGate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFeeRate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setIntegratorFeeReceivers", values: [FeeReceiverStruct[]]): string;
    encodeFunctionData(functionFragment: "shareDecimalsOffset", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw(uint256,address,address,uint256)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdraw(uint256,address,address)", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accessGate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositsPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorFeeAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorFeeReceivers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorFeeShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorShareBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastMgmtAccrual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lifiFeeAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lifiFeeShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "perfHighWaterMarkPps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem(uint256,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAccessGate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIntegratorFeeReceivers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shareDecimalsOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw(uint256,address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw(uint256,address,address)", data: BytesLike): Result;
    events: {
        "AccessGateUpdated(address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AssetFeeCharged(uint8,uint256,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "DilutionFeeAccrued(uint8,uint256,uint256)": EventFragment;
        "FeeConfigUpdated(uint8,uint16)": EventFragment;
        "FeePoolDistributed(address,uint256,uint256)": EventFragment;
        "Initialized(uint64)": EventFragment;
        "IntegratorPayoutRetained(address,address,uint256)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PauseSet(bool,address)": EventFragment;
        "ReceiversSet(tuple[])": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "VaultWrapperConfigured(address,address,address,address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccessGateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AssetFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DilutionFeeAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeePoolDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntegratorPayoutRetained"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiversSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VaultWrapperConfigured"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AccessGateUpdatedEventObject {
    accessGate: string;
}
export type AccessGateUpdatedEvent = TypedEvent<[
    string
], AccessGateUpdatedEventObject>;
export type AccessGateUpdatedEventFilter = TypedEventFilter<AccessGateUpdatedEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface AssetFeeChargedEventObject {
    feeType: number;
    feeAssets: BigNumber;
    integratorAssets: BigNumber;
}
export type AssetFeeChargedEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], AssetFeeChargedEventObject>;
export type AssetFeeChargedEventFilter = TypedEventFilter<AssetFeeChargedEvent>;
export interface DepositEventObject {
    sender: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface DilutionFeeAccruedEventObject {
    feeType: number;
    feeShares: BigNumber;
    integratorShares: BigNumber;
}
export type DilutionFeeAccruedEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], DilutionFeeAccruedEventObject>;
export type DilutionFeeAccruedEventFilter = TypedEventFilter<DilutionFeeAccruedEvent>;
export interface FeeConfigUpdatedEventObject {
    feeType: number;
    newRateBps: number;
}
export type FeeConfigUpdatedEvent = TypedEvent<[
    number,
    number
], FeeConfigUpdatedEventObject>;
export type FeeConfigUpdatedEventFilter = TypedEventFilter<FeeConfigUpdatedEvent>;
export interface FeePoolDistributedEventObject {
    token: string;
    lifiAmount: BigNumber;
    integratorAmount: BigNumber;
}
export type FeePoolDistributedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], FeePoolDistributedEventObject>;
export type FeePoolDistributedEventFilter = TypedEventFilter<FeePoolDistributedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface IntegratorPayoutRetainedEventObject {
    receiver: string;
    token: string;
    amount: BigNumber;
}
export type IntegratorPayoutRetainedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], IntegratorPayoutRetainedEventObject>;
export type IntegratorPayoutRetainedEventFilter = TypedEventFilter<IntegratorPayoutRetainedEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PauseSetEventObject {
    paused: boolean;
    by: string;
}
export type PauseSetEvent = TypedEvent<[boolean, string], PauseSetEventObject>;
export type PauseSetEventFilter = TypedEventFilter<PauseSetEvent>;
export interface ReceiversSetEventObject {
    receivers: FeeReceiverStructOutput[];
}
export type ReceiversSetEvent = TypedEvent<[
    FeeReceiverStructOutput[]
], ReceiversSetEventObject>;
export type ReceiversSetEventFilter = TypedEventFilter<ReceiversSetEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface VaultWrapperConfiguredEventObject {
    asset: string;
    underlying: string;
    adapter: string;
    vaultWrapperAdmin: string;
}
export type VaultWrapperConfiguredEvent = TypedEvent<[
    string,
    string,
    string,
    string
], VaultWrapperConfiguredEventObject>;
export type VaultWrapperConfiguredEventFilter = TypedEventFilter<VaultWrapperConfiguredEvent>;
export interface WithdrawEventObject {
    sender: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface LiFiVaultWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiFiVaultWrapperInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accessGate(overrides?: CallOverrides): Promise<[string]>;
        adapter(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        "deposit(uint256,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deposit(uint256,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _minShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositsPaused(overrides?: CallOverrides): Promise<[boolean]>;
        distributeFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
        integratorFeeAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        integratorFeeReceivers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
            wallet: string;
            bps: number;
        }>;
        integratorFeeShares(overrides?: CallOverrides): Promise<[BigNumber]>;
        integratorShareBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<[BigNumber]>;
        lifiFeeAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        lifiFeeShares(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxDeposit(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "mint(uint256,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _maxAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "mint(uint256,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        perfHighWaterMarkPps(overrides?: CallOverrides): Promise<[BigNumber]>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "redeem(uint256,address,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _minAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "redeem(uint256,address,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: CallOverrides): Promise<[void]>;
        setAccessGate(_accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIntegratorFeeReceivers(_receivers: FeeReceiverStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        shareDecimalsOffset(overrides?: CallOverrides): Promise<[number]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "withdraw(uint256,address,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _maxShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "withdraw(uint256,address,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accessGate(overrides?: CallOverrides): Promise<string>;
    adapter(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    "deposit(uint256,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deposit(uint256,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _minShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositsPaused(overrides?: CallOverrides): Promise<boolean>;
    distributeFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _accessGate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
    integratorFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
    integratorFeeReceivers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
        wallet: string;
        bps: number;
    }>;
    integratorFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
    integratorShareBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
    lifiFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
    lifiFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
    maxDeposit(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "mint(uint256,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _maxAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "mint(uint256,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    perfHighWaterMarkPps(overrides?: CallOverrides): Promise<BigNumber>;
    previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "redeem(uint256,address,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _minAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "redeem(uint256,address,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: CallOverrides): Promise<void>;
    setAccessGate(_accessGate: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIntegratorFeeReceivers(_receivers: FeeReceiverStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    shareDecimalsOffset(overrides?: CallOverrides): Promise<number>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "withdraw(uint256,address,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _maxShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "withdraw(uint256,address,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        accessGate(overrides?: CallOverrides): Promise<string>;
        adapter(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        "deposit(uint256,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "deposit(uint256,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _minShares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        depositsPaused(overrides?: CallOverrides): Promise<boolean>;
        distributeFees(overrides?: CallOverrides): Promise<void>;
        factory(overrides?: CallOverrides): Promise<string>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _accessGate: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
        integratorFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        integratorFeeReceivers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, number] & {
            wallet: string;
            bps: number;
        }>;
        integratorFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
        integratorShareBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
        lifiFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        lifiFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "mint(uint256,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _maxAssets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "mint(uint256,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        perfHighWaterMarkPps(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _minAssets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAccessGate(_accessGate: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setIntegratorFeeReceivers(_receivers: FeeReceiverStruct[], overrides?: CallOverrides): Promise<void>;
        shareDecimalsOffset(overrides?: CallOverrides): Promise<number>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        "withdraw(uint256,address,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _maxShares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "withdraw(uint256,address,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AccessGateUpdated(address)"(accessGate?: PromiseOrValue<string> | null): AccessGateUpdatedEventFilter;
        AccessGateUpdated(accessGate?: PromiseOrValue<string> | null): AccessGateUpdatedEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "AssetFeeCharged(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        AssetFeeCharged(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        "Deposit(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        "DilutionFeeAccrued(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        DilutionFeeAccrued(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        "FeeConfigUpdated(uint8,uint16)"(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null): FeeConfigUpdatedEventFilter;
        FeeConfigUpdated(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null): FeeConfigUpdatedEventFilter;
        "FeePoolDistributed(address,uint256,uint256)"(token?: PromiseOrValue<string> | null, lifiAmount?: null, integratorAmount?: null): FeePoolDistributedEventFilter;
        FeePoolDistributed(token?: PromiseOrValue<string> | null, lifiAmount?: null, integratorAmount?: null): FeePoolDistributedEventFilter;
        "Initialized(uint64)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "IntegratorPayoutRetained(address,address,uint256)"(receiver?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): IntegratorPayoutRetainedEventFilter;
        IntegratorPayoutRetained(receiver?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): IntegratorPayoutRetainedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "PauseSet(bool,address)"(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        PauseSet(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        "ReceiversSet(tuple[])"(receivers?: null): ReceiversSetEventFilter;
        ReceiversSet(receivers?: null): ReceiversSetEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "VaultWrapperConfigured(address,address,address,address)"(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null): VaultWrapperConfiguredEventFilter;
        VaultWrapperConfigured(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null): VaultWrapperConfiguredEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accessGate(overrides?: CallOverrides): Promise<BigNumber>;
        adapter(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        "deposit(uint256,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deposit(uint256,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _minShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositsPaused(overrides?: CallOverrides): Promise<BigNumber>;
        distributeFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
        integratorFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        integratorFeeReceivers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        integratorFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
        integratorShareBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
        lifiFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        lifiFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "mint(uint256,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _maxAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "mint(uint256,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        perfHighWaterMarkPps(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "redeem(uint256,address,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _minAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "redeem(uint256,address,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<BigNumber>;
        setAccessGate(_accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIntegratorFeeReceivers(_receivers: FeeReceiverStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        shareDecimalsOffset(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "withdraw(uint256,address,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _maxShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "withdraw(uint256,address,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accessGate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deposit(uint256,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deposit(uint256,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _minShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositsPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        distributeFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorFeeAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorFeeReceivers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorFeeShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorShareBps(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lifiFeeAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lifiFeeShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeposit(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "mint(uint256,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _maxAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "mint(uint256,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        perfHighWaterMarkPps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "redeem(uint256,address,address,uint256)"(_shares: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _minAssets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "redeem(uint256,address,address)"(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAccessGate(_accessGate: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIntegratorFeeReceivers(_receivers: FeeReceiverStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        shareDecimalsOffset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "withdraw(uint256,address,address,uint256)"(_assets: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _maxShares: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "withdraw(uint256,address,address)"(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
