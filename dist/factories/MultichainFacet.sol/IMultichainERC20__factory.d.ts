import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainERC20, IMultichainERC20Interface } from "../../MultichainFacet.sol/IMultichainERC20";
export declare class IMultichainERC20__factory {
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
    static createInterface(): IMultichainERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainERC20;
}
