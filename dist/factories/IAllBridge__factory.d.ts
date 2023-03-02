import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAllBridge, IAllBridgeInterface } from "../IAllBridge";
export declare class IAllBridge__factory {
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
    static createInterface(): IAllBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAllBridge;
}
