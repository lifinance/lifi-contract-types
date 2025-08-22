import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface CurveFacetInterface extends utils.Interface {
    functions: {
        "swapCurve(bytes,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swapCurve"): FunctionFragment;
    encodeFunctionData(functionFragment: "swapCurve", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "swapCurve", data: BytesLike): Result;
    events: {};
}
export interface CurveFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveFacetInterface;
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
        swapCurve(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swapCurve(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapCurve(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapCurve(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapCurve(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
