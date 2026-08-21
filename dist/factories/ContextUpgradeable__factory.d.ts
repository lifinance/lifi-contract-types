import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ContextUpgradeable, ContextUpgradeableInterface } from "../ContextUpgradeable";
export declare class ContextUpgradeable__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidInitialization";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotInitializing";
        readonly inputs: readonly [];
    }];
    static createInterface(): ContextUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContextUpgradeable;
}
