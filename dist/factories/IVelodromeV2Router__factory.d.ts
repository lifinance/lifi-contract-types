import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVelodromeV2Router, IVelodromeV2RouterInterface } from "../IVelodromeV2Router";
export declare class IVelodromeV2Router__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getAmountsOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IVelodromeV2Router.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "factory";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "poolFor";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_factory";
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
    static createInterface(): IVelodromeV2RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVelodromeV2Router;
}
