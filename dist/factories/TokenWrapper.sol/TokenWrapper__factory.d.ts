import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenWrapper, TokenWrapperInterface } from "../../TokenWrapper.sol/TokenWrapper";
type TokenWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenWrapper__factory extends ContractFactory {
    constructor(...args: TokenWrapperConstructorParams);
    deploy(_wrappedToken: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenWrapper>;
    getDeployTransaction(_wrappedToken: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenWrapper;
    connect(signer: Signer): TokenWrapper__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610c16380380610c1683398101604081905261002f916100e8565b600080546001600160a01b038381166001600160a01b03199283161790925560028054928516929091168217905560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af11580156100a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c4919061011b565b505050610144565b80516001600160a01b03811681146100e357600080fd5b919050565b600080604083850312156100fb57600080fd5b610104836100cc565b9150610112602084016100cc565b90509250929050565b60006020828403121561012d57600080fd5b8151801515811461013d57600080fd5b9392505050565b610ac3806101536000396000f3fe60806040526004361061009a5760003560e01c80638da5cb5b11610069578063d0e30db01161004e578063d0e30db01461018a578063e30c397814610192578063f2fde38b146101bf57600080fd5b80638da5cb5b14610107578063996c6cc31461015d57600080fd5b806301e33667146100a657806323452b9c146100c85780633ccfd60b146100dd5780637200b829146100f257600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c13660046109ed565b6101df565b005b3480156100d457600080fd5b506100c6610369565b3480156100e957600080fd5b506100c6610433565b3480156100fe57600080fd5b506100c66105fa565b34801561011357600080fd5b506000546101349073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016957600080fd5b506002546101349073ffffffffffffffffffffffffffffffffffffffff1681565b6100c66106e0565b34801561019e57600080fd5b506001546101349073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101cb57600080fd5b506100c66101da366004610a2e565b6107fe565b60005473ffffffffffffffffffffffffffffffffffffffff163314610230576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102eb5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b50509050806102e5576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061030c565b61030c73ffffffffffffffffffffffffffffffffffffffff8416838361095c565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610409576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156104a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c69190610a52565b6002546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af1158015610544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105689190610a6b565b506002546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b1580156105d557600080fd5b505af11580156105e9573d6000803e3d6000fd5b505050506105f733826109ab565b50565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461064c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561074a57600080fd5b505af115801561075e573d6000803e3d6000fd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156107da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190610a6b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461084f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661089c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108eb576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166109a1576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af16109c75763b12d13eb6000526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff811681146105f757600080fd5b600080600060608486031215610a0257600080fd5b8335610a0d816109cb565b92506020840135610a1d816109cb565b929592945050506040919091013590565b600060208284031215610a4057600080fd5b8135610a4b816109cb565b9392505050565b600060208284031215610a6457600080fd5b5051919050565b600060208284031215610a7d57600080fd5b81518015158114610a4b57600080fdfea2646970667358221220adbd538b8dac3a21149bbcacf7656ebf078d08b62e0eeaeffbf98d51016b544164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_wrappedToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
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
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
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
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
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
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailure";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
