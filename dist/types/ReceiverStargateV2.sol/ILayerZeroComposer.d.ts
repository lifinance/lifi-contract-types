import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface ILayerZeroComposerInterface extends utils.Interface {
    functions: {
        "lzCompose(address,bytes32,bytes,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "lzCompose"): FunctionFragment;
    encodeFunctionData(functionFragment: "lzCompose", values: [string, BytesLike, BytesLike, string, BytesLike]): string;
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
        lzCompose(_from: string, _guid: BytesLike, _message: BytesLike, _executor: string, _extraData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    lzCompose(_from: string, _guid: BytesLike, _message: BytesLike, _executor: string, _extraData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        lzCompose(_from: string, _guid: BytesLike, _message: BytesLike, _executor: string, _extraData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        lzCompose(_from: string, _guid: BytesLike, _message: BytesLike, _executor: string, _extraData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        lzCompose(_from: string, _guid: BytesLike, _message: BytesLike, _executor: string, _extraData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ILayerZeroComposer.d.ts.map