import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface DexManagerFacetInterface extends utils.Interface {
    functions: {
        "isContractApproved(address)": FunctionFragment;
        "isFunctionApproved(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isContractApproved" | "isFunctionApproved"): FunctionFragment;
    encodeFunctionData(functionFragment: "isContractApproved", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isFunctionApproved", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "isContractApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFunctionApproved", data: BytesLike): Result;
    events: {};
}
export interface DexManagerFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DexManagerFacetInterface;
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
        isContractApproved(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            approved: boolean;
        }>;
    };
    isContractApproved(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isContractApproved(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isContractApproved(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isContractApproved(_contract: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFunctionApproved(_signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
