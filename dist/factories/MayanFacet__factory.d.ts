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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516127ec3803806127ec83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161272d6100bf5f395f8181607001528181610d7101528181610d9c0152610e89015261272d5ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063ce90a7211461005f575b5f5ffd5b61004a610045366004611fd6565b6100bb565b005b61004a61005a36600461209c565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447612134565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103449190612147565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610ba0565b50479350505050818111156103ae576103ae5f846103a98585612134565b610fb1565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104463447612134565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c00151610fe6565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb89612167565b610ba0565b50479150508181111561060c5761060c5f846103a98585612134565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610660600185612134565b81811061066f5761066f612172565b9050602002810190610681919061219f565b6106929060808101906060016121db565b90505f61069e8261109a565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c53482612134565b90505b5f6106d388886110e3565b90506106df88886111ed565b6106ec8a89898985611259565b5f826106f78561109a565b6107019190612134565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac576107726008836121f4565b61077d90600a61232e565b610787908461233c565b92506107946008836121f4565b61079f90600a61232e565b6107a99084612374565b92505b50815b92915050565b60606044835110156107f3576040517f5168114300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f835167ffffffffffffffff81111561080e5761080e611d13565b6040519080825280601f01601f191660200182016040528015610838576020820181803683370190505b5090505f60188560038151811061085157610851612172565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c906010908790600290811061089657610896612172565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106108db576108db612172565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061091a5761091a612172565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109c75761010087516109c09190612134565b91506109cc565b602491505b5f5b82811015610a3b578781815181106109e8576109e8612172565b602001015160f81c60f81b858281518110610a0557610a05612172565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109ce565b505f86604051602001610a5091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b1557818181518110610a9d57610a9d612172565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610acf868461238b565b81518110610adf57610adf612172565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610a82565b505f610b2284602061238b565b90505b8851811015610b9357888181518110610b4057610b40612172565b602001015160f81c60f81b868281518110610b5d57610b5d612172565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b25565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610c74578051610c23576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610c318260400151611604565b82519091508114610c6e576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d17565b5f610c828260400151611604565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d155760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d476040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e3d57610d9a83608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516116f7565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e0b9594939291906123ea565b5f604051808303815f87803b158015610e22575f5ffd5b505af1158015610e34573d5f5f3e3d5ffd5b50505050610eed565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610ebe9260040161247a565b5f604051808303818588803b158015610ed5575f5ffd5b505af1158015610ee7573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610f755760e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fa491906124b0565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fdb57610fd68282611723565b505050565b610fd6838383611790565b805f0361101f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110785780341015611074576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61107473ffffffffffffffffffffffffffffffffffffffff83163330846117fe565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110dc576110d773ffffffffffffffffffffffffffffffffffffffff831630611856565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561110057611100611d13565b604051908082528060200260200182016040528015611129578160200160208202803683370190505b5090505f805b838110156111e25786868281811061114957611149612172565b905060200281019061115b919061219f565b61116c9060808101906060016121db565b91506111778261109a565b83828151811061118957611189612172565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111da57348382815181106111c2576111c2612172565b602002602001018181516111d69190612134565b9052505b60010161112f565b509095945050505050565b5f5b81811015610fd6573683838381811061120a5761120a612172565b905060200281019061121c919061219f565b905061122e60e0820160c083016125c3565b156112505761125061124660608301604084016121db565b8260800135610fe6565b506001016111ef565b838383838260018114611520575f8585611274600185612134565b81811061128357611283612172565b9050602002810190611295919061219f565b6112a69060808101906060016121db565b90505f89815b8181101561144d57368d8d838181106112c7576112c7612172565b90506020028101906112d9919061219f565b90506113086112ee60608301604084016121db565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061136a575061136a61132160408301602084016121db565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611381575061138161132160208301836121db565b8015611404575061140461139860a08301836125dc565b6113a6916004915f91612644565b6113af9161266b565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61143a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114448f82611889565b506001016112ac565b505f90505b61145d600185612134565b811015611518575f88888381811061147757611477612172565b9050602002810190611489919061219f565b61149a9060808101906060016121db565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461150f578582815181106114e1576114e1612172565b60200260200101516114f28261109a565b6114fc9190612134565b9250821561150f5761150f818885610fb1565b50600101611452565b5050506115f8565b875f5b818110156115f557368b8b8381811061153e5761153e612172565b9050602002810190611550919061219f565b90506115656112ee60608301604084016121db565b8061157e575061157e61132160408301602084016121db565b8015611595575061159561132160208301836121db565b80156115ac57506115ac61139860a08301836125dc565b6115e2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ec8d82611889565b50600101611523565b50505b50505050505050505050565b60208101515f9060e081901c806394454a5d811461169d576332ad465f81146116a95763afd9b70681146116b557636111ad2581146116c157631eb1cff081146116c15763b866e17381146116cd57638e8d142b81146116da57631c59b7fc81146116b557639be95bb481146116a957632072197f811461169d5763f58b6de881146116a957632337e23681146116e7575f93506116ef565b60a485015193506116ef565b60c485015193506116ef565b608485015193506116ef565b60e485015193506116ef565b61010485015193506116ef565b61014485015193506116ef565b60e485015193505b505050919050565b610fd68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611afc565b73ffffffffffffffffffffffffffffffffffffffff8216611770576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107473ffffffffffffffffffffffffffffffffffffffff831682611c29565b73ffffffffffffffffffffffffffffffffffffffff82166117dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fd673ffffffffffffffffffffffffffffffffffffffff84168383611c42565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661184957637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6118a161189960208301836121db565b6017903b1190565b6118d7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611916576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61192a6112ee60608501604086016121db565b611934575f61193a565b82608001355b90505f61195561195060808601606087016121db565b61109a565b9050815f0361198b5761198b61197160608601604087016121db565b61198160408701602088016121db565b86608001356116f7565b5f8061199a60208701876121db565b73ffffffffffffffffffffffffffffffffffffffff16846119be60a08901896125dc565b6040516119cc9291906126d1565b5f6040518083038185875af1925050503d805f8114611a06576040519150601f19603f3d011682016040523d82523d5f602084013e611a0b565b606091505b509150915081611a1e57611a1e81611c8b565b5f611a326119506080890160608a016121db565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a6360208a018a6121db565b611a7360608b0160408c016121db565b611a8360808c0160608d016121db565b8b60800135898711611a955786611a9f565b611a9f8a88612134565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611c235773ffffffffffffffffffffffffffffffffffffffff8316611b65576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611bd8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bfc91906126e0565b1015611c2357611c2373ffffffffffffffffffffffffffffffffffffffff85168483611c95565b50505050565b5f385f3884865af16110745763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c82576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c82575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c8257633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d6457611d64611d13565b60405290565b5f5f67ffffffffffffffff841115611d8457611d84611d13565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611dd157611dd1611d13565b604052838152905080828401851015611de8575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611e0e575f5ffd5b611e1d83833560208501611d6a565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e47575f5ffd5b919050565b80358015158114611e47575f5ffd5b5f6101408284031215611e6c575f5ffd5b611e74611d40565b823581529050602082013567ffffffffffffffff811115611e93575f5ffd5b611e9f84828501611dff565b602083015250604082013567ffffffffffffffff811115611ebe575f5ffd5b611eca84828501611dff565b604083015250611edc60608301611e24565b6060820152611eed60808301611e24565b6080820152611efe60a08301611e24565b60a082015260c0828101359082015260e08083013590820152611f246101008301611e4c565b610100820152611f376101208301611e4c565b61012082015292915050565b5f60608284031215611f53575f5ffd5b6040516060810167ffffffffffffffff81118282101715611f7657611f76611d13565b60405282358152905080611f8c60208401611e24565b6020820152604083013567ffffffffffffffff811115611faa575f5ffd5b8301601f81018513611fba575f5ffd5b611fc985823560208401611d6a565b6040830152505092915050565b5f5f5f5f60608587031215611fe9575f5ffd5b843567ffffffffffffffff811115611fff575f5ffd5b61200b87828801611e5b565b945050602085013567ffffffffffffffff811115612027575f5ffd5b8501601f81018713612037575f5ffd5b803567ffffffffffffffff81111561204d575f5ffd5b8760208260051b8401011115612061575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612084575f5ffd5b61209087828801611f43565b91505092959194509250565b5f5f604083850312156120ad575f5ffd5b823567ffffffffffffffff8111156120c3575f5ffd5b6120cf85828601611e5b565b925050602083013567ffffffffffffffff8111156120eb575f5ffd5b8301606081860312156120fc575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af612107565b5f60208284031215612157575f5ffd5b815160ff81168114611e1d575f5ffd5b5f6107af3683611f43565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126121d1575f5ffd5b9190910192915050565b5f602082840312156121eb575f5ffd5b611e1d82611e24565b60ff82811682821603908111156107af576107af612107565b6001815b60018411156122485780850481111561222c5761222c612107565b600184161561223a57908102905b60019390931c928002612211565b935093915050565b5f8261225e575060016107af565b8161226a57505f6107af565b8160018114612280576002811461228a576122a6565b60019150506107af565b60ff84111561229b5761229b612107565b50506001821b6107af565b5060208310610133831016604e8410600b84101617156122c9575081810a6107af565b6122f47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461220d565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561232657612326612107565b029392505050565b5f611e1d60ff841683612250565b5f8261236f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af612107565b808201808211156107af576107af612107565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f61246f61012083018461239e565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f6124a8604083018461239e565b949350505050565b60208152815160208201525f602083015161014060408401526124d761016084018261239e565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612512828261239e565b915050606084015161253c608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516125ab61012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156125d3575f5ffd5b611e1d82611e4c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261260f575f5ffd5b83018035915067ffffffffffffffff821115612629575f5ffd5b60200191503681900382131561263d575f5ffd5b9250929050565b5f5f85851115612652575f5ffd5b8386111561265e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126ca577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156126f0575f5ffd5b505191905056fea26469706673582212202492410685cf348e0274c80ba53d060cfd13081010fb6c026910464de5e0bda764736f6c634300081d0033";
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
