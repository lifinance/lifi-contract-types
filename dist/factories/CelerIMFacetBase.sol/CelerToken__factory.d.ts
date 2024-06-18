import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CelerToken, CelerTokenInterface } from "../../CelerIMFacetBase.sol/CelerToken";
export declare class CelerToken__factory {
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
    static createInterface(): CelerTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerToken;
}
