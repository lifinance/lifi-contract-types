import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface AnotherContractInterface extends utils.Interface {
    functions: {
        "transfer()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "transfer"): FunctionFragment;
    encodeFunctionData(functionFragment: "transfer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    events: {
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface TransferEventObject {
    from: string;
    to: string;
    amount: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface AnotherContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AnotherContractInterface;
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
        transfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    transfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        transfer(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Transfer(address,address,uint256)"(from?: null, to?: null, amount?: null): TransferEventFilter;
        Transfer(from?: null, to?: null, amount?: null): TransferEventFilter;
    };
    estimateGas: {
        transfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        transfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
