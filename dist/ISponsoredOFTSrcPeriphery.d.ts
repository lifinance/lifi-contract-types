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
        finalRecipient: PromiseOrValue<BytesLike>;
        finalToken: PromiseOrValue<BytesLike>;
        lzReceiveGasLimit: PromiseOrValue<BigNumberish>;
        lzComposeGasLimit: PromiseOrValue<BigNumberish>;
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
        string,
        string,
        BigNumber,
        BigNumber,
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
        finalRecipient: string;
        finalToken: string;
        lzReceiveGasLimit: BigNumber;
        lzComposeGasLimit: BigNumber;
        executionMode: number;
        actionData: string;
    };
    type UnsignedQuoteParamsStruct = {
        refundRecipient: PromiseOrValue<string>;
        maxUserSlippageBps: PromiseOrValue<BigNumberish>;
    };
    type UnsignedQuoteParamsStructOutput = [string, BigNumber] & {
        refundRecipient: string;
        maxUserSlippageBps: BigNumber;
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
        "deposit(((uint32,uint32,bytes32,uint256,bytes32,uint256,uint256,bytes32,bytes32,uint256,uint256,uint8,bytes),(address,uint256)),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [ISponsoredOFTSrcPeriphery.QuoteStruct, PromiseOrValue<BytesLike>]): string;
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
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(quote: ISponsoredOFTSrcPeriphery.QuoteStruct, signature: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
