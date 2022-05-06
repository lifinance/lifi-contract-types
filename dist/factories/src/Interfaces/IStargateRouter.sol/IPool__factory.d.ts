import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPool, IPoolInterface } from "../../../../src/Interfaces/IStargateRouter.sol/IPool";
export declare class IPool__factory {
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
    static createInterface(): IPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPool;
}
