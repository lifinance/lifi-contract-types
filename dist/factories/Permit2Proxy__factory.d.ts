import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _permit2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001c3a38038062001c3a8339810160408190526200003491620000dc565b600080546001600160a01b0319166001600160a01b038481169190911790915581166080526040805160a08101909152606480825262001bd660208301396040518060c001604052806091815260200162001b45609191396040516020016200009f9291906200014d565b60408051601f19818403018152919052805160209091012060a052506200016e9050565b6001600160a01b0381168114620000d957600080fd5b50565b60008060408385031215620000f057600080fd5b8251620000fd81620000c3565b60208401519092506200011081620000c3565b809150509250929050565b6000815160005b818110156200013e576020818501810151868301520162000122565b50600093019283525090919050565b6000620001666200015f83866200011b565b846200011b565b949350505050565b60805160a05161199c620001a96000396000818161029b015261094e0152600081816101cd015281816106e401526108bb015261199c6000f3fe6080604052600436106100d25760003560e01c80637200b8291161007f57806397fc4c2b1161005957806397fc4c2b14610269578063aeef37de14610289578063e30c3978146102bd578063f2fde38b146102ea57600080fd5b80637200b8291461021457806383bd8174146102295780638da5cb5b1461023c57600080fd5b806333320de3116100b057806333320de31461015b57806356ee2b501461017b5780636afdd850146101bb57600080fd5b8063156e2152146100d757806323452b9c146101025780632c03ae6a14610119575b600080fd5b3480156100e357600080fd5b506100ec61030a565b6040516100f991906113d2565b60405180910390f35b34801561010e57600080fd5b50610117610326565b005b34801561012557600080fd5b5061014d7f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b6040519081526020016100f9565b34801561016757600080fd5b50610117610176366004611438565b6103f0565b34801561018757600080fd5b506101ab6101963660046114cd565b60026020526000908152604090205460ff1681565b60405190151581526020016100f9565b3480156101c757600080fd5b506101ef7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f9565b34801561022057600080fd5b5061011761053d565b61011761023736600461152a565b610623565b34801561024857600080fd5b506000546101ef9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027557600080fd5b5061014d6102843660046115fa565b61082a565b34801561029557600080fd5b5061014d7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102c957600080fd5b506001546101ef9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102f657600080fd5b506101176103053660046114cd565b610a13565b6040518060c00160405280609181526020016118d66091913981565b60005473ffffffffffffffffffffffffffffffffffffffff163314610377576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103c6576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610441576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156104f95782828281811061045e5761045e61167a565b905060200201602081019061047391906116ba565b600260008787858181106104895761048961167a565b905060200201602081019061049e91906114cd565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055600101610444565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb67225438484848460405161052f94939291906116d7565b60405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461058f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b600060405180604001604052808973ffffffffffffffffffffffffffffffffffffffff168152602001888860405161065c929190611772565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd826040516020016106ca929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c00160405280609181526020016118d6609191398a8a6040518863ffffffff1660e01b815260040161079097969594939291906117cb565b600060405180830381600087803b1580156107aa57600080fd5b505af11580156107be573d6000803e3d6000fd5b506107df92506107d491505060208701876114cd565b8a6020880135610b71565b61081f8989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cb992505050565b505050505050505050565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161086182610dd0565b9050600060405180604001604052808c73ffffffffffffffffffffffffffffffffffffffff1681526020018b8b60405161089c929190611772565b6040518091039020815250905060006108b482610e50565b9050610a037f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa158015610924573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109489190611883565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9c9b505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a64576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ab1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610b00576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff8316610b9157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bde576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c779190611883565b1015610cb457610c8983836000610eb1565b610cb483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610eb1565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205460ff16610d18576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff163484604051610d41919061189c565b60006040518083038185875af1925050503d8060008114610d7e576040519150601f19603f3d011682016040523d82523d6000602084013e610d83565b606091505b509150915081610dca57806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610dc191906113d2565b60405180910390fd5b50505050565b8051602080830151604051600093610e33937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd82604051602001610e33929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b801580610f5157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610f2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4f9190611883565b155b610fdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610dc1565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610cb4928692916000916110a8918516908490611155565b90508051600014806110c95750808060200190518101906110c991906118b8565b610cb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610dc1565b6060611164848460008561116c565b949350505050565b6060824710156111fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610dc1565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611227919061189c565b60006040518083038185875af1925050503d8060008114611264576040519150601f19603f3d011682016040523d82523d6000602084013e611269565b606091505b509150915061127a87838387611285565b979650505050505050565b6060831561131b5782516000036113145773ffffffffffffffffffffffffffffffffffffffff85163b611314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610dc1565b5081611164565b61116483838151156113305781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc191906113d2565b60005b8381101561137f578181015183820152602001611367565b50506000910152565b600081518084526113a0816020860160208601611364565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006113e56020830184611388565b9392505050565b60008083601f8401126113fe57600080fd5b50813567ffffffffffffffff81111561141657600080fd5b6020830191508360208260051b850101111561143157600080fd5b9250929050565b6000806000806040858703121561144e57600080fd5b843567ffffffffffffffff8082111561146657600080fd5b611472888389016113ec565b9096509450602087013591508082111561148b57600080fd5b50611498878288016113ec565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146114c857600080fd5b919050565b6000602082840312156114df57600080fd5b6113e5826114a4565b60008083601f8401126114fa57600080fd5b50813567ffffffffffffffff81111561151257600080fd5b60208301915083602082850101111561143157600080fd5b600080600080600080600087890361010081121561154757600080fd5b611550896114a4565b9750602089013567ffffffffffffffff8082111561156d57600080fd5b6115798c838d016114e8565b909950975087915061158d60408c016114a4565b965060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0840112156115bf57600080fd5b60608b01955060e08b01359250808311156115d957600080fd5b50506115e78a828b016114e8565b989b979a50959850939692959293505050565b600080600080600080600060c0888a03121561161557600080fd5b61161e886114a4565b9650602088013567ffffffffffffffff81111561163a57600080fd5b6116468a828b016114e8565b90975095506116599050604089016114a4565b969995985093966060810135956080820135955060a0909101359350915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80151581146116b757600080fd5b50565b6000602082840312156116cc57600080fd5b81356113e5816116a9565b6040808252810184905260008560608301825b878110156117255773ffffffffffffffffffffffffffffffffffffffff611710846114a4565b168252602092830192909101906001016116ea565b5083810360208581019190915285825291508590820160005b86811015611765578235611751816116a9565b15158252918301919083019060010161173e565b5098975050505050505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061014073ffffffffffffffffffffffffffffffffffffffff806117ef8c6114a4565b16845260208b0135602085015260408b0135604085015260608b01356060850152808a5116608085015250602089015160a084015261184660c084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660e08401528061010084015261185f81840187611388565b9050828103610120840152611875818587611782565b9a9950505050505050505050565b60006020828403121561189557600080fd5b5051919050565b600082516118ae818460208701611364565b9190910192915050565b6000602082840312156118ca57600080fd5b81516113e5816116a956fe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a26469706673582212208d533b4c3ec516ee1167f7aa2b7f387fb75a036a52c1c7a30c5b78e977c9d81a64736f6c634300081100334c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit2";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PERMIT2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISignatureTransfer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PERMIT_WITH_WITNESS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WITNESS_TYPE_STRING";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
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
        readonly name: "diamondCallSingle";
        readonly inputs: readonly [{
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_signer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_permit";
            readonly type: "tuple";
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "diamondWhitelist";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPermit2MsgHash";
        readonly inputs: readonly [{
            readonly name: "_diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "msgHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
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
        readonly name: "updateWhitelist";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "WhitelistUpdated";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly indexed: false;
            readonly internalType: "bool[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallToDiamondFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "DiamondAddressNotWhitelisted";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Permit2ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2Proxy;
}
export {};
