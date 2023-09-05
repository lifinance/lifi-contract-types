import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISymbiosisMetaRouter, ISymbiosisMetaRouterInterface } from "../ISymbiosisMetaRouter";
export declare class ISymbiosisMetaRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
            }, {
                readonly internalType: "address[]";
                readonly name: "approvedTokens";
                readonly type: "address[]";
            }, {
                readonly internalType: "address";
                readonly name: "firstDexRouter";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "secondDexRouter";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "nativeIn";
                readonly type: "bool";
            }, {
                readonly internalType: "address";
                readonly name: "relayRecipient";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "otherSideCalldata";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ISymbiosisMetaRouter.MetaRouteTransaction";
            readonly name: "_metarouteTransaction";
            readonly type: "tuple";
        }];
        readonly name: "metaRoute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ISymbiosisMetaRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISymbiosisMetaRouter;
}
