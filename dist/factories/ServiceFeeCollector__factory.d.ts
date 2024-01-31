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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161183538038061183583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6117a2806100936000396000f3fe6080604052600436106100bc5760003560e01c80638da5cb5b11610074578063e30c39781161004e578063e30c3978146101d6578063f2fde38b14610203578063f8be52e11461022357600080fd5b80638da5cb5b14610140578063a7aa0de714610196578063c6aabf84146101b657600080fd5b806323452b9c116100a557806323452b9c146101035780637200b8291461011857806374ef98d91461012d57600080fd5b8063164e68de146100c15780631eacd35f146100e3575b600080fd5b3480156100cd57600080fd5b506100e16100dc3660046114f2565b610236565b005b3480156100ef57600080fd5b506100e16100fe366004611514565b6102f0565b34801561010f57600080fd5b506100e1610368565b34801561012457600080fd5b506100e1610432565b6100e161013b36600461155a565b610518565b34801561014c57600080fd5b5060005461016d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156101a257600080fd5b506100e16101b136600461158f565b6105e4565b3480156101c257600080fd5b506100e16101d1366004611604565b61072a565b3480156101e257600080fd5b5060015461016d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561020f57600080fd5b506100e161021e3660046114f2565b6107a0565b6100e16102313660046114f2565b6108fe565b60005473ffffffffffffffffffffffffffffffffffffffff163314610287576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006102928261094f565b905061029f823383610a08565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102fa8484610a3e565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161035a91815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610408576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610484576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de563460405161057991815260200190565b60405180910390a4600061058d8434611637565b905080156105de5760405133908290600081818185875af1925050503d80600081146105d5576040519150601f19603f3d011682016040523d82523d6000602084013e6105da565b606091505b5050505b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610635576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b828110156107235761067185858381811061065757610657611671565b905060200201602081019061066c91906114f2565b61094f565b91506106a485858381811061068857610688611671565b905060200201602081019061069d91906114f2565b3384610a08565b338585838181106106b7576106b7611671565b90506020020160208101906106cc91906114f2565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161071391815260200190565b60405180910390a360010161063a565b5050505050565b6107348383610a3e565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d8460405161079391815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107f1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661083e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361088d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405134815273ffffffffffffffffffffffffffffffffffffffff8216906000907f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d9060200160405180910390a350565b600073ffffffffffffffffffffffffffffffffffffffff821615610a00576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fb91906116a0565b610a02565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff831615610a3457610a2f838383610bb9565b505050565b610a2f8282610d35565b80600003610a78576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ad15780341015610acd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6291906116a0565b905081811015610bad576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610a2f83333085610e5f565b73ffffffffffffffffffffffffffffffffffffffff8316610c06576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c53576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610cc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce491906116a0565b905080821115610d2a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ba4565b6105de848484611079565b73ffffffffffffffffffffffffffffffffffffffff8216610d82576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610dc5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ba4565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610e1f576040519150601f19603f3d011682016040523d82523d6000602084013e610e24565b606091505b5050905080610a2f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610eac576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ef9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610f6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8e91906116a0565b9050610f9c8286868661114d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561100c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103091906116a0565b61103a9190611637565b14611071576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a2f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526111ab565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526105de9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110cb565b600061120d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112ba9092919063ffffffff16565b905080516000148061122e57508080602001905181019061122e91906116b9565b610a2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ba4565b60606112c984846000856112d1565b949350505050565b606082471015611363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ba4565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161138c91906116ff565b60006040518083038185875af1925050503d80600081146113c9576040519150601f19603f3d011682016040523d82523d6000602084013e6113ce565b606091505b50915091506113df878383876113ea565b979650505050505050565b606083156114805782516000036114795773ffffffffffffffffffffffffffffffffffffffff85163b611479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ba4565b50816112c9565b6112c983838151156114955781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba4919061171b565b803573ffffffffffffffffffffffffffffffffffffffff811681146114ed57600080fd5b919050565b60006020828403121561150457600080fd5b61150d826114c9565b9392505050565b6000806000806080858703121561152a57600080fd5b611533856114c9565b9350602085013592506040850135915061154f606086016114c9565b905092959194509250565b60008060006060848603121561156f57600080fd5b8335925060208401359150611586604085016114c9565b90509250925092565b600080602083850312156115a257600080fd5b823567ffffffffffffffff808211156115ba57600080fd5b818501915085601f8301126115ce57600080fd5b8135818111156115dd57600080fd5b8660208260051b85010111156115f257600080fd5b60209290920196919550909350505050565b60008060006060848603121561161957600080fd5b611622846114c9565b925060208401359150611586604085016114c9565b81810381811115610a02577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156116b257600080fd5b5051919050565b6000602082840312156116cb57600080fd5b8151801515811461150d57600080fd5b60005b838110156116f65781810151838201526020016116de565b50506000910152565b600082516117118184602087016116db565b9190910192915050565b602081526000825180602084015261173a8160408501602087016116db565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212208b32076e522c050d8a11418e3e8e76da3727ae7eedbc299e51d6a098a1a9c20364736f6c63430008110033";
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
