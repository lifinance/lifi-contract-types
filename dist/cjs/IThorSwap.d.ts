import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IThorSwapInterface extends utils.Interface {
    functions: {
        "depositWithExpiry(address,address,uint256,string,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositWithExpiry"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositWithExpiry", values: [string, string, BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "depositWithExpiry", data: BytesLike): Result;
    events: {};
}
export interface IThorSwap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IThorSwapInterface;
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
        depositWithExpiry(vault: string, asset: string, amount: BigNumberish, memo: string, expiration: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    depositWithExpiry(vault: string, asset: string, amount: BigNumberish, memo: string, expiration: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositWithExpiry(vault: string, asset: string, amount: BigNumberish, memo: string, expiration: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        depositWithExpiry(vault: string, asset: string, amount: BigNumberish, memo: string, expiration: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositWithExpiry(vault: string, asset: string, amount: BigNumberish, memo: string, expiration: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
