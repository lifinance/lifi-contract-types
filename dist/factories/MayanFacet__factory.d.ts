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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161299838038061299883398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516129006100985f395f8181607001528181610dba01528181610de50152610ed201526129005ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063bc98b5dc1461005f575b5f5ffd5b61004a61004536600461213d565b6100bb565b005b61004a61005a366004612203565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761229b565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061034491906122ae565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610bd0565b50479350505050818111156103ae576103ae5f846103a9858561229b565b610ffa565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610446344761229b565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c0015161102f565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb896122ce565b610bd0565b50479150508181111561060c5761060c5f846103a9858561229b565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561066060018561229b565b81811061066f5761066f6122d9565b90506020028101906106819190612306565b610692906080810190606001612342565b90505f61069e826110e3565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c5348261229b565b90505b5f6106d3888861112c565b90506106df8888611236565b6106ec8a898989856112a2565b5f826106f7856110e3565b610701919061229b565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac5761077260088361235b565b61077d90600a612495565b61078790846124a3565b925061079460088361235b565b61079f90600a612495565b6107a990846124db565b92505b50815b92915050565b6060604483511015610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610743565b5f835167ffffffffffffffff81111561083e5761083e611e7a565b6040519080825280601f01601f191660200182016040528015610868576020820181803683370190505b5090505f601885600381518110610881576108816122d9565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108c6576108c66122d9565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c906008908890600190811061090b5761090b6122d9565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061094a5761094a6122d9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109f75761010087516109f0919061229b565b91506109fc565b602491505b5f5b82811015610a6b57878181518110610a1857610a186122d9565b602001015160f81c60f81b858281518110610a3557610a356122d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109fe565b505f86604051602001610a8091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b4557818181518110610acd57610acd6122d9565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610aff86846124f2565b81518110610b0f57610b0f6122d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610ab2565b505f610b528460206124f2565b90505b8851811015610bc357888181518110610b7057610b706122d9565b602001015160f81c60f81b868281518110610b8d57610b8d6122d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b55565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cbd578051610c5f5780516040517f4c568e5900000000000000000000000000000000000000000000000000000000815260048101919091525f6024820152604401610743565b5f610c6d826040015161164d565b82519091508114610cb75781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610743565b50610d60565b5f610ccb826040015161164d565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d5e5760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d906040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e8657610de383608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611740565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e54959493929190612551565b5f604051808303815f87803b158015610e6b575f5ffd5b505af1158015610e7d573d5f5f3e3d5ffd5b50505050610f36565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f07926004016125e1565b5f604051808303818588803b158015610f1e575f5ffd5b505af1158015610f30573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fbe5760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fed9190612617565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f828261176c565b505050565b61101f8383836117d9565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff8316333084611847565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff83163061189f565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561114957611149611e7a565b604051908082528060200260200182016040528015611172578160200160208202803683370190505b5090505f805b8381101561122b57868682818110611192576111926122d9565b90506020028101906111a49190612306565b6111b5906080810190606001612342565b91506111c0826110e3565b8382815181106111d2576111d26122d9565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611223573483828151811061120b5761120b6122d9565b6020026020010181815161121f919061229b565b9052505b600101611178565b509095945050505050565b5f5b8181101561101f5736838383818110611253576112536122d9565b90506020028101906112659190612306565b905061127760e0820160c0830161272a565b156112995761129961128f6060830160408401612342565b826080013561102f565b50600101611238565b838383838260018114611569575f85856112bd60018561229b565b8181106112cc576112cc6122d9565b90506020028101906112de9190612306565b6112ef906080810190606001612342565b90505f89815b8181101561149657368d8d83818110611310576113106122d9565b90506020028101906113229190612306565b90506113516113376060830160408401612342565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113b357506113b361136a6040830160208401612342565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113ca57506113ca61136a6020830183612342565b801561144d575061144d6113e160a0830183612743565b6113ef916004915f916127ab565b6113f8916127d2565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611483576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61148d8f826118d2565b506001016112f5565b505f90505b6114a660018561229b565b811015611561575f8888838181106114c0576114c06122d9565b90506020028101906114d29190612306565b6114e3906080810190606001612342565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115585785828151811061152a5761152a6122d9565b602002602001015161153b826110e3565b611545919061229b565b9250821561155857611558818885610ffa565b5060010161149b565b505050611641565b875f5b8181101561163e57368b8b83818110611587576115876122d9565b90506020028101906115999190612306565b90506115ae6113376060830160408401612342565b806115c757506115c761136a6040830160208401612342565b80156115de57506115de61136a6020830183612342565b80156115f557506115f56113e160a0830183612743565b61162b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116358d826118d2565b5060010161156c565b50505b50505050505050505050565b60208101515f9060e081901c806394454a5d81146116e6576332ad465f81146116f25763afd9b70681146116fe57636111ad25811461170a57631eb1cff0811461170a5763b866e173811461171657638e8d142b811461172357631c59b7fc81146116fe57639be95bb481146116f257632072197f81146116e65763f58b6de881146116f257632337e2368114611730575f9350611738565b60a48501519350611738565b60c48501519350611738565b60848501519350611738565b60e48501519350611738565b6101048501519350611738565b6101448501519350611738565b60e485015193505b505050919050565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ba4565b73ffffffffffffffffffffffffffffffffffffffff82166117b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611cb5565b73ffffffffffffffffffffffffffffffffffffffff8216611826576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611cce565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661189257637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6118e76118e26020830183612342565b611d17565b61191d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361195c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6119706113376060850160408601612342565b61197a575f611980565b82608001355b90505f61199b6119966060860160408701612342565b6110e3565b90505f6119b16119966080870160608801612342565b9050825f036119e7576119e76119cd6060870160408801612342565b6119dd6040880160208901612342565b8760800135611740565b8460800135821015611a32576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610743565b5f80611a416020880188612342565b73ffffffffffffffffffffffffffffffffffffffff1685611a6560a08a018a612743565b604051611a73929190612838565b5f6040518083038185875af1925050503d805f8114611aad576040519150601f19603f3d011682016040523d82523d5f602084013e611ab2565b606091505b509150915081611ac557611ac581611df2565b5f611ad961199660808a0160608b01612342565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b0a60208b018b612342565b611b1a60608c0160408d01612342565b611b2a60808d0160608e01612342565b8c60800135898711611b3c5786611b46565b611b468a8861229b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611bf1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c64573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c889190612847565b1015611caf57611caf73ffffffffffffffffffffffffffffffffffffffff85168483611dfc565b50505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d0e576390b8ec185f526004601cfd5b5f603452505050565b6040805160038082528183019092525f91829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060035f60208401893c863f93505f611d9b8361285e565b90507fffffff000000000000000000000000000000000000000000000000000000000080851690821603611dd757506001979650505050505050565b5f86118015611de65750818514155b98975050505050505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611d0e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611d0e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ecb57611ecb611e7a565b60405290565b5f5f67ffffffffffffffff841115611eeb57611eeb611e7a565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611f3857611f38611e7a565b604052838152905080828401851015611f4f575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611f75575f5ffd5b611f8483833560208501611ed1565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fae575f5ffd5b919050565b80358015158114611fae575f5ffd5b5f6101408284031215611fd3575f5ffd5b611fdb611ea7565b823581529050602082013567ffffffffffffffff811115611ffa575f5ffd5b61200684828501611f66565b602083015250604082013567ffffffffffffffff811115612025575f5ffd5b61203184828501611f66565b60408301525061204360608301611f8b565b606082015261205460808301611f8b565b608082015261206560a08301611f8b565b60a082015260c0828101359082015260e0808301359082015261208b6101008301611fb3565b61010082015261209e6101208301611fb3565b61012082015292915050565b5f606082840312156120ba575f5ffd5b6040516060810167ffffffffffffffff811182821017156120dd576120dd611e7a565b604052823581529050806120f360208401611f8b565b6020820152604083013567ffffffffffffffff811115612111575f5ffd5b8301601f81018513612121575f5ffd5b61213085823560208401611ed1565b6040830152505092915050565b5f5f5f5f60608587031215612150575f5ffd5b843567ffffffffffffffff811115612166575f5ffd5b61217287828801611fc2565b945050602085013567ffffffffffffffff81111561218e575f5ffd5b8501601f8101871361219e575f5ffd5b803567ffffffffffffffff8111156121b4575f5ffd5b8760208260051b84010111156121c8575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121eb575f5ffd5b6121f7878288016120aa565b91505092959194509250565b5f5f60408385031215612214575f5ffd5b823567ffffffffffffffff81111561222a575f5ffd5b61223685828601611fc2565b925050602083013567ffffffffffffffff811115612252575f5ffd5b830160608186031215612263575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af61226e565b5f602082840312156122be575f5ffd5b815160ff81168114611f84575f5ffd5b5f6107af36836120aa565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612338575f5ffd5b9190910192915050565b5f60208284031215612352575f5ffd5b611f8482611f8b565b60ff82811682821603908111156107af576107af61226e565b6001815b60018411156123af578085048111156123935761239361226e565b60018416156123a157908102905b60019390931c928002612378565b935093915050565b5f826123c5575060016107af565b816123d157505f6107af565b81600181146123e757600281146123f15761240d565b60019150506107af565b60ff8411156124025761240261226e565b50506001821b6107af565b5060208310610133831016604e8410600b8410161715612430575081810a6107af565b61245b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612374565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561248d5761248d61226e565b029392505050565b5f611f8460ff8416836123b7565b5f826124d6577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af61226e565b808201808211156107af576107af61226e565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f6125d6610120830184612505565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f61260f6040830184612505565b949350505050565b60208152815160208201525f6020830151610140604084015261263e610160840182612505565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526126798282612505565b91505060608401516126a3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161271261012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561273a575f5ffd5b611f8482611fb3565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612776575f5ffd5b83018035915067ffffffffffffffff821115612790575f5ffd5b6020019150368190038213156127a4575f5ffd5b9250929050565b5f5f858511156127b9575f5ffd5b838611156127c5575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612831577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612857575f5ffd5b5051919050565b805160208201517fffffff00000000000000000000000000000000000000000000000000000000008116919060038210156128c3577fffffff0000000000000000000000000000000000000000000000000000000000808360030360031b1b82161692505b505091905056fea264697066735822122087dca583cbc181de8c4efffed728e496047b0d74412634f2fc53122db9893b1864736f6c634300081d0033";
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
