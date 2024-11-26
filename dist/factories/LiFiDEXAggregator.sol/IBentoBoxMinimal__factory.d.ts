import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBentoBoxMinimal, IBentoBoxMinimalInterface } from "../../LiFiDEXAggregator.sol/IBentoBoxMinimal.js";
export declare class IBentoBoxMinimal__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
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
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "share";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shareOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "harvest";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "balance";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "maxChangeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerProtocol";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setMasterContractApproval";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "masterContract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "strategyData";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "total";
            readonly type: "tuple";
            readonly internalType: "struct StrategyData";
            readonly components: readonly [{
                readonly name: "strategyStartDate";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "targetPercentage";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "balance";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "toAmount";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "share";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "roundUp";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "toShare";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "roundUp";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "share";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totals";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "total";
            readonly type: "tuple";
            readonly internalType: "struct Rebase";
            readonly components: readonly [{
                readonly name: "elastic";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "base";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "share";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "token_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "share";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shareOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IBentoBoxMinimalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBentoBoxMinimal;
}
