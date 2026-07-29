import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ISupersetSpokePoolManagerInterface extends utils.Interface {
    functions: {
        "multiHopSwap(bytes,uint256,uint256,address,address,uint256,bytes)": FunctionFragment;
        "multiHopSwapWithOutputChain(bytes,uint256,uint256,address,address,address,uint256,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "multiHopSwap" | "multiHopSwapWithOutputChain"): FunctionFragment;
    encodeFunctionData(functionFragment: "multiHopSwap", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "multiHopSwapWithOutputChain", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "multiHopSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiHopSwapWithOutputChain", data: BytesLike): Result;
    events: {};
}
export interface ISupersetSpokePoolManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISupersetSpokePoolManagerInterface;
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
        multiHopSwap(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        multiHopSwapWithOutputChain(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _toEid: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    multiHopSwap(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    multiHopSwapWithOutputChain(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _toEid: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        multiHopSwap(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        multiHopSwapWithOutputChain(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _toEid: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        multiHopSwap(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        multiHopSwapWithOutputChain(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _toEid: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        multiHopSwap(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        multiHopSwapWithOutputChain(_path: PromiseOrValue<BytesLike>, _amountIn: PromiseOrValue<BigNumberish>, _amountOutMin: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, _fallbackEoA: PromiseOrValue<string>, _deadline: PromiseOrValue<BigNumberish>, _toEid: PromiseOrValue<BigNumberish>, _options: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
