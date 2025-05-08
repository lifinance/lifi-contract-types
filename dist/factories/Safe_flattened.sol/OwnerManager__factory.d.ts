import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { OwnerManager, OwnerManagerInterface } from "../../Safe_flattened.sol/OwnerManager";
export declare class OwnerManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addOwnerWithThreshold";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "changeThreshold";
        readonly inputs: readonly [{
            readonly name: "_threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getOwners";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getThreshold";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeOwner";
        readonly inputs: readonly [{
            readonly name: "prevOwner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapOwner";
        readonly inputs: readonly [{
            readonly name: "prevOwner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "oldOwner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AddedOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChangedThreshold";
        readonly inputs: readonly [{
            readonly name: "threshold";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RemovedOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): OwnerManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnerManager;
}
