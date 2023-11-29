import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAcrossSpokePool, IAcrossSpokePoolInterface } from "../IAcrossSpokePool";
export declare class IAcrossSpokePool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "originToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IAcrossSpokePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAcrossSpokePool;
}
