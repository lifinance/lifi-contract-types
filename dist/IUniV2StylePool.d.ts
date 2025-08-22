import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IUniV2StylePoolInterface extends utils.Interface {
    functions: {
        "getReserves()": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getReserves" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IUniV2StylePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniV2StylePoolInterface;
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
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            reserve0: BigNumber;
            reserve1: BigNumber;
            blockTimestampLast: number;
        }>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number
    ] & {
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: number;
    }>;
    swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            reserve0: BigNumber;
            reserve1: BigNumber;
            blockTimestampLast: number;
        }>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
