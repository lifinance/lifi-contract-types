import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAnyswapRouter, IAnyswapRouterInterface } from "../../../src/Interfaces/IAnyswapRouter";
export declare class IAnyswapRouter__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IAnyswapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAnyswapRouter;
}
