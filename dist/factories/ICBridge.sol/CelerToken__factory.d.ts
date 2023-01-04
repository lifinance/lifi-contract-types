import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CelerToken, CelerTokenInterface } from "../../ICBridge.sol/CelerToken";
export declare class CelerToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "canonical";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): CelerTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerToken;
}
