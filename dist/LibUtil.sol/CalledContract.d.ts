import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CalledContractInterface extends utils.Interface {
    functions: {
        "callMe()": FunctionFragment;
        "callMeAlso()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "callMe" | "callMeAlso"): FunctionFragment;
    encodeFunctionData(functionFragment: "callMe", values?: undefined): string;
    encodeFunctionData(functionFragment: "callMeAlso", values?: undefined): string;
    decodeFunctionResult(functionFragment: "callMe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callMeAlso", data: BytesLike): Result;
    events: {};
}
export interface CalledContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CalledContractInterface;
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
        callMe(overrides?: CallOverrides): Promise<[void]>;
        callMeAlso(overrides?: CallOverrides): Promise<[void]>;
    };
    callMe(overrides?: CallOverrides): Promise<void>;
    callMeAlso(overrides?: CallOverrides): Promise<void>;
    callStatic: {
        callMe(overrides?: CallOverrides): Promise<void>;
        callMeAlso(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        callMe(overrides?: CallOverrides): Promise<BigNumber>;
        callMeAlso(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        callMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callMeAlso(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
