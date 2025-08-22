import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface CoreRouteFacetInterface extends utils.Interface {
    functions: {
        "cancelOwnershipTransfer()": FunctionFragment;
        "confirmOwnershipTransfer()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "processRoute(address,uint256,address,uint256,address,bytes)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawToken(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancelOwnershipTransfer" | "confirmOwnershipTransfer" | "owner" | "pendingOwner" | "processRoute" | "transferOwnership" | "withdrawToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancelOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "confirmOwnershipTransfer", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "processRoute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "cancelOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confirmOwnershipTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "processRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToken", data: BytesLike): Result;
    events: {
        "OwnershipTransferRequested(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Route(address,address,address,address,uint256,uint256,uint256)": EventFragment;
        "TokensWithdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Route"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensWithdrawn"): EventFragment;
}
export interface OwnershipTransferRequestedEventObject {
    _from: string;
    _to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferRequestedEventObject>;
export type OwnershipTransferRequestedEventFilter = TypedEventFilter<OwnershipTransferRequestedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RouteEventObject {
    from: string;
    to: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOutMin: BigNumber;
    amountOut: BigNumber;
}
export type RouteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RouteEventObject>;
export type RouteEventFilter = TypedEventFilter<RouteEvent>;
export interface TokensWithdrawnEventObject {
    assetId: string;
    receiver: string;
    amount: BigNumber;
}
export type TokensWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TokensWithdrawnEventObject>;
export type TokensWithdrawnEventFilter = TypedEventFilter<TokensWithdrawnEvent>;
export interface CoreRouteFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CoreRouteFacetInterface;
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
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancelOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    confirmOwnershipTransfer(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferRequested(address,address)"(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        OwnershipTransferRequested(_from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null): OwnershipTransferRequestedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Route(address,address,address,address,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, to?: null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
        Route(from?: PromiseOrValue<string> | null, to?: null, tokenIn?: PromiseOrValue<string> | null, tokenOut?: PromiseOrValue<string> | null, amountIn?: null, amountOutMin?: null, amountOut?: null): RouteEventFilter;
        "TokensWithdrawn(address,address,uint256)"(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
        TokensWithdrawn(assetId?: null, receiver?: null, amount?: null): TokensWithdrawnEventFilter;
    };
    estimateGas: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancelOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        confirmOwnershipTransfer(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        processRoute(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, tokenOut: PromiseOrValue<string>, amountOutMin: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, route: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(_newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawToken(assetId: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
