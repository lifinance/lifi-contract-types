import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
    encodeFunctionData(functionFragment: "extractBridgeData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractGenericSwapParameters", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractMainParameters", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractNonEVMAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractSwapData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "validateCalldata", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "validateDestinationCalldata", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
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
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
        }>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            LibSwap.SwapDataStructOutput[]
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        extractNonEVMAddress(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            nonEVMAddress: string;
        }>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            LibSwap.SwapDataStructOutput[]
        ] & {
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
    };
    extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ILiFi.BridgeDataStructOutput>;
    extractData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        ILiFi.BridgeDataStructOutput,
        LibSwap.SwapDataStructOutput[]
    ] & {
        bridgeData: ILiFi.BridgeDataStructOutput;
        swapData: LibSwap.SwapDataStructOutput[];
    }>;
    extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
    extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
    extractNonEVMAddress(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<LibSwap.SwapDataStructOutput[]>;
    validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
    validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<ILiFi.BridgeDataStructOutput>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            ILiFi.BridgeDataStructOutput,
            LibSwap.SwapDataStructOutput[]
        ] & {
            bridgeData: ILiFi.BridgeDataStructOutput;
            swapData: LibSwap.SwapDataStructOutput[];
        }>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
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
        extractNonEVMAddress(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<LibSwap.SwapDataStructOutput[]>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        extractNonEVMAddress(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractNonEVMAddress(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
