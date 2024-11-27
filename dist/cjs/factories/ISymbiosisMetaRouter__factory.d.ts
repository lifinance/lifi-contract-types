import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISymbiosisMetaRouter, ISymbiosisMetaRouterInterface } from "../ISymbiosisMetaRouter.js";
export declare class ISymbiosisMetaRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "metaRoute";
        readonly inputs: readonly [{
            readonly name: "_metarouteTransaction";
            readonly type: "tuple";
            readonly internalType: "struct ISymbiosisMetaRouter.MetaRouteTransaction";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeIn";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "relayRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "otherSideCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): ISymbiosisMetaRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISymbiosisMetaRouter;
}
