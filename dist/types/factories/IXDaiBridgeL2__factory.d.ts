import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IXDaiBridgeL2, IXDaiBridgeL2Interface } from "../IXDaiBridgeL2.js";
export declare class IXDaiBridgeL2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "relayTokens";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IXDaiBridgeL2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXDaiBridgeL2;
}
//# sourceMappingURL=IXDaiBridgeL2__factory.d.ts.map