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
export interface ILiFiVaultWrapperInterface extends utils.Interface {
    functions: {
        "initialize(address,address,address,uint16,(uint16[4],bool[4]),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initialize"): FunctionFragment;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        FeeConfigStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {};
}
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
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(_underlying: PromiseOrValue<string>, _adapter: PromiseOrValue<string>, _vaultWrapperAdmin: PromiseOrValue<string>, _integratorShareBps: PromiseOrValue<BigNumberish>, _fees: FeeConfigStruct, _initData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
