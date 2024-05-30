import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface StandardizedCallFacetInterface extends utils.Interface {
    functions: {
        "standardizedBridgeCall(bytes)": FunctionFragment;
        "standardizedCall(bytes)": FunctionFragment;
        "standardizedSwapAndBridgeCall(bytes)": FunctionFragment;
        "standardizedSwapCall(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "standardizedBridgeCall" | "standardizedCall" | "standardizedSwapAndBridgeCall" | "standardizedSwapCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "standardizedBridgeCall", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "standardizedCall", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "standardizedSwapAndBridgeCall", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "standardizedSwapCall", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "standardizedBridgeCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "standardizedCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "standardizedSwapAndBridgeCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "standardizedSwapCall", data: BytesLike): Result;
    events: {};
}
export interface StandardizedCallFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StandardizedCallFacetInterface;
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
        standardizedBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        standardizedCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        standardizedSwapAndBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        standardizedSwapCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    standardizedBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    standardizedCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    standardizedSwapAndBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    standardizedSwapCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        standardizedBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        standardizedCall(callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        standardizedSwapAndBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        standardizedSwapCall(callData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        standardizedBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        standardizedCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        standardizedSwapAndBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        standardizedSwapCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        standardizedBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        standardizedCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        standardizedSwapAndBridgeCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        standardizedSwapCall(callData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
