import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ReentrancyGuard, ReentrancyGuardInterface } from "../ReentrancyGuard";
export declare class ReentrancyGuard__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }];
    static createInterface(): ReentrancyGuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuard;
}
