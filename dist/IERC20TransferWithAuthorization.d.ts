import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IERC20TransferWithAuthorizationInterface extends utils.Interface {
    functions: {
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)": FunctionFragment;
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)" | "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"): FunctionFragment;
    encodeFunctionData(functionFragment: "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)", data: BytesLike): Result;
    events: {};
}
export interface IERC20TransferWithAuthorization extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20TransferWithAuthorizationInterface;
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
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "receiveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, validAfter: PromiseOrValue<BigNumberish>, validBefore: PromiseOrValue<BigNumberish>, nonce: PromiseOrValue<BytesLike>, v: PromiseOrValue<BigNumberish>, r: PromiseOrValue<BytesLike>, s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
