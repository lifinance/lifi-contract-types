import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProxyOFT, IProxyOFTInterface } from "../IProxyOFT";
export declare class IProxyOFT__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IProxyOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyOFT;
}
