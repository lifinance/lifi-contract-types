import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseModuleGuard, BaseModuleGuardInterface } from "../../Safe_flattened.sol/BaseModuleGuard";
export declare class BaseModuleGuard__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "checkAfterModuleExecution";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkModuleTransaction";
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
            readonly name: "module";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "moduleTxHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): BaseModuleGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseModuleGuard;
}
