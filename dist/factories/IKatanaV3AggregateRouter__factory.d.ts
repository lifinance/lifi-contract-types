import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IKatanaV3AggregateRouter, IKatanaV3AggregateRouterInterface } from "../IKatanaV3AggregateRouter";
export declare class IKatanaV3AggregateRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "execute";
        readonly inputs: readonly [{
            readonly name: "commands";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "inputs";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IKatanaV3AggregateRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKatanaV3AggregateRouter;
}
