import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHyphenRouter, IHyphenRouterInterface } from "../IHyphenRouter.js";
export declare class IHyphenRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositErc20";
        readonly inputs: readonly [{
            readonly name: "toChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tag";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositNative";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "toChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tag";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IHyphenRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHyphenRouter;
}
//# sourceMappingURL=IHyphenRouter__factory.d.ts.map