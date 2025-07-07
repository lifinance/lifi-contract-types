import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface RegisterIntentLibInterface extends utils.Interface {
    functions: {
        "getLocksHash(uint256[2][])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getLocksHash"): FunctionFragment;
    encodeFunctionData(functionFragment: "getLocksHash", values: [[PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][]]): string;
    decodeFunctionResult(functionFragment: "getLocksHash", data: BytesLike): Result;
    events: {};
}
export interface RegisterIntentLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RegisterIntentLibInterface;
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
        getLocksHash(idsAndAmounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ][], overrides?: CallOverrides): Promise<[string]>;
    };
    getLocksHash(idsAndAmounts: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ][], overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getLocksHash(idsAndAmounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ][], overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getLocksHash(idsAndAmounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ][], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getLocksHash(idsAndAmounts: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ][], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
