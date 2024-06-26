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

export declare namespace IMayan {
  export type PermitParamsStruct = {
    value: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
  };

  export type PermitParamsStructOutput = [
    BigNumber,
    BigNumber,
    number,
    string,
    string
  ] & {
    value: BigNumber;
    deadline: BigNumber;
    v: number;
    r: string;
    s: string;
  };
}

export interface IMayanInterface extends utils.Interface {
  functions: {
    "forwardERC20(address,uint256,(uint256,uint256,uint8,bytes32,bytes32),address,bytes)": FunctionFragment;
    "forwardEth(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "forwardERC20" | "forwardEth"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "forwardERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      IMayan.PermitParamsStruct,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "forwardEth",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "forwardERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forwardEth", data: BytesLike): Result;

  events: {};
}

export interface IMayan extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMayanInterface;

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
    forwardERC20(
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      permitParams: IMayan.PermitParamsStruct,
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forwardEth(
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  forwardERC20(
    tokenIn: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    permitParams: IMayan.PermitParamsStruct,
    mayanProtocol: PromiseOrValue<string>,
    protocolData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forwardEth(
    mayanProtocol: PromiseOrValue<string>,
    protocolData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    forwardERC20(
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      permitParams: IMayan.PermitParamsStruct,
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    forwardEth(
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    forwardERC20(
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      permitParams: IMayan.PermitParamsStruct,
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forwardEth(
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    forwardERC20(
      tokenIn: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      permitParams: IMayan.PermitParamsStruct,
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forwardEth(
      mayanProtocol: PromiseOrValue<string>,
      protocolData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
