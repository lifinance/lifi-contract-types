import type { BaseContract, BigNumber, BigNumberish, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ILiFiVaultWrapperFactoryInterface extends utils.Interface {
    functions: {};
    events: {
        "AdapterApprovedSet(address,bool)": EventFragment;
        "DefaultSplitSet(uint16)": EventFragment;
        "FeeBoundsSet(uint8,uint16,uint16)": EventFragment;
        "GlobalPauseSet(bool,address)": EventFragment;
        "IntegratorDeployerSet(bytes32,address)": EventFragment;
        "RoleRotated(bytes32,address,address)": EventFragment;
        "UnderlyingAllowedSet(address,bool)": EventFragment;
        "WrapperDeployed(address,bytes32,address,address,address,uint256,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdapterApprovedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultSplitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FeeBoundsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalPauseSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IntegratorDeployerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRotated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnderlyingAllowedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WrapperDeployed"): EventFragment;
}
export interface AdapterApprovedSetEventObject {
    adapter: string;
    approved: boolean;
}
export type AdapterApprovedSetEvent = TypedEvent<[
    string,
    boolean
], AdapterApprovedSetEventObject>;
export type AdapterApprovedSetEventFilter = TypedEventFilter<AdapterApprovedSetEvent>;
export interface DefaultSplitSetEventObject {
    integratorBps: number;
}
export type DefaultSplitSetEvent = TypedEvent<[
    number
], DefaultSplitSetEventObject>;
export type DefaultSplitSetEventFilter = TypedEventFilter<DefaultSplitSetEvent>;
export interface FeeBoundsSetEventObject {
    feeType: number;
    minBps: number;
    maxBps: number;
}
export type FeeBoundsSetEvent = TypedEvent<[
    number,
    number,
    number
], FeeBoundsSetEventObject>;
export type FeeBoundsSetEventFilter = TypedEventFilter<FeeBoundsSetEvent>;
export interface GlobalPauseSetEventObject {
    paused: boolean;
    by: string;
}
export type GlobalPauseSetEvent = TypedEvent<[
    boolean,
    string
], GlobalPauseSetEventObject>;
export type GlobalPauseSetEventFilter = TypedEventFilter<GlobalPauseSetEvent>;
export interface IntegratorDeployerSetEventObject {
    namespace: string;
    deployer: string;
}
export type IntegratorDeployerSetEvent = TypedEvent<[
    string,
    string
], IntegratorDeployerSetEventObject>;
export type IntegratorDeployerSetEventFilter = TypedEventFilter<IntegratorDeployerSetEvent>;
export interface RoleRotatedEventObject {
    role: string;
    oldAddr: string;
    newAddr: string;
}
export type RoleRotatedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRotatedEventObject>;
export type RoleRotatedEventFilter = TypedEventFilter<RoleRotatedEvent>;
export interface UnderlyingAllowedSetEventObject {
    underlying: string;
    allowed: boolean;
}
export type UnderlyingAllowedSetEvent = TypedEvent<[
    string,
    boolean
], UnderlyingAllowedSetEventObject>;
export type UnderlyingAllowedSetEventFilter = TypedEventFilter<UnderlyingAllowedSetEvent>;
export interface WrapperDeployedEventObject {
    instance: string;
    namespace: string;
    underlying: string;
    adapter: string;
    vaultWrapperAdmin: string;
    nonce: BigNumber;
    salt: string;
}
export type WrapperDeployedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string
], WrapperDeployedEventObject>;
export type WrapperDeployedEventFilter = TypedEventFilter<WrapperDeployedEvent>;
export interface ILiFiVaultWrapperFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiFiVaultWrapperFactoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "AdapterApprovedSet(address,bool)"(adapter?: PromiseOrValue<string> | null, approved?: null): AdapterApprovedSetEventFilter;
        AdapterApprovedSet(adapter?: PromiseOrValue<string> | null, approved?: null): AdapterApprovedSetEventFilter;
        "DefaultSplitSet(uint16)"(integratorBps?: null): DefaultSplitSetEventFilter;
        DefaultSplitSet(integratorBps?: null): DefaultSplitSetEventFilter;
        "FeeBoundsSet(uint8,uint16,uint16)"(feeType?: PromiseOrValue<BigNumberish> | null, minBps?: null, maxBps?: null): FeeBoundsSetEventFilter;
        FeeBoundsSet(feeType?: PromiseOrValue<BigNumberish> | null, minBps?: null, maxBps?: null): FeeBoundsSetEventFilter;
        "GlobalPauseSet(bool,address)"(paused?: null, by?: PromiseOrValue<string> | null): GlobalPauseSetEventFilter;
        GlobalPauseSet(paused?: null, by?: PromiseOrValue<string> | null): GlobalPauseSetEventFilter;
        "IntegratorDeployerSet(bytes32,address)"(namespace?: PromiseOrValue<BytesLike> | null, deployer?: PromiseOrValue<string> | null): IntegratorDeployerSetEventFilter;
        IntegratorDeployerSet(namespace?: PromiseOrValue<BytesLike> | null, deployer?: PromiseOrValue<string> | null): IntegratorDeployerSetEventFilter;
        "RoleRotated(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, oldAddr?: null, newAddr?: null): RoleRotatedEventFilter;
        RoleRotated(role?: PromiseOrValue<BytesLike> | null, oldAddr?: null, newAddr?: null): RoleRotatedEventFilter;
        "UnderlyingAllowedSet(address,bool)"(underlying?: PromiseOrValue<string> | null, allowed?: null): UnderlyingAllowedSetEventFilter;
        UnderlyingAllowedSet(underlying?: PromiseOrValue<string> | null, allowed?: null): UnderlyingAllowedSetEventFilter;
        "WrapperDeployed(address,bytes32,address,address,address,uint256,bytes32)"(instance?: PromiseOrValue<string> | null, namespace?: PromiseOrValue<BytesLike> | null, underlying?: PromiseOrValue<string> | null, adapter?: null, vaultWrapperAdmin?: null, nonce?: null, salt?: null): WrapperDeployedEventFilter;
        WrapperDeployed(instance?: PromiseOrValue<string> | null, namespace?: PromiseOrValue<BytesLike> | null, underlying?: PromiseOrValue<string> | null, adapter?: null, vaultWrapperAdmin?: null, nonce?: null, salt?: null): WrapperDeployedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
