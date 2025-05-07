import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAlgebraRouter, IAlgebraRouterInterface } from "../IAlgebraRouter";
export declare class IAlgebraRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "poolByPair";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IAlgebraRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAlgebraRouter;
}
