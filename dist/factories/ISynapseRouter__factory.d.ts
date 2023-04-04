import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISynapseRouter, ISynapseRouterInterface } from "../ISynapseRouter";
export declare class ISynapseRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "swapAdapter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISynapseRouter.SwapQuery";
            readonly name: "originQuery";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "swapAdapter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISynapseRouter.SwapQuery";
            readonly name: "destQuery";
            readonly type: "tuple";
        }];
        readonly name: "bridge";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountIn";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISynapseRouter.DestRequest[]";
            readonly name: "requests";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }];
        readonly name: "getDestinationAmountOut";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "swapAdapter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISynapseRouter.SwapQuery[]";
            readonly name: "destQueries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "string[]";
            readonly name: "tokenSymbols";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountIn";
            readonly type: "uint256";
        }];
        readonly name: "getOriginAmountOut";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "swapAdapter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "rawParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISynapseRouter.SwapQuery[]";
            readonly name: "originQueries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISynapseRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISynapseRouter;
}
