import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAcrossRouter, IAcrossRouterInterface } from "../../../src/Interfaces/IAcrossRouter";
export declare class IAcrossRouter__factory {
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
    static createInterface(): IAcrossRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAcrossRouter;
}
