import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export declare namespace WormholeFacet {
    type ConfigStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        wormholeChainId: PromiseOrValue<BigNumberish>;
    };
    type ConfigStructOutput = [BigNumber, number] & {
        chainId: BigNumber;
        wormholeChainId: number;
    };
    type WormholeDataStruct = {
        receiver: PromiseOrValue<BytesLike>;
        arbiterFee: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
    };
    type WormholeDataStructOutput = [string, BigNumber, number] & {
        receiver: string;
        arbiterFee: BigNumber;
        nonce: number;
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
export interface TestWormholeFacetInterface extends utils.Interface {
    functions: {
        "addDex(address)": FunctionFragment;
        "initWormhole((uint256,uint16)[])": FunctionFragment;
        "setFunctionApprovalBySignature(bytes4)": FunctionFragment;
        "setWormholeChainId(uint256,uint16)": FunctionFragment;
        "setWormholeChainIds((uint256,uint16)[])": FunctionFragment;
        "startBridgeTokensViaWormhole((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(bytes32,uint256,uint32))": FunctionFragment;
        "swapAndStartBridgeTokensViaWormhole((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(bytes32,uint256,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDex" | "initWormhole" | "setFunctionApprovalBySignature" | "setWormholeChainId" | "setWormholeChainIds" | "startBridgeTokensViaWormhole" | "swapAndStartBridgeTokensViaWormhole"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDex", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initWormhole", values: [WormholeFacet.ConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "setFunctionApprovalBySignature", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setWormholeChainId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setWormholeChainIds", values: [WormholeFacet.ConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaWormhole", values: [ILiFi.BridgeDataStruct, WormholeFacet.WormholeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaWormhole", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        WormholeFacet.WormholeDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "addDex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initWormhole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFunctionApprovalBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWormholeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWormholeChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaWormhole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaWormhole", data: BytesLike): Result;
    events: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes32)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "WormholeChainIdMapped(uint256,uint256)": EventFragment;
        "WormholeChainIdsMapped(tuple[])": EventFragment;
        "WormholeInitialized(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BridgeToNonEVMChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WormholeChainIdMapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WormholeChainIdsMapped"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WormholeInitialized"): EventFragment;
}
export interface BridgeToNonEVMChainEventObject {
    transactionId: string;
    wormholeChainId: BigNumber;
    receiver: string;
}
export declare type BridgeToNonEVMChainEvent = TypedEvent<[
    string,
    BigNumber,
    string
], BridgeToNonEVMChainEventObject>;
export declare type BridgeToNonEVMChainEventFilter = TypedEventFilter<BridgeToNonEVMChainEvent>;
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
export interface WormholeChainIdMappedEventObject {
    lifiChainId: BigNumber;
    wormholeChainId: BigNumber;
}
export declare type WormholeChainIdMappedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], WormholeChainIdMappedEventObject>;
export declare type WormholeChainIdMappedEventFilter = TypedEventFilter<WormholeChainIdMappedEvent>;
export interface WormholeChainIdsMappedEventObject {
    configs: WormholeFacet.ConfigStructOutput[];
}
export declare type WormholeChainIdsMappedEvent = TypedEvent<[
    WormholeFacet.ConfigStructOutput[]
], WormholeChainIdsMappedEventObject>;
export declare type WormholeChainIdsMappedEventFilter = TypedEventFilter<WormholeChainIdsMappedEvent>;
export interface WormholeInitializedEventObject {
    configs: WormholeFacet.ConfigStructOutput[];
}
export declare type WormholeInitializedEvent = TypedEvent<[
    WormholeFacet.ConfigStructOutput[]
], WormholeInitializedEventObject>;
export declare type WormholeInitializedEventFilter = TypedEventFilter<WormholeInitializedEvent>;
export interface TestWormholeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestWormholeFacetInterface;
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
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initWormhole(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWormholeChainId(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWormholeChainIds(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initWormhole(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWormholeChainId(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWormholeChainIds(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDex(_dex: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initWormhole(configs: WormholeFacet.ConfigStruct[], overrides?: CallOverrides): Promise<void>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setWormholeChainId(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setWormholeChainIds(configs: WormholeFacet.ConfigStruct[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BridgeToNonEVMChain(bytes32,uint256,bytes32)"(transactionId?: PromiseOrValue<BytesLike> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        BridgeToNonEVMChain(transactionId?: PromiseOrValue<BytesLike> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null, receiver?: null): BridgeToNonEVMChainEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "WormholeChainIdMapped(uint256,uint256)"(lifiChainId?: PromiseOrValue<BigNumberish> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null): WormholeChainIdMappedEventFilter;
        WormholeChainIdMapped(lifiChainId?: PromiseOrValue<BigNumberish> | null, wormholeChainId?: PromiseOrValue<BigNumberish> | null): WormholeChainIdMappedEventFilter;
        "WormholeChainIdsMapped(tuple[])"(configs?: null): WormholeChainIdsMappedEventFilter;
        WormholeChainIdsMapped(configs?: null): WormholeChainIdsMappedEventFilter;
        "WormholeInitialized(tuple[])"(configs?: null): WormholeInitializedEventFilter;
        WormholeInitialized(configs?: null): WormholeInitializedEventFilter;
    };
    estimateGas: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initWormhole(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWormholeChainId(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWormholeChainIds(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDex(_dex: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initWormhole(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFunctionApprovalBySignature(_signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWormholeChainId(_lifiChainId: PromiseOrValue<BigNumberish>, _wormholeChainId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWormholeChainIds(configs: WormholeFacet.ConfigStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
