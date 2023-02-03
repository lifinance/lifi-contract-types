import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginalTokenVaultV2, IOriginalTokenVaultV2Interface } from "../IOriginalTokenVaultV2";
export declare class IOriginalTokenVaultV2__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IOriginalTokenVaultV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginalTokenVaultV2;
}
