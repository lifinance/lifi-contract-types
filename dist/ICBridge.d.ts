/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICBridgeInterface extends ethers.utils.Interface {
  functions: {
    "relay(bytes,bytes[],address[],uint256[])": FunctionFragment;
    "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
    "sendNative(address,uint256,uint64,uint64,uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "relay",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendNative",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendNative", data: BytesLike): Result;

  events: {};
}

export class ICBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICBridgeInterface;

  functions: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendNative(
      _receiver: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  relay(
    _relayRequest: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  send(
    _receiver: string,
    _token: string,
    _amount: BigNumberish,
    _dstChinId: BigNumberish,
    _nonce: BigNumberish,
    _maxSlippage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendNative(
    _receiver: string,
    _amount: BigNumberish,
    _dstChinId: BigNumberish,
    _nonce: BigNumberish,
    _maxSlippage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendNative(
      _receiver: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendNative(
      _receiver: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendNative(
      _receiver: string,
      _amount: BigNumberish,
      _dstChinId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
