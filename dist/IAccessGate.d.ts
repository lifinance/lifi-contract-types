import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IAccessGateInterface extends utils.Interface {
    functions: {
        "isAllowed(address)": FunctionFragment;
        "isSanctioned(address)": FunctionFragment;
        "isTransferable(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isAllowed" | "isSanctioned" | "isTransferable"): FunctionFragment;
    encodeFunctionData(functionFragment: "isAllowed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isSanctioned", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTransferable", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSanctioned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTransferable", data: BytesLike): Result;
    events: {};
}
export interface IAccessGate extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAccessGateInterface;
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
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isAllowed(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSanctioned(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTransferable(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
