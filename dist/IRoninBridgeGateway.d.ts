import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IRoninBridgeGateway {
    type InfoStruct = {
        erc: PromiseOrValue<BigNumberish>;
        id: PromiseOrValue<BigNumberish>;
        quantity: PromiseOrValue<BigNumberish>;
    };
    type InfoStructOutput = [number, BigNumber, BigNumber] & {
        erc: number;
        id: BigNumber;
        quantity: BigNumber;
    };
    type RequestStruct = {
        recipientAddr: PromiseOrValue<string>;
        tokenAddr: PromiseOrValue<string>;
        info: IRoninBridgeGateway.InfoStruct;
    };
    type RequestStructOutput = [
        string,
        string,
        IRoninBridgeGateway.InfoStructOutput
    ] & {
        recipientAddr: string;
        tokenAddr: string;
        info: IRoninBridgeGateway.InfoStructOutput;
    };
}
export interface IRoninBridgeGatewayInterface extends utils.Interface {
    functions: {
        "requestDepositFor((address,address,(uint8,uint256,uint256)))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "requestDepositFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "requestDepositFor", values: [IRoninBridgeGateway.RequestStruct]): string;
    decodeFunctionResult(functionFragment: "requestDepositFor", data: BytesLike): Result;
    events: {};
}
export interface IRoninBridgeGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRoninBridgeGatewayInterface;
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
        requestDepositFor(_request: IRoninBridgeGateway.RequestStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    requestDepositFor(_request: IRoninBridgeGateway.RequestStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        requestDepositFor(_request: IRoninBridgeGateway.RequestStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        requestDepositFor(_request: IRoninBridgeGateway.RequestStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        requestDepositFor(_request: IRoninBridgeGateway.RequestStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
