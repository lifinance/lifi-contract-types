import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITransferReceiver, ITransferReceiverInterface } from "../ITransferReceiver";
export declare class ITransferReceiver__factory {
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
    static createInterface(): ITransferReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITransferReceiver;
}
