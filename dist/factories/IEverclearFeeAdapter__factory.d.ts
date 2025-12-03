import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEverclearFeeAdapter, IEverclearFeeAdapterInterface } from "../IEverclearFeeAdapter";
export declare class IEverclearFeeAdapter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "newIntent";
        readonly inputs: readonly [{
            readonly name: "_destinations";
            readonly type: "uint32[]";
            readonly internalType: "uint32[]";
        }, {
            readonly name: "_receiver";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_inputAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_outputAsset";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_ttl";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_feeParams";
            readonly type: "tuple";
            readonly internalType: "struct IEverclearFeeAdapter.FeeParams";
            readonly components: readonly [{
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "_intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_intent";
            readonly type: "tuple";
            readonly internalType: "struct IEverclearFeeAdapter.Intent";
            readonly components: readonly [{
                readonly name: "initiator";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "inputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "origin";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "timestamp";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinations";
                readonly type: "uint32[]";
                readonly internalType: "uint32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "newIntent";
        readonly inputs: readonly [{
            readonly name: "_destinations";
            readonly type: "uint32[]";
            readonly internalType: "uint32[]";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_inputAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_outputAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_ttl";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_feeParams";
            readonly type: "tuple";
            readonly internalType: "struct IEverclearFeeAdapter.FeeParams";
            readonly components: readonly [{
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "_intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_intent";
            readonly type: "tuple";
            readonly internalType: "struct IEverclearFeeAdapter.Intent";
            readonly components: readonly [{
                readonly name: "initiator";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "inputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "origin";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "timestamp";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinations";
                readonly type: "uint32[]";
                readonly internalType: "uint32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
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
        readonly name: "updateFeeSigner";
        readonly inputs: readonly [{
            readonly name: "_feeSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IEverclearFeeAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEverclearFeeAdapter;
}
