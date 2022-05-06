import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAcrossSpokePool, IAcrossSpokePoolInterface } from "../../../src/Interfaces/IAcrossSpokePool";
export declare class IAcrossSpokePool__factory {
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
    static createInterface(): IAcrossSpokePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAcrossSpokePool;
}
