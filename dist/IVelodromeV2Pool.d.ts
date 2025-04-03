import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IVelodromeV2Pool {
    type ObservationStruct = {
        timestamp: PromiseOrValue<BigNumberish>;
        reserve0Cumulative: PromiseOrValue<BigNumberish>;
        reserve1Cumulative: PromiseOrValue<BigNumberish>;
    };
    type ObservationStructOutput = [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
    };
}
export interface IVelodromeV2PoolInterface extends utils.Interface {
    functions: {
        "blockTimestampLast()": FunctionFragment;
        "burn(address)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "claimable0(address)": FunctionFragment;
        "claimable1(address)": FunctionFragment;
        "currentCumulativePrices()": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountOut(uint256,address)": FunctionFragment;
        "getReserves()": FunctionFragment;
        "index0()": FunctionFragment;
        "index1()": FunctionFragment;
        "initialize(address,address,bool)": FunctionFragment;
        "lastObservation()": FunctionFragment;
        "metadata()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "observationLength()": FunctionFragment;
        "periodSize()": FunctionFragment;
        "poolFees()": FunctionFragment;
        "prices(address,uint256,uint256)": FunctionFragment;
        "quote(address,uint256,uint256)": FunctionFragment;
        "reserve0()": FunctionFragment;
        "reserve0CumulativeLast()": FunctionFragment;
        "reserve1()": FunctionFragment;
        "reserve1CumulativeLast()": FunctionFragment;
        "sample(address,uint256,uint256,uint256)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setSymbol(string)": FunctionFragment;
        "skim(address)": FunctionFragment;
        "stable()": FunctionFragment;
        "supplyIndex0(address)": FunctionFragment;
        "supplyIndex1(address)": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "sync()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "tokens()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "blockTimestampLast" | "burn" | "claimFees" | "claimable0" | "claimable1" | "currentCumulativePrices" | "factory" | "getAmountOut" | "getReserves" | "index0" | "index1" | "initialize" | "lastObservation" | "metadata" | "mint" | "observationLength" | "periodSize" | "poolFees" | "prices" | "quote" | "reserve0" | "reserve0CumulativeLast" | "reserve1" | "reserve1CumulativeLast" | "sample" | "setName" | "setSymbol" | "skim" | "stable" | "supplyIndex0" | "supplyIndex1" | "swap" | "sync" | "token0" | "token1" | "tokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "blockTimestampLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimable0", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimable1", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "currentCumulativePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "index0", values?: undefined): string;
    encodeFunctionData(functionFragment: "index1", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "lastObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "observationLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "prices", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "quote", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "sample", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setName", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSymbol", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "skim", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyIndex0", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supplyIndex1", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    decodeFunctionResult(functionFragment: "blockTimestampLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimable1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentCumulativePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "index1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observationLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sample", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyIndex0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyIndex1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    events: {
        "Burn(address,address,uint256,uint256)": EventFragment;
        "Claim(address,address,uint256,uint256)": EventFragment;
        "Fees(address,uint256,uint256)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "Swap(address,address,uint256,uint256,uint256,uint256)": EventFragment;
        "Sync(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Fees"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
}
export interface BurnEventObject {
    sender: string;
    to: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type BurnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BurnEventObject>;
export declare type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface ClaimEventObject {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type ClaimEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], ClaimEventObject>;
export declare type ClaimEventFilter = TypedEventFilter<ClaimEvent>;
export interface FeesEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type FeesEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], FeesEventObject>;
export declare type FeesEventFilter = TypedEventFilter<FeesEvent>;
export interface MintEventObject {
    sender: string;
    amount0: BigNumber;
    amount1: BigNumber;
}
export declare type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MintEventObject>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export interface SwapEventObject {
    sender: string;
    to: string;
    amount0In: BigNumber;
    amount1In: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
}
export declare type SwapEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SwapEventObject>;
export declare type SwapEventFilter = TypedEventFilter<SwapEvent>;
export interface SyncEventObject {
    reserve0: BigNumber;
    reserve1: BigNumber;
}
export declare type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;
export declare type SyncEventFilter = TypedEventFilter<SyncEvent>;
export interface IVelodromeV2Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVelodromeV2PoolInterface;
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
        blockTimestampLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimable0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimable1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        index0(overrides?: CallOverrides): Promise<[BigNumber]>;
        index1(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<[IVelodromeV2Pool.ObservationStructOutput]>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        observationLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        poolFees(overrides?: CallOverrides): Promise<[string]>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        reserve0(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        setName(__name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSymbol(__symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[boolean]>;
        supplyIndex0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyIndex1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
    };
    blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimFees(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimable0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    claimable1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    currentCumulativePrices(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
        blockTimestamp: BigNumber;
    }>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    index0(overrides?: CallOverrides): Promise<BigNumber>;
    index1(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastObservation(overrides?: CallOverrides): Promise<IVelodromeV2Pool.ObservationStructOutput>;
    metadata(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        dec0: BigNumber;
        dec1: BigNumber;
        r0: BigNumber;
        r1: BigNumber;
        st: boolean;
        t0: string;
        t1: string;
    }>;
    mint(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    observationLength(overrides?: CallOverrides): Promise<BigNumber>;
    periodSize(overrides?: CallOverrides): Promise<BigNumber>;
    poolFees(overrides?: CallOverrides): Promise<string>;
    prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    reserve0(overrides?: CallOverrides): Promise<BigNumber>;
    reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
    sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    setName(__name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSymbol(__symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    skim(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<boolean>;
    supplyIndex0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    supplyIndex1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sync(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    tokens(overrides?: CallOverrides): Promise<[string, string]>;
    callStatic: {
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        claimable0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        index0(overrides?: CallOverrides): Promise<BigNumber>;
        index1(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        lastObservation(overrides?: CallOverrides): Promise<IVelodromeV2Pool.ObservationStructOutput>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        poolFees(overrides?: CallOverrides): Promise<string>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        setName(__name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSymbol(__symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        skim(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<boolean>;
        supplyIndex0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sync(overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
    };
    filters: {
        "Burn(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): BurnEventFilter;
        Burn(sender?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): BurnEventFilter;
        "Claim(address,address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): ClaimEventFilter;
        Claim(sender?: PromiseOrValue<string> | null, recipient?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): ClaimEventFilter;
        "Fees(address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): FeesEventFilter;
        Fees(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): FeesEventFilter;
        "Mint(address,uint256,uint256)"(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        Mint(sender?: PromiseOrValue<string> | null, amount0?: null, amount1?: null): MintEventFilter;
        "Swap(address,address,uint256,uint256,uint256,uint256)"(sender?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null): SwapEventFilter;
        Swap(sender?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount0In?: null, amount1In?: null, amount0Out?: null, amount1Out?: null): SwapEventFilter;
        "Sync(uint256,uint256)"(reserve0?: null, reserve1?: null): SyncEventFilter;
        Sync(reserve0?: null, reserve1?: null): SyncEventFilter;
    };
    estimateGas: {
        blockTimestampLast(overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimable0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        claimable1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        index0(overrides?: CallOverrides): Promise<BigNumber>;
        index1(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastObservation(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        periodSize(overrides?: CallOverrides): Promise<BigNumber>;
        poolFees(overrides?: CallOverrides): Promise<BigNumber>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setName(__name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSymbol(__symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        supplyIndex1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        tokens(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        blockTimestampLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimable0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimable1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: PromiseOrValue<BigNumberish>, tokenIn: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        index0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        index1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_token0: PromiseOrValue<string>, _token1: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        observationLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prices(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quote(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, granularity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve0CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1CumulativeLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sample(tokenIn: PromiseOrValue<string>, amountIn: PromiseOrValue<BigNumberish>, points: PromiseOrValue<BigNumberish>, window: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setName(__name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSymbol(__symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        skim(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyIndex0(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyIndex1(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: PromiseOrValue<BigNumberish>, amount1Out: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
