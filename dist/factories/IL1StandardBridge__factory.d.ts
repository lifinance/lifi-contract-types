import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IL1StandardBridge, IL1StandardBridgeInterface } from "../IL1StandardBridge";
export declare class IL1StandardBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositERC20To";
        readonly inputs: readonly [{
            readonly name: "_l1Token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_l2Token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_l2Gas";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositETHTo";
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_l2Gas";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "depositTo";
        readonly inputs: readonly [{
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IL1StandardBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IL1StandardBridge;
}
