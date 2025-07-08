import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITheCompact, ITheCompactInterface } from "../ITheCompact";
export declare class ITheCompact__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "__registerAllocator";
        readonly inputs: readonly [{
            readonly name: "allocator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "allocatorId";
            readonly type: "uint96";
            readonly internalType: "uint96";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchDepositAndRegisterFor";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "idsAndAmounts";
            readonly type: "uint256[2][]";
            readonly internalType: "uint256[2][]";
        }, {
            readonly name: "arbiter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "expires";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "typehash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "witness";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "claimhash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "registeredAmounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ITheCompactInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITheCompact;
}
