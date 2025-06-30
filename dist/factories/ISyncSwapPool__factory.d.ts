import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISyncSwapPool, ISyncSwapPoolInterface } from "../ISyncSwapPool";
export declare class ISyncSwapPool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "callback";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "callbackData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "tokenAmount";
            readonly type: "tuple";
            readonly internalType: "struct ISyncSwapPool.TokenAmount";
            readonly components: readonly [{
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ISyncSwapPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISyncSwapPool;
}
