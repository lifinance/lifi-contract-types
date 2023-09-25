import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRouterClient, IRouterClientInterface } from "../IRouterClient";
export declare class IRouterClient__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InsufficientFeeTokenAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidMsgValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "destChainSelector";
            readonly type: "uint64";
        }];
        readonly name: "UnsupportedDestinationChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "destinationChainSelector";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "receiver";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Client.EVMTokenAmount[]";
                readonly name: "tokenAmounts";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "feeToken";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraArgs";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Client.EVM2AnyMessage";
            readonly name: "message";
            readonly type: "tuple";
        }];
        readonly name: "ccipSend";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "destinationChainSelector";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "receiver";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Client.EVMTokenAmount[]";
                readonly name: "tokenAmounts";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "feeToken";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraArgs";
                readonly type: "bytes";
            }];
            readonly internalType: "struct Client.EVM2AnyMessage";
            readonly name: "message";
            readonly type: "tuple";
        }];
        readonly name: "getFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "chainSelector";
            readonly type: "uint64";
        }];
        readonly name: "getSupportedTokens";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "chainSelector";
            readonly type: "uint64";
        }];
        readonly name: "isChainSupported";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "supported";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRouterClientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRouterClient;
}
