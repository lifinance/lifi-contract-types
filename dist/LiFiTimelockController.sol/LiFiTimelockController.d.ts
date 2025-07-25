import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface LiFiTimelockControllerInterface extends utils.Interface {
    functions: {
        "CANCELLER_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "EXECUTOR_ROLE()": FunctionFragment;
        "PROPOSER_ROLE()": FunctionFragment;
        "TIMELOCK_ADMIN_ROLE()": FunctionFragment;
        "cancel(bytes32)": FunctionFragment;
        "diamond()": FunctionFragment;
        "execute(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
        "getMinDelay()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getTimestamp(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hashOperation(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
        "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
        "isOperation(bytes32)": FunctionFragment;
        "isOperationDone(bytes32)": FunctionFragment;
        "isOperationPending(bytes32)": FunctionFragment;
        "isOperationReady(bytes32)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "schedule(address,uint256,bytes,bytes32,bytes32,uint256)": FunctionFragment;
        "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": FunctionFragment;
        "setDiamondAddress(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "unpauseDiamond(address[])": FunctionFragment;
        "updateDelay(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CANCELLER_ROLE" | "DEFAULT_ADMIN_ROLE" | "EXECUTOR_ROLE" | "PROPOSER_ROLE" | "TIMELOCK_ADMIN_ROLE" | "cancel" | "diamond" | "execute" | "executeBatch" | "getMinDelay" | "getRoleAdmin" | "getTimestamp" | "grantRole" | "hasRole" | "hashOperation" | "hashOperationBatch" | "isOperation" | "isOperationDone" | "isOperationPending" | "isOperationReady" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "renounceRole" | "revokeRole" | "schedule" | "scheduleBatch" | "setDiamondAddress" | "supportsInterface" | "unpauseDiamond" | "updateDelay"): FunctionFragment;
    encodeFunctionData(functionFragment: "CANCELLER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TIMELOCK_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "diamond", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getMinDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getTimestamp", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hashOperation", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "hashOperationBatch", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "isOperation", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isOperationDone", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isOperationPending", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isOperationReady", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "schedule", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "scheduleBatch", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setDiamondAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "unpauseDiamond", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "updateDelay", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "CANCELLER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TIMELOCK_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "diamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperationBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationPending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationReady", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduleBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDiamondAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpauseDiamond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelay", data: BytesLike): Result;
    events: {
        "CallExecuted(bytes32,uint256,address,uint256,bytes)": EventFragment;
        "CallSalt(bytes32,bytes32)": EventFragment;
        "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": EventFragment;
        "Cancelled(bytes32)": EventFragment;
        "DiamondAddressUpdated(address)": EventFragment;
        "MinDelayChange(uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallSalt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondAddressUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinDelayChange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface CallExecutedEventObject {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
}
export type CallExecutedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string
], CallExecutedEventObject>;
export type CallExecutedEventFilter = TypedEventFilter<CallExecutedEvent>;
export interface CallSaltEventObject {
    id: string;
    salt: string;
}
export type CallSaltEvent = TypedEvent<[string, string], CallSaltEventObject>;
export type CallSaltEventFilter = TypedEventFilter<CallSaltEvent>;
export interface CallScheduledEventObject {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
    predecessor: string;
    delay: BigNumber;
}
export type CallScheduledEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber
], CallScheduledEventObject>;
export type CallScheduledEventFilter = TypedEventFilter<CallScheduledEvent>;
export interface CancelledEventObject {
    id: string;
}
export type CancelledEvent = TypedEvent<[string], CancelledEventObject>;
export type CancelledEventFilter = TypedEventFilter<CancelledEvent>;
export interface DiamondAddressUpdatedEventObject {
    diamond: string;
}
export type DiamondAddressUpdatedEvent = TypedEvent<[
    string
], DiamondAddressUpdatedEventObject>;
export type DiamondAddressUpdatedEventFilter = TypedEventFilter<DiamondAddressUpdatedEvent>;
export interface MinDelayChangeEventObject {
    oldDuration: BigNumber;
    newDuration: BigNumber;
}
export type MinDelayChangeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MinDelayChangeEventObject>;
export type MinDelayChangeEventFilter = TypedEventFilter<MinDelayChangeEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface LiFiTimelockController extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiFiTimelockControllerInterface;
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
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        cancel(id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        diamond(overrides?: CallOverrides): Promise<[string]>;
        execute(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getMinDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getTimestamp(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        hashOperation(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        hashOperationBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        isOperation(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationDone(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationPending(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationReady(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        schedule(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scheduleBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDiamondAddress(_diamond: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDelay(newDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    CANCELLER_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
    PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;
    TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    cancel(id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    diamond(overrides?: CallOverrides): Promise<string>;
    execute(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getTimestamp(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    hashOperation(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    hashOperationBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    isOperation(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isOperationDone(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isOperationPending(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isOperationReady(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    schedule(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scheduleBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDiamondAddress(_diamond: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDelay(newDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;
        TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        cancel(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        diamond(overrides?: CallOverrides): Promise<string>;
        execute(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        executeBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getTimestamp(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hashOperation(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        hashOperationBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        isOperation(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isOperationDone(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isOperationPending(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isOperationReady(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        schedule(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        scheduleBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setDiamondAddress(_diamond: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        updateDelay(newDelay: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallExecuted(bytes32,uint256,address,uint256,bytes)"(id?: PromiseOrValue<BytesLike> | null, index?: PromiseOrValue<BigNumberish> | null, target?: null, value?: null, data?: null): CallExecutedEventFilter;
        CallExecuted(id?: PromiseOrValue<BytesLike> | null, index?: PromiseOrValue<BigNumberish> | null, target?: null, value?: null, data?: null): CallExecutedEventFilter;
        "CallSalt(bytes32,bytes32)"(id?: PromiseOrValue<BytesLike> | null, salt?: null): CallSaltEventFilter;
        CallSalt(id?: PromiseOrValue<BytesLike> | null, salt?: null): CallSaltEventFilter;
        "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)"(id?: PromiseOrValue<BytesLike> | null, index?: PromiseOrValue<BigNumberish> | null, target?: null, value?: null, data?: null, predecessor?: null, delay?: null): CallScheduledEventFilter;
        CallScheduled(id?: PromiseOrValue<BytesLike> | null, index?: PromiseOrValue<BigNumberish> | null, target?: null, value?: null, data?: null, predecessor?: null, delay?: null): CallScheduledEventFilter;
        "Cancelled(bytes32)"(id?: PromiseOrValue<BytesLike> | null): CancelledEventFilter;
        Cancelled(id?: PromiseOrValue<BytesLike> | null): CancelledEventFilter;
        "DiamondAddressUpdated(address)"(diamond?: PromiseOrValue<string> | null): DiamondAddressUpdatedEventFilter;
        DiamondAddressUpdated(diamond?: PromiseOrValue<string> | null): DiamondAddressUpdatedEventFilter;
        "MinDelayChange(uint256,uint256)"(oldDuration?: null, newDuration?: null): MinDelayChangeEventFilter;
        MinDelayChange(oldDuration?: null, newDuration?: null): MinDelayChangeEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        diamond(overrides?: CallOverrides): Promise<BigNumber>;
        execute(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getTimestamp(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        hashOperation(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        hashOperationBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperation(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationDone(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationPending(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationReady(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        schedule(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scheduleBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDiamondAddress(_diamond: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDelay(newDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TIMELOCK_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(id: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        diamond(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, payload: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getMinDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimestamp(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashOperation(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashOperationBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperation(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationDone(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationPending(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationReady(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>[], arg3: PromiseOrValue<BigNumberish>[], arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BigNumberish>, arg4: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        schedule(target: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scheduleBatch(targets: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], payloads: PromiseOrValue<BytesLike>[], predecessor: PromiseOrValue<BytesLike>, salt: PromiseOrValue<BytesLike>, delay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDiamondAddress(_diamond: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpauseDiamond(_blacklist: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDelay(newDelay: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
