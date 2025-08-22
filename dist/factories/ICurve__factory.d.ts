import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICurve, ICurveInterface } from "../ICurve";
export declare class ICurve__factory {
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
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ICurveInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICurve;
}
