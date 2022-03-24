import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IApprovalReceiver, IApprovalReceiverInterface } from "../IApprovalReceiver";
export declare class IApprovalReceiver__factory {
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
    static createInterface(): IApprovalReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IApprovalReceiver;
}
