import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibDiamond, LibDiamondInterface } from "../LibDiamond";
type LibDiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LibDiamond__factory extends ContractFactory {
    constructor(...args: LibDiamondConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LibDiamond>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LibDiamond;
    connect(signer: Signer): LibDiamond__factory;
    static readonly bytecode = "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea264697066735822122084e895fccc4ee9cf709e7c21a698995461662ef99671b49e0cdaf2a6734b9ce464736f6c634300081d0033";
    static readonly abi: readonly [{
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
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CalldataEmptyButInitNotZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FacetAddressIsNotZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FacetAddressIsZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FacetContainsNoCode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FunctionAlreadyExists";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FunctionDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FunctionIsImmutable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IncorrectFacetCutAction";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InitReverted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InitZeroButCalldataNotEmpty";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSelectorsInFace";
        readonly inputs: readonly [];
    }];
    static createInterface(): LibDiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibDiamond;
}
export {};
