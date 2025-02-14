import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
declare type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002bfb38038062002bfb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b45620000b660003960008181606001528181610806015281816108ce0152818161093b015281816109860152610a550152612b456000f3fe6080604052600436106100345760003560e01c8063467f144f146100395780637766d1ed1461004e578063e2886d99146100ab575b600080fd5b61004c610047366004612436565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b936600461249a565b6102a8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612559565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027187608001518860c00151610496565b61027b8787610616565b504790508181111561029c5761029c6000846102978585612559565b610b32565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610323576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103343447612559565b905086806101000151610373576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103968160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361040b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610448576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045d89600001518a60c001518a8a33610b63565b60c08a015261046c8987610616565b5047905081811115610488576104886000846102978585612559565b505060009091555050505050565b806000036104d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105295780341015610525576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190612593565b905081811015610605576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61061183333085610ca6565b505050565b60006106258360e00151610ec0565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff160361071b5760208301356106af576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051602080860135908201520160405160208183030381529060405290508360e0015184600001517f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c856020013560405161070e91815260200190565b60405180910390a361076d565b8360a0015160405160200161075b919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405290505b600061077c60408501856125ac565b90501115158461012001511515146107c0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff1661093157836101200151156108b25760c084015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290848461083c6020890189612618565b61084960408a018a6125ac565b600061085860408d018d6125ac565b6040518a63ffffffff1660e01b815260040161087b9897969594939291906126fc565b6000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b5050505050610af5565b60c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd6873459084846109046020890189612618565b61091160408a018a6125ac565b6040518763ffffffff1660e01b815260040161087b959493929190612762565b61096484608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f45565b83610120015115610a3e5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb83836109ba6020880188612618565b6109c760408901896125ac565b60808b015160c08c0151600091906109e260408e018e6125ac565b6040518b63ffffffff1660e01b8152600401610a079a999897969594939291906127aa565b600060405180830381600087803b158015610a2157600080fd5b505af1158015610a35573d6000803e3d6000fd5b50505050610af5565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08383610a896020880188612618565b608089015160c08a0151610aa060408b018b6125ac565b6040518863ffffffff1660e01b8152600401610ac29796959493929190612836565b600060405180830381600087803b158015610adc57600080fd5b505af1158015610af0573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610b249190612893565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b595761061183838361107c565b61061182826111fe565b600082808203610b9f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610bae600185612559565b818110610bbd57610bbd6129a6565b9050602002810190610bcf91906129d5565b610be0906080810190606001612a13565b90506000610bed82611328565b905073ffffffffffffffffffffffffffffffffffffffff8216610c1757610c143482612559565b90505b6000610c2388886113e1565b9050610c2f88886114ed565b610c3c8a8989898561155a565b600082610c4885611328565b610c529190612559565b905089811015610c98576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105fc565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610cf3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d40576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610db1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd59190612593565b9050610de38286868661190c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e779190612593565b610e819190612559565b14610eb8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600060018203610ed257506001919050565b61a4b18203610ee357506004919050565b660416edef1601be8203610ef957506005919050565b6512309ce540018203610f0e57506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff8316610f6557505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fb2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611027573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104b9190612593565b10156106115761061183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119e8565b73ffffffffffffffffffffffffffffffffffffffff83166110c9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611116576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a79190612593565b9050808211156111ed576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105fc565b6111f8848484611ad8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661124b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561128e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105fc565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112e8576040519150601f19603f3d011682016040523d82523d6000602084013e6112ed565b606091505b5050905080610611576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156113d9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156113b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d49190612593565b6113db565b475b92915050565b60608160008167ffffffffffffffff8111156113ff576113ff6121f5565b604051908082528060200260200182016040528015611428578160200160208202803683370190505b5090506000805b838110156114e257868682818110611449576114496129a6565b905060200281019061145b91906129d5565b61146c906080810190606001612a13565b915061147782611328565b838281518110611489576114896129a6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166114da57348382815181106114c2576114c26129a6565b602002602001018181516114d69190612559565b9052505b60010161142f565b509095945050505050565b60005b81811015610611573683838381811061150b5761150b6129a6565b905060200281019061151d91906129d5565b905061152f60e0820160c08301612a2e565b15611551576115516115476060830160408401612a13565b8260800135610496565b506001016114f0565b8383838382600181146118275760008585611576600185612559565b818110611585576115856129a6565b905060200281019061159791906129d5565b6115a8906080810190606001612a13565b9050600089815b8181101561175357368d8d838181106115ca576115ca6129a6565b90506020028101906115dc91906129d5565b905061160b6115f16060830160408401612a13565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061166e575061166e6116246040830160208401612a13565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561168557506116856116246020830183612a13565b801561170a575061170a61169c60a08301836125ac565b6116ab91600491600091612a4b565b6116b491612a75565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611740576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61174a8f82611b2e565b506001016115af565b505060005b611763600185612559565b81101561181f57600088888381811061177e5761177e6129a6565b905060200281019061179091906129d5565b6117a1906080810190606001612a13565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611816578582815181106117e8576117e86129a6565b60200260200101516117f982611328565b6118039190612559565b9250821561181657611816818885610b32565b50600101611758565b505050611900565b8760005b818110156118fd57368b8b83818110611846576118466129a6565b905060200281019061185891906129d5565b905061186d6115f16060830160408401612a13565b8061188657506118866116246040830160208401612a13565b801561189d575061189d6116246020830183612a13565b80156118b457506118b461169c60a08301836125ac565b6118ea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118f48d82611b2e565b5060010161182b565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111f89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e0c565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a748482611f1b565b6111f85760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611ace9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611966565b6111f88482611e0c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106119084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611966565b611b44611b3e6020830183612a13565b3b151590565b611b7a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611bba576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bcf6115f16060850160408601612a13565b611bda576000611be0565b82608001355b90506000611bfc611bf76060860160408701612a13565b611328565b90506000611c13611bf76080870160608801612a13565b905082600003611c4a57611c4a611c306060870160408801612a13565b611c406040880160208901612a13565b8760800135610f45565b8460800135821015611c95576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105fc565b600080611ca56020880188612a13565b73ffffffffffffffffffffffffffffffffffffffff1685611cc960a08a018a6125ac565b604051611cd7929190612abd565b60006040518083038185875af1925050503d8060008114611d14576040519150601f19603f3d011682016040523d82523d6000602084013e611d19565b606091505b509150915081611d2c57611d2c81611fdc565b6000611d41611bf760808a0160608b01612a13565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611d7260208b018b612a13565b611d8260608c0160408d01612a13565b611d9260808d0160608e01612a13565b8c60800135898711611da45786611dae565b611dae8a88612559565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611e6e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fe69092919063ffffffff16565b9050805160001480611e8f575080806020019051810190611e8f9190612acd565b610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fc565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f459190612aea565b6000604051808303816000865af19150503d8060008114611f82576040519150601f19603f3d011682016040523d82523d6000602084013e611f87565b606091505b5091509150818015611fb1575080511580611fb1575080806020019051810190611fb19190612acd565b8015611fd3575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611ff58484600085611ffd565b949350505050565b60608247101561208f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fc565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120b89190612aea565b60006040518083038185875af1925050503d80600081146120f5576040519150601f19603f3d011682016040523d82523d6000602084013e6120fa565b606091505b509150915061210b87838387612116565b979650505050505050565b606083156121ac5782516000036121a55773ffffffffffffffffffffffffffffffffffffffff85163b6121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fc565b5081611ff5565b611ff583838151156121c15781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc9190612afc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612248576122486121f5565b60405290565b600082601f83011261225f57600080fd5b813567ffffffffffffffff8082111561227a5761227a6121f5565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122c0576122c06121f5565b816040528381528660208588010111156122d957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f4057600080fd5b801515811461232b57600080fd5b50565b8035610f408161231d565b6000610140828403121561234c57600080fd5b612354612224565b905081358152602082013567ffffffffffffffff8082111561237557600080fd5b6123818583860161224e565b6020840152604084013591508082111561239a57600080fd5b506123a78482850161224e565b6040830152506123b9606083016122f9565b60608201526123ca608083016122f9565b60808201526123db60a083016122f9565b60a082015260c082013560c082015260e082013560e082015261010061240281840161232e565b9082015261012061241483820161232e565b9082015292915050565b60006060828403121561243057600080fd5b50919050565b6000806040838503121561244957600080fd5b823567ffffffffffffffff8082111561246157600080fd5b61246d86838701612339565b9350602085013591508082111561248357600080fd5b506124908582860161241e565b9150509250929050565b600080600080606085870312156124b057600080fd5b843567ffffffffffffffff808211156124c857600080fd5b6124d488838901612339565b955060208701359150808211156124ea57600080fd5b818701915087601f8301126124fe57600080fd5b81358181111561250d57600080fd5b8860208260051b850101111561252257600080fd5b60208301955080945050604087013591508082111561254057600080fd5b5061254d8782880161241e565b91505092959194509250565b818103818111156113db577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156125a557600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125e157600080fd5b83018035915067ffffffffffffffff8211156125fc57600080fd5b60200191503681900382131561261157600080fd5b9250929050565b60006020828403121561262a57600080fd5b813563ffffffff8116811461263e57600080fd5b9392505050565b60005b83811015612660578181015183820152602001612648565b50506000910152565b60008151808452612681816020860160208601612645565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600063ffffffff808b16835260c0602084015261271c60c084018b612669565b818a166040850152838103606085015261273781898b6126b3565b91505085608084015282810360a08401526127538185876126b3565b9b9a5050505050505050505050565b600063ffffffff8088168352608060208401526127826080840188612669565b8187166040850152838103606085015261279d8186886126b3565b9998505050505050505050565b600061010063ffffffff808e1684528160208501526127cb8285018e612669565b908c166040850152838103606085015290506127e8818a8c6126b3565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e08401526128258185876126b3565b9d9c50505050505050505050505050565b600063ffffffff808a16835260c0602084015261285660c084018a612669565b818916604085015273ffffffffffffffffffffffffffffffffffffffff8816606085015286608085015283810360a08501526127538186886126b3565b6020815281516020820152600060208301516101408060408501526128bc610160850183612669565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128f78382612669565b9250506060850151612921608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129948187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a0957600080fd5b9190910192915050565b600060208284031215612a2557600080fd5b61263e826122f9565b600060208284031215612a4057600080fd5b813561263e8161231d565b60008085851115612a5b57600080fd5b83861115612a6857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ab55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612adf57600080fd5b815161263e8161231d565b60008251612a09818460208701612645565b60208152600061263e602083018461266956fea26469706673582212206ad859212ed221e0111f0e2dce2cdf379f8a22dc8b9c133faa6fab2265d53cc964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonEvmAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonEvmAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "cfParameters";
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
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
