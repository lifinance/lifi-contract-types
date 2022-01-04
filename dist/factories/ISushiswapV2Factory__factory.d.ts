import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISushiswapV2Factory, ISushiswapV2FactoryInterface } from "../ISushiswapV2Factory";
export declare class ISushiswapV2Factory__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): ISushiswapV2FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISushiswapV2Factory;
}
