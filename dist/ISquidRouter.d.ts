import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ISquidMulticall {
    type CallStruct = {
        callType: PromiseOrValue<BigNumberish>;
        target: PromiseOrValue<string>;
        value: PromiseOrValue<BigNumberish>;
        callData: PromiseOrValue<BytesLike>;
        payload: PromiseOrValue<BytesLike>;
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
        "bridgeCall(string,string,uint256,(uint8,address,uint256,bytes,bytes)[],address,bool)": FunctionFragment;
        "callBridge(address,uint256,string,string,string,(uint8,address,uint256,bytes,bytes)[])": FunctionFragment;
        "callBridgeCall(address,uint256,string,string,(uint8,address,uint256,bytes,bytes)[],(uint8,address,uint256,bytes,bytes)[],address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "bridgeCall" | "callBridge" | "callBridgeCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "bridgeCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        ISquidMulticall.CallStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "callBridge", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        ISquidMulticall.CallStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "callBridgeCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        ISquidMulticall.CallStruct[],
        ISquidMulticall.CallStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
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
        bridgeCall(destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, calls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callBridge(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, calls: ISquidMulticall.CallStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callBridgeCall(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, sourceCalls: ISquidMulticall.CallStruct[], destinationCalls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    bridgeCall(destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, calls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callBridge(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, calls: ISquidMulticall.CallStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callBridgeCall(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, sourceCalls: ISquidMulticall.CallStruct[], destinationCalls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        bridgeCall(destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, calls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        callBridge(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, calls: ISquidMulticall.CallStruct[], overrides?: CallOverrides): Promise<void>;
        callBridgeCall(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, sourceCalls: ISquidMulticall.CallStruct[], destinationCalls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        bridgeCall(destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, calls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callBridge(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, calls: ISquidMulticall.CallStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callBridgeCall(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, sourceCalls: ISquidMulticall.CallStruct[], destinationCalls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeCall(destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, calls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callBridge(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, destinationAddress: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, calls: ISquidMulticall.CallStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callBridgeCall(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChain: PromiseOrValue<string>, bridgedTokenSymbol: PromiseOrValue<string>, sourceCalls: ISquidMulticall.CallStruct[], destinationCalls: ISquidMulticall.CallStruct[], refundRecipient: PromiseOrValue<string>, forecallEnabled: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
