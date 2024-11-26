import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IXDaiBridgeL2Interface extends utils.Interface {
    functions: {
        "relayTokens(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "relayTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "relayTokens", values: [string]): string;
    decodeFunctionResult(functionFragment: "relayTokens", data: BytesLike): Result;
    events: {};
}
export interface IXDaiBridgeL2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IXDaiBridgeL2Interface;
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
        relayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    relayTokens(receiver: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        relayTokens(receiver: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        relayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        relayTokens(receiver: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
