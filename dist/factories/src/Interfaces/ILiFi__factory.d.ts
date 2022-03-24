import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILiFi, ILiFiInterface } from "../../../src/Interfaces/ILiFi";
export declare class ILiFi__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ILiFiInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiFi;
}
