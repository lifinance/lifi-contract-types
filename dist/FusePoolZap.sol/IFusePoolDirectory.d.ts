import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IFusePoolDirectoryInterface extends utils.Interface {
    functions: {
        "poolExists(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "poolExists"): FunctionFragment;
    encodeFunctionData(functionFragment: "poolExists", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "poolExists", data: BytesLike): Result;
    events: {};
}
export interface IFusePoolDirectory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFusePoolDirectoryInterface;
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
        poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        poolExists(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
