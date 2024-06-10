import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ReceiverStargateV2, ReceiverStargateV2Interface } from "../../ReceiverStargateV2.sol/ReceiverStargateV2";
declare type ReceiverStargateV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverStargateV2__factory extends ContractFactory {
    constructor(...args: ReceiverStargateV2ConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _endpointV2: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverStargateV2>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _endpointV2: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverStargateV2;
    connect(signer: Signer): ReceiverStargateV2__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162001c7538038062001c75833981016040819052620000349162000082565b600080546001600160a01b0319166001600160a01b0395861617905591831660805290911660a05260c052620000d4565b80516001600160a01b03811681146200007d57600080fd5b919050565b600080600080608085870312156200009957600080fd5b620000a48562000065565b9350620000b46020860162000065565b9250620000c46040860162000065565b6060959095015193969295505050565b60805160a05160c051611b4062000135600039600081816101aa015261092e01526000818161011f01526105680152600081816101ec01528181610a9a01528181610c4201528181610cb601528181610cf20152610e120152611b406000f3fe6080604052600436106100b55760003560e01c8063bcf225e611610069578063d0a102601161004e578063d0a102601461020e578063e30c397814610221578063f2fde38b1461024e57600080fd5b8063bcf225e614610198578063c34c08e5146101da57600080fd5b80637200b8291161009a5780637200b829146100f8578063797b7f6b1461010d5780638da5cb5b1461016b57600080fd5b806323452b9c146100c15780632e144579146100d857600080fd5b366100bc57005b600080fd5b3480156100cd57600080fd5b506100d661026e565b005b3480156100e457600080fd5b506100d66100f3366004611408565b610338565b34801561010457600080fd5b506100d661046a565b34801561011957600080fd5b506101417f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561017757600080fd5b506000546101419073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101a457600080fd5b506101cc7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610162565b3480156101e657600080fd5b506101417f000000000000000000000000000000000000000000000000000000000000000081565b6100d661021c366004611492565b610550565b34801561022d57600080fd5b506001546101419073ffffffffffffffffffffffffffffffffffffffff1681565b34801561025a57600080fd5b506100d6610269366004611533565b61067f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102bf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661030e576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610389576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104445760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103fe576040519150601f19603f3d011682016040523d82523d6000602084013e610403565b606091505b505090508061043e576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61046573ffffffffffffffffffffffffffffffffffffffff841683836107dd565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104bc576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105bf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561060c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106309190611560565b9050600080600061064189896108b1565b80602001905181019061065491906116da565b9250925092506106728383868461066b8e8e6108fe565b600161091e565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106d0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661071d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361076c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104659084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e45565b60606108c082604c8186611867565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b92915050565b600061090e602c600c8486611867565b61091791611891565b9392505050565b60008161092c57600061094e565b7f00000000000000000000000000000000000000000000000000000000000000005b905073ffffffffffffffffffffffffffffffffffffffff8516610c205760005a905082801561097c57508181105b15610a835760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d80600081146109db576040519150601f19603f3d011682016040523d82523d6000602084013e6109e0565b606091505b5050905080610a1b576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505050610e3d565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b85610aca85856118fc565b908b8b8b8b6040518763ffffffff1660e01b8152600401610aee9493929190611959565b6000604051808303818589803b158015610b0757600080fd5b5088f19450505050508015610b1a575060015b610c1a5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610b78576040519150601f19603f3d011682016040523d82523d6000602084013e610b7d565b606091505b5050905080610bb8576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b50610e3b565b60005a905085610c6873ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610f59565b838015610c7457508282105b15610c9a57610a1b73ffffffffffffffffffffffffffffffffffffffff821687876107dd565b610cdb73ffffffffffffffffffffffffffffffffffffffff82167f0000000000000000000000000000000000000000000000000000000000000000876110db565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610d2185856118fc565b8b8b8b8b6040518663ffffffff1660e01b8152600401610d449493929190611959565b600060405180830381600088803b158015610d5e57600080fd5b5087f193505050508015610d70575060015b610df657610d9573ffffffffffffffffffffffffffffffffffffffff821687876107dd565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610e3873ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610f59565b50505b505b505050505050565b6000610ea7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111d49092919063ffffffff16565b9050805160001480610ec8575080806020019051810190610ec89190611a94565b610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b801580610ff957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610fd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff79190611aaf565b155b611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610f50565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104659084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161082f565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611151573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111759190611aaf565b905061043e847f095ea7b300000000000000000000000000000000000000000000000000000000856111a78686611ac8565b60405173ffffffffffffffffffffffffffffffffffffffff9092166024830152604482015260640161082f565b60606111e384846000856111eb565b949350505050565b60608247101561127d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f50565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112a69190611adb565b60006040518083038185875af1925050503d80600081146112e3576040519150601f19603f3d011682016040523d82523d6000602084013e6112e8565b606091505b50915091506112f987838387611304565b979650505050505050565b6060831561139a5782516000036113935773ffffffffffffffffffffffffffffffffffffffff85163b611393576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f50565b50816111e3565b6111e383838151156113af5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f509190611af7565b73ffffffffffffffffffffffffffffffffffffffff8116811461140557600080fd5b50565b60008060006060848603121561141d57600080fd5b8335611428816113e3565b92506020840135611438816113e3565b929592945050506040919091013590565b60008083601f84011261145b57600080fd5b50813567ffffffffffffffff81111561147357600080fd5b60208301915083602082850101111561148b57600080fd5b9250929050565b600080600080600080600060a0888a0312156114ad57600080fd5b87356114b8816113e3565b965060208801359550604088013567ffffffffffffffff808211156114dc57600080fd5b6114e88b838c01611449565b909750955060608a013591506114fd826113e3565b9093506080890135908082111561151357600080fd5b506115208a828b01611449565b989b979a50959850939692959293505050565b60006020828403121561154557600080fd5b8135610917816113e3565b805161155b816113e3565b919050565b60006020828403121561157257600080fd5b8151610917816113e3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156115cf576115cf61157d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561161c5761161c61157d565b604052919050565b60005b8381101561163f578181015183820152602001611627565b50506000910152565b600082601f83011261165957600080fd5b815167ffffffffffffffff8111156116735761167361157d565b6116a460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016115d5565b8181528460208386010111156116b957600080fd5b6111e3826020830160208701611624565b8051801515811461155b57600080fd5b6000806000606084860312156116ef57600080fd5b8351925060208085015167ffffffffffffffff8082111561170f57600080fd5b818701915087601f83011261172357600080fd5b8151818111156117355761173561157d565b8060051b6117448582016115d5565b918252838101850191858101908b84111561175e57600080fd5b86860192505b838310156118485782518581111561177b57600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156117af57600080fd5b6117b76115ac565b6117c2898301611550565b81526117d060408301611550565b898201526117e060608301611550565b60408201526117f160808301611550565b606082015260a0820151608082015260c0820151878111156118135760008081fd5b6118218f8b83860101611648565b60a08301525061183360e083016116ca565b60c08201528352509186019190860190611764565b8098505050505050505061185e60408501611550565b90509250925092565b6000808585111561187757600080fd5b8386111561188457600080fd5b5050820193919092039150565b803560208310156108f8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108f8576108f86118cd565b60008151808452611927816020860160208601611624565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611a44577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611a188287018261190f565b91505060c0808301519250611a308187018415159052565b509587019593505090850190600101611987565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611a6f945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611aa657600080fd5b610917826116ca565b600060208284031215611ac157600080fd5b5051919050565b808201808211156108f8576108f86118cd565b60008251611aed818460208701611624565b9190910192915050565b602081526000610917602083018461190f56fea2646970667358221220072d07cca9a45ad0df723ecd2767a03105d481194ad430e195a8a64d42ff16fe64736f6c63430008110033";
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
        readonly name: "ReentrancyError";
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
