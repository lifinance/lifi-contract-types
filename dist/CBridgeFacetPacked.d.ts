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
export interface CBridgeFacetPackedInterface extends utils.Interface {
    functions: {
        "encoder_startBridgeTokensViaCBridgeERC20Packed(bytes32,string,address,uint64,address,uint256,uint64,uint32)": FunctionFragment;
        "encoder_startBridgeTokensViaCBridgeNativePacked(bytes32,string,address,uint64,uint64,uint32)": FunctionFragment;
        "startBridgeTokensViaCBridgeERC20Min(bytes32,string,address,uint64,address,uint256,uint64,uint32)": FunctionFragment;
        "startBridgeTokensViaCBridgeERC20Packed()": FunctionFragment;
        "startBridgeTokensViaCBridgeNativeMin(bytes32,string,address,uint64,uint64,uint32)": FunctionFragment;
        "startBridgeTokensViaCBridgeNativePacked()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "encoder_startBridgeTokensViaCBridgeERC20Packed" | "encoder_startBridgeTokensViaCBridgeNativePacked" | "startBridgeTokensViaCBridgeERC20Min" | "startBridgeTokensViaCBridgeERC20Packed" | "startBridgeTokensViaCBridgeNativeMin" | "startBridgeTokensViaCBridgeNativePacked"): FunctionFragment;
    encodeFunctionData(functionFragment: "encoder_startBridgeTokensViaCBridgeERC20Packed", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "encoder_startBridgeTokensViaCBridgeNativePacked", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeERC20Min", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
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
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "startBridgeTokensViaCBridgeNativePacked", values?: undefined): string;
    decodeFunctionResult(functionFragment: "encoder_startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encoder_startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeERC20Min", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeERC20Packed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeNativeMin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBridgeTokensViaCBridgeNativePacked", data: BytesLike): Result;
    events: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferRecovered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
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
        encoder_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        encoder_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    encoder_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    encoder_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        encoder_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        encoder_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferRecovered(bytes32,address,address,uint256,uint256)"(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        LiFiTransferRecovered(transactionId?: PromiseOrValue<BytesLike> | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferRecoveredEventFilter;
        "LiFiTransferStarted(tuple)"(bridgeData?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(bridgeData?: null): LiFiTransferStartedEventFilter;
    };
    estimateGas: {
        encoder_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        encoder_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        encoder_startBridgeTokensViaCBridgeERC20Packed(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encoder_startBridgeTokensViaCBridgeNativePacked(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Min(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, sendingAssetId: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeERC20Packed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativeMin(transactionId: PromiseOrValue<BytesLike>, integrator: PromiseOrValue<string>, receiver: PromiseOrValue<string>, destinationChainId: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BigNumberish>, maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        startBridgeTokensViaCBridgeNativePacked(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
