import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IEcoPortal {
    type TokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type RewardStruct = {
        deadline: PromiseOrValue<BigNumberish>;
        creator: PromiseOrValue<string>;
        prover: PromiseOrValue<string>;
        nativeAmount: PromiseOrValue<BigNumberish>;
        tokens: IEcoPortal.TokenAmountStruct[];
    };
    type RewardStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        IEcoPortal.TokenAmountStructOutput[]
    ] & {
        deadline: BigNumber;
        creator: string;
        prover: string;
        nativeAmount: BigNumber;
        tokens: IEcoPortal.TokenAmountStructOutput[];
    };
}
export interface IEcoPortalInterface extends utils.Interface {
    functions: {
        "getRewardStatus(bytes32)": FunctionFragment;
        "publishAndFund(uint64,bytes,(uint64,address,address,uint256,(address,uint256)[]),bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getRewardStatus" | "publishAndFund"): FunctionFragment;
    encodeFunctionData(functionFragment: "getRewardStatus", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "publishAndFund", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        IEcoPortal.RewardStruct,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "getRewardStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishAndFund", data: BytesLike): Result;
    events: {};
}
export interface IEcoPortal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEcoPortalInterface;
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
        getRewardStatus(intentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number] & {
            status: number;
        }>;
        publishAndFund(destination: PromiseOrValue<BigNumberish>, route: PromiseOrValue<BytesLike>, reward: IEcoPortal.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getRewardStatus(intentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<number>;
    publishAndFund(destination: PromiseOrValue<BigNumberish>, route: PromiseOrValue<BytesLike>, reward: IEcoPortal.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getRewardStatus(intentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<number>;
        publishAndFund(destination: PromiseOrValue<BigNumberish>, route: PromiseOrValue<BytesLike>, reward: IEcoPortal.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string, string] & {
            intentHash: string;
            vault: string;
        }>;
    };
    filters: {};
    estimateGas: {
        getRewardStatus(intentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        publishAndFund(destination: PromiseOrValue<BigNumberish>, route: PromiseOrValue<BytesLike>, reward: IEcoPortal.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getRewardStatus(intentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishAndFund(destination: PromiseOrValue<BigNumberish>, route: PromiseOrValue<BytesLike>, reward: IEcoPortal.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
