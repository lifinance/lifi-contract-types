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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200292d3803806200292d833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612885620000a860003960008181607301528181610dd801528181610e030152610ef501526128856000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c610047366004612100565b6100be565b005b61004c61005c3660046121bf565b6103c6565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612259565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610626565b60c08b015260808a015160009073ffffffffffffffffffffffffffffffffffffffff161580610352578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d919061226c565b610355565b60125b60ff1691506103688c60c001518361076e565b60c08d01528061038a5761038489604001518d60c001516107ca565b60408a01525b6103948c8a610bef565b50479350505050818111156103b8576103b86000846103b38585612259565b611021565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610441576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104523447612259565b9050846104778160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610529576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610567576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b788608001518960c00151611057565b608088015173ffffffffffffffffffffffffffffffffffffffff166105eb576105e58860c00151601261076e565b60c08901525b6105fd886105f88961228f565b610bef565b50479150508181111561061a5761061a6000846103b38585612259565b50506000909155505050565b600082808203610662576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610671600185612259565b8181106106805761068061229b565b905060200281019061069291906122ca565b6106a3906080810190606001612308565b905060006106b08261110c565b905073ffffffffffffffffffffffffffffffffffffffff82166106da576106d73482612259565b90505b60006106e68888611156565b90506106f28888611262565b6106ff8a898989856112cf565b60008261070b8561110c565b6107159190612259565b905089811015610760576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600060088260ff1611156107c157610787600883612323565b61079290600a61245c565b61079c908461246b565b92506107a9600883612323565b6107b490600a61245c565b6107be90846124a6565b92505b50815b92915050565b6060604483511015610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610757565b6000835167ffffffffffffffff81111561085457610854611e3a565b6040519080825280601f01601f19166020018201604052801561087e576020820181803683370190505b50905060006018856003815181106108985761089861229b565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108dd576108dd61229b565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106109225761092261229b565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088906000906109625761096261229b565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016171717905060007f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000841601610a10576101008751610a099190612259565b9150610a15565b602491505b60005b82811015610a9057878181518110610a3257610a3261229b565b602001015160f81c60f81b858281518110610a4f57610a4f61229b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610a88816124bd565b915050610a18565b50600086604051602001610aa691815260200190565b604051602081830303815290604052905060005b6020811015610b5857818181518110610ad557610ad561229b565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610b0786846124f5565b81518110610b1757610b1761229b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610b50816124bd565b915050610aba565b506000610b668460206124f5565b90505b8851811015610be257888181518110610b8457610b8461229b565b602001015160f81c60f81b868281518110610ba157610ba161229b565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610bda816124bd565b915050610b69565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cde578051610c7f5780516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260006024820152604401610757565b6000610c8e8260400151611681565b82519091508114610cd85781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610757565b50610d83565b6000610ced8260400151611681565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d815760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610757565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610ea957610e0183608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611776565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e7295949392919061256c565b600060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b50505050610f5d565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f2a926004016125eb565b6000604051808303818588803b158015610f4357600080fd5b505af1158015610f57573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fe55760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051611014919061261a565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83161561104d576110488383836117a2565b505050565b6110488282611810565b80600003611091576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110ea57803410156110e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110e673ffffffffffffffffffffffffffffffffffffffff831633308461187d565b600073ffffffffffffffffffffffffffffffffffffffff82161561114f5761114a73ffffffffffffffffffffffffffffffffffffffff8316306118da565b6107c4565b4792915050565b60608160008167ffffffffffffffff81111561117457611174611e3a565b60405190808252806020026020018201604052801561119d578160200160208202803683370190505b5090506000805b83811015611257578686828181106111be576111be61229b565b90506020028101906111d091906122ca565b6111e1906080810190606001612308565b91506111ec8261110c565b8382815181106111fe576111fe61229b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661124f57348382815181106112375761123761229b565b6020026020010181815161124b9190612259565b9052505b6001016111a4565b509095945050505050565b60005b8181101561104857368383838181106112805761128061229b565b905060200281019061129291906122ca565b90506112a460e0820160c0830161272d565b156112c6576112c66112bc6060830160408401612308565b8260800135611057565b50600101611265565b83838383826001811461159c57600085856112eb600185612259565b8181106112fa576112fa61229b565b905060200281019061130c91906122ca565b61131d906080810190606001612308565b9050600089815b818110156114c857368d8d8381811061133f5761133f61229b565b905060200281019061135191906122ca565b90506113806113666060830160408401612308565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113e357506113e36113996040830160208401612308565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113fa57506113fa6113996020830183612308565b801561147f575061147f61141160a0830183612748565b611420916004916000916127b4565b611429916127de565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114b5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114bf8f8261190f565b50600101611324565b505060005b6114d8600185612259565b8110156115945760008888838181106114f3576114f361229b565b905060200281019061150591906122ca565b611516906080810190606001612308565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461158b5785828151811061155d5761155d61229b565b602002602001015161156e8261110c565b6115789190612259565b9250821561158b5761158b818885611021565b506001016114cd565b505050611675565b8760005b8181101561167257368b8b838181106115bb576115bb61229b565b90506020028101906115cd91906122ca565b90506115e26113666060830160408401612308565b806115fb57506115fb6113996040830160208401612308565b801561161257506116126113996020830183612308565b8015611629575061162961141160a0830183612748565b61165f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116698d8261190f565b506001016115a0565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d811461171c576332ad465f81146117285763afd9b706811461173457636111ad25811461174057631eb1cff081146117405763b866e173811461174c57638e8d142b811461175957631c59b7fc811461173457639be95bb4811461172857632072197f811461171c5763f58b6de8811461172857632337e2368114611766576000935061176e565b60a4850151935061176e565b60c4850151935061176e565b6084850151935061176e565b60e4850151935061176e565b610104850151935061176e565b610144850151935061176e565b60e485015193505b505050919050565b6110488383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bec565b73ffffffffffffffffffffffffffffffffffffffff82166117ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104873ffffffffffffffffffffffffffffffffffffffff84168383611cff565b73ffffffffffffffffffffffffffffffffffffffff821661185d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e673ffffffffffffffffffffffffffffffffffffffff831682611d4e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166118cc57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61192461191f6020830183612308565b611d6a565b61195a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361199a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119af6113666060850160408601612308565b6119ba5760006119c0565b82608001355b905060006119dc6119d76060860160408701612308565b61110c565b905060006119f36119d76080870160608801612308565b905082600003611a2a57611a2a611a106060870160408801612308565b611a206040880160208901612308565b8760800135611776565b8460800135821015611a75576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610757565b600080611a856020880188612308565b73ffffffffffffffffffffffffffffffffffffffff1685611aa960a08a018a612748565b604051611ab7929190612826565b60006040518083038185875af1925050503d8060008114611af4576040519150601f19603f3d011682016040523d82523d6000602084013e611af9565b606091505b509150915081611b0c57611b0c81611da6565b6000611b216119d760808a0160608b01612308565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b5260208b018b612308565b611b6260608c0160408d01612308565b611b7260808d0160608e01612308565b8c60800135898711611b845786611b8e565b611b8e8a88612259565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611c39576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611cae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd29190612836565b1015611cf957611cf973ffffffffffffffffffffffffffffffffffffffff85168483611db0565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d44576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af16110e65763b12d13eb6000526004601cfd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590611d9e5750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d445760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d4457633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e8d57611e8d611e3a565b60405290565b600067ffffffffffffffff80841115611eae57611eae611e3a565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ef457611ef4611e3a565b81604052809350858152868686011115611f0d57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611f3857600080fd5b611f4783833560208501611e93565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f7257600080fd5b919050565b80358015158114611f7257600080fd5b60006101408284031215611f9a57600080fd5b611fa2611e69565b905081358152602082013567ffffffffffffffff80821115611fc357600080fd5b611fcf85838601611f27565b60208401526040840135915080821115611fe857600080fd5b50611ff584828501611f27565b60408301525061200760608301611f4e565b606082015261201860808301611f4e565b608082015261202960a08301611f4e565b60a082015260c082013560c082015260e082013560e0820152610100612050818401611f77565b90820152610120612062838201611f77565b9082015292915050565b60006060828403121561207e57600080fd5b6040516060810167ffffffffffffffff82821081831117156120a2576120a2611e3a565b81604052829350843583526120b960208601611f4e565b602084015260408501359150808211156120d257600080fd5b508301601f810185136120e457600080fd5b6120f385823560208401611e93565b6040830152505092915050565b6000806000806060858703121561211657600080fd5b843567ffffffffffffffff8082111561212e57600080fd5b61213a88838901611f87565b9550602087013591508082111561215057600080fd5b818701915087601f83011261216457600080fd5b81358181111561217357600080fd5b8860208260051b850101111561218857600080fd5b6020830195508094505060408701359150808211156121a657600080fd5b506121b38782880161206c565b91505092959194509250565b600080604083850312156121d257600080fd5b823567ffffffffffffffff808211156121ea57600080fd5b6121f686838701611f87565b9350602085013591508082111561220c57600080fd5b5083016060818603121561221f57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156107c4576107c461222a565b60006020828403121561227e57600080fd5b815160ff81168114611f4757600080fd5b60006107c4368361206c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122fe57600080fd5b9190910192915050565b60006020828403121561231a57600080fd5b611f4782611f4e565b60ff82811682821603908111156107c4576107c461222a565b600181815b8085111561239557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561237b5761237b61222a565b8085161561238857918102915b93841c9390800290612341565b509250929050565b6000826123ac575060016107c4565b816123b9575060006107c4565b81600181146123cf57600281146123d9576123f5565b60019150506107c4565b60ff8411156123ea576123ea61222a565b50506001821b6107c4565b5060208310610133831016604e8410600b8410161715612418575081810a6107c4565b612422838361233c565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156124545761245461222a565b029392505050565b6000611f4760ff84168361239d565b6000826124a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176107c4576107c461222a565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124ee576124ee61222a565b5060010190565b808201808211156107c4576107c461222a565b6000815180845260005b8181101561252e57602081850181015186830182015201612512565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff8089168452876020850152865160408501526020870151606085015260ff6040880151166080850152606087015160a0850152608087015160c085015280861660e085015250806101008401526125df81840185612508565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000611d9e6040830184612508565b602081528151602082015260006020830151610140806040850152612643610160850183612508565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261267e8382612508565b92505060608501516126a8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061271b8187018315159052565b90950151151593019290925250919050565b60006020828403121561273f57600080fd5b611f4782611f77565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261277d57600080fd5b83018035915067ffffffffffffffff82111561279857600080fd5b6020019150368190038213156127ad57600080fd5b9250929050565b600080858511156127c457600080fd5b838611156127d157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561281e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561284857600080fd5b505191905056fea26469706673582212207e036f6c311800ebfcf04fce4497ef57b68e956b3e42f2a0f66c094e7ee8adad64736f6c63430008110033";
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
