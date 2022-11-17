import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace HopFacet {
    type ConfigStruct = {
        assetId: PromiseOrValue<string>;
        bridge: PromiseOrValue<string>;
    };
    type ConfigStructOutput = [string, string] & {
        assetId: string;
        bridge: string;
    };
    type HopDataStruct = {
        bonderFee: PromiseOrValue<BigNumberish>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        destinationAmountOutMin: PromiseOrValue<BigNumberish>;
        destinationDeadline: PromiseOrValue<BigNumberish>;
    };
    type HopDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bonderFee: BigNumber;
        amountOutMin: BigNumber;
        deadline: BigNumber;
        destinationAmountOutMin: BigNumber;
        destinationDeadline: BigNumber;
    };
}
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
export interface HopFacetInterface extends utils.Interface {
    functions: {
        "initHop((address,address)[])": FunctionFragment;
        "registerBridge(address,address)": FunctionFragment;
        "startBridgeTokensViaHop((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaHop((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initHop" | "registerBridge" | "startBridgeTokensViaHop" | "swapAndStartBridgeTokensViaHop"): FunctionFragment;
    encodeFunctionData(functionFragment: "initHop", values: [HopFacet.ConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "registerBridge", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHop", values: [ILiFi.BridgeDataStruct, HopFacet.HopDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaHop", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        HopFacet.HopDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initHop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaHop", data: BytesLike): Result;
    events: {
        "HopBridgeRegistered(address,address)": EventFragment;
        "HopInitialized(tuple[])": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HopBridgeRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HopInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface HopBridgeRegisteredEventObject {
    assetId: string;
    bridge: string;
}
export declare type HopBridgeRegisteredEvent = TypedEvent<[
    string,
    string
], HopBridgeRegisteredEventObject>;
export declare type HopBridgeRegisteredEventFilter = TypedEventFilter<HopBridgeRegisteredEvent>;
export interface HopInitializedEventObject {
    configs: HopFacet.ConfigStructOutput[];
}
export declare type HopInitializedEvent = TypedEvent<[
    HopFacet.ConfigStructOutput[]
], HopInitializedEventObject>;
export declare type HopInitializedEventFilter = TypedEventFilter<HopInitializedEvent>;
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
export interface LiFiTransferStartedEventObject {
    bridgeData: ILiFi.BridgeDataStructOutput;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    ILiFi.BridgeDataStructOutput
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface HopFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HopFacetInterface;
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
        initHop(configs: HopFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    initHop(configs: HopFacet.ConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initHop(configs: HopFacet.ConfigStruct[], overrides?: CallOverrides): Promise<void>;
        registerBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacet.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacet.HopDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "HopBridgeRegistered(address,address)"(assetId?: PromiseOrValue<string> | null, bridge?: null): HopBridgeRegisteredEventFilter;
        HopBridgeRegistered(assetId?: PromiseOrValue<string> | null, bridge?: null): HopBridgeRegisteredEventFilter;
        "HopInitialized(tuple[])"(configs?: null): HopInitializedEventFilter;
        HopInitialized(configs?: null): HopInitializedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        initHop(configs: HopFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initHop(configs: HopFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerBridge(assetId: PromiseOrValue<string>, bridge: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaHop(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacet.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
