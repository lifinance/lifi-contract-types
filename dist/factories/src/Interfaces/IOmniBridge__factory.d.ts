import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOmniBridge, IOmniBridgeInterface } from "../../../src/Interfaces/IOmniBridge";
export declare class IOmniBridge__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IOmniBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOmniBridge;
}
