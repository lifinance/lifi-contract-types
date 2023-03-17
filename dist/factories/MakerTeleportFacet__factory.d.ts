import { Signer, ContractFactory, BytesLike, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MakerTeleportFacet, MakerTeleportFacetInterface } from "../MakerTeleportFacet";
declare type MakerTeleportFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MakerTeleportFacet__factory extends ContractFactory {
    constructor(...args: MakerTeleportFacetConstructorParams);
    deploy(_teleportGateway: PromiseOrValue<string>, _dai: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _l1Domain: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MakerTeleportFacet>;
    getDeployTransaction(_teleportGateway: PromiseOrValue<string>, _dai: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _l1Domain: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MakerTeleportFacet;
    connect(signer: Signer): MakerTeleportFacet__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162002b3f38038062002b3f833981016040819052620000359162000070565b60c0919091526001600160a01b03928316608052911660a05260e052620000bd565b6001600160a01b03811681146200006d57600080fd5b50565b600080600080608085870312156200008757600080fd5b8451620000948162000057565b6020860151909450620000a78162000057565b6040860151606090960151949790965092505050565b60805160a05160c05160e051612a1e620001216000396000610996015260008181610237015261066901526000818161029601528181610370015281816106c801528181610755015261091a01526000818161093b01526109f20152612a1e6000f3fe6080604052600436106100295760003560e01c80632201536d1461002e57806351ba4f7514610043575b600080fd5b61004161003c366004612456565b610056565b005b6100416100513660046124f0565b610487565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612554565b9050856101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061010001516101f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610234576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f0000000000000000000000000000000000000000000000000000000000000000808260e0015114610293576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461031e576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008b9003610359576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168c8c61039d600182612554565b8181106103ac576103ac612567565b90506020028101906103be9190612596565b6103cf9060808101906060016125d4565b73ffffffffffffffffffffffffffffffffffffffff161461041c576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104318d600001518e60c001518e8e336107cd565b60c08e015261043f8d610915565b505050505050506000479050600082821161045b576000610465565b6104658383612554565b905080156104795761047960008583610a8a565b505060009092555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610502576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105133447612554565b9050836105388160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561056f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105ea576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610628576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610666576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b867f0000000000000000000000000000000000000000000000000000000000000000808260e00151146106c5576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610750576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077e7f00000000000000000000000000000000000000000000000000000000000000008c60c00151610ac0565b6107878b610915565b50505050505050600047905060008282116107a35760006107ad565b6107ad8383612554565b905080156107c1576107c160008583610a8a565b50506000909255505050565b600082808203610809576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610818600185612554565b81811061082757610827612567565b90506020028101906108399190612596565b61084a9060808101906060016125d4565b9050600061085782610c36565b905073ffffffffffffffffffffffffffffffffffffffff82166108815761087e3482612554565b90505b600061088d8888610cef565b90506108998888610dfb565b6108a68a89898985610e5c565b6000826108b285610c36565b6108bc9190612554565b905089811015610907576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6109647f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c0015161120e565b60a081015160c08201516040517f89282b870000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff92831660248201526fffffffffffffffffffffffffffffffff90911660448201527f0000000000000000000000000000000000000000000000000000000000000000909116906389282b8790606401600060405180830381600087803b158015610a3857600080fd5b505af1158015610a4c573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610a7f919061265d565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610ab657610ab1838383611359565b505050565b610ab18282611488565b73ffffffffffffffffffffffffffffffffffffffff8216610b195780341015610b15576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610b53576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610bc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be49190612770565b905081811015610c2a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108fe565b610ab1833330856115b2565b600073ffffffffffffffffffffffffffffffffffffffff821615610ce7576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610cbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce29190612770565b610ce9565b475b92915050565b60608160008167ffffffffffffffff811115610d0d57610d0d6121c5565b604051908082528060200260200182016040528015610d36578160200160208202803683370190505b5090506000805b83811015610df057868682818110610d5757610d57612567565b9050602002810190610d699190612596565b610d7a9060808101906060016125d4565b9150610d8582610c36565b838281518110610d9757610d97612567565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610de85734838281518110610dd057610dd0612567565b60200260200101818151610de49190612554565b9052505b600101610d3d565b509095945050505050565b60005b81811015610ab1576000838383818110610e1a57610e1a612567565b9050602002810190610e2c9190612596565b610e3590612789565b90508060c0015115610e5357610e5381604001518260800151610ac0565b50600101610dfe565b8383838382600181146111295760008585610e78600185612554565b818110610e8757610e87612567565b9050602002810190610e999190612596565b610eaa9060808101906060016125d4565b9050600089815b8181101561105557368d8d83818110610ecc57610ecc612567565b9050602002810190610ede9190612596565b9050610f0d610ef360608301604084016125d4565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f705750610f70610f2660408301602084016125d4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f875750610f87610f2660208301836125d4565b801561100c575061100c610f9e60a083018361282e565b610fad9160049160009161289a565b610fb6916128c4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611042576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104c8f826117cc565b50600101610eb1565b505060005b611065600185612554565b81101561112157600088888381811061108057611080612567565b90506020028101906110929190612596565b6110a39060808101906060016125d4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611118578582815181106110ea576110ea612567565b60200260200101516110fb82610c36565b6111059190612554565b9250821561111857611118818885610a8a565b5060010161105a565b505050611202565b8760005b818110156111ff57368b8b8381811061114857611148612567565b905060200281019061115a9190612596565b905061116f610ef360608301604084016125d4565b806111885750611188610f2660408301602084016125d4565b801561119f575061119f610f2660208301836125d4565b80156111b657506111b6610f9e60a083018361282e565b6111ec576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f68d826117cc565b5060010161112d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661122e57505050565b73ffffffffffffffffffffffffffffffffffffffff821661127b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156112f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113159190612770565b90508181101561135357611353848461134e847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612554565b611ae2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166113a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114379190612770565b90508082111561147d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108fe565b611353848484611c5e565b73ffffffffffffffffffffffffffffffffffffffff82166114d5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611518576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016108fe565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611572576040519150601f19603f3d011682016040523d82523d6000602084013e611577565b606091505b5050905080610ab1576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115ff576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661164c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e19190612770565b90506116ef82868686611cb4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561175f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117839190612770565b61178d9190612554565b146117c4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117e26117dc60208301836125d4565b3b151590565b611818576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611858576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061186d610ef360608501604086016125d4565b61187857600061187e565b82608001355b9050600061189a61189560608601604087016125d4565b610c36565b905060006118b161189560808701606088016125d4565b9050826000036118e8576118e86118ce60608701604088016125d4565b6118de60408801602089016125d4565b876080013561120e565b8460800135821015611933576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108fe565b60008061194360208801886125d4565b73ffffffffffffffffffffffffffffffffffffffff168561196760a08a018a61282e565b60405161197592919061290c565b60006040518083038185875af1925050503d80600081146119b2576040519150601f19603f3d011682016040523d82523d6000602084013e6119b7565b606091505b509150915081611a025760006119cc82611d12565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe919061291c565b6000611a1761189560808a0160608b016125d4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a4860208b018b6125d4565b611a5860608c0160408d016125d4565b611a6860808d0160608e016125d4565b8c60800135898711611a7a5786611a84565b611a848a88612554565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611b59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b7d9190612770565b611b87919061292f565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506113539085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d90565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610ab19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611bdc565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113539085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611bdc565b6060604482511015611d5757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d736004808551611d6b9190612554565b859190611e9c565b905080806020019051810190611d899190612942565b9392505050565b6000611df2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fb69092919063ffffffff16565b805190915015610ab15780806020019051810190611e1091906129b9565b610ab1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108fe565b606081611eaa81601f61292f565b1015611ee2576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611eec828461292f565b84511015611f26576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611f455760405191506000825260208201604052611fad565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f7e578051835260209283019201611f66565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611fc58484600085611fcd565b949350505050565b60608247101561205f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108fe565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161208891906129d6565b60006040518083038185875af1925050503d80600081146120c5576040519150601f19603f3d011682016040523d82523d6000602084013e6120ca565b606091505b50915091506120db878383876120e6565b979650505050505050565b6060831561217c5782516000036121755773ffffffffffffffffffffffffffffffffffffffff85163b612175576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108fe565b5081611fc5565b611fc583838151156121915781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe919061291c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612218576122186121c5565b60405290565b60405160e0810167ffffffffffffffff81118282101715612218576122186121c5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612288576122886121c5565b604052919050565b600067ffffffffffffffff8211156122aa576122aa6121c5565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122e757600080fd5b81356122fa6122f582612290565b612241565b81815284602083860101111561230f57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461235057600080fd5b919050565b801515811461236357600080fd5b50565b803561235081612355565b6000610140828403121561238457600080fd5b61238c6121f4565b905081358152602082013567ffffffffffffffff808211156123ad57600080fd5b6123b9858386016122d6565b602084015260408401359150808211156123d257600080fd5b506123df848285016122d6565b6040830152506123f16060830161232c565b60608201526124026080830161232c565b608082015261241360a0830161232c565b60a082015260c082013560c082015260e082013560e082015261010061243a818401612366565b9082015261012061244c838201612366565b9082015292915050565b60008060006040848603121561246b57600080fd5b833567ffffffffffffffff8082111561248357600080fd5b61248f87838801612371565b945060208601359150808211156124a557600080fd5b818601915086601f8301126124b957600080fd5b8135818111156124c857600080fd5b8760208260051b85010111156124dd57600080fd5b6020830194508093505050509250925092565b60006020828403121561250257600080fd5b813567ffffffffffffffff81111561251957600080fd5b611fc584828501612371565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ce957610ce9612525565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125ca57600080fd5b9190910192915050565b6000602082840312156125e657600080fd5b611d898261232c565b60005b8381101561260a5781810151838201526020016125f2565b50506000910152565b6000815180845261262b8160208601602086016125ef565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612686610160850183612613565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526126c18382612613565b92505060608501516126eb608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061275e8187018315159052565b90950151151593019290925250919050565b60006020828403121561278257600080fd5b5051919050565b600060e0823603121561279b57600080fd5b6127a361221e565b6127ac8361232c565b81526127ba6020840161232c565b60208201526127cb6040840161232c565b60408201526127dc6060840161232c565b60608201526080830135608082015260a083013567ffffffffffffffff81111561280557600080fd5b612811368286016122d6565b60a08301525061282360c08401612366565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261286357600080fd5b83018035915067ffffffffffffffff82111561287e57600080fd5b60200191503681900382131561289357600080fd5b9250929050565b600080858511156128aa57600080fd5b838611156128b757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129045780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611d896020830184612613565b80820180821115610ce957610ce9612525565b60006020828403121561295457600080fd5b815167ffffffffffffffff81111561296b57600080fd5b8201601f8101841361297c57600080fd5b805161298a6122f582612290565b81815285602083850101111561299f57600080fd5b6129b08260208301602086016125ef565b95945050505050565b6000602082840312156129cb57600080fd5b8151611d8981612355565b600082516125ca8184602087016125ef56fea26469706673582212204908ddab5f2baeb409d6380fdc30e0b086f73cfbb15f686198ae5d98fecb475b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ITeleportGateway";
            readonly name: "_teleportGateway";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_dai";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_l1Domain";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDestinationChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSendingToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaMakerTeleport";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }];
        readonly name: "swapAndStartBridgeTokensViaMakerTeleport";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MakerTeleportFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MakerTeleportFacet;
}
export {};
