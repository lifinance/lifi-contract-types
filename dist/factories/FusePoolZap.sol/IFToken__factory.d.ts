import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFToken, IFTokenInterface } from "../../FusePoolZap.sol/IFToken";
export declare class IFToken__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "isCEther";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFToken;
}
