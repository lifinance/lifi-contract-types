import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface WithdrawFacetInterface extends utils.Interface {
    functions: {
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "LogWithdraw(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LogWithdraw"): EventFragment;
}
export interface LogWithdrawEventObject {
    _assetAddress: string;
    _to: string;
    amount: BigNumber;
}
export declare type LogWithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LogWithdrawEventObject>;
export declare type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;
export interface WithdrawFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithdrawFacetInterface;
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
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogWithdraw(address,address,uint256)"(_assetAddress?: string | null, _to?: null, amount?: null): LogWithdrawEventFilter;
        LogWithdraw(_assetAddress?: string | null, _to?: null, amount?: null): LogWithdrawEventFilter;
    };
    estimateGas: {
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
