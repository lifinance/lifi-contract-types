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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161292538038061292583398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516128666100bf5f395f8181607001528181610d7f01528181610daa0152610e9701526128665ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063ce90a7211461005f575b5f5ffd5b61004a61004536600461210f565b6100bb565b005b61004a61005a3660046121d5565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761226d565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103449190612280565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610ba0565b50479350505050818111156103ae576103ae5f846103a9858561226d565b610fbf565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610446344761226d565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c00151610ff4565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb896122a0565b610ba0565b50479150508181111561060c5761060c5f846103a9858561226d565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561066060018561226d565b81811061066f5761066f6122ab565b905060200281019061068191906122d8565b610692906080810190606001612314565b90505f61069e826110a8565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c5348261226d565b90505b5f6106d388886110f1565b90506106df88886111fb565b6106ec8a89898985611267565b5f826106f7856110a8565b610701919061226d565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac5761077260088361232d565b61077d90600a612467565b6107879084612475565b925061079460088361232d565b61079f90600a612467565b6107a990846124ad565b92505b50815b92915050565b60606044835110156107f3576040517f5168114300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f835167ffffffffffffffff81111561080e5761080e611e4c565b6040519080825280601f01601f191660200182016040528015610838576020820181803683370190505b5090505f601885600381518110610851576108516122ab565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9060109087906002908110610896576108966122ab565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106108db576108db6122ab565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061091a5761091a6122ab565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109c75761010087516109c0919061226d565b91506109cc565b602491505b5f5b82811015610a3b578781815181106109e8576109e86122ab565b602001015160f81c60f81b858281518110610a0557610a056122ab565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109ce565b505f86604051602001610a5091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b1557818181518110610a9d57610a9d6122ab565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610acf86846124c4565b81518110610adf57610adf6122ab565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610a82565b505f610b228460206124c4565b90505b8851811015610b9357888181518110610b4057610b406122ab565b602001015160f81c60f81b868281518110610b5d57610b5d6122ab565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b25565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610c74578051610c23576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610c3182604001516114af565b82519091508114610c6e576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d25565b5f6105398360e0015114610c9457610c8f82604001516114af565b610ca1565b610ca182604001516115cf565b60a0840151909150819073ffffffffffffffffffffffffffffffffffffffff808316911614610d225760a08401516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b50505b610d556040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e4b57610da883608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611619565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e19959493929190612523565b5f604051808303815f87803b158015610e30575f5ffd5b505af1158015610e42573d5f5f3e3d5ffd5b50505050610efb565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610ecc926004016125b3565b5f604051808303818588803b158015610ee3575f5ffd5b505af1158015610ef5573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610f835760e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fb291906125e9565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fe957610fe48282611645565b505050565b610fe48383836116b2565b805f0361102d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110865780341015611082576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61108273ffffffffffffffffffffffffffffffffffffffff8316333084611720565b5f73ffffffffffffffffffffffffffffffffffffffff8216156110ea576110e573ffffffffffffffffffffffffffffffffffffffff831630611778565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561110e5761110e611e4c565b604051908082528060200260200182016040528015611137578160200160208202803683370190505b5090505f5f5b838110156111f057868682818110611157576111576122ab565b905060200281019061116991906122d8565b61117a906080810190606001612314565b9150611185826110a8565b838281518110611197576111976122ab565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111e857348382815181106111d0576111d06122ab565b602002602001018181516111e4919061226d565b9052505b60010161113d565b509095945050505050565b5f5b81811015610fe45736838383818110611218576112186122ab565b905060200281019061122a91906122d8565b905061123c60e0820160c083016126fc565b1561125e5761125e6112546060830160408401612314565b8260800135610ff4565b506001016111fd565b83838383825f80805b8381101561149357368c8c8381811061128b5761128b6122ab565b905060200281019061129d91906122d8565b90506112ac6020820182612314565b93506112be6040820160208301612314565b9250611361846112d160a0840184612715565b6112df916004915f9161277d565b6112e8916127a4565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611449575061139561137b6060830160408401612314565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156113ce57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611449575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611480576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61148a8e826117ab565b50600101611270565b505050506114a4848484845f611a1e565b505050505050505050565b60208101515f9060e081901c8063a3a30834811461157457636147435b8114611574576394454a5d8114611574576332ad465f81146115805763afd9b706811461158c57636111ad25811461159857631eb1cff081146115985763b866e17381146115a457638e8d142b81146115b157631c59b7fc811461158c57639be95bb4811461158057632072197f81146115745763f58b6de8811461158057632337e23681146115985763e27dce37811461159857634d1ed73b81146115be575f93506115c7565b60a485015193506115c7565b60c485015193506115c7565b608485015193506115c7565b60e485015193506115c7565b61010485015193506115c7565b61014485015193506115c7565b61016485015193505b505050919050565b60208101515f9060e081901c8063a3a3083481146115fa57636147435b811461160a575f93506115c7565b61026485015160601c93506115c7565b50505050610344015160601c90565b610fe48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c35565b73ffffffffffffffffffffffffffffffffffffffff8216611692576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61108273ffffffffffffffffffffffffffffffffffffffff831682611d62565b73ffffffffffffffffffffffffffffffffffffffff82166116ff576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe473ffffffffffffffffffffffffffffffffffffffff84168383611d7b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661176b57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6117c36117bb6020830183612314565b6017903b1190565b6117f9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611838576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61184c61137b6060850160408601612314565b611856575f61185c565b82608001355b90505f6118776118726080860160608701612314565b6110a8565b9050815f036118ad576118ad6118936060860160408701612314565b6118a36040870160208801612314565b8660800135611619565b5f806118bc6020870187612314565b73ffffffffffffffffffffffffffffffffffffffff16846118e060a0890189612715565b6040516118ee92919061280a565b5f6040518083038185875af1925050503d805f8114611928576040519150601f19603f3d011682016040523d82523d5f602084013e61192d565b606091505b5091509150816119405761194081611dc4565b5f6119546118726080890160608a01612314565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861198560208a018a612314565b61199560608b0160408c01612314565b6119a560808c0160608d01612314565b8b608001358987116119b757866119c1565b6119c18a8861226d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611a2d60018261226d565b818110611a3c57611a3c6122ab565b9050602002810190611a4e91906122d8565b611a5f906080810190606001612314565b90505f5f5f5f5f5f5f5b88811015611c2557611a7c60018a61226d565b81108015611a8b575088600114155b15611b66578d8d82818110611aa257611aa26122ab565b9050602002810190611ab491906122d8565b611ac5906080810190606001612314565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611b66578a8181518110611b0c57611b0c6122ab565b6020026020010151611b1d876110a8565b611b27919061226d565b965073ffffffffffffffffffffffffffffffffffffffff861615611b4b575f611b4d565b895b935083871115611b6657611b66868d6103a9878b61226d565b8d8d82818110611b7857611b786122ab565b9050602002810190611b8a91906122d8565b611b9b906060810190604001612314565b9450611ba6856110a8565b925073ffffffffffffffffffffffffffffffffffffffff851615611bca575f611bcc565b895b91508183118015611c0957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611c1d57611c1d858d6103a9858761226d565b600101611a69565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611d5c5773ffffffffffffffffffffffffffffffffffffffff8316611c9e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611d11573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d359190612819565b1015611d5c57611d5c73ffffffffffffffffffffffffffffffffffffffff85168483611dce565b50505050565b5f385f3884865af16110825763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611dbb576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611dbb575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611dbb57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e9d57611e9d611e4c565b60405290565b5f5f67ffffffffffffffff841115611ebd57611ebd611e4c565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611f0a57611f0a611e4c565b604052838152905080828401851015611f21575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611f47575f5ffd5b611f5683833560208501611ea3565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f80575f5ffd5b919050565b80358015158114611f80575f5ffd5b5f6101408284031215611fa5575f5ffd5b611fad611e79565b823581529050602082013567ffffffffffffffff811115611fcc575f5ffd5b611fd884828501611f38565b602083015250604082013567ffffffffffffffff811115611ff7575f5ffd5b61200384828501611f38565b60408301525061201560608301611f5d565b606082015261202660808301611f5d565b608082015261203760a08301611f5d565b60a082015260c0828101359082015260e0808301359082015261205d6101008301611f85565b6101008201526120706101208301611f85565b61012082015292915050565b5f6060828403121561208c575f5ffd5b6040516060810167ffffffffffffffff811182821017156120af576120af611e4c565b604052823581529050806120c560208401611f5d565b6020820152604083013567ffffffffffffffff8111156120e3575f5ffd5b8301601f810185136120f3575f5ffd5b61210285823560208401611ea3565b6040830152505092915050565b5f5f5f5f60608587031215612122575f5ffd5b843567ffffffffffffffff811115612138575f5ffd5b61214487828801611f94565b945050602085013567ffffffffffffffff811115612160575f5ffd5b8501601f81018713612170575f5ffd5b803567ffffffffffffffff811115612186575f5ffd5b8760208260051b840101111561219a575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156121bd575f5ffd5b6121c98782880161207c565b91505092959194509250565b5f5f604083850312156121e6575f5ffd5b823567ffffffffffffffff8111156121fc575f5ffd5b61220885828601611f94565b925050602083013567ffffffffffffffff811115612224575f5ffd5b830160608186031215612235575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af612240565b5f60208284031215612290575f5ffd5b815160ff81168114611f56575f5ffd5b5f6107af368361207c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261230a575f5ffd5b9190910192915050565b5f60208284031215612324575f5ffd5b611f5682611f5d565b60ff82811682821603908111156107af576107af612240565b6001815b60018411156123815780850481111561236557612365612240565b600184161561237357908102905b60019390931c92800261234a565b935093915050565b5f82612397575060016107af565b816123a357505f6107af565b81600181146123b957600281146123c3576123df565b60019150506107af565b60ff8411156123d4576123d4612240565b50506001821b6107af565b5060208310610133831016604e8410600b8410161715612402575081810a6107af565b61242d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612346565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561245f5761245f612240565b029392505050565b5f611f5660ff841683612389565b5f826124a8577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af612240565b808201808211156107af576107af612240565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f6125a86101208301846124d7565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f6125e160408301846124d7565b949350505050565b60208152815160208201525f602083015161014060408401526126106101608401826124d7565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261264b82826124d7565b9150506060840151612675608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516126e461012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561270c575f5ffd5b611f5682611f85565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612748575f5ffd5b83018035915067ffffffffffffffff821115612762575f5ffd5b602001915036819003821315612776575f5ffd5b9250929050565b5f5f8585111561278b575f5ffd5b83861115612797575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612803577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612829575f5ffd5b505191905056fea2646970667358221220bb6e7862f6aac0b6300f2373e912cb4b0a68025a35e8b0a63c423ca1e85fc36d64736f6c634300081d0033";
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
