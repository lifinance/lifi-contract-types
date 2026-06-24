import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ContextUpgradeable, ContextUpgradeableInterface } from "../ContextUpgradeable";
export declare class ContextUpgradeable__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ContextUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContextUpgradeable;
}
