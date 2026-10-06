import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IM0OrderBook {
    type OrderParamsStruct = {
        destChainId: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        tokenIn: PromiseOrValue<string>;
        tokenOut: PromiseOrValue<BytesLike>;
        amountIn: PromiseOrValue<BigNumberish>;
        amountOut: PromiseOrValue<BigNumberish>;
        recipient: PromiseOrValue<BytesLike>;
        solver: PromiseOrValue<BytesLike>;
        sender: PromiseOrValue<string>;
    };
    type OrderParamsStructOutput = [
        number,
        number,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string
    ] & {
        destChainId: number;
        fillDeadline: number;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
        recipient: string;
        solver: string;
        sender: string;
    };
}
export interface IM0OrderBookInterface extends utils.Interface {
    functions: {
        "isDestinationSupported(uint32)": FunctionFragment;
        "openOrder((uint32,uint32,address,bytes32,uint128,uint128,bytes32,bytes32,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isDestinationSupported" | "openOrder"): FunctionFragment;
    encodeFunctionData(functionFragment: "isDestinationSupported", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "openOrder", values: [IM0OrderBook.OrderParamsStruct]): string;
    decodeFunctionResult(functionFragment: "isDestinationSupported", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openOrder", data: BytesLike): Result;
    events: {};
}
export interface IM0OrderBook extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IM0OrderBookInterface;
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
        isDestinationSupported(destChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        openOrder(orderParams: IM0OrderBook.OrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    isDestinationSupported(destChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    openOrder(orderParams: IM0OrderBook.OrderParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isDestinationSupported(destChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        openOrder(orderParams: IM0OrderBook.OrderParamsStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        isDestinationSupported(destChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        openOrder(orderParams: IM0OrderBook.OrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isDestinationSupported(destChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openOrder(orderParams: IM0OrderBook.OrderParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
