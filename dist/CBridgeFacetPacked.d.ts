import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ILiFi {
    type BridgeDataStruct = {
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
        maxSlippage: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
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
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeNativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaCBridgeERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaCBridgeNativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForBridge", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeNativeMin", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeNativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "triggerRefund", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
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
        "LiFiTransferStarted(tuple)": EventFragment;
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
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CBridgeRefund(address,address,uint256)"(_assetAddress?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, amount?: null): CBridgeRefundEventFilter;
        CBridgeRefund(_assetAddress?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, amount?: null): CBridgeRefundEventFilter;
        "LiFiCBridgeTransfer(bytes8)"(_transactionId?: null): LiFiCBridgeTransferEventFilter;
        LiFiCBridgeTransfer(_transactionId?: null): LiFiCBridgeTransferEventFilter;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        LiFiGenericSwapCompleted(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, receiver?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiGenericSwapCompletedEventFilter;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        LiFiSwappedGeneric(transactionId?: PromiseOrValue<BytesLike> | null, integrator?: null, referrer?: null, fromAssetId?: null, toAssetId?: null, fromAmount?: null, toAmount?: null): LiFiSwappedGenericEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        triggerRefund(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
