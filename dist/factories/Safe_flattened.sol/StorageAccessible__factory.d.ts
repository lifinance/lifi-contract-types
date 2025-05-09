import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { StorageAccessible, StorageAccessibleInterface } from "../../Safe_flattened.sol/StorageAccessible";
export declare class StorageAccessible__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getStorageAt";
        readonly inputs: readonly [{
            readonly name: "offset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "simulateAndRevert";
        readonly inputs: readonly [{
            readonly name: "targetContract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "calldataPayload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): StorageAccessibleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StorageAccessible;
}
