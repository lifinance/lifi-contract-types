import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export declare namespace IConnextHandler {
    type CallParamsStruct = {
        to: PromiseOrValue<string>;
        callData: PromiseOrValue<BytesLike>;
        originDomain: PromiseOrValue<BigNumberish>;
        destinationDomain: PromiseOrValue<BigNumberish>;
        agent: PromiseOrValue<string>;
        recovery: PromiseOrValue<string>;
        forceSlow: PromiseOrValue<boolean>;
        receiveLocal: PromiseOrValue<boolean>;
        callback: PromiseOrValue<string>;
        callbackFee: PromiseOrValue<BigNumberish>;
        relayerFee: PromiseOrValue<BigNumberish>;
        slippageTol: PromiseOrValue<BigNumberish>;
    };
    type CallParamsStructOutput = [
        string,
        string,
        number,
        number,
        string,
        string,
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        to: string;
        callData: string;
        originDomain: number;
        destinationDomain: number;
        agent: string;
        recovery: string;
        forceSlow: boolean;
        receiveLocal: boolean;
        callback: string;
        callbackFee: BigNumber;
        relayerFee: BigNumber;
        slippageTol: BigNumber;
    };
    type XCallArgsStruct = {
        params: IConnextHandler.CallParamsStruct;
        transactingAsset: PromiseOrValue<string>;
        transactingAmount: PromiseOrValue<BigNumberish>;
        originMinOut: PromiseOrValue<BigNumberish>;
    };
    type XCallArgsStructOutput = [
        IConnextHandler.CallParamsStructOutput,
        string,
        BigNumber,
        BigNumber
    ] & {
        params: IConnextHandler.CallParamsStructOutput;
        transactingAsset: string;
        transactingAmount: BigNumber;
        originMinOut: BigNumber;
    };
}
export interface IConnextHandlerInterface extends utils.Interface {
    functions: {
        "xcall(((address,bytes,uint32,uint32,address,address,bool,bool,address,uint256,uint256,uint256),address,uint256,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "xcall"): FunctionFragment;
    encodeFunctionData(functionFragment: "xcall", values: [IConnextHandler.XCallArgsStruct]): string;
    decodeFunctionResult(functionFragment: "xcall", data: BytesLike): Result;
    events: {};
}
export interface IConnextHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConnextHandlerInterface;
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
        xcall(_args: IConnextHandler.XCallArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    xcall(_args: IConnextHandler.XCallArgsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        xcall(_args: IConnextHandler.XCallArgsStruct, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        xcall(_args: IConnextHandler.XCallArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        xcall(_args: IConnextHandler.XCallArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
