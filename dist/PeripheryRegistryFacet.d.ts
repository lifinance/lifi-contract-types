import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PeripheryRegistryFacetInterface extends utils.Interface {
    functions: {
        "getPeripheryContract(string)": FunctionFragment;
        "registerPeripheryContract(string,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPeripheryContract" | "registerPeripheryContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPeripheryContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerPeripheryContract", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getPeripheryContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPeripheryContract", data: BytesLike): Result;
    events: {
        "PeripheryContractRegistered(string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PeripheryContractRegistered"): EventFragment;
}
export interface PeripheryContractRegisteredEventObject {
    name: string;
    contractAddress: string;
}
export type PeripheryContractRegisteredEvent = TypedEvent<[
    string,
    string
], PeripheryContractRegisteredEventObject>;
export type PeripheryContractRegisteredEventFilter = TypedEventFilter<PeripheryContractRegisteredEvent>;
export interface PeripheryRegistryFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PeripheryRegistryFacetInterface;
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
        getPeripheryContract(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        registerPeripheryContract(_name: PromiseOrValue<string>, _contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getPeripheryContract(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    registerPeripheryContract(_name: PromiseOrValue<string>, _contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getPeripheryContract(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        registerPeripheryContract(_name: PromiseOrValue<string>, _contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PeripheryContractRegistered(string,address)"(name?: null, contractAddress?: null): PeripheryContractRegisteredEventFilter;
        PeripheryContractRegistered(name?: null, contractAddress?: null): PeripheryContractRegisteredEventFilter;
    };
    estimateGas: {
        getPeripheryContract(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        registerPeripheryContract(_name: PromiseOrValue<string>, _contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getPeripheryContract(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerPeripheryContract(_name: PromiseOrValue<string>, _contractAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
