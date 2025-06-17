import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISyncSwapV2Pool, ISyncSwapV2PoolInterface } from "../ISyncSwapV2Pool";
export declare class ISyncSwapV2Pool__factory {
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
            readonly internalType: "struct ISyncSwapV2Pool.TokenAmount";
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
    static createInterface(): ISyncSwapV2PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISyncSwapV2Pool;
}
