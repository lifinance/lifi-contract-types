import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeacon, IBeaconInterface } from "../IBeacon";
export declare class IBeacon__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "implementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeacon;
}
