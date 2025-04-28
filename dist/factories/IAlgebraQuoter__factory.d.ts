import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAlgebraQuoter, IAlgebraQuoterInterface } from "../IAlgebraQuoter";
export declare class IAlgebraQuoter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getPool";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteExactInput";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fees";
            readonly type: "uint16[]";
            readonly internalType: "uint16[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "quoteExactInputSingle";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "limitSqrtPrice";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fee";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "quoteExactOutput";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fees";
            readonly type: "uint16[]";
            readonly internalType: "uint16[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "quoteExactOutputSingle";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "limitSqrtPrice";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }];
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "fee";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IAlgebraQuoterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlgebraQuoter;
}
