import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface AccessManagerFacetInterface extends utils.Interface {
    functions: {
        "addressCanExecuteMethod(bytes4,address)": FunctionFragment;
        "setCanExecute(bytes4,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressCanExecuteMethod" | "setCanExecute"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressCanExecuteMethod", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCanExecute", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "addressCanExecuteMethod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCanExecute", data: BytesLike): Result;
    events: {
        "AccessGranted(address,bytes4)": EventFragment;
        "AccessRevoked(address,bytes4)": EventFragment;
        "ExecutionAllowed(address,bytes4)": EventFragment;
        "ExecutionDenied(address,bytes4)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccessGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AccessRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionDenied"): EventFragment;
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
export interface ExecutionAllowedEventObject {
    account: string;
    method: string;
}
export type ExecutionAllowedEvent = TypedEvent<[
    string,
    string
], ExecutionAllowedEventObject>;
export type ExecutionAllowedEventFilter = TypedEventFilter<ExecutionAllowedEvent>;
export interface ExecutionDeniedEventObject {
    account: string;
    method: string;
}
export type ExecutionDeniedEvent = TypedEvent<[
    string,
    string
], ExecutionDeniedEventObject>;
export type ExecutionDeniedEventFilter = TypedEventFilter<ExecutionDeniedEvent>;
export interface AccessManagerFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccessManagerFacetInterface;
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
        addressCanExecuteMethod(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        setCanExecute(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _canExecute: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addressCanExecuteMethod(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    setCanExecute(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _canExecute: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addressCanExecuteMethod(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setCanExecute(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _canExecute: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccessGranted(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessGrantedEventFilter;
        AccessGranted(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessGrantedEventFilter;
        "AccessRevoked(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessRevokedEventFilter;
        AccessRevoked(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): AccessRevokedEventFilter;
        "ExecutionAllowed(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): ExecutionAllowedEventFilter;
        ExecutionAllowed(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): ExecutionAllowedEventFilter;
        "ExecutionDenied(address,bytes4)"(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): ExecutionDeniedEventFilter;
        ExecutionDenied(account?: PromiseOrValue<string> | null, method?: PromiseOrValue<BytesLike> | null): ExecutionDeniedEventFilter;
    };
    estimateGas: {
        addressCanExecuteMethod(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setCanExecute(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _canExecute: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addressCanExecuteMethod(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCanExecute(_selector: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _canExecute: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
