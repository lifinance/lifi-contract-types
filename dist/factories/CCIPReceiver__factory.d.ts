import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CCIPReceiver, CCIPReceiverInterface } from "../CCIPReceiver";
export declare class CCIPReceiver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "InvalidRouter";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "messageId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "sourceChainSelector";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes";
                readonly name: "sender";
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
                readonly name: "destTokenAmounts";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Client.Any2EVMMessage";
            readonly name: "message";
            readonly type: "tuple";
        }];
        readonly name: "ccipReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CCIPReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CCIPReceiver;
}
