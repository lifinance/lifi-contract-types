import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IAxelarGasServiceInterface extends utils.Interface {
    functions: {
        "addGas(bytes32,uint256,address,uint256,address)": FunctionFragment;
        "addNativeGas(bytes32,uint256,address)": FunctionFragment;
        "collectFees(address,address[])": FunctionFragment;
        "contractId()": FunctionFragment;
        "owner()": FunctionFragment;
        "payGasForContractCall(address,string,string,bytes,address,uint256,address)": FunctionFragment;
        "payGasForContractCallWithToken(address,string,string,bytes,string,uint256,address,uint256,address)": FunctionFragment;
        "payNativeGasForContractCall(address,string,string,bytes,address)": FunctionFragment;
        "payNativeGasForContractCallWithToken(address,string,string,bytes,string,uint256,address)": FunctionFragment;
        "refund(address,address,uint256)": FunctionFragment;
        "setup(bytes)": FunctionFragment;
        "upgrade(address,bytes32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addGas" | "addNativeGas" | "collectFees" | "contractId" | "owner" | "payGasForContractCall" | "payGasForContractCallWithToken" | "payNativeGasForContractCall" | "payNativeGasForContractCallWithToken" | "refund" | "setup" | "upgrade"): FunctionFragment;
    encodeFunctionData(functionFragment: "addGas", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "addNativeGas", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "collectFees", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "contractId", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payGasForContractCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "payGasForContractCallWithToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "payNativeGasForContractCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "payNativeGasForContractCallWithToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "refund", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setup", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "addGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNativeGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payGasForContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payGasForContractCallWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payNativeGasForContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payNativeGasForContractCallWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    events: {
        "GasAdded(bytes32,uint256,address,uint256,address)": EventFragment;
        "GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)": EventFragment;
        "GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)": EventFragment;
        "NativeGasAdded(bytes32,uint256,uint256,address)": EventFragment;
        "NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)": EventFragment;
        "NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)": EventFragment;
        "OwnershipTransferred(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GasAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasPaidForContractCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasPaidForContractCallWithToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasPaidForContractCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NativeGasPaidForContractCallWithToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface GasAddedEventObject {
    txHash: string;
    logIndex: BigNumber;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasAddedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string
], GasAddedEventObject>;
export declare type GasAddedEventFilter = TypedEventFilter<GasAddedEvent>;
export interface GasPaidForContractCallEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasPaidForContractCallEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string
], GasPaidForContractCallEventObject>;
export declare type GasPaidForContractCallEventFilter = TypedEventFilter<GasPaidForContractCallEvent>;
export interface GasPaidForContractCallWithTokenEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasToken: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type GasPaidForContractCallWithTokenEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    string
], GasPaidForContractCallWithTokenEventObject>;
export declare type GasPaidForContractCallWithTokenEventFilter = TypedEventFilter<GasPaidForContractCallWithTokenEvent>;
export interface NativeGasAddedEventObject {
    txHash: string;
    logIndex: BigNumber;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], NativeGasAddedEventObject>;
