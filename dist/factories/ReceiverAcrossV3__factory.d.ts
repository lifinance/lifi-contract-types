import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ReceiverAcrossV3, ReceiverAcrossV3Interface } from "../ReceiverAcrossV3";
declare type ReceiverAcrossV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f80fd5b506040516110c33803806110c383398101604081905261002e91610073565b5f80546001600160a01b0319166001600160a01b039485161790559082166080521660a0526100b3565b80516001600160a01b038116811461006e575f80fd5b919050565b5f805f60608486031215610085575f80fd5b61008e84610058565b925061009c60208501610058565b91506100aa60408501610058565b90509250925092565b60805160a051610fd36100f05f395f8181610106015261047401525f81816101a1015281816107a301528181610805015261090a0152610fd35ff3fe608060405260043610610096575f3560e01c80637200b82911610066578063c34c08e51161004c578063c34c08e514610190578063e30c3978146101c3578063f2fde38b146101ef575f80fd5b80637200b829146101515780638da5cb5b14610165575f80fd5b806301e33667146100a157806323452b9c146100c25780633a5be8cb146100d6578063430a5df7146100f5575f80fd5b3661009d57005b5f80fd5b3480156100ac575f80fd5b506100c06100bb366004610a18565b61020e565b005b3480156100cd575f80fd5b506100c0610393565b3480156100e1575f80fd5b506100c06100f0366004610b40565b61045c565b348015610100575f80fd5b506101287f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561015c575f80fd5b506100c06104fe565b348015610170575f80fd5b505f546101289073ffffffffffffffffffffffffffffffffffffffff1681565b34801561019b575f80fd5b506101287f000000000000000000000000000000000000000000000000000000000000000081565b3480156101ce575f80fd5b506001546101289073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fa575f80fd5b506100c0610209366004610be8565b6105e2565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461025e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610315575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102cf576040519150601f19603f3d011682016040523d82523d5f602084013e6102d4565b606091505b505090508061030f576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610336565b61033673ffffffffffffffffffffffffffffffffffffffff8416838361073e565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103e3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610432576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805f838060200190518101906104e29190610c95565b9250925092506104f5838389848a610787565b50505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610550576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610632576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661067f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106ce576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661077e576390b8ec185f526004601cfd5b5f603452505050565b6107c873ffffffffffffffffffffffffffffffffffffffff84167f000000000000000000000000000000000000000000000000000000000000000083610936565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b90610840908890889088908890600401610e61565b5f604051808303815f87803b158015610857575f80fd5b505af1925050508015610868575060015b6108ee5761088d73ffffffffffffffffffffffffffffffffffffffff8416838361073e565b6040805173ffffffffffffffffffffffffffffffffffffffff80861682528416602082015290810182905242606082015285907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b61092f73ffffffffffffffffffffffffffffffffffffffff84167f00000000000000000000000000000000000000000000000000000000000000005f6109b4565b5050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661077e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661077e57633e3f8f735f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661077e57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610a15575f80fd5b50565b5f805f60608486031215610a2a575f80fd5b8335610a35816109f4565b92506020840135610a45816109f4565b929592945050506040919091013590565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715610aa657610aa6610a56565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610af357610af3610a56565b604052919050565b5f67ffffffffffffffff821115610b1457610b14610a56565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f805f8060808587031215610b53575f80fd5b8435610b5e816109f4565b9350602085013592506040850135610b75816109f4565b9150606085013567ffffffffffffffff811115610b90575f80fd5b8501601f81018713610ba0575f80fd5b8035610bb3610bae82610afb565b610aac565b818152886020838501011115610bc7575f80fd5b816020840160208301375f6020838301015280935050505092959194509250565b5f60208284031215610bf8575f80fd5b8135610c03816109f4565b9392505050565b8051610c15816109f4565b919050565b5f5b83811015610c34578181015183820152602001610c1c565b50505f910152565b5f82601f830112610c4b575f80fd5b8151610c59610bae82610afb565b818152846020838601011115610c6d575f80fd5b610c7e826020830160208701610c1a565b949350505050565b80518015158114610c15575f80fd5b5f805f60608486031215610ca7575f80fd5b8351925060208085015167ffffffffffffffff80821115610cc6575f80fd5b818701915087601f830112610cd9575f80fd5b815181811115610ceb57610ceb610a56565b8060051b610cfa858201610aac565b918252838101850191858101908b841115610d13575f80fd5b86860192505b83831015610df957825185811115610d2f575f80fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610d62575f80fd5b610d6a610a83565b610d75898301610c0a565b8152610d8360408301610c0a565b89820152610d9360608301610c0a565b6040820152610da460808301610c0a565b606082015260a0820151608082015260c082015187811115610dc4575f80fd5b610dd28f8b83860101610c3c565b60a083015250610de460e08301610c86565b60c08201528352509186019190860190610d19565b80985050505050505050610e0f60408501610c0a565b90509250925092565b5f8151808452610e2f816020860160208601610c1a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f6080808301878452602060808186015281885180845260a0935060a08701915060a08160051b880101838b015f5b83811015610f4d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290610f2182870182610e18565b91505060c0808301519250610f398187018415159052565b509587019593505090850190600101610e90565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550610f78945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea264697066735822122015d43b9cc89477b4cbe739e4795d079ca5858611ad27ae214e36a916dbfc80f964736f6c63430008160033";
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
