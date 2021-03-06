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
} from "../../common";

export declare namespace ITransactionManager {
  export type TransactionDataStruct = {
    receivingChainTxManagerAddress: string;
    user: string;
    router: string;
    initiator: string;
    sendingAssetId: string;
    receivingAssetId: string;
    sendingChainFallback: string;
    receivingAddress: string;
    callTo: string;
    callDataHash: BytesLike;
    transactionId: BytesLike;
    sendingChainId: BigNumberish;
    receivingChainId: BigNumberish;
    amount: BigNumberish;
    expiry: BigNumberish;
    preparedBlockNumber: BigNumberish;
  };

  export type TransactionDataStructOutput = [
    string,
    string,
    string,
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
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    receivingChainTxManagerAddress: string;
    user: string;
    router: string;
    initiator: string;
    sendingAssetId: string;
    receivingAssetId: string;
    sendingChainFallback: string;
    receivingAddress: string;
    callTo: string;
    callDataHash: string;
    transactionId: string;
    sendingChainId: BigNumber;
    receivingChainId: BigNumber;
    amount: BigNumber;
    expiry: BigNumber;
    preparedBlockNumber: BigNumber;
  };

  export type CancelArgsStruct = {
    txData: ITransactionManager.TransactionDataStruct;
    signature: BytesLike;
    encodedMeta: BytesLike;
  };

  export type CancelArgsStructOutput = [
    ITransactionManager.TransactionDataStructOutput,
    string,
    string
  ] & {
    txData: ITransactionManager.TransactionDataStructOutput;
    signature: string;
    encodedMeta: string;
  };

  export type FulfillArgsStruct = {
    txData: ITransactionManager.TransactionDataStruct;
    relayerFee: BigNumberish;
    signature: BytesLike;
    callData: BytesLike;
    encodedMeta: BytesLike;
  };

  export type FulfillArgsStructOutput = [
    ITransactionManager.TransactionDataStructOutput,
    BigNumber,
    string,
    string,
    string
  ] & {
    txData: ITransactionManager.TransactionDataStructOutput;
    relayerFee: BigNumber;
    signature: string;
    callData: string;
    encodedMeta: string;
  };

  export type InvariantTransactionDataStruct = {
    receivingChainTxManagerAddress: string;
    user: string;
    router: string;
    initiator: string;
    sendingAssetId: string;
    receivingAssetId: string;
    sendingChainFallback: string;
    receivingAddress: string;
    callTo: string;
    sendingChainId: BigNumberish;
    receivingChainId: BigNumberish;
    callDataHash: BytesLike;
    transactionId: BytesLike;
  };

  export type InvariantTransactionDataStructOutput = [
    string,
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
    string,
    string
  ] & {
    receivingChainTxManagerAddress: string;
    user: string;
    router: string;
    initiator: string;
    sendingAssetId: string;
    receivingAssetId: string;
    sendingChainFallback: string;
    receivingAddress: string;
    callTo: string;
    sendingChainId: BigNumber;
    receivingChainId: BigNumber;
    callDataHash: string;
    transactionId: string;
  };

  export type PrepareArgsStruct = {
    invariantData: ITransactionManager.InvariantTransactionDataStruct;
    amount: BigNumberish;
    expiry: BigNumberish;
    encryptedCallData: BytesLike;
    encodedBid: BytesLike;
    bidSignature: BytesLike;
    encodedMeta: BytesLike;
  };

  export type PrepareArgsStructOutput = [
    ITransactionManager.InvariantTransactionDataStructOutput,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string
  ] & {
    invariantData: ITransactionManager.InvariantTransactionDataStructOutput;
    amount: BigNumber;
    expiry: BigNumber;
    encryptedCallData: string;
    encodedBid: string;
    bidSignature: string;
    encodedMeta: string;
  };
}

