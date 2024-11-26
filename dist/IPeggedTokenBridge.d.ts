import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IPeggedTokenBridgeInterface extends utils.Interface {
    functions: {
        "burn(address,uint256,address,uint64)": FunctionFragment;
        "mint(bytes,bytes[],address[],uint256[])": FunctionFragment;
        "records(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "mint" | "records"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [BytesLike, BytesLike[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "records", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "records", data: BytesLike): Result;
    events: {};
}
export interface IPeggedTokenBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPeggedTokenBridgeInterface;
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
        burn(_token: string, _amount: BigNumberish, _withdrawAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    burn(_token: string, _amount: BigNumberish, _withdrawAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        burn(_token: string, _amount: BigNumberish, _withdrawAccount: string, _nonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mint(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        burn(_token: string, _amount: BigNumberish, _withdrawAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(_token: string, _amount: BigNumberish, _withdrawAccount: string, _nonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(_request: BytesLike, _sigs: BytesLike[], _signers: string[], _powers: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        records(recordId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
