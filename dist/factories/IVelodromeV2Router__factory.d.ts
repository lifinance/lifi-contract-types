import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVelodromeV2Router, IVelodromeV2RouterInterface } from "../IVelodromeV2Router";
export declare class IVelodromeV2Router__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "ETHER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "UNSAFE_swapExactTokensForTokens";
        readonly inputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "amountADesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addLiquidityETH";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "amountTokenDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "amountToken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "defaultFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "factoryRegistry";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "generateZapInParams";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountInA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routesA";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "routesB";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOutMinA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMinB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "generateZapOutParams";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routesA";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "routesB";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amountOutMinA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMinB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserves";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "reserveA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "poolFor";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteAddLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountADesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteRemoveLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteStableLiquidityRatio";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "ratio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityETH";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "amountToken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityETHSupportingFeeOnTransferTokens";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sortTokens";
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
            readonly name: "token0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token1";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "swapExactETHForTokens";
        readonly inputs: readonly [{
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "swapExactETHForTokensSupportingFeeOnTransferTokens";
        readonly inputs: readonly [{
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "swapExactTokensForETHSupportingFeeOnTransferTokens";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "swapExactTokensForTokensSupportingFeeOnTransferTokens";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "voter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "zapIn";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountInA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zapInPool";
            readonly type: "tuple";
            readonly internalType: "struct IVelodromeV2Router.Zap";
            readonly components: readonly [{
                readonly name: "tokenA";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenB";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMinA";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinB";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountAMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountBMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "routesA";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "routesB";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stake";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "zapOut";
        readonly inputs: readonly [{
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "zapOutPool";
            readonly type: "tuple";
            readonly internalType: "struct IVelodromeV2Router.Zap";
            readonly components: readonly [{
                readonly name: "tokenA";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenB";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMinA";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinB";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountAMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountBMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "routesA";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "routesB";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "ETHTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Expired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmountA";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmountADesired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmountAOptimal";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmountB";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAmountBDesired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientLiquidity";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientOutputAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmountInForETHDeposit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPath";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidRouteA";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidRouteB";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidTokenInForETHDeposit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyWETH";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PoolFactoryDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SameAddresses";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }];
    static createInterface(): IVelodromeV2RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVelodromeV2Router;
}
