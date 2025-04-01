import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICelerToken, ICelerTokenInterface } from "../ICelerToken";
export declare class ICelerToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "canonical";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ICelerTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICelerToken;
}
