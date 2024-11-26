import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOmniBridge, IOmniBridgeInterface } from "../IOmniBridge.js";
export declare class IOmniBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "relayTokens";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrapAndRelayTokens";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IOmniBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOmniBridge;
}
