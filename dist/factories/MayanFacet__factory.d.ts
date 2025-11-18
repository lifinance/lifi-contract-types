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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620028f4380380620028f483398101604081905262000034916200006e565b6001600160a01b0381166200005c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052620000a0565b6000602082840312156200008157600080fd5b81516001600160a01b03811681146200009957600080fd5b9392505050565b608051612824620000d060003960008181607301528181610d8e01528181610db90152610eab01526128246000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063ce90a72114610061575b600080fd5b61004c610047366004612097565b6100be565b005b61004c61005c366004612156565b6103c6565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476121f0565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610626565b60c08b015260808a015160009073ffffffffffffffffffffffffffffffffffffffff161580610352578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d9190612203565b610355565b60125b60ff1691506103688c60c001518361076e565b60c08d01528061038a5761038489604001518d60c001516107ca565b60408a01525b6103948c8a610bbf565b50479350505050818111156103b8576103b86000846103b385856121f0565b610fd7565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610441576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061045234476121f0565b9050846104778160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ae576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610529576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610567576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105a5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b788608001518960c0015161100c565b608088015173ffffffffffffffffffffffffffffffffffffffff166105eb576105e58860c00151601261076e565b60c08901525b6105fd886105f889612226565b610bbf565b50479150508181111561061a5761061a6000846103b385856121f0565b50506000909155505050565b600082808203610662576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106716001856121f0565b81811061068057610680612232565b90506020028101906106929190612261565b6106a390608081019060600161229f565b905060006106b0826110c1565b905073ffffffffffffffffffffffffffffffffffffffff82166106da576106d734826121f0565b90505b60006106e6888861110b565b90506106f2888861121f565b6106ff8a8989898561128c565b60008261070b856110c1565b61071591906121f0565b905089811015610760576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b600060088260ff1611156107c1576107876008836122ba565b61079290600a6123f3565b61079c9084612402565b92506107a96008836122ba565b6107b490600a6123f3565b6107be908461243d565b92505b50815b92915050565b6060604483511015610808576040517f5168114300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000835167ffffffffffffffff81111561082457610824611dd1565b6040519080825280601f01601f19166020018201604052801561084e576020820181803683370190505b509050600060188560038151811061086857610868612232565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108ad576108ad612232565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90600890889060019081106108f2576108f2612232565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90889060009061093257610932612232565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016171717905060007f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109e05761010087516109d991906121f0565b91506109e5565b602491505b60005b82811015610a6057878181518110610a0257610a02612232565b602001015160f81c60f81b858281518110610a1f57610a1f612232565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610a5881612454565b9150506109e8565b50600086604051602001610a7691815260200190565b604051602081830303815290604052905060005b6020811015610b2857818181518110610aa557610aa5612232565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610ad7868461248c565b81518110610ae757610ae7612232565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610b2081612454565b915050610a8a565b506000610b3684602061248c565b90505b8851811015610bb257888181518110610b5457610b54612232565b602001015160f81c60f81b868281518110610b7157610b71612232565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080610baa81612454565b915050610b39565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610c94578051610c42576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610c51826040015161145b565b82519091508114610c8e576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d39565b6000610ca3826040015161145b565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d375760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610757565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610e5f57610db783608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611567565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e28959493929190612503565b600060405180830381600087803b158015610e4257600080fd5b505af1158015610e56573d6000803e3d6000fd5b50505050610f13565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610ee092600401612582565b6000604051808303818588803b158015610ef957600080fd5b505af1158015610f0d573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610f9b5760e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fca91906125b9565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661100157610ffc8282611593565b505050565b610ffc838383611600565b80600003611046576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661109f578034101561109b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61109b73ffffffffffffffffffffffffffffffffffffffff831633308461166e565b600073ffffffffffffffffffffffffffffffffffffffff821615611104576110ff73ffffffffffffffffffffffffffffffffffffffff8316306116cb565b6107c4565b4792915050565b60608160008167ffffffffffffffff81111561112957611129611dd1565b604051908082528060200260200182016040528015611152578160200160208202803683370190505b5090506000805b838110156112145786868281811061117357611173612232565b90506020028101906111859190612261565b61119690608081019060600161229f565b91506111a1826110c1565b8382815181106111b3576111b3612232565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661120457348382815181106111ec576111ec612232565b6020026020010181815161120091906121f0565b9052505b61120d81612454565b9050611159565b509095945050505050565b60005b81811015610ffc573683838381811061123d5761123d612232565b905060200281019061124f9190612261565b905061126160e0820160c083016126cc565b1561128357611283611279606083016040840161229f565b826080013561100c565b50600101611222565b838383838260005b8181101561144057368a8a838181106112af576112af612232565b90506020028101906112c19190612261565b90506112f06112d6606083016040840161229f565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113535750611353611309604083016020840161229f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561136a575061136a611309602083018361229f565b80156113ef57506113ef61138160a08301836126e7565b61139091600491600091612753565b6113999161277d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611425576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61142f8c82611700565b5061143981612454565b9050611294565b505061145084848484600061197d565b505050505050505050565b602081015160009060e081901c806394454a5d811461150c576332ad465f81146115185763afd9b706811461152457636111ad25811461153057631eb1cff081146115305763b866e173811461153c57638e8d142b811461154957631c59b7fc811461152457639be95bb4811461151857632072197f811461150c5763f58b6de8811461151857632337e23681146115305763e27dce37811461153057634d1ed73b8114611556576000935061155f565b60a4850151935061155f565b60c4850151935061155f565b6084850151935061155f565b60e4850151935061155f565b610104850151935061155f565b610144850151935061155f565b61016485015193505b505050919050565b610ffc8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ba3565b73ffffffffffffffffffffffffffffffffffffffff82166115e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61109b73ffffffffffffffffffffffffffffffffffffffff831682611cd2565b73ffffffffffffffffffffffffffffffffffffffff821661164d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ffc73ffffffffffffffffffffffffffffffffffffffff84168383611cee565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166116bd57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b611718611710602083018361229f565b6017903b1190565b61174e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361178e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117a36112d6606085016040860161229f565b6117ae5760006117b4565b82608001355b905060006117d06117cb608086016060870161229f565b6110c1565b905081600003611807576118076117ed606086016040870161229f565b6117fd604087016020880161229f565b8660800135611567565b600080611817602087018761229f565b73ffffffffffffffffffffffffffffffffffffffff168461183b60a08901896126e7565b6040516118499291906127c5565b60006040518083038185875af1925050503d8060008114611886576040519150601f19603f3d011682016040523d82523d6000602084013e61188b565b606091505b50915091508161189e5761189e81611d3d565b60006118b36117cb6080890160608a0161229f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118e460208a018a61229f565b6118f460608b0160408c0161229f565b61190460808c0160608d0161229f565b8b608001358987116119165786611920565b6119208a886121f0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261198d6001826121f0565b81811061199c5761199c612232565b90506020028101906119ae9190612261565b6119bf90608081019060600161229f565b905060008060008060008060005b88811015611b93576119e060018a6121f0565b811080156119ef575088600114155b15611acb578d8d82818110611a0657611a06612232565b9050602002810190611a189190612261565b611a2990608081019060600161229f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611acb578a8181518110611a7057611a70612232565b6020026020010151611a81876110c1565b611a8b91906121f0565b965073ffffffffffffffffffffffffffffffffffffffff861615611ab0576000611ab2565b895b935083871115611acb57611acb868d6103b3878b6121f0565b8d8d82818110611add57611add612232565b9050602002810190611aef9190612261565b611b0090606081019060400161229f565b9450611b0b856110c1565b925073ffffffffffffffffffffffffffffffffffffffff851615611b30576000611b32565b895b91508183118015611b6f57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b8357611b83858d6103b385876121f0565b611b8c81612454565b90506119cd565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611ccc5773ffffffffffffffffffffffffffffffffffffffff8316611c0c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca591906127d5565b1015611ccc57611ccc73ffffffffffffffffffffffffffffffffffffffff85168483611d47565b50505050565b60003860003884865af161109b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611d33576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611d335760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611d3357633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e2457611e24611dd1565b60405290565b600067ffffffffffffffff80841115611e4557611e45611dd1565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e8b57611e8b611dd1565b81604052809350858152868686011115611ea457600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112611ecf57600080fd5b611ede83833560208501611e2a565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f0957600080fd5b919050565b80358015158114611f0957600080fd5b60006101408284031215611f3157600080fd5b611f39611e00565b905081358152602082013567ffffffffffffffff80821115611f5a57600080fd5b611f6685838601611ebe565b60208401526040840135915080821115611f7f57600080fd5b50611f8c84828501611ebe565b604083015250611f9e60608301611ee5565b6060820152611faf60808301611ee5565b6080820152611fc060a08301611ee5565b60a082015260c082013560c082015260e082013560e0820152610100611fe7818401611f0e565b90820152610120611ff9838201611f0e565b9082015292915050565b60006060828403121561201557600080fd5b6040516060810167ffffffffffffffff828210818311171561203957612039611dd1565b816040528293508435835261205060208601611ee5565b6020840152604085013591508082111561206957600080fd5b508301601f8101851361207b57600080fd5b61208a85823560208401611e2a565b6040830152505092915050565b600080600080606085870312156120ad57600080fd5b843567ffffffffffffffff808211156120c557600080fd5b6120d188838901611f1e565b955060208701359150808211156120e757600080fd5b818701915087601f8301126120fb57600080fd5b81358181111561210a57600080fd5b8860208260051b850101111561211f57600080fd5b60208301955080945050604087013591508082111561213d57600080fd5b5061214a87828801612003565b91505092959194509250565b6000806040838503121561216957600080fd5b823567ffffffffffffffff8082111561218157600080fd5b61218d86838701611f1e565b935060208501359150808211156121a357600080fd5b508301606081860312156121b657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156107c4576107c46121c1565b60006020828403121561221557600080fd5b815160ff81168114611ede57600080fd5b60006107c43683612003565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261229557600080fd5b9190910192915050565b6000602082840312156122b157600080fd5b611ede82611ee5565b60ff82811682821603908111156107c4576107c46121c1565b600181815b8085111561232c57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612312576123126121c1565b8085161561231f57918102915b93841c93908002906122d8565b509250929050565b600082612343575060016107c4565b81612350575060006107c4565b816001811461236657600281146123705761238c565b60019150506107c4565b60ff841115612381576123816121c1565b50506001821b6107c4565b5060208310610133831016604e8410600b84101617156123af575081810a6107c4565b6123b983836122d3565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156123eb576123eb6121c1565b029392505050565b6000611ede60ff841683612334565b600082612438577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b80820281158282048414176107c4576107c46121c1565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612485576124856121c1565b5060010190565b808201808211156107c4576107c46121c1565b6000815180845260005b818110156124c5576020818501810151868301820152016124a9565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff8089168452876020850152865160408501526020870151606085015260ff6040880151166080850152606087015160a0850152608087015160c085015280861660e085015250806101008401526125768184018561249f565b98975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006125b1604083018461249f565b949350505050565b6020815281516020820152600060208301516101408060408501526125e261016085018361249f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261261d838261249f565b9250506060850151612647608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126ba8187018315159052565b90950151151593019290925250919050565b6000602082840312156126de57600080fd5b611ede82611f0e565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261271c57600080fd5b83018035915067ffffffffffffffff82111561273757600080fd5b60200191503681900382131561274c57600080fd5b9250929050565b6000808585111561276357600080fd5b8386111561277057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127bd5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156127e757600080fd5b505191905056fea26469706673582212208a2b12ccce786c6f6dc9c23e5cb9b3e4d591d3cdd6fb46de802665deacde53c064736f6c63430008110033";
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
