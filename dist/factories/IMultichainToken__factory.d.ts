import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainToken, IMultichainTokenInterface } from "../IMultichainToken";
export declare class IMultichainToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "underlying";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMultichainTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainToken;
}
