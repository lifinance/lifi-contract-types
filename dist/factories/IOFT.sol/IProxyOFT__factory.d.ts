import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IProxyOFT, IProxyOFTInterface } from "../../IOFT.sol/IProxyOFT";
export declare class IProxyOFT__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "token";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IProxyOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProxyOFT;
}
