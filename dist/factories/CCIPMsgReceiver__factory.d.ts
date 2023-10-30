import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CCIPMsgReceiver, CCIPMsgReceiverInterface } from "../CCIPMsgReceiver";
declare type CCIPMsgReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CCIPMsgReceiver__factory extends ContractFactory {
    constructor(...args: CCIPMsgReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _router: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CCIPMsgReceiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _router: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CCIPMsgReceiver;
    connect(signer: Signer): CCIPMsgReceiver__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001cfa38038062001cfa83398101604081905262000034916200014e565b83836001600160a01b03811662000065576040516335fdcccd60e21b81526000600482015260240160405180910390fd5b6001600160a01b03908116608052600080549282166001600160a01b0319938416178155600280548684169416939093179092556003839055604051908516917f4b6edc08984698e63b0e261e9f3c7b76124110440d417aeb44d39fcb103f7bba91a26040516001600160a01b038316907f3e3c5e6d5b512eaa5d5a80669846cfbaf8bde70fc6f7a3be9828cffc9ba5f1db90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050620001a0565b80516001600160a01b03811681146200014957600080fd5b919050565b600080600080608085870312156200016557600080fd5b620001708562000131565b9350620001806020860162000131565b9250620001906040860162000131565b6060959095015193969295505050565b608051611b37620001c3600039600081816101ce01526106230152611b376000f3fe6080604052600436106100c05760003560e01c80638da5cb5b11610074578063c34c08e51161004e578063c34c08e514610216578063e30c397814610243578063f2fde38b1461027057600080fd5b80638da5cb5b1461016d578063b0f479a1146101bf578063bcf225e6146101f257600080fd5b80632e144579116100a55780632e144579146101185780637200b8291461013857806385572ffb1461014d57600080fd5b806301ffc9a7146100cc57806323452b9c1461010157600080fd5b366100c757005b600080fd5b3480156100d857600080fd5b506100ec6100e7366004611298565b610290565b60405190151581526020015b60405180910390f35b34801561010d57600080fd5b50610116610329565b005b34801561012457600080fd5b50610116610133366004611303565b6103f3565b34801561014457600080fd5b50610116610525565b34801561015957600080fd5b50610116610168366004611344565b61060b565b34801561017957600080fd5b5060005461019a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f8565b3480156101cb57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061019a565b3480156101fe57600080fd5b5061020860035481565b6040519081526020016100f8565b34801561022257600080fd5b5060025461019a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561024f57600080fd5b5060015461019a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027c57600080fd5b5061011661028b36600461137f565b610695565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f85572ffb00000000000000000000000000000000000000000000000000000000148061032357507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461037a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103c9576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610444576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104ff5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146104b9576040519150601f19603f3d011682016040523d82523d6000602084013e6104be565b606091505b50509050806104f9576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61052073ffffffffffffffffffffffffffffffffffffffff841683836107f3565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610577576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610681576040517fd7f733340000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b61069261068d826115f9565b6108c7565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610733576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610782576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105209084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610937565b60008082606001518060200190518101906108e2919061172a565b915091506105208282856080015160008151811061090257610902611895565b60200260200101516000015133876080015160008151811061092657610926611895565b602002602001015160200151610a46565b6000610999826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e0e9092919063ffffffff16565b90508051600014806109ba5750808060200190518101906109ba91906118c4565b610520576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610678565b73ffffffffffffffffffffffffffffffffffffffff8316610c565760005a9050600354811015610b715760008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610aca576040519150601f19603f3d011682016040523d82523d6000602084013e610acf565b606091505b5050905080610b0a576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610e07565b60025460035473ffffffffffffffffffffffffffffffffffffffff90911690634f91bc2b908490610ba2908561190e565b90898989896040518763ffffffff1660e01b8152600401610bc6949392919061196b565b6000604051808303818589803b158015610bdf57600080fd5b5088f19450505050508015610bf2575060015b610c505760008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610aca576040519150601f19603f3d011682016040523d82523d6000602084013e610acf565b50610e07565b60005a6002549091508490610c869073ffffffffffffffffffffffffffffffffffffffff80841691166000610e25565b600354821015610cb157610b0a73ffffffffffffffffffffffffffffffffffffffff821685856107f3565b600254610cd89073ffffffffffffffffffffffffffffffffffffffff838116911685610fa7565b60025460035473ffffffffffffffffffffffffffffffffffffffff90911690634f91bc2b90610d07908561190e565b898989896040518663ffffffff1660e01b8152600401610d2a949392919061196b565b600060405180830381600088803b158015610d4457600080fd5b5087f193505050508015610d56575060015b610ddc57610d7b73ffffffffffffffffffffffffffffffffffffffff821685856107f3565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b600254610e049073ffffffffffffffffffffffffffffffffffffffff83811691166000610e25565b50505b5050505050565b6060610e1d84846000856110a0565b949350505050565b801580610ec557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190611aa6565b155b610f51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610678565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105209084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610845565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561101d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110419190611aa6565b90506104f9847f095ea7b300000000000000000000000000000000000000000000000000000000856110738686611abf565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610845565b606082471015611132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610678565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161115b9190611ad2565b60006040518083038185875af1925050503d8060008114611198576040519150601f19603f3d011682016040523d82523d6000602084013e61119d565b606091505b50915091506111ae878383876111b9565b979650505050505050565b6060831561124f5782516000036112485773ffffffffffffffffffffffffffffffffffffffff85163b611248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610678565b5081610e1d565b610e1d83838151156112645781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106789190611aee565b6000602082840312156112aa57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146112da57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461069257600080fd5b60008060006060848603121561131857600080fd5b8335611323816112e1565b92506020840135611333816112e1565b929592945050506040919091013590565b60006020828403121561135657600080fd5b813567ffffffffffffffff81111561136d57600080fd5b820160a081850312156112da57600080fd5b60006020828403121561139157600080fd5b81356112da816112e1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156113ee576113ee61139c565b60405290565b60405160a0810167ffffffffffffffff811182821017156113ee576113ee61139c565b60405160e0810167ffffffffffffffff811182821017156113ee576113ee61139c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156114815761148161139c565b604052919050565b803567ffffffffffffffff811681146114a157600080fd5b919050565b600067ffffffffffffffff8211156114c0576114c061139c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126114fd57600080fd5b813561151061150b826114a6565b61143a565b81815284602083860101111561152557600080fd5b816020850160208301376000918101602001919091529392505050565b600067ffffffffffffffff82111561155c5761155c61139c565b5060051b60200190565b600082601f83011261157757600080fd5b8135602061158761150b83611542565b82815260069290921b840181019181810190868411156115a657600080fd5b8286015b848110156115ee57604081890312156115c35760008081fd5b6115cb6113cb565b81356115d6816112e1565b815281850135858201528352918301916040016115aa565b509695505050505050565b600060a0823603121561160b57600080fd5b6116136113f4565b8235815261162360208401611489565b6020820152604083013567ffffffffffffffff8082111561164357600080fd5b61164f368387016114ec565b6040840152606085013591508082111561166857600080fd5b611674368387016114ec565b6060840152608085013591508082111561168d57600080fd5b5061169a36828601611566565b60808301525092915050565b80516114a1816112e1565b60005b838110156116cc5781810151838201526020016116b4565b50506000910152565b600082601f8301126116e657600080fd5b81516116f461150b826114a6565b81815284602083860101111561170957600080fd5b610e1d8260208301602087016116b1565b805180151581146114a157600080fd5b6000806040838503121561173d57600080fd5b8251915060208084015167ffffffffffffffff8082111561175d57600080fd5b818601915086601f83011261177157600080fd5b815161177f61150b82611542565b81815260059190911b8301840190848101908983111561179e57600080fd5b8585015b83811015611884578051858111156117b957600080fd5b860160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156117ed57600080fd5b6117f5611417565b6118008983016116a6565b815261180e604083016116a6565b8982015261181e606083016116a6565b604082015261182f608083016116a6565b606082015260a0820151608082015260c080830151888111156118525760008081fd5b6118608f8c838701016116d5565b60a08401525061187260e0840161171a565b908201528452509186019186016117a2565b508096505050505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156118d657600080fd5b6112da8261171a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610323576103236118df565b600081518084526119398160208601602086016116b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611a56577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611a2a82870182611921565b91505060c0808301519250611a428187018415159052565b509587019593505090850190600101611999565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611a81945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611ab857600080fd5b5051919050565b80820180821115610323576103236118df565b60008251611ae48184602087016116b1565b9190910192915050565b6020815260006112da602083018461192156fea26469706673582212204e9d3c46d74e288f9595f58f9c512e6b7d5a93e31144783803efb0a25882ff7e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_router";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExternalCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "InvalidRouter";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "CCIPRouterSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "ExecutorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "RecoverGasSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "messageId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "sourceChainSelector";
                readonly type: "uint64";
            }, {
                readonly internalType: "bytes";
                readonly name: "sender";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Client.EVMTokenAmount[]";
                readonly name: "destTokenAmounts";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct Client.Any2EVMMessage";
            readonly name: "message";
            readonly type: "tuple";
        }];
        readonly name: "ccipReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executor";
        readonly outputs: readonly [{
            readonly internalType: "contract IExecutor";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "pullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recoverGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): CCIPMsgReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CCIPMsgReceiver;
}
export {};
