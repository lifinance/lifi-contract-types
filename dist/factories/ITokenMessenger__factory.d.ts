import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenMessenger, ITokenMessengerInterface } from "../ITokenMessenger";
export declare class ITokenMessenger__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositForBurn";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationDomain";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "mintRecipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "burnToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationCaller";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "maxFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minFinalityThreshold";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ITokenMessengerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenMessenger;
}
