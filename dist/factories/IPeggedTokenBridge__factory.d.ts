import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridge, IPeggedTokenBridgeInterface } from "../IPeggedTokenBridge";
export declare class IPeggedTokenBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "burn";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_withdrawAccount";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mint";
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
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }];
    static createInterface(): IPeggedTokenBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridge;
}
