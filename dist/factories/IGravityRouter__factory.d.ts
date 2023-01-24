import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGravityRouter, IGravityRouterInterface } from "../IGravityRouter";
export declare class IGravityRouter__factory {
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
    static createInterface(): IGravityRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGravityRouter;
}
