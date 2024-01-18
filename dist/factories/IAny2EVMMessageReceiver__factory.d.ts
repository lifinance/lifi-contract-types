import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAny2EVMMessageReceiver, IAny2EVMMessageReceiverInterface } from "../IAny2EVMMessageReceiver";
export declare class IAny2EVMMessageReceiver__factory {
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
    }];
    static createInterface(): IAny2EVMMessageReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAny2EVMMessageReceiver;
}
