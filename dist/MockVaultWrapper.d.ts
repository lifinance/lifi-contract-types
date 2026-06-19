import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface MockVaultWrapperInterface extends utils.Interface {
    functions: {
        "adapter()": FunctionFragment;
        "asset()": FunctionFragment;
        "feeEnabled(uint8)": FunctionFragment;
        "feeRate(uint8)": FunctionFragment;
        "initData()": FunctionFragment;
        "initialize(address,address,address,address,uint16,(uint16[4],bool[4]),bytes)": FunctionFragment;
        "initialized()": FunctionFragment;
        "integratorShareBps()": FunctionFragment;
        "underlying()": FunctionFragment;
        "vaultWrapperAdmin()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adapter" | "asset" | "feeEnabled" | "feeRate" | "initData" | "initialize" | "initialized" | "integratorShareBps" | "underlying" | "vaultWrapperAdmin"): FunctionFragment;
    encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeEnabled", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "feeRate", values: [PromiseOrValue<BigNumberish>]): string;
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
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaultWrapperAdmin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integratorShareBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultWrapperAdmin", data: BytesLike): Result;
    events: {};
}
export interface MockVaultWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockVaultWrapperInterface;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        initData(overrides?: CallOverrides): Promise<[string]>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
        integratorShareBps(overrides?: CallOverrides): Promise<[number]>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<[string]>;
    };
    adapter(overrides?: CallOverrides): Promise<string>;
    asset(overrides?: CallOverrides): Promise<string>;
    feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initData(overrides?: CallOverrides): Promise<string>;
    initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
    integratorShareBps(overrides?: CallOverrides): Promise<number>;
    underlying(overrides?: CallOverrides): Promise<string>;
    vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        adapter(overrides?: CallOverrides): Promise<string>;
        asset(overrides?: CallOverrides): Promise<string>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initData(overrides?: CallOverrides): Promise<string>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
        integratorShareBps(overrides?: CallOverrides): Promise<number>;
        underlying(overrides?: CallOverrides): Promise<string>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        adapter(overrides?: CallOverrides): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initData(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
        integratorShareBps(overrides?: CallOverrides): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        adapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integratorShareBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vaultWrapperAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
