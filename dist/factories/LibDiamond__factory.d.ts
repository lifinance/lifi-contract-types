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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c397dbacfdb5a7c3fa22b5a760b87fc80e2595fe72c95b64e7894189c65576c364736f6c63430008110033";
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
