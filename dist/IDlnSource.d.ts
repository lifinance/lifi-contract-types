import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IDlnSource {
    type OrderCreationStruct = {
        giveTokenAddress: PromiseOrValue<string>;
        giveAmount: PromiseOrValue<BigNumberish>;
        takeTokenAddress: PromiseOrValue<BytesLike>;
        takeAmount: PromiseOrValue<BigNumberish>;
        takeChainId: PromiseOrValue<BigNumberish>;
        receiverDst: PromiseOrValue<BytesLike>;
        givePatchAuthoritySrc: PromiseOrValue<string>;
        orderAuthorityAddressDst: PromiseOrValue<BytesLike>;
        allowedTakerDst: PromiseOrValue<BytesLike>;
        externalCall: PromiseOrValue<BytesLike>;
        allowedCancelBeneficiarySrc: PromiseOrValue<BytesLike>;
    };
    type OrderCreationStructOutput = [
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        giveTokenAddress: string;
        giveAmount: BigNumber;
        takeTokenAddress: string;
        takeAmount: BigNumber;
        takeChainId: BigNumber;
        receiverDst: string;
        givePatchAuthoritySrc: string;
        orderAuthorityAddressDst: string;
        allowedTakerDst: string;
        externalCall: string;
        allowedCancelBeneficiarySrc: string;
    };
}
export interface IDlnSourceInterface extends utils.Interface {
    functions: {
        "createOrder((address,uint256,bytes,uint256,uint256,bytes,address,bytes,bytes,bytes,bytes),bytes,uint32,bytes)": FunctionFragment;
        "globalFixedNativeFee()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createOrder" | "globalFixedNativeFee"): FunctionFragment;
    encodeFunctionData(functionFragment: "createOrder", values: [
        IDlnSource.OrderCreationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "globalFixedNativeFee", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalFixedNativeFee", data: BytesLike): Result;
    events: {};
}
export interface IDlnSource extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDlnSourceInterface;
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
        createOrder(_orderCreation: IDlnSource.OrderCreationStruct, _affiliateFee: PromiseOrValue<BytesLike>, _referralCode: PromiseOrValue<BigNumberish>, _permitEnvelope: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        globalFixedNativeFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createOrder(_orderCreation: IDlnSource.OrderCreationStruct, _affiliateFee: PromiseOrValue<BytesLike>, _referralCode: PromiseOrValue<BigNumberish>, _permitEnvelope: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    globalFixedNativeFee(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createOrder(_orderCreation: IDlnSource.OrderCreationStruct, _affiliateFee: PromiseOrValue<BytesLike>, _referralCode: PromiseOrValue<BigNumberish>, _permitEnvelope: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        createOrder(_orderCreation: IDlnSource.OrderCreationStruct, _affiliateFee: PromiseOrValue<BytesLike>, _referralCode: PromiseOrValue<BigNumberish>, _permitEnvelope: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        globalFixedNativeFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createOrder(_orderCreation: IDlnSource.OrderCreationStruct, _affiliateFee: PromiseOrValue<BytesLike>, _referralCode: PromiseOrValue<BigNumberish>, _permitEnvelope: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        globalFixedNativeFee(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
