import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IKatanaV3Pool, IKatanaV3PoolInterface } from "../IKatanaV3Pool";
export declare class IKatanaV3Pool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "fee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "governance";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "zeroForOne";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "amountSpecified";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "sqrtPriceLimitX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "amount0";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "amount1";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "token0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IKatanaV3PoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKatanaV3Pool;
}
