import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Client {
    type EVMTokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type EVMTokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type Any2EVMMessageStruct = {
        messageId: PromiseOrValue<BytesLike>;
        sourceChainSelector: PromiseOrValue<BigNumberish>;
        sender: PromiseOrValue<BytesLike>;
        data: PromiseOrValue<BytesLike>;
        destTokenAmounts: Client.EVMTokenAmountStruct[];
    };
    type Any2EVMMessageStructOutput = [
        string,
        BigNumber,
        string,
        string,
        Client.EVMTokenAmountStructOutput[]
    ] & {
        messageId: string;
        sourceChainSelector: BigNumber;
        sender: string;
        data: string;
        destTokenAmounts: Client.EVMTokenAmountStructOutput[];
    };
}
export interface IAny2EVMMessageReceiverInterface extends utils.Interface {
    functions: {
        "ccipReceive((bytes32,uint64,bytes,bytes,(address,uint256)[]))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ccipReceive"): FunctionFragment;
    encodeFunctionData(functionFragment: "ccipReceive", values: [Client.Any2EVMMessageStruct]): string;
    decodeFunctionResult(functionFragment: "ccipReceive", data: BytesLike): Result;
    events: {};
}
export interface IAny2EVMMessageReceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAny2EVMMessageReceiverInterface;
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
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ccipReceive(message: Client.Any2EVMMessageStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
