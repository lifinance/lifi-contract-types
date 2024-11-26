import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICircleBridgeProxy, ICircleBridgeProxyInterface } from "../ICircleBridgeProxy.js";
export declare class ICircleBridgeProxy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositForBurn";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_dstChid";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "_mintRecipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_burnToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ICircleBridgeProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICircleBridgeProxy;
}
//# sourceMappingURL=ICircleBridgeProxy__factory.d.ts.map