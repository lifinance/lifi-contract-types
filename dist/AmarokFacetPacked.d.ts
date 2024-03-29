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
export declare namespace AmarokFacet {
    type AmarokDataStruct = {
        callData: PromiseOrValue<BytesLike>;
        callTo: PromiseOrValue<string>;
        relayerFee: PromiseOrValue<BigNumberish>;
        slippageTol: PromiseOrValue<BigNumberish>;
        delegate: PromiseOrValue<string>;
        destChainDomainId: PromiseOrValue<BigNumberish>;
        payFeeWithSendingAsset: PromiseOrValue<boolean>;
    };
    type AmarokDataStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        number,
        boolean
    ] & {
        callData: string;
        callTo: string;
        relayerFee: BigNumber;
        slippageTol: BigNumber;
        delegate: string;
        destChainDomainId: number;
        payFeeWithSendingAsset: boolean;
    };
}
export interface AmarokFacetPackedInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(bytes32,address,address,uint256,uint32,uint256,uint256)": FunctionFragment;
        "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(bytes32,address,address,uint256,uint32,uint256)": FunctionFragment;
        "getChainIdForDomain(uint32)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "setApprovalForBridge(address[])": FunctionFragment;
        "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(bytes32,address,address,uint256,uint32,uint256,uint256)": FunctionFragment;
        "startBridgeTokensViaAmarokERC20MinPayFeeWithNative(bytes32,address,address,uint256,uint32,uint256)": FunctionFragment;
        "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset()": FunctionFragment;
        "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset" | "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative" | "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset" | "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative" | "getChainIdForDomain" | "owner" | "pendingOwner" | "setApprovalForBridge" | "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset" | "startBridgeTokensViaAmarokERC20MinPayFeeWithNative" | "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset" | "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getChainIdForDomain", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForBridge", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAmarokERC20MinPayFeeWithNative", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIdForDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAmarokERC20MinPayFeeWithNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "LiFiAmarokTransfer(bytes8)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiAmarokTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface LiFiAmarokTransferEventObject {
    _transactionId: string;
}
export declare type LiFiAmarokTransferEvent = TypedEvent<[
    string
], LiFiAmarokTransferEventObject>;
export declare type LiFiAmarokTransferEventFilter = TypedEventFilter<LiFiAmarokTransferEvent>;
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
export interface AmarokFacetPacked extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AmarokFacetPackedInterface;
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
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AmarokFacet.AmarokDataStructOutput
        ]>;
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AmarokFacet.AmarokDataStructOutput
        ]>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getChainIdForDomain(domainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            chainId: number;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AmarokFacet.AmarokDataStructOutput
    ]>;
    decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        AmarokFacet.AmarokDataStructOutput
    ]>;
    encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getChainIdForDomain(domainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAmarokERC20MinPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AmarokFacet.AmarokDataStructOutput
        ]>;
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            AmarokFacet.AmarokDataStructOutput
        ]>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getChainIdForDomain(domainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(overrides?: CallOverrides): Promise<void>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiAmarokTransfer(bytes8)"(_transactionId?: null): LiFiAmarokTransferEventFilter;
        LiFiAmarokTransfer(_transactionId?: null): LiFiAmarokTransferEventFilter;
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
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getChainIdForDomain(domainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
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
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainIdForDomain(domainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForBridge(tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithAsset(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, relayerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAmarokERC20MinPayFeeWithNative(transactionId: PromiseOrValue<BytesLike>, receiver: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, destChainDomainId: PromiseOrValue<BigNumberish>, slippageTol: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaAmarokERC20PackedPayFeeWithNative(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
