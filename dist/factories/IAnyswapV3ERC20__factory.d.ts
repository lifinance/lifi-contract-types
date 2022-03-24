import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAnyswapV3ERC20, IAnyswapV3ERC20Interface } from "../IAnyswapV3ERC20";
export declare class IAnyswapV3ERC20__factory {
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
    static createInterface(): IAnyswapV3ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAnyswapV3ERC20;
}
