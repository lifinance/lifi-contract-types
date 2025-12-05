import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ReceiverOIF, ReceiverOIFInterface } from "../../ReceiverOIF.sol/ReceiverOIF";
type ReceiverOIFConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverOIF__factory extends ContractFactory {
    constructor(...args: ReceiverOIFConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _outputSettler: PromiseOrValue<string>, _minimumGas: PromiseOrValue<BigNumberish>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverOIF>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _outputSettler: PromiseOrValue<string>, _minimumGas: PromiseOrValue<BigNumberish>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverOIF;
    connect(signer: Signer): ReceiverOIF__factory;
    static readonly bytecode = "0x610100604052348015610010575f5ffd5b506040516111d83803806111d883398101604081905261002f9161007d565b5f80546001600160a01b0319166001600160a01b0396871617905592841660805260a05260c0919091521660e0526100cf565b80516001600160a01b0381168114610078575f5ffd5b919050565b5f5f5f5f5f60a08688031215610091575f5ffd5b61009a86610062565b94506100a860208701610062565b93506100b660408701610062565b6060870151608090970151959894975095949392505050565b60805160a05160c05160e0516110b36101255f395f81816101e901526105f201525f8181610267015261090701525f81816101a8015261081c01525f818161010c0152818161089701526108be01526110b35ff3fe6080604052600436106100bb575f3560e01c8063c0d14d0b11610071578063e30c39781161004c578063e30c39781461022a578063e39d90f814610256578063f2fde38b14610289575f5ffd5b8063c0d14d0b14610197578063c6d9d466146101d8578063c80b0e0f1461020b575f5ffd5b8063630dc7cb116100a1578063630dc7cb146100fb5780637200b829146101585780638da5cb5b1461016c575f5ffd5b806301e33667146100c657806323452b9c146100e7575f5ffd5b366100c257005b5f5ffd5b3480156100d1575f5ffd5b506100e56100e0366004610adb565b6102a8565b005b3480156100f2575f5ffd5b506100e561042d565b348015610106575f5ffd5b5061012e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b348015610163575f5ffd5b506100e56104f6565b348015610177575f5ffd5b505f5461012e9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101a2575f5ffd5b506101ca7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161014f565b3480156101e3575f5ffd5b5061012e7f000000000000000000000000000000000000000000000000000000000000000081565b348015610216575f5ffd5b506100e5610225366004610b19565b6105da565b348015610235575f5ffd5b5060015461012e9073ffffffffffffffffffffffffffffffffffffffff1681565b348015610261575f5ffd5b506101ca7f000000000000000000000000000000000000000000000000000000000000000081565b348015610294575f5ffd5b506100e56102a3366004610b95565b610675565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102f8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103af575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610369576040519150601f19603f3d011682016040523d82523d5f602084013e61036e565b606091505b50509050806103a9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103d0565b6103d073ffffffffffffffffffffffffffffffffffffffff841683836107d1565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461047d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104cc576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610548576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610649576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f808061065884860186610cf5565b9194509250905061066c838389848a61081a565b50505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146106c5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610712576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610761576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610811576390b8ec185f526004601cfd5b5f603452505050565b7f00000000000000000000000000000000000000000000000000000000000000005a1015610874576040517fdd629f8600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831615806108bc576108bc847f000000000000000000000000000000000000000000000000000000000000000084610a0c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634f91bc2b82610903575f610905565b835b7f00000000000000000000000000000000000000000000000000000000000000005a6109319190610e92565b90898989896040518763ffffffff1660e01b81526004016109559493929190610f1c565b5f604051808303818589803b15801561096c575f5ffd5b5088f1945050505050801561097f575060015b610a04578015610998576109938383610a8a565b6109a3565b6109a38484846107d1565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610811575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661081157633e3f8f735f526004601cfd5b5f385f3884865af1610aa35763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff81168114610ac8575f5ffd5b50565b8035610ad681610aa7565b919050565b5f5f5f60608486031215610aed575f5ffd5b8335610af881610aa7565b92506020840135610b0881610aa7565b929592945050506040919091013590565b5f5f5f5f60608587031215610b2c575f5ffd5b8435935060208501359250604085013567ffffffffffffffff811115610b50575f5ffd5b8501601f81018713610b60575f5ffd5b803567ffffffffffffffff811115610b76575f5ffd5b876020828401011115610b87575f5ffd5b949793965060200194505050565b5f60208284031215610ba5575f5ffd5b8135610bb081610aa7565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715610c0757610c07610bb7565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610c5457610c54610bb7565b604052919050565b5f82601f830112610c6b575f5ffd5b813567ffffffffffffffff811115610c8557610c85610bb7565b610cb660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610c0d565b818152846020838601011115610cca575f5ffd5b816020850160208301375f918101602001919091529392505050565b80358015158114610ad6575f5ffd5b5f5f5f60608486031215610d07575f5ffd5b83359250602084013567ffffffffffffffff811115610d24575f5ffd5b8401601f81018613610d34575f5ffd5b803567ffffffffffffffff811115610d4e57610d4e610bb7565b8060051b610d5e60208201610c0d565b91825260208184018101929081019089841115610d79575f5ffd5b6020850192505b83831015610e7557823567ffffffffffffffff811115610d9e575f5ffd5b850160e0818c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610dd1575f5ffd5b610dd9610be4565b610de560208301610acb565b8152610df360408301610acb565b6020820152610e0460608301610acb565b6040820152610e1560808301610acb565b606082015260a0820135608082015260c082013567ffffffffffffffff811115610e3d575f5ffd5b610e4c8d602083860101610c5c565b60a083015250610e5e60e08301610ce6565b60c082015283525060209283019290910190610d80565b8096505050505050610e8960408501610acb565b90509250925092565b81810381811115610eca577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f608082018683526080602084015280865180835260a08501915060a08160051b8601019250602088015f5b8281101561104b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60878603018452815173ffffffffffffffffffffffffffffffffffffffff815116865273ffffffffffffffffffffffffffffffffffffffff602082015116602087015273ffffffffffffffffffffffffffffffffffffffff60408201511660408701526060810151610ffa606088018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151608087015260a081015160e060a088015261101e60e0880182610ed0565b905060c0820151915061103560c088018315159052565b9550506020938401939190910190600101610f48565b5050505073ffffffffffffffffffffffffffffffffffffffff948516604084015292909316606090910152939250505056fea2646970667358221220bcff564192bde9d473b562611242d9d797448295e6e5aa743832cf53ffd2a81b64736f6c634300081d0033";
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
        }, {
            readonly name: "_minimumGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recoverGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "MINIMUM_GAS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "RECOVER_GAS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "NotEnoughGas";
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
