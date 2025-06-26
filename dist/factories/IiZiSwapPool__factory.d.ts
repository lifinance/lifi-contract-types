import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IiZiSwapPool, IiZiSwapPoolInterface } from "../IiZiSwapPool";
export declare class IiZiSwapPool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapX2Y";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "lowPt";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "amountX";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountY";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapY2X";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "highPt";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "amountX";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountY";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "tokenX";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IiZiSwapPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IiZiSwapPool;
}