export declare type NativeGasAddedEventFilter = TypedEventFilter<NativeGasAddedEvent>;
export interface NativeGasPaidForContractCallEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasPaidForContractCallEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], NativeGasPaidForContractCallEventObject>;
export declare type NativeGasPaidForContractCallEventFilter = TypedEventFilter<NativeGasPaidForContractCallEvent>;
export interface NativeGasPaidForContractCallWithTokenEventObject {
    sourceAddress: string;
    destinationChain: string;
    destinationAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    gasFeeAmount: BigNumber;
    refundAddress: string;
}
export declare type NativeGasPaidForContractCallWithTokenEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string
], NativeGasPaidForContractCallWithTokenEventObject>;
export declare type NativeGasPaidForContractCallWithTokenEventFilter = TypedEventFilter<NativeGasPaidForContractCallWithTokenEvent>;
export interface OwnershipTransferredEventObject {
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface UpgradedEventObject {
    newImplementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface IAxelarGasService extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAxelarGasServiceInterface;
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
        addGas(txHash: PromiseOrValue<BytesLike>, txIndex: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addNativeGas(txHash: PromiseOrValue<BytesLike>, logIndex: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectFees(receiver: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        contractId(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        payGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        payNativeGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        payNativeGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        refund(receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setup(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgrade(newImplementation: PromiseOrValue<string>, newImplementationCodeHash: PromiseOrValue<BytesLike>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addGas(txHash: PromiseOrValue<BytesLike>, txIndex: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addNativeGas(txHash: PromiseOrValue<BytesLike>, logIndex: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectFees(receiver: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    contractId(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    payGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    payGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    payNativeGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    payNativeGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    refund(receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setup(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgrade(newImplementation: PromiseOrValue<string>, newImplementationCodeHash: PromiseOrValue<BytesLike>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addGas(txHash: PromiseOrValue<BytesLike>, txIndex: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addNativeGas(txHash: PromiseOrValue<BytesLike>, logIndex: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        collectFees(receiver: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        contractId(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        payGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        payGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        payNativeGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        payNativeGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        refund(receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setup(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        upgrade(newImplementation: PromiseOrValue<string>, newImplementationCodeHash: PromiseOrValue<BytesLike>, params: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GasAdded(bytes32,uint256,address,uint256,address)"(txHash?: PromiseOrValue<BytesLike> | null, logIndex?: PromiseOrValue<BigNumberish> | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasAddedEventFilter;
        GasAdded(txHash?: PromiseOrValue<BytesLike> | null, logIndex?: PromiseOrValue<BigNumberish> | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasAddedEventFilter;
        "GasPaidForContractCall(address,string,string,bytes32,address,uint256,address)"(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallEventFilter;
        GasPaidForContractCall(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallEventFilter;
        "GasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,address,uint256,address)"(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, symbol?: null, amount?: null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallWithTokenEventFilter;
        GasPaidForContractCallWithToken(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, symbol?: null, amount?: null, gasToken?: null, gasFeeAmount?: null, refundAddress?: null): GasPaidForContractCallWithTokenEventFilter;
        "NativeGasAdded(bytes32,uint256,uint256,address)"(txHash?: PromiseOrValue<BytesLike> | null, logIndex?: PromiseOrValue<BigNumberish> | null, gasFeeAmount?: null, refundAddress?: null): NativeGasAddedEventFilter;
        NativeGasAdded(txHash?: PromiseOrValue<BytesLike> | null, logIndex?: PromiseOrValue<BigNumberish> | null, gasFeeAmount?: null, refundAddress?: null): NativeGasAddedEventFilter;
        "NativeGasPaidForContractCall(address,string,string,bytes32,uint256,address)"(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallEventFilter;
        NativeGasPaidForContractCall(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallEventFilter;
        "NativeGasPaidForContractCallWithToken(address,string,string,bytes32,string,uint256,uint256,address)"(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, symbol?: null, amount?: null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallWithTokenEventFilter;
        NativeGasPaidForContractCallWithToken(sourceAddress?: PromiseOrValue<string> | null, destinationChain?: null, destinationAddress?: null, payloadHash?: PromiseOrValue<BytesLike> | null, symbol?: null, amount?: null, gasFeeAmount?: null, refundAddress?: null): NativeGasPaidForContractCallWithTokenEventFilter;
        "OwnershipTransferred(address)"(newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Upgraded(address)"(newImplementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(newImplementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        addGas(txHash: PromiseOrValue<BytesLike>, txIndex: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addNativeGas(txHash: PromiseOrValue<BytesLike>, logIndex: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectFees(receiver: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        contractId(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        payGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        payNativeGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        payNativeGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        refund(receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setup(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgrade(newImplementation: PromiseOrValue<string>, newImplementationCodeHash: PromiseOrValue<BytesLike>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addGas(txHash: PromiseOrValue<BytesLike>, txIndex: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addNativeGas(txHash: PromiseOrValue<BytesLike>, logIndex: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectFees(receiver: PromiseOrValue<string>, tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        contractId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        payGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, gasToken: PromiseOrValue<string>, gasFeeAmount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        payNativeGasForContractCall(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        payNativeGasForContractCallWithToken(sender: PromiseOrValue<string>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, payload: PromiseOrValue<BytesLike>, symbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, refundAddress: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        refund(receiver: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setup(data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgrade(newImplementation: PromiseOrValue<string>, newImplementationCodeHash: PromiseOrValue<BytesLike>, params: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
