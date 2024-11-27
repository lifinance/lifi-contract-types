import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ILiFi {
    type BridgeDataStruct = {
        transactionId: BytesLike;
        bridge: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receiver: string;
        minAmount: BigNumberish;
        destinationChainId: BigNumberish;
        hasSourceSwaps: boolean;
        hasDestinationCall: boolean;
    };
    type BridgeDataStructOutput = [
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
export declare namespace HopFacetOptimized {
    type HopDataStruct = {
        bonderFee: BigNumberish;
        amountOutMin: BigNumberish;
        deadline: BigNumberish;
        destinationAmountOutMin: BigNumberish;
        destinationDeadline: BigNumberish;
        hopBridge: string;
        relayer: string;
        relayerFee: BigNumberish;
        nativeFee: BigNumberish;
    };
    type HopDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        bonderFee: BigNumber;
        amountOutMin: BigNumber;
        deadline: BigNumber;
        destinationAmountOutMin: BigNumber;
        destinationDeadline: BigNumber;
        hopBridge: string;
        relayer: string;
        relayerFee: BigNumber;
        nativeFee: BigNumber;
    };
}
export interface HopFacetPackedInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaHopL1ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL1NativePacked(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2NativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaHopL1ERC20Packed(bytes8,address,uint256,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL1NativePacked(bytes8,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2ERC20Packed(bytes32,address,uint256,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2NativePacked(bytes8,address,uint256,uint256,uint256)": FunctionFragment;
        "nativeBridge()": FunctionFragment;
        "nativeExchangeAddress()": FunctionFragment;
        "nativeHToken()": FunctionFragment;
        "nativeL2CanonicalToken()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForHopBridges(address[],address[])": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20Min(bytes8,address,uint256,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaHopL1NativeMin(bytes8,address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL1NativePacked()": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Min(bytes8,address,uint256,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaHopL2NativeMin(bytes8,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "startBridgeTokensViaHopL2NativePacked()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaHopL1ERC20Packed" | "decode_startBridgeTokensViaHopL1NativePacked" | "decode_startBridgeTokensViaHopL2ERC20Packed" | "decode_startBridgeTokensViaHopL2NativePacked" | "encode_startBridgeTokensViaHopL1ERC20Packed" | "encode_startBridgeTokensViaHopL1NativePacked" | "encode_startBridgeTokensViaHopL2ERC20Packed" | "encode_startBridgeTokensViaHopL2NativePacked" | "nativeBridge" | "nativeExchangeAddress" | "nativeHToken" | "nativeL2CanonicalToken" | "owner" | "pendingOwner" | "setApprovalForHopBridges" | "startBridgeTokensViaHopL1ERC20Min" | "startBridgeTokensViaHopL1ERC20Packed" | "startBridgeTokensViaHopL1NativeMin" | "startBridgeTokensViaHopL1NativePacked" | "startBridgeTokensViaHopL2ERC20Min" | "startBridgeTokensViaHopL2ERC20Packed" | "startBridgeTokensViaHopL2NativeMin" | "startBridgeTokensViaHopL2NativePacked" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL1ERC20Packed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL1NativePacked", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL1ERC20Packed", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL1NativePacked", values: [
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nativeBridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeExchangeAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeHToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeL2CanonicalToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForHopBridges", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20Min", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1NativeMin", values: [
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1NativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20Min", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2NativeMin", values: [
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2NativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeExchangeAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeHToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeL2CanonicalToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForHopBridges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiHopTransfer(bytes8)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiHopTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiHopTransferEventObject {
    _transactionId: string;
}
export type LiFiHopTransferEvent = TypedEvent<[
    string
], LiFiHopTransferEventObject>;
export type LiFiHopTransferEventFilter = TypedEventFilter<LiFiHopTransferEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface HopFacetPacked extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HopFacetPackedInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, wrapper: string, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        nativeBridge(overrides?: CallOverrides): Promise<[string]>;
        nativeExchangeAddress(overrides?: CallOverrides): Promise<[string]>;
        nativeHToken(overrides?: CallOverrides): Promise<[string]>;
        nativeL2CanonicalToken(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForHopBridges(bridges: string[], tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaHopL1ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL1NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL1NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, wrapper: string, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, overrides?: CallOverrides): Promise<string>;
    nativeBridge(overrides?: CallOverrides): Promise<string>;
    nativeExchangeAddress(overrides?: CallOverrides): Promise<string>;
    nativeHToken(overrides?: CallOverrides): Promise<string>;
    nativeL2CanonicalToken(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForHopBridges(bridges: string[], tokensToApprove: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, wrapper: string, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, overrides?: CallOverrides): Promise<string>;
        nativeBridge(overrides?: CallOverrides): Promise<string>;
        nativeExchangeAddress(overrides?: CallOverrides): Promise<string>;
        nativeHToken(overrides?: CallOverrides): Promise<string>;
        nativeL2CanonicalToken(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForHopBridges(bridges: string[], tokensToApprove: string[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1NativePacked(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2NativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        "LiFiHopTransfer(bytes8)"(_transactionId?: null): LiFiHopTransferEventFilter;
        LiFiHopTransfer(_transactionId?: null): LiFiHopTransferEventFilter;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        LiFiSwappedGeneric(transactionId?: BytesLike | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: string | null, _to?: string | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, wrapper: string, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        nativeBridge(overrides?: CallOverrides): Promise<BigNumber>;
        nativeExchangeAddress(overrides?: CallOverrides): Promise<BigNumber>;
        nativeHToken(overrides?: CallOverrides): Promise<BigNumber>;
        nativeL2CanonicalToken(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForHopBridges(bridges: string[], tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL1ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL1NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL1ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL1NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, wrapper: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeExchangeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeHToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nativeL2CanonicalToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForHopBridges(bridges: string[], tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, destinationAmountOutMin: BigNumberish, relayer: string, relayerFee: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, hopBridge: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2NativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
