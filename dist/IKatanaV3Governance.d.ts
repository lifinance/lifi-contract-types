import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IKatanaV3GovernanceInterface extends utils.Interface {
    functions: {
        "getRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "getRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getRouter", data: BytesLike): Result;
    events: {};
}
export interface IKatanaV3Governance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKatanaV3GovernanceInterface;
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
        getRouter(overrides?: CallOverrides): Promise<[string]>;
    };
    getRouter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getRouter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
