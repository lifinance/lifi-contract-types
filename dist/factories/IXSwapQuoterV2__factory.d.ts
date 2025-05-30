import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IXSwapQuoterV2, IXSwapQuoterV2Interface } from "../IXSwapQuoterV2";
export declare class IXSwapQuoterV2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "quoteExactInputSingle";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct IXSwapQuoterV2.QuoteExactInputSingleParams";
            readonly components: readonly [{
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
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "sqrtPriceLimitX96";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "sqrtPriceX96After";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "initializedTicksCrossed";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "gasEstimate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IXSwapQuoterV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXSwapQuoterV2;
}
