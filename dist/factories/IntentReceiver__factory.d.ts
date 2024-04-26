import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IntentReceiver, IntentReceiverInterface } from "../IntentReceiver";
export declare class IntentReceiver__factory {
    static readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "cancelIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executeIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "exec";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.IntentExecution";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "feeCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getIntentId";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "refundExpiredIntent";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapIntents";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ExpiredIntentRefunded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentAdded";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentCancelled";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }, {
            readonly name: "refundedTo";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntentExecuted";
        readonly inputs: readonly [{
            readonly name: "details";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct IntentReceiver.SwapIntent";
            readonly components: readonly [{
                readonly name: "fromAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "toAsset";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "BelowMinAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Expired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotYetExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): IntentReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IntentReceiver;
}
