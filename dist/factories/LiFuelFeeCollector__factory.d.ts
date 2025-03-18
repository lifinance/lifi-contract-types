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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516116bf3803806116bf83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61162c806100936000396000f3fe6080604052600436106100965760003560e01c806374ef98d911610069578063a7aa0de71161004e578063a7aa0de714610170578063e30c397814610190578063f2fde38b146101bd57600080fd5b806374ef98d9146101075780638da5cb5b1461011a57600080fd5b8063164e68de1461009b5780631eacd35f146100bd57806323452b9c146100dd5780637200b829146100f2575b600080fd5b3480156100a757600080fd5b506100bb6100b63660046113af565b6101dd565b005b3480156100c957600080fd5b506100bb6100d83660046113d1565b610297565b3480156100e957600080fd5b506100bb61030f565b3480156100fe57600080fd5b506100bb6103d9565b6100bb610115366004611417565b6104bf565b34801561012657600080fd5b506000546101479073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561017c57600080fd5b506100bb61018b36600461144c565b61054c565b34801561019c57600080fd5b506001546101479073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101c957600080fd5b506100bb6101d83660046113af565b610692565b60005473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610239826107f0565b90506102468233836108a9565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102a184846108df565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161030191815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610360576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103af576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461042b576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161052091815260200190565b60405180910390a4600061053484346114c1565b90508015610546576105463382610a5a565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461059d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b8281101561068b576105d98585838181106105bf576105bf6114fb565b90506020020160208101906105d491906113af565b6107f0565b915061060c8585838181106105f0576105f06114fb565b905060200201602081019061060591906113af565b33846108a9565b3385858381811061061f5761061f6114fb565b905060200201602081019061063491906113af565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa88460405161067b91815260200190565b60405180910390a36001016105a2565b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106e3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610730576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361077f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600073ffffffffffffffffffffffffffffffffffffffff8216156108a1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089c919061152a565b6108a3565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316156108d5576108d0838383610a76565b505050565b6108d08282610bf2565b80600003610919576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610972578034101561096e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a03919061152a565b905081811015610a4e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6108d083333085610d1c565b60003860003884865af161096e5763b12d13eb6000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8316610ac3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b10576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610b7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba1919061152a565b905080821115610be7576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a45565b610546848484610f36565b73ffffffffffffffffffffffffffffffffffffffff8216610c3f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610c82576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a45565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610cdc576040519150601f19603f3d011682016040523d82523d6000602084013e610ce1565b606091505b50509050806108d0576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610d69576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610db6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610e27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4b919061152a565b9050610e598286868661100a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eed919061152a565b610ef791906114c1565b14610f2e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108d09084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611068565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526105469085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610f88565b60006110ca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111779092919063ffffffff16565b90508051600014806110eb5750808060200190518101906110eb9190611543565b6108d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a45565b6060611186848460008561118e565b949350505050565b606082471015611220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a45565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112499190611589565b60006040518083038185875af1925050503d8060008114611286576040519150601f19603f3d011682016040523d82523d6000602084013e61128b565b606091505b509150915061129c878383876112a7565b979650505050505050565b6060831561133d5782516000036113365773ffffffffffffffffffffffffffffffffffffffff85163b611336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a45565b5081611186565b61118683838151156113525781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4591906115a5565b803573ffffffffffffffffffffffffffffffffffffffff811681146113aa57600080fd5b919050565b6000602082840312156113c157600080fd5b6113ca82611386565b9392505050565b600080600080608085870312156113e757600080fd5b6113f085611386565b9350602085013592506040850135915061140c60608601611386565b905092959194509250565b60008060006060848603121561142c57600080fd5b833592506020840135915061144360408501611386565b90509250925092565b6000806020838503121561145f57600080fd5b823567ffffffffffffffff8082111561147757600080fd5b818501915085601f83011261148b57600080fd5b81358181111561149a57600080fd5b8660208260051b85010111156114af57600080fd5b60209290920196919550909350505050565b818103818111156108a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561153c57600080fd5b5051919050565b60006020828403121561155557600080fd5b815180151581146113ca57600080fd5b60005b83811015611580578181015183820152602001611568565b50506000910152565b6000825161159b818460208701611565565b9190910192915050565b60208152600082518060208401526115c4816040850160208701611565565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220bb0643e67dc5b91f9582db20e10ca1db08d120164444a2446dd82f2beac1cedd64736f6c63430008110033";
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
