import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IVelodromeV2PoolFactoryInterface extends utils.Interface {
    functions: {
        "getFee(address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "getFee", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
    events: {};
}
export interface IVelodromeV2PoolFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVelodromeV2PoolFactoryInterface;
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
        getFee(_pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getFee(_pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getFee(_pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getFee(_pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getFee(_pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
