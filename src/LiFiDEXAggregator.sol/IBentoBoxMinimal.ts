/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common.js";

export type StrategyDataStruct = {
  strategyStartDate: BigNumberish;
  targetPercentage: BigNumberish;
  balance: BigNumberish;
};

export type StrategyDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
  strategyStartDate: BigNumber;
  targetPercentage: BigNumber;
  balance: BigNumber;
};

export type RebaseStruct = { elastic: BigNumberish; base: BigNumberish };

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

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "deposit"
      | "harvest"
      | "registerProtocol"
      | "setMasterContractApproval"
      | "strategyData"
      | "toAmount"
      | "toShare"
      | "totals"
      | "transfer"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProtocol",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMasterContractApproval",
    values: [string, string, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "toAmount",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "toShare",
    values: [string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "totals", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMasterContractApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyData",
    data: BytesLike
  ): Result;
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

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    harvest(
      token: string,
      balance: boolean,
      maxChangeAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerProtocol(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMasterContractApproval(
      user: string,
      masterContract: string,
      approved: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    strategyData(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [StrategyDataStructOutput] & { total: StrategyDataStructOutput }
    >;

    toAmount(
      token: string,
      share: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    toShare(
      token: string,
      amount: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { share: BigNumber }>;

    totals(
      token: string,
      overrides?: CallOverrides
    ): Promise<[RebaseStructOutput] & { total: RebaseStructOutput }>;

    transfer(
      token: string,
      from: string,
      to: string,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      token_: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    token: string,
    from: string,
    to: string,
    amount: BigNumberish,
    share: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  harvest(
    token: string,
    balance: boolean,
    maxChangeAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerProtocol(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMasterContractApproval(
    user: string,
    masterContract: string,
    approved: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  strategyData(
    token: string,
    overrides?: CallOverrides
  ): Promise<StrategyDataStructOutput>;

  toAmount(
    token: string,
    share: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  toShare(
    token: string,
    amount: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totals(token: string, overrides?: CallOverrides): Promise<RebaseStructOutput>;

  transfer(
    token: string,
    from: string,
    to: string,
    share: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    token_: string,
    from: string,
    to: string,
    amount: BigNumberish,
    share: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;

    harvest(
      token: string,
      balance: boolean,
      maxChangeAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerProtocol(overrides?: CallOverrides): Promise<void>;

    setMasterContractApproval(
      user: string,
      masterContract: string,
      approved: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    strategyData(
      token: string,
      overrides?: CallOverrides
    ): Promise<StrategyDataStructOutput>;

    toAmount(
      token: string,
      share: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toShare(
      token: string,
      amount: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totals(
      token: string,
      overrides?: CallOverrides
    ): Promise<RebaseStructOutput>;

    transfer(
      token: string,
      from: string,
      to: string,
      share: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token_: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    harvest(
      token: string,
      balance: boolean,
      maxChangeAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    registerProtocol(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMasterContractApproval(
      user: string,
      masterContract: string,
      approved: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    strategyData(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    toAmount(
      token: string,
      share: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    toShare(
      token: string,
      amount: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totals(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      token: string,
      from: string,
      to: string,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdraw(
      token_: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    harvest(
      token: string,
      balance: boolean,
      maxChangeAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerProtocol(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMasterContractApproval(
      user: string,
      masterContract: string,
      approved: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    strategyData(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toAmount(
      token: string,
      share: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toShare(
      token: string,
      amount: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totals(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      token: string,
      from: string,
      to: string,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token_: string,
      from: string,
      to: string,
      amount: BigNumberish,
      share: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
