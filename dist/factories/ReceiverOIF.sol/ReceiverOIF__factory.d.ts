import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ReceiverOIF, ReceiverOIFInterface } from "../../ReceiverOIF.sol/ReceiverOIF";
type ReceiverOIFConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverOIF__factory extends ContractFactory {
    constructor(...args: ReceiverOIFConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _outputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverOIF>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _outputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverOIF;
    connect(signer: Signer): ReceiverOIF__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b5060405161108f38038061108f83398101604081905261002f916100ec565b600080546001600160a01b0319166001600160a01b03851690811790915561006a576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038216610091576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0381166100b8576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0525061012f565b80516001600160a01b03811681146100e757600080fd5b919050565b60008060006060848603121561010157600080fd5b61010a846100d0565b9250610118602085016100d0565b9150610126604085016100d0565b90509250925092565b60805160a051610f276101686000396000818161018e015261056f01526000818160ef0152818161081001526108370152610f276000f3fe60806040526004361061009a5760003560e01c80638da5cb5b11610069578063c80b0e0f1161004e578063c80b0e0f146101b0578063e30c3978146101d0578063f2fde38b146101fd57600080fd5b80638da5cb5b1461014f578063c6d9d4661461017c57600080fd5b806301e33667146100a657806323452b9c146100c8578063630dc7cb146100dd5780637200b8291461013a57600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100c66100c136600461099b565b61021d565b005b3480156100d457600080fd5b506100c66103a7565b3480156100e957600080fd5b506101117f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561014657600080fd5b506100c6610471565b34801561015b57600080fd5b506000546101119073ffffffffffffffffffffffffffffffffffffffff1681565b34801561018857600080fd5b506101117f000000000000000000000000000000000000000000000000000000000000000081565b3480156101bc57600080fd5b506100c66101cb3660046109dc565b610557565b3480156101dc57600080fd5b506001546101119073ffffffffffffffffffffffffffffffffffffffff1681565b34801561020957600080fd5b506100c6610218366004610a5c565b610640565b60005473ffffffffffffffffffffffffffffffffffffffff16331461026e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103295760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146102e3576040519150601f19603f3d011682016040523d82523d6000602084013e6102e8565b606091505b5050905080610323576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034a565b61034a73ffffffffffffffffffffffffffffffffffffffff8416838361079e565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103f8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610447576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104c3576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105c6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080806105d684860186610bc5565b9194509250905073ffffffffffffffffffffffffffffffffffffffff811661062a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610637838389848a6107ed565b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610691576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106de576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361072d576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166107e3576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8316158061083557610835847f0000000000000000000000000000000000000000000000000000000000000000846108dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634f91bc2b8261087d57600061087f565b835b888888886040518663ffffffff1660e01b81526004016108a29493929190610db6565b6000604051808303818588803b1580156108bb57600080fd5b505af11580156108cf573d6000803e3d6000fd5b5050505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166107e35760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166107e357633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8116811461098857600080fd5b50565b803561099681610966565b919050565b6000806000606084860312156109b057600080fd5b83356109bb81610966565b925060208401356109cb81610966565b929592945050506040919091013590565b600080600080606085870312156109f257600080fd5b8435935060208501359250604085013567ffffffffffffffff80821115610a1857600080fd5b818701915087601f830112610a2c57600080fd5b813581811115610a3b57600080fd5b886020828501011115610a4d57600080fd5b95989497505060200194505050565b600060208284031215610a6e57600080fd5b8135610a7981610966565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610ad257610ad2610a80565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610b1f57610b1f610a80565b604052919050565b600082601f830112610b3857600080fd5b813567ffffffffffffffff811115610b5257610b52610a80565b610b8360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610ad8565b818152846020838601011115610b9857600080fd5b816020850160208301376000918101602001919091529392505050565b8035801515811461099657600080fd5b600080600060608486031215610bda57600080fd5b8335925060208085013567ffffffffffffffff80821115610bfa57600080fd5b818701915087601f830112610c0e57600080fd5b813581811115610c2057610c20610a80565b8060051b610c2f858201610ad8565b918252838101850191858101908b841115610c4957600080fd5b86860192505b83831015610d3357823585811115610c6657600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610c9a57600080fd5b610ca2610aaf565b610cad89830161098b565b8152610cbb6040830161098b565b89820152610ccb6060830161098b565b6040820152610cdc6080830161098b565b606082015260a0820135608082015260c082013587811115610cfe5760008081fd5b610d0c8f8b83860101610b27565b60a083015250610d1e60e08301610bb5565b60c08201528352509186019190860190610c4f565b80985050505050505050610d496040850161098b565b90509250925092565b6000815180845260005b81811015610d7857602081850181015186830182015201610d5c565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015610ea1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290610e7582870182610d52565b91505060c0808301519250610e8d8187018415159052565b509587019593505090850190600101610de4565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550610ecc945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea2646970667358221220ea0e0bed1b9d996f6a93f3acd0e70efcbd668c35ec945c63b06c2cc3b457485864736f6c63430008110033";
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
            readonly name: "_outputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "EXECUTOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "OUTPUT_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "outputFilled";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executionData";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
    static createInterface(): ReceiverOIFInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverOIF;
}
export {};
