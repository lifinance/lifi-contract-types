import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ownable, OwnableInterface } from "../../CBridgeFacet.t.sol/Ownable";
export declare class Ownable__factory {
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
    static createInterface(): OwnableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ownable;
}
