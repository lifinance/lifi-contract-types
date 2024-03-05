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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610ac2380380610ac283398101604081905261002f916100e8565b600080546001600160a01b038481166001600160a01b03199283161790925560028054928416929091168217905560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af11580156100a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c4919061011b565b505050610144565b80516001600160a01b03811681146100e357600080fd5b919050565b600080604083850312156100fb57600080fd5b610104836100cc565b9150610112602084016100cc565b90509250929050565b60006020828403121561012d57600080fd5b8151801515811461013d57600080fd5b9392505050565b61096f806101536000396000f3fe60806040526004361061009a5760003560e01c80638da5cb5b11610069578063d0e30db01161004e578063d0e30db014610197578063e30c39781461019f578063f2fde38b146101cc57600080fd5b80638da5cb5b1461013d578063996c6cc31461016a57600080fd5b80631588359b146100a657806323452b9c146100fc5780633ccfd60b146101135780637200b8291461012857600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506003546100d39073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561010857600080fd5b506101116101ec565b005b34801561011f57600080fd5b506101116102b6565b34801561013457600080fd5b50610111610529565b34801561014957600080fd5b506000546100d39073ffffffffffffffffffffffffffffffffffffffff1681565b34801561017657600080fd5b506002546100d39073ffffffffffffffffffffffffffffffffffffffff1681565b61011161060f565b3480156101ab57600080fd5b506001546100d39073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d857600080fd5b506101116101e73660046108c1565b610763565b60005473ffffffffffffffffffffffffffffffffffffffff16331461023d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661028c576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610325573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034991906108fe565b6002546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156103c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103eb9190610917565b506002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561045857600080fd5b505af115801561046c573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d80600081146104b2576040519150601f19603f3d011682016040523d82523d6000602084013e6104b7565b606091505b50509050806104f2576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518281527fbeaa92c6354c6dcf375d2c514352b2c11bc865784722e5dd9b267e606eb5fc5f9060200160405180910390a15050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461057b576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561067957600080fd5b505af115801561068d573d6000803e3d6000fd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af1158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d9190610917565b506040513481527f5b8cd8f3a67af1dee11ad4321a05f79a76cc7ea517810fc56d6d96c1e60d36869060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107b4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610801576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610850576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6000602082840312156108d357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146108f757600080fd5b9392505050565b60006020828403121561091057600080fd5b5051919050565b60006020828403121561092957600080fd5b815180151581146108f757600080fdfea26469706673582212207bc55cfe3f01f97ffb75ae9bec0fd9ea3fdd5687ce0d2dd5082f48f7061fab7f64736f6c63430008110033";
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
        readonly type: "receive";
        readonly stateMutability: "payable";
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
        readonly inputs: readonly [];
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
