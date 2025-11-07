import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface KatanaV3FacetInterface extends utils.Interface {
    functions: {
        "swapKatanaV3(bytes,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swapKatanaV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "swapKatanaV3", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "swapKatanaV3", data: BytesLike): Result;
    events: {};
}
export interface KatanaV3Facet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KatanaV3FacetInterface;
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
        swapKatanaV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swapKatanaV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapKatanaV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapKatanaV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapKatanaV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
