import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISafe, ISafeInterface } from "../../Safe_flattened.sol/ISafe";
export declare class ISafe__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "VERSION";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
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
        readonly name: "approveHash";
        readonly inputs: readonly [{
            readonly name: "hashToApprove";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "approvedHashes";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "messageHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "checkNSignatures";
        readonly inputs: readonly [{
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dataHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "signatures";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "requiredSignatures";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "checkSignatures";
        readonly inputs: readonly [{
            readonly name: "executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dataHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "signatures";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "disableModule";
        readonly inputs: readonly [{
            readonly name: "prevModule";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "module";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "domainSeparator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "enableModule";
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "execTransaction";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
            readonly internalType: "enum Enum.Operation";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "signatures";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "execTransactionFromModule";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
            readonly internalType: "enum Enum.Operation";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "execTransactionFromModuleReturnData";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
            readonly internalType: "enum Enum.Operation";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getModulesPaginated";
        readonly inputs: readonly [{
            readonly name: "start";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "pageSize";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "array";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "next";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "getTransactionHash";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
            readonly internalType: "enum Enum.Operation";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isModuleEnabled";
        readonly inputs: readonly [{
            readonly name: "module";
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
        readonly name: "nonce";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "setFallbackHandler";
        readonly inputs: readonly [{
            readonly name: "handler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setGuard";
        readonly inputs: readonly [{
            readonly name: "guard";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setModuleGuard";
        readonly inputs: readonly [{
            readonly name: "moduleGuard";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setup";
        readonly inputs: readonly [{
            readonly name: "_owners";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "fallbackHandler";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "paymentToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "payment";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymentReceiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "signedMessages";
        readonly inputs: readonly [{
            readonly name: "messageHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "ApproveHash";
        readonly inputs: readonly [{
            readonly name: "approvedHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChangedFallbackHandler";
        readonly inputs: readonly [{
            readonly name: "handler";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChangedGuard";
        readonly inputs: readonly [{
            readonly name: "guard";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ChangedModuleGuard";
        readonly inputs: readonly [{
            readonly name: "moduleGuard";
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
        readonly name: "DisabledModule";
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "EnabledModule";
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionFailure";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "payment";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionFromModuleFailure";
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionFromModuleSuccess";
        readonly inputs: readonly [{
            readonly name: "module";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutionSuccess";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "payment";
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
    }, {
        readonly type: "event";
        readonly name: "SafeSetup";
        readonly inputs: readonly [{
            readonly name: "initiator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owners";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "threshold";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "initializer";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fallbackHandler";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SignMsg";
        readonly inputs: readonly [{
            readonly name: "msgHash";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ISafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISafe;
}
