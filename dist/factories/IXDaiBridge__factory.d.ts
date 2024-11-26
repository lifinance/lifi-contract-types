import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IXDaiBridge, IXDaiBridgeInterface } from "../IXDaiBridge.js";
export declare class IXDaiBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "relayTokens";
        readonly inputs: readonly [{
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
    }];
    static createInterface(): IXDaiBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXDaiBridge;
}
