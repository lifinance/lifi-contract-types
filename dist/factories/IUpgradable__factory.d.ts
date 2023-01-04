import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUpgradable, IUpgradableInterface } from "../IUpgradable";
export declare class IUpgradable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidCodeHash";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotProxy";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SetupFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "contractId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "setup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "newImplementationCodeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "params";
            readonly type: "bytes";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUpgradableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUpgradable;
}
