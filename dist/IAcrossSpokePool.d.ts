import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface IAcrossSpokePoolInterface extends utils.Interface {
    functions: {
        "deposit(address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositV3(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,uint32,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deposit" | "depositV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "depositV3", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV3", data: BytesLike): Result;
    events: {};
}
export interface IAcrossSpokePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAcrossSpokePoolInterface;
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
        deposit(recipient: PromiseOrValue<string>, originToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, relayerFeePct: PromiseOrValue<BigNumberish>, quoteTimestamp: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, maxCount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositV3(depositor: PromiseOrValue<string>, recipient: PromiseOrValue<string>, inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, exclusiveRelayer: PromiseOrValue<string>, quoteTimestamp: PromiseOrValue<BigNumberish>, fillDeadline: PromiseOrValue<BigNumberish>, exclusivityDeadline: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deposit(recipient: PromiseOrValue<string>, originToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, relayerFeePct: PromiseOrValue<BigNumberish>, quoteTimestamp: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, maxCount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositV3(depositor: PromiseOrValue<string>, recipient: PromiseOrValue<string>, inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, exclusiveRelayer: PromiseOrValue<string>, quoteTimestamp: PromiseOrValue<BigNumberish>, fillDeadline: PromiseOrValue<BigNumberish>, exclusivityDeadline: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deposit(recipient: PromiseOrValue<string>, originToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, relayerFeePct: PromiseOrValue<BigNumberish>, quoteTimestamp: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, maxCount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        depositV3(depositor: PromiseOrValue<string>, recipient: PromiseOrValue<string>, inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, exclusiveRelayer: PromiseOrValue<string>, quoteTimestamp: PromiseOrValue<BigNumberish>, fillDeadline: PromiseOrValue<BigNumberish>, exclusivityDeadline: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        deposit(recipient: PromiseOrValue<string>, originToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, relayerFeePct: PromiseOrValue<BigNumberish>, quoteTimestamp: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, maxCount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositV3(depositor: PromiseOrValue<string>, recipient: PromiseOrValue<string>, inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, exclusiveRelayer: PromiseOrValue<string>, quoteTimestamp: PromiseOrValue<BigNumberish>, fillDeadline: PromiseOrValue<BigNumberish>, exclusivityDeadline: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deposit(recipient: PromiseOrValue<string>, originToken: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, relayerFeePct: PromiseOrValue<BigNumberish>, quoteTimestamp: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, maxCount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositV3(depositor: PromiseOrValue<string>, recipient: PromiseOrValue<string>, inputToken: PromiseOrValue<string>, outputToken: PromiseOrValue<string>, inputAmount: PromiseOrValue<BigNumberish>, outputAmount: PromiseOrValue<BigNumberish>, destinationChainId: PromiseOrValue<BigNumberish>, exclusiveRelayer: PromiseOrValue<string>, quoteTimestamp: PromiseOrValue<BigNumberish>, fillDeadline: PromiseOrValue<BigNumberish>, exclusivityDeadline: PromiseOrValue<BigNumberish>, message: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
