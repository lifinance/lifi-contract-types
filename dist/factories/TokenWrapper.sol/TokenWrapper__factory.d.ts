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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610a7a380380610a7a83398101604081905261002f916100e8565b600080546001600160a01b038481166001600160a01b03199283161790925560028054928416929091168217905560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af11580156100a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c4919061011b565b505050610144565b80516001600160a01b03811681146100e357600080fd5b919050565b600080604083850312156100fb57600080fd5b610104836100cc565b9150610112602084016100cc565b90509250929050565b60006020828403121561012d57600080fd5b8151801515811461013d57600080fd5b9392505050565b610927806101536000396000f3fe60806040526004361061007f5760003560e01c8063996c6cc31161004e578063996c6cc314610122578063d0e30db01461014f578063e30c397814610157578063f2fde38b1461018457600080fd5b806323452b9c1461008b5780633ccfd60b146100a25780637200b829146100b75780638da5cb5b146100cc57600080fd5b3661008657005b600080fd5b34801561009757600080fd5b506100a06101a4565b005b3480156100ae57600080fd5b506100a061026e565b3480156100c357600080fd5b506100a06104e1565b3480156100d857600080fd5b506000546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561012e57600080fd5b506002546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b6100a06105c7565b34801561016357600080fd5b506001546100f99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561019057600080fd5b506100a061019f366004610879565b61071b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101f5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610244576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156102dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030191906108b6565b6002546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af115801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a391906108cf565b506002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561041057600080fd5b505af1158015610424573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d806000811461046a576040519150601f19603f3d011682016040523d82523d6000602084013e61046f565b606091505b50509050806104aa576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518281527fbeaa92c6354c6dcf375d2c514352b2c11bc865784722e5dd9b267e606eb5fc5f9060200160405180910390a15050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610533576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561063157600080fd5b505af1158015610645573d6000803e3d6000fd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156106c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e591906108cf565b506040513481527f5b8cd8f3a67af1dee11ad4321a05f79a76cc7ea517810fc56d6d96c1e60d36869060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461076c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107b9576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610808576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60006020828403121561088b57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146108af57600080fd5b9392505050565b6000602082840312156108c857600080fd5b5051919050565b6000602082840312156108e157600080fd5b815180151581146108af57600080fdfea2646970667358221220013ecc3102c2c4204713cdf7cb22d8d2d0f49a195e459b6d6b539fcc868c4c1864736f6c63430008110033";
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
