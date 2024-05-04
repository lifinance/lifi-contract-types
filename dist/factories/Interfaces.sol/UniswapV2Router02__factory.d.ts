import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapV2Router02, UniswapV2Router02Interface } from "../../Interfaces.sol/UniswapV2Router02";
export declare class UniswapV2Router02__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getAmountsIn";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAmountsOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapETHForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactETHForTokens";
        readonly inputs: readonly [{
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForETH";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForTokens";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactETH";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): UniswapV2Router02Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Router02;
}
