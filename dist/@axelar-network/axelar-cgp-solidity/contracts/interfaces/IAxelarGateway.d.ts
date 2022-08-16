import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IAxelarGatewayInterface extends utils.Interface {
    functions: {
        "adminEpoch()": FunctionFragment;
        "adminThreshold(uint256)": FunctionFragment;
        "admins(uint256)": FunctionFragment;
        "allTokensFrozen()": FunctionFragment;
        "callContract(string,string,bytes)": FunctionFragment;
        "callContractWithToken(string,string,bytes,string,uint256)": FunctionFragment;
        "execute(bytes)": FunctionFragment;
        "implementation()": FunctionFragment;
        "isCommandExecuted(bytes32)": FunctionFragment;
        "isContractCallAndMintApproved(bytes32,string,string,address,bytes32,string,uint256)": FunctionFragment;
        "isContractCallApproved(bytes32,string,string,address,bytes32)": FunctionFragment;
        "sendToken(string,string,string,uint256)": FunctionFragment;
        "setTokenDailyMintLimits(string[],uint256[])": FunctionFragment;
        "setup(bytes)": FunctionFragment;
        "tokenAddresses(string)": FunctionFragment;
        "tokenDailyMintAmount(string)": FunctionFragment;
        "tokenDailyMintLimit(string)": FunctionFragment;
        "tokenFrozen(string)": FunctionFragment;
        "upgrade(address,bytes32,bytes)": FunctionFragment;
        "validateContractCall(bytes32,string,string,bytes32)": FunctionFragment;
        "validateContractCallAndMint(bytes32,string,string,bytes32,string,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adminEpoch" | "adminThreshold" | "admins" | "allTokensFrozen" | "callContract" | "callContractWithToken" | "execute" | "implementation" | "isCommandExecuted" | "isContractCallAndMintApproved" | "isContractCallApproved" | "sendToken" | "setTokenDailyMintLimits" | "setup" | "tokenAddresses" | "tokenDailyMintAmount" | "tokenDailyMintLimit" | "tokenFrozen" | "upgrade" | "validateContractCall" | "validateContractCallAndMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "adminEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admins", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allTokensFrozen", values?: undefined): string;
    encodeFunctionData(functionFragment: "callContract", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "callContractWithToken", values: [string, string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "execute", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCommandExecuted", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isContractCallAndMintApproved", values: [BytesLike, string, string, string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isContractCallApproved", values: [BytesLike, string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sendToken", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTokenDailyMintLimits", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setup", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenAddresses", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenDailyMintAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenDailyMintLimit", values: [string]): string;
    encodeFunctionData(functionFragment: "tokenFrozen", values: [string]): string;
    encodeFunctionData(functionFragment: "upgrade", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateContractCall", values: [BytesLike, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateContractCallAndMint", values: [BytesLike, string, string, BytesLike, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "adminEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allTokensFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callContractWithToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCommandExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContractCallAndMintApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContractCallApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenDailyMintLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDailyMintAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDailyMintLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateContractCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateContractCallAndMint", data: BytesLike): Result;
    events: {
        "ContractCall(address,string,string,bytes32,bytes)": EventFragment;
        "ContractCallApproved(bytes32,string,string,address,bytes32,bytes32,uint256)": EventFragment;
        "ContractCallApprovedWithMint(bytes32,string,string,address,bytes32,string,uint256,bytes32,uint256)": EventFragment;
        "ContractCallWithToken(address,string,string,bytes32,bytes,string,uint256)": EventFragment;
        "Executed(bytes32)": EventFragment;
        "OperatorshipTransferred(bytes)": EventFragment;
        "TokenDailyMintLimitUpdated(string,uint256)": EventFragment;
        "TokenDeployed(string,address)": EventFragment;
        "TokenSent(address,string,string,string,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractCallApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractCallApprovedWithMint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractCallWithToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorshipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDailyMintLimitUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface ContractCallEventObject {
    sender: string;
    destinationChain: string;
    destinationContractAddress: string;
    payloadHash: string;
    payload: string;
}
export declare type ContractCallEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], ContractCallEventObject>;
export declare type ContractCallEventFilter = TypedEventFilter<ContractCallEvent>;
export interface ContractCallApprovedEventObject {
    commandId: string;
    sourceChain: string;
    sourceAddress: string;
    contractAddress: string;
    payloadHash: string;
    sourceTxHash: string;
    sourceEventIndex: BigNumber;
}
export declare type ContractCallApprovedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber
], ContractCallApprovedEventObject>;
export declare type ContractCallApprovedEventFilter = TypedEventFilter<ContractCallApprovedEvent>;
export interface ContractCallApprovedWithMintEventObject {
    commandId: string;
    sourceChain: string;
    sourceAddress: string;
    contractAddress: string;
    payloadHash: string;
    symbol: string;
    amount: BigNumber;
    sourceTxHash: string;
    sourceEventIndex: BigNumber;
}
export declare type ContractCallApprovedWithMintEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber
], ContractCallApprovedWithMintEventObject>;
export declare type ContractCallApprovedWithMintEventFilter = TypedEventFilter<ContractCallApprovedWithMintEvent>;
export interface ContractCallWithTokenEventObject {
    sender: string;
    destinationChain: string;
    destinationContractAddress: string;
    payloadHash: string;
    payload: string;
    symbol: string;
    amount: BigNumber;
}
export declare type ContractCallWithTokenEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber
], ContractCallWithTokenEventObject>;
export declare type ContractCallWithTokenEventFilter = TypedEventFilter<ContractCallWithTokenEvent>;
export interface ExecutedEventObject {
    commandId: string;
}
export declare type ExecutedEvent = TypedEvent<[string], ExecutedEventObject>;
export declare type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;
export interface OperatorshipTransferredEventObject {
    newOperatorsData: string;
}
export declare type OperatorshipTransferredEvent = TypedEvent<[
    string
], OperatorshipTransferredEventObject>;
export declare type OperatorshipTransferredEventFilter = TypedEventFilter<OperatorshipTransferredEvent>;
export interface TokenDailyMintLimitUpdatedEventObject {
    symbol: string;
    limit: BigNumber;
}
export declare type TokenDailyMintLimitUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], TokenDailyMintLimitUpdatedEventObject>;
export declare type TokenDailyMintLimitUpdatedEventFilter = TypedEventFilter<TokenDailyMintLimitUpdatedEvent>;
export interface TokenDeployedEventObject {
    symbol: string;
    tokenAddresses: string;
}
export declare type TokenDeployedEvent = TypedEvent<[
    string,
    string
], TokenDeployedEventObject>;
export declare type TokenDeployedEventFilter = TypedEventFilter<TokenDeployedEvent>;
export interface TokenSentEventObject {
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    symbol: string;
    amount: BigNumber;
}
export declare type TokenSentEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber
], TokenSentEventObject>;
export declare type TokenSentEventFilter = TypedEventFilter<TokenSentEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface IAxelarGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAxelarGatewayInterface;
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
        adminEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        adminThreshold(epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<[string[]]>;
        allTokensFrozen(overrides?: CallOverrides): Promise<[boolean]>;
        callContract(destinationChain: string, contractAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callContractWithToken(destinationChain: string, contractAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        execute(input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        isCommandExecuted(commandId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isContractCallAndMintApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isContractCallApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        sendToken(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTokenDailyMintLimits(symbols: string[], limits: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setup(params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<[string]>;
        tokenDailyMintAmount(symbol: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenDailyMintLimit(symbol: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<[boolean]>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, setupParams: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateContractCall(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateContractCallAndMint(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;
    adminThreshold(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    allTokensFrozen(overrides?: CallOverrides): Promise<boolean>;
    callContract(destinationChain: string, contractAddress: string, payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callContractWithToken(destinationChain: string, contractAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    execute(input: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<string>;
    isCommandExecuted(commandId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isContractCallAndMintApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isContractCallApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    sendToken(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTokenDailyMintLimits(symbols: string[], limits: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setup(params: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<string>;
    tokenDailyMintAmount(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
    tokenDailyMintLimit(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
    tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<boolean>;
    upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, setupParams: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateContractCall(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateContractCallAndMint(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        adminThreshold(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        allTokensFrozen(overrides?: CallOverrides): Promise<boolean>;
        callContract(destinationChain: string, contractAddress: string, payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        callContractWithToken(destinationChain: string, contractAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        execute(input: BytesLike, overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
        isCommandExecuted(commandId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isContractCallAndMintApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isContractCallApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        sendToken(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTokenDailyMintLimits(symbols: string[], limits: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        setup(params: BytesLike, overrides?: CallOverrides): Promise<void>;
        tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<string>;
        tokenDailyMintAmount(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDailyMintLimit(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<boolean>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, setupParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateContractCall(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        validateContractCallAndMint(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ContractCall(address,string,string,bytes32,bytes)"(sender?: string | null, destinationChain?: null, destinationContractAddress?: null, payloadHash?: BytesLike | null, payload?: null): ContractCallEventFilter;
        ContractCall(sender?: string | null, destinationChain?: null, destinationContractAddress?: null, payloadHash?: BytesLike | null, payload?: null): ContractCallEventFilter;
        "ContractCallApproved(bytes32,string,string,address,bytes32,bytes32,uint256)"(commandId?: BytesLike | null, sourceChain?: null, sourceAddress?: null, contractAddress?: string | null, payloadHash?: BytesLike | null, sourceTxHash?: null, sourceEventIndex?: null): ContractCallApprovedEventFilter;
        ContractCallApproved(commandId?: BytesLike | null, sourceChain?: null, sourceAddress?: null, contractAddress?: string | null, payloadHash?: BytesLike | null, sourceTxHash?: null, sourceEventIndex?: null): ContractCallApprovedEventFilter;
        "ContractCallApprovedWithMint(bytes32,string,string,address,bytes32,string,uint256,bytes32,uint256)"(commandId?: BytesLike | null, sourceChain?: null, sourceAddress?: null, contractAddress?: string | null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, sourceTxHash?: null, sourceEventIndex?: null): ContractCallApprovedWithMintEventFilter;
        ContractCallApprovedWithMint(commandId?: BytesLike | null, sourceChain?: null, sourceAddress?: null, contractAddress?: string | null, payloadHash?: BytesLike | null, symbol?: null, amount?: null, sourceTxHash?: null, sourceEventIndex?: null): ContractCallApprovedWithMintEventFilter;
        "ContractCallWithToken(address,string,string,bytes32,bytes,string,uint256)"(sender?: string | null, destinationChain?: null, destinationContractAddress?: null, payloadHash?: BytesLike | null, payload?: null, symbol?: null, amount?: null): ContractCallWithTokenEventFilter;
        ContractCallWithToken(sender?: string | null, destinationChain?: null, destinationContractAddress?: null, payloadHash?: BytesLike | null, payload?: null, symbol?: null, amount?: null): ContractCallWithTokenEventFilter;
        "Executed(bytes32)"(commandId?: BytesLike | null): ExecutedEventFilter;
        Executed(commandId?: BytesLike | null): ExecutedEventFilter;
        "OperatorshipTransferred(bytes)"(newOperatorsData?: null): OperatorshipTransferredEventFilter;
        OperatorshipTransferred(newOperatorsData?: null): OperatorshipTransferredEventFilter;
        "TokenDailyMintLimitUpdated(string,uint256)"(symbol?: null, limit?: null): TokenDailyMintLimitUpdatedEventFilter;
        TokenDailyMintLimitUpdated(symbol?: null, limit?: null): TokenDailyMintLimitUpdatedEventFilter;
        "TokenDeployed(string,address)"(symbol?: null, tokenAddresses?: null): TokenDeployedEventFilter;
        TokenDeployed(symbol?: null, tokenAddresses?: null): TokenDeployedEventFilter;
        "TokenSent(address,string,string,string,uint256)"(sender?: string | null, destinationChain?: null, destinationAddress?: null, symbol?: null, amount?: null): TokenSentEventFilter;
        TokenSent(sender?: string | null, destinationChain?: null, destinationAddress?: null, symbol?: null, amount?: null): TokenSentEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        adminEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        adminThreshold(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allTokensFrozen(overrides?: CallOverrides): Promise<BigNumber>;
        callContract(destinationChain: string, contractAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callContractWithToken(destinationChain: string, contractAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        execute(input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        isCommandExecuted(commandId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isContractCallAndMintApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isContractCallApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        sendToken(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTokenDailyMintLimits(symbols: string[], limits: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setup(params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDailyMintAmount(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenDailyMintLimit(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<BigNumber>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, setupParams: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateContractCall(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateContractCallAndMint(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adminEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adminThreshold(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admins(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allTokensFrozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callContract(destinationChain: string, contractAddress: string, payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callContractWithToken(destinationChain: string, contractAddress: string, payload: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        execute(input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCommandExecuted(commandId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContractCallAndMintApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContractCallApproved(commandId: BytesLike, sourceChain: string, sourceAddress: string, contractAddress: string, payloadHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendToken(destinationChain: string, destinationAddress: string, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTokenDailyMintLimits(symbols: string[], limits: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setup(params: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenAddresses(symbol: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDailyMintAmount(symbol: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDailyMintLimit(symbol: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenFrozen(symbol: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgrade(newImplementation: string, newImplementationCodeHash: BytesLike, setupParams: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateContractCall(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateContractCallAndMint(commandId: BytesLike, sourceChain: string, sourceAddress: string, payloadHash: BytesLike, symbol: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
