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
    static readonly bytecode = "0x61010060405234801562000011575f80fd5b5060405162001dd138038062001dd1833981016040819052620000349162000086565b5f80546001600160a01b0319166001600160a01b0396871617905592841660805290831660a05290911660c05260e052620000e9565b80516001600160a01b038116811462000081575f80fd5b919050565b5f805f805f60a086880312156200009b575f80fd5b620000a6866200006a565b9450620000b6602087016200006a565b9350620000c6604087016200006a565b9250620000d6606087016200006a565b9150608086015190509295509295909350565b60805160a05160c05160e051611c676200016a5f395f81816101a801528181610a1201528181610aea01528181610c190152610d4901525f818161012001526105e601525f818161027a015261068201525f81816101e901528181610abf01528181610bf201528181610ce301528181610d1f0152610e5c0152611c675ff3fe6080604052600436106100bb575f3560e01c8063bcf225e611610071578063e30c39781161004c578063e30c39781461021e578063f2fde38b1461024a578063fb214c2f14610269575f80fd5b8063bcf225e614610197578063c34c08e5146101d8578063d0a102601461020b575f80fd5b80637200b829116100a15780637200b829146100fb578063797b7f6b1461010f5780638da5cb5b1461016c575f80fd5b806301e33667146100c657806323452b9c146100e7575f80fd5b366100c257005b5f80fd5b3480156100d1575f80fd5b506100e56100e036600461153d565b61029c565b005b3480156100f2575f80fd5b506100e5610421565b348015610106575f80fd5b506100e56104ea565b34801561011a575f80fd5b506101427f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b348015610177575f80fd5b505f546101429073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101a2575f80fd5b506101ca7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610163565b3480156101e3575f80fd5b506101427f000000000000000000000000000000000000000000000000000000000000000081565b6100e56102193660046115c0565b6105ce565b348015610229575f80fd5b506001546101429073ffffffffffffffffffffffffffffffffffffffff1681565b348015610255575f80fd5b506100e561026436600461165a565b6107e1565b348015610274575f80fd5b506101427f000000000000000000000000000000000000000000000000000000000000000081565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103a3575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461035d576040519150601f19603f3d011682016040523d82523d5f602084013e610362565b606091505b505090508061039d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103c4565b6103c473ffffffffffffffffffffffffffffffffffffffff8416838361093d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610471576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104c0576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461053c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461063d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd8e8dbc700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063d8e8dbc7906024016020604051808303815f875af11580156106c8573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106ec9190611675565b61ffff165f03610728576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610772573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061079691906116a6565b90505f805f6107a58989610986565b8060200190518101906107b89190611816565b9250925092506107d4838386846107cf8e8e6109d2565b6109f1565b5050505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610831576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661087e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036108cd576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661097d576390b8ec185f526004601cfd5b5f603452505050565b606061099582604c8186611999565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152509293505050505b92915050565b5f6109e1602c600c8486611999565b6109ea916119c0565b9392505050565b5f5a905073ffffffffffffffffffffffffffffffffffffffff8416610bd5577f0000000000000000000000000000000000000000000000000000000000000000811015610aa857610a428383610e8c565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250610e85565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b83610b0f7f000000000000000000000000000000000000000000000000000000000000000085611a29565b90898989896040518763ffffffff1660e01b8152600401610b339493929190611a85565b5f604051808303818589803b158015610b4a575f80fd5b5088f19450505050508015610b5d575060015b610bd057610b6b8383610e8c565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610e83565b610e83565b83610c1773ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000005f610ea9565b7f0000000000000000000000000000000000000000000000000000000000000000821015610cc757610c6073ffffffffffffffffffffffffffffffffffffffff821685856110b1565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610e85565b610d0873ffffffffffffffffffffffffffffffffffffffff82167f000000000000000000000000000000000000000000000000000000000000000085611107565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610d6e7f000000000000000000000000000000000000000000000000000000000000000085611a29565b898989896040518663ffffffff1660e01b8152600401610d919493929190611a85565b5f604051808303815f88803b158015610da8575f80fd5b5087f193505050508015610dba575060015b610e4057610ddf73ffffffffffffffffffffffffffffffffffffffff821685856110b1565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610e8173ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000005f610ea9565b505b505b5050505050565b5f385f3884865af1610ea55763b12d13eb5f526004601cfd5b5050565b801580610f4757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610f21573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f459190611bc1565b155b610fd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110ac9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611203565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110ac9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161102a565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301525f919085169063dd62ed3e90604401602060405180830381865afa15801561117a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061119e9190611bc1565b90506111fd847f095ea7b300000000000000000000000000000000000000000000000000000000856111d08686611bd8565b60405173ffffffffffffffffffffffffffffffffffffffff9092166024830152604482015260640161102a565b50505050565b5f611264826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113109092919063ffffffff16565b905080515f14806112845750808060200190518101906112849190611beb565b6110ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610fcf565b606061131e84845f85611326565b949350505050565b6060824710156113b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610fcf565b5f808673ffffffffffffffffffffffffffffffffffffffff1685876040516113e09190611c04565b5f6040518083038185875af1925050503d805f811461141a576040519150601f19603f3d011682016040523d82523d5f602084013e61141f565b606091505b50915091506114308783838761143b565b979650505050505050565b606083156114d05782515f036114c95773ffffffffffffffffffffffffffffffffffffffff85163b6114c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610fcf565b508161131e565b61131e83838151156114e55781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcf9190611c1f565b73ffffffffffffffffffffffffffffffffffffffff8116811461153a575f80fd5b50565b5f805f6060848603121561154f575f80fd5b833561155a81611519565b9250602084013561156a81611519565b929592945050506040919091013590565b5f8083601f84011261158b575f80fd5b50813567ffffffffffffffff8111156115a2575f80fd5b6020830191508360208285010111156115b9575f80fd5b9250929050565b5f805f805f805f60a0888a0312156115d6575f80fd5b87356115e181611519565b965060208801359550604088013567ffffffffffffffff80821115611604575f80fd5b6116108b838c0161157b565b909750955060608a0135915061162582611519565b9093506080890135908082111561163a575f80fd5b506116478a828b0161157b565b989b979a50959850939692959293505050565b5f6020828403121561166a575f80fd5b81356109ea81611519565b5f60208284031215611685575f80fd5b815161ffff811681146109ea575f80fd5b80516116a181611519565b919050565b5f602082840312156116b6575f80fd5b81516109ea81611519565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715611711576117116116c1565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561175e5761175e6116c1565b604052919050565b5f5b83811015611780578181015183820152602001611768565b50505f910152565b5f82601f830112611797575f80fd5b815167ffffffffffffffff8111156117b1576117b16116c1565b6117e260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611717565b8181528460208386010111156117f6575f80fd5b61131e826020830160208701611766565b805180151581146116a1575f80fd5b5f805f60608486031215611828575f80fd5b8351925060208085015167ffffffffffffffff80821115611847575f80fd5b818701915087601f83011261185a575f80fd5b81518181111561186c5761186c6116c1565b8060051b61187b858201611717565b918252838101850191858101908b841115611894575f80fd5b86860192505b8383101561197a578251858111156118b0575f80fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00112156118e3575f80fd5b6118eb6116ee565b6118f6898301611696565b815261190460408301611696565b8982015261191460608301611696565b604082015261192560808301611696565b606082015260a0820151608082015260c082015187811115611945575f80fd5b6119538f8b83860101611788565b60a08301525061196560e08301611807565b60c0820152835250918601919086019061189a565b8098505050505050505061199060408501611696565b90509250925092565b5f80858511156119a7575f80fd5b838611156119b3575f80fd5b5050820193919092039150565b803560208310156109cc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156109cc576109cc6119fc565b5f8151808452611a53816020860160208601611766565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f6080808301878452602060808186015281885180845260a0935060a08701915060a08160051b880101838b015f5b83811015611b71577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611b4582870182611a3c565b91505060c0808301519250611b5d8187018415159052565b509587019593505090850190600101611ab4565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611b9c945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b5f60208284031215611bd1575f80fd5b5051919050565b808201808211156109cc576109cc6119fc565b5f60208284031215611bfb575f80fd5b6109ea82611807565b5f8251611c15818460208701611766565b9190910192915050565b602081525f6109ea6020830184611a3c56fea2646970667358221220a77b1711b3ee07482678631a7b0d29660888c20184c442f79c2974956c4682ad64736f6c63430008160033";
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
