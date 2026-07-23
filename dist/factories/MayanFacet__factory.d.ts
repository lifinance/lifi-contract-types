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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612ab3380380612ab383398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516129f46100bf5f395f8181607001528181610d7b01528181610da60152610e9301526129f45ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063ce90a7211461005f575b5f5ffd5b61004a610045366004612280565b6100bb565b005b61004a61005a366004612346565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476123de565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061034491906123f1565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610ba0565b50479350505050818111156103ae576103ae5f846103a985856123de565b610fbb565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61044634476123de565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c00151610ff0565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb89612411565b610ba0565b50479150508181111561060c5761060c5f846103a985856123de565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856106606001856123de565b81811061066f5761066f61241c565b90506020028101906106819190612449565b610692906080810190606001612485565b90505f61069e826110a4565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c534826123de565b90505b5f6106d388886110ed565b90506106df88886111f7565b6106ec8a89898985611263565b5f826106f7856110a4565b61070191906123de565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac5761077260088361249e565b61077d90600a6125d8565b61078790846125e6565b925061079460088361249e565b61079f90600a6125d8565b6107a9908461261e565b92505b50815b92915050565b60606044835110156107f3576040517f5168114300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f835167ffffffffffffffff81111561080e5761080e611fb1565b6040519080825280601f01601f191660200182016040528015610838576020820181803683370190505b5090505f6018856003815181106108515761085161241c565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108965761089661241c565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106108db576108db61241c565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061091a5761091a61241c565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109c75761010087516109c091906123de565b91506109cc565b602491505b5f5b82811015610a3b578781815181106109e8576109e861241c565b602001015160f81c60f81b858281518110610a0557610a0561241c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109ce565b505f86604051602001610a5091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b1557818181518110610a9d57610a9d61241c565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610acf8684612635565b81518110610adf57610adf61241c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610a82565b505f610b22846020612635565b90505b8851811015610b9357888181518110610b4057610b4061241c565b602001015160f81c60f81b868281518110610b5d57610b5d61241c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b25565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610c79578051610c23576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610c3682604001518460e001516114ab565b82519091508114610c73576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d21565b5f610c8c82604001518460e001516114ab565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d1f5760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d516040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e4757610da483608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516115e5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e15959493929190612694565b5f604051808303815f87803b158015610e2c575f5ffd5b505af1158015610e3e573d5f5f3e3d5ffd5b50505050610ef7565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610ec892600401612724565b5f604051808303818588803b158015610edf575f5ffd5b505af1158015610ef1573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610f7f5760e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fae919061275a565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fe557610fe08282611611565b505050565b610fe083838361167e565b805f03611029576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611082578034101561107e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61107e73ffffffffffffffffffffffffffffffffffffffff83163330846117c9565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110e6576110e173ffffffffffffffffffffffffffffffffffffffff831630611821565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561110a5761110a611fb1565b604051908082528060200260200182016040528015611133578160200160208202803683370190505b5090505f5f5b838110156111ec578686828181106111535761115361241c565b90506020028101906111659190612449565b611176906080810190606001612485565b9150611181826110a4565b8382815181106111935761119361241c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111e457348382815181106111cc576111cc61241c565b602002602001018181516111e091906123de565b9052505b600101611139565b509095945050505050565b5f5b81811015610fe057368383838181106112145761121461241c565b90506020028101906112269190612449565b905061123860e0820160c0830161286d565b1561125a5761125a6112506060830160408401612485565b8260800135610ff0565b506001016111f9565b83838383825f80805b8381101561148f57368c8c838181106112875761128761241c565b90506020028101906112999190612449565b90506112a86020820182612485565b93506112ba6040820160208301612485565b925061135d846112cd60a0840184612888565b6112db916004915f916128f0565b6112e491612917565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061144557506113916113776060830160408401612485565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156113ca57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611445575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561147c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114868e82611854565b5060010161126c565b505050506114a0848484845f611ac7565b505050505050505050565b5f61053982036114c6576114be83611cde565b9050806107af575b602083015160e081901c8063a3a30834811461158957636147435b8114611589576394454a5d8114611589576332ad465f81146115955763afd9b70681146115a157636111ad2581146115ad57631eb1cff081146115ad5763b866e17381146115b957638e8d142b81146115c657631c59b7fc81146115a157639be95bb4811461159557632072197f81146115895763f58b6de8811461159557632337e23681146115ad5763e27dce3781146115ad57634d1ed73b81146115d3575f93506115dc565b60a486015193506115dc565b60c486015193506115dc565b608486015193506115dc565b60e486015193506115dc565b61010486015193506115dc565b61014486015193506115dc565b61016486015193505b50505092915050565b610fe08383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611da0565b73ffffffffffffffffffffffffffffffffffffffff821661165e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107e73ffffffffffffffffffffffffffffffffffffffff831682611ec7565b73ffffffffffffffffffffffffffffffffffffffff82166116cb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015611707575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156117a8576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af115801561177e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a2919061297d565b50505050565b610fe073ffffffffffffffffffffffffffffffffffffffff84168383611ee0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661181457637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61186c6118646020830183612485565b6017903b1190565b6118a2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036118e1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6118f56113776060850160408601612485565b6118ff575f611905565b82608001355b90505f61192061191b6080860160608701612485565b6110a4565b9050815f036119565761195661193c6060860160408701612485565b61194c6040870160208801612485565b86608001356115e5565b5f806119656020870187612485565b73ffffffffffffffffffffffffffffffffffffffff168461198960a0890189612888565b604051611997929190612998565b5f6040518083038185875af1925050503d805f81146119d1576040519150601f19603f3d011682016040523d82523d5f602084013e6119d6565b606091505b5091509150816119e9576119e981611f29565b5f6119fd61191b6080890160608a01612485565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611a2e60208a018a612485565b611a3e60608b0160408c01612485565b611a4e60808c0160608d01612485565b8b60800135898711611a605786611a6a565b611a6a8a886123de565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611ad66001826123de565b818110611ae557611ae561241c565b9050602002810190611af79190612449565b611b08906080810190606001612485565b90505f5f5f5f5f5f5f5b88811015611cce57611b2560018a6123de565b81108015611b34575088600114155b15611c0f578d8d82818110611b4b57611b4b61241c565b9050602002810190611b5d9190612449565b611b6e906080810190606001612485565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611c0f578a8181518110611bb557611bb561241c565b6020026020010151611bc6876110a4565b611bd091906123de565b965073ffffffffffffffffffffffffffffffffffffffff861615611bf4575f611bf6565b895b935083871115611c0f57611c0f868d6103a9878b6123de565b8d8d82818110611c2157611c2161241c565b9050602002810190611c339190612449565b611c44906060810190604001612485565b9450611c4f856110a4565b925073ffffffffffffffffffffffffffffffffffffffff851615611c73575f611c75565b895b91508183118015611cb257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611cc657611cc6858d6103a985876123de565b600101611b12565b5050505050505050505050505050565b6020810180515f9160e082901c8063a3a308348114611d0a57636147435b8114611d53575f9450611d97565b602f60a48401511460026044850151147356032241c0adab58a29b13e94fb595a4bc414e33608486015114161615611d4e5761020483015160248401015160601c94505b611d97565b602f60a48401511460026044850151147356032241c0adab58a29b13e94fb595a4bc414e33608486015114161615611d975761020483015160248401015160601c94505b50505050919050565b73ffffffffffffffffffffffffffffffffffffffff8416156117a25773ffffffffffffffffffffffffffffffffffffffff8316611e09576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611e7c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ea091906129a7565b10156117a2576117a273ffffffffffffffffffffffffffffffffffffffff85168483611f33565b5f385f3884865af161107e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611f20576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611f20575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611f2057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561200257612002611fb1565b60405290565b5f5f67ffffffffffffffff84111561202257612022611fb1565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff8211171561206f5761206f611fb1565b604052838152905080828401851015612086575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f8301126120ac575f5ffd5b6120bb83833560208501612008565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120e5575f5ffd5b919050565b80151581146120f7575f5ffd5b50565b80356120e5816120ea565b5f6101408284031215612116575f5ffd5b61211e611fde565b823581529050602082013567ffffffffffffffff81111561213d575f5ffd5b6121498482850161209d565b602083015250604082013567ffffffffffffffff811115612168575f5ffd5b6121748482850161209d565b604083015250612186606083016120c2565b6060820152612197608083016120c2565b60808201526121a860a083016120c2565b60a082015260c0828101359082015260e080830135908201526121ce61010083016120fa565b6101008201526121e161012083016120fa565b61012082015292915050565b5f606082840312156121fd575f5ffd5b6040516060810167ffffffffffffffff8111828210171561222057612220611fb1565b60405282358152905080612236602084016120c2565b6020820152604083013567ffffffffffffffff811115612254575f5ffd5b8301601f81018513612264575f5ffd5b61227385823560208401612008565b6040830152505092915050565b5f5f5f5f60608587031215612293575f5ffd5b843567ffffffffffffffff8111156122a9575f5ffd5b6122b587828801612105565b945050602085013567ffffffffffffffff8111156122d1575f5ffd5b8501601f810187136122e1575f5ffd5b803567ffffffffffffffff8111156122f7575f5ffd5b8760208260051b840101111561230b575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561232e575f5ffd5b61233a878288016121ed565b91505092959194509250565b5f5f60408385031215612357575f5ffd5b823567ffffffffffffffff81111561236d575f5ffd5b61237985828601612105565b925050602083013567ffffffffffffffff811115612395575f5ffd5b8301606081860312156123a6575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af6123b1565b5f60208284031215612401575f5ffd5b815160ff811681146120bb575f5ffd5b5f6107af36836121ed565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261247b575f5ffd5b9190910192915050565b5f60208284031215612495575f5ffd5b6120bb826120c2565b60ff82811682821603908111156107af576107af6123b1565b6001815b60018411156124f2578085048111156124d6576124d66123b1565b60018416156124e457908102905b60019390931c9280026124bb565b935093915050565b5f82612508575060016107af565b8161251457505f6107af565b816001811461252a576002811461253457612550565b60019150506107af565b60ff841115612545576125456123b1565b50506001821b6107af565b5060208310610133831016604e8410600b8410161715612573575081810a6107af565b61259e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846124b7565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156125d0576125d06123b1565b029392505050565b5f6120bb60ff8416836124fa565b5f82612619577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af6123b1565b808201808211156107af576107af6123b1565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f612719610120830184612648565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f6127526040830184612648565b949350505050565b60208152815160208201525f60208301516101406040840152612781610160840182612648565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526127bc8282612648565b91505060608401516127e6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161285561012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561287d575f5ffd5b81356120bb816120ea565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126128bb575f5ffd5b83018035915067ffffffffffffffff8211156128d5575f5ffd5b6020019150368190038213156128e9575f5ffd5b9250929050565b5f5f858511156128fe575f5ffd5b8386111561290a575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612976577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f6020828403121561298d575f5ffd5b81516120bb816120ea565b818382375f9101908152919050565b5f602082840312156129b7575f5ffd5b505191905056fea26469706673582212207e69f94c6cc6a6d0ca413ea13e7570ea9b8a66169baccb3ccc8cf80d410b1bae64736f6c634300081d0033";
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
