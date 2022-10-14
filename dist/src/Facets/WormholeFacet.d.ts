import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
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
export declare namespace WormholeFacet {
    type WormholeDataStruct = {
        arbiterFee: BigNumberish;
        nonce: BigNumberish;
    };
    type WormholeDataStructOutput = [BigNumber, number] & {
        arbiterFee: BigNumber;
        nonce: number;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
        requiresDeposit: boolean;
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
export interface WormholeFacetInterface extends utils.Interface {
    functions: {
        "setWormholeChainId(uint256,uint16)": FunctionFragment;
        "startBridgeTokensViaWormhole((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(uint256,uint32))": FunctionFragment;
        "swapAndStartBridgeTokensViaWormhole((bytes32,string,string,address,address,address,uint256,uint256,bool,bool),(address,address,address,address,uint256,bytes,bool)[],(uint256,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setWormholeChainId" | "startBridgeTokensViaWormhole" | "swapAndStartBridgeTokensViaWormhole"): FunctionFragment;
    encodeFunctionData(functionFragment: "setWormholeChainId", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaWormhole", values: [ILiFi.BridgeDataStruct, WormholeFacet.WormholeDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaWormhole", values: [
        ILiFi.BridgeDataStruct,
        LibSwap.SwapDataStruct[],
        WormholeFacet.WormholeDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "setWormholeChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaWormhole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaWormhole", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
        "WormholeChainIdMapped(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WormholeChainIdMapped"): EventFragment;
}
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
export interface WormholeChainIdMappedEventObject {
    lifiChainId: BigNumber;
    wormholeChainId: BigNumber;
}
export declare type WormholeChainIdMappedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], WormholeChainIdMappedEventObject>;
export declare type WormholeChainIdMappedEventFilter = TypedEventFilter<WormholeChainIdMappedEvent>;
export interface WormholeFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WormholeFacetInterface;
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
        setWormholeChainId(_lifiChainId: BigNumberish, _wormholeChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    setWormholeChainId(_lifiChainId: BigNumberish, _wormholeChainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setWormholeChainId(_lifiChainId: BigNumberish, _wormholeChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
        "WormholeChainIdMapped(uint256,uint256)"(lifiChainId?: BigNumberish | null, wormholeChainId?: BigNumberish | null): WormholeChainIdMappedEventFilter;
        WormholeChainIdMapped(lifiChainId?: BigNumberish | null, wormholeChainId?: BigNumberish | null): WormholeChainIdMappedEventFilter;
    };
    estimateGas: {
        setWormholeChainId(_lifiChainId: BigNumberish, _wormholeChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setWormholeChainId(_lifiChainId: BigNumberish, _wormholeChainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaWormhole(_bridgeData: ILiFi.BridgeDataStruct, _swapData: LibSwap.SwapDataStruct[], _wormholeData: WormholeFacet.WormholeDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
