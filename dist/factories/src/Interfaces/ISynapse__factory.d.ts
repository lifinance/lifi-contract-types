import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISynapse, ISynapseInterface } from "../../../src/Interfaces/ISynapse";
export declare class ISynapse__factory {
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
    static createInterface(): ISynapseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISynapse;
}
