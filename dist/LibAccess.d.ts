import type { BaseContract, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface LibAccessInterface extends utils.Interface {
    functions: {};
    events: {
        "AccessGranted(address,bytes4)": EventFragment;
        "AccessRevoked(address,bytes4)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccessGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccessRevoked"): EventFragment;
}
export interface AccessGrantedEventObject {
    account: string;
    method: string;
}
export type AccessGrantedEvent = TypedEvent<[
    string,
    string
], AccessGrantedEventObject>;
export type AccessGrantedEventFilter = TypedEventFilter<AccessGrantedEvent>;
export interface AccessRevokedEventObject {
    account: string;
    method: string;
}
export type AccessRevokedEvent = TypedEvent<[
    string,
    string
], AccessRevokedEventObject>;
export type AccessRevokedEventFilter = TypedEventFilter<AccessRevokedEvent>;
export interface LibAccess extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LibAccessInterface;
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
        "AccessGranted(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessGrantedEventFilter;
        AccessGranted(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessGrantedEventFilter;
        "AccessRevoked(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessRevokedEventFilter;
        AccessRevoked(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessRevokedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
