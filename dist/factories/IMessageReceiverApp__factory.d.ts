import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageReceiverApp, IMessageReceiverAppInterface } from "../IMessageReceiverApp";
export declare class IMessageReceiverApp__factory {
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
    static createInterface(): IMessageReceiverAppInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageReceiverApp;
}
