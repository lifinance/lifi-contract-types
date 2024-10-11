import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiamondCut, IDiamondCutInterface } from "../IDiamondCut";
export declare class IDiamondCut__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "diamondCut";
        readonly inputs: readonly [{
            readonly name: "_diamondCut";
            readonly type: "tuple[]";
            readonly internalType: "struct LibDiamond.FacetCut[]";
            readonly components: readonly [{
                readonly name: "facetAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "action";
                readonly type: "uint8";
                readonly internalType: "enum LibDiamond.FacetCutAction";
            }, {
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }, {
            readonly name: "_init";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_calldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "DiamondCut";
        readonly inputs: readonly [{
            readonly name: "_diamondCut";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct LibDiamond.FacetCut[]";
            readonly components: readonly [{
                readonly name: "facetAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "action";
                readonly type: "uint8";
                readonly internalType: "enum LibDiamond.FacetCutAction";
            }, {
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }, {
            readonly name: "_init";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_calldata";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): IDiamondCutInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDiamondCut;
}
