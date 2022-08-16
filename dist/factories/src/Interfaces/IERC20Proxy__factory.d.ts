import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20Proxy, IERC20ProxyInterface } from "../../../src/Interfaces/IERC20Proxy";
export declare class IERC20Proxy__factory {
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
    static createInterface(): IERC20ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Proxy;
}
