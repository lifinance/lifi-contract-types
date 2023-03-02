import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHyphenRouter, IHyphenRouterInterface } from "../IHyphenRouter";
export declare class IHyphenRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "toChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "tag";
            readonly type: "string";
        }];
        readonly name: "depositErc20";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "toChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "tag";
            readonly type: "string";
        }];
        readonly name: "depositNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IHyphenRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHyphenRouter;
}
