import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenWrapper, TokenWrapperInterface } from "../../TokenWrapper.sol/TokenWrapper";
declare type TokenWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenWrapper__factory extends ContractFactory {
    constructor(...args: TokenWrapperConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _wrappedToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenWrapper>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _wrappedToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenWrapper;
    connect(signer: Signer): TokenWrapper__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161098c38038061098c83398101604081905261002f916100e8565b600080546001600160a01b038481166001600160a01b03199283161790925560028054928416929091168217905560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af11580156100a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c4919061011b565b505050610144565b80516001600160a01b03811681146100e357600080fd5b919050565b600080604083850312156100fb57600080fd5b610104836100cc565b9150610112602084016100cc565b90509250929050565b60006020828403121561012d57600080fd5b8151801515811461013d57600080fd5b9392505050565b610839806101536000396000f3fe6080604052600436106100965760003560e01c80638da5cb5b11610069578063d0e30db01161004e578063d0e30db014610197578063e30c39781461019f578063f2fde38b146101cc57600080fd5b80638da5cb5b1461013d578063996c6cc31461016a57600080fd5b80631588359b1461009b57806323452b9c146100f15780632e1a7d4d146101085780637200b82914610128575b600080fd5b3480156100a757600080fd5b506003546100c89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100fd57600080fd5b506101066101ec565b005b34801561011457600080fd5b5061010661012336600461078b565b6102b6565b34801561013457600080fd5b506101066103f3565b34801561014957600080fd5b506000546100c89073ffffffffffffffffffffffffffffffffffffffff1681565b34801561017657600080fd5b506002546100c89073ffffffffffffffffffffffffffffffffffffffff1681565b6101066104d9565b3480156101ab57600080fd5b506001546100c89073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d857600080fd5b506101066101e73660046107a4565b61062d565b60005473ffffffffffffffffffffffffffffffffffffffff16331461023d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661028c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d806000811461037c576040519150601f19603f3d011682016040523d82523d6000602084013e610381565b606091505b50509050806103bc576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518281527fbeaa92c6354c6dcf375d2c514352b2c11bc865784722e5dd9b267e606eb5fc5f9060200160405180910390a15050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610445576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561054357600080fd5b505af1158015610557573d6000803e3d6000fd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906107e1565b506040513481527f5b8cd8f3a67af1dee11ad4321a05f79a76cc7ea517810fc56d6d96c1e60d36869060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461067e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106cb576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361071a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006020828403121561079d57600080fd5b5035919050565b6000602082840312156107b657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146107da57600080fd5b9392505050565b6000602082840312156107f357600080fd5b815180151581146107da57600080fdfea264697066735822122097c916d434bf0a2cb4aaf75a3cfeabb67888b554adad875abf38ba71a1de9a8c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_wrappedToken";
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
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "externalWrapper";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IWrapper";
        }];
        readonly stateMutability: "view";
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
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrappedToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly type: "event";
        readonly name: "Unwrapped";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Wrapped";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailure";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
