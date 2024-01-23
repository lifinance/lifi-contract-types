import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRouterClient, IRouterClientInterface } from "../IRouterClient";
export declare class IRouterClient__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "ccipSend";
        readonly inputs: readonly [{
            readonly name: "destinationChainSelector";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "message";
            readonly type: "tuple";
            readonly internalType: "struct Client.EVM2AnyMessage";
            readonly components: readonly [{
                readonly name: "receiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "tokenAmounts";
                readonly type: "tuple[]";
                readonly internalType: "struct Client.EVMTokenAmount[]";
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
                readonly name: "feeToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "extraArgs";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getFee";
        readonly inputs: readonly [{
            readonly name: "destinationChainSelector";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "message";
            readonly type: "tuple";
            readonly internalType: "struct Client.EVM2AnyMessage";
            readonly components: readonly [{
                readonly name: "receiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "tokenAmounts";
                readonly type: "tuple[]";
                readonly internalType: "struct Client.EVMTokenAmount[]";
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
                readonly name: "feeToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "extraArgs";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "fee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getSupportedTokens";
        readonly inputs: readonly [{
            readonly name: "chainSelector";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isChainSupported";
        readonly inputs: readonly [{
            readonly name: "chainSelector";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "supported";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "InsufficientFeeTokenAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidMsgValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedDestinationChain";
        readonly inputs: readonly [{
            readonly name: "destChainSelector";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
    }];
    static createInterface(): IRouterClientInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRouterClient;
}
