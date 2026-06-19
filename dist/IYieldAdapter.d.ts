import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IYieldAdapterInterface extends utils.Interface {
    functions: {
        "resolveAsset(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "resolveAsset"): FunctionFragment;
    encodeFunctionData(functionFragment: "resolveAsset", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "resolveAsset", data: BytesLike): Result;
    events: {};
}
export interface IYieldAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IYieldAdapterInterface;
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
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            asset: string;
        }>;
    };
    resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
