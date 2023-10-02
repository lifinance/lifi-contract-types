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
export declare namespace OFTWrapperFacet {
    type ChainIdConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        layerZeroChainId: PromiseOrValue<BigNumberish>;
    };
    type ChainIdConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        layerZeroChainId: number;
    };
    type WhitelistConfigStruct = {
        contractAddress: PromiseOrValue<string>;
        whitelisted: PromiseOrValue<boolean>;
    };
    type WhitelistConfigStructOutput = [string, boolean] & {
        contractAddress: string;
        whitelisted: boolean;
    };
    type OftFeeEstimateStruct = {
        nativeFee: PromiseOrValue<BigNumberish>;
        zroFee: PromiseOrValue<BigNumberish>;
    };
    type OftFeeEstimateStructOutput = [BigNumber, BigNumber] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    };
    type OFTWrapperDataStruct = {
        proxyOftAddress: PromiseOrValue<string>;
        receiver: PromiseOrValue<BytesLike>;
        minAmount: PromiseOrValue<BigNumberish>;
        lzFee: PromiseOrValue<BigNumberish>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
        feeObj: IOFTWrapper.FeeObjStruct;
        customCode_sendTokensCallData: PromiseOrValue<BytesLike>;
        customCode_approveTo: PromiseOrValue<string>;
    };
    type OFTWrapperDataStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        IOFTWrapper.FeeObjStructOutput,
        string,
        string
    ] & {
        proxyOftAddress: string;
        receiver: string;
        minAmount: BigNumber;
        lzFee: BigNumber;
        zroPaymentAddress: string;
        adapterParams: string;
        feeObj: IOFTWrapper.FeeObjStructOutput;
        customCode_sendTokensCallData: string;
        customCode_approveTo: string;
    };
}
export declare namespace IOFTWrapper {
    type FeeObjStruct = {
        callerBps: PromiseOrValue<BigNumberish>;
        caller: PromiseOrValue<string>;
        partnerId: PromiseOrValue<BytesLike>;
    };
    type FeeObjStructOutput = [BigNumber, string, string] & {
        callerBps: BigNumber;
        caller: string;
        partnerId: string;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: PromiseOrValue<string>;
        approveTo: PromiseOrValue<string>;
        sendingAssetId: PromiseOrValue<string>;
        receivingAssetId: PromiseOrValue<string>;
        fromAmount: PromiseOrValue<BigNumberish>;
        callData: PromiseOrValue<BytesLike>;
        requiresDeposit: PromiseOrValue<boolean>;
    };
    type SwapDataStructOutput = [
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
export interface OFTWrapperFacetInterface extends utils.Interface {
    functions: {
        "INTERFACE_ID_IOFTCore()": FunctionFragment;
        "INTERFACE_ID_IOFTV2()": FunctionFragment;
        "INTERFACE_ID_IOFTWithFee()": FunctionFragment;
        "batchWhitelist((address,bool)[])": FunctionFragment;
        "determineOFTBridgeSendFunction(address,bool)": FunctionFragment;
        "estimateOFTFees(address,uint256,uint256,bytes32,bool,bytes,bytes)": FunctionFragment;
        "getOFTLayerZeroChainId(uint256)": FunctionFragment;
        "initOFTWrapper((uint256,uint16)[],(address,bool)[])": FunctionFragment;
        "isOftV1(address)": FunctionFragment;
        "isOftV2(address)": FunctionFragment;
        "isOftV2WithFee(address)": FunctionFragment;
        "setOFTLayerZeroChainId(uint256,uint16)": FunctionFragment;
        "startBridgeTokensViaCustomCodeOFT((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "startBridgeTokensViaOFTWrapperV1((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "startBridgeTokensViaOFTWrapperV2((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "startBridgeTokensViaOFTWrapperV2WithFee((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaCustomCodeOFT((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaOFTWrapperV1((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaOFTWrapperV2((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaOFTWrapperV2WithFee((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(address,bytes32,uint256,uint256,address,bytes,(uint256,address,bytes2),bytes,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "INTERFACE_ID_IOFTCore" | "INTERFACE_ID_IOFTV2" | "INTERFACE_ID_IOFTWithFee" | "batchWhitelist" | "determineOFTBridgeSendFunction" | "estimateOFTFees" | "getOFTLayerZeroChainId" | "initOFTWrapper" | "isOftV1" | "isOftV2" | "isOftV2WithFee" | "setOFTLayerZeroChainId" | "startBridgeTokensViaCustomCodeOFT" | "startBridgeTokensViaOFTWrapperV1" | "startBridgeTokensViaOFTWrapperV2" | "startBridgeTokensViaOFTWrapperV2WithFee" | "swapAndStartBridgeTokensViaCustomCodeOFT" | "swapAndStartBridgeTokensViaOFTWrapperV1" | "swapAndStartBridgeTokensViaOFTWrapperV2" | "swapAndStartBridgeTokensViaOFTWrapperV2WithFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "INTERFACE_ID_IOFTCore", values?: undefined): string;
    encodeFunctionData(functionFragment: "INTERFACE_ID_IOFTV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "INTERFACE_ID_IOFTWithFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchWhitelist", values: [OFTWrapperFacet.WhitelistConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "determineOFTBridgeSendFunction", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "estimateOFTFees", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getOFTLayerZeroChainId", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initOFTWrapper", values: [
        OFTWrapperFacet.ChainIdConfigStruct[],
        OFTWrapperFacet.WhitelistConfigStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "isOftV1", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOftV2", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOftV2WithFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOFTLayerZeroChainId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCustomCodeOFT", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOFTWrapperV1", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOFTWrapperV2", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaOFTWrapperV2WithFee", values: [ILiFi.BridgeDataStruct, OFTWrapperFacet.OFTWrapperDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaCustomCodeOFT", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OFTWrapperFacet.OFTWrapperDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV1", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OFTWrapperFacet.OFTWrapperDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV2", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OFTWrapperFacet.OFTWrapperDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV2WithFee", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        OFTWrapperFacet.OFTWrapperDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "INTERFACE_ID_IOFTCore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INTERFACE_ID_IOFTV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INTERFACE_ID_IOFTWithFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "determineOFTBridgeSendFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateOFTFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOFTLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initOFTWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOftV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOftV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOftV2WithFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOFTLayerZeroChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCustomCodeOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOFTWrapperV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOFTWrapperV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaOFTWrapperV2WithFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaCustomCodeOFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaOFTWrapperV2WithFee", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint16,bytes32)": EventFragment;
        "LayerZeroChainIdSet(uint256,uint16)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "OFTWrapperInitialized(tuple[])": EventFragment;
        "WhitelistUpdated(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LayerZeroChainIdSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OFTWrapperInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
}
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    layerZeroChainId: number;
    receiver: string;
}
export declare type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    number,
    string
], BridgeToNonEVMChainEventObject>;
export declare type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
export interface LayerZeroChainIdSetEventObject {
    chainId: BigNumber;
    layerZeroChainId: number;
}
export declare type LayerZeroChainIdSetEvent = TypedEvent<[
    BigNumber,
    number
], LayerZeroChainIdSetEventObject>;
export declare type LayerZeroChainIdSetEventFilter = TypedEventFilter<LayerZeroChainIdSetEvent>;
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
export interface OFTWrapperInitializedEventObject {
    chainIdConfigs: OFTWrapperFacet.ChainIdConfigStructOutput[];
}
export declare type OFTWrapperInitializedEvent = TypedEvent<[
    OFTWrapperFacet.ChainIdConfigStructOutput[]
], OFTWrapperInitializedEventObject>;
export declare type OFTWrapperInitializedEventFilter = TypedEventFilter<OFTWrapperInitializedEvent>;
export interface WhitelistUpdatedEventObject {
    whitelistConfigs: OFTWrapperFacet.WhitelistConfigStructOutput[];
}
export declare type WhitelistUpdatedEvent = TypedEvent<[
    OFTWrapperFacet.WhitelistConfigStructOutput[]
], WhitelistUpdatedEventObject>;
export declare type WhitelistUpdatedEventFilter = TypedEventFilter<WhitelistUpdatedEvent>;
export interface OFTWrapperFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OFTWrapperFacetInterface;
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
        INTERFACE_ID_IOFTCore(overrides?: CallOverrides): Promise<[string]>;
        INTERFACE_ID_IOFTV2(overrides?: CallOverrides): Promise<[string]>;
        INTERFACE_ID_IOFTWithFee(overrides?: CallOverrides): Promise<[string]>;
        batchWhitelist(configs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        determineOFTBridgeSendFunction(_sendingAssetId: PromiseOrValue<string>, _withSrcSwap: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string] & {
            bridgeFunctionSelector: string;
        }>;
        estimateOFTFees(_sendingAssetId: PromiseOrValue<string>, _destinationChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _customCodeCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            OFTWrapperFacet.OftFeeEstimateStructOutput
        ] & {
            feeEstimate: OFTWrapperFacet.OftFeeEstimateStructOutput;
        }>;
        getOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            layerZeroChainId: number;
        }>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], whitelistConfigs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isOftV1(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOftV2(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOftV2WithFee(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    INTERFACE_ID_IOFTCore(overrides?: CallOverrides): Promise<string>;
    INTERFACE_ID_IOFTV2(overrides?: CallOverrides): Promise<string>;
    INTERFACE_ID_IOFTWithFee(overrides?: CallOverrides): Promise<string>;
    batchWhitelist(configs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    determineOFTBridgeSendFunction(_sendingAssetId: PromiseOrValue<string>, _withSrcSwap: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    estimateOFTFees(_sendingAssetId: PromiseOrValue<string>, _destinationChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _customCodeCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OFTWrapperFacet.OftFeeEstimateStructOutput>;
    getOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], whitelistConfigs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isOftV1(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOftV2(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOftV2WithFee(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        INTERFACE_ID_IOFTCore(overrides?: CallOverrides): Promise<string>;
        INTERFACE_ID_IOFTV2(overrides?: CallOverrides): Promise<string>;
        INTERFACE_ID_IOFTWithFee(overrides?: CallOverrides): Promise<string>;
        batchWhitelist(configs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: CallOverrides): Promise<void>;
        determineOFTBridgeSendFunction(_sendingAssetId: PromiseOrValue<string>, _withSrcSwap: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        estimateOFTFees(_sendingAssetId: PromiseOrValue<string>, _destinationChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _customCodeCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OFTWrapperFacet.OftFeeEstimateStructOutput>;
        getOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], whitelistConfigs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: CallOverrides): Promise<void>;
        isOftV1(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOftV2(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOftV2WithFee(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint16,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, layerZeroChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, layerZeroChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "LayerZeroChainIdSet(uint256,uint16)"(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
        LayerZeroChainIdSet(chainId?: PromiseOrValue<BigNumberish> | null, layerZeroChainId?: null): LayerZeroChainIdSetEventFilter;
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
        "OFTWrapperInitialized(tuple[])"(chainIdConfigs?: null): OFTWrapperInitializedEventFilter;
        OFTWrapperInitialized(chainIdConfigs?: null): OFTWrapperInitializedEventFilter;
        "WhitelistUpdated(tuple[])"(whitelistConfigs?: null): WhitelistUpdatedEventFilter;
        WhitelistUpdated(whitelistConfigs?: null): WhitelistUpdatedEventFilter;
    };
    estimateGas: {
        INTERFACE_ID_IOFTCore(overrides?: CallOverrides): Promise<BigNumber>;
        INTERFACE_ID_IOFTV2(overrides?: CallOverrides): Promise<BigNumber>;
        INTERFACE_ID_IOFTWithFee(overrides?: CallOverrides): Promise<BigNumber>;
        batchWhitelist(configs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        determineOFTBridgeSendFunction(_sendingAssetId: PromiseOrValue<string>, _withSrcSwap: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateOFTFees(_sendingAssetId: PromiseOrValue<string>, _destinationChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _customCodeCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], whitelistConfigs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isOftV1(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOftV2(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOftV2WithFee(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        INTERFACE_ID_IOFTCore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INTERFACE_ID_IOFTV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INTERFACE_ID_IOFTWithFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchWhitelist(configs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        determineOFTBridgeSendFunction(_sendingAssetId: PromiseOrValue<string>, _withSrcSwap: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateOFTFees(_sendingAssetId: PromiseOrValue<string>, _destinationChainId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _receiver: PromiseOrValue<BytesLike>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, _customCodeCallData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initOFTWrapper(chainIdConfigs: OFTWrapperFacet.ChainIdConfigStruct[], whitelistConfigs: OFTWrapperFacet.WhitelistConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isOftV1(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOftV2(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOftV2WithFee(_sendingAssetId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOFTLayerZeroChainId(_chainId: PromiseOrValue<BigNumberish>, _layerZeroChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaCustomCodeOFT(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV1(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV2(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaOFTWrapperV2WithFee(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _oftWrapperData: OFTWrapperFacet.OFTWrapperDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
