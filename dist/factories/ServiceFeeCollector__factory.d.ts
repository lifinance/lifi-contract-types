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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161182438038061182483398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611791806100936000396000f3fe6080604052600436106100bc5760003560e01c80638da5cb5b11610074578063e30c39781161004e578063e30c3978146101d6578063f2fde38b14610203578063f8be52e11461022357600080fd5b80638da5cb5b14610140578063a7aa0de714610196578063c6aabf84146101b657600080fd5b806323452b9c116100a557806323452b9c146101035780637200b8291461011857806374ef98d91461012d57600080fd5b8063164e68de146100c15780631eacd35f146100e3575b600080fd5b3480156100cd57600080fd5b506100e16100dc3660046114e1565b610236565b005b3480156100ef57600080fd5b506100e16100fe366004611503565b6102f0565b34801561010f57600080fd5b506100e1610368565b34801561012457600080fd5b506100e1610432565b6100e161013b366004611549565b610518565b34801561014c57600080fd5b5060005461016d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156101a257600080fd5b506100e16101b136600461157e565b6105d5565b3480156101c257600080fd5b506100e16101d13660046115f3565b61071b565b3480156101e257600080fd5b5060015461016d9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561020f57600080fd5b506100e161021e3660046114e1565b610791565b6100e16102313660046114e1565b6108ef565b60005473ffffffffffffffffffffffffffffffffffffffff163314610287576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061029282610940565b905061029f8233836109f9565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102fa8484610a2f565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161035a91815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103b9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610408576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610484576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de563460405161057991815260200190565b60405180910390a43361058c8434611626565b604051600081818185875af1925050503d80600081146105c8576040519150601f19603f3d011682016040523d82523d6000602084013e6105cd565b606091505b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610626576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b828110156107145761066285858381811061064857610648611660565b905060200201602081019061065d91906114e1565b610940565b915061069585858381811061067957610679611660565b905060200201602081019061068e91906114e1565b33846109f9565b338585838181106106a8576106a8611660565b90506020020160208101906106bd91906114e1565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161070491815260200190565b60405180910390a360010161062b565b5050505050565b6107258383610a2f565b8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d8460405161078491815260200190565b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107e2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661082f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361087e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405134815273ffffffffffffffffffffffffffffffffffffffff8216906000907f3d6c2b3381a1d543f3272a61e4fb9b05f25e654572839e269a091b0d2308ec2d9060200160405180910390a350565b600073ffffffffffffffffffffffffffffffffffffffff8216156109f1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ec919061168f565b6109f3565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff831615610a2557610a20838383610baa565b505050565b610a208282610d2c565b80600003610a69576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ac25780341015610abe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b53919061168f565b905081811015610b9e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610a2083333085610e56565b73ffffffffffffffffffffffffffffffffffffffff8316610bf7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c44576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610cb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd5919061168f565b905080821115610d1b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b95565b610d26848484611068565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d79576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610dbc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b95565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610e16576040519150601f19603f3d011682016040523d82523d6000602084013e610e1b565b606091505b5050905080610a20576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610ea3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ef0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610f61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f85919061168f565b9050610f938286868661113c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611003573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611027919061168f565b6110319190611626565b146105cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a209084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261119a565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d269085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110ba565b60006111fc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112a99092919063ffffffff16565b905080516000148061121d57508080602001905181019061121d91906116a8565b610a20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b95565b60606112b884846000856112c0565b949350505050565b606082471015611352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b95565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161137b91906116ee565b60006040518083038185875af1925050503d80600081146113b8576040519150601f19603f3d011682016040523d82523d6000602084013e6113bd565b606091505b50915091506113ce878383876113d9565b979650505050505050565b6060831561146f5782516000036114685773ffffffffffffffffffffffffffffffffffffffff85163b611468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b95565b50816112b8565b6112b883838151156114845781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b95919061170a565b803573ffffffffffffffffffffffffffffffffffffffff811681146114dc57600080fd5b919050565b6000602082840312156114f357600080fd5b6114fc826114b8565b9392505050565b6000806000806080858703121561151957600080fd5b611522856114b8565b9350602085013592506040850135915061153e606086016114b8565b905092959194509250565b60008060006060848603121561155e57600080fd5b8335925060208401359150611575604085016114b8565b90509250925092565b6000806020838503121561159157600080fd5b823567ffffffffffffffff808211156115a957600080fd5b818501915085601f8301126115bd57600080fd5b8135818111156115cc57600080fd5b8660208260051b85010111156115e157600080fd5b60209290920196919550909350505050565b60008060006060848603121561160857600080fd5b611611846114b8565b925060208401359150611575604085016114b8565b818103818111156109f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156116a157600080fd5b5051919050565b6000602082840312156116ba57600080fd5b815180151581146114fc57600080fd5b60005b838110156116e55781810151838201526020016116cd565b50506000910152565b600082516117008184602087016116ca565b9190910192915050565b60208152600082518060208401526117298160408501602087016116ca565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220d73c646cba4c8fd62d838288f7bae07d35c6fa1c30539b6ff8d7489315b35cc164736f6c63430008110033";
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
