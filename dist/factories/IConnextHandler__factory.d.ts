import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IConnextHandler, IConnextHandlerInterface } from "../IConnextHandler";
export declare class IConnextHandler__factory {
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
    static createInterface(): IConnextHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IConnextHandler;
}
