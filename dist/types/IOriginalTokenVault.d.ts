import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IOriginalTokenVaultInterface extends utils.Interface {
    functions: {
        "deposit(address,uint256,uint64,address,uint64)": FunctionFragment;
        "depositNative(uint256,uint64,address,uint64)": FunctionFragment;
        "records(bytes32)": FunctionFragment;
        "withdraw(bytes,bytes[],address[],uint256[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "depositNative" | "records" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositNative", values: [BigNumberish, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "records", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BytesLike, BytesLike[], string[], BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "records", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {};
}
export interface IOriginalTokenVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOriginalTokenVaultInterface;
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
        deposit(_token: string, _amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositNative(_amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        withdraw(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    deposit(_token: string, _amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositNative(_amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    withdraw(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(_token: string, _amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositNative(_amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        withdraw(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(_token: string, _amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositNative(_amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(_token: string, _amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositNative(_amount: BigNumberish, _mintChainId: BigNumberish, _mintAccount: string, _nonce: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IOriginalTokenVault.d.ts.map