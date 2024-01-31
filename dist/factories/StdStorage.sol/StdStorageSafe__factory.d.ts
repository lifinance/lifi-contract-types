import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { StdStorageSafe, StdStorageSafeInterface } from "../../StdStorage.sol/StdStorageSafe";
declare type StdStorageSafeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdStorageSafe__factory extends ContractFactory {
    constructor(...args: StdStorageSafeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StdStorageSafe>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StdStorageSafe;
    connect(signer: Signer): StdStorageSafe__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122075c33550fa0e6e72b3058043b26c1292a6b73aa6c9594c46dd051431bd5d25b864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "SlotFound";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fsig";
            readonly type: "bytes4";
            readonly indexed: false;
            readonly internalType: "bytes4";
        }, {
            readonly name: "keysHash";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WARNING_UninitedSlot";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): StdStorageSafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdStorageSafe;
}
export {};
