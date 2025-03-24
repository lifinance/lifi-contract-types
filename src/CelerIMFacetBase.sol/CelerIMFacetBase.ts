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
} from "../common";

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

export declare namespace CelerIM {
  export type CelerIMDataStruct = {
    maxSlippage: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    callTo: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    messageBusFee: PromiseOrValue<BigNumberish>;
    bridgeType: PromiseOrValue<BigNumberish>;
  };

  export type CelerIMDataStructOutput = [
    number,
    BigNumber,
    string,
    string,
    BigNumber,
    number
  ] & {
    maxSlippage: number;
    nonce: BigNumber;
    callTo: string;
    callData: string;
    messageBusFee: BigNumber;
    bridgeType: number;
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

export interface CelerIMFacetBaseInterface extends utils.Interface {
  functions: {
    "RELAYER()": FunctionFragment;
    "startBridgeTokensViaCelerIM((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
    "swapAndStartBridgeTokensViaCelerIM((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint32,uint64,bytes,bytes,uint256,uint8))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "RELAYER"
      | "startBridgeTokensViaCelerIM"
      | "swapAndStartBridgeTokensViaCelerIM"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "RELAYER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startBridgeTokensViaCelerIM",
    values: [ILiFi.BridgeDataStruct, CelerIM.CelerIMDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaCelerIM",
    values: [
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      CelerIM.CelerIMDataStruct
    ]
  ): string;

  decodeFunctionResult(functionFragment: "RELAYER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaCelerIM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaCelerIM",
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

export interface CelerIMFacetBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CelerIMFacetBaseInterface;

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
    RELAYER(overrides?: CallOverrides): Promise<[string]>;

    startBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  RELAYER(overrides?: CallOverrides): Promise<string>;

  startBridgeTokensViaCelerIM(
    _bridgeData: ILiFi.BridgeDataStruct,
    _celerIMData: CelerIM.CelerIMDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaCelerIM(
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _celerIMData: CelerIM.CelerIMDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    RELAYER(overrides?: CallOverrides): Promise<string>;

    startBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
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
    RELAYER(overrides?: CallOverrides): Promise<BigNumber>;

    startBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    RELAYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaCelerIM(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _celerIMData: CelerIM.CelerIMDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
