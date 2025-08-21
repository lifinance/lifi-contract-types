import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface VelodromeV2FacetInterface extends utils.Interface {
    functions: {
        "swapVelodromeV2(bytes,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swapVelodromeV2"): FunctionFragment;
    encodeFunctionData(functionFragment: "swapVelodromeV2", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "swapVelodromeV2", data: BytesLike): Result;
    events: {};
}
export interface VelodromeV2Facet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VelodromeV2FacetInterface;
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
        swapVelodromeV2(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swapVelodromeV2(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapVelodromeV2(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapVelodromeV2(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapVelodromeV2(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
