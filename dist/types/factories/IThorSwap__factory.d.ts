import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IThorSwap, IThorSwapInterface } from "../IThorSwap.js";
export declare class IThorSwap__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositWithExpiry";
        readonly inputs: readonly [{
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "memo";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "expiration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IThorSwapInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IThorSwap;
}
//# sourceMappingURL=IThorSwap__factory.d.ts.map