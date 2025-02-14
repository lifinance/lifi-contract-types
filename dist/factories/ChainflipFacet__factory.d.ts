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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002bd738038062002bd7833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b21620000b660003960008181606001528181610806015281816108ce0152818161092c015281816109770152610a460152612b216000f3fe6080604052600436106100345760003560e01c8063467f144f146100395780637766d1ed1461004e578063e2886d99146100ab575b600080fd5b61004c610047366004612418565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b936600461247c565b6102a8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761253b565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027187608001518860c00151610496565b61027b8787610616565b504790508181111561029c5761029c600084610297858561253b565b610b14565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610323576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610334344761253b565b905086806101000151610373576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103968160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361040b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610448576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045d89600001518a60c001518a8a33610b45565b60c08a015261046c8987610616565b504790508181111561048857610488600084610297858561253b565b505060009091555050505050565b806000036104d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105295780341015610525576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190612575565b905081811015610605576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61061183333085610c88565b505050565b60006106258360e00151610ea2565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff160361071b5760208301356106af576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051602080860135908201520160405160208183030381529060405290508360e0015184600001517f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c856020013560405161070e91815260200190565b60405180910390a361076d565b8360a0015160405160200161075b919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405290505b600061077c604085018561258e565b90501115158461012001511515146107c0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff1661092257836101200151156108b25760c084015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290848461083c60208901896125fa565b61084960408a018a61258e565b600061085860408d018d61258e565b6040518a63ffffffff1660e01b815260040161087b9897969594939291906126de565b6000604051808303818588803b15801561089457600080fd5b505af11580156108a8573d6000803e3d6000fd5b5050505050610ad7565b60c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd68734590848461090460208901896125fa565b6040518563ffffffff1660e01b815260040161087b93929190612744565b61095584608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f27565b83610120015115610a2f5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb83836109ab60208801886125fa565b6109b8604089018961258e565b60808b015160c08c0151600091906109d360408e018e61258e565b6040518b63ffffffff1660e01b81526004016109f89a99989796959493929190612782565b600060405180830381600087803b158015610a1257600080fd5b505af1158015610a26573d6000803e3d6000fd5b50505050610ad7565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08383610a7a60208801886125fa565b88608001518960c001516040518663ffffffff1660e01b8152600401610aa495949392919061280e565b600060405180830381600087803b158015610abe57600080fd5b505af1158015610ad2573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610b06919061286f565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b3b5761061183838361105e565b61061182826111e0565b600082808203610b81576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b9060018561253b565b818110610b9f57610b9f612982565b9050602002810190610bb191906129b1565b610bc29060808101906060016129ef565b90506000610bcf8261130a565b905073ffffffffffffffffffffffffffffffffffffffff8216610bf957610bf6348261253b565b90505b6000610c0588886113c3565b9050610c1188886114cf565b610c1e8a8989898561153c565b600082610c2a8561130a565b610c34919061253b565b905089811015610c7a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105fc565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610cd5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d22576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db79190612575565b9050610dc5828686866118ee565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e599190612575565b610e63919061253b565b14610e9a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600060018203610eb457506001919050565b61a4b18203610ec557506004919050565b660416edef1601be8203610edb57506005919050565b6512309ce540018203610ef057506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff8316610f4757505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f94576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611009573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102d9190612575565b10156106115761061183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119ca565b73ffffffffffffffffffffffffffffffffffffffff83166110ab576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111899190612575565b9050808211156111cf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105fc565b6111da848484611aba565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661122d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611270576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105fc565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112ca576040519150601f19603f3d011682016040523d82523d6000602084013e6112cf565b606091505b5050905080610611576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156113bb576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b69190612575565b6113bd565b475b92915050565b60608160008167ffffffffffffffff8111156113e1576113e16121d7565b60405190808252806020026020018201604052801561140a578160200160208202803683370190505b5090506000805b838110156114c45786868281811061142b5761142b612982565b905060200281019061143d91906129b1565b61144e9060808101906060016129ef565b91506114598261130a565b83828151811061146b5761146b612982565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166114bc57348382815181106114a4576114a4612982565b602002602001018181516114b8919061253b565b9052505b600101611411565b509095945050505050565b60005b8181101561061157368383838181106114ed576114ed612982565b90506020028101906114ff91906129b1565b905061151160e0820160c08301612a0a565b156115335761153361152960608301604084016129ef565b8260800135610496565b506001016114d2565b838383838260018114611809576000858561155860018561253b565b81811061156757611567612982565b905060200281019061157991906129b1565b61158a9060808101906060016129ef565b9050600089815b8181101561173557368d8d838181106115ac576115ac612982565b90506020028101906115be91906129b1565b90506115ed6115d360608301604084016129ef565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611650575061165061160660408301602084016129ef565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611667575061166761160660208301836129ef565b80156116ec57506116ec61167e60a083018361258e565b61168d91600491600091612a27565b61169691612a51565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611722576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61172c8f82611b10565b50600101611591565b505060005b61174560018561253b565b81101561180157600088888381811061176057611760612982565b905060200281019061177291906129b1565b6117839060808101906060016129ef565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146117f8578582815181106117ca576117ca612982565b60200260200101516117db8261130a565b6117e5919061253b565b925082156117f8576117f8818885610b14565b5060010161173a565b5050506118e2565b8760005b818110156118df57368b8b8381811061182857611828612982565b905060200281019061183a91906129b1565b905061184f6115d360608301604084016129ef565b80611868575061186861160660408301602084016129ef565b801561187f575061187f61160660208301836129ef565b8015611896575061189661167e60a083018361258e565b6118cc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118d68d82611b10565b5060010161180d565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111da9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611dee565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a568482611efd565b6111da5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611ab09085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611948565b6111da8482611dee565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106119084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611948565b611b26611b2060208301836129ef565b3b151590565b611b5c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611b9c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bb16115d360608501604086016129ef565b611bbc576000611bc2565b82608001355b90506000611bde611bd960608601604087016129ef565b61130a565b90506000611bf5611bd960808701606088016129ef565b905082600003611c2c57611c2c611c1260608701604088016129ef565b611c2260408801602089016129ef565b8760800135610f27565b8460800135821015611c77576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105fc565b600080611c8760208801886129ef565b73ffffffffffffffffffffffffffffffffffffffff1685611cab60a08a018a61258e565b604051611cb9929190612a99565b60006040518083038185875af1925050503d8060008114611cf6576040519150601f19603f3d011682016040523d82523d6000602084013e611cfb565b606091505b509150915081611d0e57611d0e81611fbe565b6000611d23611bd960808a0160608b016129ef565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611d5460208b018b6129ef565b611d6460608c0160408d016129ef565b611d7460808d0160608e016129ef565b8c60800135898711611d865786611d90565b611d908a8861253b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611e50826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fc89092919063ffffffff16565b9050805160001480611e71575080806020019051810190611e719190612aa9565b610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fc565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f279190612ac6565b6000604051808303816000865af19150503d8060008114611f64576040519150601f19603f3d011682016040523d82523d6000602084013e611f69565b606091505b5091509150818015611f93575080511580611f93575080806020019051810190611f939190612aa9565b8015611fb5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611fd78484600085611fdf565b949350505050565b606082471015612071576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fc565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161209a9190612ac6565b60006040518083038185875af1925050503d80600081146120d7576040519150601f19603f3d011682016040523d82523d6000602084013e6120dc565b606091505b50915091506120ed878383876120f8565b979650505050505050565b6060831561218e5782516000036121875773ffffffffffffffffffffffffffffffffffffffff85163b612187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fc565b5081611fd7565b611fd783838151156121a35781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc9190612ad8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561222a5761222a6121d7565b60405290565b600082601f83011261224157600080fd5b813567ffffffffffffffff8082111561225c5761225c6121d7565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122a2576122a26121d7565b816040528381528660208588010111156122bb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f2257600080fd5b801515811461230d57600080fd5b50565b8035610f22816122ff565b6000610140828403121561232e57600080fd5b612336612206565b905081358152602082013567ffffffffffffffff8082111561235757600080fd5b61236385838601612230565b6020840152604084013591508082111561237c57600080fd5b5061238984828501612230565b60408301525061239b606083016122db565b60608201526123ac608083016122db565b60808201526123bd60a083016122db565b60a082015260c082013560c082015260e082013560e08201526101006123e4818401612310565b908201526101206123f6838201612310565b9082015292915050565b60006060828403121561241257600080fd5b50919050565b6000806040838503121561242b57600080fd5b823567ffffffffffffffff8082111561244357600080fd5b61244f8683870161231b565b9350602085013591508082111561246557600080fd5b5061247285828601612400565b9150509250929050565b6000806000806060858703121561249257600080fd5b843567ffffffffffffffff808211156124aa57600080fd5b6124b68883890161231b565b955060208701359150808211156124cc57600080fd5b818701915087601f8301126124e057600080fd5b8135818111156124ef57600080fd5b8860208260051b850101111561250457600080fd5b60208301955080945050604087013591508082111561252257600080fd5b5061252f87828801612400565b91505092959194509250565b818103818111156113bd577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561258757600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125c357600080fd5b83018035915067ffffffffffffffff8211156125de57600080fd5b6020019150368190038213156125f357600080fd5b9250929050565b60006020828403121561260c57600080fd5b813563ffffffff8116811461262057600080fd5b9392505050565b60005b8381101561264257818101518382015260200161262a565b50506000910152565b60008151808452612663816020860160208601612627565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600063ffffffff808b16835260c060208401526126fe60c084018b61264b565b818a166040850152838103606085015261271981898b612695565b91505085608084015282810360a0840152612735818587612695565b9b9a5050505050505050505050565b600063ffffffff808616835260806020840152612764608084018661264b565b93166040830152508082036060909101526000815260200192915050565b600061010063ffffffff808e1684528160208501526127a38285018e61264b565b908c166040850152838103606085015290506127c0818a8c612695565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e08401526127fd818587612695565b9d9c50505050505050505050505050565b600063ffffffff808816835260c0602084015261282e60c084018861264b565b951660408301525073ffffffffffffffffffffffffffffffffffffffff929092166060830152608082015280820360a0909101526000815260200192915050565b60208152815160208201526000602083015161014080604085015261289861016085018361264b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128d3838261264b565b92505060608501516128fd608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129708187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126129e557600080fd5b9190910192915050565b600060208284031215612a0157600080fd5b612620826122db565b600060208284031215612a1c57600080fd5b8135612620816122ff565b60008085851115612a3757600080fd5b83861115612a4457600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a915780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612abb57600080fd5b8151612620816122ff565b600082516129e5818460208701612627565b602081526000612620602083018461264b56fea2646970667358221220763a8d288d69867dccf54b1099ffc20a8c5a5606eb1154235c82ae7d73840de264736f6c63430008110033";
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
