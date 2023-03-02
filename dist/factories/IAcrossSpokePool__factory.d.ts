import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAcrossSpokePool, IAcrossSpokePoolInterface } from "../IAcrossSpokePool";
export declare class IAcrossSpokePool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "originToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "relayerFeePct";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IAcrossSpokePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAcrossSpokePool;
}
