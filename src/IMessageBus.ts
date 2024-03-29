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

export declare namespace MsgDataTypes {
  export type RouteInfoStruct = {
    sender: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    srcChainId: PromiseOrValue<BigNumberish>;
    srcTxHash: PromiseOrValue<BytesLike>;
  };

  export type RouteInfoStructOutput = [string, string, BigNumber, string] & {
    sender: string;
    receiver: string;
    srcChainId: BigNumber;
    srcTxHash: string;
  };

  export type TransferInfoStruct = {
    t: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    wdseq: PromiseOrValue<BigNumberish>;
    srcChainId: PromiseOrValue<BigNumberish>;
    refId: PromiseOrValue<BytesLike>;
    srcTxHash: PromiseOrValue<BytesLike>;
  };

  export type TransferInfoStructOutput = [
    number,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    t: number;
    sender: string;
    receiver: string;
    token: string;
    amount: BigNumber;
    wdseq: BigNumber;
    srcChainId: BigNumber;
    refId: string;
    srcTxHash: string;
  };
}

export interface IMessageBusInterface extends utils.Interface {
  functions: {
    "calcFee(bytes)": FunctionFragment;
    "executeMessage(bytes,(address,address,uint64,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "executeMessageWithTransfer(bytes,(uint8,address,address,address,uint256,uint64,uint64,bytes32,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "executeMessageWithTransferRefund(bytes,(uint8,address,address,address,uint256,uint64,uint64,bytes32,bytes32),bytes[],address[],uint256[])": FunctionFragment;
    "liquidityBridge()": FunctionFragment;
    "pegBridge()": FunctionFragment;
    "pegBridgeV2()": FunctionFragment;
    "pegVault()": FunctionFragment;
    "pegVaultV2()": FunctionFragment;
    "sendMessage(bytes,uint256,bytes)": FunctionFragment;
    "sendMessage(address,uint256,bytes)": FunctionFragment;
    "sendMessageWithTransfer(address,uint256,address,bytes32,bytes)": FunctionFragment;
    "withdrawFee(address,uint256,bytes[],address[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calcFee"
      | "executeMessage"
      | "executeMessageWithTransfer"
      | "executeMessageWithTransferRefund"
      | "liquidityBridge"
      | "pegBridge"
      | "pegBridgeV2"
      | "pegVault"
      | "pegVaultV2"
      | "sendMessage(bytes,uint256,bytes)"
      | "sendMessage(address,uint256,bytes)"
      | "sendMessageWithTransfer"
      | "withdrawFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcFee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessage",
    values: [
      PromiseOrValue<BytesLike>,
      MsgDataTypes.RouteInfoStruct,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [
      PromiseOrValue<BytesLike>,
      MsgDataTypes.TransferInfoStruct,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [
      PromiseOrValue<BytesLike>,
      MsgDataTypes.TransferInfoStruct,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pegBridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pegBridgeV2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pegVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pegVaultV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage(bytes,uint256,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage(address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageWithTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "calcFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pegBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pegBridgeV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pegVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pegVaultV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage(bytes,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage(address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IMessageBus extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMessageBusInterface;

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
    calcFee(
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    executeMessage(
      _message: PromiseOrValue<BytesLike>,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    liquidityBridge(overrides?: CallOverrides): Promise<[string]>;

    pegBridge(overrides?: CallOverrides): Promise<[string]>;

    pegBridgeV2(overrides?: CallOverrides): Promise<[string]>;

    pegVault(overrides?: CallOverrides): Promise<[string]>;

    pegVaultV2(overrides?: CallOverrides): Promise<[string]>;

    "sendMessage(bytes,uint256,bytes)"(
      _receiver: PromiseOrValue<BytesLike>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "sendMessage(address,uint256,bytes)"(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessageWithTransfer(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcBridge: PromiseOrValue<string>,
      _srcTransferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(
      _account: PromiseOrValue<string>,
      _cumulativeFee: PromiseOrValue<BigNumberish>,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  calcFee(
    _message: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executeMessage(
    _message: PromiseOrValue<BytesLike>,
    _route: MsgDataTypes.RouteInfoStruct,
    _sigs: PromiseOrValue<BytesLike>[],
    _signers: PromiseOrValue<string>[],
    _powers: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _message: PromiseOrValue<BytesLike>,
    _transfer: MsgDataTypes.TransferInfoStruct,
    _sigs: PromiseOrValue<BytesLike>[],
    _signers: PromiseOrValue<string>[],
    _powers: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _message: PromiseOrValue<BytesLike>,
    _transfer: MsgDataTypes.TransferInfoStruct,
    _sigs: PromiseOrValue<BytesLike>[],
    _signers: PromiseOrValue<string>[],
    _powers: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  liquidityBridge(overrides?: CallOverrides): Promise<string>;

  pegBridge(overrides?: CallOverrides): Promise<string>;

  pegBridgeV2(overrides?: CallOverrides): Promise<string>;

  pegVault(overrides?: CallOverrides): Promise<string>;

  pegVaultV2(overrides?: CallOverrides): Promise<string>;

  "sendMessage(bytes,uint256,bytes)"(
    _receiver: PromiseOrValue<BytesLike>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "sendMessage(address,uint256,bytes)"(
    _receiver: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessageWithTransfer(
    _receiver: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _srcBridge: PromiseOrValue<string>,
    _srcTransferId: PromiseOrValue<BytesLike>,
    _message: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(
    _account: PromiseOrValue<string>,
    _cumulativeFee: PromiseOrValue<BigNumberish>,
    _sigs: PromiseOrValue<BytesLike>[],
    _signers: PromiseOrValue<string>[],
    _powers: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calcFee(
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeMessage(
      _message: PromiseOrValue<BytesLike>,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeMessageWithTransfer(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeMessageWithTransferRefund(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityBridge(overrides?: CallOverrides): Promise<string>;

    pegBridge(overrides?: CallOverrides): Promise<string>;

    pegBridgeV2(overrides?: CallOverrides): Promise<string>;

    pegVault(overrides?: CallOverrides): Promise<string>;

    pegVaultV2(overrides?: CallOverrides): Promise<string>;

    "sendMessage(bytes,uint256,bytes)"(
      _receiver: PromiseOrValue<BytesLike>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendMessage(address,uint256,bytes)"(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageWithTransfer(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcBridge: PromiseOrValue<string>,
      _srcTransferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFee(
      _account: PromiseOrValue<string>,
      _cumulativeFee: PromiseOrValue<BigNumberish>,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calcFee(
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeMessage(
      _message: PromiseOrValue<BytesLike>,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    liquidityBridge(overrides?: CallOverrides): Promise<BigNumber>;

    pegBridge(overrides?: CallOverrides): Promise<BigNumber>;

    pegBridgeV2(overrides?: CallOverrides): Promise<BigNumber>;

    pegVault(overrides?: CallOverrides): Promise<BigNumber>;

    pegVaultV2(overrides?: CallOverrides): Promise<BigNumber>;

    "sendMessage(bytes,uint256,bytes)"(
      _receiver: PromiseOrValue<BytesLike>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "sendMessage(address,uint256,bytes)"(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessageWithTransfer(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcBridge: PromiseOrValue<string>,
      _srcTransferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFee(
      _account: PromiseOrValue<string>,
      _cumulativeFee: PromiseOrValue<BigNumberish>,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calcFee(
      _message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeMessage(
      _message: PromiseOrValue<BytesLike>,
      _route: MsgDataTypes.RouteInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _message: PromiseOrValue<BytesLike>,
      _transfer: MsgDataTypes.TransferInfoStruct,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    liquidityBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegBridgeV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pegVaultV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sendMessage(bytes,uint256,bytes)"(
      _receiver: PromiseOrValue<BytesLike>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "sendMessage(address,uint256,bytes)"(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageWithTransfer(
      _receiver: PromiseOrValue<string>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _srcBridge: PromiseOrValue<string>,
      _srcTransferId: PromiseOrValue<BytesLike>,
      _message: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(
      _account: PromiseOrValue<string>,
      _cumulativeFee: PromiseOrValue<BigNumberish>,
      _sigs: PromiseOrValue<BytesLike>[],
      _signers: PromiseOrValue<string>[],
      _powers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
