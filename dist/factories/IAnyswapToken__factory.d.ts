import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAnyswapToken, IAnyswapTokenInterface } from "../IAnyswapToken";
export declare class IAnyswapToken__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IAnyswapTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAnyswapToken;
}
