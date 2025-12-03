import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGlacisAirlift, IGlacisAirliftInterface } from "../IGlacisAirlift";
export declare class IGlacisAirlift__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "quoteSend";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct QuoteSendInfo";
            readonly components: readonly [{
                readonly name: "gmpFee";
                readonly type: "tuple";
                readonly internalType: "struct Fee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "tokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "amountSent";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "valueSent";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "airliftFeeInfo";
                readonly type: "tuple";
                readonly internalType: "struct AirliftFeeInfo";
                readonly components: readonly [{
                    readonly name: "airliftFee";
                    readonly type: "tuple";
                    readonly internalType: "struct Fee";
                    readonly components: readonly [{
                        readonly name: "nativeFee";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "tokenFee";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                }, {
                    readonly name: "correctedAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "correctedValue";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "quoteSend";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputToken";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct QuoteSendInfo";
            readonly components: readonly [{
                readonly name: "gmpFee";
                readonly type: "tuple";
                readonly internalType: "struct Fee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "tokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "amountSent";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "valueSent";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "airliftFeeInfo";
                readonly type: "tuple";
                readonly internalType: "struct AirliftFeeInfo";
                readonly components: readonly [{
                    readonly name: "airliftFee";
                    readonly type: "tuple";
                    readonly internalType: "struct Fee";
                    readonly components: readonly [{
                        readonly name: "nativeFee";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }, {
                        readonly name: "tokenFee";
                        readonly type: "uint256";
                        readonly internalType: "uint256";
                    }];
                }, {
                    readonly name: "correctedAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "correctedValue";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "send";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "outputToken";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGlacisAirliftInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGlacisAirlift;
}
