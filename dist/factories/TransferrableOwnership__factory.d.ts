import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TransferrableOwnership, TransferrableOwnershipInterface } from "../TransferrableOwnership";
declare type TransferrableOwnershipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransferrableOwnership__factory extends ContractFactory {
    constructor(...args: TransferrableOwnershipConstructorParams);
    deploy(initialOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TransferrableOwnership>;
    getDeployTransaction(initialOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TransferrableOwnership;
    connect(signer: Signer): TransferrableOwnership__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161050e38038061050e83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61047b806100936000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b1461007e578063e30c3978146100c7578063f2fde38b146100e757600080fd5b806323452b9c1461006c5780637200b82914610076575b600080fd5b6100746100fa565b005b6100746101c4565b60005461009e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015461009e9073ffffffffffffffffffffffffffffffffffffffff1681565b6100746100f5366004610408565b6102aa565b60005473ffffffffffffffffffffffffffffffffffffffff16331461014b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661019a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610216576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610348576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610397576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006020828403121561041a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461043e57600080fd5b939250505056fea2646970667358221220a06844bc291a911ce0eaf3a4d61c070bd15eb40c0190efd26248c079cbc2bfa864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialOwner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TransferrableOwnershipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransferrableOwnership;
}
export {};
