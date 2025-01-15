import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllowanceTransfer, IAllowanceTransferInterface } from "../IAllowanceTransfer.js";
export declare class IAllowanceTransfer__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "expiration";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "nonce";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "expiration";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "invalidateNonces";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newNonce";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "lockdown";
        readonly inputs: readonly [{
            readonly name: "approvals";
            readonly type: "tuple[]";
            readonly internalType: "struct IAllowanceTransfer.TokenSpenderPair[]";
            readonly components: readonly [{
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "permitBatch";
            readonly type: "tuple";
            readonly internalType: "struct IAllowanceTransfer.PermitBatch";
            readonly components: readonly [{
                readonly name: "details";
                readonly type: "tuple[]";
                readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint160";
                    readonly internalType: "uint160";
                }, {
                    readonly name: "expiration";
                    readonly type: "uint48";
                    readonly internalType: "uint48";
                }, {
                    readonly name: "nonce";
                    readonly type: "uint48";
                    readonly internalType: "uint48";
                }];
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sigDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "permitSingle";
            readonly type: "tuple";
            readonly internalType: "struct IAllowanceTransfer.PermitSingle";
            readonly components: readonly [{
                readonly name: "details";
                readonly type: "tuple";
                readonly internalType: "struct IAllowanceTransfer.PermitDetails";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint160";
                    readonly internalType: "uint160";
                }, {
                    readonly name: "expiration";
                    readonly type: "uint48";
                    readonly internalType: "uint48";
                }, {
                    readonly name: "nonce";
                    readonly type: "uint48";
                    readonly internalType: "uint48";
                }];
            }, {
                readonly name: "spender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sigDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "transferDetails";
            readonly type: "tuple[]";
            readonly internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint160";
                readonly internalType: "uint160";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint160";
            readonly indexed: false;
            readonly internalType: "uint160";
        }, {
            readonly name: "expiration";
            readonly type: "uint48";
            readonly indexed: false;
            readonly internalType: "uint48";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Lockdown";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NonceInvalidation";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newNonce";
            readonly type: "uint48";
            readonly indexed: false;
            readonly internalType: "uint48";
        }, {
            readonly name: "oldNonce";
            readonly type: "uint48";
            readonly indexed: false;
            readonly internalType: "uint48";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint160";
            readonly indexed: false;
            readonly internalType: "uint160";
        }, {
            readonly name: "expiration";
            readonly type: "uint48";
            readonly indexed: false;
            readonly internalType: "uint48";
        }, {
            readonly name: "nonce";
            readonly type: "uint48";
            readonly indexed: false;
            readonly internalType: "uint48";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AllowanceExpired";
        readonly inputs: readonly [{
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ExcessiveInvalidation";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAllowance";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): IAllowanceTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAllowanceTransfer;
}
