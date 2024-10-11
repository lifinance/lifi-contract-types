import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ServiceFeeCollector, ServiceFeeCollectorInterface } from "../ServiceFeeCollector";
declare type ServiceFeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ServiceFeeCollector__factory extends ContractFactory {
    constructor(...args: ServiceFeeCollectorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ServiceFeeCollector>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ServiceFeeCollector;
    connect(signer: Signer): ServiceFeeCollector__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161162c38038061162c83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611599806100936000396000f3fe6080604052600436106100965760003560e01c8063a7aa0de711610069578063e30c39781161004e578063e30c39781461017d578063f2fde38b146101aa578063f8be52e1146101ca57600080fd5b8063a7aa0de71461013d578063c6aabf841461015d57600080fd5b8063164e68de1461009b57806323452b9c146100bd5780637200b829146100d25780638da5cb5b146100e7575b600080fd5b3480156100a757600080fd5b506100bb6100b636600461135b565b6101dd565b005b3480156100c957600080fd5b506100bb610297565b3480156100de57600080fd5b506100bb610361565b3480156100f357600080fd5b506000546101149073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561014957600080fd5b506100bb61015836600461137d565b610447565b34801561016957600080fd5b506100bb6101783660046113f2565b61058d565b34801561018957600080fd5b506001546101149073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101b657600080fd5b506100bb6101c536600461135b565b610603565b6100bb6101d836600461135b565b610761565b60005473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610239826107b2565b905061024682338361086b565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102e8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610337576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff163381146103b3576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610498576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b82811015610586576104d48585838181106104ba576104ba61142e565b90506020020160208101906104cf919061135b565b6107b2565b91506105078585838181106104eb576104eb61142e565b9050602002016020810190610500919061135b565b338461086b565b3385858381811061051a5761051a61142e565b905060200201602081019061052f919061135b565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161057691815260200190565b60405180910390a360010161049d565b5050505050565b61059783836108a1565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d846040516105f691815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610654576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106a1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106f0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405134815273ffffffffffffffffffffffffffffffffffffffff8216906000907f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d9060200160405180910390a350565b600073ffffffffffffffffffffffffffffffffffffffff821615610863576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561083a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e919061145d565b610865565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff83161561089757610892838383610a1c565b505050565b6108928282610b9e565b806000036108db576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109345780341015610930576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c5919061145d565b905081811015610a10576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61089283333085610cc8565b73ffffffffffffffffffffffffffffffffffffffff8316610a69576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ab6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610b23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b47919061145d565b905080821115610b8d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a07565b610b98848484610ee2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610beb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610c2e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a07565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610c88576040519150601f19603f3d011682016040523d82523d6000602084013e610c8d565b606091505b5050905080610892576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610d15576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d62576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610dd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df7919061145d565b9050610e0582868686610fb6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e99919061145d565b610ea39190611476565b14610eda576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108929084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611014565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b989085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610f34565b6000611076826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111239092919063ffffffff16565b905080516000148061109757508080602001905181019061109791906114b0565b610892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a07565b6060611132848460008561113a565b949350505050565b6060824710156111cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a07565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111f591906114f6565b60006040518083038185875af1925050503d8060008114611232576040519150601f19603f3d011682016040523d82523d6000602084013e611237565b606091505b509150915061124887838387611253565b979650505050505050565b606083156112e95782516000036112e25773ffffffffffffffffffffffffffffffffffffffff85163b6112e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a07565b5081611132565b61113283838151156112fe5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a079190611512565b803573ffffffffffffffffffffffffffffffffffffffff8116811461135657600080fd5b919050565b60006020828403121561136d57600080fd5b61137682611332565b9392505050565b6000806020838503121561139057600080fd5b823567ffffffffffffffff808211156113a857600080fd5b818501915085601f8301126113bc57600080fd5b8135818111156113cb57600080fd5b8660208260051b85010111156113e057600080fd5b60209290920196919550909350505050565b60008060006060848603121561140757600080fd5b61141084611332565b92506020840135915061142560408501611332565b90509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561146f57600080fd5b5051919050565b81810381811115610865577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156114c257600080fd5b8151801515811461137657600080fd5b60005b838110156114ed5781810151838201526020016114d5565b50506000910152565b600082516115088184602087016114d2565b9190910192915050565b60208152600082518060208401526115318160408501602087016114d2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212209b9354c6d23d8c29254accf8331f8f5f3b77a275d3108247c62b96507081175264736f6c63430008110033";
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
        readonly name: "batchWithdrawFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "collectNativeInsuranceFees";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "collectTokenInsuranceFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
        readonly name: "withdrawFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "FeesWithdrawn";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GasFeesCollected";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "chainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "InsuranceFeesCollected";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotEnoughNativeForFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailure";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ServiceFeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ServiceFeeCollector;
}
export {};
