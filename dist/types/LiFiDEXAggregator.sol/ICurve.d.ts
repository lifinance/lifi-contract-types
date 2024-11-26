import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface ICurveInterface extends utils.Interface {
    functions: {
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exchange"): FunctionFragment;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    events: {};
}
export interface ICurve extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurveInterface;
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
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ICurve.d.ts.map