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

export interface TestOmniBridgeFacetInterface extends utils.Interface {
  functions: {
    "addDex(address)": FunctionFragment;
    "setFunctionApprovalBySignature(bytes4)": FunctionFragment;
    "startBridgeTokensViaOmniBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": FunctionFragment;
    "swapAndStartBridgeTokensViaOmniBridge((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDex"
      | "setFunctionApprovalBySignature"
      | "startBridgeTokensViaOmniBridge"
      | "swapAndStartBridgeTokensViaOmniBridge"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDex",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFunctionApprovalBySignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "startBridgeTokensViaOmniBridge",
    values: [ILiFi.BridgeDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAndStartBridgeTokensViaOmniBridge",
    values: [ILiFi.BridgeDataStruct, LibSwap.SwapDataStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "addDex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFunctionApprovalBySignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBridgeTokensViaOmniBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapAndStartBridgeTokensViaOmniBridge",
    data: BytesLike
  ): Result;

  events: {
    "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
    "LiFiTransferStarted(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
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

export interface TestOmniBridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestOmniBridgeFacetInterface;

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
    addDex(
      _dex: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFunctionApprovalBySignature(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapAndStartBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDex(
    _dex: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFunctionApprovalBySignature(
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startBridgeTokensViaOmniBridge(
    _bridgeData: ILiFi.BridgeDataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapAndStartBridgeTokensViaOmniBridge(
    _bridgeData: ILiFi.BridgeDataStruct,
    _swapData: LibSwap.SwapDataStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDex(
      _dex: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFunctionApprovalBySignature(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    startBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAndStartBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
    addDex(
      _dex: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFunctionApprovalBySignature(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapAndStartBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDex(
      _dex: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFunctionApprovalBySignature(
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapAndStartBridgeTokensViaOmniBridge(
      _bridgeData: ILiFi.BridgeDataStruct,
      _swapData: LibSwap.SwapDataStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
