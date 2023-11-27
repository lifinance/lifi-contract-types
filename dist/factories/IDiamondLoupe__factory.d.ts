import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiamondLoupe, IDiamondLoupeInterface } from "../IDiamondLoupe";
export declare class IDiamondLoupe__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "facetAddress";
        readonly inputs: readonly [{
            readonly name: "_functionSelector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "facetAddress_";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facetAddresses";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "facetAddresses_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facetFunctionSelectors";
        readonly inputs: readonly [{
            readonly name: "_facet";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "facetFunctionSelectors_";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "facets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "facets_";
            readonly type: "tuple[]";
            readonly internalType: "struct IDiamondLoupe.Facet[]";
            readonly components: readonly [{
                readonly name: "facetAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IDiamondLoupeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDiamondLoupe;
}
