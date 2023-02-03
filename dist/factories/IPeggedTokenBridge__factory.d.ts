import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridge, IPeggedTokenBridgeInterface } from "../IPeggedTokenBridge";
export declare class IPeggedTokenBridge__factory {
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
    static createInterface(): IPeggedTokenBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridge;
}
