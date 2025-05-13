import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDexManager, IDexManagerInterface } from "../../GasZipPeriphery.sol/IDexManager";
export declare class IDexManager__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "contractIsAllowed";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isFunctionApproved";
        readonly inputs: readonly [{
            readonly name: "_signature";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IDexManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDexManager;
}