export interface ITransactionManagerInterface extends utils.Interface {
  functions: {
    "addAssetId(address)": FunctionFragment;
    "addLiquidity(uint256,address)": FunctionFragment;
    "addLiquidityFor(uint256,address,address)": FunctionFragment;
    "addRouter(address)": FunctionFragment;
    "cancel(((address,address,address,address,address,address,address,address,address,bytes32,bytes32,uint256,uint256,uint256,uint256,uint256),bytes,bytes))": FunctionFragment;
    "fulfill(((address,address,address,address,address,address,address,address,address,bytes32,bytes32,uint256,uint256,uint256,uint256,uint256),uint256,bytes,bytes,bytes))": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getStoredChainId()": FunctionFragment;
    "prepare(((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
    "removeAssetId(address)": FunctionFragment;
    "removeLiquidity(uint256,address,address)": FunctionFragment;
    "removeRouter(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAssetId"
      | "addLiquidity"
      | "addLiquidityFor"
      | "addRouter"
      | "cancel"
      | "fulfill"
      | "getChainId"
      | "getStoredChainId"
      | "prepare"
      | "removeAssetId"
      | "removeLiquidity"
      | "removeRouter"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addAssetId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityFor",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "addRouter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [ITransactionManager.CancelArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [ITransactionManager.FulfillArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStoredChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [ITransactionManager.PrepareArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAssetId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRouter",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addAssetId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStoredChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRouter",
    data: BytesLike
  ): Result;

  events: {
    "AssetAdded(address,address)": EventFragment;
    "AssetRemoved(address,address)": EventFragment;
    "LiquidityAdded(address,address,uint256,address)": EventFragment;
    "LiquidityRemoved(address,address,uint256,address)": EventFragment;
    "RouterAdded(address,address)": EventFragment;
    "RouterRemoved(address,address)": EventFragment;
    "TransactionCancelled(address,address,bytes32,tuple,address)": EventFragment;
    "TransactionFulfilled(address,address,bytes32,tuple,bool,bool,bytes,address)": EventFragment;
    "TransactionPrepared(address,address,bytes32,tuple,address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionPrepared"): EventFragment;
}

export interface AssetAddedEventObject {
  addedAssetId: string;
  caller: string;
}
export type AssetAddedEvent = TypedEvent<
  [string, string],
  AssetAddedEventObject
>;

export type AssetAddedEventFilter = TypedEventFilter<AssetAddedEvent>;

export interface AssetRemovedEventObject {
  removedAssetId: string;
  caller: string;
}
export type AssetRemovedEvent = TypedEvent<
  [string, string],
  AssetRemovedEventObject
>;

export type AssetRemovedEventFilter = TypedEventFilter<AssetRemovedEvent>;

export interface LiquidityAddedEventObject {
  router: string;
  assetId: string;
  amount: BigNumber;
  caller: string;
}
export type LiquidityAddedEvent = TypedEvent<
  [string, string, BigNumber, string],
  LiquidityAddedEventObject
>;

export type LiquidityAddedEventFilter = TypedEventFilter<LiquidityAddedEvent>;

export interface LiquidityRemovedEventObject {
  router: string;
  assetId: string;
  amount: BigNumber;
  recipient: string;
}
export type LiquidityRemovedEvent = TypedEvent<
  [string, string, BigNumber, string],
  LiquidityRemovedEventObject
>;

export type LiquidityRemovedEventFilter =
  TypedEventFilter<LiquidityRemovedEvent>;

export interface RouterAddedEventObject {
  addedRouter: string;
  caller: string;
}
export type RouterAddedEvent = TypedEvent<
  [string, string],
  RouterAddedEventObject
>;

export type RouterAddedEventFilter = TypedEventFilter<RouterAddedEvent>;

export interface RouterRemovedEventObject {
  removedRouter: string;
  caller: string;
}
export type RouterRemovedEvent = TypedEvent<
  [string, string],
  RouterRemovedEventObject
>;

export type RouterRemovedEventFilter = TypedEventFilter<RouterRemovedEvent>;

export interface TransactionCancelledEventObject {
  user: string;
  router: string;
  transactionId: string;
  args: ITransactionManager.CancelArgsStructOutput;
  caller: string;
}
export type TransactionCancelledEvent = TypedEvent<
  [string, string, string, ITransactionManager.CancelArgsStructOutput, string],
  TransactionCancelledEventObject
>;

export type TransactionCancelledEventFilter =
  TypedEventFilter<TransactionCancelledEvent>;

export interface TransactionFulfilledEventObject {
  user: string;
  router: string;
  transactionId: string;
  args: ITransactionManager.FulfillArgsStructOutput;
  success: boolean;
  isContract: boolean;
  returnData: string;
  caller: string;
}
export type TransactionFulfilledEvent = TypedEvent<
  [
    string,
    string,
    string,
    ITransactionManager.FulfillArgsStructOutput,
    boolean,
    boolean,
    string,
    string
  ],
  TransactionFulfilledEventObject
>;

export type TransactionFulfilledEventFilter =
  TypedEventFilter<TransactionFulfilledEvent>;

export interface TransactionPreparedEventObject {
  user: string;
  router: string;
  transactionId: string;
  txData: ITransactionManager.TransactionDataStructOutput;
  caller: string;
  args: ITransactionManager.PrepareArgsStructOutput;
}
export type TransactionPreparedEvent = TypedEvent<
  [
    string,
    string,
    string,
    ITransactionManager.TransactionDataStructOutput,
    string,
    ITransactionManager.PrepareArgsStructOutput
  ],
  TransactionPreparedEventObject
>;

export type TransactionPreparedEventFilter =
  TypedEventFilter<TransactionPreparedEvent>;

export interface ITransactionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITransactionManagerInterface;

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
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      args: ITransactionManager.CancelArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fulfill(
      args: ITransactionManager.FulfillArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStoredChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    prepare(
      args: ITransactionManager.PrepareArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidity(
    amount: BigNumberish,
    assetId: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityFor(
    amount: BigNumberish,
    assetId: string,
    router: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    args: ITransactionManager.CancelArgsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fulfill(
    args: ITransactionManager.FulfillArgsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

  prepare(
    args: ITransactionManager.PrepareArgsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAssetId(
    assetId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    assetId: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addRouter(router: string, overrides?: CallOverrides): Promise<void>;

    cancel(
      args: ITransactionManager.CancelArgsStruct,
      overrides?: CallOverrides
    ): Promise<ITransactionManager.TransactionDataStructOutput>;

    fulfill(
      args: ITransactionManager.FulfillArgsStruct,
      overrides?: CallOverrides
    ): Promise<ITransactionManager.TransactionDataStructOutput>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      args: ITransactionManager.PrepareArgsStruct,
      overrides?: CallOverrides
    ): Promise<ITransactionManager.TransactionDataStructOutput>;

    removeAssetId(assetId: string, overrides?: CallOverrides): Promise<void>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeRouter(router: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AssetAdded(address,address)"(
      addedAssetId?: string | null,
      caller?: string | null
    ): AssetAddedEventFilter;
    AssetAdded(
      addedAssetId?: string | null,
      caller?: string | null
    ): AssetAddedEventFilter;

    "AssetRemoved(address,address)"(
      removedAssetId?: string | null,
      caller?: string | null
    ): AssetRemovedEventFilter;
    AssetRemoved(
      removedAssetId?: string | null,
      caller?: string | null
    ): AssetRemovedEventFilter;

    "LiquidityAdded(address,address,uint256,address)"(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      caller?: null
    ): LiquidityAddedEventFilter;
    LiquidityAdded(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      caller?: null
    ): LiquidityAddedEventFilter;

    "LiquidityRemoved(address,address,uint256,address)"(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      recipient?: null
    ): LiquidityRemovedEventFilter;
    LiquidityRemoved(
      router?: string | null,
      assetId?: string | null,
      amount?: null,
      recipient?: null
    ): LiquidityRemovedEventFilter;

    "RouterAdded(address,address)"(
      addedRouter?: string | null,
      caller?: string | null
    ): RouterAddedEventFilter;
    RouterAdded(
      addedRouter?: string | null,
      caller?: string | null
    ): RouterAddedEventFilter;

    "RouterRemoved(address,address)"(
      removedRouter?: string | null,
      caller?: string | null
    ): RouterRemovedEventFilter;
    RouterRemoved(
      removedRouter?: string | null,
      caller?: string | null
    ): RouterRemovedEventFilter;

    "TransactionCancelled(address,address,bytes32,tuple,address)"(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      args?: null,
      caller?: null
    ): TransactionCancelledEventFilter;
    TransactionCancelled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      args?: null,
      caller?: null
    ): TransactionCancelledEventFilter;

    "TransactionFulfilled(address,address,bytes32,tuple,bool,bool,bytes,address)"(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      args?: null,
      success?: null,
      isContract?: null,
      returnData?: null,
      caller?: null
    ): TransactionFulfilledEventFilter;
    TransactionFulfilled(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      args?: null,
      success?: null,
      isContract?: null,
      returnData?: null,
      caller?: null
    ): TransactionFulfilledEventFilter;

    "TransactionPrepared(address,address,bytes32,tuple,address,tuple)"(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      caller?: null,
      args?: null
    ): TransactionPreparedEventFilter;
    TransactionPrepared(
      user?: string | null,
      router?: string | null,
      transactionId?: BytesLike | null,
      txData?: null,
      caller?: null,
      args?: null
    ): TransactionPreparedEventFilter;
  };

  estimateGas: {
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      args: ITransactionManager.CancelArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fulfill(
      args: ITransactionManager.FulfillArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getStoredChainId(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      args: ITransactionManager.PrepareArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityFor(
      amount: BigNumberish,
      assetId: string,
      router: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      args: ITransactionManager.CancelArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fulfill(
      args: ITransactionManager.FulfillArgsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStoredChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      args: ITransactionManager.PrepareArgsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAssetId(
      assetId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
