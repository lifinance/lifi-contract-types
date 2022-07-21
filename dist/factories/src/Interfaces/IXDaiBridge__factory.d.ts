import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IXDaiBridge, IXDaiBridgeInterface } from "../../../src/Interfaces/IXDaiBridge";
export declare class IXDaiBridge__factory {
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
    static createInterface(): IXDaiBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IXDaiBridge;
}
