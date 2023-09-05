import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISwap, ISwapInterface } from "../../IHopBridge.sol/ISwap";
export declare class ISwap__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "tokenIndexFrom";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint8";
            readonly name: "tokenIndexTo";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "dx";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minDy";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISwapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISwap;
}
