import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ERC4626AdapterInterface extends utils.Interface {
    functions: {
        "deposit(address,address,uint256)": FunctionFragment;
        "resolveAsset(address)": FunctionFragment;
        "totalAssets(address,address)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "resolveAsset" | "totalAssets" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "resolveAsset", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalAssets", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface ERC4626Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC4626AdapterInterface;
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
        deposit(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            asset: string;
        }>;
        totalAssets(_underlying: PromiseOrValue<string>, _holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            assets: BigNumber;
        }>;
        withdraw(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deposit(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    totalAssets(_underlying: PromiseOrValue<string>, _holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        totalAssets(_underlying: PromiseOrValue<string>, _holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        deposit(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalAssets(_underlying: PromiseOrValue<string>, _holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolveAsset(_underlying: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAssets(_underlying: PromiseOrValue<string>, _holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_asset: PromiseOrValue<string>, _underlying: PromiseOrValue<string>, _assets: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
