import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IPoolInterface extends utils.Interface {
    functions: {
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {};
}
export interface IPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPoolInterface;
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
        token(overrides?: CallOverrides): Promise<[string] & {
            tokenAddress: string;
        }>;
    };
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
