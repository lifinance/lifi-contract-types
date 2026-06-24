import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILiFiVaultWrapper, ILiFiVaultWrapperInterface } from "../ILiFiVaultWrapper";
export declare class ILiFiVaultWrapper__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_vaultWrapperAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_integratorShareBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_fees";
            readonly type: "tuple";
            readonly internalType: "struct FeeConfig";
            readonly components: readonly [{
                readonly name: "rateBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "enabled";
                readonly type: "bool[4]";
                readonly internalType: "bool[4]";
            }];
        }, {
            readonly name: "_initData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ILiFiVaultWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILiFiVaultWrapper;
}
