import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDeBridgeGate, IDeBridgeGateInterface } from "../IDeBridgeGate";
export declare class IDeBridgeGate__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IDeBridgeGateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDeBridgeGate;
}
