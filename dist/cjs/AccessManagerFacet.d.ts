import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface AccessManagerFacetInterface extends utils.Interface {
    functions: {
        "addressCanExecuteMethod(bytes4,address)": FunctionFragment;
        "setCanExecute(bytes4,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addressCanExecuteMethod" | "setCanExecute"): FunctionFragment;
    encodeFunctionData(functionFragment: "addressCanExecuteMethod", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setCanExecute", values: [BytesLike, string, boolean]): string;
    decodeFunctionResult(functionFragment: "addressCanExecuteMethod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCanExecute", data: BytesLike): Result;
    events: {
        "ExecutionAllowed(address,bytes4)": EventFragment;
        "ExecutionDenied(address,bytes4)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExecutionAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionDenied"): EventFragment;
}
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
        addressCanExecuteMethod(_selector: BytesLike, _executor: string, overrides?: CallOverrides): Promise<[boolean]>;
        setCanExecute(_selector: BytesLike, _executor: string, _canExecute: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addressCanExecuteMethod(_selector: BytesLike, _executor: string, overrides?: CallOverrides): Promise<boolean>;
    setCanExecute(_selector: BytesLike, _executor: string, _canExecute: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addressCanExecuteMethod(_selector: BytesLike, _executor: string, overrides?: CallOverrides): Promise<boolean>;
        setCanExecute(_selector: BytesLike, _executor: string, _canExecute: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExecutionAllowed(address,bytes4)"(account?: string | null, method?: BytesLike | null): ExecutionAllowedEventFilter;
        ExecutionAllowed(account?: string | null, method?: BytesLike | null): ExecutionAllowedEventFilter;
        "ExecutionDenied(address,bytes4)"(account?: string | null, method?: BytesLike | null): ExecutionDeniedEventFilter;
        ExecutionDenied(account?: string | null, method?: BytesLike | null): ExecutionDeniedEventFilter;
    };
    estimateGas: {
        addressCanExecuteMethod(_selector: BytesLike, _executor: string, overrides?: CallOverrides): Promise<BigNumber>;
        setCanExecute(_selector: BytesLike, _executor: string, _canExecute: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addressCanExecuteMethod(_selector: BytesLike, _executor: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCanExecute(_selector: BytesLike, _executor: string, _canExecute: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
