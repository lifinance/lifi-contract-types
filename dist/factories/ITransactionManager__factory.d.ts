import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITransactionManager, ITransactionManagerInterface } from "../ITransactionManager";
export declare class ITransactionManager__factory {
    static readonly abi: {
        inputs: {
            components: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
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
    }[];
    static createInterface(): ITransactionManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITransactionManager;
}
