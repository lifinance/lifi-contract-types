import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
        "__attemptDecodeGenericSwapData(bytes)": FunctionFragment;
        "__attemptDecodePackedCBridge(bytes)": FunctionFragment;
        "__attemptDecodePackedHop(bytes)": FunctionFragment;
        "extractBridgeData(bytes)": FunctionFragment;
        "extractData(bytes)": FunctionFragment;
        "extractGenericSwapParameters(bytes)": FunctionFragment;
        "extractMainParameters(bytes)": FunctionFragment;
        "extractSwapData(bytes)": FunctionFragment;
        "validateCalldata(bytes,string,address,address,uint256,uint256,bool,bool)": FunctionFragment;
        "validateDestinationCalldata(bytes,bytes,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "__attemptDecodeGenericSwapData" | "__attemptDecodePackedCBridge" | "__attemptDecodePackedHop" | "extractBridgeData" | "extractData" | "extractGenericSwapParameters" | "extractMainParameters" | "extractSwapData" | "validateCalldata" | "validateDestinationCalldata"): FunctionFragment;
    encodeFunctionData(functionFragment: "__attemptDecodeGenericSwapData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "__attemptDecodePackedCBridge", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "__attemptDecodePackedHop", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractBridgeData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractData", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractGenericSwapParameters", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "extractMainParameters", values: [PromiseOrValue<BytesLike>]): string;
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
    decodeFunctionResult(functionFragment: "__attemptDecodeGenericSwapData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "__attemptDecodePackedCBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "__attemptDecodePackedHop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractBridgeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractGenericSwapParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractMainParameters", data: BytesLike): Result;
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
        __attemptDecodeGenericSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        __attemptDecodePackedCBridge(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        __attemptDecodePackedHop(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    __attemptDecodeGenericSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    __attemptDecodePackedCBridge(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    __attemptDecodePackedHop(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    extractData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        __attemptDecodeGenericSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        __attemptDecodePackedCBridge(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        __attemptDecodePackedHop(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
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
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<LibSwap.SwapDataStructOutput[]>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        __attemptDecodeGenericSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        __attemptDecodePackedCBridge(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        __attemptDecodePackedHop(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        __attemptDecodeGenericSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        __attemptDecodePackedCBridge(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        __attemptDecodePackedHop(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extractBridgeData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extractData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extractGenericSwapParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extractMainParameters(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        extractSwapData(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateCalldata(data: PromiseOrValue<BytesLike>, bridge: PromiseOrValue<string>, sendingAssetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, hasSourceSwaps: PromiseOrValue<boolean>, hasDestinationCall: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateDestinationCalldata(data: PromiseOrValue<BytesLike>, callTo: PromiseOrValue<BytesLike>, dstCalldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
