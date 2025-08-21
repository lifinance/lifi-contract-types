import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IEco {
    type TokenAmountStruct = {
        token: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type TokenAmountStructOutput = [string, BigNumber] & {
        token: string;
        amount: BigNumber;
    };
    type RewardStruct = {
        deadline: PromiseOrValue<BigNumberish>;
        creator: PromiseOrValue<string>;
        prover: PromiseOrValue<string>;
        nativeAmount: PromiseOrValue<BigNumberish>;
        tokens: IEco.TokenAmountStruct[];
    };
    type RewardStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        IEco.TokenAmountStructOutput[]
    ] & {
        deadline: BigNumber;
        creator: string;
        prover: string;
        nativeAmount: BigNumber;
        tokens: IEco.TokenAmountStructOutput[];
    };
}
export interface IEcoInterface extends utils.Interface {
    functions: {
        "fund(uint64,bytes32,(uint64,address,address,uint256,(address,uint256)[]),bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fund"): FunctionFragment;
    encodeFunctionData(functionFragment: "fund", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        IEco.RewardStruct,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
    events: {};
}
export interface IEco extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEcoInterface;
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
        fund(destination: PromiseOrValue<BigNumberish>, routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    fund(destination: PromiseOrValue<BigNumberish>, routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        fund(destination: PromiseOrValue<BigNumberish>, routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        fund(destination: PromiseOrValue<BigNumberish>, routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        fund(destination: PromiseOrValue<BigNumberish>, routeHash: PromiseOrValue<BytesLike>, reward: IEco.RewardStruct, allowPartial: PromiseOrValue<boolean>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
