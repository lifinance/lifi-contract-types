import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISyncSwapV2Vault, ISyncSwapV2VaultInterface } from "../ISyncSwapV2Vault";
export declare class ISyncSwapV2Vault__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISyncSwapV2VaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISyncSwapV2Vault;
}
