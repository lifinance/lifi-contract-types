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

export interface IiZiSwapPoolInterface extends utils.Interface {
  functions: {
    "swapX2Y(address,uint128,int24,bytes)": FunctionFragment;
    "swapY2X(address,uint128,int24,bytes)": FunctionFragment;
    "tokenX()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "swapX2Y" | "swapY2X" | "tokenX"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapX2Y",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapY2X",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "tokenX", values?: undefined): string;

  decodeFunctionResult(functionFragment: "swapX2Y", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapY2X", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenX", data: BytesLike): Result;

  events: {};
}

export interface IiZiSwapPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IiZiSwapPoolInterface;

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
    swapX2Y(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      lowPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapY2X(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      highPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenX(overrides?: CallOverrides): Promise<[string]>;
  };

  swapX2Y(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    lowPt: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapY2X(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    highPt: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenX(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    swapX2Y(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      lowPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountX: BigNumber; amountY: BigNumber }
    >;

    swapY2X(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      highPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountX: BigNumber; amountY: BigNumber }
    >;

    tokenX(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    swapX2Y(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      lowPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapY2X(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      highPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenX(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    swapX2Y(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      lowPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapY2X(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      highPt: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
