import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Vm, VmInterface } from "../Vm";
export declare class Vm__factory {
    static readonly abi: ({
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
    } | {
        inputs: never[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): VmInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Vm;
}
