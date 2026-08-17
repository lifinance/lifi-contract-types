import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC1967Upgrade, ERC1967UpgradeInterface } from "../ERC1967Upgrade";
export declare class ERC1967Upgrade__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "AdminChanged";
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BeaconUpgraded";
        readonly inputs: readonly [{
            readonly name: "beacon";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Upgraded";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ERC1967UpgradeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Upgrade;
}
