import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IXDaiBridge, IXDaiBridgeInterface } from "../IXDaiBridge";
export declare class IXDaiBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IXDaiBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXDaiBridge;
}
