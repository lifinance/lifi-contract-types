import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageBus, IMessageBusInterface } from "../IMessageBus";
export declare class IMessageBus__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "calcFee";
        readonly inputs: readonly [{
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "executeMessage";
        readonly inputs: readonly [{
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_route";
            readonly type: "tuple";
            readonly internalType: "struct MsgDataTypes.RouteInfo";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "srcChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "srcTxHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "_sigs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "_signers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_powers";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessageWithTransfer";
        readonly inputs: readonly [{
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_transfer";
            readonly type: "tuple";
            readonly internalType: "struct MsgDataTypes.TransferInfo";
            readonly components: readonly [{
                readonly name: "t";
                readonly type: "uint8";
                readonly internalType: "enum MsgDataTypes.TransferType";
            }, {
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "wdseq";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "srcChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "refId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "srcTxHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "_sigs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "_signers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_powers";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeMessageWithTransferRefund";
        readonly inputs: readonly [{
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_transfer";
            readonly type: "tuple";
            readonly internalType: "struct MsgDataTypes.TransferInfo";
            readonly components: readonly [{
                readonly name: "t";
                readonly type: "uint8";
                readonly internalType: "enum MsgDataTypes.TransferType";
            }, {
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "token";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "wdseq";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "srcChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "refId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "srcTxHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "_sigs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "_signers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_powers";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "liquidityBridge";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pegBridge";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pegBridgeV2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pegVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pegVaultV2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sendMessage";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "sendMessage";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "sendMessageWithTransfer";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_dstChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_srcBridge";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_srcTransferId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "withdrawFee";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_cumulativeFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_sigs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "_signers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_powers";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IMessageBusInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageBus;
}
