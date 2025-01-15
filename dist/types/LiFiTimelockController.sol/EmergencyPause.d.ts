import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface EmergencyPauseInterface extends utils.Interface {
    functions: {
        "unpauseDiamond(address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "unpauseDiamond"): FunctionFragment;
    encodeFunctionData(functionFragment: "unpauseDiamond", values: [string[]]): string;
    decodeFunctionResult(functionFragment: "unpauseDiamond", data: BytesLike): Result;
    events: {};
}
export interface EmergencyPause extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EmergencyPauseInterface;
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
        unpauseDiamond(_blacklist: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    unpauseDiamond(_blacklist: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        unpauseDiamond(_blacklist: string[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        unpauseDiamond(_blacklist: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        unpauseDiamond(_blacklist: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EmergencyPause.d.ts.map