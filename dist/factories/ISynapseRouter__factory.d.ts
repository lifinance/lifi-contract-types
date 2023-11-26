import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISynapseRouter, ISynapseRouterInterface } from "../ISynapseRouter";
export declare class ISynapseRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "bridge";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "originQuery";
            readonly type: "tuple";
            readonly internalType: "struct ISynapseRouter.SwapQuery";
            readonly components: readonly [{
                readonly name: "swapAdapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "rawParams";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "destQuery";
            readonly type: "tuple";
            readonly internalType: "struct ISynapseRouter.SwapQuery";
            readonly components: readonly [{
                readonly name: "swapAdapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "rawParams";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getConnectedBridgeTokens";
        readonly inputs: readonly [{
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "tokens";
            readonly type: "tuple[]";
            readonly internalType: "struct ISynapseRouter.BridgeToken[]";
            readonly components: readonly [{
                readonly name: "symbol";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationAmountOut";
        readonly inputs: readonly [{
            readonly name: "requests";
            readonly type: "tuple[]";
            readonly internalType: "struct ISynapseRouter.DestRequest[]";
            readonly components: readonly [{
                readonly name: "symbol";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "amountIn";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "destQueries";
            readonly type: "tuple[]";
            readonly internalType: "struct ISynapseRouter.SwapQuery[]";
            readonly components: readonly [{
                readonly name: "swapAdapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "rawParams";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getOriginAmountOut";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenSymbols";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "originQueries";
            readonly type: "tuple[]";
            readonly internalType: "struct ISynapseRouter.SwapQuery[]";
            readonly components: readonly [{
                readonly name: "swapAdapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "rawParams";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ISynapseRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISynapseRouter;
}
