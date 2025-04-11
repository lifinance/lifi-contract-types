import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVelodromeV2Pool, IVelodromeV2PoolInterface } from "../IVelodromeV2Pool";
export declare class IVelodromeV2Pool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getAmountOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "amount0Out";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1Out";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IVelodromeV2PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVelodromeV2Pool;
}
