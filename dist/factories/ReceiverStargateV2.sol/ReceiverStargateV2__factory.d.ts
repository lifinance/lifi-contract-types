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
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162001e5538038062001e55833981016040819052620000359162000089565b600080546001600160a01b0319166001600160a01b0396871617905592841660805290831660a05290911660c05260e052620000f0565b80516001600160a01b03811681146200008457600080fd5b919050565b600080600080600060a08688031215620000a257600080fd5b620000ad866200006c565b9450620000bd602087016200006c565b9350620000cd604087016200006c565b9250620000dd606087016200006c565b9150608086015190509295509295909350565b60805160a05160c05160e051611cde62000177600039600081816101b501528181610a3f01528181610b1701528181610c490152610d7901526000818161012a01526105ff01526000818161028b015261069b0152600081816101f701528181610aec01528181610c2101528181610d1301528181610d4f0152610e8f0152611cde6000f3fe6080604052600436106100c05760003560e01c8063bcf225e611610074578063e30c39781161004e578063e30c39781461022c578063f2fde38b14610259578063fb214c2f1461027957600080fd5b8063bcf225e6146101a3578063c34c08e5146101e5578063d0a102601461021957600080fd5b80637200b829116100a55780637200b82914610103578063797b7f6b146101185780638da5cb5b1461017657600080fd5b806301e33667146100cc57806323452b9c146100ee57600080fd5b366100c757005b600080fd5b3480156100d857600080fd5b506100ec6100e7366004611582565b6102ad565b005b3480156100fa57600080fd5b506100ec610437565b34801561010f57600080fd5b506100ec610501565b34801561012457600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018257600080fd5b5060005461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101af57600080fd5b506101d77f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161016d565b3480156101f157600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b6100ec61022736600461160c565b6105e7565b34801561023857600080fd5b5060015461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026557600080fd5b506100ec6102743660046116ad565b610803565b34801561028557600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103b95760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610373576040519150601f19603f3d011682016040523d82523d6000602084013e610378565b606091505b50509050806103b3576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103da565b6103da73ffffffffffffffffffffffffffffffffffffffff84168383610961565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610488576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104d7576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610553576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610656576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd8e8dbc700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063d8e8dbc7906024016020604051808303816000875af11580156106e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070891906116ca565b61ffff16600003610745576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610792573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b691906116fe565b905060008060006107c789896109b0565b8060200190518101906107da9190611878565b9250925092506107f6838386846107f18e8e6109fd565b610a1d565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610854576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108a1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108f0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166109a6576390b8ec186000526004601cfd5b6000603452505050565b60606109bf82604c8186611a05565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b92915050565b6000610a0d602c600c8486611a05565b610a1691611a2f565b9392505050565b60005a905073ffffffffffffffffffffffffffffffffffffffff8416610c04577f0000000000000000000000000000000000000000000000000000000000000000811015610ad557610a6f8383610ec0565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250610eb9565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b83610b3c7f000000000000000000000000000000000000000000000000000000000000000085611a9a565b90898989896040518763ffffffff1660e01b8152600401610b609493929190611af7565b6000604051808303818589803b158015610b7957600080fd5b5088f19450505050508015610b8c575060015b610bff57610b9a8383610ec0565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610eb7565b610eb7565b83610c4773ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610ee0565b7f0000000000000000000000000000000000000000000000000000000000000000821015610cf757610c9073ffffffffffffffffffffffffffffffffffffffff821685856110ea565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610eb9565b610d3873ffffffffffffffffffffffffffffffffffffffff82167f000000000000000000000000000000000000000000000000000000000000000085611140565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610d9e7f000000000000000000000000000000000000000000000000000000000000000085611a9a565b898989896040518663ffffffff1660e01b8152600401610dc19493929190611af7565b600060405180830381600088803b158015610ddb57600080fd5b5087f193505050508015610ded575060015b610e7357610e1273ffffffffffffffffffffffffffffffffffffffff821685856110ea565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610eb573ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000006000610ee0565b505b505b5050505050565b60003860003884865af1610edc5763b12d13eb6000526004601cfd5b5050565b801580610f8057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610f5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7e9190611c32565b155b611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110e59084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261123f565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110e59084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611063565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156111b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111da9190611c32565b9050611239847f095ea7b3000000000000000000000000000000000000000000000000000000008561120c8686611c4b565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401611063565b50505050565b60006112a1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661134e9092919063ffffffff16565b90508051600014806112c25750808060200190518101906112c29190611c5e565b6110e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611008565b606061135d8484600085611365565b949350505050565b6060824710156113f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611008565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114209190611c79565b60006040518083038185875af1925050503d806000811461145d576040519150601f19603f3d011682016040523d82523d6000602084013e611462565b606091505b50915091506114738783838761147e565b979650505050505050565b6060831561151457825160000361150d5773ffffffffffffffffffffffffffffffffffffffff85163b61150d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611008565b508161135d565b61135d83838151156115295781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110089190611c95565b73ffffffffffffffffffffffffffffffffffffffff8116811461157f57600080fd5b50565b60008060006060848603121561159757600080fd5b83356115a28161155d565b925060208401356115b28161155d565b929592945050506040919091013590565b60008083601f8401126115d557600080fd5b50813567ffffffffffffffff8111156115ed57600080fd5b60208301915083602082850101111561160557600080fd5b9250929050565b600080600080600080600060a0888a03121561162757600080fd5b87356116328161155d565b965060208801359550604088013567ffffffffffffffff8082111561165657600080fd5b6116628b838c016115c3565b909750955060608a013591506116778261155d565b9093506080890135908082111561168d57600080fd5b5061169a8a828b016115c3565b989b979a50959850939692959293505050565b6000602082840312156116bf57600080fd5b8135610a168161155d565b6000602082840312156116dc57600080fd5b815161ffff81168114610a1657600080fd5b80516116f98161155d565b919050565b60006020828403121561171057600080fd5b8151610a168161155d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561176d5761176d61171b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117ba576117ba61171b565b604052919050565b60005b838110156117dd5781810151838201526020016117c5565b50506000910152565b600082601f8301126117f757600080fd5b815167ffffffffffffffff8111156118115761181161171b565b61184260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611773565b81815284602083860101111561185757600080fd5b61135d8260208301602087016117c2565b805180151581146116f957600080fd5b60008060006060848603121561188d57600080fd5b8351925060208085015167ffffffffffffffff808211156118ad57600080fd5b818701915087601f8301126118c157600080fd5b8151818111156118d3576118d361171b565b8060051b6118e2858201611773565b918252838101850191858101908b8411156118fc57600080fd5b86860192505b838310156119e65782518581111561191957600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561194d57600080fd5b61195561174a565b6119608983016116ee565b815261196e604083016116ee565b8982015261197e606083016116ee565b604082015261198f608083016116ee565b606082015260a0820151608082015260c0820151878111156119b15760008081fd5b6119bf8f8b838601016117e6565b60a0830152506119d160e08301611868565b60c08201528352509186019190860190611902565b809850505050505050506119fc604085016116ee565b90509250925092565b60008085851115611a1557600080fd5b83861115611a2257600080fd5b5050820193919092039150565b803560208310156109f7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109f7576109f7611a6b565b60008151808452611ac58160208601602086016117c2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611be2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611bb682870182611aad565b91505060c0808301519250611bce8187018415159052565b509587019593505090850190600101611b25565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611c0d945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611c4457600080fd5b5051919050565b808201808211156109f7576109f7611a6b565b600060208284031215611c7057600080fd5b610a1682611868565b60008251611c8b8184602087016117c2565b9190910192915050565b602081526000610a166020830184611aad56fea2646970667358221220683d7d6bbb03a2c6474a121bf98996e2c9ceaec4864f11a117f13a355bae5b9f64736f6c63430008110033";
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
    static createInterface(): ReceiverStargateV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverStargateV2;
}
export {};
