import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMessageBus, IMessageBusInterface } from "../IMessageBus";
export declare class IMessageBus__factory {
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IMessageBusInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageBus;
}
