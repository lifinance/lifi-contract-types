import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacetPacked, AmarokFacetPackedInterface } from "../AmarokFacetPacked";
declare type AmarokFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacetPacked__factory extends ContractFactory {
    constructor(...args: AmarokFacetPackedConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacetPacked>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacetPacked;
    connect(signer: Signer): AmarokFacetPacked__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162001e8638038062001e868339810160408190526200003491620000a0565b600080546001600160a01b0319166001600160a01b038481169190911790915581166200007457604051636dac6a0960e01b815260040160405180910390fd5b6001600160a01b031660805250620000df565b6001600160a01b03811681146200009d57600080fd5b50565b60008060408385031215620000b457600080fd5b8251620000c18162000087565b6020840151909250620000d48162000087565b809150509250929050565b608051611d7d620001096000396000818161024a015281816104220152610d270152611d7d6000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063a2894e3a11610076578063dc5661ff1161005b578063dc5661ff1461017b578063e30c39781461018e578063f2fde38b146101ae57600080fd5b8063a2894e3a1461013a578063a9bad9c91461015a57600080fd5b806342f696a4116100a757806342f696a4146100e05780637200b829146100e85780638da5cb5b146100f057600080fd5b80630d360d84146100c357806323452b9c146100d8575b600080fd5b6100d66100d13660046116d0565b6101c1565b005b6100d66102a7565b6100d6610371565b6100d66105f5565b6000546101109073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61014d610148366004611782565b6106db565b604051610131919061185a565b61016d610168366004611874565b6109d7565b604051610131929190611955565b6100d6610189366004611a89565b610cee565b6001546101109073ffffffffffffffffffffffffffffffffffffffff1681565b6100d66101bc366004611ae2565b610eb1565b60005473ffffffffffffffffffffffffffffffffffffffff163314610212576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060005b818110156102a15761028f84848381811061023357610233611afd565b90506020020160208101906102489190611ae2565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61100f565b8061029981611b5b565b915050610216565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102f8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610347576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60006103816020600c3684611b93565b61038a91611bbd565b60601c9050600061039f603460203684611b93565b6103a891611bbd565b60601c905060006103bd604460343684611b93565b6103c691611c05565b60801c905060006103db606860583684611b93565b6103e491611c4b565b60e01c905061040b73ffffffffffffffffffffffffffffffffffffffff8416333085611157565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac561045660486044366000611b93565b61045f91611c4b565b60e01c86868161046f8789611c91565b61047e60586048366000611b93565b61048791611c05565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815263ffffffff909616600487015273ffffffffffffffffffffffffffffffffffffffff9485166024870152928416604486015292166064840152608483019190915260801c60a482015261010060c482015260026101048201527f307800000000000000000000000000000000000000000000000000000000000061012482015260e48101849052610144016020604051808303816000875af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190611caa565b507fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd6105b2600c6004366000611b93565b6105bb91611cc3565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610647576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60606fffffffffffffffffffffffffffffffff851115610782576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084015b60405180910390fd5b6fffffffffffffffffffffffffffffffff831115610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f736c697070616765546f6c2076616c75652070617373656420746f6f2062696760448201527f20746f2066697420696e2075696e7431323800000000000000000000000000006064820152608401610779565b6fffffffffffffffffffffffffffffffff8211156108c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f72656c617965724665652076616c75652070617373656420746f6f206269672060448201527f746f2066697420696e2075696e743132380000000000000000000000000000006064820152608401610779565b604080517f42f696a40000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff0000000000000000000000000000000000000000000000008a1660248201527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a811b8216602c84015289901b16918101919091527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608087811b821660548401527fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16606484015285811b8216606884015284901b1660788201526088016040516020818303038152906040529050979650505050505050565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e08088018790526101008801879052610120880187905288519081018952858152938401869052968301859052928201849052810183905290810182905292830152906068831015610aea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610779565b6040805161014081018252600080825260606020808401829052838501829052818401839052608080850184905260a080860185905260c080870186905260e0808801879052610100880187905261012088018790528851908101895285815293840186905296830185905292820184905281018390529081018290529283015290610b7a600c60048789611b93565b610b8391611cc3565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252610bb56020600c8789611b93565b610bbe91611bbd565b60601c60a0830152610bd4603460208789611b93565b610bdd91611bbd565b60601c6080830152610bf3604460348789611b93565b610bfc91611c05565b60801c60c083015260408051808201909152600281527f307800000000000000000000000000000000000000000000000000000000000060208083019190915290825260a083015173ffffffffffffffffffffffffffffffffffffffff1690820152610c6c606860588789611b93565b610c7591611c05565b60801c6040820152610c8b605860488789611b93565b610c9491611c05565b608090811c606083015260a083015173ffffffffffffffffffffffffffffffffffffffff1690820152610ccb604860448789611b93565b610cd491611c4b565b60e01c60a0820152600160c0820152909590945092505050565b610d1073ffffffffffffffffffffffffffffffffffffffff8616333087611157565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac584888881610d5a878b611c91565b60405160e087901b7fffffffff0000000000000000000000000000000000000000000000000000000016815263ffffffff95909516600486015273ffffffffffffffffffffffffffffffffffffffff938416602486015291831660448501529091166064830152608482015260a4810185905261010060c482015260026101048201527f307800000000000000000000000000000000000000000000000000000000000061012482015260e48101849052610144016020604051808303816000875af1158015610e2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e529190611caa565b506040517fffffffffffffffff000000000000000000000000000000000000000000000000881681527fe13311fb0fe0ee03852624f65380d885625f6dd9797b55c8404d22b093c10fbd9060200160405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f02576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610f4f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610f9e576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831661102f57505050565b73ffffffffffffffffffffffffffffffffffffffff821661107c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111159190611caa565b1015611152576111278383600061121d565b61115283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61121d565b505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611216576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610779565b5050505050565b8015806112bd57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bb9190611caa565b155b611349576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610779565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152611152928692916000916114149185169084906114c1565b90508051600014806114355750808060200190518101906114359190611d09565b611152576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610779565b60606114d084846000856114d8565b949350505050565b60608247101561156a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610779565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516115939190611d2b565b60006040518083038185875af1925050503d80600081146115d0576040519150601f19603f3d011682016040523d82523d6000602084013e6115d5565b606091505b50915091506115e6878383876115f1565b979650505050505050565b606083156116875782516000036116805773ffffffffffffffffffffffffffffffffffffffff85163b611680576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610779565b50816114d0565b6114d0838381511561169c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610779919061185a565b600080602083850312156116e357600080fd5b823567ffffffffffffffff808211156116fb57600080fd5b818501915085601f83011261170f57600080fd5b81358181111561171e57600080fd5b8660208260051b850101111561173357600080fd5b60209290920196919550909350505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461176957600080fd5b919050565b803563ffffffff8116811461176957600080fd5b600080600080600080600060e0888a03121561179d57600080fd5b873596506117ad60208901611745565b95506117bb60408901611745565b9450606088013593506117d06080890161176e565b925060a0880135915060c0880135905092959891949750929550565b60005b838110156118075781810151838201526020016117ef565b50506000910152565b600081518084526118288160208601602086016117ec565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061186d6020830184611810565b9392505050565b6000806020838503121561188757600080fd5b823567ffffffffffffffff8082111561189f57600080fd5b818501915085601f8301126118b357600080fd5b8135818111156118c257600080fd5b86602082850101111561173357600080fd5b6000815160e084526118e960e0850182611810565b9050602083015173ffffffffffffffffffffffffffffffffffffffff80821660208701526040850151604087015260608501516060870152806080860151166080870152505063ffffffff60a08401511660a085015260c0830151151560c08501528091505092915050565b60408152825160408201526000602084015161014080606085015261197e610180850183611810565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08584030160808601526119b98382611810565b92505060608601516119e360a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e088015191506101208281880152818901519250611a578488018415159052565b8801518015156101608801529250611a6d915050565b508281036020840152611a8081856118d4565b95945050505050565b600080600080600080600060e0888a031215611aa457600080fd5b87357fffffffffffffffff00000000000000000000000000000000000000000000000081168114611ad457600080fd5b96506117ad60208901611745565b600060208284031215611af457600080fd5b61186d82611745565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b8c57611b8c611b2c565b5060010190565b60008085851115611ba357600080fd5b83861115611bb057600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611bfd5780818660140360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015611bfd5760109490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611bfd5760049490940360031b84901b1690921692915050565b81810381811115611ca457611ca4611b2c565b92915050565b600060208284031215611cbc57600080fd5b5051919050565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015611bfd5760089490940360031b84901b1690921692915050565b600060208284031215611d1b57600080fd5b8151801515811461186d57600080fd5b60008251611d3d8184602087016117ec565b919091019291505056fea2646970667358221220ae8c7138f52dceaa2efce3d7378557cdacc9d61e4355bc077ac8a77a712015a464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "contract IConnextHandler";
            readonly name: "_connextHandler";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "Invalid";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes8";
            readonly name: "_transactionId";
            readonly type: "bytes8";
        }];
        readonly name: "LiFiAmarokTransfer";
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
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaAmarokERC20Packed";
        readonly outputs: readonly [{
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "relayerFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "slippageTol";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "delegate";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "destChainDomainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "destChainDomainId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippageTol";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "relayerFee";
            readonly type: "uint256";
        }];
        readonly name: "encode_startBridgeTokensViaAmarokERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
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
            readonly internalType: "address[]";
            readonly name: "tokensToApprove";
            readonly type: "address[]";
        }];
        readonly name: "setApprovalForAmarokBridges";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes8";
            readonly name: "transactionId";
            readonly type: "bytes8";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "destChainDomainId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippageTol";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "relayerFee";
            readonly type: "uint256";
        }];
        readonly name: "startBridgeTokensViaAmarokERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaAmarokERC20Packed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }];
    static createInterface(): AmarokFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacetPacked;
}
export {};
