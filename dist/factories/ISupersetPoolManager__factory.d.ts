import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISupersetPoolManager, ISupersetPoolManagerInterface } from "../ISupersetPoolManager";
export declare class ISupersetPoolManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getOmniTokenAddressBook";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IOmniTokenAddressBook";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ISupersetPoolManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISupersetPoolManager;
}
