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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002ad838038062002ad8833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612a30620000a86000396000818160730152818161087e015281816108c801526109810152612a306000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c610047366004612424565b6100be565b005b61004c61005c3660046124e3565b6102f0565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612547565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610514565b60c08b01526102c08a8861065c565b5047915050818111156102e2576102e26000846102dd8585612547565b610ad9565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037c3447612547565b9050846103a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610491576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e188608001518960c00151610b0f565b6104eb888861065c565b504791505081811115610508576105086000846102dd8585612547565b50506000909155505050565b600082808203610550576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561055f600185612547565b81811061056e5761056e612581565b905060200281019061058091906125b0565b6105919060808101906060016125ee565b9050600061059e82610c85565b905073ffffffffffffffffffffffffffffffffffffffff82166105c8576105c53482612547565b90505b60006105d48888610d3e565b90506105e08888610e4a565b6105ed8a89898985610eb7565b6000826105f985610c85565b6106039190612547565b90508981101561064e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036107815780356106e9576040517f4c568e590000000000000000000000000000000000000000000000000000000081528135600482015260006024820152604401610645565b60006107356106fb6040840184612610565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061126992505050565b90508135811461077b576040517f4c568e590000000000000000000000000000000000000000000000000000000081528235600482015260248101829052604401610645565b50610829565b60006107936106fb6040840184612610565b60001c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16146108275760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610645565b505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610965576108a783608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161131b565b608083015160c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163e4269fc4918461090060408801602089016125ee565b61090d6040890189612610565b6040518763ffffffff1660e01b815260040161092e969594939291906126c5565b600060405180830381600087803b15801561094857600080fd5b505af115801561095c573d6000803e3d6000fd5b50505050610a16565b60c083015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b0f584ff906109b860408601602087016125ee565b6109c56040870187612610565b6040518563ffffffff1660e01b81526004016109e393929190612746565b6000604051808303818588803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610a9d5760e08301518351604051843581527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610acc91906127ed565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b0557610b0083838361145e565b505050565b610b0082826115e0565b80600003610b49576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ba25780341015610b9e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610c0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c339190612900565b905081811015610c79576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b610b008333308561170a565b600073ffffffffffffffffffffffffffffffffffffffff821615610d36576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610d0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d319190612900565b610d38565b475b92915050565b60608160008167ffffffffffffffff811115610d5c57610d5c6121de565b604051908082528060200260200182016040528015610d85578160200160208202803683370190505b5090506000805b83811015610e3f57868682818110610da657610da6612581565b9050602002810190610db891906125b0565b610dc99060808101906060016125ee565b9150610dd482610c85565b838281518110610de657610de6612581565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e375734838281518110610e1f57610e1f612581565b60200260200101818151610e339190612547565b9052505b600101610d8c565b509095945050505050565b60005b81811015610b005736838383818110610e6857610e68612581565b9050602002810190610e7a91906125b0565b9050610e8c60e0820160c08301612919565b15610eae57610eae610ea460608301604084016125ee565b8260800135610b0f565b50600101610e4d565b8383838382600181146111845760008585610ed3600185612547565b818110610ee257610ee2612581565b9050602002810190610ef491906125b0565b610f059060808101906060016125ee565b9050600089815b818110156110b057368d8d83818110610f2757610f27612581565b9050602002810190610f3991906125b0565b9050610f68610f4e60608301604084016125ee565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fcb5750610fcb610f8160408301602084016125ee565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fe25750610fe2610f8160208301836125ee565b80156110675750611067610ff960a0830183612610565b61100891600491600091612936565b61101191612960565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61109d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110a78f82611924565b50600101610f0c565b505060005b6110c0600185612547565b81101561117c5760008888838181106110db576110db612581565b90506020028101906110ed91906125b0565b6110fe9060808101906060016125ee565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111735785828151811061114557611145612581565b602002602001015161115682610c85565b6111609190612547565b9250821561117357611173818885610ad9565b506001016110b5565b50505061125d565b8760005b8181101561125a57368b8b838181106111a3576111a3612581565b90506020028101906111b591906125b0565b90506111ca610f4e60608301604084016125ee565b806111e357506111e3610f8160408301602084016125ee565b80156111fa57506111fa610f8160208301836125ee565b80156112115750611211610ff960a0830183612610565b611247576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112518d82611924565b50600101611188565b50505b50505050505050505050565b602081015160009060e081901c806394454a5d81146112cd576332ad465f81146112d95763afd9b70681146112e557636111ad2581146112f157631eb1cff081146112f15763b866e17381146112fd57638e8d142b811461130a5760009350611313565b60a48501519350611313565b60c48501519350611313565b60848501519350611313565b60e48501519350611313565b6101048501519350611313565b61014485015193505b505050919050565b73ffffffffffffffffffffffffffffffffffffffff831661133b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611388576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156113fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114219190612900565b1015610b005761143383836000611c02565b610b0083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c02565b73ffffffffffffffffffffffffffffffffffffffff83166114ab576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114f8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611565573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115899190612900565b9050808211156115cf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b6115da848484611e02565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661162d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611670576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610645565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146116ca576040519150601f19603f3d011682016040523d82523d6000602084013e6116cf565b606091505b5050905080610b00576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611757576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117a4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611815573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118399190612900565b905061184782868686611e58565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118db9190612900565b6118e59190612547565b1461191c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61193a61193460208301836125ee565b3b151590565b611970576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119b0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006119c5610f4e60608501604086016125ee565b6119d05760006119d6565b82608001355b905060006119f26119ed60608601604087016125ee565b610c85565b90506000611a096119ed60808701606088016125ee565b905082600003611a4057611a40611a2660608701604088016125ee565b611a3660408801602089016125ee565b876080013561131b565b8460800135821015611a8b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610645565b600080611a9b60208801886125ee565b73ffffffffffffffffffffffffffffffffffffffff1685611abf60a08a018a612610565b604051611acd9291906129a8565b60006040518083038185875af1925050503d8060008114611b0a576040519150601f19603f3d011682016040523d82523d6000602084013e611b0f565b606091505b509150915081611b2257611b2281611eb6565b6000611b376119ed60808a0160608b016125ee565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b6860208b018b6125ee565b611b7860608c0160408d016125ee565b611b8860808d0160608e016125ee565b8c60800135898711611b9a5786611ba4565b611ba48a88612547565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611ca257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca09190612900565b155b611d2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610645565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b009084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ec0565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b009084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611d80565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115da9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611d80565b8051602082018181fd5b6000611f22826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fcf9092919063ffffffff16565b9050805160001480611f43575080806020019051810190611f4391906129b8565b610b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610645565b6060611fde8484600085611fe6565b949350505050565b606082471015612078576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610645565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120a191906129d5565b60006040518083038185875af1925050503d80600081146120de576040519150601f19603f3d011682016040523d82523d6000602084013e6120e3565b606091505b50915091506120f4878383876120ff565b979650505050505050565b6060831561219557825160000361218e5773ffffffffffffffffffffffffffffffffffffffff85163b61218e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610645565b5081611fde565b611fde83838151156121aa5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064591906129e7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612231576122316121de565b60405290565b600082601f83011261224857600080fd5b813567ffffffffffffffff80821115612263576122636121de565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122a9576122a96121de565b816040528381528660208588010111156122c257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461230657600080fd5b919050565b801515811461231957600080fd5b50565b80356123068161230b565b6000610140828403121561233a57600080fd5b61234261220d565b905081358152602082013567ffffffffffffffff8082111561236357600080fd5b61236f85838601612237565b6020840152604084013591508082111561238857600080fd5b5061239584828501612237565b6040830152506123a7606083016122e2565b60608201526123b8608083016122e2565b60808201526123c960a083016122e2565b60a082015260c082013560c082015260e082013560e08201526101006123f081840161231c565b9082015261012061240283820161231c565b9082015292915050565b60006060828403121561241e57600080fd5b50919050565b6000806000806060858703121561243a57600080fd5b843567ffffffffffffffff8082111561245257600080fd5b61245e88838901612327565b9550602087013591508082111561247457600080fd5b818701915087601f83011261248857600080fd5b81358181111561249757600080fd5b8860208260051b85010111156124ac57600080fd5b6020830195508094505060408701359150808211156124ca57600080fd5b506124d78782880161240c565b91505092959194509250565b600080604083850312156124f657600080fd5b823567ffffffffffffffff8082111561250e57600080fd5b61251a86838701612327565b9350602085013591508082111561253057600080fd5b5061253d8582860161240c565b9150509250929050565b81810381811115610d38577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125e457600080fd5b9190910192915050565b60006020828403121561260057600080fd5b612609826122e2565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261264557600080fd5b83018035915067ffffffffffffffff82111561266057600080fd5b60200191503681900382131561267557600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff808a168452886020850152875160408501526020880151606085015260ff6040890151166080850152606088015160a0850152608088015160c085015280871660e08501525080610100840152612739818401858761267c565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416815260406020820152600061277660408301848661267c565b95945050505050565b60005b8381101561279a578181015183820152602001612782565b50506000910152565b600081518084526127bb81602086016020860161277f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526128166101608501836127a3565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261285183826127a3565b925050606085015161287b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128ee8187018315159052565b90950151151593019290925250919050565b60006020828403121561291257600080fd5b5051919050565b60006020828403121561292b57600080fd5b81356126098161230b565b6000808585111561294657600080fd5b8386111561295357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129a05780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156129ca57600080fd5b81516126098161230b565b600082516125e481846020870161277f565b60208152600061260960208301846127a356fea26469706673582212209193db1f1a61810f257b997de10cec74df349100dac973f52042bf4bc1a3224264736f6c63430008110033";
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
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
