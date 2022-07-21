import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IL1StandardBridge, IL1StandardBridgeInterface } from "../../../src/Interfaces/IL1StandardBridge";
export declare class IL1StandardBridge__factory {
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
    static createInterface(): IL1StandardBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IL1StandardBridge;
}
