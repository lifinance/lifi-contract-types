import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002aa138038062002aa1833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516129bc620000e56000396000818161012301526107f101526000818160ef015281816107a6015281816108a701526108d201526129bc6000f3fe60806040526004361061005a5760003560e01c8063a120c14f11610043578063a120c14f14610087578063afdac3d6146100dd578063eb6d3a111461011157600080fd5b806328832cbd1461005f57806328cc431614610074575b600080fd5b61007261006d36600461229c565b610145565b005b61007261008236600461235b565b610387565b34801561009357600080fd5b506000546100b49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100e957600080fd5b506100b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561011d57600080fd5b506100b47f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101c0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101d134476123ee565b905086806101000151610210576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102338160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561026a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102a8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102e5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102fa89600001518a60c001518a8a33610574565b60c08a0152600061030a8761242d565b9050670de0b6b3a764000061032560a0890160808a0161250b565b67ffffffffffffffff168b60c0015161033e919061252d565b6103489190612544565b60608201526103578a826106bc565b5047915050818111156103795761037960008461037485856123ee565b6109df565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610402576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061041334476123ee565b9050846104388160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561046f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ea576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610528576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053a87608001518860c00151610a15565b61054c876105478861242d565b6106bc565b50479050818111156105685761056860008461037485856123ee565b50506000909155505050565b6000828082036105b0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105bf6001856123ee565b8181106105ce576105ce61257f565b90506020028101906105e091906125ae565b6105f19060808101906060016125ec565b905060006105fe82610b8b565b905073ffffffffffffffffffffffffffffffffffffffff82166106285761062534826123ee565b90505b60006106348888610c44565b90506106408888610d50565b61064d8a89898985610dbd565b60008261065985610b8b565b61066391906123ee565b9050898110156106ae576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b816101200151151560008261012001515111151514610707576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81610120015115801561074e5750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610785576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff1661089d577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b81526004016108669c9b9a99989796959493929190612675565b6000604051808303818588803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b50505050506109a4565b6108d082608001517f00000000000000000000000000000000000000000000000000000000000000008460c0015161116f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109719c9b9a99989796959493929190612675565b600060405180830381600087803b15801561098b57600080fd5b505af115801561099f573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109d3919061270d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a0b57610a068383836112a6565b505050565b610a068282611428565b80600003610a4f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aa85780341015610aa4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b399190612820565b905081811015610b7f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106a5565b610a0683333085611552565b600073ffffffffffffffffffffffffffffffffffffffff821615610c3c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c379190612820565b610c3e565b475b92915050565b60608160008167ffffffffffffffff811115610c6257610c62612055565b604051908082528060200260200182016040528015610c8b578160200160208202803683370190505b5090506000805b83811015610d4557868682818110610cac57610cac61257f565b9050602002810190610cbe91906125ae565b610ccf9060808101906060016125ec565b9150610cda82610b8b565b838281518110610cec57610cec61257f565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d3d5734838281518110610d2557610d2561257f565b60200260200101818151610d3991906123ee565b9052505b600101610c92565b509095945050505050565b60005b81811015610a065736838383818110610d6e57610d6e61257f565b9050602002810190610d8091906125ae565b9050610d9260e0820160c08301612839565b15610db457610db4610daa60608301604084016125ec565b8260800135610a15565b50600101610d53565b83838383826001811461108a5760008585610dd96001856123ee565b818110610de857610de861257f565b9050602002810190610dfa91906125ae565b610e0b9060808101906060016125ec565b9050600089815b81811015610fb657368d8d83818110610e2d57610e2d61257f565b9050602002810190610e3f91906125ae565b9050610e6e610e5460608301604084016125ec565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ed15750610ed1610e8760408301602084016125ec565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ee85750610ee8610e8760208301836125ec565b8015610f6d5750610f6d610eff60a0830183612856565b610f0e916004916000916128c2565b610f17916128ec565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fa3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fad8f8261176c565b50600101610e12565b505060005b610fc66001856123ee565b811015611082576000888883818110610fe157610fe161257f565b9050602002810190610ff391906125ae565b6110049060808101906060016125ec565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110795785828151811061104b5761104b61257f565b602002602001015161105c82610b8b565b61106691906123ee565b92508215611079576110798188856109df565b50600101610fbb565b505050611163565b8760005b8181101561116057368b8b838181106110a9576110a961257f565b90506020028101906110bb91906125ae565b90506110d0610e5460608301604084016125ec565b806110e957506110e9610e8760408301602084016125ec565b80156111005750611100610e8760208301836125ec565b80156111175750611117610eff60a0830183612856565b61114d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111578d8261176c565b5060010161108e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661118f57505050565b73ffffffffffffffffffffffffffffffffffffffff82166111dc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112759190612820565b1015610a0657610a0683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a4a565b73ffffffffffffffffffffffffffffffffffffffff83166112f3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611340576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d19190612820565b905080821115611417576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106a5565b611422848484611bb8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611475576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114b8576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106a5565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611512576040519150601f19603f3d011682016040523d82523d6000602084013e611517565b606091505b5050905080610a06576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661159f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115ec576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561165d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116819190612820565b905061168f82868686611c0e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156116ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117239190612820565b61172d91906123ee565b14611764576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61178261177c60208301836125ec565b3b151590565b6117b8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117f8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061180d610e5460608501604086016125ec565b61181857600061181e565b82608001355b9050600061183a61183560608601604087016125ec565b610b8b565b9050600061185161183560808701606088016125ec565b9050826000036118885761188861186e60608701604088016125ec565b61187e60408801602089016125ec565b876080013561116f565b84608001358210156118d3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106a5565b6000806118e360208801886125ec565b73ffffffffffffffffffffffffffffffffffffffff168561190760a08a018a612856565b604051611915929190612934565b60006040518083038185875af1925050503d8060008114611952576040519150601f19603f3d011682016040523d82523d6000602084013e611957565b606091505b50915091508161196a5761196a81611c6c565b600061197f61183560808a0160608b016125ec565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119b060208b018b6125ec565b6119c060608c0160408d016125ec565b6119d060808d0160608e016125ec565b8c608001358987116119e257866119ec565b6119ec8a886123ee565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ad68482611c76565b6114225760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611bae9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d37565b6114228482611d37565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a069084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b2c565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114229085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b2c565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611ca09190612944565b6000604051808303816000865af19150503d8060008114611cdd576040519150601f19603f3d011682016040523d82523d6000602084013e611ce2565b606091505b5091509150818015611d0c575080511580611d0c575080806020019051810190611d0c9190612956565b8015611d2e575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611d99826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e469092919063ffffffff16565b9050805160001480611dba575080806020019051810190611dba9190612956565b610a06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106a5565b6060611e558484600085611e5d565b949350505050565b606082471015611eef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106a5565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f189190612944565b60006040518083038185875af1925050503d8060008114611f55576040519150601f19603f3d011682016040523d82523d6000602084013e611f5a565b606091505b5091509150611f6b87838387611f76565b979650505050505050565b6060831561200c5782516000036120055773ffffffffffffffffffffffffffffffffffffffff85163b612005576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106a5565b5081611e55565b611e5583838151156120215781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a59190612973565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a8576120a8612055565b60405290565b600082601f8301126120bf57600080fd5b813567ffffffffffffffff808211156120da576120da612055565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561212057612120612055565b8160405283815286602085880101111561213957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217d57600080fd5b919050565b801515811461219057600080fd5b50565b803561217d81612182565b600061014082840312156121b157600080fd5b6121b9612084565b905081358152602082013567ffffffffffffffff808211156121da57600080fd5b6121e6858386016120ae565b602084015260408401359150808211156121ff57600080fd5b5061220c848285016120ae565b60408301525061221e60608301612159565b606082015261222f60808301612159565b608082015261224060a08301612159565b60a082015260c082013560c082015260e082013560e0820152610100612267818401612193565b90820152610120612279838201612193565b9082015292915050565b6000610140828403121561229657600080fd5b50919050565b600080600080606085870312156122b257600080fd5b843567ffffffffffffffff808211156122ca57600080fd5b6122d68883890161219e565b955060208701359150808211156122ec57600080fd5b818701915087601f83011261230057600080fd5b81358181111561230f57600080fd5b8860208260051b850101111561232457600080fd5b60208301955080945050604087013591508082111561234257600080fd5b5061234f87828801612283565b91505092959194509250565b6000806040838503121561236e57600080fd5b823567ffffffffffffffff8082111561238657600080fd5b6123928683870161219e565b935060208501359150808211156123a857600080fd5b506123b585828601612283565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c3e57610c3e6123bf565b803567ffffffffffffffff8116811461217d57600080fd5b803563ffffffff8116811461217d57600080fd5b6000610140823603121561244057600080fd5b612448612084565b61245183612159565b815261245f60208401612159565b602082015261247060408401612159565b60408201526060830135606082015261248b60808401612401565b608082015261249c60a08401612159565b60a08201526124ad60c08401612419565b60c08201526124be60e08401612419565b60e08201526101006124d1818501612419565b908201526101208381013567ffffffffffffffff8111156124f157600080fd5b6124fd368287016120ae565b918301919091525092915050565b60006020828403121561251d57600080fd5b61252682612401565b9392505050565b8082028115828204841417610c3e57610c3e6123bf565b60008261257a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125e257600080fd5b9190910192915050565b6000602082840312156125fe57600080fd5b61252682612159565b60005b8381101561262257818101518382015260200161260a565b50506000910152565b60008151808452612643816020860160208601612607565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff858116610100830152848116610120830152831661014082015260006101806101608301526126fb61018083018461262b565b9e9d5050505050505050505050505050565b60208152815160208201526000602083015161014080604085015261273661016085018361262b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612771838261262b565b925050606085015161279b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061280e8187018315159052565b90950151151593019290925250919050565b60006020828403121561283257600080fd5b5051919050565b60006020828403121561284b57600080fd5b813561252681612182565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261288b57600080fd5b83018035915067ffffffffffffffff8211156128a657600080fd5b6020019150368190038213156128bb57600080fd5b9250929050565b600080858511156128d257600080fd5b838611156128df57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561292c5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600082516125e2818460208701612607565b60006020828403121561296857600080fd5b815161252681612182565b602081526000612526602083018461262b56fea2646970667358221220f0851604b35d3b872e79d3b5382423c6cca5bad5e6000a894f420d09e973e6c064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "dd";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
    }];
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
