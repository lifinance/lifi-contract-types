import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITransactionManager, ITransactionManagerInterface } from "../ITransactionManager";
export declare class ITransactionManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "receivingChainTxManagerAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "router";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "initiator";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "sendingAssetId";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "receivingAssetId";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "sendingChainFallback";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "receivingAddress";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "callTo";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "sendingChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "receivingChainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "callDataHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "transactionId";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct ITransactionManager.InvariantTransactionData";
                readonly name: "invariantData";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiry";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "encryptedCallData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "encodedBid";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "bidSignature";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "encodedMeta";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ITransactionManager.PrepareArgs";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "prepare";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "receivingChainTxManagerAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "router";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "initiator";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingChainFallback";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "callDataHash";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "sendingChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "receivingChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiry";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preparedBlockNumber";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ITransactionManager.TransactionData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ITransactionManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITransactionManager;
}
