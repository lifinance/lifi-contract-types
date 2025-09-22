import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1271, IERC1271Interface } from "../IERC1271";
export declare class IERC1271__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "isValidSignature";
        readonly inputs: readonly [{
            readonly name: "hash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "magicValue";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IERC1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1271;
}
