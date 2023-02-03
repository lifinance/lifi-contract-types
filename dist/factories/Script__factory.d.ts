import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Script, ScriptInterface } from "../Script";
export declare class Script__factory {
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
    static createInterface(): ScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Script;
}
