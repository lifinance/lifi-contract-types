import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type MandateOutputStruct = {
    oracle: PromiseOrValue<BytesLike>;
    settler: PromiseOrValue<BytesLike>;
    chainId: PromiseOrValue<BigNumberish>;
    token: PromiseOrValue<BytesLike>;
    amount: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<BytesLike>;
    call: PromiseOrValue<BytesLike>;
    context: PromiseOrValue<BytesLike>;
};
export type MandateOutputStructOutput = [
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
] & {
    oracle: string;
    settler: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
    recipient: string;
    call: string;
    context: string;
};
export type StandardOrderStruct = {
    user: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    originChainId: PromiseOrValue<BigNumberish>;
    expires: PromiseOrValue<BigNumberish>;
    fillDeadline: PromiseOrValue<BigNumberish>;
    inputOracle: PromiseOrValue<string>;
    inputs: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>][];
    outputs: MandateOutputStruct[];
};
export type StandardOrderStructOutput = [
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    string,
    [
        BigNumber,
        BigNumber
    ][],
    MandateOutputStructOutput[]
] & {
    user: string;
    nonce: BigNumber;
    originChainId: BigNumber;
    expires: number;
    fillDeadline: number;
    inputOracle: string;
    inputs: [BigNumber, BigNumber][];
    outputs: MandateOutputStructOutput[];
};
export interface IOriginSettlerInterface extends utils.Interface {
    functions: {
        "open((address,uint256,uint256,uint32,uint32,address,uint256[2][],(bytes32,bytes32,uint256,bytes32,uint256,bytes32,bytes,bytes)[]))": FunctionFragment;
        "openFor((address,uint256,uint256,uint32,uint32,address,uint256[2][],(bytes32,bytes32,uint256,bytes32,uint256,bytes32,bytes,bytes)[]),address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "open" | "openFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "open", values: [StandardOrderStruct]): string;
    encodeFunctionData(functionFragment: "openFor", values: [
        StandardOrderStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openFor", data: BytesLike): Result;
    events: {};
}
export interface IOriginSettler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOriginSettlerInterface;
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
        open(order: StandardOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        openFor(order: StandardOrderStruct, sponsor: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    open(order: StandardOrderStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    openFor(order: StandardOrderStruct, sponsor: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        open(order: StandardOrderStruct, overrides?: CallOverrides): Promise<void>;
        openFor(order: StandardOrderStruct, sponsor: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        open(order: StandardOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        openFor(order: StandardOrderStruct, sponsor: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        open(order: StandardOrderStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        openFor(order: StandardOrderStruct, sponsor: PromiseOrValue<string>, signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
