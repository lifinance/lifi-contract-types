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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace LibSwap {
  export type SwapDataStruct = {
    callTo: PromiseOrValue<string>;
    approveTo: PromiseOrValue<string>;
    sendingAssetId: PromiseOrValue<string>;
    receivingAssetId: PromiseOrValue<string>;
    fromAmount: PromiseOrValue<BigNumberish>;
    callData: PromiseOrValue<BytesLike>;
    requiresDeposit: PromiseOrValue<boolean>;
  };

  export type SwapDataStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    boolean
  ] & {
    callTo: string;
    approveTo: string;
    sendingAssetId: string;
    receivingAssetId: string;
    fromAmount: BigNumber;
    callData: string;
    requiresDeposit: boolean;
  };
}

export declare namespace IGasZip {
  export type GasZipDataStruct = {
    destinationChains: PromiseOrValue<BigNumberish>;
    receiver: PromiseOrValue<BytesLike>;
  };

  export type GasZipDataStructOutput = [BigNumber, string] & {
    destinationChains: BigNumber;
    receiver: string;
  };
}

export declare namespace ILiFi {
  export type BridgeDataStruct = {
    transactionId: PromiseOrValue<BytesLike>;
    bridge: PromiseOrValue<string>;
    integrator: PromiseOrValue<string>;
    referrer: PromiseOrValue<string>;
    sendingAssetId: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    minAmount: PromiseOrValue<BigNumberish>;
    destinationChainId: PromiseOrValue<BigNumberish>;
    hasSourceSwaps: PromiseOrValue<boolean>;
    hasDestinationCall: PromiseOrValue<boolean>;
  };

  export type BridgeDataStructOutput = [
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
  ] & {
    transactionId: string;
    bridge: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receiver: string;
    minAmount: BigNumber;
    destinationChainId: BigNumber;
    hasSourceSwaps: boolean;
    hasDestinationCall: boolean;
  };
}

