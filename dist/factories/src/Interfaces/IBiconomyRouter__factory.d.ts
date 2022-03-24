import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBiconomyRouter, IBiconomyRouterInterface } from "../../../src/Interfaces/IBiconomyRouter";
export declare class IBiconomyRouter__factory {
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
    static createInterface(): IBiconomyRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBiconomyRouter;
}
