import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ModuleManager, ModuleManagerInterface } from "../../Safe_flattened.sol/ModuleManager";
export declare class ModuleManager__factory {
    static readonly abi: readonly [{
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
        readonly name: "setModuleGuard";
        readonly inputs: readonly [{
            readonly name: "moduleGuard";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }];
    static createInterface(): ModuleManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ModuleManager;
}
