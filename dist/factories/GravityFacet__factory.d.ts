import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GravityFacet, GravityFacetInterface } from "../GravityFacet";
declare type GravityFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GravityFacet__factory extends ContractFactory {
    constructor(...args: GravityFacetConstructorParams);
    deploy(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GravityFacet>;
    getDeployTransaction(_router: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GravityFacet;
    connect(signer: Signer): GravityFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028fd380380620028fd833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128626200009b600039600081816106ec015261073101526128626000f3fe6080604052600436106100295760003560e01c806331191ec31461002e578063eca3735c14610043575b600080fd5b61004161003c36600461225a565b610056565b005b6100416100513660046122be565b6102da565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123ac565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610258816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561028f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a189608001518a60c00151610562565b6102ab89896106e2565b504792505050818111156102ce576102ce6000846102c985856123ac565b6107f3565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610355576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061036634476123ac565b9050868061010001516103a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103e3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104068160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561043d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361047b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104db816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610512576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105278b600001518c60c001518c8c33610824565b60c08c01526105368b896106e2565b50479250505081811115610554576105546000846102c985856123ac565b505060009091555050505050565b8060000361059c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105f557803410156105f1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610662573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068691906123bf565b9050818110156106d1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106dd83333085610967565b505050565b61071582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610b81565b608082015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690630f2123579061076284806123d8565b8660c001516040518563ffffffff1660e01b81526004016107869493929190612444565b600060405180830381600087803b1580156107a057600080fd5b505af11580156107b4573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107e79190612526565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561081a576106dd838383610cc4565b6106dd8282610e46565b600082808203610860576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561086f6001856123ac565b81811061087e5761087e612639565b90506020028101906108909190612668565b6108a19060808101906060016126a6565b905060006108ae82610f70565b905073ffffffffffffffffffffffffffffffffffffffff82166108d8576108d534826123ac565b90505b60006108e48888611029565b90506108f08888611135565b6108fd8a898989856111a2565b60008261090985610f70565b61091391906123ac565b905089811015610959576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106c8565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109b4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a01576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9691906123bf565b9050610aa482868686611554565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3891906123bf565b610b4291906123ac565b14610b79576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8791906123bf565b10156106dd57610c9983836000611630565b6106dd83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611630565b73ffffffffffffffffffffffffffffffffffffffff8316610d11576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d5e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610def91906123bf565b905080821115610e35576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106c8565b610e408484846117b2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e93576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ed6576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106c8565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f30576040519150601f19603f3d011682016040523d82523d6000602084013e610f35565b606091505b50509050806106dd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611021576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c91906123bf565b611023565b475b92915050565b60608160008167ffffffffffffffff81111561104757611047611fd4565b604051908082528060200260200182016040528015611070578160200160208202803683370190505b5090506000805b8381101561112a5786868281811061109157611091612639565b90506020028101906110a39190612668565b6110b49060808101906060016126a6565b91506110bf82610f70565b8382815181106110d1576110d1612639565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611122573483828151811061110a5761110a612639565b6020026020010181815161111e91906123ac565b9052505b600101611077565b509095945050505050565b60005b818110156106dd573683838381811061115357611153612639565b90506020028101906111659190612668565b905061117760e0820160c083016126c1565b156111995761119961118f60608301604084016126a6565b8260800135610562565b50600101611138565b83838383826001811461146f57600085856111be6001856123ac565b8181106111cd576111cd612639565b90506020028101906111df9190612668565b6111f09060808101906060016126a6565b9050600089815b8181101561139b57368d8d8381811061121257611212612639565b90506020028101906112249190612668565b905061125361123960608301604084016126a6565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112b657506112b661126c60408301602084016126a6565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112cd57506112cd61126c60208301836126a6565b801561135257506113526112e460a08301836123d8565b6112f3916004916000916126de565b6112fc91612708565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611388576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113928f82611808565b506001016111f7565b505060005b6113ab6001856123ac565b8110156114675760008888838181106113c6576113c6612639565b90506020028101906113d89190612668565b6113e99060808101906060016126a6565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461145e5785828151811061143057611430612639565b602002602001015161144182610f70565b61144b91906123ac565b9250821561145e5761145e8188856107f3565b506001016113a0565b505050611548565b8760005b8181101561154557368b8b8381811061148e5761148e612639565b90506020028101906114a09190612668565b90506114b561123960608301604084016126a6565b806114ce57506114ce61126c60408301602084016126a6565b80156114e557506114e561126c60208301836126a6565b80156114fc57506114fc6112e460a08301836123d8565b611532576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61153c8d82611808565b50600101611473565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e409085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b1e565b8015806116d057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ce91906123bf565b155b61175c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106c8565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106dd9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115ae565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106dd9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115ae565b61181e61181860208301836126a6565b3b151590565b611854576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611894576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118a961123960608501604086016126a6565b6118b45760006118ba565b82608001355b905060006118d66118d160608601604087016126a6565b610f70565b905060006118ed6118d160808701606088016126a6565b9050826000036119245761192461190a60608701604088016126a6565b61191a60408801602089016126a6565b8760800135610b81565b846080013582101561196f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106c8565b60008061197f60208801886126a6565b73ffffffffffffffffffffffffffffffffffffffff16856119a360a08a018a6123d8565b6040516119b1929190612750565b60006040518083038185875af1925050503d80600081146119ee576040519150601f19603f3d011682016040523d82523d6000602084013e6119f3565b606091505b509150915081611a3e576000611a0882611c2d565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c89190612760565b6000611a536118d160808a0160608b016126a6565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a8460208b018b6126a6565b611a9460608c0160408d016126a6565b611aa460808d0160608e016126a6565b8c60800135898711611ab65786611ac0565b611ac08a886123ac565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cab9092919063ffffffff16565b9050805160001480611ba1575080806020019051810190611ba19190612773565b6106dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106c8565b6060604482511015611c7257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c8e6004808551611c8691906123ac565b859190611cc2565b905080806020019051810190611ca49190612790565b9392505050565b6060611cba8484600085611ddc565b949350505050565b606081611cd081601f612807565b1015611d08576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d128284612807565b84511015611d4c576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d6b5760405191506000825260208201604052611dd3565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611da4578051835260209283019201611d8c565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106c8565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e97919061281a565b60006040518083038185875af1925050503d8060008114611ed4576040519150601f19603f3d011682016040523d82523d6000602084013e611ed9565b606091505b5091509150611eea87838387611ef5565b979650505050505050565b60608315611f8b578251600003611f845773ffffffffffffffffffffffffffffffffffffffff85163b611f84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106c8565b5081611cba565b611cba8383815115611fa05781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c89190612760565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561202757612027611fd4565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561207457612074611fd4565b604052919050565b600067ffffffffffffffff82111561209657612096611fd4565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120d357600080fd5b81356120e66120e18261207c565b61202d565b8181528460208386010111156120fb57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461213c57600080fd5b919050565b801515811461214f57600080fd5b50565b803561213c81612141565b6000610140828403121561217057600080fd5b612178612003565b905081358152602082013567ffffffffffffffff8082111561219957600080fd5b6121a5858386016120c2565b602084015260408401359150808211156121be57600080fd5b506121cb848285016120c2565b6040830152506121dd60608301612118565b60608201526121ee60808301612118565b60808201526121ff60a08301612118565b60a082015260c082013560c082015260e082013560e0820152610100612226818401612152565b90820152610120612238838201612152565b9082015292915050565b60006020828403121561225457600080fd5b50919050565b6000806040838503121561226d57600080fd5b823567ffffffffffffffff8082111561228557600080fd5b6122918683870161215d565b935060208501359150808211156122a757600080fd5b506122b485828601612242565b9150509250929050565b600080600080606085870312156122d457600080fd5b843567ffffffffffffffff808211156122ec57600080fd5b6122f88883890161215d565b9550602087013591508082111561230e57600080fd5b818701915087601f83011261232257600080fd5b81358181111561233157600080fd5b8860208260051b850101111561234657600080fd5b60208301955080945050604087013591508082111561236457600080fd5b5061237187828801612242565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110235761102361237d565b6000602082840312156123d157600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261240d57600080fd5b83018035915067ffffffffffffffff82111561242857600080fd5b60200191503681900382131561243d57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff851681526060602082015282606082015282846080830137600060808483010152600060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116830101905082604083015295945050505050565b60005b838110156124d35781810151838201526020016124bb565b50506000910152565b600081518084526124f48160208601602086016124b8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261254f6101608501836124dc565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261258a83826124dc565b92505060608501516125b4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126278187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261269c57600080fd5b9190910192915050565b6000602082840312156126b857600080fd5b611ca482612118565b6000602082840312156126d357600080fd5b8135611ca481612141565b600080858511156126ee57600080fd5b838611156126fb57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127485780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ca460208301846124dc565b60006020828403121561278557600080fd5b8151611ca481612141565b6000602082840312156127a257600080fd5b815167ffffffffffffffff8111156127b957600080fd5b8201601f810184136127ca57600080fd5b80516127d86120e18261207c565b8181528560208385010111156127ed57600080fd5b6127fe8260208301602086016124b8565b95945050505050565b808201808211156110235761102361237d565b6000825161269c8184602087016124b856fea2646970667358221220f18dee92e52d4447dc417e9306690a12fbf5b685b06b819b71ce4468b00109d264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_router";
            readonly type: "address";
            readonly internalType: "contract IGravityRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGravity";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_gravityData";
            readonly type: "tuple";
            readonly internalType: "struct GravityFacet.GravityData";
            readonly components: readonly [{
                readonly name: "destinationAddress";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGravity";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gravityData";
            readonly type: "tuple";
            readonly internalType: "struct GravityFacet.GravityData";
            readonly components: readonly [{
                readonly name: "destinationAddress";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): GravityFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GravityFacet;
}
export {};
