import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IOutputCallbackInterface extends utils.Interface {
    functions: {
        "outputFilled(bytes32,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "outputFilled"): FunctionFragment;
    encodeFunctionData(functionFragment: "outputFilled", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "outputFilled", data: BytesLike): Result;
    events: {};
}
export interface IOutputCallback extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOutputCallbackInterface;
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
        outputFilled(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, executionData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    outputFilled(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, executionData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        outputFilled(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, executionData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        outputFilled(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, executionData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        outputFilled(token: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, executionData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
