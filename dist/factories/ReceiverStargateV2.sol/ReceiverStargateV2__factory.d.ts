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
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162001f1738038062001f17833981016040819052620000359162000089565b600080546001600160a01b0319166001600160a01b0396871617905592841660805290831660a05290911660c05260e052620000f0565b80516001600160a01b03811681146200008457600080fd5b919050565b600080600080600060a08688031215620000a257600080fd5b620000ad866200006c565b9450620000bd602087016200006c565b9350620000cd604087016200006c565b9250620000dd606087016200006c565b9150608086015190509295509295909350565b60805160a05160c05160e051611da062000177600039600081816101e001528181610bfa01528181610cd201528181610e040152610f3401526000818161015501526106c60152600081816102b6015261076201526000818161022201528181610ca701528181610ddc01528181610ece01528181610f0a015261104a0152611da06000f3fe6080604052600436106100cb5760003560e01c8063bcf225e611610074578063e30c39781161004e578063e30c397814610257578063f2fde38b14610284578063fb214c2f146102a457600080fd5b8063bcf225e6146101ce578063c34c08e514610210578063d0a102601461024457600080fd5b80637200b829116100a55780637200b8291461012e578063797b7f6b146101435780638da5cb5b146101a157600080fd5b806301e33667146100d757806323452b9c146100f95780632e1445791461010e57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f2366004611644565b6102d8565b005b34801561010557600080fd5b506100f7610462565b34801561011a57600080fd5b506100f7610129366004611644565b61052c565b34801561013a57600080fd5b506100f76105c8565b34801561014f57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101ad57600080fd5b506000546101779073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101da57600080fd5b506102027f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610198565b34801561021c57600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b6100f76102523660046116ce565b6106ae565b34801561026357600080fd5b506001546101779073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029057600080fd5b506100f761029f36600461176f565b6108ca565b3480156102b057600080fd5b506101777f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff163314610329576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103e45760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461039e576040519150601f19603f3d011682016040523d82523d6000602084013e6103a3565b606091505b50509050806103de576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610405565b61040573ffffffffffffffffffffffffffffffffffffffff84168383610a28565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104b3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610502576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff16331461057d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105a7576105a28282610a77565b505050565b6105a273ffffffffffffffffffffffffffffffffffffffff84168383610a97565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461061a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461071d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd8e8dbc700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063d8e8dbc7906024016020604051808303816000875af11580156107ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cf919061178c565b61ffff1660000361080c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610859573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087d91906117c0565b9050600080600061088e8989610b6b565b8060200190518101906108a1919061193a565b9250925092506108bd838386846108b88e8e610bb8565b610bd8565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461091b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610968576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109b7576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610a6d576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610a935763b12d13eb6000526004601cfd5b5050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105a29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261107b565b6060610b7a82604c8186611ac7565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b92915050565b6000610bc8602c600c8486611ac7565b610bd191611af1565b9392505050565b60005a905073ffffffffffffffffffffffffffffffffffffffff8416610dbf577f0000000000000000000000000000000000000000000000000000000000000000811015610c9057610c2a8383610a77565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250611074565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b83610cf77f000000000000000000000000000000000000000000000000000000000000000085611b5c565b90898989896040518763ffffffff1660e01b8152600401610d1b9493929190611bb9565b6000604051808303818589803b158015610d3457600080fd5b5088f19450505050508015610d47575060015b610dba57610d558383610a77565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2611072565b611072565b83610e0273ffffffffffffffffffffffffffffffffffffffff82167f0000000000000000000000000000000000000000000000000000000000000000600061118f565b7f0000000000000000000000000000000000000000000000000000000000000000821015610eb257610e4b73ffffffffffffffffffffffffffffffffffffffff82168585610a97565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050611074565b610ef373ffffffffffffffffffffffffffffffffffffffff82167f000000000000000000000000000000000000000000000000000000000000000085611311565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610f597f000000000000000000000000000000000000000000000000000000000000000085611b5c565b898989896040518663ffffffff1660e01b8152600401610f7c9493929190611bb9565b600060405180830381600088803b158015610f9657600080fd5b5087f193505050508015610fa8575060015b61102e57610fcd73ffffffffffffffffffffffffffffffffffffffff82168585610a97565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b61107073ffffffffffffffffffffffffffffffffffffffff82167f0000000000000000000000000000000000000000000000000000000000000000600061118f565b505b505b5050505050565b60006110dd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114109092919063ffffffff16565b90508051600014806110fe5750808060200190518101906110fe9190611cf4565b6105a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b80158061122f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611209573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122d9190611d0f565b155b6112bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401611186565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105a29084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610ae9565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611387573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ab9190611d0f565b905061140a847f095ea7b300000000000000000000000000000000000000000000000000000000856113dd8686611d28565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610ae9565b50505050565b606061141f8484600085611427565b949350505050565b6060824710156114b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611186565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114e29190611d3b565b60006040518083038185875af1925050503d806000811461151f576040519150601f19603f3d011682016040523d82523d6000602084013e611524565b606091505b509150915061153587838387611540565b979650505050505050565b606083156115d65782516000036115cf5773ffffffffffffffffffffffffffffffffffffffff85163b6115cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611186565b508161141f565b61141f83838151156115eb5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111869190611d57565b73ffffffffffffffffffffffffffffffffffffffff8116811461164157600080fd5b50565b60008060006060848603121561165957600080fd5b83356116648161161f565b925060208401356116748161161f565b929592945050506040919091013590565b60008083601f84011261169757600080fd5b50813567ffffffffffffffff8111156116af57600080fd5b6020830191508360208285010111156116c757600080fd5b9250929050565b600080600080600080600060a0888a0312156116e957600080fd5b87356116f48161161f565b965060208801359550604088013567ffffffffffffffff8082111561171857600080fd5b6117248b838c01611685565b909750955060608a013591506117398261161f565b9093506080890135908082111561174f57600080fd5b5061175c8a828b01611685565b989b979a50959850939692959293505050565b60006020828403121561178157600080fd5b8135610bd18161161f565b60006020828403121561179e57600080fd5b815161ffff81168114610bd157600080fd5b80516117bb8161161f565b919050565b6000602082840312156117d257600080fd5b8151610bd18161161f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561182f5761182f6117dd565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561187c5761187c6117dd565b604052919050565b60005b8381101561189f578181015183820152602001611887565b50506000910152565b600082601f8301126118b957600080fd5b815167ffffffffffffffff8111156118d3576118d36117dd565b61190460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611835565b81815284602083860101111561191957600080fd5b61141f826020830160208701611884565b805180151581146117bb57600080fd5b60008060006060848603121561194f57600080fd5b8351925060208085015167ffffffffffffffff8082111561196f57600080fd5b818701915087601f83011261198357600080fd5b815181811115611995576119956117dd565b8060051b6119a4858201611835565b918252838101850191858101908b8411156119be57600080fd5b86860192505b83831015611aa8578251858111156119db57600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611a0f57600080fd5b611a1761180c565b611a228983016117b0565b8152611a30604083016117b0565b89820152611a40606083016117b0565b6040820152611a51608083016117b0565b606082015260a0820151608082015260c082015187811115611a735760008081fd5b611a818f8b838601016118a8565b60a083015250611a9360e0830161192a565b60c082015283525091860191908601906119c4565b80985050505050505050611abe604085016117b0565b90509250925092565b60008085851115611ad757600080fd5b83861115611ae457600080fd5b5050820193919092039150565b80356020831015610bb2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bb257610bb2611b2d565b60008151808452611b87816020860160208601611884565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611ca4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611c7882870182611b6f565b91505060c0808301519250611c908187018415159052565b509587019593505090850190600101611be7565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611ccf945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611d0657600080fd5b610bd18261192a565b600060208284031215611d2157600080fd5b5051919050565b80820180821115610bb257610bb2611b2d565b60008251611d4d818460208701611884565b9190910192915050565b602081526000610bd16020830184611b6f56fea26469706673582212209b11be8eb53ece8136cbf571373ac58c054578cb9bfe2fc172853ced1c0ca8e064736f6c63430008110033";
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
