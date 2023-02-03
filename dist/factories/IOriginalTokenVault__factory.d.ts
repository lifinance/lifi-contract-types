import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginalTokenVault, IOriginalTokenVaultInterface } from "../IOriginalTokenVault";
export declare class IOriginalTokenVault__factory {
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
    static createInterface(): IOriginalTokenVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginalTokenVault;
}
