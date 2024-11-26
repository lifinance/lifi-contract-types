import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISwap, ISwapInterface } from "../../IHopBridge.sol/ISwap.js";
export declare class ISwap__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "tokenIndexFrom";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "tokenIndexTo";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "dx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minDy";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ISwapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwap;
}
