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
  PromiseOrValue,
} from "./common";

export interface IMultichainRouterInterface extends utils.Interface {
  functions: {
    "anySwapOut(address,address,uint256,uint256)": FunctionFragment;
    "anySwapOutNative(address,address,uint256)": FunctionFragment;
    "anySwapOutUnderlying(address,address,uint256,uint256)": FunctionFragment;
    "wNATIVE()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "anySwapOut"
      | "anySwapOutNative"
      | "anySwapOutUnderlying"
      | "wNATIVE"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "anySwapOut",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "anySwapOutNative",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "anySwapOutUnderlying",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "wNATIVE", values?: undefined): string;

  decodeFunctionResult(functionFragment: "anySwapOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "anySwapOutNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "anySwapOutUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wNATIVE", data: BytesLike): Result;

  events: {};
}

export interface IMultichainRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMultichainRouterInterface;

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
    anySwapOut(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    anySwapOutNative(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    anySwapOutUnderlying(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wNATIVE(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  anySwapOut(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    toChainID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  anySwapOutNative(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    toChainID: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  anySwapOutUnderlying(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    toChainID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wNATIVE(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    anySwapOut(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    anySwapOutNative(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    anySwapOutUnderlying(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    wNATIVE(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    anySwapOut(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    anySwapOutNative(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    anySwapOutUnderlying(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wNATIVE(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    anySwapOut(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    anySwapOutNative(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    anySwapOutUnderlying(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      toChainID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wNATIVE(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
