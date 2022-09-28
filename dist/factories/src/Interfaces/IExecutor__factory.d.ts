import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IExecutor, IExecutorInterface } from "../../../src/Interfaces/IExecutor";
export declare class IExecutor__factory {
    static readonly abi: {
        inputs: ({
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
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExecutor;
}
