import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployScript, DeployScriptInterface } from "../../DeployHyphenFacet.s.sol/DeployScript";
declare type DeployScriptConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeployScript__factory extends ContractFactory {
    constructor(...args: DeployScriptConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DeployScript>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DeployScript;
    connect(signer: Signer): DeployScript__factory;
    static readonly bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600b81526a121e5c1a195b919858d95d60aa1b60208201529051634bca482160e11b815260008051602062003bcc8339815191529063979490429062000090906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d691906200057f565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003bcc8339815191529063ffa18649906024016020604051808303816000875af11580156200012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000153919062000599565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003bcc8339815191529063350d56bf906064016020604051808303816000875af1158015620001f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000217919062000599565b60405163f877cb1960e01b815290915060009060008051602062003bcc8339815191529063f877cb1990620002679060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b1919081019062000607565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000347919081019062000607565b6006906200035690826200074e565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003bcc8339815191529063f877cb19906064016000604051808303816000875af1158015620003bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e6919081019062000607565b600790620003f590826200074e565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003bcc8339815191529063f877cb19906064016000604051808303816000875af11580156200045f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000489919081019062000607565b6008906200049890826200074e565b508083604051602001620004ae9291906200081a565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000555919062000599565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084d915050565b6000602082840312156200059257600080fd5b5051919050565b600060208284031215620005ac57600080fd5b81516001600160a01b0381168114620005c457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fe578181015183820152602001620005e4565b50506000910152565b6000602082840312156200061a57600080fd5b81516001600160401b03808211156200063257600080fd5b818401915084601f8301126200064757600080fd5b8151818111156200065c576200065c620005cb565b604051601f8201601f19908116603f01168101908382118183101715620006875762000687620005cb565b81604052828152876020848701011115620006a157600080fd5b620006b4836020830160208801620005e1565b979650505050505050565b600181811c90821680620006d457607f821691505b602082108103620006f557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074957600081815260208120601f850160051c81016020861015620007245750805b601f850160051c820191505b81811015620007455782815560010162000730565b5050505b505050565b81516001600160401b038111156200076a576200076a620005cb565b62000782816200077b8454620006bf565b84620006fb565b602080601f831160018114620007ba5760008415620007a15750858301515b600019600386901b1c1916600185901b17855562000745565b600085815260208120601f198616915b82811015620007eb57888601518255948401946001909101908401620007ca565b50858210156200080a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082e818460208801620005e1565b83519083019062000844818360208801620005e1565b01949350505050565b61336f806200085d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906106a5565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610180919081019061079d565b60405160200161019091906107e6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610827565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610276919081019061079d565b905060006102c4600760405160200161028f919061083a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610556565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015291925001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050506103b760035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156103de57505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906104136020820161062a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905261045591908990602001610967565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610481929190610996565b6020604051808303816000875af11580156104a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c491906109d4565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906105ab90869086906004016109f1565b6000604051808303816000875af11580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610610919081019061079d565b80602001905181019061062391906109d4565b9392505050565b61291a80610a2083390190565b60005b8381101561065257818101518382015260200161063a565b50506000910152565b60008151808452610673816020860160208601610637565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006106d4604083018461065b565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610726576107266106dc565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561076c5761076c6106dc565b8160405280935085815286868601111561078557600080fd5b610793866020830187610637565b5050509392505050565b6000602082840312156107af57600080fd5b815167ffffffffffffffff8111156107c657600080fd5b8201601f810184136107d757600080fd5b6106d48482516020840161070b565b600082516107f8818460208701610637565b7f2f636f6e6669672f68797068656e2e6a736f6e00000000000000000000000000920191825250601301919050565b602081526000610623602083018461065b565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006001600084548181841c90508382168061087a57607f821691505b602080831082036108b2577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b8180156108c657600181146108fd5761092e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516878a01528684151585028a0101955061092e565b60008a81526020902060005b858110156109245781548b82018a0152908801908301610909565b505086848a010195505b505050505061095c817f2e68797068656e526f75746572000000000000000000000000000000000000009052565b600d01949350505050565b60008351610979818460208801610637565b83519083019061098d818360208801610637565b01949350505050565b8281526040602082015260006106d4604083018461065b565b73ffffffffffffffffffffffffffffffffffffffff811681146109d157600080fd5b50565b6000602082840312156109e657600080fd5b8151610623816109af565b604081526000610a04604083018561065b565b8281036020840152610a16818561065b565b9594505050505056fe60a06040523480156200001157600080fd5b506040516200291a3803806200291a833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612878620000a26000396000818161067d015281816106f701526107b101526128786000f3fe6080604052600436106100295760003560e01c80638bf6ef991461002e5780639feb673114610043575b600080fd5b61004161003c3660046121d8565b610056565b005b61004161005136600461220d565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122d6565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b61027083836122d6565b905080156102845761028460008583610853565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c34476122d6565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a33610884565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b183836122d6565b905080156104c5576104c560008583610853565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906122e9565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e833330856109c7565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff1615610765576106a681608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610be1565b60e0810151608082015160a083015160c08401516040517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016946355d735959461072e9491939092600401612302565b600060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b50505050610819565b60c081015160a082015160e08301516040517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363ea3684219390926107e69260040161237b565b6000604051808303818588803b1580156107ff57600080fd5b505af1158015610813573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108489190612448565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561087a5761064e838383610d2c565b61064e8282610e5b565b6000828082036108c0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108cf6001856122d6565b8181106108de576108de61255b565b90506020028101906108f0919061258a565b6109019060808101906060016125c8565b9050600061090e82610f85565b905073ffffffffffffffffffffffffffffffffffffffff82166109385761093534826122d6565b90505b6000610944888861103e565b9050610950888861114a565b61095d8a898989856111ab565b60008261096985610f85565b61097391906122d6565b9050898110156109b9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af691906122e9565b9050610b048286868661155d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9891906122e9565b610ba291906122d6565b14610bd9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c0157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c4e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce891906122e9565b905081811015610d2657610d268484610d21847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122d6565b611639565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d79576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a91906122e9565b905080821115610e50576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610d26848484611737565b73ffffffffffffffffffffffffffffffffffffffff8216610ea8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eeb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f45576040519150601f19603f3d011682016040523d82523d6000602084013e610f4a565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611036576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103191906122e9565b611038565b475b92915050565b60608160008167ffffffffffffffff81111561105c5761105c611f47565b604051908082528060200260200182016040528015611085578160200160208202803683370190505b5090506000805b8381101561113f578686828181106110a6576110a661255b565b90506020028101906110b8919061258a565b6110c99060808101906060016125c8565b91506110d482610f85565b8382815181106110e6576110e661255b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611137573483828151811061111f5761111f61255b565b6020026020010181815161113391906122d6565b9052505b60010161108c565b509095945050505050565b60005b8181101561064e5760008383838181106111695761116961255b565b905060200281019061117b919061258a565b611184906125e3565b90508060c00151156111a2576111a2816040015182608001516104d3565b5060010161114d565b83838383826001811461147857600085856111c76001856122d6565b8181106111d6576111d661255b565b90506020028101906111e8919061258a565b6111f99060808101906060016125c8565b9050600089815b818110156113a457368d8d8381811061121b5761121b61255b565b905060200281019061122d919061258a565b905061125c61124260608301604084016125c8565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112bf57506112bf61127560408301602084016125c8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112d657506112d661127560208301836125c8565b801561135b575061135b6112ed60a0830183612688565b6112fc916004916000916126f4565b6113059161271e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611391576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139b8f8261178d565b50600101611200565b505060005b6113b46001856122d6565b8110156114705760008888838181106113cf576113cf61255b565b90506020028101906113e1919061258a565b6113f29060808101906060016125c8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611467578582815181106114395761143961255b565b602002602001015161144a82610f85565b61145491906122d6565b9250821561146757611467818885610853565b506001016113a9565b505050611551565b8760005b8181101561154e57368b8b838181106114975761149761255b565b90506020028101906114a9919061258a565b90506114be61124260608301604084016125c8565b806114d757506114d761127560408301602084016125c8565b80156114ee57506114ee61127560208301836125c8565b801561150557506115056112ed60a0830183612688565b61153b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115458d8261178d565b5060010161147c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d269085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aa3565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156116b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d491906122e9565b6116de9190612766565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d269085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b7565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b7565b6117a361179d60208301836125c8565b3b151590565b6117d9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611819576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061182e61124260608501604086016125c8565b61183957600061183f565b82608001355b9050600061185b61185660608601604087016125c8565b610f85565b9050600061187261185660808701606088016125c8565b9050826000036118a9576118a961188f60608701604088016125c8565b61189f60408801602089016125c8565b8760800135610be1565b84608001358210156118f4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b60008061190460208801886125c8565b73ffffffffffffffffffffffffffffffffffffffff168561192860a08a018a612688565b604051611936929190612779565b60006040518083038185875af1925050503d8060008114611973576040519150601f19603f3d011682016040523d82523d6000602084013e611978565b606091505b5091509150816119c357600061198d82611baf565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612789565b60006119d861185660808a0160608b016125c8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a0960208b018b6125c8565b611a1960608c0160408d016125c8565b611a2960808d0160608e016125c8565b8c60800135898711611a3b5786611a45565b611a458a886122d6565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b05826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c2d9092919063ffffffff16565b80519091501561064e5780806020019051810190611b23919061279c565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611bf457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c106004808551611c0891906122d6565b859190611c44565b905080806020019051810190611c2691906127b9565b9392505050565b6060611c3c8484600085611d5e565b949350505050565b606081611c5281601f612766565b1015611c8a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c948284612766565b84511015611cce576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ced5760405191506000825260208201604052611d55565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d26578051835260209283019201611d0e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611df0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b73ffffffffffffffffffffffffffffffffffffffff85163b611e6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e979190612830565b60006040518083038185875af1925050503d8060008114611ed4576040519150601f19603f3d011682016040523d82523d6000602084013e611ed9565b606091505b5091509150611ee9828286611ef4565b979650505050505050565b60608315611f03575081611c26565b825115611f135782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612789565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f9a57611f9a611f47565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f9a57611f9a611f47565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561200a5761200a611f47565b604052919050565b600067ffffffffffffffff82111561202c5761202c611f47565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261206957600080fd5b813561207c61207782612012565b611fc3565b81815284602083860101111561209157600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120d257600080fd5b919050565b80151581146120e557600080fd5b50565b80356120d2816120d7565b6000610140828403121561210657600080fd5b61210e611f76565b905081358152602082013567ffffffffffffffff8082111561212f57600080fd5b61213b85838601612058565b6020840152604084013591508082111561215457600080fd5b5061216184828501612058565b604083015250612173606083016120ae565b6060820152612184608083016120ae565b608082015261219560a083016120ae565b60a082015260c082013560c082015260e082013560e08201526101006121bc8184016120e8565b908201526101206121ce8382016120e8565b9082015292915050565b6000602082840312156121ea57600080fd5b813567ffffffffffffffff81111561220157600080fd5b611c3c848285016120f3565b60008060006040848603121561222257600080fd5b833567ffffffffffffffff8082111561223a57600080fd5b612246878388016120f3565b9450602086013591508082111561225c57600080fd5b818601915086601f83011261227057600080fd5b81358181111561227f57600080fd5b8760208260051b850101111561229457600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611038576110386122a7565b6000602082840312156122fb57600080fd5b5051919050565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a0608083015261237160a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611c3c60608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60005b838110156123f55781810151838201526020016123dd565b50506000910152565b600081518084526124168160208601602086016123da565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124716101608501836123fe565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124ac83826123fe565b92505060608501516124d6608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125498187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125be57600080fd5b9190910192915050565b6000602082840312156125da57600080fd5b611c26826120ae565b600060e082360312156125f557600080fd5b6125fd611fa0565b612606836120ae565b8152612614602084016120ae565b6020820152612625604084016120ae565b6040820152612636606084016120ae565b60608201526080830135608082015260a083013567ffffffffffffffff81111561265f57600080fd5b61266b36828601612058565b60a08301525061267d60c084016120e8565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126bd57600080fd5b83018035915067ffffffffffffffff8211156126d857600080fd5b6020019150368190038213156126ed57600080fd5b9250929050565b6000808585111561270457600080fd5b8386111561271157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561275e5780818660040360031b1b83161692505b505092915050565b80820180821115611038576110386122a7565b8183823760009101908152919050565b602081526000611c2660208301846123fe565b6000602082840312156127ae57600080fd5b8151611c26816120d7565b6000602082840312156127cb57600080fd5b815167ffffffffffffffff8111156127e257600080fd5b8201601f810184136127f357600080fd5b805161280161207782612012565b81815285602083850101111561281657600080fd5b6128278260208301602086016123da565b95945050505050565b600082516125be8184602087016123da56fea2646970667358221220eee951a2ee7fee72a928091c04defdcf26408b0d4f1a1ec03e0907e5f6c0596b64736f6c63430008110033a2646970667358221220291329814a829d785146a1ec89d6bab8420c4ff95838807eca8c2d8bac7c0ba064736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): DeployScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployScript;
}
export {};
