import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ICircleBridgeProxyV2Interface extends utils.Interface {
    functions: {
        "depositForBurn(uint256,uint64,bytes32,address,uint256,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositForBurn"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositForBurn", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "depositForBurn", data: BytesLike): Result;
    events: {};
}
export interface ICircleBridgeProxyV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICircleBridgeProxyV2Interface;
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
        depositForBurn(_amount: PromiseOrValue<BigNumberish>, _dstChid: PromiseOrValue<BigNumberish>, _mintRecipient: PromiseOrValue<BytesLike>, _burnToken: PromiseOrValue<string>, _maxFee: PromiseOrValue<BigNumberish>, _minFinalityThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    depositForBurn(_amount: PromiseOrValue<BigNumberish>, _dstChid: PromiseOrValue<BigNumberish>, _mintRecipient: PromiseOrValue<BytesLike>, _burnToken: PromiseOrValue<string>, _maxFee: PromiseOrValue<BigNumberish>, _minFinalityThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositForBurn(_amount: PromiseOrValue<BigNumberish>, _dstChid: PromiseOrValue<BigNumberish>, _mintRecipient: PromiseOrValue<BytesLike>, _burnToken: PromiseOrValue<string>, _maxFee: PromiseOrValue<BigNumberish>, _minFinalityThreshold: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        depositForBurn(_amount: PromiseOrValue<BigNumberish>, _dstChid: PromiseOrValue<BigNumberish>, _mintRecipient: PromiseOrValue<BytesLike>, _burnToken: PromiseOrValue<string>, _maxFee: PromiseOrValue<BigNumberish>, _minFinalityThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositForBurn(_amount: PromiseOrValue<BigNumberish>, _dstChid: PromiseOrValue<BigNumberish>, _mintRecipient: PromiseOrValue<BytesLike>, _burnToken: PromiseOrValue<string>, _maxFee: PromiseOrValue<BigNumberish>, _minFinalityThreshold: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
