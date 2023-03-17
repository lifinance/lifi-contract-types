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
export interface HopFacetOptimizedInterface extends utils.Interface {
    functions: {
        "setApprovalForBridges(address[],address[])": FunctionFragment;
        "startBridgeTokensViaHopL1ERC20((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "startBridgeTokensViaHopL1Native((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "startBridgeTokensViaHopL2ERC20((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "startBridgeTokensViaHopL2Native((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaHopL1ERC20((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaHopL1Native((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaHopL2ERC20((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "swapAndStartBridgeTokensViaHopL2Native((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setApprovalForBridges" | "startBridgeTokensViaHopL1ERC20" | "startBridgeTokensViaHopL1Native" | "startBridgeTokensViaHopL2ERC20" | "startBridgeTokensViaHopL2Native" | "swapAndStartBridgeTokensViaHopL1ERC20" | "swapAndStartBridgeTokensViaHopL1Native" | "swapAndStartBridgeTokensViaHopL2ERC20" | "swapAndStartBridgeTokensViaHopL2Native"): FunctionFragment;
    encodeFunctionData(functionFragment: "setApprovalForBridges", values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1ERC20", values: [ILiFi.BridgeDataStruct, HopFacetOptimized.HopDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL1Native", values: [ILiFi.BridgeDataStruct, HopFacetOptimized.HopDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2ERC20", values: [ILiFi.BridgeDataStruct, HopFacetOptimized.HopDataStruct]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaHopL2Native", values: [ILiFi.BridgeDataStruct, HopFacetOptimized.HopDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaHopL1ERC20", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        HopFacetOptimized.HopDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaHopL1Native", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        HopFacetOptimized.HopDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaHopL2ERC20", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        HopFacetOptimized.HopDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaHopL2Native", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        HopFacetOptimized.HopDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "setApprovalForBridges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1ERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL1Native", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2ERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaHopL2Native", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaHopL1ERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaHopL1Native", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaHopL2ERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaHopL2Native", data: BytesLike): Result;
    events: {
        "HopBridgeRegistered(address,address)": EventFragment;
        "LiFiGenericSwapCompleted(bytes32,string,string,address,address,address,uint256,uint256)": EventFragment;
        "LiFiSwappedGeneric(bytes32,string,string,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HopBridgeRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiGenericSwapCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiSwappedGeneric"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
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
export interface HopFacetOptimized extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HopFacetOptimizedInterface;
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
        setApprovalForBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    setApprovalForBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setApprovalForBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "HopBridgeRegistered(address,address)"(assetId?: PromiseOrValue<string> | null, bridge?: null): HopBridgeRegisteredEventFilter;
        HopBridgeRegistered(assetId?: PromiseOrValue<string> | null, bridge?: null): HopBridgeRegisteredEventFilter;
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
        setApprovalForBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setApprovalForBridges(bridges: PromiseOrValue<string>[], tokensToApprove: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaHopL1ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaHopL1Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaHopL2ERC20(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaHopL2Native(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _hopData: HopFacetOptimized.HopDataStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
