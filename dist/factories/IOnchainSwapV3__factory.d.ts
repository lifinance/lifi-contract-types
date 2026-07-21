import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOnchainSwapV3, IOnchainSwapV3Interface } from "../IOnchainSwapV3";
export declare class IOnchainSwapV3__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onswap";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dexgateway";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "calldata_";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IOnchainSwapV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOnchainSwapV3;
}
