import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20Permit7597, IERC20Permit7597Interface } from "../IERC20Permit7597";
export declare class IERC20Permit7597__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IERC20Permit7597Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Permit7597;
}
