import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ILayerZeroComposerInterface extends utils.Interface {
    functions: {
        "lzCompose(address,bytes32,bytes,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "lzCompose"): FunctionFragment;
    encodeFunctionData(functionFragment: "lzCompose", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "lzCompose", data: BytesLike): Result;
    events: {};
}
export interface ILayerZeroComposer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILayerZeroComposerInterface;
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
        lzCompose(_from: PromiseOrValue<string>, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    lzCompose(_from: PromiseOrValue<string>, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        lzCompose(_from: PromiseOrValue<string>, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        lzCompose(_from: PromiseOrValue<string>, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        lzCompose(_from: PromiseOrValue<string>, _guid: PromiseOrValue<BytesLike>, _message: PromiseOrValue<BytesLike>, _executor: PromiseOrValue<string>, _extraData: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
