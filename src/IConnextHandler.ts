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

export interface IConnextHandlerInterface extends utils.Interface {
  functions: {
    "xcall(uint32,address,address,address,uint256,uint256,bytes)": FunctionFragment;
    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "xcall(uint32,address,address,address,uint256,uint256,bytes)"
      | "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IConnextHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IConnextHandlerInterface;

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
    "xcall(uint32,address,address,address,uint256,uint256,bytes)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      _relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "xcall(uint32,address,address,address,uint256,uint256,bytes)"(
    destination: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    tokenAddress: PromiseOrValue<string>,
    delegate: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    slippage: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(
    destination: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    tokenAddress: PromiseOrValue<string>,
    delegate: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    slippage: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    _relayerFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "xcall(uint32,address,address,address,uint256,uint256,bytes)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      _relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    "xcall(uint32,address,address,address,uint256,uint256,bytes)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      _relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "xcall(uint32,address,address,address,uint256,uint256,bytes)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "xcall(uint32,address,address,address,uint256,uint256,bytes,uint256)"(
      destination: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      tokenAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      _relayerFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
