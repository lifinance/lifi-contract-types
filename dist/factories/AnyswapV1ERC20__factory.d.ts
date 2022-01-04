import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { AnyswapV1ERC20, AnyswapV1ERC20Interface } from "../AnyswapV1ERC20";
export declare class AnyswapV1ERC20__factory {
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
    static createInterface(): AnyswapV1ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AnyswapV1ERC20;
}
