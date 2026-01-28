import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ReceiverAcrossV3, ReceiverAcrossV3Interface } from "../ReceiverAcrossV3";
type ReceiverAcrossV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverAcrossV3__factory extends ContractFactory {
    constructor(...args: ReceiverAcrossV3ConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _spokepool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverAcrossV3>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _spokepool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverAcrossV3;
    connect(signer: Signer): ReceiverAcrossV3__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b5060405161112338038061112383398101604081905261002f91610076565b600080546001600160a01b0319166001600160a01b039485161790559082166080521660a0526100b9565b80516001600160a01b038116811461007157600080fd5b919050565b60008060006060848603121561008b57600080fd5b6100948461005a565b92506100a26020850161005a565b91506100b06040850161005a565b90509250925092565b60805160a0516110296100fa6000396000818161010f01526104890152600081816101ae015281816107c401528181610826015261092e01526110296000f3fe60806040526004361061009a5760003560e01c80637200b82911610069578063c34c08e51161004e578063c34c08e51461019c578063e30c3978146101d0578063f2fde38b146101fd57600080fd5b80637200b8291461015a5780638da5cb5b1461016f57600080fd5b806301e33667146100a657806323452b9c146100c85780633a5be8cb146100dd578063430a5df7146100fd57600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c1366004610a4f565b61021d565b005b3480156100d457600080fd5b506100c66103a7565b3480156100e957600080fd5b506100c66100f8366004610b7d565b610471565b34801561010957600080fd5b506101317f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016657600080fd5b506100c6610515565b34801561017b57600080fd5b506000546101319073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101a857600080fd5b506101317f000000000000000000000000000000000000000000000000000000000000000081565b3480156101dc57600080fd5b506001546101319073ffffffffffffffffffffffffffffffffffffffff1681565b34801561020957600080fd5b506100c6610218366004610c2c565b6105fb565b60005473ffffffffffffffffffffffffffffffffffffffff16331461026e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103295760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146102e3576040519150601f19603f3d011682016040523d82523d6000602084013e6102e8565b606091505b5050905080610323576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034a565b61034a73ffffffffffffffffffffffffffffffffffffffff84168383610759565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103f8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610447576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104e0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806000838060200190518101906104f99190610ce1565b92509250925061050c838389848a6107a8565b50505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610567576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461064c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610699576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106e8576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661079e576390b8ec186000526004601cfd5b6000603452505050565b6107e973ffffffffffffffffffffffffffffffffffffffff84167f00000000000000000000000000000000000000000000000000000000000000008361095b565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b90610861908890889088908890600401610eb8565b600060405180830381600087803b15801561087b57600080fd5b505af192505050801561088c575060015b610912576108b173ffffffffffffffffffffffffffffffffffffffff84168383610759565b6040805173ffffffffffffffffffffffffffffffffffffffff80861682528416602082015290810182905242606082015285907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b61095473ffffffffffffffffffffffffffffffffffffffff84167f000000000000000000000000000000000000000000000000000000000000000060006109e5565b5050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661079e5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661079e57633e3f8f736000526004601cfd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661079e57633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610a4c57600080fd5b50565b600080600060608486031215610a6457600080fd5b8335610a6f81610a2a565b92506020840135610a7f81610a2a565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610ae257610ae2610a90565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610b2f57610b2f610a90565b604052919050565b600067ffffffffffffffff821115610b5157610b51610a90565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008060008060808587031215610b9357600080fd5b8435610b9e81610a2a565b9350602085013592506040850135610bb581610a2a565b9150606085013567ffffffffffffffff811115610bd157600080fd5b8501601f81018713610be257600080fd5b8035610bf5610bf082610b37565b610ae8565b818152886020838501011115610c0a57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600060208284031215610c3e57600080fd5b8135610c4981610a2a565b9392505050565b8051610c5b81610a2a565b919050565b60005b83811015610c7b578181015183820152602001610c63565b50506000910152565b600082601f830112610c9557600080fd5b8151610ca3610bf082610b37565b818152846020838601011115610cb857600080fd5b610cc9826020830160208701610c60565b949350505050565b80518015158114610c5b57600080fd5b600080600060608486031215610cf657600080fd5b8351925060208085015167ffffffffffffffff80821115610d1657600080fd5b818701915087601f830112610d2a57600080fd5b815181811115610d3c57610d3c610a90565b8060051b610d4b858201610ae8565b918252838101850191858101908b841115610d6557600080fd5b86860192505b83831015610e4f57825185811115610d8257600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610db657600080fd5b610dbe610abf565b610dc9898301610c50565b8152610dd760408301610c50565b89820152610de760608301610c50565b6040820152610df860808301610c50565b606082015260a0820151608082015260c082015187811115610e1a5760008081fd5b610e288f8b83860101610c84565b60a083015250610e3a60e08301610cd1565b60c08201528352509186019190860190610d6b565b80985050505050505050610e6560408501610c50565b90509250925092565b60008151808452610e86816020860160208601610c60565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015610fa3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290610f7782870182610e6e565b91505060c0808301519250610f8f8187018415159052565b509587019593505090850190600101610ee6565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550610fce945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea2646970667358221220499ac9691a357d77363980dd351e574b31fa6f5f50a94656bb26700b1fe9653964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_spokepool";
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
        readonly name: "executor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "handleV3AcrossMessage";
        readonly inputs: readonly [{
            readonly name: "tokenSent";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
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
        readonly name: "spokepool";
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
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
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
    }];
    static createInterface(): ReceiverAcrossV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverAcrossV3;
}
export {};
