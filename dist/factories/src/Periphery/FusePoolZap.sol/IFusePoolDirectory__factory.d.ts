import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFusePoolDirectory, IFusePoolDirectoryInterface } from "../../../../src/Periphery/FusePoolZap.sol/IFusePoolDirectory";
export declare class IFusePoolDirectory__factory {
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
    static createInterface(): IFusePoolDirectoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFusePoolDirectory;
}
