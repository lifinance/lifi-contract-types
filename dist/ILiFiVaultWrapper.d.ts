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
export interface ILiFiVaultWrapperInterface extends utils.Interface {
    functions: {
        "initialize(address,address,address,uint16[4],(uint16[4]),(address,uint16)[],bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initialize"): FunctionFragment;
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
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {
        "AssetFeeCharged(uint8,uint256,uint256)": EventFragment;
        "DilutionFeeAccrued(uint8,uint256,uint256)": EventFragment;
        "FeeConfigUpdated(uint8,uint16)": EventFragment;
        "FeePoolDistributed(address,uint256,uint256)": EventFragment;
        "IntegratorPayoutRedirected(address,address,uint256)": EventFragment;
        "PauseSet(bool,address)": EventFragment;
        "ReceiversSet(tuple[])": EventFragment;
        "VaultWrapperConfigured(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DilutionFeeAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeePoolDistributed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntegratorPayoutRedirected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiversSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VaultWrapperConfigured"): EventFragment;
}
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
export interface IntegratorPayoutRedirectedEventObject {
    receiver: string;
    token: string;
    amount: BigNumber;
}
export type IntegratorPayoutRedirectedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], IntegratorPayoutRedirectedEventObject>;
export type IntegratorPayoutRedirectedEventFilter = TypedEventFilter<IntegratorPayoutRedirectedEvent>;
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
export interface ILiFiVaultWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiFiVaultWrapperInterface;
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
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetFeeCharged(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        AssetFeeCharged(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        "DilutionFeeAccrued(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        DilutionFeeAccrued(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        "FeeConfigUpdated(uint8,uint16)"(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null): FeeConfigUpdatedEventFilter;
        FeeConfigUpdated(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null): FeeConfigUpdatedEventFilter;
        "FeePoolDistributed(address,uint256,uint256)"(token?: PromiseOrValue<string> | null, lifiAmount?: null, integratorAmount?: null): FeePoolDistributedEventFilter;
        FeePoolDistributed(token?: PromiseOrValue<string> | null, lifiAmount?: null, integratorAmount?: null): FeePoolDistributedEventFilter;
        "IntegratorPayoutRedirected(address,address,uint256)"(receiver?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): IntegratorPayoutRedirectedEventFilter;
        IntegratorPayoutRedirected(receiver?: PromiseOrValue<string> | null, token?: PromiseOrValue<string> | null, amount?: null): IntegratorPayoutRedirectedEventFilter;
        "PauseSet(bool,address)"(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        PauseSet(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        "ReceiversSet(tuple[])"(receivers?: null): ReceiversSetEventFilter;
        ReceiversSet(receivers?: null): ReceiversSetEventFilter;
        "VaultWrapperConfigured(address,address,address,address)"(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null): VaultWrapperConfiguredEventFilter;
        VaultWrapperConfigured(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null): VaultWrapperConfiguredEventFilter;
    };
    estimateGas: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _receivers: FeeReceiverStruct[], _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
