import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface StandardizedCallFacetInterface extends utils.Interface {
    functions: {
        "standardizedBridgeCall(bytes)": FunctionFragment;
        "standardizedCall(bytes)": FunctionFragment;
        "standardizedSwapAndBridgeCall(bytes)": FunctionFragment;
        "standardizedSwapCall(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "standardizedBridgeCall" | "standardizedCall" | "standardizedSwapAndBridgeCall" | "standardizedSwapCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "standardizedBridgeCall", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "standardizedCall", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "standardizedSwapAndBridgeCall", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "standardizedSwapCall", values: [BytesLike]): string;
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
        standardizedBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        standardizedCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        standardizedSwapAndBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        standardizedSwapCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    standardizedBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    standardizedCall(callData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    standardizedSwapAndBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    standardizedSwapCall(callData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        standardizedBridgeCall(callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        standardizedCall(callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        standardizedSwapAndBridgeCall(callData: BytesLike, overrides?: CallOverrides): Promise<void>;
        standardizedSwapCall(callData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        standardizedBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        standardizedCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        standardizedSwapAndBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        standardizedSwapCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        standardizedBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        standardizedCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        standardizedSwapAndBridgeCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        standardizedSwapCall(callData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
