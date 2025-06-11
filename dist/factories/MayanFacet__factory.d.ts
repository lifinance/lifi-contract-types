import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanFacet, MayanFacetInterface } from "../MayanFacet";
declare type MayanFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161282c38038061282c83398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516127946100985f395f8181607001528181610dba01528181610de50152610ed201526127945ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063bc98b5dc1461005f575b5f5ffd5b61004a61004536600461203d565b6100bb565b005b61004a61005a366004612103565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761219b565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061034491906121ae565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610bd0565b50479350505050818111156103ae576103ae5f846103a9858561219b565b610ffa565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610446344761219b565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c0015161102f565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb896121ce565b610bd0565b50479150508181111561060c5761060c5f846103a9858561219b565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561066060018561219b565b81811061066f5761066f6121d9565b90506020028101906106819190612206565b610692906080810190606001612242565b90505f61069e826110e3565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c5348261219b565b90505b5f6106d3888861112c565b90506106df8888611236565b6106ec8a898989856112a2565b5f826106f7856110e3565b610701919061219b565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac5761077260088361225b565b61077d90600a612395565b61078790846123a3565b925061079460088361225b565b61079f90600a612395565b6107a990846123db565b92505b50815b92915050565b6060604483511015610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610743565b5f835167ffffffffffffffff81111561083e5761083e611d7a565b6040519080825280601f01601f191660200182016040528015610868576020820181803683370190505b5090505f601885600381518110610881576108816121d9565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108c6576108c66121d9565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c906008908890600190811061090b5761090b6121d9565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061094a5761094a6121d9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109f75761010087516109f0919061219b565b91506109fc565b602491505b5f5b82811015610a6b57878181518110610a1857610a186121d9565b602001015160f81c60f81b858281518110610a3557610a356121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109fe565b505f86604051602001610a8091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b4557818181518110610acd57610acd6121d9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610aff86846123f2565b81518110610b0f57610b0f6121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610ab2565b505f610b528460206123f2565b90505b8851811015610bc357888181518110610b7057610b706121d9565b602001015160f81c60f81b868281518110610b8d57610b8d6121d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b55565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cbd578051610c5f5780516040517f4c568e5900000000000000000000000000000000000000000000000000000000815260048101919091525f6024820152604401610743565b5f610c6d82604001516115da565b82519091508114610cb75781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610743565b50610d60565b5f610ccb82604001516115da565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d5e5760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d906040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e8657610de383608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516116cd565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e54959493929190612451565b5f604051808303815f87803b158015610e6b575f5ffd5b505af1158015610e7d573d5f5f3e3d5ffd5b50505050610f36565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f07926004016124e1565b5f604051808303818588803b158015610f1e575f5ffd5b505af1158015610f30573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fbe5760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fed9190612517565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f82826116f9565b505050565b61101f838383611766565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff83163330846117d4565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff83163061182c565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561114957611149611d7a565b604051908082528060200260200182016040528015611172578160200160208202803683370190505b5090505f805b8381101561122b57868682818110611192576111926121d9565b90506020028101906111a49190612206565b6111b5906080810190606001612242565b91506111c0826110e3565b8382815181106111d2576111d26121d9565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611223573483828151811061120b5761120b6121d9565b6020026020010181815161121f919061219b565b9052505b600101611178565b509095945050505050565b5f5b8181101561101f5736838383818110611253576112536121d9565b90506020028101906112659190612206565b905061127760e0820160c0830161262a565b156112995761129961128f6060830160408401612242565b826080013561102f565b50600101611238565b8383838382805f5b8181101561144b57368b8b838181106112c5576112c56121d9565b90506020028101906112d79190612206565b90506113066112ec6060830160408401612242565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611368575061136861131f6040830160208401612242565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561137f575061137f61131f6020830183612242565b8015611402575061140261139660a0830183612643565b6113a4916004915f916126ab565b6113ad916126d2565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611438576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114428d8261185f565b506001016112aa565b505080600114611564575f858561146360018561219b565b818110611472576114726121d9565b90506020028101906114849190612206565b611495906080810190606001612242565b90505f805b6114a560018561219b565b811015611560575f8888838181106114bf576114bf6121d9565b90506020028101906114d19190612206565b6114e2906080810190606001612242565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461155757858281518110611529576115296121d9565b602002602001015161153a826110e3565b611544919061219b565b9250821561155757611557818885610ffa565b5060010161149a565b5050505b5f5b818110156115cd575f868683818110611581576115816121d9565b90506020028101906115939190612206565b6115a4906060810190604001612242565b90505f6115b0826110e3565b905080156115c3576115c3828783610ffa565b5050600101611566565b5050505050505050505050565b60208101515f9060e081901c806394454a5d8114611673576332ad465f811461167f5763afd9b706811461168b57636111ad25811461169757631eb1cff081146116975763b866e17381146116a357638e8d142b81146116b057631c59b7fc811461168b57639be95bb4811461167f57632072197f81146116735763f58b6de8811461167f57632337e23681146116bd575f93506116c5565b60a485015193506116c5565b60c485015193506116c5565b608485015193506116c5565b60e485015193506116c5565b61010485015193506116c5565b61014485015193506116c5565b60e485015193505b505050919050565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611acf565b73ffffffffffffffffffffffffffffffffffffffff8216611746576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611bfc565b73ffffffffffffffffffffffffffffffffffffffff82166117b3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611c15565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661181f57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61187461186f6020830183612242565b611c5e565b6118aa576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118e9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6118fd6112ec6060850160408601612242565b611907575f61190d565b82608001355b90505f6119286119236080860160608701612242565b6110e3565b9050815f0361195e5761195e6119446060860160408701612242565b6119546040870160208801612242565b86608001356116cd565b5f8061196d6020870187612242565b73ffffffffffffffffffffffffffffffffffffffff168461199160a0890189612643565b60405161199f929190612738565b5f6040518083038185875af1925050503d805f81146119d9576040519150601f19603f3d011682016040523d82523d5f602084013e6119de565b606091505b5091509150816119f1576119f181611cf2565b5f611a056119236080890160608a01612242565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a3660208a018a612242565b611a4660608b0160408c01612242565b611a5660808c0160608d01612242565b8b60800135898711611a685786611a72565b611a728a8861219b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611bf65773ffffffffffffffffffffffffffffffffffffffff8316611b38576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611bab573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bcf9190612747565b1015611bf657611bf673ffffffffffffffffffffffffffffffffffffffff85168483611cfc565b50505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c55576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611ce957506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c55575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c5557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611dcb57611dcb611d7a565b60405290565b5f5f67ffffffffffffffff841115611deb57611deb611d7a565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611e3857611e38611d7a565b604052838152905080828401851015611e4f575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611e75575f5ffd5b611e8483833560208501611dd1565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611eae575f5ffd5b919050565b80358015158114611eae575f5ffd5b5f6101408284031215611ed3575f5ffd5b611edb611da7565b823581529050602082013567ffffffffffffffff811115611efa575f5ffd5b611f0684828501611e66565b602083015250604082013567ffffffffffffffff811115611f25575f5ffd5b611f3184828501611e66565b604083015250611f4360608301611e8b565b6060820152611f5460808301611e8b565b6080820152611f6560a08301611e8b565b60a082015260c0828101359082015260e08083013590820152611f8b6101008301611eb3565b610100820152611f9e6101208301611eb3565b61012082015292915050565b5f60608284031215611fba575f5ffd5b6040516060810167ffffffffffffffff81118282101715611fdd57611fdd611d7a565b60405282358152905080611ff360208401611e8b565b6020820152604083013567ffffffffffffffff811115612011575f5ffd5b8301601f81018513612021575f5ffd5b61203085823560208401611dd1565b6040830152505092915050565b5f5f5f5f60608587031215612050575f5ffd5b843567ffffffffffffffff811115612066575f5ffd5b61207287828801611ec2565b945050602085013567ffffffffffffffff81111561208e575f5ffd5b8501601f8101871361209e575f5ffd5b803567ffffffffffffffff8111156120b4575f5ffd5b8760208260051b84010111156120c8575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156120eb575f5ffd5b6120f787828801611faa565b91505092959194509250565b5f5f60408385031215612114575f5ffd5b823567ffffffffffffffff81111561212a575f5ffd5b61213685828601611ec2565b925050602083013567ffffffffffffffff811115612152575f5ffd5b830160608186031215612163575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af61216e565b5f602082840312156121be575f5ffd5b815160ff81168114611e84575f5ffd5b5f6107af3683611faa565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612238575f5ffd5b9190910192915050565b5f60208284031215612252575f5ffd5b611e8482611e8b565b60ff82811682821603908111156107af576107af61216e565b6001815b60018411156122af578085048111156122935761229361216e565b60018416156122a157908102905b60019390931c928002612278565b935093915050565b5f826122c5575060016107af565b816122d157505f6107af565b81600181146122e757600281146122f15761230d565b60019150506107af565b60ff8411156123025761230261216e565b50506001821b6107af565b5060208310610133831016604e8410600b8410161715612330575081810a6107af565b61235b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612274565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561238d5761238d61216e565b029392505050565b5f611e8460ff8416836122b7565b5f826123d6577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af61216e565b808201808211156107af576107af61216e565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f6124d6610120830184612405565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f61250f6040830184612405565b949350505050565b60208152815160208201525f6020830151610140604084015261253e610160840182612405565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125798282612405565b91505060608401516125a3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161261261012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561263a575f5ffd5b611e8482611eb3565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612676575f5ffd5b83018035915067ffffffffffffffff821115612690575f5ffd5b6020019150368190038213156126a4575f5ffd5b9250929050565b5f5f858511156126b9575f5ffd5b838611156126c5575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612731577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612757575f5ffd5b505191905056fea2646970667358221220c762333a7840cc35f1228178db39dd8fa8fd5696e5a7276f090c25ad8710007264736f6c634300081d0033";
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
        readonly name: "mayan";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "actual";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): MayanFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MayanFacet;
}
export {};
