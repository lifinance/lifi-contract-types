import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface FusePoolZapInterface extends utils.Interface {
    functions: {
        "zapIn(address,address,uint256)": FunctionFragment;
        "zapIn(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "zapIn(address,address,uint256)" | "zapIn(address)"): FunctionFragment;
    encodeFunctionData(functionFragment: "zapIn(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "zapIn(address)", values: [string]): string;
    decodeFunctionResult(functionFragment: "zapIn(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zapIn(address)", data: BytesLike): Result;
    events: {
        "ZappedIn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ZappedIn"): EventFragment;
}
export interface ZappedInEventObject {
    pool: string;
    fToken: string;
    amount: BigNumber;
}
export declare type ZappedInEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ZappedInEventObject>;
export declare type ZappedInEventFilter = TypedEventFilter<ZappedInEvent>;
export interface FusePoolZap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FusePoolZapInterface;
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
        "zapIn(address,address,uint256)"(_pool: string, _supplyToken: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "zapIn(address)"(_pool: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    "zapIn(address,address,uint256)"(_pool: string, _supplyToken: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "zapIn(address)"(_pool: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "zapIn(address,address,uint256)"(_pool: string, _supplyToken: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "zapIn(address)"(_pool: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ZappedIn(address,address,uint256)"(pool?: string | null, fToken?: string | null, amount?: null): ZappedInEventFilter;
        ZappedIn(pool?: string | null, fToken?: string | null, amount?: null): ZappedInEventFilter;
    };
    estimateGas: {
        "zapIn(address,address,uint256)"(_pool: string, _supplyToken: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "zapIn(address)"(_pool: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "zapIn(address,address,uint256)"(_pool: string, _supplyToken: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "zapIn(address)"(_pool: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
