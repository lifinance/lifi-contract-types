import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOftERC4626, IOftERC4626Interface } from "../IOftERC4626";
export declare class IOftERC4626__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exchangeRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferShares";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IOftERC4626Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOftERC4626;
}
