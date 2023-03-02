import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMultichainERC20, IMultichainERC20Interface } from "../../MultichainFacet.sol/IMultichainERC20";
export declare class IMultichainERC20__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "bindaddr";
            readonly type: "address";
        }];
        readonly name: "Swapout";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IMultichainERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMultichainERC20;
}
