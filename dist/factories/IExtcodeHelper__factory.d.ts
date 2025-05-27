import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IExtcodeHelper, IExtcodeHelperInterface } from "../IExtcodeHelper";
export declare class IExtcodeHelper__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getDelegationInfo";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "prefix";
            readonly type: "bytes3";
            readonly internalType: "bytes3";
        }, {
            readonly name: "delegate";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IExtcodeHelperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExtcodeHelper;
}
