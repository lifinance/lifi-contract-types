import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBlast, IBlastInterface } from "../IBlast";
export declare class IBlast__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "claimAllGas";
        readonly inputs: readonly [{
            readonly name: "_contractAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "configureClaimableGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IBlastInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBlast;
}
