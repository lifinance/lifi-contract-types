import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICurveLegacy, ICurveLegacyInterface } from "../ICurveLegacy";
export declare class ICurveLegacy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exchange";
        readonly inputs: readonly [{
            readonly name: "i";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "j";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "dx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "min_dy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ICurveLegacyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICurveLegacy;
}
