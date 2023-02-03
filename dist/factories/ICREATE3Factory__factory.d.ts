import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICREATE3Factory, ICREATE3FactoryInterface } from "../ICREATE3Factory";
export declare class ICREATE3Factory__factory {
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
    static createInterface(): ICREATE3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICREATE3Factory;
}
