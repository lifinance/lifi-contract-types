import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IzumiV3FacetInterface extends utils.Interface {
    functions: {
        "swapIzumiV3(bytes,address,address,uint256)": FunctionFragment;
        "swapX2YCallback(uint256,uint256,bytes)": FunctionFragment;
        "swapY2XCallback(uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swapIzumiV3" | "swapX2YCallback" | "swapY2XCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "swapIzumiV3", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "swapX2YCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swapY2XCallback", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "swapIzumiV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapX2YCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapY2XCallback", data: BytesLike): Result;
    events: {};
}
export interface IzumiV3Facet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IzumiV3FacetInterface;
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
        swapIzumiV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapX2YCallback(amountX: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapY2XCallback(arg0: PromiseOrValue<BigNumberish>, amountY: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swapIzumiV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapX2YCallback(amountX: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapY2XCallback(arg0: PromiseOrValue<BigNumberish>, amountY: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swapIzumiV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapX2YCallback(amountX: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        swapY2XCallback(arg0: PromiseOrValue<BigNumberish>, amountY: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        swapIzumiV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapX2YCallback(amountX: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapY2XCallback(arg0: PromiseOrValue<BigNumberish>, amountY: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swapIzumiV3(swapData: PromiseOrValue<BytesLike>, from: PromiseOrValue<string>, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapX2YCallback(amountX: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapY2XCallback(arg0: PromiseOrValue<BigNumberish>, amountY: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
