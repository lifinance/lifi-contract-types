import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PatcherInterface extends utils.Interface {
    functions: {
        "depositAndExecuteWithDynamicPatches(address,address,bytes,address,uint256,bytes,uint256[],bool)": FunctionFragment;
        "depositAndExecuteWithMultiplePatches(address,address[],bytes[],address,uint256,bytes,uint256[][],bool)": FunctionFragment;
        "executeWithDynamicPatches(address,bytes,address,uint256,bytes,uint256[],bool)": FunctionFragment;
        "executeWithMultiplePatches(address[],bytes[],address,uint256,bytes,uint256[][],bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositAndExecuteWithDynamicPatches" | "depositAndExecuteWithMultiplePatches" | "executeWithDynamicPatches" | "executeWithMultiplePatches"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositAndExecuteWithDynamicPatches", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "depositAndExecuteWithMultiplePatches", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[][],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "executeWithDynamicPatches", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "executeWithMultiplePatches", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>[][],
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "depositAndExecuteWithDynamicPatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAndExecuteWithMultiplePatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithDynamicPatches", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithMultiplePatches", data: BytesLike): Result;
    events: {};
}
export interface Patcher extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PatcherInterface;
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
        depositAndExecuteWithDynamicPatches(tokenAddress: PromiseOrValue<string>, valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositAndExecuteWithMultiplePatches(tokenAddress: PromiseOrValue<string>, valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    depositAndExecuteWithDynamicPatches(tokenAddress: PromiseOrValue<string>, valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositAndExecuteWithMultiplePatches(tokenAddress: PromiseOrValue<string>, valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositAndExecuteWithDynamicPatches(tokenAddress: PromiseOrValue<string>, valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        depositAndExecuteWithMultiplePatches(tokenAddress: PromiseOrValue<string>, valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            returnData: string;
        }>;
    };
    filters: {};
    estimateGas: {
        depositAndExecuteWithDynamicPatches(tokenAddress: PromiseOrValue<string>, valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositAndExecuteWithMultiplePatches(tokenAddress: PromiseOrValue<string>, valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositAndExecuteWithDynamicPatches(tokenAddress: PromiseOrValue<string>, valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositAndExecuteWithMultiplePatches(tokenAddress: PromiseOrValue<string>, valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
