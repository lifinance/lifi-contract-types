import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFusePool, IFusePoolInterface } from "../../FusePoolZap.sol/IFusePool";
export declare class IFusePool__factory {
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
    static createInterface(): IFusePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFusePool;
}