export interface GasZipPeripheryInterface extends utils.Interface {
  functions: {
    "depositToGasZipERC20((address,address,address,address,uint256,bytes,bool),(uint256,bytes32))": FunctionFragment;
    "depositToGasZipNative((uint256,bytes32),uint256)": FunctionFragment;
    "gasZipRouter()": FunctionFragment;
    "getDestinationChainsValue(uint8[])": FunctionFragment;
    "liFiDEXAggregator()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositToGasZipERC20"
      | "depositToGasZipNative"
      | "gasZipRouter"
      | "getDestinationChainsValue"
      | "liFiDEXAggregator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositToGasZipERC20",
    values: [LibSwap.SwapDataStruct, IGasZip.GasZipDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToGasZipNative",
    values: [IGasZip.GasZipDataStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasZipRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDestinationChainsValue",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "liFiDEXAggregator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "depositToGasZipERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositToGasZipNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasZipRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDestinationChainsValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liFiDEXAggregator",
    data: BytesLike
  ): Result;

  events: {
    "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
    "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}

export interface LiFiGenericSwapCompletedEventObject {
  transactionId: string;
  integrator: string;
  referrer: string;
  receiver: string;
  fromAssetId: string;
  toAssetId: string;
  fromAmount: BigNumber;
  toAmount: BigNumber;
}
export type LiFiGenericSwapCompletedEvent = TypedEvent<
  [string, string, string, string, string, string, BigNumber, BigNumber],
  LiFiGenericSwapCompletedEventObject
>;

export type LiFiGenericSwapCompletedEventFilter =
  TypedEventFilter<LiFiGenericSwapCompletedEvent>;

export interface LiFiSwappedGenericEventObject {
  transactionId: string;
  integrator: string;
  referrer: string;
  fromAssetId: string;
  toAssetId: string;
  fromAmount: BigNumber;
  toAmount: BigNumber;
}
export type LiFiSwappedGenericEvent = TypedEvent<
  [string, string, string, string, string, BigNumber, BigNumber],
  LiFiSwappedGenericEventObject
>;

export type LiFiSwappedGenericEventFilter =
  TypedEventFilter<LiFiSwappedGenericEvent>;

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

export interface LiFiTransferRecoveredEventObject {
  transactionId: string;
  receivingAssetId: string;
  receiver: string;
  amount: BigNumber;
  timestamp: BigNumber;
}
export type LiFiTransferRecoveredEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  LiFiTransferRecoveredEventObject
>;

export type LiFiTransferRecoveredEventFilter =
  TypedEventFilter<LiFiTransferRecoveredEvent>;

export interface LiFiTransferStartedEventObject {
  bridgeData: ILiFi.BridgeDataStructOutput;
}
export type LiFiTransferStartedEvent = TypedEvent<
  [ILiFi.BridgeDataStructOutput],
  LiFiTransferStartedEventObject
>;

export type LiFiTransferStartedEventFilter =
  TypedEventFilter<LiFiTransferStartedEvent>;

export interface GasZipPeriphery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasZipPeripheryInterface;

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
    depositToGasZipERC20(
      _swapData: LibSwap.SwapDataStruct,
      _gasZipData: IGasZip.GasZipDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositToGasZipNative(
      _gasZipData: IGasZip.GasZipDataStruct,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gasZipRouter(overrides?: CallOverrides): Promise<[string]>;

    getDestinationChainsValue(
      _chainIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { destinationChains: BigNumber }>;

    liFiDEXAggregator(overrides?: CallOverrides): Promise<[string]>;
  };

  depositToGasZipERC20(
    _swapData: LibSwap.SwapDataStruct,
    _gasZipData: IGasZip.GasZipDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositToGasZipNative(
    _gasZipData: IGasZip.GasZipDataStruct,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gasZipRouter(overrides?: CallOverrides): Promise<string>;

  getDestinationChainsValue(
    _chainIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  liFiDEXAggregator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    depositToGasZipERC20(
      _swapData: LibSwap.SwapDataStruct,
      _gasZipData: IGasZip.GasZipDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    depositToGasZipNative(
      _gasZipData: IGasZip.GasZipDataStruct,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    gasZipRouter(overrides?: CallOverrides): Promise<string>;

    getDestinationChainsValue(
      _chainIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liFiDEXAggregator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      integrator?: null,
      referrer?: null,
      receiver?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null
    ): LiFiGenericSwapCompletedEventFilter;
    LiFiGenericSwapCompleted(
      transactionId?: PromiseOrValue<BytesLike> | null,
      integrator?: null,
      referrer?: null,
      receiver?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null
    ): LiFiGenericSwapCompletedEventFilter;

    "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      integrator?: null,
      referrer?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null
    ): LiFiSwappedGenericEventFilter;
    LiFiSwappedGeneric(
      transactionId?: PromiseOrValue<BytesLike> | null,
      integrator?: null,
      referrer?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null
    ): LiFiSwappedGenericEventFilter;

    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;
    LiFiTransferCompleted(
      transactionId?: PromiseOrValue<BytesLike> | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferCompletedEventFilter;

    "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferRecoveredEventFilter;
    LiFiTransferRecovered(
      transactionId?: PromiseOrValue<BytesLike> | null,
      receivingAssetId?: null,
      receiver?: null,
      amount?: null,
      timestamp?: null
    ): LiFiTransferRecoveredEventFilter;

    "LiFiTransferStarted(tuple)"(
      bridgeData?: null
    ): LiFiTransferStartedEventFilter;
    LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
  };

  estimateGas: {
    depositToGasZipERC20(
      _swapData: LibSwap.SwapDataStruct,
      _gasZipData: IGasZip.GasZipDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositToGasZipNative(
      _gasZipData: IGasZip.GasZipDataStruct,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gasZipRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getDestinationChainsValue(
      _chainIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liFiDEXAggregator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToGasZipERC20(
      _swapData: LibSwap.SwapDataStruct,
      _gasZipData: IGasZip.GasZipDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositToGasZipNative(
      _gasZipData: IGasZip.GasZipDataStruct,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gasZipRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDestinationChainsValue(
      _chainIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liFiDEXAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}