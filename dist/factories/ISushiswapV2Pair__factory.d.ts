import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISushiswapV2Pair, ISushiswapV2PairInterface } from "../ISushiswapV2Pair";
export declare class ISushiswapV2Pair__factory {
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
    static createInterface(): ISushiswapV2PairInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISushiswapV2Pair;
}
