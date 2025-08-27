import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IKatanaV3Governance, IKatanaV3GovernanceInterface } from "../IKatanaV3Governance";
export declare class IKatanaV3Governance__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IKatanaV3GovernanceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKatanaV3Governance;
}
