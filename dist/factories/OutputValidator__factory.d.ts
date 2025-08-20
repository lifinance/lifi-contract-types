import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OutputValidator, OutputValidatorInterface } from "../OutputValidator";
type OutputValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OutputValidator__factory extends ContractFactory {
    constructor(...args: OutputValidatorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OutputValidator>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OutputValidator;
    connect(signer: Signer): OutputValidator__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506040516108b53803806108b5833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b61082f806100865f395ff3fe608060405260043610610063575f3560e01c8063b15c8d4411610041578063b15c8d44146100e5578063e30c3978146100f8578063f2fde38b14610124575f5ffd5b806323452b9c146100675780637200b8291461007d5780638da5cb5b14610091575b5f5ffd5b348015610072575f5ffd5b5061007b610143565b005b348015610088575f5ffd5b5061007b61020c565b34801561009c575f5ffd5b505f546100bc9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61007b6100f336600461074b565b6102f0565b348015610103575f5ffd5b506001546100bc9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561012f575f5ffd5b5061007b61013e366004610784565b6103f9565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610193576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166101e2576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461025e576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f73ffffffffffffffffffffffffffffffffffffffff84161580156103365747915061031d853386610555565b610331858461032c87866107a4565b610555565b6103f2565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa15801561039e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103c291906107e2565b91506103f233846103d387866107a4565b73ffffffffffffffffffffffffffffffffffffffff891692919061058a565b5050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610449576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610496576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036104e5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff831661057f5761057a82826105e2565b505050565b61057a838383610653565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166105d557637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff821661062f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064f73ffffffffffffffffffffffffffffffffffffffff8316826106c1565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166106a0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61057a73ffffffffffffffffffffffffffffffffffffffff841683836106da565b5f385f3884865af161064f5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661071a576390b8ec185f526004601cfd5b5f603452505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610746575f5ffd5b919050565b5f5f5f6060848603121561075d575f5ffd5b61076684610723565b92506020840135915061077b60408501610723565b90509250925092565b5f60208284031215610794575f5ffd5b61079d82610723565b9392505050565b818103818111156107dc577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f602082840312156107f2575f5ffd5b505191905056fea264697066735822122072af1c3770cfffd37843c7e20af6d85182266dcbc5c18b7d621975c1463118eb64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
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
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly type: "function";
        readonly name: "validateOutput";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "expectedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validationWalletAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): OutputValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OutputValidator;
}
export {};
