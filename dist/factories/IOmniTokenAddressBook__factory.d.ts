import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOmniTokenAddressBook, IOmniTokenAddressBookInterface } from "../IOmniTokenAddressBook";
export declare class IOmniTokenAddressBook__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getAddressForOmniToken";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IOmniTokenAddressBookInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOmniTokenAddressBook;
}
