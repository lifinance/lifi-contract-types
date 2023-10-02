import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFTWrapper, IOFTWrapperInterface } from "../../IOFTWrapper.sol/IOFTWrapper";
export declare class IOFTWrapper__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "estimateSendFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "estimateSendFeeV2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_callerBps";
            readonly type: "uint256";
        }];
        readonly name: "getAmountAndFees";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "wrapperFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "callerFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_zroPaymentAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendOFT";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IOFTWrapper.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendOFTFeeV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IOFTWrapper.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendOFTV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_proxyOft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_toAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address payable";
            readonly name: "_refundAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_zroPaymentAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendProxyOFT";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_proxyOft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IOFTWrapper.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendProxyOFTFeeV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_proxyOft";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IOFTWrapper.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "callerBps";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "bytes2";
                readonly name: "partnerId";
                readonly type: "bytes2";
            }];
            readonly internalType: "struct IOFTWrapper.FeeObj";
            readonly name: "_feeObj";
            readonly type: "tuple";
        }];
        readonly name: "sendProxyOFTV2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IOFTWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOFTWrapper;
}
