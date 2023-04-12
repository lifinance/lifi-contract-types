import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace HopFacetOptimized {
    type HopDataStruct = {
        bonderFee: PromiseOrValue<BigNumberish>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        destinationAmountOutMin: PromiseOrValue<BigNumberish>;
        destinationDeadline: PromiseOrValue<BigNumberish>;
        hopBridge: PromiseOrValue<string>;
    };
    type HopDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        bonderFee: BigNumber;
        amountOutMin: BigNumber;
        deadline: BigNumber;
        destinationAmountOutMin: BigNumber;
        destinationDeadline: BigNumber;
        hopBridge: string;
    };
}
export interface PackedEncoderDecoderFacetInterface extends utils.Interface {
    functions: {
        "decode_startBridgeTokensViaCBridgeERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaCBridgeNativePacked(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2ERC20Packed(bytes)": FunctionFragment;
        "decode_startBridgeTokensViaHopL2NativePacked(bytes)": FunctionFragment;
        "encode_startBridgeTokensViaCBridgeERC20Packed(bytes32,string,address,uint64,address,uint256,uint64,uint32)": FunctionFragment;
        "encode_startBridgeTokensViaCBridgeNativePacked(bytes32,string,address,uint64,uint64,uint32)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2ERC20Packed(bytes32,string,address,uint256,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
        "encode_startBridgeTokensViaHopL2NativePacked(bytes32,string,address,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decode_startBridgeTokensViaCBridgeERC20Packed" | "decode_startBridgeTokensViaCBridgeNativePacked" | "decode_startBridgeTokensViaHopL2ERC20Packed" | "decode_startBridgeTokensViaHopL2NativePacked" | "encode_startBridgeTokensViaCBridgeERC20Packed" | "encode_startBridgeTokensViaCBridgeNativePacked" | "encode_startBridgeTokensViaHopL2ERC20Packed" | "encode_startBridgeTokensViaHopL2NativePacked"): FunctionFragment;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaCBridgeNativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaCBridgeERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
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
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2ERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encode_startBridgeTokensViaHopL2NativePacked", data: BytesLike): Result;
    events: {
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
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
export interface PackedEncoderDecoderFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PackedEncoderDecoderFacetInterface;
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
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        CBridgeFacet.CBridgeDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        HopFacetOptimized.HopDataStructOutput
    ]>;
    encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            CBridgeFacet.CBridgeDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            HopFacetOptimized.HopDataStructOutput
        ]>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
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
    };
    estimateGas: {
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decode_startBridgeTokensViaCBridgeERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaCBridgeNativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2ERC20Packed(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode_startBridgeTokensViaHopL2NativePacked(_data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2ERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, minAmount: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encode_startBridgeTokensViaHopL2NativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, bonderFee: PromiseOrValue<BigNumberish>, amountOutMin: PromiseOrValue<BigNumberish>, destinationAmountOutMin: PromiseOrValue<BigNumberish>, hopBridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
