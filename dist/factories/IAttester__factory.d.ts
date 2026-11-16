import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAttester, IAttesterInterface } from "../IAttester";
export declare class IAttester__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "attest";
        readonly inputs: readonly [{
            readonly name: "_facetCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_attesterData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IAttesterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAttester;
}
