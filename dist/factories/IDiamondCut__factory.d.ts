import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiamondCut, IDiamondCutInterface } from "../IDiamondCut";
export declare class IDiamondCut__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondCut.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct IDiamondCut.FacetCut[]";
            readonly name: "_diamondCut";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_init";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }];
        readonly name: "DiamondCut";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondCut.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct IDiamondCut.FacetCut[]";
            readonly name: "_diamondCut";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "_init";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }];
        readonly name: "diamondCut";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDiamondCutInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDiamondCut;
}
