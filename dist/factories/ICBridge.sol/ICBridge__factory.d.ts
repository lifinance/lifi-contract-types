import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICBridge, ICBridgeInterface } from "../../ICBridge.sol/ICBridge";
export declare class ICBridge__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): ICBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICBridge;
}
