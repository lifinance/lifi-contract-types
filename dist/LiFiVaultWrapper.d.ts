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
    enabled: [
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ];
};
export type FeeConfigStructOutput = [
    [
        number,
        number,
        number,
        number
    ],
    [
        boolean,
        boolean,
        boolean,
        boolean
    ]
] & {
    rateBps: [number, number, number, number];
    enabled: [boolean, boolean, boolean, boolean];
};
export interface LiFiVaultWrapperInterface extends utils.Interface {
    functions: {
        "acceptVaultWrapperAdmin()": FunctionFragment;
        "accruedFeeAssets()": FunctionFragment;
        "accruedFeeShares()": FunctionFragment;
        "adapter()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "factory()": FunctionFragment;
        "feeEnabled(uint8)": FunctionFragment;
        "feeRate(uint8)": FunctionFragment;
        "initData()": FunctionFragment;
        "initialize(address,address,address,uint16,(uint16[4],bool[4]),bytes)": FunctionFragment;
        "initialized()": FunctionFragment;
        "integratorShareBps()": FunctionFragment;
        "lastMgmtAccrual()": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "pendingVaultWrapperAdmin()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "setFeeRate(uint8,uint16)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferVaultWrapperAdmin(address)": FunctionFragment;
        "underlying()": FunctionFragment;
        "vaultWrapperAdmin()": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptVaultWrapperAdmin" | "accruedFeeAssets" | "accruedFeeShares" | "adapter" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "factory" | "feeEnabled" | "feeRate" | "initData" | "initialize" | "initialized" | "integratorShareBps" | "lastMgmtAccrual" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "pendingVaultWrapperAdmin" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "setFeeRate" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "transferVaultWrapperAdmin" | "underlying" | "vaultWrapperAdmin" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptVaultWrapperAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "accruedFeeAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "accruedFeeShares", values?: undefined): string;
    encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeEnabled", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feeRate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initData", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        FeeConfigStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "integratorShareBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastMgmtAccrual", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingVaultWrapperAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeem", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setFeeRate", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferVaultWrapperAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaultWrapperAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "acceptVaultWrapperAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFeeAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFeeShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorShareBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastMgmtAccrual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingVaultWrapperAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferVaultWrapperAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultWrapperAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "AssetFeeCharged(uint8,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "DilutionFeeAccrued(uint8,uint256,uint256)": EventFragment;
        "FeeConfigUpdated(uint8,uint16,bool)": EventFragment;
        "Initialized(address,address,address,address,address,uint16)": EventFragment;
        "Initialized(uint64)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "VaultWrapperAdminTransferStarted(address,address)": EventFragment;
        "VaultWrapperAdminTransferred(address,address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AssetFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DilutionFeeAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(address,address,address,address,address,uint16)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(uint64)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VaultWrapperAdminTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VaultWrapperAdminTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
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
}
export type AssetFeeChargedEvent = TypedEvent<[
    number,
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
    feeAssets: BigNumber;
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
    enabled: boolean;
}
export type FeeConfigUpdatedEvent = TypedEvent<[
    number,
    number,
    boolean
], FeeConfigUpdatedEventObject>;
export type FeeConfigUpdatedEventFilter = TypedEventFilter<FeeConfigUpdatedEvent>;
export interface Initialized_address_address_address_address_address_uint16_EventObject {
    asset: string;
    underlying: string;
    adapter: string;
    vaultWrapperAdmin: string;
    factory: string;
    integratorShareBps: number;
}
export type Initialized_address_address_address_address_address_uint16_Event = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    number
], Initialized_address_address_address_address_address_uint16_EventObject>;
export type Initialized_address_address_address_address_address_uint16_EventFilter = TypedEventFilter<Initialized_address_address_address_address_address_uint16_Event>;
export interface Initialized_uint64_EventObject {
    version: BigNumber;
}
export type Initialized_uint64_Event = TypedEvent<[
    BigNumber
], Initialized_uint64_EventObject>;
export type Initialized_uint64_EventFilter = TypedEventFilter<Initialized_uint64_Event>;
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
export interface VaultWrapperAdminTransferStartedEventObject {
    currentAdmin: string;
    newAdmin: string;
}
export type VaultWrapperAdminTransferStartedEvent = TypedEvent<[
    string,
    string
], VaultWrapperAdminTransferStartedEventObject>;
export type VaultWrapperAdminTransferStartedEventFilter = TypedEventFilter<VaultWrapperAdminTransferStartedEvent>;
export interface VaultWrapperAdminTransferredEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type VaultWrapperAdminTransferredEvent = TypedEvent<[
    string,
    string
], VaultWrapperAdminTransferredEventObject>;
export type VaultWrapperAdminTransferredEventFilter = TypedEventFilter<VaultWrapperAdminTransferredEvent>;
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
        acceptVaultWrapperAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accruedFeeAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        accruedFeeShares(overrides?: CallOverrides): Promise<[BigNumber]>;
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
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        initData(overrides?: CallOverrides): Promise<[string]>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
        integratorShareBps(overrides?: CallOverrides): Promise<[number]>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        pendingVaultWrapperAdmin(overrides?: CallOverrides): Promise<[string]>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferVaultWrapperAdmin(_newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<[string]>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptVaultWrapperAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accruedFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
    accruedFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
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
    deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initData(overrides?: CallOverrides): Promise<string>;
    initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
    integratorShareBps(overrides?: CallOverrides): Promise<number>;
    lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
    maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    pendingVaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
    previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferVaultWrapperAdmin(_newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
    withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptVaultWrapperAdmin(overrides?: CallOverrides): Promise<void>;
        accruedFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        accruedFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
        adapter(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initData(overrides?: CallOverrides): Promise<string>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
        integratorShareBps(overrides?: CallOverrides): Promise<number>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        pendingVaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferVaultWrapperAdmin(_newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "AssetFeeCharged(uint8,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null): AssetFeeChargedEventFilter;
        AssetFeeCharged(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null): AssetFeeChargedEventFilter;
        "Deposit(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        "DilutionFeeAccrued(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, feeAssets?: null): DilutionFeeAccruedEventFilter;
        DilutionFeeAccrued(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, feeAssets?: null): DilutionFeeAccruedEventFilter;
        "FeeConfigUpdated(uint8,uint16,bool)"(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null, enabled?: null): FeeConfigUpdatedEventFilter;
        FeeConfigUpdated(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null, enabled?: null): FeeConfigUpdatedEventFilter;
        "Initialized(address,address,address,address,address,uint16)"(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null, factory?: null, integratorShareBps?: null): Initialized_address_address_address_address_address_uint16_EventFilter;
        "Initialized(uint64)"(version?: null): Initialized_uint64_EventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "VaultWrapperAdminTransferStarted(address,address)"(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): VaultWrapperAdminTransferStartedEventFilter;
        VaultWrapperAdminTransferStarted(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): VaultWrapperAdminTransferStartedEventFilter;
        "VaultWrapperAdminTransferred(address,address)"(previousAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): VaultWrapperAdminTransferredEventFilter;
        VaultWrapperAdminTransferred(previousAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): VaultWrapperAdminTransferredEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        acceptVaultWrapperAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accruedFeeAssets(overrides?: CallOverrides): Promise<BigNumber>;
        accruedFeeShares(overrides?: CallOverrides): Promise<BigNumber>;
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
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initData(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
        integratorShareBps(overrides?: CallOverrides): Promise<BigNumber>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        pendingVaultWrapperAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferVaultWrapperAdmin(_newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptVaultWrapperAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accruedFeeAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accruedFeeShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorShareBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastMgmtAccrual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingVaultWrapperAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFeeRate(_feeType: PromiseOrValue<BigNumberish>, _newRateBps: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferVaultWrapperAdmin(_newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
