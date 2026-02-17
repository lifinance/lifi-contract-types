import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface TestViolationsEventsInterface extends utils.Interface {
    functions: {
        "emitEvent()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "emitEvent"): FunctionFragment;
    encodeFunctionData(functionFragment: "emitEvent", values?: undefined): string;
    decodeFunctionResult(functionFragment: "emitEvent", data: BytesLike): Result;
    events: {
        "SomeEvent(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SomeEvent"): EventFragment;
}
export interface SomeEventEventObject {
    value: BigNumber;
}
export type SomeEventEvent = TypedEvent<[BigNumber], SomeEventEventObject>;
export type SomeEventEventFilter = TypedEventFilter<SomeEventEvent>;
export interface TestViolationsEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestViolationsEventsInterface;
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
        emitEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    emitEvent(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        emitEvent(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SomeEvent(uint256)"(value?: null): SomeEventEventFilter;
        SomeEvent(value?: null): SomeEventEventFilter;
    };
    estimateGas: {
        emitEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        emitEvent(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
