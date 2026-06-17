import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ERC4626AdapterInterface extends utils.Interface {
    functions: {
        "probe(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "probe"): FunctionFragment;
    encodeFunctionData(functionFragment: "probe", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "probe", data: BytesLike): Result;
    events: {};
}
export interface ERC4626Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC4626AdapterInterface;
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
        probe(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            asset: string;
        }>;
    };
    probe(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        probe(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        probe(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        probe(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
