import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface PatcherInterface extends utils.Interface {
    functions: {
        "patchWithAvailableAmounts(uint256[],address,bytes)": FunctionFragment;
        "patchWithAvailableAmountsAndForward(uint256[],address,address,bytes,address)": FunctionFragment;
        "replaceUint256At(bytes,uint256,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "patchWithAvailableAmounts" | "patchWithAvailableAmountsAndForward" | "replaceUint256At"): FunctionFragment;
    encodeFunctionData(functionFragment: "patchWithAvailableAmounts", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "patchWithAvailableAmountsAndForward", values: [
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "replaceUint256At", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "patchWithAvailableAmounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "patchWithAvailableAmountsAndForward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceUint256At", data: BytesLike): Result;
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
        patchWithAvailableAmounts(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        patchWithAvailableAmountsAndForward(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        replaceUint256At(bs: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, newData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[void]>;
    };
    patchWithAvailableAmounts(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    patchWithAvailableAmountsAndForward(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    replaceUint256At(bs: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, newData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        patchWithAvailableAmounts(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        patchWithAvailableAmountsAndForward(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        replaceUint256At(bs: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, newData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        patchWithAvailableAmounts(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        patchWithAvailableAmountsAndForward(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        replaceUint256At(bs: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, newData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        patchWithAvailableAmounts(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        patchWithAvailableAmountsAndForward(offsets: PromiseOrValue<BigNumberish>[], inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, bs: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        replaceUint256At(bs: PromiseOrValue<BytesLike>, index: PromiseOrValue<BigNumberish>, newData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
