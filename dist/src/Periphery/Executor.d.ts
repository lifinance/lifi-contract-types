import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace ILiFi {
    type LiFiDataStruct = {
        transactionId: BytesLike;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumberish;
        amount: BigNumberish;
    };
    type LiFiDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        transactionId: string;
        integrator: string;
        referrer: string;
        sendingAssetId: string;
        receivingAssetId: string;
        receiver: string;
        destinationChainId: BigNumber;
        amount: BigNumber;
    };
}
export declare namespace LibSwap {
    type SwapDataStruct = {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumberish;
        callData: BytesLike;
    };
    type SwapDataStructOutput = [
        string,
        string,
        string,
        string,
        BigNumber,
        string
    ] & {
        callTo: string;
        approveTo: string;
        sendingAssetId: string;
        receivingAssetId: string;
        fromAmount: BigNumber;
        callData: string;
    };
}
export interface ExecutorInterface extends utils.Interface {
    functions: {
        "erc20Proxy()": FunctionFragment;
        "execute(bytes32,string,string,bytes)": FunctionFragment;
        "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
        "gateway()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAxelarGateway(address)": FunctionFragment;
        "setERC20Proxy(address)": FunctionFragment;
        "setStargateRouter(address)": FunctionFragment;
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
        "sgRouter()": FunctionFragment;
        "swapAndCompleteBridgeTokens((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],address,address)": FunctionFragment;
        "swapAndCompleteBridgeTokensViaStargate((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],address,address)": FunctionFragment;
        "swapAndExecute((bytes32,string,address,address,address,address,uint256,uint256),(address,address,address,address,uint256,bytes)[],address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "erc20Proxy" | "execute" | "executeWithToken" | "gateway" | "owner" | "renounceOwnership" | "setAxelarGateway" | "setERC20Proxy" | "setStargateRouter" | "sgReceive" | "sgRouter" | "swapAndCompleteBridgeTokens" | "swapAndCompleteBridgeTokensViaStargate" | "swapAndExecute" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "erc20Proxy", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [BytesLike, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeWithToken", values: [BytesLike, string, string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAxelarGateway", values: [string]): string;
    encodeFunctionData(functionFragment: "setERC20Proxy", values: [string]): string;
    encodeFunctionData(functionFragment: "setStargateRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "sgReceive", values: [
        BigNumberish,
        BytesLike,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sgRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokens", values: [ILiFi.LiFiDataStruct, LibSwap.SwapDataStruct[], string, string]): string;
    encodeFunctionData(functionFragment: "swapAndCompleteBridgeTokensViaStargate", values: [ILiFi.LiFiDataStruct, LibSwap.SwapDataStruct[], string, string]): string;
    encodeFunctionData(functionFragment: "swapAndExecute", values: [
        ILiFi.LiFiDataStruct,
        LibSwap.SwapDataStruct[],
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "erc20Proxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAxelarGateway", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setERC20Proxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStargateRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndCompleteBridgeTokensViaStargate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndExecute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "AxelarExecutionComplete(address,bytes4)": EventFragment;
        "AxelarGatewaySet(address)": EventFragment;
        "ERC20ProxySet(address)": EventFragment;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)": EventFragment;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "StargateRouterSet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AxelarExecutionComplete"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AxelarGatewaySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20ProxySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiFiTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StargateRouterSet"): EventFragment;
}
export interface AxelarExecutionCompleteEventObject {
    callTo: string;
    selector: string;
}
export declare type AxelarExecutionCompleteEvent = TypedEvent<[
    string,
    string
], AxelarExecutionCompleteEventObject>;
export declare type AxelarExecutionCompleteEventFilter = TypedEventFilter<AxelarExecutionCompleteEvent>;
export interface AxelarGatewaySetEventObject {
    gateway: string;
}
export declare type AxelarGatewaySetEvent = TypedEvent<[
    string
], AxelarGatewaySetEventObject>;
export declare type AxelarGatewaySetEventFilter = TypedEventFilter<AxelarGatewaySetEvent>;
export interface ERC20ProxySetEventObject {
    proxy: string;
}
export declare type ERC20ProxySetEvent = TypedEvent<[string], ERC20ProxySetEventObject>;
export declare type ERC20ProxySetEventFilter = TypedEventFilter<ERC20ProxySetEvent>;
export interface LiFiTransferCompletedEventObject {
    transactionId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    timestamp: BigNumber;
}
export declare type LiFiTransferCompletedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], LiFiTransferCompletedEventObject>;
export declare type LiFiTransferCompletedEventFilter = TypedEventFilter<LiFiTransferCompletedEvent>;
export interface LiFiTransferStartedEventObject {
    transactionId: string;
    bridge: string;
    bridgeData: string;
    integrator: string;
    referrer: string;
    sendingAssetId: string;
    receivingAssetId: string;
    receiver: string;
    amount: BigNumber;
    destinationChainId: BigNumber;
    hasSourceSwap: boolean;
    hasDestinationCall: boolean;
}
export declare type LiFiTransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean
], LiFiTransferStartedEventObject>;
export declare type LiFiTransferStartedEventFilter = TypedEventFilter<LiFiTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface StargateRouterSetEventObject {
    router: string;
}
export declare type StargateRouterSetEvent = TypedEvent<[
    string
], StargateRouterSetEventObject>;
export declare type StargateRouterSetEventFilter = TypedEventFilter<StargateRouterSetEvent>;
export interface Executor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExecutorInterface;
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
        erc20Proxy(overrides?: CallOverrides): Promise<[string]>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateway(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAxelarGateway(_gateway: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setERC20Proxy(_erc20Proxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setStargateRouter(_router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgReceive(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, arg3: string, arg4: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<[string]>;
        swapAndCompleteBridgeTokens(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndExecute(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    erc20Proxy(overrides?: CallOverrides): Promise<string>;
    execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateway(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAxelarGateway(_gateway: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setERC20Proxy(_erc20Proxy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setStargateRouter(_router: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgReceive(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, arg3: string, arg4: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgRouter(overrides?: CallOverrides): Promise<string>;
    swapAndCompleteBridgeTokens(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndExecute(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        erc20Proxy(overrides?: CallOverrides): Promise<string>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        gateway(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAxelarGateway(_gateway: string, overrides?: CallOverrides): Promise<void>;
        setERC20Proxy(_erc20Proxy: string, overrides?: CallOverrides): Promise<void>;
        setStargateRouter(_router: string, overrides?: CallOverrides): Promise<void>;
        sgReceive(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, arg3: string, arg4: BigNumberish, _payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        sgRouter(overrides?: CallOverrides): Promise<string>;
        swapAndCompleteBridgeTokens(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: CallOverrides): Promise<void>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: CallOverrides): Promise<void>;
        swapAndExecute(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AxelarExecutionComplete(address,bytes4)"(callTo?: string | null, selector?: null): AxelarExecutionCompleteEventFilter;
        AxelarExecutionComplete(callTo?: string | null, selector?: null): AxelarExecutionCompleteEventFilter;
        "AxelarGatewaySet(address)"(gateway?: string | null): AxelarGatewaySetEventFilter;
        AxelarGatewaySet(gateway?: string | null): AxelarGatewaySetEventFilter;
        "ERC20ProxySet(address)"(proxy?: string | null): ERC20ProxySetEventFilter;
        ERC20ProxySet(proxy?: string | null): ERC20ProxySetEventFilter;
        "LiFiTransferCompleted(bytes32,address,address,uint256,uint256)"(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        LiFiTransferCompleted(transactionId?: BytesLike | null, receivingAssetId?: null, receiver?: null, amount?: null, timestamp?: null): LiFiTransferCompletedEventFilter;
        "LiFiTransferStarted(bytes32,string,string,string,address,address,address,address,uint256,uint256,bool,bool)"(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        LiFiTransferStarted(transactionId?: BytesLike | null, bridge?: null, bridgeData?: null, integrator?: null, referrer?: null, sendingAssetId?: null, receivingAssetId?: null, receiver?: null, amount?: null, destinationChainId?: null, hasSourceSwap?: null, hasDestinationCall?: null): LiFiTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "StargateRouterSet(address)"(router?: string | null): StargateRouterSetEventFilter;
        StargateRouterSet(router?: string | null): StargateRouterSetEventFilter;
    };
    estimateGas: {
        erc20Proxy(overrides?: CallOverrides): Promise<BigNumber>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateway(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAxelarGateway(_gateway: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setERC20Proxy(_erc20Proxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setStargateRouter(_router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgReceive(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, arg3: string, arg4: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgRouter(overrides?: CallOverrides): Promise<BigNumber>;
        swapAndCompleteBridgeTokens(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndExecute(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        erc20Proxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeWithToken(commandId: BytesLike, sourceChain: string, sourceAddress: string, payload: BytesLike, tokenSymbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAxelarGateway(_gateway: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setERC20Proxy(_erc20Proxy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setStargateRouter(_router: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgReceive(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, arg3: string, arg4: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swapAndCompleteBridgeTokens(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndCompleteBridgeTokensViaStargate(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndExecute(_lifiData: ILiFi.LiFiDataStruct, _swapData: LibSwap.SwapDataStruct[], transferredAssetId: string, receiver: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
