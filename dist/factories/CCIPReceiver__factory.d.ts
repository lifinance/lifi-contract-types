import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CCIPReceiver, CCIPReceiverInterface } from "../CCIPReceiver";
export declare class CCIPReceiver__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "ccipReceive";
        readonly inputs: readonly [{
            readonly name: "message";
            readonly type: "tuple";
            readonly internalType: "struct Client.Any2EVMMessage";
            readonly components: readonly [{
                readonly name: "messageId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sourceChainSelector";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "sender";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "destTokenAmounts";
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
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "InvalidRouter";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): CCIPReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CCIPReceiver;
}
