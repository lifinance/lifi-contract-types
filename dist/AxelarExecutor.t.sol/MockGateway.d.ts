import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface MockGatewayInterface extends utils.Interface {
    functions: {
        "setTokenAddress(string,address)": FunctionFragment;
        "tokenAddresses(string)": FunctionFragment;
        "validateContractCall(bytes32,string,string,bytes32)": FunctionFragment;
        "validateContractCallAndMint(bytes32,string,string,bytes32,string,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setTokenAddress" | "tokenAddresses" | "validateContractCall" | "validateContractCallAndMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "setTokenAddress", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokenAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validateContractCall", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "validateContractCallAndMint", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "setTokenAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateContractCallAndMint", data: BytesLike): Result;
    events: {};
}
export interface MockGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockGatewayInterface;
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
        setTokenAddress(_symbol: PromiseOrValue<string>, _tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        validateContractCall(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        validateContractCallAndMint(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    setTokenAddress(_symbol: PromiseOrValue<string>, _tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    validateContractCall(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    validateContractCallAndMint(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        setTokenAddress(_symbol: PromiseOrValue<string>, _tokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tokenAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        validateContractCall(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        validateContractCallAndMint(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        setTokenAddress(_symbol: PromiseOrValue<string>, _tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        validateContractCall(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        validateContractCallAndMint(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        setTokenAddress(_symbol: PromiseOrValue<string>, _tokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateContractCall(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateContractCallAndMint(arg0: PromiseOrValue<BytesLike>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<string>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
