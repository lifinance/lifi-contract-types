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
        "asset()": FunctionFragment;
        "chainLockId()": FunctionFragment;
        "feeEnabled(uint8)": FunctionFragment;
        "feeRate(uint8)": FunctionFragment;
        "initData()": FunctionFragment;
        "initialize(address,address,address,uint256,(uint16[4],bool[4]),bytes)": FunctionFragment;
        "initialized()": FunctionFragment;
        "integrator()": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "asset" | "chainLockId" | "feeEnabled" | "feeRate" | "initData" | "initialize" | "initialized" | "integrator" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainLockId", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "integrator", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainLockId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integrator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
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
        asset(overrides?: CallOverrides): Promise<[string]>;
        chainLockId(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        initData(overrides?: CallOverrides): Promise<[string]>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _integrator: PromiseOrValue<string>, _chainLockId: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
        integrator(overrides?: CallOverrides): Promise<[string]>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    asset(overrides?: CallOverrides): Promise<string>;
    chainLockId(overrides?: CallOverrides): Promise<BigNumber>;
    feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initData(overrides?: CallOverrides): Promise<string>;
    initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _integrator: PromiseOrValue<string>, _chainLockId: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
    integrator(overrides?: CallOverrides): Promise<string>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        asset(overrides?: CallOverrides): Promise<string>;
        chainLockId(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initData(overrides?: CallOverrides): Promise<string>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _integrator: PromiseOrValue<string>, _chainLockId: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
        integrator(overrides?: CallOverrides): Promise<string>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        chainLockId(overrides?: CallOverrides): Promise<BigNumber>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initData(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _integrator: PromiseOrValue<string>, _chainLockId: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
        integrator(overrides?: CallOverrides): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainLockId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeEnabled(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeRate(_feeType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _integrator: PromiseOrValue<string>, _chainLockId: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        integrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
