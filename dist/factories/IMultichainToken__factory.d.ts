import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainToken, IMultichainTokenInterface } from "../IMultichainToken";
export declare class IMultichainToken__factory {
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
    static createInterface(): IMultichainTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainToken;
}
