import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IL1StandardBridgeInterface extends utils.Interface {
    functions: {
        "depositERC20To(address,address,address,uint256,uint32,bytes)": FunctionFragment;
        "depositETHTo(address,uint32,bytes)": FunctionFragment;
        "depositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositERC20To" | "depositETHTo" | "depositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositERC20To", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "depositETHTo", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "depositERC20To", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETHTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    events: {};
}
export interface IL1StandardBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1StandardBridgeInterface;
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
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositTo(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositTo(_to: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositTo(_to: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositTo(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositTo(_to: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
