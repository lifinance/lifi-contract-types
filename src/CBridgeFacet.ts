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

export declare namespace CBridgeFacet {
  export type CBridgeDataStruct = {
    maxSlippage: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
  };

  export type CBridgeDataStructOutput = [number, BigNumber] & {
    maxSlippage: number;
    nonce: BigNumber;
  };
}

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

export interface CBridgeFacetInterface extends utils.Interface {
  functions: {
    "startBridgeTokensViaCBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,uint64))": FunctionFragment;
    "swapAndStartBridgeTokensViaCBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint32,uint64))": FunctionFragment;
    "triggerRefund(address,bytes,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "startBridgeTokensViaCBridge"
      | "swapAndStartBridgeTokensViaCBridge"
      | "triggerRefund"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "startBridgeTokensViaCBridge",
    values: [ILiFi.BridgeDataStruct, CBridgeFacet.CBridgeDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaCBridge",
    values: [
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      CBridgeFacet.CBridgeDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerRefund",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaCBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaCBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerRefund",
    data: BytesLike
  ): Result;

  events: {
    "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)": EventFragment;
    "BridgeToNonEVMChain(bytes32,uint256,bytes)": EventFragment;
    "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)": EventFragment;
    "CBridgeRefund(address,address,uint256)": EventFragment;
    "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
    "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetSwapped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChainBytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CBridgeRefund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}

export interface AssetSwappedEventObject {
  transactionId: string;
  dex: string;
  fromAssetId: string;
  toAssetId: string;
  fromAmount: BigNumber;
  toAmount: BigNumber;
  timestamp: BigNumber;
}
export type AssetSwappedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  AssetSwappedEventObject
>;

export type AssetSwappedEventFilter = TypedEventFilter<AssetSwappedEvent>;

export interface BridgeToNonEVMChainEventObject {
  transactionId: string;
  destinationChainId: BigNumber;
  receiver: string;
}
export type BridgeToNonEVMChainEvent = TypedEvent<
  [string, BigNumber, string],
  BridgeToNonEVMChainEventObject
>;

export type BridgeToNonEVMChainEventFilter =
  TypedEventFilter<BridgeToNonEVMChainEvent>;

export interface BridgeToNonEVMChainBytes32EventObject {
  transactionId: string;
  destinationChainId: BigNumber;
  receiver: string;
}
export type BridgeToNonEVMChainBytes32Event = TypedEvent<
  [string, BigNumber, string],
  BridgeToNonEVMChainBytes32EventObject
>;

export type BridgeToNonEVMChainBytes32EventFilter =
  TypedEventFilter<BridgeToNonEVMChainBytes32Event>;

export interface CBridgeRefundEventObject {
  _assetAddress: string;
  _to: string;
  amount: BigNumber;
}
export type CBridgeRefundEvent = TypedEvent<
  [string, string, BigNumber],
  CBridgeRefundEventObject
>;

export type CBridgeRefundEventFilter = TypedEventFilter<CBridgeRefundEvent>;

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

export interface CBridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CBridgeFacetInterface;

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
    startBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    triggerRefund(
      _callTo: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      _assetAddress: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  startBridgeTokensViaCBridge(
    _bridgeData: ILiFi.BridgeDataStruct,
    _cBridgeData: CBridgeFacet.CBridgeDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaCBridge(
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _cBridgeData: CBridgeFacet.CBridgeDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  triggerRefund(
    _callTo: PromiseOrValue<string>,
    _callData: PromiseOrValue<BytesLike>,
    _assetAddress: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    startBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    triggerRefund(
      _callTo: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      _assetAddress: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetSwapped(bytes32,address,address,address,uint256,uint256,uint256)"(
      transactionId?: null,
      dex?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null,
      timestamp?: null
    ): AssetSwappedEventFilter;
    AssetSwapped(
      transactionId?: null,
      dex?: null,
      fromAssetId?: null,
      toAssetId?: null,
      fromAmount?: null,
      toAmount?: null,
      timestamp?: null
    ): AssetSwappedEventFilter;

    "BridgeToNonEVMChain(bytes32,uint256,bytes)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      receiver?: null
    ): BridgeToNonEVMChainEventFilter;
    BridgeToNonEVMChain(
      transactionId?: PromiseOrValue<BytesLike> | null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      receiver?: null
    ): BridgeToNonEVMChainEventFilter;

    "BridgeToNonEVMChainBytes32(bytes32,uint256,bytes32)"(
      transactionId?: PromiseOrValue<BytesLike> | null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      receiver?: null
    ): BridgeToNonEVMChainBytes32EventFilter;
    BridgeToNonEVMChainBytes32(
      transactionId?: PromiseOrValue<BytesLike> | null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      receiver?: null
    ): BridgeToNonEVMChainBytes32EventFilter;

    "CBridgeRefund(address,address,uint256)"(
      _assetAddress?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      amount?: null
    ): CBridgeRefundEventFilter;
    CBridgeRefund(
      _assetAddress?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      amount?: null
    ): CBridgeRefundEventFilter;

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
    startBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    triggerRefund(
      _callTo: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      _assetAddress: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    startBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaCBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _cBridgeData: CBridgeFacet.CBridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    triggerRefund(
      _callTo: PromiseOrValue<string>,
      _callData: PromiseOrValue<BytesLike>,
      _assetAddress: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
