import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1967, IERC1967Interface } from "../IERC1967";
export declare class IERC1967__factory {
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
    static createInterface(): IERC1967Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1967;
}
