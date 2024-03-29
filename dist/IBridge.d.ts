import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IBridgeInterface extends utils.Interface {
    functions: {
        "relay(bytes,bytes[],address[],uint256[])": FunctionFragment;
        "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
        "sendNative(address,uint256,uint64,uint64,uint32)": FunctionFragment;
        "transfers(bytes32)": FunctionFragment;
        "verifySigs(bytes,bytes[],address[],uint256[])": FunctionFragment;
        "withdraw(bytes,bytes[],address[],uint256[])": FunctionFragment;
        "withdraws(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "relay" | "send" | "sendNative" | "transfers" | "verifySigs" | "withdraw" | "withdraws"): FunctionFragment;
    encodeFunctionData(functionFragment: "relay", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "send", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "sendNative", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transfers", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "verifySigs", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "withdraws", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySigs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraws", data: BytesLike): Result;
    events: {};
}
export interface IBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBridgeInterface;
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
        relay(_relayRequest: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transfers(transferId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        verifySigs(_msg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[void]>;
        withdraw(_wdmsg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraws(withdrawId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    relay(_relayRequest: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transfers(transferId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    verifySigs(_msg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    withdraw(_wdmsg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraws(withdrawId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        relay(_relayRequest: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transfers(transferId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        verifySigs(_msg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        withdraw(_wdmsg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        withdraws(withdrawId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        relay(_relayRequest: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transfers(transferId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        verifySigs(_msg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_wdmsg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraws(withdrawId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        relay(_relayRequest: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        send(_receiver: PromiseOrValue<string>, _token: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendNative(_receiver: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _dstChainId: PromiseOrValue<BigNumberish>, _nonce: PromiseOrValue<BigNumberish>, _maxSlippage: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transfers(transferId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySigs(_msg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_wdmsg: PromiseOrValue<BytesLike>, _sigs: PromiseOrValue<BytesLike>[], _signers: PromiseOrValue<string>[], _powers: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraws(withdrawId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
