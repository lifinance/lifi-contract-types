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
export declare namespace AcrossFacetV3 {
    type AcrossV3DataStruct = {
        receiverAddress: PromiseOrValue<string>;
        refundAddress: PromiseOrValue<string>;
        receivingAssetId: PromiseOrValue<string>;
        outputAmount: PromiseOrValue<BigNumberish>;
        exclusiveRelayer: PromiseOrValue<string>;
        quoteTimestamp: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        exclusivityDeadline: PromiseOrValue<BigNumberish>;
        message: PromiseOrValue<BytesLike>;
    };
    type AcrossV3DataStructOutput = [
        string,
        string,
        string,
        BigNumber,
        string,
        number,
        number,
        number,
        string
    ] & {
        receiverAddress: string;
        refundAddress: string;
        receivingAssetId: string;
        outputAmount: BigNumber;
        exclusiveRelayer: string;
        quoteTimestamp: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
    };
}
export declare namespace AcrossFacetPackedV3 {
    type PackedParametersStruct = {
        transactionId: PromiseOrValue<BytesLike>;
        receiver: PromiseOrValue<string>;
        destinationChainId: PromiseOrValue<BigNumberish>;
        receivingAssetId: PromiseOrValue<string>;
        outputAmount: PromiseOrValue<BigNumberish>;
        exclusiveRelayer: PromiseOrValue<string>;
        quoteTimestamp: PromiseOrValue<BigNumberish>;
        fillDeadline: PromiseOrValue<BigNumberish>;
        exclusivityDeadline: PromiseOrValue<BigNumberish>;
        message: PromiseOrValue<BytesLike>;
    };
    type PackedParametersStructOutput = [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        string,
        number,
        number,
        number,
        string
    ] & {
        transactionId: string;
        receiver: string;
        destinationChainId: BigNumber;
        receivingAssetId: string;
        outputAmount: BigNumber;
        exclusiveRelayer: string;
        quoteTimestamp: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
    };
}
export interface AcrossFacetPackedV3Interface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaAcrossV3ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaAcrossV3NativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaAcrossV3ERC20Packed((bytes32,address,uint64,address,uint256,address,uint32,uint32,uint32,bytes),address,uint256)": FunctionFragment;
        "encode_startBridgeTokensViaAcrossV3NativePacked((bytes32,address,uint64,address,uint256,address,uint32,uint32,uint32,bytes))": FunctionFragment;
        "executeCallAndWithdraw(address,bytes,address,address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForBridge(address[])": FunctionFragment;
        "spokePool()": FunctionFragment;
        "startBridgeTokensViaAcrossV3ERC20Min((bytes32,address,uint64,address,uint256,address,uint32,uint32,uint32,bytes),address,uint256)": FunctionFragment;
        "startBridgeTokensViaAcrossV3ERC20Packed()": FunctionFragment;
        "startBridgeTokensViaAcrossV3NativeMin((bytes32,address,uint64,address,uint256,address,uint32,uint32,uint32,bytes))": FunctionFragment;
        "startBridgeTokensViaAcrossV3NativePacked()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "wrappedNative()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaAcrossV3ERC20Packed" | "decode_startBridgeTokensViaAcrossV3NativePacked" | "encode_startBridgeTokensViaAcrossV3ERC20Packed" | "encode_startBridgeTokensViaAcrossV3NativePacked" | "executeCallAndWithdraw" | "owner" | "pendingOwner" | "setApprovalForBridge" | "spokePool" | "startBridgeTokensViaAcrossV3ERC20Min" | "startBridgeTokensViaAcrossV3ERC20Packed" | "startBridgeTokensViaAcrossV3NativeMin" | "startBridgeTokensViaAcrossV3NativePacked" | "transferOwnership" | "wrappedNative"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAcrossV3ERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAcrossV3NativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAcrossV3ERC20Packed", values: [
        AcrossFacetPackedV3.PackedParametersStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAcrossV3NativePacked", values: [AcrossFacetPackedV3.PackedParametersStruct]): string;
    encodeFunctionData(functionFragment: "executeCallAndWithdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForBridge", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "spokePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossV3ERC20Min", values: [
        AcrossFacetPackedV3.PackedParametersStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossV3ERC20Packed", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossV3NativeMin", values: [AcrossFacetPackedV3.PackedParametersStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAcrossV3NativePacked", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "wrappedNative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAcrossV3ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAcrossV3NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAcrossV3ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAcrossV3NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeCallAndWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "spokePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossV3ERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossV3ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossV3NativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAcrossV3NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedNative", data: BytesLike): Result;
    events: {
        "CallExecutedAndFundsWithdrawn()": EventFragment;
        "LiFiAcrossTransfer(bytes8)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
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
export declare type CallExecutedAndFundsWithdrawnEvent = TypedEvent<[
], CallExecutedAndFundsWithdrawnEventObject>;
export declare type CallExecutedAndFundsWithdrawnEventFilter = TypedEventFilter<CallExecutedAndFundsWithdrawnEvent>;
export interface LiFiAcrossTransferEventObject {
    _transactionId: string;
}
export declare type LiFiAcrossTransferEvent = TypedEvent<[
    string
], LiFiAcrossTransferEventObject>;
export declare type LiFiAcrossTransferEventFilter = TypedEventFilter<LiFiAcrossTransferEvent>;
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
export declare type LiFiGenericSwapCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiGenericSwapCompletedEventObject>;
export declare type LiFiGenericSwapCompletedEventFilter = TypedEventFilter<LiFiGenericSwapCompletedEvent>;
export interface LiFiSwappedGenericEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    fromAssetId: string;
    toAssetId: string;
    fromAmount: BigNumber;
    toAmount: BigNumber;
}
export declare type LiFiSwappedGenericEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiSwappedGenericEventObject>;
export declare type LiFiSwappedGenericEventFilter = TypedEventFilter<LiFiSwappedGenericEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export declare type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferRecoveredEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferRecoveredEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferRecoveredEventObject>;
export declare type LiFiTransferRecoveredEventFilter = TypedEventFilter<LiFiTransferRecoveredEvent>;
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export declare type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export declare type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface AcrossFacetPackedV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AcrossFacetPackedV3Interface;
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
        decode_startBridgeTokensViaAcrossV3ERC20Packed(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacetV3.AcrossV3DataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
        }>;
        decode_startBridgeTokensViaAcrossV3NativePacked(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacetV3.AcrossV3DataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
        }>;
        encode_startBridgeTokensViaAcrossV3ERC20Packed(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaAcrossV3NativePacked(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<[string]>;
        executeCallAndWithdraw(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        spokePool(overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaAcrossV3ERC20Min(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossV3ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossV3NativeMin(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAcrossV3NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<[string]>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaAcrossV3ERC20Packed(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AcrossFacetV3.AcrossV3DataStructOutput
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
    }>;
    decode_startBridgeTokensViaAcrossV3NativePacked(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AcrossFacetV3.AcrossV3DataStructOutput
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
    }>;
    encode_startBridgeTokensViaAcrossV3ERC20Packed(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaAcrossV3NativePacked(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<string>;
    executeCallAndWithdraw(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    spokePool(overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaAcrossV3ERC20Min(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossV3ERC20Packed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossV3NativeMin(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAcrossV3NativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wrappedNative(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaAcrossV3ERC20Packed(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacetV3.AcrossV3DataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
        }>;
        decode_startBridgeTokensViaAcrossV3NativePacked(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AcrossFacetV3.AcrossV3DataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            acrossData: AcrossFacetV3.AcrossV3DataStructOutput;
        }>;
        encode_startBridgeTokensViaAcrossV3ERC20Packed(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaAcrossV3NativePacked(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<string>;
        executeCallAndWithdraw(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        spokePool(overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaAcrossV3ERC20Min(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossV3ERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossV3NativeMin(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAcrossV3NativePacked(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        wrappedNative(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CallExecutedAndFundsWithdrawn()"(): CallExecutedAndFundsWithdrawnEventFilter;
        CallExecutedAndFundsWithdrawn(): CallExecutedAndFundsWithdrawnEventFilter;
        "LiFiAcrossTransfer(bytes8)"(_transactionId?: null): LiFiAcrossTransferEventFilter;
        LiFiAcrossTransfer(_transactionId?: null): LiFiAcrossTransferEventFilter;
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
        decode_startBridgeTokensViaAcrossV3ERC20Packed(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaAcrossV3NativePacked(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAcrossV3ERC20Packed(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAcrossV3NativePacked(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<BigNumber>;
        executeCallAndWithdraw(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        spokePool(overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaAcrossV3ERC20Min(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossV3ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossV3NativeMin(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAcrossV3NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wrappedNative(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaAcrossV3ERC20Packed(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaAcrossV3NativePacked(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAcrossV3ERC20Packed(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAcrossV3NativePacked(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeCallAndWithdraw(_callTo: PromiseOrValue<string>, _callData: PromiseOrValue<BytesLike>, _assetAddress: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        spokePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossV3ERC20Min(_parameters: AcrossFacetPackedV3.PackedParametersStruct, sendingAssetId: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossV3ERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossV3NativeMin(_parameters: AcrossFacetPackedV3.PackedParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAcrossV3NativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wrappedNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}