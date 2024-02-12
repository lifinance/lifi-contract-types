import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFuelFeeCollector, LiFuelFeeCollectorInterface } from "../LiFuelFeeCollector";
declare type LiFuelFeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFuelFeeCollector__factory extends ContractFactory {
    constructor(...args: LiFuelFeeCollectorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFuelFeeCollector>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFuelFeeCollector;
    connect(signer: Signer): LiFuelFeeCollector__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516116e23803806116e283398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61164f806100936000396000f3fe6080604052600436106100965760003560e01c806374ef98d911610069578063a7aa0de71161004e578063a7aa0de714610170578063e30c397814610190578063f2fde38b146101bd57600080fd5b806374ef98d9146101075780638da5cb5b1461011a57600080fd5b8063164e68de1461009b5780631eacd35f146100bd57806323452b9c146100dd5780637200b829146100f2575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046113d2565b6101dd565b005b3480156100c957600080fd5b506100bb6100d83660046113f4565b610297565b3480156100e957600080fd5b506100bb61030f565b3480156100fe57600080fd5b506100bb6103d9565b6100bb61011536600461143a565b6104bf565b34801561012657600080fd5b506000546101479073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561017c57600080fd5b506100bb61018b36600461146f565b61058b565b34801561019c57600080fd5b506001546101479073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101c957600080fd5b506100bb6101d83660046113d2565b6106d1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006102398261082f565b90506102468233836108e8565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102a1848461091e565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161030191815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610360576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103af576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461042b576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161052091815260200190565b60405180910390a4600061053484346114e4565b905080156105855760405133908290600081818185875af1925050503d806000811461057c576040519150601f19603f3d011682016040523d82523d6000602084013e610581565b606091505b5050505b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105dc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b828110156106ca576106188585838181106105fe576105fe61151e565b905060200201602081019061061391906113d2565b61082f565b915061064b85858381811061062f5761062f61151e565b905060200201602081019061064491906113d2565b33846108e8565b3385858381811061065e5761065e61151e565b905060200201602081019061067391906113d2565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa8846040516106ba91815260200190565b60405180910390a36001016105e1565b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610722576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661076f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036107be576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600073ffffffffffffffffffffffffffffffffffffffff8216156108e0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156108b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108db919061154d565b6108e2565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316156109145761090f838383610a99565b505050565b61090f8282610c15565b80600003610958576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b157803410156109ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a42919061154d565b905081811015610a8d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61090f83333085610d3f565b73ffffffffffffffffffffffffffffffffffffffff8316610ae6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc4919061154d565b905080821115610c0a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a84565b610585848484610f59565b73ffffffffffffffffffffffffffffffffffffffff8216610c62576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ca5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a84565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610cff576040519150601f19603f3d011682016040523d82523d6000602084013e610d04565b606091505b505090508061090f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610d8c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dd9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610e4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6e919061154d565b9050610e7c8286868661102d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610eec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f10919061154d565b610f1a91906114e4565b14610f51576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261090f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261108b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526105859085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610fab565b60006110ed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661119a9092919063ffffffff16565b905080516000148061110e57508080602001905181019061110e9190611566565b61090f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a84565b60606111a984846000856111b1565b949350505050565b606082471015611243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a84565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161126c91906115ac565b60006040518083038185875af1925050503d80600081146112a9576040519150601f19603f3d011682016040523d82523d6000602084013e6112ae565b606091505b50915091506112bf878383876112ca565b979650505050505050565b606083156113605782516000036113595773ffffffffffffffffffffffffffffffffffffffff85163b611359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a84565b50816111a9565b6111a983838151156113755781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8491906115c8565b803573ffffffffffffffffffffffffffffffffffffffff811681146113cd57600080fd5b919050565b6000602082840312156113e457600080fd5b6113ed826113a9565b9392505050565b6000806000806080858703121561140a57600080fd5b611413856113a9565b9350602085013592506040850135915061142f606086016113a9565b905092959194509250565b60008060006060848603121561144f57600080fd5b8335925060208401359150611466604085016113a9565b90509250925092565b6000806020838503121561148257600080fd5b823567ffffffffffffffff8082111561149a57600080fd5b818501915085601f8301126114ae57600080fd5b8135818111156114bd57600080fd5b8660208260051b85010111156114d257600080fd5b60209290920196919550909350505050565b818103818111156108e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561155f57600080fd5b5051919050565b60006020828403121561157857600080fd5b815180151581146113ed57600080fd5b60005b838110156115a357818101518382015260200161158b565b50506000910152565b600082516115be818460208701611588565b9190910192915050565b60208152600082518060208401526115e7816040850160208701611588565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220bd8da628b8433ae84ce2c6d25a7d93d6812f4fc00e8bd667cb41aa5021dda3e664736f6c63430008110033";
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
    static createInterface(): LiFuelFeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFuelFeeCollector;
}
export {};
