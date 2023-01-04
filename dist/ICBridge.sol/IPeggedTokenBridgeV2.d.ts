import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IPeggedTokenBridgeV2Interface extends utils.Interface {
    functions: {
        "burn(address,uint256,uint64,address,uint64)": FunctionFragment;
        "burnFrom(address,uint256,uint64,address,uint64)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "burnFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    events: {};
}
export interface IPeggedTokenBridgeV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPeggedTokenBridgeV2Interface;
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
        burn(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burnFrom(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    burn(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burnFrom(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        burn(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        burnFrom(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        burn(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burnFrom(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(_token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _toChainId: PromiseOrValue<BigNumberish>, _toAccount: PromiseOrValue<string>, _nonce: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
