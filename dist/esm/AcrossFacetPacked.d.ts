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
export declare namespace AcrossFacet {
    type AcrossDataStruct = {
        relayerFeePct: BigNumberish;
        quoteTimestamp: BigNumberish;
        message: BytesLike;
        maxCount: BigNumberish;
    };
    type AcrossDataStructOutput = [
        BigNumber,
        number,
        string,
        BigNumber
    ] & {
        relayerFeePct: BigNumber;
        quoteTimestamp: number;
        message: string;
        maxCount: BigNumber;
    };
}
export interface AcrossFacetPackedInterface extends utils.Interface {
    functions: {
        "ACROSS_REFERRER_DELIMITER()": FunctionFragment;
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaAcrossERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaAcrossNativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaAcrossERC20Packed(bytes32,address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "encode_startBridgeTokensViaAcrossNativePacked(bytes32,address,uint64,int64,uint32,uint256,bytes)": FunctionFragment;
        "executeCallAndWithdraw(address,bytes,address,address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForBridge(address[])": FunctionFragment;
        "startBridgeTokensViaAcrossERC20Min(bytes32,address,uint256,address,uint64,int64,uint32,bytes,uint256)": FunctionFragment;
        "startBridgeTokensViaAcrossERC20Packed()": FunctionFragment;
        "startBridgeTokensViaAcrossNativeMin(bytes32,address,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "startBridgeTokensViaAcrossNativePacked()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ACROSS_REFERRER_DELIMITER" | "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaAcrossERC20Packed" | "decode_startBridgeTokensViaAcrossNativePacked" | "encode_startBridgeTokensViaAcrossERC20Packed" | "encode_startBridgeTokensViaAcrossNativePacked" | "executeCallAndWithdraw" | "owner" | "pendingOwner" | "setApprovalForBridge" | "startBridgeTokensViaAcrossERC20Min" | "startBridgeTokensViaAcrossERC20Packed" | "startBridgeTokensViaAcrossNativeMin" | "startBridgeTokensViaAcrossNativePacked" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "ACROSS_REFERRER_DELIMITER", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAcrossERC20Packed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAcrossNativePacked", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAcrossERC20Packed", values: [
        BytesLike,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAcrossNativePacked", values: [
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "executeCallAndWithdraw", values: [string, BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForBridge", values: [string[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossERC20Min", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossNativeMin", values: [
        BytesLike,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossNativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "ACROSS_REFERRER_DELIMITER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAcrossERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAcrossNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAcrossERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAcrossNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeCallAndWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossNativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "CallExecutedAndFundsWithdrawn()": EventFragment;
        "LiFiAcrossTransfer(bytes8)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallExecutedAndFundsWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiAcrossTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface CallExecutedAndFundsWithdrawnEventObject {
}
export type CallExecutedAndFundsWithdrawnEvent = TypedEvent<[
], CallExecutedAndFundsWithdrawnEventObject>;
export type CallExecutedAndFundsWithdrawnEventFilter = TypedEventFilter<CallExecutedAndFundsWithdrawnEvent>;
export interface LiFiAcrossTransferEventObject {
    _transactionId: string;
}
export type LiFiAcrossTransferEvent = TypedEvent<[
    string
], LiFiAcrossTransferEventObject>;
export type LiFiAcrossTransferEventFilter = TypedEventFilter<LiFiAcrossTransferEvent>;
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
export interface AcrossFacetPacked extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossFacetPackedInterface;
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
        ACROSS_REFERRER_DELIMITER(overrides?: CallOverrides): Promise<[string]>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decode_startBridgeTokensViaAcrossERC20Packed(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacet.AcrossDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacet.AcrossDataStructOutput;
        }>;
        decode_startBridgeTokensViaAcrossNativePacked(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacet.AcrossDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacet.AcrossDataStructOutput;
        }>;
        encode_startBridgeTokensViaAcrossERC20Packed(transactionId: BytesLike, receiver: string, sendingAssetId: string, minAmount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaAcrossNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, maxCount: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossERC20Min(transactionId: BytesLike, sendingAssetId: string, minAmount: BigNumberish, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    ACROSS_REFERRER_DELIMITER(overrides?: CallOverrides): Promise<string>;
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaAcrossERC20Packed(data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AcrossFacet.AcrossDataStructOutput
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        acrossData: AcrossFacet.AcrossDataStructOutput;
    }>;
    decode_startBridgeTokensViaAcrossNativePacked(data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AcrossFacet.AcrossDataStructOutput
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        acrossData: AcrossFacet.AcrossDataStructOutput;
    }>;
    encode_startBridgeTokensViaAcrossERC20Packed(transactionId: BytesLike, receiver: string, sendingAssetId: string, minAmount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaAcrossNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, maxCount: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<string>;
    executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossERC20Min(transactionId: BytesLike, sendingAssetId: string, minAmount: BigNumberish, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossERC20Packed(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossNativePacked(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        ACROSS_REFERRER_DELIMITER(overrides?: CallOverrides): Promise<string>;
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaAcrossERC20Packed(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacet.AcrossDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacet.AcrossDataStructOutput;
        }>;
        decode_startBridgeTokensViaAcrossNativePacked(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacet.AcrossDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacet.AcrossDataStructOutput;
        }>;
        encode_startBridgeTokensViaAcrossERC20Packed(transactionId: BytesLike, receiver: string, sendingAssetId: string, minAmount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaAcrossNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, maxCount: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<string>;
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossERC20Min(transactionId: BytesLike, sendingAssetId: string, minAmount: BigNumberish, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossNativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallExecutedAndFundsWithdrawn()"(): CallExecutedAndFundsWithdrawnEventFilter;
        CallExecutedAndFundsWithdrawn(): CallExecutedAndFundsWithdrawnEventFilter;
        "LiFiAcrossTransfer(bytes8)"(_transactionId?: null): LiFiAcrossTransferEventFilter;
        LiFiAcrossTransfer(_transactionId?: null): LiFiAcrossTransferEventFilter;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: BytesLike | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
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
        ACROSS_REFERRER_DELIMITER(overrides?: CallOverrides): Promise<BigNumber>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decode_startBridgeTokensViaAcrossERC20Packed(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaAcrossNativePacked(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAcrossERC20Packed(transactionId: BytesLike, receiver: string, sendingAssetId: string, minAmount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAcrossNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, maxCount: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossERC20Min(transactionId: BytesLike, sendingAssetId: string, minAmount: BigNumberish, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ACROSS_REFERRER_DELIMITER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaAcrossERC20Packed(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaAcrossNativePacked(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAcrossERC20Packed(transactionId: BytesLike, receiver: string, sendingAssetId: string, minAmount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAcrossNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, maxCount: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeCallAndWithdraw(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossERC20Min(transactionId: BytesLike, sendingAssetId: string, minAmount: BigNumberish, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossERC20Packed(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
