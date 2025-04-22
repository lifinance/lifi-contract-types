import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVelodromeV2PoolCallee, IVelodromeV2PoolCalleeInterface } from "../IVelodromeV2PoolCallee";
export declare class IVelodromeV2PoolCallee__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "hook";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IVelodromeV2PoolCalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVelodromeV2PoolCallee;
}
