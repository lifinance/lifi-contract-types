import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a5338038062002a53833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516129b86200009b6000396000818161071e015261075e01526129b86000f3fe6080604052600436106100295760003560e01c8063123cc1171461002e578063b506907114610043575b600080fd5b61004161003c36600461234d565b610056565b005b61004161005136600461240c565b6102b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124a8565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025a8a88610520565b6102748a600001518b60c001518b8b338c60400135610574565b60c08b01526102838a88610714565b5047915050818111156102a5576102a56000846102a085856124a8565b610876565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061033f34476124a8565b905061034a856124bb565b80610100015115610387576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610390866124bb565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103e1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610465876124bb565b608081015173ffffffffffffffffffffffffffffffffffffffff166104b6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c86104c2896124bb565b88610520565b6104e56104db60a08a0160808b016124c7565b8960c001356108ac565b6104f76104f1896124bb565b88610714565b504791505081811115610514576105146000846102a085856124a8565b50506000909155505050565b6101208201511515600061053483806124e2565b905011151514610570576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000838082036105b0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105bf6001856124a8565b8181106105ce576105ce61254e565b90506020028101906105e0919061257d565b6105f19060808101906060016124c7565b905060006105fe82610a1e565b905073ffffffffffffffffffffffffffffffffffffffff82166106285761062534826124a8565b90505b60006106348989610ad7565b90506106408989610be3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261067b818b8b85610c50565b60008361068786610a1e565b61069191906124a8565b905073ffffffffffffffffffffffffffffffffffffffff85166106bb576106b888826124a8565b90505b8b811015610704576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b61074782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611041565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba604083013561079860c0850160a086016125bb565b6107a860408601602087016124c7565b86608001518660800160208101906107c091906124c7565b60c089015160608901356107d48a806124e2565b6040518a63ffffffff1660e01b81526004016107f79897969594939291906125e1565b60206040518083038185885af1158015610815573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061083a919061267d565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086a9190612704565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a25761089d838383611184565b505050565b61089d8282611306565b806000036108e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661093b5780341015610570576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cc919061267d565b905081811015610a12576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b61089d83333085611430565b600073ffffffffffffffffffffffffffffffffffffffff821615610acf576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca919061267d565b610ad1565b475b92915050565b60608160008167ffffffffffffffff811115610af557610af56120c7565b604051908082528060200260200182016040528015610b1e578160200160208202803683370190505b5090506000805b83811015610bd857868682818110610b3f57610b3f61254e565b9050602002810190610b51919061257d565b610b629060808101906060016124c7565b9150610b6d82610a1e565b838281518110610b7f57610b7f61254e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bd05734838281518110610bb857610bb861254e565b60200260200101818151610bcc91906124a8565b9052505b600101610b25565b509095945050505050565b60005b8181101561089d5736838383818110610c0157610c0161254e565b9050602002810190610c13919061257d565b9050610c2560e0820160c08301612817565b15610c4757610c47610c3d60608301604084016124c7565b82608001356108ac565b50600101610be6565b602084015160408501518491849184908360018114610f5a5760008686610c786001856124a8565b818110610c8757610c8761254e565b9050602002810190610c99919061257d565b610caa9060808101906060016124c7565b9050600089815b81811015610e5757368d8d83818110610ccc57610ccc61254e565b9050602002810190610cde919061257d565b9050610d0d610cf360608301604084016124c7565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d705750610d70610d2660408301602084016124c7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d875750610d87610d2660208301836124c7565b8015610e0c5750610e0c610d9e60a08301836124e2565b610dad91600491600091612834565b610db69161285e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e42576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e4e908261164a565b50600101610cb1565b505060005b610e676001856124a8565b811015610f52576000898983818110610e8257610e8261254e565b9050602002810190610e94919061257d565b610ea59060808101906060016124c7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f4957868281518110610eec57610eec61254e565b6020026020010151610efd82610a1e565b610f0791906124a8565b9250600073ffffffffffffffffffffffffffffffffffffffff821615610f2e576000610f30565b865b90508315610f4757610f47828a6102a084886124a8565b505b50600101610e5c565b505050611035565b8760005b8181101561103257368b8b83818110610f7957610f7961254e565b9050602002810190610f8b919061257d565b9050610fa0610cf360608301604084016124c7565b80610fb95750610fb9610d2660408301602084016124c7565b8015610fd05750610fd0610d2660208301836124c7565b8015610fe75750610fe7610d9e60a08301836124e2565b61101d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611029908261164a565b50600101610f5e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661106157505050565b73ffffffffffffffffffffffffffffffffffffffff82166110ae576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611147919061267d565b101561089d5761115983836000611960565b61089d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611960565b73ffffffffffffffffffffffffffffffffffffffff83166111d1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661121e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561128b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112af919061267d565b9050808211156112f5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b611300848484611b60565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611353576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611396576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106fb565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113f0576040519150601f19603f3d011682016040523d82523d6000602084013e6113f5565b606091505b505090508061089d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661147d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114ca576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561153b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155f919061267d565b905061156d82868686611bb6565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611601919061267d565b61160b91906124a8565b14611642576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61166061165a60208301836124c7565b3b151590565b611696576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116d6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116eb610cf360608501604086016124c7565b6116f65760006116fc565b82608001355b9050600061171861171360608601604087016124c7565b610a1e565b9050600061172f61171360808701606088016124c7565b9050826000036117665761176661174c60608701604088016124c7565b61175c60408801602089016124c7565b8760800135611041565b84608001358210156117b1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106fb565b6000806117c160208801886124c7565b73ffffffffffffffffffffffffffffffffffffffff16856117e560a08a018a6124e2565b6040516117f39291906128a6565b60006040518083038185875af1925050503d8060008114611830576040519150601f19603f3d011682016040523d82523d6000602084013e611835565b606091505b50915091508161188057600061184a82611c14565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb91906128b6565b600061189561171360808a0160608b016124c7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118c660208b018b6124c7565b6118d660608c0160408d016124c7565b6118e660808d0160608e016124c7565b8c608001358987116118f85786611902565b6119028a886124a8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a0057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119fe919061267d565b155b611a8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106fb565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c92565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611ade565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113009085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ade565b6060604482511015611c5957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c756004808551611c6d91906124a8565b859190611d9e565b905080806020019051810190611c8b91906128c9565b9392505050565b6000611cf4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611eb89092919063ffffffff16565b80519091501561089d5780806020019051810190611d129190612940565b61089d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106fb565b606081611dac81601f61295d565b1015611de4576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611dee828461295d565b84511015611e28576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e475760405191506000825260208201604052611eaf565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e80578051835260209283019201611e68565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611ec78484600085611ecf565b949350505050565b606082471015611f61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106fb565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f8a9190612970565b60006040518083038185875af1925050503d8060008114611fc7576040519150601f19603f3d011682016040523d82523d6000602084013e611fcc565b606091505b5091509150611fdd87838387611fe8565b979650505050505050565b6060831561207e5782516000036120775773ffffffffffffffffffffffffffffffffffffffff85163b612077576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106fb565b5081611ec7565b611ec783838151156120935781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb91906128b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561211a5761211a6120c7565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612167576121676120c7565b604052919050565b600067ffffffffffffffff821115612189576121896120c7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121c657600080fd5b81356121d96121d48261216f565b612120565b8181528460208386010111156121ee57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461222f57600080fd5b919050565b801515811461224257600080fd5b50565b803561222f81612234565b6000610140828403121561226357600080fd5b61226b6120f6565b905081358152602082013567ffffffffffffffff8082111561228c57600080fd5b612298858386016121b5565b602084015260408401359150808211156122b157600080fd5b506122be848285016121b5565b6040830152506122d06060830161220b565b60608201526122e16080830161220b565b60808201526122f260a0830161220b565b60a082015260c082013560c082015260e082013560e0820152610100612319818401612245565b9082015261012061232b838201612245565b9082015292915050565b600060c0828403121561234757600080fd5b50919050565b6000806000806060858703121561236357600080fd5b843567ffffffffffffffff8082111561237b57600080fd5b61238788838901612250565b9550602087013591508082111561239d57600080fd5b818701915087601f8301126123b157600080fd5b8135818111156123c057600080fd5b8860208260051b85010111156123d557600080fd5b6020830195508094505060408701359150808211156123f357600080fd5b5061240087828801612335565b91505092959194509250565b6000806040838503121561241f57600080fd5b823567ffffffffffffffff8082111561243757600080fd5b90840190610140828703121561244c57600080fd5b9092506020840135908082111561246257600080fd5b5061246f85828601612335565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ad157610ad1612479565b6000610ad13683612250565b6000602082840312156124d957600080fd5b611c8b8261220b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261251757600080fd5b83018035915067ffffffffffffffff82111561253257600080fd5b60200191503681900382131561254757600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125b157600080fd5b9190910192915050565b6000602082840312156125cd57600080fd5b813563ffffffff81168114611c8b57600080fd5b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b60006020828403121561268f57600080fd5b5051919050565b60005b838110156126b1578181015183820152602001612699565b50506000910152565b600081518084526126d2816020860160208601612696565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261272d6101608501836126ba565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261276883826126ba565b9250506060850151612792608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128058187018315159052565b90950151151593019290925250919050565b60006020828403121561282957600080fd5b8135611c8b81612234565b6000808585111561284457600080fd5b8386111561285157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561289e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c8b60208301846126ba565b6000602082840312156128db57600080fd5b815167ffffffffffffffff8111156128f257600080fd5b8201601f8101841361290357600080fd5b80516129116121d48261216f565b81815285602083850101111561292657600080fd5b612937826020830160208601612696565b95945050505050565b60006020828403121561295257600080fd5b8151611c8b81612234565b80820180821115610ad157610ad1612479565b600082516125b181846020870161269656fea26469706673582212203ed78a15f058b628894371ef2a31d68ce2e4a237463c33124943d238dc9ec84864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IConnextHandler";
            readonly name: "_connextHandler";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetNotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
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
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
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
            }];
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly name: "_amarokData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAmarok";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
