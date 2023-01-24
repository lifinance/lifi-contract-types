import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapV2Router02, UniswapV2Router02Interface } from "../../Interfaces.sol/UniswapV2Router02";
export declare class UniswapV2Router02__factory {
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
    static createInterface(): UniswapV2Router02Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Router02;
}
