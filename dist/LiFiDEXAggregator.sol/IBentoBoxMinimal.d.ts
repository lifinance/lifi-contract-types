import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export type StrategyDataStruct = {
    strategyStartDate: PromiseOrValue<BigNumberish>;
    targetPercentage: PromiseOrValue<BigNumberish>;
    balance: PromiseOrValue<BigNumberish>;
};
export type StrategyDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    strategyStartDate: BigNumber;
    targetPercentage: BigNumber;
    balance: BigNumber;
};
export type RebaseStruct = {
    elastic: PromiseOrValue<BigNumberish>;
    base: PromiseOrValue<BigNumberish>;
};
export type RebaseStructOutput = [BigNumber, BigNumber] & {
    elastic: BigNumber;
    base: BigNumber;
};
export interface IBentoBoxMinimalInterface extends utils.Interface {
    functions: {
        "balanceOf(address,address)": FunctionFragment;
        "deposit(address,address,address,uint256,uint256)": FunctionFragment;
        "harvest(address,bool,uint256)": FunctionFragment;
        "registerProtocol()": FunctionFragment;
        "setMasterContractApproval(address,address,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "strategyData(address)": FunctionFragment;
        "toAmount(address,uint256,bool)": FunctionFragment;
        "toShare(address,uint256,bool)": FunctionFragment;
        "totals(address)": FunctionFragment;
        "transfer(address,address,address,uint256)": FunctionFragment;
        "withdraw(address,address,address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "deposit" | "harvest" | "registerProtocol" | "setMasterContractApproval" | "strategyData" | "toAmount" | "toShare" | "totals" | "transfer" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "harvest", values: [
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "registerProtocol", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMasterContractApproval", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "strategyData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "toAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "toShare", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "totals", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMasterContractApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface IBentoBoxMinimal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBentoBoxMinimalInterface;
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
        balanceOf(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        harvest(token: PromiseOrValue<string>, balance: PromiseOrValue<boolean>, maxChangeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerProtocol(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMasterContractApproval(user: PromiseOrValue<string>, masterContract: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        strategyData(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            StrategyDataStructOutput
        ] & {
            total: StrategyDataStructOutput;
        }>;
        toAmount(token: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount: BigNumber;
        }>;
        toShare(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[BigNumber] & {
            share: BigNumber;
        }>;
        totals(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[RebaseStructOutput] & {
            total: RebaseStructOutput;
        }>;
        transfer(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(token_: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    balanceOf(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    deposit(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    harvest(token: PromiseOrValue<string>, balance: PromiseOrValue<boolean>, maxChangeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerProtocol(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMasterContractApproval(user: PromiseOrValue<string>, masterContract: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    strategyData(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<StrategyDataStructOutput>;
    toAmount(token: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    toShare(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
    totals(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<RebaseStructOutput>;
    transfer(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(token_: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountOut: BigNumber;
            shareOut: BigNumber;
        }>;
        harvest(token: PromiseOrValue<string>, balance: PromiseOrValue<boolean>, maxChangeAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        registerProtocol(overrides?: CallOverrides): Promise<void>;
        setMasterContractApproval(user: PromiseOrValue<string>, masterContract: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        strategyData(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<StrategyDataStructOutput>;
        toAmount(token: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        toShare(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        totals(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<RebaseStructOutput>;
        transfer(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(token_: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountOut: BigNumber;
            shareOut: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        balanceOf(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        harvest(token: PromiseOrValue<string>, balance: PromiseOrValue<boolean>, maxChangeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerProtocol(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMasterContractApproval(user: PromiseOrValue<string>, masterContract: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        strategyData(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        toAmount(token: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        toShare(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        totals(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transfer(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(token_: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        harvest(token: PromiseOrValue<string>, balance: PromiseOrValue<boolean>, maxChangeAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerProtocol(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMasterContractApproval(user: PromiseOrValue<string>, masterContract: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        strategyData(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toAmount(token: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toShare(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, roundUp: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totals(token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(token: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(token_: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, share: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
