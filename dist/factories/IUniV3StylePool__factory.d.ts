import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniV3StylePool, IUniV3StylePoolInterface } from "../IUniV3StylePool";
export declare class IUniV3StylePool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "token0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IUniV3StylePoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniV3StylePool;
}
