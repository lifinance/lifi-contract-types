import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFraxOFT, IFraxOFTInterface } from "../../IFraxHopV2.sol/IFraxOFT";
export declare class IFraxOFT__factory {
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
    static createInterface(): IFraxOFTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFraxOFT;
}
