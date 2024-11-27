import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IMayan {
    type PermitParamsStruct = {
        value: BigNumberish;
        deadline: BigNumberish;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
    };
    type PermitParamsStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        string
    ] & {
        value: BigNumber;
        deadline: BigNumber;
        v: number;
        r: string;
        s: string;
    };
}
export interface IMayanInterface extends utils.Interface {
    functions: {
        "forwardERC20(address,uint256,(uint256,uint256,uint8,bytes32,bytes32),address,bytes)": FunctionFragment;
        "forwardEth(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "forwardERC20" | "forwardEth"): FunctionFragment;
    encodeFunctionData(functionFragment: "forwardERC20", values: [string, BigNumberish, IMayan.PermitParamsStruct, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "forwardEth", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "forwardERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forwardEth", data: BytesLike): Result;
    events: {};
}
export interface IMayan extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMayanInterface;
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
        forwardERC20(tokenIn: string, amountIn: BigNumberish, permitParams: IMayan.PermitParamsStruct, mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        forwardEth(mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    forwardERC20(tokenIn: string, amountIn: BigNumberish, permitParams: IMayan.PermitParamsStruct, mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    forwardEth(mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        forwardERC20(tokenIn: string, amountIn: BigNumberish, permitParams: IMayan.PermitParamsStruct, mayanProtocol: string, protocolData: BytesLike, overrides?: CallOverrides): Promise<void>;
        forwardEth(mayanProtocol: string, protocolData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        forwardERC20(tokenIn: string, amountIn: BigNumberish, permitParams: IMayan.PermitParamsStruct, mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        forwardEth(mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        forwardERC20(tokenIn: string, amountIn: BigNumberish, permitParams: IMayan.PermitParamsStruct, mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        forwardEth(mayanProtocol: string, protocolData: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
