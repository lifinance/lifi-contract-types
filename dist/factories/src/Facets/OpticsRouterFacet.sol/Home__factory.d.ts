import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Home, HomeInterface } from "../../../../src/Facets/OpticsRouterFacet.sol/Home";
export declare class Home__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): HomeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Home;
}
