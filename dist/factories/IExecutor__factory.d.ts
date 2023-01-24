import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IExecutor, IExecutorInterface } from "../IExecutor";
export declare class IExecutor__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IExecutor;
}
