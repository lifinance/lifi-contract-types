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
export declare namespace CBridgeFacet {
    type CBridgeDataStruct = {
        maxSlippage: BigNumberish;
        nonce: BigNumberish;
    };
    type CBridgeDataStructOutput = [number, BigNumber] & {
        maxSlippage: number;
        nonce: BigNumber;
    };
}
export interface CBridgeFacetPackedInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaCBridgeERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaCBridgeNativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaCBridgeERC20Packed(bytes32,address,uint64,address,uint256,uint64,uint32)": FunctionFragment;
        "encode_startBridgeTokensViaCBridgeNativePacked(bytes32,address,uint64,uint64,uint32)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForBridge(address[])": FunctionFragment;
        "startBridgeTokensViaCBridgeERC20Min(bytes32,address,uint64,address,uint256,uint64,uint32)": FunctionFragment;
        "startBridgeTokensViaCBridgeERC20Packed()": FunctionFragment;
        "startBridgeTokensViaCBridgeNativeMin(bytes32,address,uint64,uint64,uint32)": FunctionFragment;
        "startBridgeTokensViaCBridgeNativePacked()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "triggerRefund(address,bytes,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaCBridgeERC20Packed" | "decode_startBridgeTokensViaCBridgeNativePacked" | "encode_startBridgeTokensViaCBridgeERC20Packed" | "encode_startBridgeTokensViaCBridgeNativePacked" | "owner" | "pendingOwner" | "setApprovalForBridge" | "startBridgeTokensViaCBridgeERC20Min" | "startBridgeTokensViaCBridgeERC20Packed" | "startBridgeTokensViaCBridgeNativeMin" | "startBridgeTokensViaCBridgeNativePacked" | "transferOwnership" | "triggerRefund"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeERC20Packed", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeNativePacked", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaCBridgeERC20Packed", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaCBridgeNativePacked", values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForBridge", values: [string[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeERC20Min", values: [
        BytesLike,
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeNativeMin", values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeNativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "triggerRefund", values: [string, BytesLike, string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeNativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerRefund", data: BytesLike): Result;
    events: {
        "CBridgeRefund(address,address,uint256)": EventFragment;
        "LiFiCBridgeTransfer(bytes8)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted((bytes32,string,string,address,address,address,uint256,uint256,bool,bool))": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CBridgeRefund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiCBridgeTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface CBridgeRefundEventObject {
    _assetAddress: string;
    _to: string;
    amount: BigNumber;
}
export type CBridgeRefundEvent = TypedEvent<[
    string,
    string,
    BigNumber
], CBridgeRefundEventObject>;
export type CBridgeRefundEventFilter = TypedEventFilter<CBridgeRefundEvent>;
export interface LiFiCBridgeTransferEventObject {
    _transactionId: string;
}
export type LiFiCBridgeTransferEvent = TypedEvent<[
    string
], LiFiCBridgeTransferEventObject>;
export type LiFiCBridgeTransferEventFilter = TypedEventFilter<LiFiCBridgeTransferEvent>;
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
export interface CBridgeFacetPacked extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CBridgeFacetPackedInterface;
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
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, amount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        triggerRefund(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaCBridgeERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    decode_startBridgeTokensViaCBridgeNativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaCBridgeNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, amount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    triggerRefund(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, amount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        triggerRefund(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CBridgeRefund(address,address,uint256)"(_assetAddress?: string | null, _to?: string | null, amount?: null): CBridgeRefundEventFilter;
        CBridgeRefund(_assetAddress?: string | null, _to?: string | null, amount?: null): CBridgeRefundEventFilter;
        "LiFiCBridgeTransfer(bytes8)"(_transactionId?: null): LiFiCBridgeTransferEventFilter;
        LiFiCBridgeTransfer(_transactionId?: null): LiFiCBridgeTransferEventFilter;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, amount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        triggerRefund(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
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
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, minAmount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForBridge(tokensToApprove: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, sendingAssetId: string, amount: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: BytesLike, receiver: string, destinationChainId: BigNumberish, nonce: BigNumberish, maxSlippage: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        triggerRefund(_callTo: string, _callData: BytesLike, _assetAddress: string, _to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
