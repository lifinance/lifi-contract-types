import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWETHProbe, IWETHProbeInterface } from "../../SecurityReviewProbeFacet.sol/IWETHProbe";
export declare class IWETHProbe__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IWETHProbeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWETHProbe;
}
