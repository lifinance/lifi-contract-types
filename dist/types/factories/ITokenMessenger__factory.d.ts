import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenMessenger, ITokenMessengerInterface } from "../ITokenMessenger.js";
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
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ITokenMessengerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenMessenger;
}
//# sourceMappingURL=ITokenMessenger__factory.d.ts.map