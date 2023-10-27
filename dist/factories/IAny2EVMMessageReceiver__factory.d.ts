import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAny2EVMMessageReceiver, IAny2EVMMessageReceiverInterface } from "../IAny2EVMMessageReceiver";
export declare class IAny2EVMMessageReceiver__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): IAny2EVMMessageReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAny2EVMMessageReceiver;
}
