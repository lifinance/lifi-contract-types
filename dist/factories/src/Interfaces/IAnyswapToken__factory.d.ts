import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAnyswapToken, IAnyswapTokenInterface } from "../../../src/Interfaces/IAnyswapToken";
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
