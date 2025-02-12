import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IChainflipVaultInterface extends utils.Interface {
    functions: {
        "xSwapNative(uint32,bytes,uint32,bytes)": FunctionFragment;
        "xSwapToken(uint32,bytes,uint32,address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "xSwapNative" | "xSwapToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "xSwapNative", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "xSwapToken", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "xSwapNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "xSwapToken", data: BytesLike): Result;
    events: {};
}
export interface IChainflipVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IChainflipVaultInterface;
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
        xSwapNative(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        xSwapToken(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, srcToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    xSwapNative(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    xSwapToken(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, srcToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        xSwapNative(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        xSwapToken(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, srcToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        xSwapNative(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        xSwapToken(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, srcToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        xSwapNative(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        xSwapToken(dstChain: PromiseOrValue<BigNumberish>, dstAddress: PromiseOrValue<BytesLike>, dstToken: PromiseOrValue<BigNumberish>, srcToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, cfParameters: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
