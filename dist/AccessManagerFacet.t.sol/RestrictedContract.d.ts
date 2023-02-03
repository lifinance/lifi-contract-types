import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface RestrictedContractInterface extends utils.Interface {
    functions: {
        "restrictedMethod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "restrictedMethod"): FunctionFragment;
    encodeFunctionData(functionFragment: "restrictedMethod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "restrictedMethod", data: BytesLike): Result;
    events: {};
}
export interface RestrictedContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RestrictedContractInterface;
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
        restrictedMethod(overrides?: CallOverrides): Promise<[boolean]>;
    };
    restrictedMethod(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        restrictedMethod(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        restrictedMethod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        restrictedMethod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
