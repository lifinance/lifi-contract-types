import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IThorSwap, IThorSwapInterface } from "../IThorSwap";
export declare class IThorSwap__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "memo";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiration";
            readonly type: "uint256";
        }];
        readonly name: "depositWithExpiry";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IThorSwapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IThorSwap;
}
