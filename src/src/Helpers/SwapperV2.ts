/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface SwapperV2Interface extends utils.Interface {
  functions: {};

  events: {
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}

export interface LiFiTransferCompletedEventObject {
  transactionId: string;
  receivingAssetId: string;
  receiver: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type LiFiTransferCompletedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  LiFiTransferCompletedEventObject
>;

export type LiFiTransferCompletedEventFilter =
  TypedEventFilter<LiFiTransferCompletedEvent>;

export interface LiFiTransferStartedEventObject {
  transactionId: string;
  bridge: string;
  bridgeData: string;
  integrator: string;
  referrer: string;
  sendingAssetId: string;
  receivingAssetId: string;
  receiver: string;
  amount: BigNumber;
  destinationChainId: BigNumber;
  hasSourceSwap: boolean;
  hasDestinationCall: boolean;
}
export type LiFiTransferStartedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean
  ],
  LiFiTransferStartedEventObject
>;

export type LiFiTransferStartedEventFilter =
  TypedEventFilter<LiFiTransferStartedEvent>;

export interface SwapperV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapperV2Interface;

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

  functions: {};

  callStatic: {};

  filters: {
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;
    LiFiTransferCompleted(
      transactionId?: BytesLike | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;

    "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(
      transactionId?: BytesLike | null,
      bridge?: null,
      bridgeData?: null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      hasSourceSwap?: null,
      hasDestinationCall?: null
    ): LiFiTransferStartedEventFilter;
    LiFiTransferStarted(
      transactionId?: BytesLike | null,
      bridge?: null,
      bridgeData?: null,
      integrator?: null,
      referrer?: null,
      sendingAssetId?: null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      destinationChainId?: null,
      hasSourceSwap?: null,
      hasDestinationCall?: null
    ): LiFiTransferStartedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
