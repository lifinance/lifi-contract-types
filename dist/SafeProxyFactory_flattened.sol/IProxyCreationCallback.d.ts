import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IProxyCreationCallbackInterface extends utils.Interface {
    functions: {
        "proxyCreated(address,address,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "proxyCreated"): FunctionFragment;
    encodeFunctionData(functionFragment: "proxyCreated", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "proxyCreated", data: BytesLike): Result;
    events: {};
}
export interface IProxyCreationCallback extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProxyCreationCallbackInterface;
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
        proxyCreated(proxy: PromiseOrValue<string>, _singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    proxyCreated(proxy: PromiseOrValue<string>, _singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        proxyCreated(proxy: PromiseOrValue<string>, _singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        proxyCreated(proxy: PromiseOrValue<string>, _singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        proxyCreated(proxy: PromiseOrValue<string>, _singleton: PromiseOrValue<string>, initializer: PromiseOrValue<BytesLike>, saltNonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
