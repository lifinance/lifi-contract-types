import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginalTokenVaultV2, IOriginalTokenVaultV2Interface } from "../IOriginalTokenVaultV2";
export declare class IOriginalTokenVaultV2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_mintChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_mintAccount";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositNative";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_mintChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_mintAccount";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "records";
        readonly inputs: readonly [{
            readonly name: "recordId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_request";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_sigs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "_signers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_powers";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IOriginalTokenVaultV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginalTokenVaultV2;
}
