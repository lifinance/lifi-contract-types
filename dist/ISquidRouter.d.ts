import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISquidMulticall {
    type CallStruct = {
        callType: BigNumberish;
        target: string;
        value: BigNumberish;
        callData: BytesLike;
        payload: BytesLike;
    };
    type CallStructOutput = [number, string, BigNumber, string, string] & {
        callType: number;
        target: string;
        value: BigNumber;
        callData: string;
        payload: string;
    };
}
export interface ISquidRouterInterface extends utils.Interface {
    functions: {
        "bridgeCall(string,uint256,string,string,bytes,address,bool)": FunctionFragment;
        "callBridge(address,uint256,(uint8,address,uint256,bytes,bytes)[],string,string,string)": FunctionFragment;
        "callBridgeCall(address,uint256,(uint8,address,uint256,bytes,bytes)[],string,string,string,bytes,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridgeCall" | "callBridge" | "callBridgeCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridgeCall", values: [string, BigNumberish, string, string, BytesLike, string, boolean]): string;
    encodeFunctionData(functionFragment: "callBridge", values: [
        string,
        BigNumberish,
        ISquidMulticall.CallStruct[],
        string,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "callBridgeCall", values: [
        string,
        BigNumberish,
        ISquidMulticall.CallStruct[],
        string,
        string,
        string,
        BytesLike,
        string,
        boolean
    ]): string;
    decodeFunctionResult(functionFragment: "bridgeCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callBridgeCall", data: BytesLike): Result;
    events: {};
}
export interface ISquidRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISquidRouterInterface;
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
        bridgeCall(bridgedTokenSymbol: string, amount: BigNumberish, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callBridge(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callBridgeCall(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    bridgeCall(bridgedTokenSymbol: string, amount: BigNumberish, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callBridge(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callBridgeCall(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        bridgeCall(bridgedTokenSymbol: string, amount: BigNumberish, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: CallOverrides): Promise<void>;
        callBridge(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, overrides?: CallOverrides): Promise<void>;
        callBridgeCall(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        bridgeCall(bridgedTokenSymbol: string, amount: BigNumberish, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        callBridge(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        callBridgeCall(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeCall(bridgedTokenSymbol: string, amount: BigNumberish, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callBridge(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callBridgeCall(token: string, amount: BigNumberish, calls: ISquidMulticall.CallStruct[], bridgedTokenSymbol: string, destinationChain: string, destinationAddress: string, payload: BytesLike, gasRefundRecipient: string, enableExpress: boolean, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
