import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IwNATIVE, IwNATIVEInterface } from "../IwNATIVE";
export declare class IwNATIVE__factory {
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
    static createInterface(): IwNATIVEInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IwNATIVE;
}
