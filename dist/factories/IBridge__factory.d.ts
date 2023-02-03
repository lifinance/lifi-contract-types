import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBridge, IBridgeInterface } from "../IBridge";
export declare class IBridge__factory {
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
    static createInterface(): IBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBridge;
}
