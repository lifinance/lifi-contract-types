import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SafeTransferLibInterface extends utils.Interface {
    functions: {};
    events: {
        "Debug(bool,bool,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Debug"): EventFragment;
}
export interface DebugEventObject {
    one: boolean;
    two: boolean;
    retsize: BigNumber;
}
export declare type DebugEvent = TypedEvent<[
    boolean,
    boolean,
    BigNumber
], DebugEventObject>;
export declare type DebugEventFilter = TypedEventFilter<DebugEvent>;
export interface SafeTransferLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeTransferLibInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "Debug(bool,bool,uint256)"(one?: null, two?: null, retsize?: null): DebugEventFilter;
        Debug(one?: null, two?: null, retsize?: null): DebugEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
