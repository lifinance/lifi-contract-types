import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AmarokFacet, AmarokFacetInterface } from "../AmarokFacet";
declare type AmarokFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AmarokFacet__factory extends ContractFactory {
    constructor(...args: AmarokFacetConstructorParams);
    deploy(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AmarokFacet>;
    getDeployTransaction(_connextHandler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AmarokFacet;
    connect(signer: Signer): AmarokFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620029fb380380620029fb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612959620000a2600039600081816107a7015281816107fc015261090501526129596000f3fe6080604052600436106100295760003560e01c806383f319171461002e5780638dc9932d14610043575b600080fd5b61004161003c3660046122f2565b610056565b005b6100416100513660046123b1565b6102b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761241e565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610219816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610250576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025a8a88610520565b6102748a600001518b60c001518b8b338c60400135610574565b60c08b01526102838a88610714565b5047915050818111156102a5576102a56000846102a0858561241e565b610a1e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061033f344761241e565b905061034a85612458565b80610100015115610387576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039086612458565b60a081015173ffffffffffffffffffffffffffffffffffffffff166103e1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046587612458565b608081015173ffffffffffffffffffffffffffffffffffffffff166104b6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c86104c289612458565b88610520565b6104e56104db60a08a0160808b01612464565b8960c00135610a54565b6104f76104f189612458565b88610714565b504791505081811115610514576105146000846102a0858561241e565b50506000909155505050565b610120820151151560006105348380612486565b905011151514610570576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6000838082036105b0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866105bf60018561241e565b8181106105ce576105ce6124f2565b90506020028101906105e09190612521565b6105f1906080810190606001612464565b905060006105fe82610bc6565b905073ffffffffffffffffffffffffffffffffffffffff821661062857610625348261241e565b90505b60006106348989610c7f565b90506106408989610d8b565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261067b818b8b85610df8565b60008361068786610bc6565b610691919061241e565b905073ffffffffffffffffffffffffffffffffffffffff85166106bb576106b8888261241e565b90505b8b811015610704576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b81610120015115801561076657506107326040820160208301612464565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561079d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d082608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516111e9565b6107e060e0820160c0830161255f565b156108ee5773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166393f18ac561083160c0840160a0850161257c565b6108416040850160208601612464565b85608001518560800160208101906108599190612464565b86604001358860c0015161086d919061241e565b606088013561087c8980612486565b8a604001356040518a63ffffffff1660e01b81526004016108a5999897969594939291906125eb565b6020604051808303816000875af11580156108c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e8919061265d565b506109e3565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016638aac16ba604083013561093f60c0850160a0860161257c565b61094f6040860160208701612464565b86608001518660800160208101906109679190612464565b60c0890151606089013561097b8a80612486565b6040518a63ffffffff1660e01b815260040161099e989796959493929190612676565b60206040518083038185885af11580156109bc573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109e1919061265d565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610a12919061274c565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610a4a57610a4583838361132c565b505050565b610a4582826114ae565b80600003610a8e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae35780341015610570576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b74919061265d565b905081811015610bba576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b610a45833330856115d8565b600073ffffffffffffffffffffffffffffffffffffffff821615610c77576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c72919061265d565b610c79565b475b92915050565b60608160008167ffffffffffffffff811115610c9d57610c9d6120ac565b604051908082528060200260200182016040528015610cc6578160200160208202803683370190505b5090506000805b83811015610d8057868682818110610ce757610ce76124f2565b9050602002810190610cf99190612521565b610d0a906080810190606001612464565b9150610d1582610bc6565b838281518110610d2757610d276124f2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d785734838281518110610d6057610d606124f2565b60200260200101818151610d74919061241e565b9052505b600101610ccd565b509095945050505050565b60005b81811015610a455736838383818110610da957610da96124f2565b9050602002810190610dbb9190612521565b9050610dcd60e0820160c0830161255f565b15610def57610def610de56060830160408401612464565b8260800135610a54565b50600101610d8e565b6020840151604085015184918491849083600181146111025760008686610e2060018561241e565b818110610e2f57610e2f6124f2565b9050602002810190610e419190612521565b610e52906080810190606001612464565b9050600089815b81811015610fff57368d8d83818110610e7457610e746124f2565b9050602002810190610e869190612521565b9050610eb5610e9b6060830160408401612464565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f185750610f18610ece6040830160208401612464565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f2f5750610f2f610ece6020830183612464565b8015610fb45750610fb4610f4660a0830183612486565b610f559160049160009161285f565b610f5e91612889565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610ff690826117f2565b50600101610e59565b505060005b61100f60018561241e565b8110156110fa57600089898381811061102a5761102a6124f2565b905060200281019061103c9190612521565b61104d906080810190606001612464565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110f157868281518110611094576110946124f2565b60200260200101516110a582610bc6565b6110af919061241e565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156110d65760006110d8565b865b905083156110ef576110ef828a6102a0848861241e565b505b50600101611004565b5050506111dd565b8760005b818110156111da57368b8b83818110611121576111216124f2565b90506020028101906111339190612521565b9050611148610e9b6060830160408401612464565b806111615750611161610ece6040830160208401612464565b80156111785750611178610ece6020830183612464565b801561118f575061118f610f4660a0830183612486565b6111c5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111d190826117f2565b50600101611106565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661120957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611256576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156112cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ef919061265d565b1015610a455761130183836000611ad0565b610a4583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ad0565b73ffffffffffffffffffffffffffffffffffffffff8316611379576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113c6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611433573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611457919061265d565b90508082111561149d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106fb565b6114a8848484611cd0565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114fb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561153e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106fb565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611598576040519150601f19603f3d011682016040523d82523d6000602084013e61159d565b606091505b5050905080610a45576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611625576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611672576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611707919061265d565b905061171582868686611d26565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a9919061265d565b6117b3919061241e565b146117ea576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6118086118026020830183612464565b3b151590565b61183e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361187e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611893610e9b6060850160408601612464565b61189e5760006118a4565b82608001355b905060006118c06118bb6060860160408701612464565b610bc6565b905060006118d76118bb6080870160608801612464565b90508260000361190e5761190e6118f46060870160408801612464565b6119046040880160208901612464565b87608001356111e9565b8460800135821015611959576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106fb565b6000806119696020880188612464565b73ffffffffffffffffffffffffffffffffffffffff168561198d60a08a018a612486565b60405161199b9291906128d1565b60006040518083038185875af1925050503d80600081146119d8576040519150601f19603f3d011682016040523d82523d6000602084013e6119dd565b606091505b5091509150816119f0576119f081611d84565b6000611a056118bb60808a0160608b01612464565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a3660208b018b612464565b611a4660608c0160408d01612464565b611a5660808d0160608e01612464565b8c60800135898711611a685786611a72565b611a728a8861241e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b7057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6e919061265d565b155b611bfc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016106fb565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a459084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d8e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a459084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c4e565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114a89085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c4e565b8051602082018181fd5b6000611df0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e9d9092919063ffffffff16565b9050805160001480611e11575080806020019051810190611e1191906128e1565b610a45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106fb565b6060611eac8484600085611eb4565b949350505050565b606082471015611f46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106fb565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f6f91906128fe565b60006040518083038185875af1925050503d8060008114611fac576040519150601f19603f3d011682016040523d82523d6000602084013e611fb1565b606091505b5091509150611fc287838387611fcd565b979650505050505050565b6060831561206357825160000361205c5773ffffffffffffffffffffffffffffffffffffffff85163b61205c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106fb565b5081611eac565b611eac83838151156120785781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fb9190612910565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120ff576120ff6120ac565b60405290565b600082601f83011261211657600080fd5b813567ffffffffffffffff80821115612131576121316120ac565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715612177576121776120ac565b8160405283815286602085880101111561219057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121d457600080fd5b919050565b80151581146121e757600080fd5b50565b80356121d4816121d9565b6000610140828403121561220857600080fd5b6122106120db565b905081358152602082013567ffffffffffffffff8082111561223157600080fd5b61223d85838601612105565b6020840152604084013591508082111561225657600080fd5b5061226384828501612105565b604083015250612275606083016121b0565b6060820152612286608083016121b0565b608082015261229760a083016121b0565b60a082015260c082013560c082015260e082013560e08201526101006122be8184016121ea565b908201526101206122d08382016121ea565b9082015292915050565b600060e082840312156122ec57600080fd5b50919050565b6000806000806060858703121561230857600080fd5b843567ffffffffffffffff8082111561232057600080fd5b61232c888389016121f5565b9550602087013591508082111561234257600080fd5b818701915087601f83011261235657600080fd5b81358181111561236557600080fd5b8860208260051b850101111561237a57600080fd5b60208301955080945050604087013591508082111561239857600080fd5b506123a5878288016122da565b91505092959194509250565b600080604083850312156123c457600080fd5b823567ffffffffffffffff808211156123dc57600080fd5b9084019061014082870312156123f157600080fd5b9092506020840135908082111561240757600080fd5b50612414858286016122da565b9150509250929050565b81810381811115610c79577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c7936836121f5565b60006020828403121561247657600080fd5b61247f826121b0565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124bb57600080fd5b83018035915067ffffffffffffffff8211156124d657600080fd5b6020019150368190038213156124eb57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261255557600080fd5b9190910192915050565b60006020828403121561257157600080fd5b813561247f816121d9565b60006020828403121561258e57600080fd5b813563ffffffff8116811461247f57600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061010063ffffffff8c16835273ffffffffffffffffffffffffffffffffffffffff808c166020850152808b166040850152808a166060850152508760808401528660a08401528060c084015261264681840186886125a2565b9150508260e08301529a9950505050505050505050565b60006020828403121561266f57600080fd5b5051919050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301526126d060e0830184866125a2565b9a9950505050505050505050565b60005b838110156126f95781810151838201526020016126e1565b50506000910152565b6000815180845261271a8160208601602086016126de565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612775610160850183612702565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127b08382612702565b92505060608501516127da608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061284d8187018315159052565b90950151151593019290925250919050565b6000808585111561286f57600080fd5b8386111561287c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128c95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156128f357600080fd5b815161247f816121d9565b600082516125558184602087016126de565b60208152600061247f602083018461270256fea264697066735822122086d84ddc709454ab286db6ca0dc7ef43f4fe423ab703496511dfe1fc8323494964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_connextHandler";
            readonly type: "address";
            readonly internalType: "contract IConnextHandler";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAmarok";
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
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAmarok";
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
            readonly name: "_amarokData";
            readonly type: "tuple";
            readonly internalType: "struct AmarokFacet.AmarokData";
            readonly components: readonly [{
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "slippageTol";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "delegate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "destChainDomainId";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
        readonly inputs: readonly [];
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
    static createInterface(): AmarokFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AmarokFacet;
}
export {};
