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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161171638038061171683398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611683806100936000396000f3fe6080604052600436106100965760003560e01c806374ef98d911610069578063a7aa0de71161004e578063a7aa0de714610170578063e30c397814610190578063f2fde38b146101bd57600080fd5b806374ef98d9146101075780638da5cb5b1461011a57600080fd5b8063164e68de1461009b5780631eacd35f146100bd57806323452b9c146100dd5780637200b829146100f2575b600080fd5b3480156100a757600080fd5b506100bb6100b6366004611406565b6101dd565b005b3480156100c957600080fd5b506100bb6100d8366004611428565b610297565b3480156100e957600080fd5b506100bb61030f565b3480156100fe57600080fd5b506100bb6103d9565b6100bb61011536600461146e565b6104bf565b34801561012657600080fd5b506000546101479073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561017c57600080fd5b506100bb61018b3660046114a3565b6105c6565b34801561019c57600080fd5b506001546101479073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101c957600080fd5b506100bb6101d8366004611406565b610705565b60005473ffffffffffffffffffffffffffffffffffffffff16331461022e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061023982610863565b905061024682338361091c565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200160405180910390a35050565b6102a18484610952565b8073ffffffffffffffffffffffffffffffffffffffff16828573ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161030191815260200190565b60405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610360576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103af576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461042b576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b8073ffffffffffffffffffffffffffffffffffffffff1682600073ffffffffffffffffffffffffffffffffffffffff167f03e28afce33ddcc0ab4ff4b9050c6ff0c323292f46b577db77c1a7281320de568660405161052091815260200190565b60405180910390a460006105348434611518565b905080156105c057604051600090339083908381818185875af1925050503d806000811461057e576040519150601f19603f3d011682016040523d82523d6000602084013e610583565b606091505b50509050806105be576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610617576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000805b828110156105be5761065385858381811061063957610639611552565b905060200201602081019061064e9190611406565b610863565b915061068685858381811061066a5761066a611552565b905060200201602081019061067f9190611406565b338461091c565b3385858381811061069957610699611552565b90506020020160208101906106ae9190611406565b73ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa8846040516106f591815260200190565b60405180910390a360010161061c565b60005473ffffffffffffffffffffffffffffffffffffffff163314610756576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107a3576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036107f2576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600073ffffffffffffffffffffffffffffffffffffffff821615610914576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156108eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090f9190611581565b610916565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff83161561094857610943838383610acd565b505050565b6109438282610c49565b8060000361098c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109e557803410156109e1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a769190611581565b905081811015610ac1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61094383333085610d73565b73ffffffffffffffffffffffffffffffffffffffff8316610b1a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b67576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190611581565b905080821115610c3e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610ab8565b6105c0848484610f8d565b73ffffffffffffffffffffffffffffffffffffffff8216610c96576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610cd9576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610ab8565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610d33576040519150601f19603f3d011682016040523d82523d6000602084013e610d38565b606091505b5050905080610943576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610dc0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e0d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610e7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea29190611581565b9050610eb082868686611061565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610f20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f449190611581565b610f4e9190611518565b14610f85576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109439084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526110bf565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526105c09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610fdf565b6000611121826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111ce9092919063ffffffff16565b9050805160001480611142575080806020019051810190611142919061159a565b610943576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610ab8565b60606111dd84846000856111e5565b949350505050565b606082471015611277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610ab8565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112a091906115e0565b60006040518083038185875af1925050503d80600081146112dd576040519150601f19603f3d011682016040523d82523d6000602084013e6112e2565b606091505b50915091506112f3878383876112fe565b979650505050505050565b6060831561139457825160000361138d5773ffffffffffffffffffffffffffffffffffffffff85163b61138d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ab8565b50816111dd565b6111dd83838151156113a95781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab891906115fc565b803573ffffffffffffffffffffffffffffffffffffffff8116811461140157600080fd5b919050565b60006020828403121561141857600080fd5b611421826113dd565b9392505050565b6000806000806080858703121561143e57600080fd5b611447856113dd565b93506020850135925060408501359150611463606086016113dd565b905092959194509250565b60008060006060848603121561148357600080fd5b833592506020840135915061149a604085016113dd565b90509250925092565b600080602083850312156114b657600080fd5b823567ffffffffffffffff808211156114ce57600080fd5b818501915085601f8301126114e257600080fd5b8135818111156114f157600080fd5b8660208260051b850101111561150657600080fd5b60209290920196919550909350505050565b81810381811115610916577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561159357600080fd5b5051919050565b6000602082840312156115ac57600080fd5b8151801515811461142157600080fd5b60005b838110156115d75781810151838201526020016115bf565b50506000910152565b600082516115f28184602087016115bc565b9190910192915050565b602081526000825180602084015261161b8160408501602087016115bc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122031e5af457a1d23ac52e0988b94813bcb1620f2a9d0023941e4c8faba7964584e64736f6c63430008110033";
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
