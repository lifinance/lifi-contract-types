import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanFacet, MayanFacetInterface } from "../MayanFacet";
type MayanFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MayanFacet__factory extends ContractFactory {
    constructor(...args: MayanFacetConstructorParams);
    deploy(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MayanFacet>;
    getDeployTransaction(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MayanFacet;
    connect(signer: Signer): MayanFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161281838038061281883398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516127596100bf5f395f8181607001528181610d7101528181610d9c0152610e8901526127595ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063ce90a7211461005f575b5f5ffd5b61004a610045366004612002565b6100bb565b005b61004a61005a3660046120c8565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447612160565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103449190612173565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610ba0565b50479350505050818111156103ae576103ae5f846103a98585612160565b610fb1565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104463447612160565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c00151610fe6565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb89612193565b610ba0565b50479150508181111561060c5761060c5f846103a98585612160565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610660600185612160565b81811061066f5761066f61219e565b905060200281019061068191906121cb565b610692906080810190606001612207565b90505f61069e8261109a565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c53482612160565b90505b5f6106d388886110e3565b90506106df88886111ed565b6106ec8a89898985611259565b5f826106f78561109a565b6107019190612160565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac57610772600883612220565b61077d90600a61235a565b6107879084612368565b9250610794600883612220565b61079f90600a61235a565b6107a990846123a0565b92505b50815b92915050565b60606044835110156107f3576040517f5168114300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f835167ffffffffffffffff81111561080e5761080e611d3f565b6040519080825280601f01601f191660200182016040528015610838576020820181803683370190505b5090505f6018856003815181106108515761085161219e565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108965761089661219e565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106108db576108db61219e565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061091a5761091a61219e565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109c75761010087516109c09190612160565b91506109cc565b602491505b5f5b82811015610a3b578781815181106109e8576109e861219e565b602001015160f81c60f81b858281518110610a0557610a0561219e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109ce565b505f86604051602001610a5091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b1557818181518110610a9d57610a9d61219e565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610acf86846123b7565b81518110610adf57610adf61219e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610a82565b505f610b228460206123b7565b90505b8851811015610b9357888181518110610b4057610b4061219e565b602001015160f81c60f81b868281518110610b5d57610b5d61219e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b25565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610c74578051610c23576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610c318260400151611419565b82519091508114610c6e576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d17565b5f610c828260400151611419565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d155760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d476040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e3d57610d9a83608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161150c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e0b959493929190612416565b5f604051808303815f87803b158015610e22575f5ffd5b505af1158015610e34573d5f5f3e3d5ffd5b50505050610eed565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610ebe926004016124a6565b5f604051808303818588803b158015610ed5575f5ffd5b505af1158015610ee7573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610f755760e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fa491906124dc565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fdb57610fd68282611538565b505050565b610fd68383836115a5565b805f0361101f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110785780341015611074576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61107473ffffffffffffffffffffffffffffffffffffffff8316333084611613565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110dc576110d773ffffffffffffffffffffffffffffffffffffffff83163061166b565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561110057611100611d3f565b604051908082528060200260200182016040528015611129578160200160208202803683370190505b5090505f5f5b838110156111e2578686828181106111495761114961219e565b905060200281019061115b91906121cb565b61116c906080810190606001612207565b91506111778261109a565b8382815181106111895761118961219e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111da57348382815181106111c2576111c261219e565b602002602001018181516111d69190612160565b9052505b60010161112f565b509095945050505050565b5f5b81811015610fd6573683838381811061120a5761120a61219e565b905060200281019061121c91906121cb565b905061122e60e0820160c083016125ef565b15611250576112506112466060830160408401612207565b8260800135610fe6565b506001016111ef565b83838383825f5b818110156113ff57368a8a8381811061127b5761127b61219e565b905060200281019061128d91906121cb565b90506112bc6112a26060830160408401612207565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061131d575061131d6112d56040830160208401612207565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b801561133457506113346112d56020830183612207565b80156113b657506113b661134b60a0830183612608565b611359916004915f91612670565b61136291612697565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b6113ec576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113f68c8261169e565b50600101611260565b505061140e848484845f611911565b505050505050505050565b60208101515f9060e081901c806394454a5d81146114b2576332ad465f81146114be5763afd9b70681146114ca57636111ad2581146114d657631eb1cff081146114d65763b866e17381146114e257638e8d142b81146114ef57631c59b7fc81146114ca57639be95bb481146114be57632072197f81146114b25763f58b6de881146114be57632337e23681146114fc575f9350611504565b60a48501519350611504565b60c48501519350611504565b60848501519350611504565b60e48501519350611504565b6101048501519350611504565b6101448501519350611504565b60e485015193505b505050919050565b610fd68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b28565b73ffffffffffffffffffffffffffffffffffffffff8216611585576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107473ffffffffffffffffffffffffffffffffffffffff831682611c55565b73ffffffffffffffffffffffffffffffffffffffff82166115f2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fd673ffffffffffffffffffffffffffffffffffffffff84168383611c6e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661165e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116b66116ae6020830183612207565b6017903b1190565b6116ec576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361172b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61173f6112a26060850160408601612207565b611749575f61174f565b82608001355b90505f61176a6117656080860160608701612207565b61109a565b9050815f036117a0576117a06117866060860160408701612207565b6117966040870160208801612207565b866080013561150c565b5f806117af6020870187612207565b73ffffffffffffffffffffffffffffffffffffffff16846117d360a0890189612608565b6040516117e19291906126fd565b5f6040518083038185875af1925050503d805f811461181b576040519150601f19603f3d011682016040523d82523d5f602084013e611820565b606091505b5091509150816118335761183381611cb7565b5f6118476117656080890160608a01612207565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861187860208a018a612207565b61188860608b0160408c01612207565b61189860808c0160608d01612207565b8b608001358987116118aa57866118b4565b6118b48a88612160565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611920600182612160565b81811061192f5761192f61219e565b905060200281019061194191906121cb565b611952906080810190606001612207565b90505f5f5f5f5f5f5f5b88811015611b185761196f60018a612160565b8110801561197e575088600114155b15611a59578d8d828181106119955761199561219e565b90506020028101906119a791906121cb565b6119b8906080810190606001612207565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a59578a81815181106119ff576119ff61219e565b6020026020010151611a108761109a565b611a1a9190612160565b965073ffffffffffffffffffffffffffffffffffffffff861615611a3e575f611a40565b895b935083871115611a5957611a59868d6103a9878b612160565b8d8d82818110611a6b57611a6b61219e565b9050602002810190611a7d91906121cb565b611a8e906060810190604001612207565b9450611a998561109a565b925073ffffffffffffffffffffffffffffffffffffffff851615611abd575f611abf565b895b91508183118015611afc57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b1057611b10858d6103a98587612160565b60010161195c565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611c4f5773ffffffffffffffffffffffffffffffffffffffff8316611b91576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c04573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c28919061270c565b1015611c4f57611c4f73ffffffffffffffffffffffffffffffffffffffff85168483611cc1565b50505050565b5f385f3884865af16110745763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cae576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cae575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611cae57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d9057611d90611d3f565b60405290565b5f5f67ffffffffffffffff841115611db057611db0611d3f565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611dfd57611dfd611d3f565b604052838152905080828401851015611e14575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611e3a575f5ffd5b611e4983833560208501611d96565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e73575f5ffd5b919050565b80358015158114611e73575f5ffd5b5f6101408284031215611e98575f5ffd5b611ea0611d6c565b823581529050602082013567ffffffffffffffff811115611ebf575f5ffd5b611ecb84828501611e2b565b602083015250604082013567ffffffffffffffff811115611eea575f5ffd5b611ef684828501611e2b565b604083015250611f0860608301611e50565b6060820152611f1960808301611e50565b6080820152611f2a60a08301611e50565b60a082015260c0828101359082015260e08083013590820152611f506101008301611e78565b610100820152611f636101208301611e78565b61012082015292915050565b5f60608284031215611f7f575f5ffd5b6040516060810167ffffffffffffffff81118282101715611fa257611fa2611d3f565b60405282358152905080611fb860208401611e50565b6020820152604083013567ffffffffffffffff811115611fd6575f5ffd5b8301601f81018513611fe6575f5ffd5b611ff585823560208401611d96565b6040830152505092915050565b5f5f5f5f60608587031215612015575f5ffd5b843567ffffffffffffffff81111561202b575f5ffd5b61203787828801611e87565b945050602085013567ffffffffffffffff811115612053575f5ffd5b8501601f81018713612063575f5ffd5b803567ffffffffffffffff811115612079575f5ffd5b8760208260051b840101111561208d575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156120b0575f5ffd5b6120bc87828801611f6f565b91505092959194509250565b5f5f604083850312156120d9575f5ffd5b823567ffffffffffffffff8111156120ef575f5ffd5b6120fb85828601611e87565b925050602083013567ffffffffffffffff811115612117575f5ffd5b830160608186031215612128575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af612133565b5f60208284031215612183575f5ffd5b815160ff81168114611e49575f5ffd5b5f6107af3683611f6f565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121fd575f5ffd5b9190910192915050565b5f60208284031215612217575f5ffd5b611e4982611e50565b60ff82811682821603908111156107af576107af612133565b6001815b60018411156122745780850481111561225857612258612133565b600184161561226657908102905b60019390931c92800261223d565b935093915050565b5f8261228a575060016107af565b8161229657505f6107af565b81600181146122ac57600281146122b6576122d2565b60019150506107af565b60ff8411156122c7576122c7612133565b50506001821b6107af565b5060208310610133831016604e8410600b84101617156122f5575081810a6107af565b6123207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612239565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561235257612352612133565b029392505050565b5f611e4960ff84168361227c565b5f8261239b577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af612133565b808201808211156107af576107af612133565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f61249b6101208301846123ca565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f6124d460408301846123ca565b949350505050565b60208152815160208201525f602083015161014060408401526125036101608401826123ca565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261253e82826123ca565b9150506060840151612568608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516125d761012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156125ff575f5ffd5b611e4982611e78565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261263b575f5ffd5b83018035915067ffffffffffffffff821115612655575f5ffd5b602001915036819003821315612669575f5ffd5b9250929050565b5f5f8585111561267e575f5ffd5b8386111561268a575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126f6577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561271c575f5ffd5b505191905056fea26469706673582212208dd0242d8012ae09ecf1b970d8e3c452ecd22e8e820031003a993b19f4bace1f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_mayan";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "MAYAN";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMayan";
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
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMayan";
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
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actual";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ProtocolDataTooShort";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): MayanFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MayanFacet;
}
export {};
