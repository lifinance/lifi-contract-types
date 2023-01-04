import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridgeV2, IPeggedTokenBridgeV2Interface } from "../../ICBridge.sol/IPeggedTokenBridgeV2";
export declare class IPeggedTokenBridgeV2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "_toAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }];
        readonly name: "burn";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_toChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "_toAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPeggedTokenBridgeV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridgeV2;
}
