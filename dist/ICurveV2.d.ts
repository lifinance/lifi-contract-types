import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ICurveV2Interface extends utils.Interface {
    functions: {
        "exchange(int128,int128,uint256,uint256,address)": FunctionFragment;
        "exchange_received(int128,int128,uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exchange" | "exchange_received"): FunctionFragment;
    encodeFunctionData(functionFragment: "exchange", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "exchange_received", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_received", data: BytesLike): Result;
    events: {};
}
export interface ICurveV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurveV2Interface;
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
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchange_received(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchange_received(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        exchange_received(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchange_received(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exchange(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchange_received(i: PromiseOrValue<BigNumberish>, j: PromiseOrValue<BigNumberish>, dx: PromiseOrValue<BigNumberish>, min_dy: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
