import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibDiamond, LibDiamondInterface } from "../LibDiamond";
declare type LibDiamondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122085668c26ffa6eff1be8eb960a5445b2967e044912ec91dae84a62fafd9cc3f5664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CalldataEmptyButInitNotZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FacetAddressIsNotZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FacetAddressIsZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FacetContainsNoCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FunctionAlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FunctionDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FunctionIsImmutable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IncorrectFacetCutAction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InitReverted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InitZeroButCalldataNotEmpty";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSelectorsInFace";
        readonly type: "error";
    }, {
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }];
    static createInterface(): LibDiamondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LibDiamond;
}
export {};
