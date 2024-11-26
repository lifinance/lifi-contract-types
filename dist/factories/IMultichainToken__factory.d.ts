import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainToken, IMultichainTokenInterface } from "../IMultichainToken.js";
export declare class IMultichainToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "underlying";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IMultichainTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainToken;
}
