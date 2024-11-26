import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common.js";
export interface ITokenMessagingInterface extends utils.Interface {
    functions: {
        "assetIds(address)": FunctionFragment;
        "stargateImpls(uint16)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "assetIds" | "stargateImpls"): FunctionFragment;
    encodeFunctionData(functionFragment: "assetIds", values: [string]): string;
    encodeFunctionData(functionFragment: "stargateImpls", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "assetIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stargateImpls", data: BytesLike): Result;
    events: {};
}
export interface ITokenMessaging extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenMessagingInterface;
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
        assetIds(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stargateImpls(assetId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    assetIds(tokenAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stargateImpls(assetId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        assetIds(tokenAddress: string, overrides?: CallOverrides): Promise<number>;
        stargateImpls(assetId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        assetIds(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stargateImpls(assetId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        assetIds(tokenAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stargateImpls(assetId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ITokenMessaging.d.ts.map