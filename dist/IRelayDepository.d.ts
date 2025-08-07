import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IRelayDepositoryInterface extends utils.Interface {
    functions: {
        "depositErc20(address,address,bytes32)": FunctionFragment;
        "depositErc20(address,address,uint256,bytes32)": FunctionFragment;
        "depositNative(address,bytes32)": FunctionFragment;
        "getAllocator()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositErc20(address,address,bytes32)" | "depositErc20(address,address,uint256,bytes32)" | "depositNative" | "getAllocator"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositErc20(address,address,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "depositErc20(address,address,uint256,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "depositNative", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAllocator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "depositErc20(address,address,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositErc20(address,address,uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllocator", data: BytesLike): Result;
    events: {};
}
export interface IRelayDepository extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRelayDepositoryInterface;
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
        "depositErc20(address,address,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "depositErc20(address,address,uint256,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositNative(depositor: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAllocator(overrides?: CallOverrides): Promise<[string]>;
    };
    "depositErc20(address,address,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "depositErc20(address,address,uint256,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositNative(depositor: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAllocator(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        "depositErc20(address,address,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "depositErc20(address,address,uint256,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        depositNative(depositor: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getAllocator(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        "depositErc20(address,address,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "depositErc20(address,address,uint256,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositNative(depositor: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAllocator(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "depositErc20(address,address,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "depositErc20(address,address,uint256,bytes32)"(depositor: PromiseOrValue<string>, token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositNative(depositor: PromiseOrValue<string>, id: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAllocator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
