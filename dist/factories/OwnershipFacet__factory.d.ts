import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OwnershipFacet, OwnershipFacetInterface } from "../OwnershipFacet";
type OwnershipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnershipFacet__factory extends ContractFactory {
    constructor(...args: OwnershipFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OwnershipFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OwnershipFacet;
    connect(signer: Signer): OwnershipFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506106378061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610064575f3560e01c80638da5cb5b1161004d5780638da5cb5b1461007a578063e30c3978146100ab578063f2fde38b146100e8575f5ffd5b806323452b9c146100685780637200b82914610072575b5f5ffd5b6100706100fb565b005b61007061019a565b6100826102d5565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b5473ffffffffffffffffffffffffffffffffffffffff16610082565b6100706100f63660046105c7565b610319565b610103610499565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff16610172576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff1633811461020c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166102617fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36102ac8161050e565b5080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f6103147fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b610321610499565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b73ffffffffffffffffffffffffffffffffffffffff821661038f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361042b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff16331461050c576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b5f602082840312156105d7575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105fa575f5ffd5b939250505056fea264697066735822122016690c27b8b220ab36086b2f23ee07783697098c8b3dcdc5960e2432616f5b0d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "owner_";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "pendingOwner_";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): OwnershipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnershipFacet;
}
export {};
