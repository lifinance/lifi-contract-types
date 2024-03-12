import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IMayanBridge {
    type RelayerFeesStruct = {
        swapFee: PromiseOrValue<BigNumberish>;
        redeemFee: PromiseOrValue<BigNumberish>;
        refundFee: PromiseOrValue<BigNumberish>;
    };
    type RelayerFeesStructOutput = [BigNumber, BigNumber, BigNumber] & {
        swapFee: BigNumber;
        redeemFee: BigNumber;
        refundFee: BigNumber;
    };
    type RecepientStruct = {
        mayanAddr: PromiseOrValue<BytesLike>;
        mayanChainId: PromiseOrValue<BigNumberish>;
        auctionAddr: PromiseOrValue<BytesLike>;
        destAddr: PromiseOrValue<BytesLike>;
        destChainId: PromiseOrValue<BigNumberish>;
        referrer: PromiseOrValue<BytesLike>;
        refundAddr: PromiseOrValue<BytesLike>;
    };
    type RecepientStructOutput = [
        string,
        number,
        string,
        string,
        number,
        string,
        string
    ] & {
        mayanAddr: string;
        mayanChainId: number;
        auctionAddr: string;
        destAddr: string;
        destChainId: number;
        referrer: string;
        refundAddr: string;
    };
    type CriteriaStruct = {
        transferDeadline: PromiseOrValue<BigNumberish>;
        swapDeadline: PromiseOrValue<BigNumberish>;
        amountOutMin: PromiseOrValue<BigNumberish>;
        unwrap: PromiseOrValue<boolean>;
        gasDrop: PromiseOrValue<BigNumberish>;
        customPayload: PromiseOrValue<BytesLike>;
    };
    type CriteriaStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string
    ] & {
        transferDeadline: BigNumber;
        swapDeadline: BigNumber;
        amountOutMin: BigNumber;
        unwrap: boolean;
        gasDrop: BigNumber;
        customPayload: string;
    };
}
export interface IMayanBridgeInterface extends utils.Interface {
    functions: {
        "swap((uint64,uint64,uint64),(bytes32,uint16,bytes32,bytes32,uint16,bytes32,bytes32),bytes32,uint16,(uint256,uint64,uint64,bool,uint64,bytes),address,uint256)": FunctionFragment;
        "wrapAndSwapETH((uint64,uint64,uint64),(bytes32,uint16,bytes32,bytes32,uint16,bytes32,bytes32),bytes32,uint16,(uint256,uint64,uint64,bool,uint64,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "swap" | "wrapAndSwapETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "swap", values: [
        IMayanBridge.RelayerFeesStruct,
        IMayanBridge.RecepientStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        IMayanBridge.CriteriaStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "wrapAndSwapETH", values: [
        IMayanBridge.RelayerFeesStruct,
        IMayanBridge.RecepientStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        IMayanBridge.CriteriaStruct
    ]): string;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapAndSwapETH", data: BytesLike): Result;
    events: {};
}
export interface IMayanBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMayanBridgeInterface;
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
        swap(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        wrapAndSwapETH(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    swap(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    wrapAndSwapETH(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        swap(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        wrapAndSwapETH(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        swap(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        wrapAndSwapETH(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        swap(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        wrapAndSwapETH(relayerFees: IMayanBridge.RelayerFeesStruct, recipient: IMayanBridge.RecepientStruct, tokenOutAddr: PromiseOrValue<BytesLike>, tokenOutChainId: PromiseOrValue<BigNumberish>, criteria: IMayanBridge.CriteriaStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
