import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface SwapInterface extends utils.Interface {
    functions: {
        "swap(uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface Swap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapInterface;
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
        swap(tokenIndexFrom: PromiseOrValue<BigNumberish>, tokenIndexTo: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, minDy: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swap(tokenIndexFrom: PromiseOrValue<BigNumberish>, tokenIndexTo: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, minDy: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(tokenIndexFrom: PromiseOrValue<BigNumberish>, tokenIndexTo: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, minDy: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        swap(tokenIndexFrom: PromiseOrValue<BigNumberish>, tokenIndexTo: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, minDy: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(tokenIndexFrom: PromiseOrValue<BigNumberish>, tokenIndexTo: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, minDy: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
