import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface NonStandardSelectorsRegistryFacetInterface extends utils.Interface {
    functions: {
        "batchSetNonStandardSelectors(bytes4[],bool[])": FunctionFragment;
        "isNonStandardSelector(bytes4)": FunctionFragment;
        "setNonStandardSelector(bytes4,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "batchSetNonStandardSelectors" | "isNonStandardSelector" | "setNonStandardSelector"): FunctionFragment;
    encodeFunctionData(functionFragment: "batchSetNonStandardSelectors", values: [PromiseOrValue<BytesLike>[], PromiseOrValue<boolean>[]]): string;
    encodeFunctionData(functionFragment: "isNonStandardSelector", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setNonStandardSelector", values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "batchSetNonStandardSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isNonStandardSelector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonStandardSelector", data: BytesLike): Result;
    events: {};
}
export interface NonStandardSelectorsRegistryFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NonStandardSelectorsRegistryFacetInterface;
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
        batchSetNonStandardSelectors(_selectors: PromiseOrValue<BytesLike>[], _isNonStandardSelectors: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isNonStandardSelector(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        setNonStandardSelector(_selector: PromiseOrValue<BytesLike>, _isNonStandardSelector: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    batchSetNonStandardSelectors(_selectors: PromiseOrValue<BytesLike>[], _isNonStandardSelectors: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isNonStandardSelector(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    setNonStandardSelector(_selector: PromiseOrValue<BytesLike>, _isNonStandardSelector: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        batchSetNonStandardSelectors(_selectors: PromiseOrValue<BytesLike>[], _isNonStandardSelectors: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        isNonStandardSelector(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        setNonStandardSelector(_selector: PromiseOrValue<BytesLike>, _isNonStandardSelector: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        batchSetNonStandardSelectors(_selectors: PromiseOrValue<BytesLike>[], _isNonStandardSelectors: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isNonStandardSelector(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setNonStandardSelector(_selector: PromiseOrValue<BytesLike>, _isNonStandardSelector: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        batchSetNonStandardSelectors(_selectors: PromiseOrValue<BytesLike>[], _isNonStandardSelectors: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isNonStandardSelector(_selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setNonStandardSelector(_selector: PromiseOrValue<BytesLike>, _isNonStandardSelector: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
