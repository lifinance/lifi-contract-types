import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IOnchainSwapV3Interface extends utils.Interface {
    functions: {
        "onswap(address,uint256,address,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "onswap"): FunctionFragment;
    encodeFunctionData(functionFragment: "onswap", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "onswap", data: BytesLike): Result;
    events: {};
}
export interface IOnchainSwapV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOnchainSwapV3Interface;
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
        onswap(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, dex: PromiseOrValue<string>, dexgateway: PromiseOrValue<string>, calldata_: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    onswap(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, dex: PromiseOrValue<string>, dexgateway: PromiseOrValue<string>, calldata_: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        onswap(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, dex: PromiseOrValue<string>, dexgateway: PromiseOrValue<string>, calldata_: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        onswap(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, dex: PromiseOrValue<string>, dexgateway: PromiseOrValue<string>, calldata_: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onswap(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, dex: PromiseOrValue<string>, dexgateway: PromiseOrValue<string>, calldata_: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
