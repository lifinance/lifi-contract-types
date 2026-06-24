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
        "adapter()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "factory()": FunctionFragment;
        "feeEnabled(uint8)": FunctionFragment;
        "feeRate(uint8)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initData()": FunctionFragment;
        "initialize(address,address,address,address,uint16,(uint16[4],bool[4]),bytes)": FunctionFragment;
        "initialized()": FunctionFragment;
        "integratorShareBps()": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "underlying()": FunctionFragment;
        "vaultWrapperAdmin()": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adapter" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "decreaseAllowance" | "deposit" | "factory" | "feeEnabled" | "feeRate" | "increaseAllowance" | "initData" | "initialize" | "initialized" | "integratorShareBps" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "underlying" | "vaultWrapperAdmin" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deposit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeEnabled", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feeRate", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initData", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        FeeConfigStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "integratorShareBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeem", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaultWrapperAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorShareBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultWrapperAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Initialized(address,address,address,address,address,uint16)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(uint8)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized(address,address,address,address,address,uint16)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
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
export interface Initialized_uint8_EventObject {
    version: number;
}
export type Initialized_uint8_Event = TypedEvent<[
    number
], Initialized_uint8_EventObject>;
export type Initialized_uint8_EventFilter = TypedEventFilter<Initialized_uint8_Event>;
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
        adapter(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initData(overrides?: CallOverrides): Promise<[string]>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
        integratorShareBps(overrides?: CallOverrides): Promise<[number]>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<[string]>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    adapter(overrides?: CallOverrides): Promise<string>;
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initData(overrides?: CallOverrides): Promise<string>;
    initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
    integratorShareBps(overrides?: CallOverrides): Promise<number>;
    maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
    withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adapter(overrides?: CallOverrides): Promise<string>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        initData(overrides?: CallOverrides): Promise<string>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
        integratorShareBps(overrides?: CallOverrides): Promise<number>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        underlying(overrides?: CallOverrides): Promise<string>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Deposit(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(sender?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): DepositEventFilter;
        "Initialized(uint8)"(version?: null): Initialized_uint8_EventFilter;
        "Initialized(address,address,address,address,address,uint16)"(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null, factory?: null, integratorShareBps?: null): Initialized_address_address_address_address_address_uint16_EventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(sender?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, owner?: PromiseOrValue<string> | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        adapter(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initData(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
        integratorShareBps(overrides?: CallOverrides): Promise<BigNumber>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToAssets(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: PromiseOrValue<string>, subtractedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: PromiseOrValue<string>, addedValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorShareBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxDeposit(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(shares: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(assets: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
