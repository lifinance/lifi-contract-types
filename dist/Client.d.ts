import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ClientInterface extends utils.Interface {
    functions: {
        "EVM_EXTRA_ARGS_V1_TAG()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "EVM_EXTRA_ARGS_V1_TAG"): FunctionFragment;
    encodeFunctionData(functionFragment: "EVM_EXTRA_ARGS_V1_TAG", values?: undefined): string;
    decodeFunctionResult(functionFragment: "EVM_EXTRA_ARGS_V1_TAG", data: BytesLike): Result;
    events: {};
}
export interface Client extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ClientInterface;
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
        EVM_EXTRA_ARGS_V1_TAG(overrides?: CallOverrides): Promise<[string]>;
    };
    EVM_EXTRA_ARGS_V1_TAG(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        EVM_EXTRA_ARGS_V1_TAG(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        EVM_EXTRA_ARGS_V1_TAG(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        EVM_EXTRA_ARGS_V1_TAG(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
