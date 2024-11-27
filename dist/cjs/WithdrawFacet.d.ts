import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface WithdrawFacetInterface extends utils.Interface {
    functions: {
        "executeCallAndWithdraw(address,bytes,address,address,uint256)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeCallAndWithdraw" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeCallAndWithdraw", values: [string, BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "executeCallAndWithdraw", data: BytesLike): Result;
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
export type LogWithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LogWithdrawEventObject>;
export type LogWithdrawEventFilter = TypedEventFilter<LogWithdrawEvent>;
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
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LogWithdraw(address,address,uint256)"(_assetAddress?: string | null, _to?: null, amount?: null): LogWithdrawEventFilter;
        LogWithdraw(_assetAddress?: string | null, _to?: null, amount?: null): LogWithdrawEventFilter;
    };
    estimateGas: {
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(_assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
