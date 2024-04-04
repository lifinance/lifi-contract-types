import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMayan, IMayanInterface } from "../IMayan";
export declare class IMayan__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "relayerFees";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.RelayerFees";
            readonly components: readonly [{
                readonly name: "swapFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "redeemFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "refundFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }, {
            readonly name: "recipient";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.Recepient";
            readonly components: readonly [{
                readonly name: "mayanAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanChainId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "auctionAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destChainId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "referrer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "tokenOutAddr";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "tokenOutChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "criteria";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.Criteria";
            readonly components: readonly [{
                readonly name: "transferDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "swapDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "unwrap";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "gasDrop";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "customPayload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "sequence";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrapAndSwapETH";
        readonly inputs: readonly [{
            readonly name: "relayerFees";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.RelayerFees";
            readonly components: readonly [{
                readonly name: "swapFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "redeemFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "refundFee";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }, {
            readonly name: "recipient";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.Recepient";
            readonly components: readonly [{
                readonly name: "mayanAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanChainId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "auctionAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destChainId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "referrer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddr";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "tokenOutAddr";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "tokenOutChainId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "criteria";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.Criteria";
            readonly components: readonly [{
                readonly name: "transferDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "swapDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "unwrap";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "gasDrop";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "customPayload";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "sequence";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IMayanInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMayan;
}
