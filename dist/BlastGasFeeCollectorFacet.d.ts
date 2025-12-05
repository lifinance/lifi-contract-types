import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface BlastGasFeeCollectorFacetInterface extends utils.Interface {
    functions: {
        "BLAST()": FunctionFragment;
        "GAS_FEE_RECIPIENT()": FunctionFragment;
        "claimGasFees()": FunctionFragment;
        "configureGasMode()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BLAST" | "GAS_FEE_RECIPIENT" | "claimGasFees" | "configureGasMode"): FunctionFragment;
    encodeFunctionData(functionFragment: "BLAST", values?: undefined): string;
    encodeFunctionData(functionFragment: "GAS_FEE_RECIPIENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimGasFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "configureGasMode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BLAST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GAS_FEE_RECIPIENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimGasFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureGasMode", data: BytesLike): Result;
    events: {
        "GasFeesClaimed(address,uint256)": EventFragment;
        "GasModeConfigured()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GasFeesClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasModeConfigured"): EventFragment;
}
export interface GasFeesClaimedEventObject {
    recipient: string;
    amount: BigNumber;
}
export type GasFeesClaimedEvent = TypedEvent<[
    string,
    BigNumber
], GasFeesClaimedEventObject>;
export type GasFeesClaimedEventFilter = TypedEventFilter<GasFeesClaimedEvent>;
export interface GasModeConfiguredEventObject {
}
export type GasModeConfiguredEvent = TypedEvent<[
], GasModeConfiguredEventObject>;
export type GasModeConfiguredEventFilter = TypedEventFilter<GasModeConfiguredEvent>;
export interface BlastGasFeeCollectorFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BlastGasFeeCollectorFacetInterface;
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
        BLAST(overrides?: CallOverrides): Promise<[string]>;
        GAS_FEE_RECIPIENT(overrides?: CallOverrides): Promise<[string]>;
        claimGasFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        configureGasMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    BLAST(overrides?: CallOverrides): Promise<string>;
    GAS_FEE_RECIPIENT(overrides?: CallOverrides): Promise<string>;
    claimGasFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    configureGasMode(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        BLAST(overrides?: CallOverrides): Promise<string>;
        GAS_FEE_RECIPIENT(overrides?: CallOverrides): Promise<string>;
        claimGasFees(overrides?: CallOverrides): Promise<void>;
        configureGasMode(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GasFeesClaimed(address,uint256)"(recipient?: PromiseOrValue<string> | null, amount?: null): GasFeesClaimedEventFilter;
        GasFeesClaimed(recipient?: PromiseOrValue<string> | null, amount?: null): GasFeesClaimedEventFilter;
        "GasModeConfigured()"(): GasModeConfiguredEventFilter;
        GasModeConfigured(): GasModeConfiguredEventFilter;
    };
    estimateGas: {
        BLAST(overrides?: CallOverrides): Promise<BigNumber>;
        GAS_FEE_RECIPIENT(overrides?: CallOverrides): Promise<BigNumber>;
        claimGasFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        configureGasMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        BLAST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GAS_FEE_RECIPIENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimGasFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        configureGasMode(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
