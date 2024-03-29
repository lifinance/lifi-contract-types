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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516117dc3803806117dc83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611749806100936000396000f3fe6080604052600436106100bc5760003560e01c8063a7aa0de711610074578063e30c39781161004e578063e30c3978146101d6578063f2fde38b14610203578063f8be52e11461022357600080fd5b8063a7aa0de714610183578063c6aabf84146101a3578063def65669146101c357600080fd5b806323452b9c116100a557806323452b9c146101035780637200b829146101185780638da5cb5b1461012d57600080fd5b8063164e68de146100c15780631eacd35f146100e3575b600080fd5b3480156100cd57600080fd5b506100e16100dc366004611499565b610236565b005b3480156100ef57600080fd5b506100e16100fe3660046114bb565b6102f0565b34801561010f57600080fd5b506100e1610368565b34801561012457600080fd5b506100e1610432565b34801561013957600080fd5b5060005461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561018f57600080fd5b506100e161019e366004611501565b610518565b3480156101af57600080fd5b506100e16101be366004611576565b61065e565b6100e16101d13660046115b2565b6106d4565b3480156101e257600080fd5b5060015461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561020f57600080fd5b506100e161021e366004611499565b610741565b6100e1610231366004611499565b61089f565b60005473ffffffffffffffffffffffffffffffffffffffff163314610287576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610292826108f0565b905061029f8233836109a9565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102fa84846109df565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161035a91815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610408576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610484576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610569576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b82811015610657576105a585858381811061058b5761058b6115de565b90506020020160208101906105a09190611499565b6108f0565b91506105d88585838181106105bc576105bc6115de565b90506020020160208101906105d19190611499565b33846109a9565b338585838181106105eb576105eb6115de565b90506020020160208101906106009190611499565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161064791815260200190565b60405180910390a360010161056e565b5050505050565b61066883836109df565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d846040516106c791815260200190565b60405180910390a3505050565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de563460405161073591815260200190565b60405180910390a45050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610792576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107df576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361082e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405134815273ffffffffffffffffffffffffffffffffffffffff8216906000907f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d9060200160405180910390a350565b600073ffffffffffffffffffffffffffffffffffffffff8216156109a1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610978573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099c919061160d565b6109a3565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316156109d5576109d0838383610b5a565b505050565b6109d08282610cdc565b80600003610a19576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a725780341015610a6e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610adf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b03919061160d565b905081811015610b4e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6109d083333085610e06565b73ffffffffffffffffffffffffffffffffffffffff8316610ba7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c85919061160d565b905080821115610ccb576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b45565b610cd6848484611020565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d29576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610d6c576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b45565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610dc6576040519150601f19603f3d011682016040523d82523d6000602084013e610dcb565b606091505b50509050806109d0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610e53576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ea0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610f11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f35919061160d565b9050610f43828686866110f4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd7919061160d565b610fe19190611626565b14611018576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109d09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611152565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610cd69085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611072565b60006111b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112619092919063ffffffff16565b90508051600014806111d55750808060200190518101906111d59190611660565b6109d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b45565b60606112708484600085611278565b949350505050565b60608247101561130a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b45565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161133391906116a6565b60006040518083038185875af1925050503d8060008114611370576040519150601f19603f3d011682016040523d82523d6000602084013e611375565b606091505b509150915061138687838387611391565b979650505050505050565b606083156114275782516000036114205773ffffffffffffffffffffffffffffffffffffffff85163b611420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b45565b5081611270565b611270838381511561143c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4591906116c2565b803573ffffffffffffffffffffffffffffffffffffffff8116811461149457600080fd5b919050565b6000602082840312156114ab57600080fd5b6114b482611470565b9392505050565b600080600080608085870312156114d157600080fd5b6114da85611470565b935060208501359250604085013591506114f660608601611470565b905092959194509250565b6000806020838503121561151457600080fd5b823567ffffffffffffffff8082111561152c57600080fd5b818501915085601f83011261154057600080fd5b81358181111561154f57600080fd5b8660208260051b850101111561156457600080fd5b60209290920196919550909350505050565b60008060006060848603121561158b57600080fd5b61159484611470565b9250602084013591506115a960408501611470565b90509250925092565b600080604083850312156115c557600080fd5b823591506115d560208401611470565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561161f57600080fd5b5051919050565b818103818111156109a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561167257600080fd5b815180151581146114b457600080fd5b60005b8381101561169d578181015183820152602001611685565b50506000910152565b600082516116b8818460208701611682565b9190910192915050565b60208152600082518060208401526116e1816040850160208701611682565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122059133c8c2421a30bc1065c0fe35f5637f1a08f60fe547b55e0c9ddcc2092799264736f6c63430008110033";
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
        readonly name: "collectNativeGasFees";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "collectTokenGasFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "feeAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "chainId";
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
