import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridge, IPeggedTokenBridgeInterface } from "../../ICBridge.sol/IPeggedTokenBridge";
export declare class IPeggedTokenBridge__factory {
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
            readonly internalType: "address";
            readonly name: "_withdrawAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPeggedTokenBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridge;
}
