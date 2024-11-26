import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ITransactionManager {
    type InvariantTransactionDataStruct = {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
    };
    type InvariantTransactionDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        callDataHash: string;
        transactionId: string;
    };
    type PrepareArgsStruct = {
        invariantData: ITransactionManager.InvariantTransactionDataStruct;
        amount: BigNumberish;
        expiry: BigNumberish;
        encryptedCallData: BytesLike;
        encodedBid: BytesLike;
        bidSignature: BytesLike;
        encodedMeta: BytesLike;
    };
    type PrepareArgsStructOutput = [
        ITransactionManager.InvariantTransactionDataStructOutput,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        invariantData: ITransactionManager.InvariantTransactionDataStructOutput;
        amount: BigNumber;
        expiry: BigNumber;
        encryptedCallData: string;
        encodedBid: string;
        bidSignature: string;
        encodedMeta: string;
    };
    type TransactionDataStruct = {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
    };
    type TransactionDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        receivingChainTxManagerAddress: string;
        user: string;
        router: string;
        initiator: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
    };
}
export interface ITransactionManagerInterface extends utils.Interface {
    functions: {
        "prepare(((address,address,address,address,address,address,address,address,address,uint256,uint256,bytes32,bytes32),uint256,uint256,bytes,bytes,bytes,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "prepare"): FunctionFragment;
    encodeFunctionData(functionFragment: "prepare", values: [ITransactionManager.PrepareArgsStruct]): string;
    decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
    events: {};
}
export interface ITransactionManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITransactionManagerInterface;
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
        prepare(args: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    prepare(args: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        prepare(args: ITransactionManager.PrepareArgsStruct, overrides?: CallOverrides): Promise<ITransactionManager.TransactionDataStructOutput>;
    };
    filters: {};
    estimateGas: {
        prepare(args: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        prepare(args: ITransactionManager.PrepareArgsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
