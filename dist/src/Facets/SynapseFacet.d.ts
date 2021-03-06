import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace ILiFi {
    type LiFiDataStruct = {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
    };
    type LiFiDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        transactionId: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumber;
        amount: BigNumber;
    };
}
export declare namespace SynapseFacet {
    type SynapseDataStruct = {
        to: string;
        chainId: BigNumberish;
        token: string;
        amount: BigNumberish;
    };
    type SynapseDataStructOutput = [
        string,
        BigNumber,
        string,
        BigNumber
    ] & {
        to: string;
        chainId: BigNumber;
        token: string;
        amount: BigNumber;
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
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
    };
}
export interface SynapseFacetInterface extends utils.Interface {
    functions: {
        "initSynapse(address,uint256)": FunctionFragment;
        "startBridgeTokensViaSynapse((bytes32,string,address,address,address,address,uint256,uint256),(address,uint256,address,uint256))": FunctionFragment;
        "swapAndStartBridgeTokensViaSynapse((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],(address,uint256,address,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initSynapse" | "startBridgeTokensViaSynapse" | "swapAndStartBridgeTokensViaSynapse"): FunctionFragment;
    encodeFunctionData(functionFragment: "initSynapse", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaSynapse", values: [ILiFi.LiFiDataStruct, SynapseFacet.SynapseDataStruct]): string;
    encodeFunctionData(functionFragment: "swapAndStartBridgeTokensViaSynapse", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        SynapseFacet.SynapseDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "initSynapse", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaSynapse", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndStartBridgeTokensViaSynapse", data: BytesLike): Result;
    events: {
        "Inited(address,uint256)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferConfirmed(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiTransferRefunded(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,address,address,address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Inited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferConfirmed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRefunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
}
export interface InitedEventObject {
    bridge: string;
    chainId: BigNumber;
}
export declare type InitedEvent = TypedEvent<[string, BigNumber], InitedEventObject>;
export declare type InitedEventFilter = TypedEventFilter<InitedEvent>;
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
export interface LiFiTransferConfirmedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferConfirmedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferConfirmedEventObject>;
export declare type LiFiTransferConfirmedEventFilter = TypedEventFilter<LiFiTransferConfirmedEvent>;
export interface LiFiTransferRefundedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferRefundedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferRefundedEventObject>;
export declare type LiFiTransferRefundedEventFilter = TypedEventFilter<LiFiTransferRefundedEvent>;
export interface LiFiTransferStartedEventObject {
    transactionId: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface SynapseFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SynapseFacetInterface;
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
        initSynapse(_synapse: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndStartBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initSynapse(_synapse: string, _chainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndStartBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initSynapse(_synapse: string, _chainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _synapseData: SynapseFacet.SynapseDataStruct, overrides?: CallOverrides): Promise<void>;
        swapAndStartBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _synapseData: SynapseFacet.SynapseDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Inited(address,uint256)"(bridge?: string | null, chainId?: null): InitedEventFilter;
        Inited(bridge?: string | null, chainId?: null): InitedEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferConfirmed(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferConfirmedEventFilter;
        LiFiTransferConfirmed(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferConfirmedEventFilter;
        "LiFiTransferRefunded(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferRefundedEventFilter;
        LiFiTransferRefunded(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferRefundedEventFilter;
        "LiFiTransferStarted(bytes32,string,address,address,address,address,uint256,uint256,uint256)"(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, timestamp?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        initSynapse(_synapse: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndStartBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initSynapse(_synapse: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndStartBridgeTokensViaSynapse(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], _synapseData: SynapseFacet.SynapseDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
