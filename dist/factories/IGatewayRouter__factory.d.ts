import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGatewayRouter, IGatewayRouterInterface } from "../IGatewayRouter";
export declare class IGatewayRouter__factory {
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
    static createInterface(): IGatewayRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGatewayRouter;
}
