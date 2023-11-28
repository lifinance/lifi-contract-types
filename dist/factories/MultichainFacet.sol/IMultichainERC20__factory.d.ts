import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainERC20, IMultichainERC20Interface } from "../../MultichainFacet.sol/IMultichainERC20";
export declare class IMultichainERC20__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "Swapout";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bindaddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IMultichainERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainERC20;
}
