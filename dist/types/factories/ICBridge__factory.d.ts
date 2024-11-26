import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICBridge, ICBridgeInterface } from "../ICBridge.js";
export declare class ICBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "send";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sendNative";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ICBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICBridge;
}
//# sourceMappingURL=ICBridge__factory.d.ts.map