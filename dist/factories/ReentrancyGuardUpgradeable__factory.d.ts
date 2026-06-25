import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ReentrancyGuardUpgradeable, ReentrancyGuardUpgradeableInterface } from "../ReentrancyGuardUpgradeable";
export declare class ReentrancyGuardUpgradeable__factory {
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
    static createInterface(): ReentrancyGuardUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuardUpgradeable;
}
