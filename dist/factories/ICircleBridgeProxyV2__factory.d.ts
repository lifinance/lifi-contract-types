import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICircleBridgeProxyV2, ICircleBridgeProxyV2Interface } from "../ICircleBridgeProxyV2";
export declare class ICircleBridgeProxyV2__factory {
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
        }, {
            readonly name: "_maxFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minFinalityThreshold";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ICircleBridgeProxyV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICircleBridgeProxyV2;
}
