import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPeggedTokenBridgeV2, IPeggedTokenBridgeV2Interface } from "../IPeggedTokenBridgeV2";
export declare class IPeggedTokenBridgeV2__factory {
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
    static createInterface(): IPeggedTokenBridgeV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPeggedTokenBridgeV2;
}
