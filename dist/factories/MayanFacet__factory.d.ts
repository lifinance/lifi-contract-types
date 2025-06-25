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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028b4380380620028b4833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161280c620000a860003960008181607301528181610dd801528181610e030152610ef5015261280c6000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c61004736600461207f565b6100be565b005b61004c61005c36600461213e565b6103c6565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476121d8565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610626565b60c08b015260808a015160009073ffffffffffffffffffffffffffffffffffffffff161580610352578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d91906121eb565b610355565b60125b60ff1691506103688c60c001518361076e565b60c08d01528061038a5761038489604001518d60c001516107ca565b60408a01525b6103948c8a610bef565b50479350505050818111156103b8576103b86000846103b385856121d8565b611021565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610441576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061045234476121d8565b9050846104778160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610529576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610567576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b788608001518960c00151611056565b608088015173ffffffffffffffffffffffffffffffffffffffff166105eb576105e58860c00151601261076e565b60c08901525b6105fd886105f88961220e565b610bef565b50479150508181111561061a5761061a6000846103b385856121d8565b50506000909155505050565b600082808203610662576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106716001856121d8565b8181106106805761068061221a565b90506020028101906106929190612249565b6106a3906080810190606001612287565b905060006106b08261110b565b905073ffffffffffffffffffffffffffffffffffffffff82166106da576106d734826121d8565b90505b60006106e68888611155565b90506106f28888611261565b6106ff8a898989856112ce565b60008261070b8561110b565b61071591906121d8565b905089811015610760576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600060088260ff1611156107c1576107876008836122a2565b61079290600a6123db565b61079c90846123ea565b92506107a96008836122a2565b6107b490600a6123db565b6107be9084612425565b92505b50815b92915050565b6060604483511015610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610757565b6000835167ffffffffffffffff81111561085457610854611db9565b6040519080825280601f01601f19166020018201604052801561087e576020820181803683370190505b50905060006018856003815181106108985761089861221a565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108dd576108dd61221a565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106109225761092261221a565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088906000906109625761096261221a565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016171717905060007f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000841601610a10576101008751610a0991906121d8565b9150610a15565b602491505b60005b82811015610a9057878181518110610a3257610a3261221a565b602001015160f81c60f81b858281518110610a4f57610a4f61221a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610a888161243c565b915050610a18565b50600086604051602001610aa691815260200190565b604051602081830303815290604052905060005b6020811015610b5857818181518110610ad557610ad561221a565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610b078684612474565b81518110610b1757610b1761221a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610b508161243c565b915050610aba565b506000610b66846020612474565b90505b8851811015610be257888181518110610b8457610b8461221a565b602001015160f81c60f81b868281518110610ba157610ba161221a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610bda8161243c565b915050610b69565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cde578051610c7f5780516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260006024820152604401610757565b6000610c8e8260400151611680565b82519091508114610cd85781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610757565b50610d83565b6000610ced8260400151611680565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d815760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610757565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610ea957610e0183608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611775565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e729594939291906124eb565b600060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b50505050610f5d565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f2a9260040161256a565b6000604051808303818588803b158015610f4357600080fd5b505af1158015610f57573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fe55760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161101491906125a1565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661104b5761104682826117a1565b505050565b61104683838361180e565b80600003611090576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110e957803410156110e5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110e573ffffffffffffffffffffffffffffffffffffffff831633308461187c565b600073ffffffffffffffffffffffffffffffffffffffff82161561114e5761114973ffffffffffffffffffffffffffffffffffffffff8316306118d9565b6107c4565b4792915050565b60608160008167ffffffffffffffff81111561117357611173611db9565b60405190808252806020026020018201604052801561119c578160200160208202803683370190505b5090506000805b83811015611256578686828181106111bd576111bd61221a565b90506020028101906111cf9190612249565b6111e0906080810190606001612287565b91506111eb8261110b565b8382815181106111fd576111fd61221a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661124e57348382815181106112365761123661221a565b6020026020010181815161124a91906121d8565b9052505b6001016111a3565b509095945050505050565b60005b81811015611046573683838381811061127f5761127f61221a565b90506020028101906112919190612249565b90506112a360e0820160c083016126b4565b156112c5576112c56112bb6060830160408401612287565b8260800135611056565b50600101611264565b83838383826001811461159b57600085856112ea6001856121d8565b8181106112f9576112f961221a565b905060200281019061130b9190612249565b61131c906080810190606001612287565b9050600089815b818110156114c757368d8d8381811061133e5761133e61221a565b90506020028101906113509190612249565b905061137f6113656060830160408401612287565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113e257506113e26113986040830160208401612287565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113f957506113f96113986020830183612287565b801561147e575061147e61141060a08301836126cf565b61141f9160049160009161273b565b61142891612765565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6114b4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114be8f8261190e565b50600101611323565b505060005b6114d76001856121d8565b8110156115935760008888838181106114f2576114f261221a565b90506020028101906115049190612249565b611515906080810190606001612287565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461158a5785828151811061155c5761155c61221a565b602002602001015161156d8261110b565b61157791906121d8565b9250821561158a5761158a818885611021565b506001016114cc565b505050611674565b8760005b8181101561167157368b8b838181106115ba576115ba61221a565b90506020028101906115cc9190612249565b90506115e16113656060830160408401612287565b806115fa57506115fa6113986040830160208401612287565b801561161157506116116113986020830183612287565b8015611628575061162861141060a08301836126cf565b61165e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116688d8261190e565b5060010161159f565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d811461171b576332ad465f81146117275763afd9b706811461173357636111ad25811461173f57631eb1cff0811461173f5763b866e173811461174b57638e8d142b811461175857631c59b7fc811461173357639be95bb4811461172757632072197f811461171b5763f58b6de8811461172757632337e2368114611765576000935061176d565b60a4850151935061176d565b60c4850151935061176d565b6084850151935061176d565b60e4850151935061176d565b610104850151935061176d565b610144850151935061176d565b60e485015193505b505050919050565b6110468383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b8b565b73ffffffffffffffffffffffffffffffffffffffff82166117ee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e573ffffffffffffffffffffffffffffffffffffffff831682611cba565b73ffffffffffffffffffffffffffffffffffffffff821661185b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104673ffffffffffffffffffffffffffffffffffffffff84168383611cd6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166118cb57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61192661191e6020830183612287565b6017903b1190565b61195c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361199c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119b16113656060850160408601612287565b6119bc5760006119c2565b82608001355b905060006119de6119d96080860160608701612287565b61110b565b905081600003611a1557611a156119fb6060860160408701612287565b611a0b6040870160208801612287565b8660800135611775565b600080611a256020870187612287565b73ffffffffffffffffffffffffffffffffffffffff1684611a4960a08901896126cf565b604051611a579291906127ad565b60006040518083038185875af1925050503d8060008114611a94576040519150601f19603f3d011682016040523d82523d6000602084013e611a99565b606091505b509150915081611aac57611aac81611d25565b6000611ac16119d96080890160608a01612287565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611af260208a018a612287565b611b0260608b0160408c01612287565b611b1260808c0160608d01612287565b8b60800135898711611b245786611b2e565b611b2e8a886121d8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611cb45773ffffffffffffffffffffffffffffffffffffffff8316611bf4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c8d91906127bd565b1015611cb457611cb473ffffffffffffffffffffffffffffffffffffffff85168483611d2f565b50505050565b60003860003884865af16110e55763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d1b576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d1b5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d1b57633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e0c57611e0c611db9565b60405290565b600067ffffffffffffffff80841115611e2d57611e2d611db9565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e7357611e73611db9565b81604052809350858152868686011115611e8c57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611eb757600080fd5b611ec683833560208501611e12565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ef157600080fd5b919050565b80358015158114611ef157600080fd5b60006101408284031215611f1957600080fd5b611f21611de8565b905081358152602082013567ffffffffffffffff80821115611f4257600080fd5b611f4e85838601611ea6565b60208401526040840135915080821115611f6757600080fd5b50611f7484828501611ea6565b604083015250611f8660608301611ecd565b6060820152611f9760808301611ecd565b6080820152611fa860a08301611ecd565b60a082015260c082013560c082015260e082013560e0820152610100611fcf818401611ef6565b90820152610120611fe1838201611ef6565b9082015292915050565b600060608284031215611ffd57600080fd5b6040516060810167ffffffffffffffff828210818311171561202157612021611db9565b816040528293508435835261203860208601611ecd565b6020840152604085013591508082111561205157600080fd5b508301601f8101851361206357600080fd5b61207285823560208401611e12565b6040830152505092915050565b6000806000806060858703121561209557600080fd5b843567ffffffffffffffff808211156120ad57600080fd5b6120b988838901611f06565b955060208701359150808211156120cf57600080fd5b818701915087601f8301126120e357600080fd5b8135818111156120f257600080fd5b8860208260051b850101111561210757600080fd5b60208301955080945050604087013591508082111561212557600080fd5b5061213287828801611feb565b91505092959194509250565b6000806040838503121561215157600080fd5b823567ffffffffffffffff8082111561216957600080fd5b61217586838701611f06565b9350602085013591508082111561218b57600080fd5b5083016060818603121561219e57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156107c4576107c46121a9565b6000602082840312156121fd57600080fd5b815160ff81168114611ec657600080fd5b60006107c43683611feb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261227d57600080fd5b9190910192915050565b60006020828403121561229957600080fd5b611ec682611ecd565b60ff82811682821603908111156107c4576107c46121a9565b600181815b8085111561231457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156122fa576122fa6121a9565b8085161561230757918102915b93841c93908002906122c0565b509250929050565b60008261232b575060016107c4565b81612338575060006107c4565b816001811461234e576002811461235857612374565b60019150506107c4565b60ff841115612369576123696121a9565b50506001821b6107c4565b5060208310610133831016604e8410600b8410161715612397575081810a6107c4565b6123a183836122bb565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156123d3576123d36121a9565b029392505050565b6000611ec660ff84168361231c565b600082612420577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176107c4576107c46121a9565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361246d5761246d6121a9565b5060010190565b808201808211156107c4576107c46121a9565b6000815180845260005b818110156124ad57602081850181015186830182015201612491565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff8089168452876020850152865160408501526020870151606085015260ff6040880151166080850152606087015160a0850152608087015160c085015280861660e0850152508061010084015261255e81840185612487565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006125996040830184612487565b949350505050565b6020815281516020820152600060208301516101408060408501526125ca610160850183612487565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126058382612487565b925050606085015161262f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126a28187018315159052565b90950151151593019290925250919050565b6000602082840312156126c657600080fd5b611ec682611ef6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261270457600080fd5b83018035915067ffffffffffffffff82111561271f57600080fd5b60200191503681900382131561273457600080fd5b9250929050565b6000808585111561274b57600080fd5b8386111561275857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127a55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156127cf57600080fd5b505191905056fea2646970667358221220e555f83b046e2ff6b9f8f2605216b2e89e7dbcc11c5879b70d7b6245830cd71464736f6c63430008110033";
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
