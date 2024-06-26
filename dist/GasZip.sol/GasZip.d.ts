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
export interface GasZipInterface extends utils.Interface {
    functions: {
        "ZERO()": FunctionFragment;
        "gasZipRouter()": FunctionFragment;
        "zip(uint256,uint256,address)": FunctionFragment;
        "zipERC20((address,address,address,address,uint256,bytes,bool),uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ZERO" | "gasZipRouter" | "zip" | "zipERC20"): FunctionFragment;
    encodeFunctionData(functionFragment: "ZERO", values?: undefined): string;
    encodeFunctionData(functionFragment: "gasZipRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "zip", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "zipERC20", values: [
        LibSwap.SwapDataStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "ZERO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasZipRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zipERC20", data: BytesLike): Result;
    events: {};
}
export interface GasZip extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GasZipInterface;
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
        ZERO(overrides?: CallOverrides): Promise<[string]>;
        gasZipRouter(overrides?: CallOverrides): Promise<[string]>;
        zip(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        zipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ZERO(overrides?: CallOverrides): Promise<string>;
    gasZipRouter(overrides?: CallOverrides): Promise<string>;
    zip(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    zipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ZERO(overrides?: CallOverrides): Promise<string>;
        gasZipRouter(overrides?: CallOverrides): Promise<string>;
        zip(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        zipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ZERO(overrides?: CallOverrides): Promise<BigNumber>;
        gasZipRouter(overrides?: CallOverrides): Promise<BigNumber>;
        zip(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        zipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ZERO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasZipRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        zip(_amountToZip: PromiseOrValue<BigNumberish>, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        zipERC20(_swapData: LibSwap.SwapDataStruct, _destinationChainId: PromiseOrValue<BigNumberish>, _recipient: PromiseOrValue<string>, _refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
