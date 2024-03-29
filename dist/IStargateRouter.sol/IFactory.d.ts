import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IFactoryInterface extends utils.Interface {
    functions: {
        "getPool(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPool", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    events: {};
}
export interface IFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFactoryInterface;
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
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
    };
    getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPool(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
