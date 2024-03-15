import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
declare type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002bbd38038062002bbd833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612af3620000ca60003960006105f8015260006106230152612af36000f3fe6080604052600436106100295760003560e01c80636e0671611461002e578063b70fb9a514610043575b600080fd5b61004161003c366004612373565b610056565b005b610041610051366004612432565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124c5565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b5565b504790508181111561023b5761023b60008461023685856124c5565b6108c2565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d534476124c5565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c001516108f8565b61044488886105b5565b5047915050818111156104615761046160008461023685856124c5565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b86001856124c5565b8181106104c7576104c76124d8565b90506020028101906104d99190612507565b6104ea906080810190606001612545565b905060006104f782610a6e565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e34826124c5565b90505b600061052d8888610b27565b90506105398888610c33565b6105468a89898985610ca0565b60008261055285610a6e565b61055c91906124c5565b9050898110156105a7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60006105d9836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ee575060c0830151610621565b61062184608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611052565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087806000019061067a9190612560565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020908101906106c390890189612560565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060200161070a60a08901896125cc565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505050908252506020016107516080890160608a01612545565b73ffffffffffffffffffffffffffffffffffffffff16815260200161077c60a0890160808a01612545565b73ffffffffffffffffffffffffffffffffffffffff1681526020018860c00151815260200186151581526020018760c00160208101906107bc9190612545565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107e460e0890189612560565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261085391906004016126f3565b6000604051808303818588803b15801561086c57600080fd5b505af1158015610880573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b49190612826565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108ee576108e9838383611195565b505050565b6108e98282611317565b80600003610932576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661098b5780341015610987576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c9190612939565b905081811015610a62576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b6108e983333085611441565b600073ffffffffffffffffffffffffffffffffffffffff821615610b1f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190612939565b610b21565b475b92915050565b60608160008167ffffffffffffffff811115610b4557610b456120ec565b604051908082528060200260200182016040528015610b6e578160200160208202803683370190505b5090506000805b83811015610c2857868682818110610b8f57610b8f6124d8565b9050602002810190610ba19190612507565b610bb2906080810190606001612545565b9150610bbd82610a6e565b838281518110610bcf57610bcf6124d8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c205734838281518110610c0857610c086124d8565b60200260200101818151610c1c91906124c5565b9052505b600101610b75565b509095945050505050565b60005b818110156108e95736838383818110610c5157610c516124d8565b9050602002810190610c639190612507565b9050610c7560e0820160c08301612952565b15610c9757610c97610c8d6060830160408401612545565b82608001356108f8565b50600101610c36565b838383838260018114610f6d5760008585610cbc6001856124c5565b818110610ccb57610ccb6124d8565b9050602002810190610cdd9190612507565b610cee906080810190606001612545565b9050600089815b81811015610e9957368d8d83818110610d1057610d106124d8565b9050602002810190610d229190612507565b9050610d51610d376060830160408401612545565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610db45750610db4610d6a6040830160208401612545565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dcb5750610dcb610d6a6020830183612545565b8015610e505750610e50610de260a0830183612560565b610df19160049160009161296f565b610dfa91612999565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e86576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e908f8261166c565b50600101610cf5565b505060005b610ea96001856124c5565b811015610f65576000888883818110610ec457610ec46124d8565b9050602002810190610ed69190612507565b610ee7906080810190606001612545565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f5c57858281518110610f2e57610f2e6124d8565b6020026020010151610f3f82610a6e565b610f4991906124c5565b92508215610f5c57610f5c8188856108c2565b50600101610e9e565b505050611046565b8760005b8181101561104357368b8b83818110610f8c57610f8c6124d8565b9050602002810190610f9e9190612507565b9050610fb3610d376060830160408401612545565b80610fcc5750610fcc610d6a6040830160208401612545565b8015610fe35750610fe3610d6a6020830183612545565b8015610ffa5750610ffa610de260a0830183612560565b611030576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61103a8d8261166c565b50600101610f71565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107257505050565b73ffffffffffffffffffffffffffffffffffffffff82166110bf576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111589190612939565b10156108e95761116a83836000611982565b6108e983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611982565b73ffffffffffffffffffffffffffffffffffffffff83166111e2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661122f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561129c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c09190612939565b905080821115611306576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b611311848484611b82565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611364576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113a7576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161059e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611401576040519150601f19603f3d011682016040523d82523d6000602084013e611406565b606091505b50509050806108e9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661148e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114db576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561154c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115709190612939565b905061157e82868686611bd8565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa1580156115ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116139190612939565b61161d91906124c5565b90508361162b8260016129e1565b1015611663576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b61168261167c6020830183612545565b3b151590565b6116b8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116f8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061170d610d376060850160408601612545565b61171857600061171e565b82608001355b9050600061173a6117356060860160408701612545565b610a6e565b905060006117516117356080870160608801612545565b9050826000036117885761178861176e6060870160408801612545565b61177e6040880160208901612545565b8760800135611052565b84608001358210156117d3576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161059e565b6000806117e36020880188612545565b73ffffffffffffffffffffffffffffffffffffffff168561180760a08a018a612560565b6040516118159291906129f4565b60006040518083038185875af1925050503d8060008114611852576040519150601f19603f3d011682016040523d82523d6000602084013e611857565b606091505b5091509150816118a257600061186c82611c36565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e9190612a04565b60006118b761173560808a0160608b01612545565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118e860208b018b612545565b6118f860608c0160408d01612545565b61190860808d0160608e01612545565b8c6080013589871161191a5786611924565b6119248a886124c5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a2257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a209190612939565b155b611aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161059e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108e99084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cb4565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108e99084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b00565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113119085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b00565b6060604482511015611c7b57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c976004808551611c8f91906124c5565b859190611dc3565b905080806020019051810190611cad9190612a17565b9392505050565b6000611d16826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611edd9092919063ffffffff16565b9050805160001480611d37575080806020019051810190611d379190612a8e565b6108e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161059e565b606081611dd181601f6129e1565b1015611e09576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e1382846129e1565b84511015611e4d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e6c5760405191506000825260208201604052611ed4565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ea5578051835260209283019201611e8d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611eec8484600085611ef4565b949350505050565b606082471015611f86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161059e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611faf9190612aab565b60006040518083038185875af1925050503d8060008114611fec576040519150601f19603f3d011682016040523d82523d6000602084013e611ff1565b606091505b50915091506120028783838761200d565b979650505050505050565b606083156120a357825160000361209c5773ffffffffffffffffffffffffffffffffffffffff85163b61209c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059e565b5081611eec565b611eec83838151156120b85781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e9190612a04565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561213f5761213f6120ec565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561218c5761218c6120ec565b604052919050565b600067ffffffffffffffff8211156121ae576121ae6120ec565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121eb57600080fd5b81356121fe6121f982612194565b612145565b81815284602083860101111561221357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461225457600080fd5b919050565b801515811461226757600080fd5b50565b803561225481612259565b6000610140828403121561228857600080fd5b61229061211b565b905081358152602082013567ffffffffffffffff808211156122b157600080fd5b6122bd858386016121da565b602084015260408401359150808211156122d657600080fd5b506122e3848285016121da565b6040830152506122f560608301612230565b606082015261230660808301612230565b608082015261231760a08301612230565b60a082015260c082013560c082015260e082013560e082015261010061233e81840161226a565b9082015261012061235083820161226a565b9082015292915050565b6000610100828403121561236d57600080fd5b50919050565b6000806000806060858703121561238957600080fd5b843567ffffffffffffffff808211156123a157600080fd5b6123ad88838901612275565b955060208701359150808211156123c357600080fd5b818701915087601f8301126123d757600080fd5b8135818111156123e657600080fd5b8860208260051b85010111156123fb57600080fd5b60208301955080945050604087013591508082111561241957600080fd5b506124268782880161235a565b91505092959194509250565b6000806040838503121561244557600080fd5b823567ffffffffffffffff8082111561245d57600080fd5b61246986838701612275565b9350602085013591508082111561247f57600080fd5b5061248c8582860161235a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b2157610b21612496565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261253b57600080fd5b9190910192915050565b60006020828403121561255757600080fd5b611cad82612230565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261259557600080fd5b83018035915067ffffffffffffffff8211156125b057600080fd5b6020019150368190038213156125c557600080fd5b9250929050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261260157600080fd5b83018035915067ffffffffffffffff82111561261c57600080fd5b6020019150600581901b36038213156125c557600080fd5b60005b8381101561264f578181015183820152602001612637565b50506000910152565b60008151808452612670816020860160208601612634565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b838110156126e857815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016126b6565b509495945050505050565b6020815260008251610120806020850152612712610140850183612658565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08086850301604087015261274e8483612658565b9350604087015191508086850301606087015261276b84836126a2565b935060608701519150612796608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c087015191506127d860e087018315159052565b60e087015191506101006128038188018473ffffffffffffffffffffffffffffffffffffffff169052565b87015186850390910183870152905061281c8382612658565b9695505050505050565b60208152815160208201526000602083015161014080604085015261284f610160850183612658565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261288a8382612658565b92505060608501516128b4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129278187018315159052565b90950151151593019290925250919050565b60006020828403121561294b57600080fd5b5051919050565b60006020828403121561296457600080fd5b8135611cad81612259565b6000808585111561297f57600080fd5b8386111561298c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129d95780818660040360031b1b83161692505b505092915050565b80820180821115610b2157610b21612496565b8183823760009101908152919050565b602081526000611cad6020830184612658565b600060208284031215612a2957600080fd5b815167ffffffffffffffff811115612a4057600080fd5b8201601f81018413612a5157600080fd5b8051612a5f6121f982612194565b818152856020838501011115612a7457600080fd5b612a85826020830160208601612634565b95945050505050565b600060208284031215612aa057600080fd5b8151611cad81612259565b6000825161253b81846020870161263456fea2646970667358221220b4d23d6cf664473382c6a47b5744bf2aa4d2bebea5426f388e4b757dc2ae39b964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
