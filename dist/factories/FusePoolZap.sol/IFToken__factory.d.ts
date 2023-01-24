import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFToken, IFTokenInterface } from "../../FusePoolZap.sol/IFToken";
export declare class IFToken__factory {
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
    static createInterface(): IFTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFToken;
}
