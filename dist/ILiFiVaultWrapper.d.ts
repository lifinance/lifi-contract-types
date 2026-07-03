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
export interface ILiFiVaultWrapperInterface extends utils.Interface {
    functions: {
        "initialize(address,address,address,uint16[4],(uint16[4],bool[4]),bytes)": FunctionFragment;
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
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {
        "AssetFeeCharged(uint8,uint256,uint256)": EventFragment;
        "DilutionFeeAccrued(uint8,uint256,uint256)": EventFragment;
        "FeeConfigUpdated(uint8,uint16,bool)": EventFragment;
        "PauseSet(bool,address)": EventFragment;
        "VaultWrapperConfigured(address,address,address,address,address,uint16[4])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AssetFeeCharged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DilutionFeeAccrued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeConfigUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauseSet"): EventFragment;
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
    enabled: boolean;
}
export type FeeConfigUpdatedEvent = TypedEvent<[
    number,
    number,
    boolean
], FeeConfigUpdatedEventObject>;
export type FeeConfigUpdatedEventFilter = TypedEventFilter<FeeConfigUpdatedEvent>;
export interface PauseSetEventObject {
    paused: boolean;
    by: string;
}
export type PauseSetEvent = TypedEvent<[boolean, string], PauseSetEventObject>;
export type PauseSetEventFilter = TypedEventFilter<PauseSetEvent>;
export interface VaultWrapperConfiguredEventObject {
    asset: string;
    underlying: string;
    adapter: string;
    vaultWrapperAdmin: string;
    factory: string;
    integratorShareBps: [number, number, number, number];
}
export type VaultWrapperConfiguredEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    [number, number, number, number]
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
        ], _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AssetFeeCharged(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        AssetFeeCharged(feeType?: PromiseOrValue<BigNumberish> | null, feeAssets?: null, integratorAssets?: null): AssetFeeChargedEventFilter;
        "DilutionFeeAccrued(uint8,uint256,uint256)"(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        DilutionFeeAccrued(feeType?: PromiseOrValue<BigNumberish> | null, feeShares?: null, integratorShares?: null): DilutionFeeAccruedEventFilter;
        "FeeConfigUpdated(uint8,uint16,bool)"(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null, enabled?: null): FeeConfigUpdatedEventFilter;
        FeeConfigUpdated(feeType?: PromiseOrValue<BigNumberish> | null, newRateBps?: null, enabled?: null): FeeConfigUpdatedEventFilter;
        "PauseSet(bool,address)"(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        PauseSet(paused?: null, by?: PromiseOrValue<string> | null): PauseSetEventFilter;
        "VaultWrapperConfigured(address,address,address,address,address,uint16[4])"(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null, factory?: null, integratorShareBps?: null): VaultWrapperConfiguredEventFilter;
        VaultWrapperConfigured(asset?: PromiseOrValue<string> | null, underlying?: PromiseOrValue<string> | null, adapter?: PromiseOrValue<string> | null, vaultWrapperAdmin?: null, factory?: null, integratorShareBps?: null): VaultWrapperConfiguredEventFilter;
    };
    estimateGas: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
