import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PatcherInterface extends utils.Interface {
    functions: {
        "executeWithDynamicPatches(address,bytes,address,uint256,bytes,uint256[],bool)": FunctionFragment;
        "executeWithMultiplePatches(address[],bytes[],address,uint256,bytes,uint256[][],bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeWithDynamicPatches" | "executeWithMultiplePatches"): FunctionFragment;
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
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
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
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        executeWithDynamicPatches(valueSource: PromiseOrValue<string>, valueGetter: PromiseOrValue<BytesLike>, finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsets: PromiseOrValue<BigNumberish>[], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeWithMultiplePatches(valueSources: PromiseOrValue<string>[], valueGetters: PromiseOrValue<BytesLike>[], finalTarget: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, offsetGroups: PromiseOrValue<BigNumberish>[][], delegateCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
