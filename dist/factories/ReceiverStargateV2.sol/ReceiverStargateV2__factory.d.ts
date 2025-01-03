import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ReceiverStargateV2, ReceiverStargateV2Interface } from "../../ReceiverStargateV2.sol/ReceiverStargateV2";
declare type ReceiverStargateV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverStargateV2__factory extends ContractFactory {
    constructor(...args: ReceiverStargateV2ConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _tokenMessaging: PromiseOrValue<string>, _endpointV2: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverStargateV2>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _tokenMessaging: PromiseOrValue<string>, _endpointV2: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverStargateV2;
    connect(signer: Signer): ReceiverStargateV2__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162001d1338038062001d13833981016040819052620000359162000089565b600080546001600160a01b0319166001600160a01b0396871617905592841660805290831660a05290911660c05260e052620000f0565b80516001600160a01b03811681146200008457600080fd5b919050565b600080600080600060a08688031215620000a257600080fd5b620000ad866200006c565b9450620000bd602087016200006c565b9350620000cd604087016200006c565b9250620000dd606087016200006c565b9150608086015190509295509295909350565b60805160a05160c05160e051611b9c62000177600039600081816101b5015281816109f601528181610ace01528181610c000152610d3001526000818161012a015261051101526000818161028b01526105ad0152600081816101f701528181610aa301528181610bd801528181610cca01528181610d060152610e460152611b9c6000f3fe6080604052600436106100c05760003560e01c8063bcf225e611610074578063e30c39781161004e578063e30c39781461022c578063f2fde38b14610259578063fb214c2f1461027957600080fd5b8063bcf225e6146101a3578063c34c08e5146101e5578063d0a102601461021957600080fd5b80637200b829116100a55780637200b82914610103578063797b7f6b146101185780638da5cb5b1461017657600080fd5b806323452b9c146100cc5780632e144579146100e357600080fd5b366100c757005b600080fd5b3480156100d857600080fd5b506100e16102ad565b005b3480156100ef57600080fd5b506100e16100fe366004611440565b610377565b34801561010f57600080fd5b506100e1610413565b34801561012457600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018257600080fd5b5060005461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101af57600080fd5b506101d77f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161016d565b3480156101f157600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b6100e16102273660046114ca565b6104f9565b34801561023857600080fd5b5060015461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026557600080fd5b506100e161027436600461156b565b610715565b34801561028557600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661034d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103f2576103ed8282610873565b505050565b6103ed73ffffffffffffffffffffffffffffffffffffffff84168383610893565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610465576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610568576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd8e8dbc700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063d8e8dbc7906024016020604051808303816000875af11580156105f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061a9190611588565b61ffff16600003610657576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c891906115bc565b905060008060006106d98989610967565b8060200190518101906106ec9190611736565b925092509250610708838386846107038e8e6109b4565b6109d4565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610766576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107b3576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610802576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60003860003884865af161088f5763b12d13eb6000526004601cfd5b5050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ed9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e77565b606061097682604c81866118c3565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b92915050565b60006109c4602c600c84866118c3565b6109cd916118ed565b9392505050565b60005a905073ffffffffffffffffffffffffffffffffffffffff8416610bbb577f0000000000000000000000000000000000000000000000000000000000000000811015610a8c57610a268383610873565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250610e70565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b83610af37f000000000000000000000000000000000000000000000000000000000000000085611958565b90898989896040518763ffffffff1660e01b8152600401610b1794939291906119b5565b6000604051808303818589803b158015610b3057600080fd5b5088f19450505050508015610b43575060015b610bb657610b518383610873565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610e6e565b610e6e565b83610bfe73ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610f8b565b7f0000000000000000000000000000000000000000000000000000000000000000821015610cae57610c4773ffffffffffffffffffffffffffffffffffffffff82168585610893565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610e70565b610cef73ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000008561110d565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610d557f000000000000000000000000000000000000000000000000000000000000000085611958565b898989896040518663ffffffff1660e01b8152600401610d7894939291906119b5565b600060405180830381600088803b158015610d9257600080fd5b5087f193505050508015610da4575060015b610e2a57610dc973ffffffffffffffffffffffffffffffffffffffff82168585610893565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610e6c73ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610f8b565b505b505b5050505050565b6000610ed9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661120c9092919063ffffffff16565b9050805160001480610efa575080806020019051810190610efa9190611af0565b6103ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b80158061102b57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611005573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110299190611b0b565b155b6110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610f82565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ed9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016108e5565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a79190611b0b565b9050611206847f095ea7b300000000000000000000000000000000000000000000000000000000856111d98686611b24565b60405173ffffffffffffffffffffffffffffffffffffffff909216602483015260448201526064016108e5565b50505050565b606061121b8484600085611223565b949350505050565b6060824710156112b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f82565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112de9190611b37565b60006040518083038185875af1925050503d806000811461131b576040519150601f19603f3d011682016040523d82523d6000602084013e611320565b606091505b50915091506113318783838761133c565b979650505050505050565b606083156113d25782516000036113cb5773ffffffffffffffffffffffffffffffffffffffff85163b6113cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f82565b508161121b565b61121b83838151156113e75781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f829190611b53565b73ffffffffffffffffffffffffffffffffffffffff8116811461143d57600080fd5b50565b60008060006060848603121561145557600080fd5b83356114608161141b565b925060208401356114708161141b565b929592945050506040919091013590565b60008083601f84011261149357600080fd5b50813567ffffffffffffffff8111156114ab57600080fd5b6020830191508360208285010111156114c357600080fd5b9250929050565b600080600080600080600060a0888a0312156114e557600080fd5b87356114f08161141b565b965060208801359550604088013567ffffffffffffffff8082111561151457600080fd5b6115208b838c01611481565b909750955060608a013591506115358261141b565b9093506080890135908082111561154b57600080fd5b506115588a828b01611481565b989b979a50959850939692959293505050565b60006020828403121561157d57600080fd5b81356109cd8161141b565b60006020828403121561159a57600080fd5b815161ffff811681146109cd57600080fd5b80516115b78161141b565b919050565b6000602082840312156115ce57600080fd5b81516109cd8161141b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561162b5761162b6115d9565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611678576116786115d9565b604052919050565b60005b8381101561169b578181015183820152602001611683565b50506000910152565b600082601f8301126116b557600080fd5b815167ffffffffffffffff8111156116cf576116cf6115d9565b61170060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611631565b81815284602083860101111561171557600080fd5b61121b826020830160208701611680565b805180151581146115b757600080fd5b60008060006060848603121561174b57600080fd5b8351925060208085015167ffffffffffffffff8082111561176b57600080fd5b818701915087601f83011261177f57600080fd5b815181811115611791576117916115d9565b8060051b6117a0858201611631565b918252838101850191858101908b8411156117ba57600080fd5b86860192505b838310156118a4578251858111156117d757600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561180b57600080fd5b611813611608565b61181e8983016115ac565b815261182c604083016115ac565b8982015261183c606083016115ac565b604082015261184d608083016115ac565b606082015260a0820151608082015260c08201518781111561186f5760008081fd5b61187d8f8b838601016116a4565b60a08301525061188f60e08301611726565b60c082015283525091860191908601906117c0565b809850505050505050506118ba604085016115ac565b90509250925092565b600080858511156118d357600080fd5b838611156118e057600080fd5b5050820193919092039150565b803560208310156109ae577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109ae576109ae611929565b60008151808452611983816020860160208601611680565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611aa0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611a748287018261196b565b91505060c0808301519250611a8c8187018415159052565b5095870195935050908501906001016119e3565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611acb945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611b0257600080fd5b6109cd82611726565b600060208284031215611b1d57600080fd5b5051919050565b808201808211156109ae576109ae611929565b60008251611b49818460208701611680565b9190910192915050565b6020815260006109cd602083018461196b56fea2646970667358221220ff2b3cd7495a7e3fd5b84ba037263281717ad069b05e1890e4344cafd1d0beb164736f6c63430008110033";
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
            readonly name: "_tokenMessaging";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_endpointV2";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "endpointV2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "lzCompose";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "pullToken";
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
        readonly type: "function";
        readonly name: "recoverGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tokenMessaging";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessaging";
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
    static createInterface(): ReceiverStargateV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverStargateV2;
}
export {};
