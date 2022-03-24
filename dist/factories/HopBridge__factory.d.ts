import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { HopBridge, HopBridgeInterface } from "../HopBridge";
export declare class HopBridge__factory {
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
    static createInterface(): HopBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopBridge;
}
