import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export interface GasZipFacetInterface extends utils.Interface {
    functions: {
        "depositToGasZipERC20((address,address,address,address,uint256,bytes,bool),uint256,address)": FunctionFragment;
        "depositToGasZipERC20WithDeposit((address,address,address,address,uint256,bytes,bool),uint256,address)": FunctionFragment;
        "depositToGasZipNative(uint256,uint256,address)": FunctionFragment;
        "gasZipRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositToGasZipERC20" | "depositToGasZipERC20WithDeposit" | "depositToGasZipNative" | "gasZipRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositToGasZipERC20", values: [
        LibSwap.SwapDataStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "depositToGasZipERC20WithDeposit", values: [
        LibSwap.SwapDataStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "depositToGasZipNative", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "gasZipRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "depositToGasZipERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToGasZipERC20WithDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToGasZipNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasZipRouter", data: BytesLike): Result;
    events: {};
}
export interface GasZipFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GasZipFacetInterface;
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
        depositToGasZipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositToGasZipERC20WithDeposit(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositToGasZipNative(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        gasZipRouter(overrides?: CallOverrides): Promise<[string]>;
    };
    depositToGasZipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositToGasZipERC20WithDeposit(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositToGasZipNative(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    gasZipRouter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        depositToGasZipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositToGasZipERC20WithDeposit(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        depositToGasZipNative(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        gasZipRouter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        depositToGasZipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositToGasZipERC20WithDeposit(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositToGasZipNative(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        gasZipRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        depositToGasZipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositToGasZipERC20WithDeposit(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositToGasZipNative(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        gasZipRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
