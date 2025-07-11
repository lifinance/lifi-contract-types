import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface AllowListMigratorFacetInterface extends utils.Interface {
    functions: {
        "isMigrated()": FunctionFragment;
        "migrate(address[],bytes4[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isMigrated" | "migrate"): FunctionFragment;
    encodeFunctionData(functionFragment: "isMigrated", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrate", values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]]): string;
    decodeFunctionResult(functionFragment: "isMigrated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    events: {
        "AllowListConfigMigrated(address[],bytes4[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllowListConfigMigrated"): EventFragment;
}
export interface AllowListConfigMigratedEventObject {
    contracts: string[];
    selectors: string[];
}
export declare type AllowListConfigMigratedEvent = TypedEvent<[
    string[],
    string[]
], AllowListConfigMigratedEventObject>;
export declare type AllowListConfigMigratedEventFilter = TypedEventFilter<AllowListConfigMigratedEvent>;
export interface AllowListMigratorFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AllowListMigratorFacetInterface;
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
        isMigrated(overrides?: CallOverrides): Promise<[boolean]>;
        migrate(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    isMigrated(overrides?: CallOverrides): Promise<boolean>;
    migrate(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isMigrated(overrides?: CallOverrides): Promise<boolean>;
        migrate(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AllowListConfigMigrated(address[],bytes4[])"(contracts?: null, selectors?: null): AllowListConfigMigratedEventFilter;
        AllowListConfigMigrated(contracts?: null, selectors?: null): AllowListConfigMigratedEventFilter;
    };
    estimateGas: {
        isMigrated(overrides?: CallOverrides): Promise<BigNumber>;
        migrate(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isMigrated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(_contracts: PromiseOrValue<string>[], _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
