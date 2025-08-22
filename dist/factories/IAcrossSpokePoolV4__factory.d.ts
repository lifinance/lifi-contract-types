import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAcrossSpokePoolV4, IAcrossSpokePoolV4Interface } from "../IAcrossSpokePoolV4";
export declare class IAcrossSpokePoolV4__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "depositor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputToken";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "outputToken";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "exclusiveRelayer";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "fillDeadline";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "exclusivityDeadline";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IAcrossSpokePoolV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAcrossSpokePoolV4;
}
