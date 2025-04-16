import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVelodromeV2PoolFactory, IVelodromeV2PoolFactoryInterface } from "../IVelodromeV2PoolFactory";
export declare class IVelodromeV2PoolFactory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getFee";
        readonly inputs: readonly [{
            readonly name: "_pool";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IVelodromeV2PoolFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVelodromeV2PoolFactory;
}
