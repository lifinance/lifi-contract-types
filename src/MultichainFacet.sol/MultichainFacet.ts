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
} from "../common";

export declare namespace MultichainFacet {
  export type AnyMappingStruct = {
    tokenAddress: PromiseOrValue<string>;
    anyTokenAddress: PromiseOrValue<string>;
  };

  export type AnyMappingStructOutput = [string, string] & {
    tokenAddress: string;
    anyTokenAddress: string;
  };

  export type MultichainDataStruct = { router: PromiseOrValue<string> };

  export type MultichainDataStructOutput = [string] & { router: string };
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

export interface MultichainFacetInterface extends utils.Interface {
  functions: {
    "initMultichain(address,address[])": FunctionFragment;
    "registerRouters(address[],bool[])": FunctionFragment;
    "startBridgeTokensViaMultichain((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address))": FunctionFragment;
    "swapAndStartBridgeTokensViaMultichain((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address))": FunctionFragment;
    "updateAddressMappings((address,address)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initMultichain"
      | "registerRouters"
      | "startBridgeTokensViaMultichain"
      | "swapAndStartBridgeTokensViaMultichain"
      | "updateAddressMappings"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initMultichain",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerRouters",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "startBridgeTokensViaMultichain",
    values: [ILiFi.BridgeDataStruct, MultichainFacet.MultichainDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaMultichain",
    values: [
      ILiFi.BridgeDataStruct,
      LibSwap.SwapDataStruct[],
      MultichainFacet.MultichainDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAddressMappings",
    values: [MultichainFacet.AnyMappingStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "initMultichain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRouters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaMultichain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaMultichain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAddressMappings",
    data: BytesLike
  ): Result;

  events: {
    "AnyMappingUpdated(tuple[])": EventFragment;
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(tuple)": EventFragment;
    "MultichainInitialized()": EventFragment;
    "MultichainRoutersUpdated(address[],bool[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnyMappingUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultichainInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultichainRoutersUpdated"): EventFragment;
}

export interface AnyMappingUpdatedEventObject {
  mappings: MultichainFacet.AnyMappingStructOutput[];
}
export type AnyMappingUpdatedEvent = TypedEvent<
  [MultichainFacet.AnyMappingStructOutput[]],
  AnyMappingUpdatedEventObject
>;

export type AnyMappingUpdatedEventFilter =
  TypedEventFilter<AnyMappingUpdatedEvent>;

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

export interface MultichainInitializedEventObject {}
export type MultichainInitializedEvent = TypedEvent<
  [],
  MultichainInitializedEventObject
>;

export type MultichainInitializedEventFilter =
  TypedEventFilter<MultichainInitializedEvent>;

export interface MultichainRoutersUpdatedEventObject {
  routers: string[];
  allowed: boolean[];
}
export type MultichainRoutersUpdatedEvent = TypedEvent<
  [string[], boolean[]],
  MultichainRoutersUpdatedEventObject
>;

export type MultichainRoutersUpdatedEventFilter =
  TypedEventFilter<MultichainRoutersUpdatedEvent>;

export interface MultichainFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultichainFacetInterface;

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
    initMultichain(
      anyNative: PromiseOrValue<string>,
      routers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registerRouters(
      routers: PromiseOrValue<string>[],
      allowed: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAddressMappings(
      mappings: MultichainFacet.AnyMappingStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  initMultichain(
    anyNative: PromiseOrValue<string>,
    routers: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registerRouters(
    routers: PromiseOrValue<string>[],
    allowed: PromiseOrValue<boolean>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startBridgeTokensViaMultichain(
    _bridgeData: ILiFi.BridgeDataStruct,
    _multichainData: MultichainFacet.MultichainDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaMultichain(
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    _multichainData: MultichainFacet.MultichainDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAddressMappings(
    mappings: MultichainFacet.AnyMappingStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initMultichain(
      anyNative: PromiseOrValue<string>,
      routers: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerRouters(
      routers: PromiseOrValue<string>[],
      allowed: PromiseOrValue<boolean>[],
      overrides?: CallOverrides
    ): Promise<void>;

    startBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAddressMappings(
      mappings: MultichainFacet.AnyMappingStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AnyMappingUpdated(tuple[])"(mappings?: null): AnyMappingUpdatedEventFilter;
    AnyMappingUpdated(mappings?: null): AnyMappingUpdatedEventFilter;

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

    "MultichainInitialized()"(): MultichainInitializedEventFilter;
    MultichainInitialized(): MultichainInitializedEventFilter;

    "MultichainRoutersUpdated(address[],bool[])"(
      routers?: null,
      allowed?: null
    ): MultichainRoutersUpdatedEventFilter;
    MultichainRoutersUpdated(
      routers?: null,
      allowed?: null
    ): MultichainRoutersUpdatedEventFilter;
  };

  estimateGas: {
    initMultichain(
      anyNative: PromiseOrValue<string>,
      routers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registerRouters(
      routers: PromiseOrValue<string>[],
      allowed: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAddressMappings(
      mappings: MultichainFacet.AnyMappingStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initMultichain(
      anyNative: PromiseOrValue<string>,
      routers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registerRouters(
      routers: PromiseOrValue<string>[],
      allowed: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaMultichain(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      _multichainData: MultichainFacet.MultichainDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAddressMappings(
      mappings: MultichainFacet.AnyMappingStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
