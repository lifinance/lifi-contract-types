import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICircleBridgeProxy, ICircleBridgeProxyInterface } from "../ICircleBridgeProxy";
export declare class ICircleBridgeProxy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "_dstChid";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_mintRecipient";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_burnToken";
            readonly type: "address";
        }];
        readonly name: "depositForBurn";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ICircleBridgeProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICircleBridgeProxy;
}
