import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface TransferEventEmitterInterface extends utils.Interface {
    functions: {
        "emitTransferEvent()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emitTransferEvent"): FunctionFragment;
    encodeFunctionData(functionFragment: "emitTransferEvent", values?: undefined): string;
    decodeFunctionResult(functionFragment: "emitTransferEvent", data: BytesLike): Result;
    events: {
        "TokensTransferred()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensTransferred"): EventFragment;
}
export interface TokensTransferredEventObject {
}
export declare type TokensTransferredEvent = TypedEvent<[
], TokensTransferredEventObject>;
export declare type TokensTransferredEventFilter = TypedEventFilter<TokensTransferredEvent>;
export interface TransferEventEmitter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TransferEventEmitterInterface;
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
        emitTransferEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emitTransferEvent(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emitTransferEvent(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensTransferred()"(): TokensTransferredEventFilter;
        TokensTransferred(): TokensTransferredEventFilter;
    };
    estimateGas: {
        emitTransferEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emitTransferEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
