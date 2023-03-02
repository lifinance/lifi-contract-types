import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBridge, IBridgeInterface } from "../IBridge";
export declare class IBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_relayRequest";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "relay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_dstChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "_maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_dstChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "_maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "sendNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transferId";
            readonly type: "bytes32";
        }];
        readonly name: "transfers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_msg";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "verifySigs";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_wdmsg";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "withdrawId";
            readonly type: "bytes32";
        }];
        readonly name: "withdraws";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBridge;
}
