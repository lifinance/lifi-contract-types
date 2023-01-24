import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFactory, IFactoryInterface } from "../../IStargateRouter.sol/IFactory";
export declare class IFactory__factory {
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
    static createInterface(): IFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFactory;
}
