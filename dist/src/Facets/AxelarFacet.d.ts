import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace AxelarFacet {
    type AxelarCallParametersStruct = {
        destinationChain: BigNumberish;
        destinationAddress: string;
        callTo: string;
        callData: BytesLike;
    };
    type AxelarCallParametersStructOutput = [
        BigNumber,
        string,
        string,
        string
    ] & {
        destinationChain: BigNumber;
        destinationAddress: string;
        callTo: string;
        callData: string;
    };
}
export interface AxelarFacetInterface extends utils.Interface {
    functions: {
        "executeCallViaAxelar((uint256,address,address,bytes))": FunctionFragment;
        "executeCallWithTokenViaAxelar((uint256,address,address,bytes),address,uint256,address)": FunctionFragment;
        "setChainName(uint256,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "executeCallViaAxelar" | "executeCallWithTokenViaAxelar" | "setChainName"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeCallViaAxelar", values: [AxelarFacet.AxelarCallParametersStruct]): string;
    encodeFunctionData(functionFragment: "executeCallWithTokenViaAxelar", values: [
        AxelarFacet.AxelarCallParametersStruct,
        string,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "setChainName", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "executeCallViaAxelar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeCallWithTokenViaAxelar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainName", data: BytesLike): Result;
    events: {
        "ChainNameRegistered(uint256,string)": EventFragment;
        "LifiXChainTXStarted(uint256,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChainNameRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LifiXChainTXStarted"): EventFragment;
}
export interface ChainNameRegisteredEventObject {
    chainID: BigNumber;
    chainName: string;
}
export declare type ChainNameRegisteredEvent = TypedEvent<[
    BigNumber,
    string
], ChainNameRegisteredEventObject>;
export declare type ChainNameRegisteredEventFilter = TypedEventFilter<ChainNameRegisteredEvent>;
export interface LifiXChainTXStartedEventObject {
    destinationChain: BigNumber;
    callTo: string;
    callData: string;
}
export declare type LifiXChainTXStartedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], LifiXChainTXStartedEventObject>;
export declare type LifiXChainTXStartedEventFilter = TypedEventFilter<LifiXChainTXStartedEvent>;
export interface AxelarFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AxelarFacetInterface;
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
        executeCallViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeCallWithTokenViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, token: string, amount: BigNumberish, recoveryAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setChainName(_chainId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    executeCallViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeCallWithTokenViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, token: string, amount: BigNumberish, recoveryAddress: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setChainName(_chainId: BigNumberish, _name: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        executeCallViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, overrides?: CallOverrides): Promise<void>;
        executeCallWithTokenViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, token: string, amount: BigNumberish, recoveryAddress: string, overrides?: CallOverrides): Promise<void>;
        setChainName(_chainId: BigNumberish, _name: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ChainNameRegistered(uint256,string)"(chainID?: BigNumberish | null, chainName?: null): ChainNameRegisteredEventFilter;
        ChainNameRegistered(chainID?: BigNumberish | null, chainName?: null): ChainNameRegisteredEventFilter;
        "LifiXChainTXStarted(uint256,address,bytes)"(destinationChain?: BigNumberish | null, callTo?: string | null, callData?: null): LifiXChainTXStartedEventFilter;
        LifiXChainTXStarted(destinationChain?: BigNumberish | null, callTo?: string | null, callData?: null): LifiXChainTXStartedEventFilter;
    };
    estimateGas: {
        executeCallViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeCallWithTokenViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, token: string, amount: BigNumberish, recoveryAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setChainName(_chainId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        executeCallViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeCallWithTokenViaAxelar(params: AxelarFacet.AxelarCallParametersStruct, token: string, amount: BigNumberish, recoveryAddress: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setChainName(_chainId: BigNumberish, _name: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
