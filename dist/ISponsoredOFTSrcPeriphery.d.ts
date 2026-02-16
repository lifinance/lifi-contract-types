import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ISponsoredOFTSrcPeriphery {
    type SignedQuoteParamsStruct = {
        srcEid: PromiseOrValue<BigNumberish>;
        dstEid: PromiseOrValue<BigNumberish>;
        destinationHandler: PromiseOrValue<BytesLike>;
        amountLD: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BytesLike>;
        deadline: PromiseOrValue<BigNumberish>;
        maxBpsToSponsor: PromiseOrValue<BigNumberish>;
        maxUserSlippageBps: PromiseOrValue<BigNumberish>;
        finalRecipient: PromiseOrValue<BytesLike>;
        finalToken: PromiseOrValue<BytesLike>;
        destinationDex: PromiseOrValue<BigNumberish>;
        lzReceiveGasLimit: PromiseOrValue<BigNumberish>;
        lzComposeGasLimit: PromiseOrValue<BigNumberish>;
        maxOftFeeBps: PromiseOrValue<BigNumberish>;
        accountCreationMode: PromiseOrValue<BigNumberish>;
        executionMode: PromiseOrValue<BigNumberish>;
        actionData: PromiseOrValue<BytesLike>;
    };
    type SignedQuoteParamsStructOutput = [
        number,
        number,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        string
    ] & {
        srcEid: number;
        dstEid: number;
        destinationHandler: string;
        amountLD: BigNumber;
        nonce: string;
        deadline: BigNumber;
        maxBpsToSponsor: BigNumber;
        maxUserSlippageBps: BigNumber;
        finalRecipient: string;
        finalToken: string;
        destinationDex: number;
        lzReceiveGasLimit: BigNumber;
        lzComposeGasLimit: BigNumber;
        maxOftFeeBps: BigNumber;
        accountCreationMode: number;
        executionMode: number;
        actionData: string;
    };
    type UnsignedQuoteParamsStruct = {
        refundRecipient: PromiseOrValue<string>;
    };
    type UnsignedQuoteParamsStructOutput = [string] & {
        refundRecipient: string;
    };
    type QuoteStruct = {
        signedParams: ISponsoredOFTSrcPeriphery.SignedQuoteParamsStruct;
        unsignedParams: ISponsoredOFTSrcPeriphery.UnsignedQuoteParamsStruct;
    };
    type QuoteStructOutput = [
        ISponsoredOFTSrcPeriphery.SignedQuoteParamsStructOutput,
        ISponsoredOFTSrcPeriphery.UnsignedQuoteParamsStructOutput
    ] & {
        signedParams: ISponsoredOFTSrcPeriphery.SignedQuoteParamsStructOutput;
        unsignedParams: ISponsoredOFTSrcPeriphery.UnsignedQuoteParamsStructOutput;
    };
}
export interface ISponsoredOFTSrcPeripheryInterface extends utils.Interface {
    functions: {
        "TOKEN()": FunctionFragment;
        "deposit(((uint32,uint32,bytes32,uint256,bytes32,uint256,uint256,uint256,bytes32,bytes32,uint32,uint256,uint256,uint256,uint8,uint8,bytes),(address)),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "TOKEN" | "deposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [ISponsoredOFTSrcPeriphery.QuoteStruct, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    events: {};
}
export interface ISponsoredOFTSrcPeriphery extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISponsoredOFTSrcPeripheryInterface;
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
        TOKEN(overrides?: CallOverrides): Promise<[string]>;
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    TOKEN(overrides?: CallOverrides): Promise<string>;
    deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        TOKEN(overrides?: CallOverrides): Promise<string>;
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
