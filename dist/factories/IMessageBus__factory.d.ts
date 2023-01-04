import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageBus, IMessageBusInterface } from "../IMessageBus";
export declare class IMessageBus__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "calcFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "srcChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "srcTxHash";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct MsgDataTypes.RouteInfo";
            readonly name: "_route";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "executeMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum MsgDataTypes.TransferType";
                readonly name: "t";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "wdseq";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "srcChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "srcTxHash";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct MsgDataTypes.TransferInfo";
            readonly name: "_transfer";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "executeMessageWithTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum MsgDataTypes.TransferType";
                readonly name: "t";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "wdseq";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "srcChainId";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes32";
                readonly name: "refId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "srcTxHash";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct MsgDataTypes.TransferInfo";
            readonly name: "_transfer";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "executeMessageWithTransferRefund";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "liquidityBridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pegBridge";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pegBridgeV2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pegVault";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pegVaultV2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_receiver";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "sendMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "sendMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_srcBridge";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_srcTransferId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_message";
            readonly type: "bytes";
        }];
        readonly name: "sendMessageWithTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_cumulativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_sigs";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_signers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_powers";
            readonly type: "uint256[]";
        }];
        readonly name: "withdrawFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMessageBusInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageBus;
}
