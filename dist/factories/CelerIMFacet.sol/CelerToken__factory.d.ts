import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CelerToken, CelerTokenInterface } from "../../CelerIMFacet.sol/CelerToken";
export declare class CelerToken__factory {
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
    static createInterface(): CelerTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerToken;
}
