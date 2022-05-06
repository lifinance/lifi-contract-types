import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ReentrancyGuard, ReentrancyGuardInterface } from "../../../src/Helpers/ReentrancyGuard";
export declare class ReentrancyGuard__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        type: string;
    }[];
    static createInterface(): ReentrancyGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuard;
}
