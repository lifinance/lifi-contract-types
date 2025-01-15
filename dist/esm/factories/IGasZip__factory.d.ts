import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGasZip, IGasZipInterface } from "../IGasZip.js";
export declare class IGasZip__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IGasZipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGasZip;
}
