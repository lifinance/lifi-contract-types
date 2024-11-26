import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
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
export interface CalldataVerificationFacetInterface extends utils.Interface {
    functions: {
        "extractBridgeData(bytes)": FunctionFragment;
        "extractData(bytes)": FunctionFragment;
        "extractGenericSwapParameters(bytes)": FunctionFragment;
        "extractMainParameters(bytes)": FunctionFragment;
        "extractNonEVMAddress(bytes)": FunctionFragment;
        "extractSwapData(bytes)": FunctionFragment;
        "validateCalldata(bytes,string,address,address,uint256,uint256,bool,bool)": FunctionFragment;
        "validateDestinationCalldata(bytes,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "extractBridgeData" | "extractData" | "extractGenericSwapParameters" | "extractMainParameters" | "extractNonEVMAddress" | "extractSwapData" | "validateCalldata" | "validateDestinationCalldata"): FunctionFragment;
    encodeFunctionData(functionFragment: "extractBridgeData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractGenericSwapParameters", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractMainParameters", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractNonEVMAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "extractSwapData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "validateCalldata", values: [
        BytesLike,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "validateDestinationCalldata", values: [BytesLike, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "extractBridgeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractGenericSwapParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractMainParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractNonEVMAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractSwapData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateDestinationCalldata", data: BytesLike): Result;
    events: {};
}
export interface CalldataVerificationFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CalldataVerificationFacetInterface;
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
        extractBridgeData(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
        }>;
        extractData(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            LibSwap.SwapDataStructOutput[]
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        extractGenericSwapParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            string,
            BigNumber
        ] & {
            sendingAssetId: string;
            amount: BigNumber;
            receiver: string;
            receivingAssetId: string;
            receivingAmount: BigNumber;
        }>;
        extractMainParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            boolean,
            boolean
        ] & {
            bridge: string;
            sendingAssetId: string;
            receiver: string;
            amount: BigNumber;
            destinationChainId: BigNumber;
            hasSourceSwaps: boolean;
            hasDestinationCall: boolean;
        }>;
        extractNonEVMAddress(data: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            nonEVMAddress: string;
        }>;
        extractSwapData(data: BytesLike, overrides?: CallOverrides): Promise<[
            LibSwap.SwapDataStructOutput[]
        ] & {
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        validateCalldata(data: BytesLike, bridge: string, sendingAssetId: string, receiver: string, amount: BigNumberish, destinationChainId: BigNumberish, hasSourceSwaps: boolean, hasDestinationCall: boolean, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        validateDestinationCalldata(data: BytesLike, callTo: BytesLike, dstCalldata: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
    };
    extractBridgeData(data: BytesLike, overrides?: CallOverrides): Promise<ILiFi.BridgeDataStructOutput>;
    extractData(data: BytesLike, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        LibSwap.SwapDataStructOutput[]
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        swapData: LibSwap.SwapDataStructOutput[];
    }>;
    extractGenericSwapParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string,
        string,
        BigNumber
    ] & {
        sendingAssetId: string;
        amount: BigNumber;
        receiver: string;
        receivingAssetId: string;
        receivingAmount: BigNumber;
    }>;
    extractMainParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        bridge: string;
        sendingAssetId: string;
        receiver: string;
        amount: BigNumber;
        destinationChainId: BigNumber;
        hasSourceSwaps: boolean;
        hasDestinationCall: boolean;
    }>;
    extractNonEVMAddress(data: BytesLike, overrides?: CallOverrides): Promise<string>;
    extractSwapData(data: BytesLike, overrides?: CallOverrides): Promise<LibSwap.SwapDataStructOutput[]>;
    validateCalldata(data: BytesLike, bridge: string, sendingAssetId: string, receiver: string, amount: BigNumberish, destinationChainId: BigNumberish, hasSourceSwaps: boolean, hasDestinationCall: boolean, overrides?: CallOverrides): Promise<boolean>;
    validateDestinationCalldata(data: BytesLike, callTo: BytesLike, dstCalldata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        extractBridgeData(data: BytesLike, overrides?: CallOverrides): Promise<ILiFi.BridgeDataStructOutput>;
        extractData(data: BytesLike, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            LibSwap.SwapDataStructOutput[]
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        extractGenericSwapParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            string,
            BigNumber
        ] & {
            sendingAssetId: string;
            amount: BigNumber;
            receiver: string;
            receivingAssetId: string;
            receivingAmount: BigNumber;
        }>;
        extractMainParameters(data: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            BigNumber,
            boolean,
            boolean
        ] & {
            bridge: string;
            sendingAssetId: string;
            receiver: string;
            amount: BigNumber;
            destinationChainId: BigNumber;
            hasSourceSwaps: boolean;
            hasDestinationCall: boolean;
        }>;
        extractNonEVMAddress(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        extractSwapData(data: BytesLike, overrides?: CallOverrides): Promise<LibSwap.SwapDataStructOutput[]>;
        validateCalldata(data: BytesLike, bridge: string, sendingAssetId: string, receiver: string, amount: BigNumberish, destinationChainId: BigNumberish, hasSourceSwaps: boolean, hasDestinationCall: boolean, overrides?: CallOverrides): Promise<boolean>;
        validateDestinationCalldata(data: BytesLike, callTo: BytesLike, dstCalldata: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        extractBridgeData(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractData(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractGenericSwapParameters(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractMainParameters(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractNonEVMAddress(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        extractSwapData(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateCalldata(data: BytesLike, bridge: string, sendingAssetId: string, receiver: string, amount: BigNumberish, destinationChainId: BigNumberish, hasSourceSwaps: boolean, hasDestinationCall: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        validateDestinationCalldata(data: BytesLike, callTo: BytesLike, dstCalldata: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        extractBridgeData(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractData(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractGenericSwapParameters(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractMainParameters(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractNonEVMAddress(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractSwapData(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateCalldata(data: BytesLike, bridge: string, sendingAssetId: string, receiver: string, amount: BigNumberish, destinationChainId: BigNumberish, hasSourceSwaps: boolean, hasDestinationCall: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateDestinationCalldata(data: BytesLike, callTo: BytesLike, dstCalldata: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=CalldataVerificationFacet.d.ts.map