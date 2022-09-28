import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWormholeRouter, IWormholeRouterInterface } from "../../../src/Interfaces/IWormholeRouter";
export declare class IWormholeRouter__factory {
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
    static createInterface(): IWormholeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWormholeRouter;
}
