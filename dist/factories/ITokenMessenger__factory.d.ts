import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenMessenger, ITokenMessengerInterface } from "../ITokenMessenger";
export declare class ITokenMessenger__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "destinationDomain";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "mintRecipient";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "burnToken";
            readonly type: "address";
        }];
        readonly name: "depositForBurn";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITokenMessengerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenMessenger;
}
