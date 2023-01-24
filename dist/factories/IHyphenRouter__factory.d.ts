import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHyphenRouter, IHyphenRouterInterface } from "../IHyphenRouter";
export declare class IHyphenRouter__factory {
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
    static createInterface(): IHyphenRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHyphenRouter;
}
