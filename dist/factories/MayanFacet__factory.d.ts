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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200290d3803806200290d833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612865620000a860003960008181607301528181610dd801528181610e030152610ef501526128656000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c6100473660046120e0565b6100be565b005b61004c61005c36600461219f565b6103c6565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612239565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610626565b60c08b015260808a015160009073ffffffffffffffffffffffffffffffffffffffff161580610352578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d919061224c565b610355565b60125b60ff1691506103688c60c001518361076e565b60c08d01528061038a5761038489604001518d60c001516107ca565b60408a01525b6103948c8a610bef565b50479350505050818111156103b8576103b86000846103b38585612239565b611021565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610441576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104523447612239565b9050846104778160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610529576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610567576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b788608001518960c00151611057565b608088015173ffffffffffffffffffffffffffffffffffffffff166105eb576105e58860c00151601261076e565b60c08901525b6105fd886105f88961226f565b610bef565b50479150508181111561061a5761061a6000846103b38585612239565b50506000909155505050565b600082808203610662576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610671600185612239565b8181106106805761068061227b565b905060200281019061069291906122aa565b6106a39060808101906060016122e8565b905060006106b08261110c565b905073ffffffffffffffffffffffffffffffffffffffff82166106da576106d73482612239565b90505b60006106e68888611156565b90506106f28888611262565b6106ff8a898989856112cf565b60008261070b8561110c565b6107159190612239565b905089811015610760576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600060088260ff1611156107c157610787600883612303565b61079290600a61243c565b61079c908461244b565b92506107a9600883612303565b6107b490600a61243c565b6107be9084612486565b92505b50815b92915050565b6060604483511015610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610757565b6000835167ffffffffffffffff81111561085457610854611e1a565b6040519080825280601f01601f19166020018201604052801561087e576020820181803683370190505b50905060006018856003815181106108985761089861227b565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108dd576108dd61227b565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106109225761092261227b565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088906000906109625761096261227b565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016171717905060007f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000841601610a10576101008751610a099190612239565b9150610a15565b602491505b60005b82811015610a9057878181518110610a3257610a3261227b565b602001015160f81c60f81b858281518110610a4f57610a4f61227b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610a888161249d565b915050610a18565b50600086604051602001610aa691815260200190565b604051602081830303815290604052905060005b6020811015610b5857818181518110610ad557610ad561227b565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610b0786846124d5565b81518110610b1757610b1761227b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610b508161249d565b915050610aba565b506000610b668460206124d5565b90505b8851811015610be257888181518110610b8457610b8461227b565b602001015160f81c60f81b868281518110610ba157610ba161227b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610bda8161249d565b915050610b69565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cde578051610c7f5780516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260006024820152604401610757565b6000610c8e8260400151611681565b82519091508114610cd85781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610757565b50610d83565b6000610ced8260400151611681565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d815760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610757565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610ea957610e0183608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611776565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e7295949392919061254c565b600060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b50505050610f5d565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f2a926004016125cb565b6000604051808303818588803b158015610f4357600080fd5b505af1158015610f57573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fe55760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161101491906125fa565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83161561104d576110488383836117a2565b505050565b6110488282611810565b80600003611091576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110ea57803410156110e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110e673ffffffffffffffffffffffffffffffffffffffff831633308461187d565b600073ffffffffffffffffffffffffffffffffffffffff82161561114f5761114a73ffffffffffffffffffffffffffffffffffffffff8316306118da565b6107c4565b4792915050565b60608160008167ffffffffffffffff81111561117457611174611e1a565b60405190808252806020026020018201604052801561119d578160200160208202803683370190505b5090506000805b83811015611257578686828181106111be576111be61227b565b90506020028101906111d091906122aa565b6111e19060808101906060016122e8565b91506111ec8261110c565b8382815181106111fe576111fe61227b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661124f57348382815181106112375761123761227b565b6020026020010181815161124b9190612239565b9052505b6001016111a4565b509095945050505050565b60005b8181101561104857368383838181106112805761128061227b565b905060200281019061129291906122aa565b90506112a460e0820160c0830161270d565b156112c6576112c66112bc60608301604084016122e8565b8260800135611057565b50600101611265565b83838383826001811461159c57600085856112eb600185612239565b8181106112fa576112fa61227b565b905060200281019061130c91906122aa565b61131d9060808101906060016122e8565b9050600089815b818110156114c857368d8d8381811061133f5761133f61227b565b905060200281019061135191906122aa565b905061138061136660608301604084016122e8565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113e357506113e361139960408301602084016122e8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113fa57506113fa61139960208301836122e8565b801561147f575061147f61141160a0830183612728565b61142091600491600091612794565b611429916127be565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114b5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114bf8f8261190f565b50600101611324565b505060005b6114d8600185612239565b8110156115945760008888838181106114f3576114f361227b565b905060200281019061150591906122aa565b6115169060808101906060016122e8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461158b5785828151811061155d5761155d61227b565b602002602001015161156e8261110c565b6115789190612239565b9250821561158b5761158b818885611021565b506001016114cd565b505050611675565b8760005b8181101561167257368b8b838181106115bb576115bb61227b565b90506020028101906115cd91906122aa565b90506115e261136660608301604084016122e8565b806115fb57506115fb61139960408301602084016122e8565b8015611612575061161261139960208301836122e8565b8015611629575061162961141160a0830183612728565b61165f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116698d8261190f565b506001016115a0565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d811461171c576332ad465f81146117285763afd9b706811461173457636111ad25811461174057631eb1cff081146117405763b866e173811461174c57638e8d142b811461175957631c59b7fc811461173457639be95bb4811461172857632072197f811461171c5763f58b6de8811461172857632337e2368114611766576000935061176e565b60a4850151935061176e565b60c4850151935061176e565b6084850151935061176e565b60e4850151935061176e565b610104850151935061176e565b610144850151935061176e565b60e485015193505b505050919050565b6110488383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bec565b73ffffffffffffffffffffffffffffffffffffffff82166117ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104873ffffffffffffffffffffffffffffffffffffffff84168383611cff565b73ffffffffffffffffffffffffffffffffffffffff821661185d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e673ffffffffffffffffffffffffffffffffffffffff831682611d4e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166118cc57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61192461191f60208301836122e8565b611d6a565b61195a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361199a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119af61136660608501604086016122e8565b6119ba5760006119c0565b82608001355b905060006119dc6119d760608601604087016122e8565b61110c565b905060006119f36119d760808701606088016122e8565b905082600003611a2a57611a2a611a1060608701604088016122e8565b611a2060408801602089016122e8565b8760800135611776565b8460800135821015611a75576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610757565b600080611a8560208801886122e8565b73ffffffffffffffffffffffffffffffffffffffff1685611aa960a08a018a612728565b604051611ab7929190612806565b60006040518083038185875af1925050503d8060008114611af4576040519150601f19603f3d011682016040523d82523d6000602084013e611af9565b606091505b509150915081611b0c57611b0c81611d86565b6000611b216119d760808a0160608b016122e8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b5260208b018b6122e8565b611b6260608c0160408d016122e8565b611b7260808d0160608e016122e8565b8c60800135898711611b845786611b8e565b611b8e8a88612239565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611c39576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd29190612816565b1015611cf957611cf973ffffffffffffffffffffffffffffffffffffffff85168483611d90565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d44576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af16110e65763b12d13eb6000526004601cfd5b6000813f818115801590611d7e5750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d445760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d4457633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e6d57611e6d611e1a565b60405290565b600067ffffffffffffffff80841115611e8e57611e8e611e1a565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ed457611ed4611e1a565b81604052809350858152868686011115611eed57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611f1857600080fd5b611f2783833560208501611e73565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f5257600080fd5b919050565b80358015158114611f5257600080fd5b60006101408284031215611f7a57600080fd5b611f82611e49565b905081358152602082013567ffffffffffffffff80821115611fa357600080fd5b611faf85838601611f07565b60208401526040840135915080821115611fc857600080fd5b50611fd584828501611f07565b604083015250611fe760608301611f2e565b6060820152611ff860808301611f2e565b608082015261200960a08301611f2e565b60a082015260c082013560c082015260e082013560e0820152610100612030818401611f57565b90820152610120612042838201611f57565b9082015292915050565b60006060828403121561205e57600080fd5b6040516060810167ffffffffffffffff828210818311171561208257612082611e1a565b816040528293508435835261209960208601611f2e565b602084015260408501359150808211156120b257600080fd5b508301601f810185136120c457600080fd5b6120d385823560208401611e73565b6040830152505092915050565b600080600080606085870312156120f657600080fd5b843567ffffffffffffffff8082111561210e57600080fd5b61211a88838901611f67565b9550602087013591508082111561213057600080fd5b818701915087601f83011261214457600080fd5b81358181111561215357600080fd5b8860208260051b850101111561216857600080fd5b60208301955080945050604087013591508082111561218657600080fd5b506121938782880161204c565b91505092959194509250565b600080604083850312156121b257600080fd5b823567ffffffffffffffff808211156121ca57600080fd5b6121d686838701611f67565b935060208501359150808211156121ec57600080fd5b508301606081860312156121ff57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156107c4576107c461220a565b60006020828403121561225e57600080fd5b815160ff81168114611f2757600080fd5b60006107c4368361204c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122de57600080fd5b9190910192915050565b6000602082840312156122fa57600080fd5b611f2782611f2e565b60ff82811682821603908111156107c4576107c461220a565b600181815b8085111561237557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561235b5761235b61220a565b8085161561236857918102915b93841c9390800290612321565b509250929050565b60008261238c575060016107c4565b81612399575060006107c4565b81600181146123af57600281146123b9576123d5565b60019150506107c4565b60ff8411156123ca576123ca61220a565b50506001821b6107c4565b5060208310610133831016604e8410600b84101617156123f8575081810a6107c4565b612402838361231c565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156124345761243461220a565b029392505050565b6000611f2760ff84168361237d565b600082612481577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176107c4576107c461220a565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124ce576124ce61220a565b5060010190565b808201808211156107c4576107c461220a565b6000815180845260005b8181101561250e576020818501810151868301820152016124f2565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff8089168452876020850152865160408501526020870151606085015260ff6040880151166080850152606087015160a0850152608087015160c085015280861660e085015250806101008401526125bf818401856124e8565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000611d7e60408301846124e8565b6020815281516020820152600060208301516101408060408501526126236101608501836124e8565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261265e83826124e8565b9250506060850151612688608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126fb8187018315159052565b90950151151593019290925250919050565b60006020828403121561271f57600080fd5b611f2782611f57565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261275d57600080fd5b83018035915067ffffffffffffffff82111561277857600080fd5b60200191503681900382131561278d57600080fd5b9250929050565b600080858511156127a457600080fd5b838611156127b157600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127fe5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561282857600080fd5b505191905056fea2646970667358221220c20fd4d2eeb36d8d0d4b5425266c77b0d43517e6dccf5766cc25e7255259361864736f6c63430008110033";
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
