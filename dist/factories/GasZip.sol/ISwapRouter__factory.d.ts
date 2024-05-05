import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISwapRouter, ISwapRouterInterface } from "../../GasZip.sol/ISwapRouter";
export declare class ISwapRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exactInputSingle";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct ExactInputSingleParams";
            readonly components: readonly [{
                readonly name: "tokenIn";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountIn";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinimum";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ISwapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwapRouter;
}
