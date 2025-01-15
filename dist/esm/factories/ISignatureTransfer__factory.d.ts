import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureTransfer, ISignatureTransferInterface } from "../ISignatureTransfer.js";
export declare class ISignatureTransfer__factory {
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
        readonly name: "invalidateUnorderedNonces";
        readonly inputs: readonly [{
            readonly name: "wordPos";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mask";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "nonceBitmap";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permitTransferFrom";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "transferDetails";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "requestedAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "permitTransferFrom";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple[]";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "transferDetails";
            readonly type: "tuple[]";
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "requestedAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "permitWitnessTransferFrom";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "transferDetails";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "requestedAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "witness";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "witnessTypeString";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "permitWitnessTransferFrom";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple[]";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "transferDetails";
            readonly type: "tuple[]";
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "requestedAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "witness";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "witnessTypeString";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "UnorderedNonceInvalidation";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "word";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "mask";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [{
            readonly name: "maxAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "LengthMismatch";
        readonly inputs: readonly [];
    }];
    static createInterface(): ISignatureTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureTransfer;
}
