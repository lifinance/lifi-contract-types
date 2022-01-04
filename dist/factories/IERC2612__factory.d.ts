import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC2612, IERC2612Interface } from "../IERC2612";
export declare class IERC2612__factory {
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
    static createInterface(): IERC2612Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC2612;
}
