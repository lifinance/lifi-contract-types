import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface TransferEventEmitterInterface extends utils.Interface {
    functions: {
        "emitTransferEvent(address,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emitTransferEvent"): FunctionFragment;
    encodeFunctionData(functionFragment: "emitTransferEvent", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "emitTransferEvent", data: BytesLike): Result;
    events: {
        "TokensTransferred(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensTransferred"): EventFragment;
}
export interface TokensTransferredEventObject {
    token: string;
    from: string;
    to: string;
    amount: BigNumber;
}
export declare type TokensTransferredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
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
        emitTransferEvent(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emitTransferEvent(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emitTransferEvent(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensTransferred(address,address,address,uint256)"(token?: null, from?: null, to?: null, amount?: null): TokensTransferredEventFilter;
        TokensTransferred(token?: null, from?: null, to?: null, amount?: null): TokensTransferredEventFilter;
    };
    estimateGas: {
        emitTransferEvent(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emitTransferEvent(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
