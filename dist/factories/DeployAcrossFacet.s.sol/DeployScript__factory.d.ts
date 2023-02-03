import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployScript, DeployScriptInterface } from "../../DeployAcrossFacet.s.sol/DeployScript";
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
    static readonly bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600b81526a1058dc9bdcdcd19858d95d60aa1b60208201529051634bca482160e11b815260008051602062003cad8339815191529063979490429062000090906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d691906200057f565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003cad8339815191529063ffa18649906024016020604051808303816000875af11580156200012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000153919062000599565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003cad8339815191529063350d56bf906064016020604051808303816000875af1158015620001f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000217919062000599565b60405163f877cb1960e01b815290915060009060008051602062003cad8339815191529063f877cb1990620002679060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b1919081019062000607565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000347919081019062000607565b6006906200035690826200074e565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003cad8339815191529063f877cb19906064016000604051808303816000875af1158015620003bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e6919081019062000607565b600790620003f590826200074e565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003cad8339815191529063f877cb19906064016000604051808303816000875af11580156200045f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000489919081019062000607565b6008906200049890826200074e565b508083604051602001620004ae9291906200081a565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000555919062000599565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084d915050565b6000602082840312156200059257600080fd5b5051919050565b600060208284031215620005ac57600080fd5b81516001600160a01b0381168114620005c457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fe578181015183820152602001620005e4565b50506000910152565b6000602082840312156200061a57600080fd5b81516001600160401b03808211156200063257600080fd5b818401915084601f8301126200064757600080fd5b8151818111156200065c576200065c620005cb565b604051601f8201601f19908116603f01168101908382118183101715620006875762000687620005cb565b81604052828152876020848701011115620006a157600080fd5b620006b4836020830160208801620005e1565b979650505050505050565b600181811c90821680620006d457607f821691505b602082108103620006f557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074957600081815260208120601f850160051c81016020861015620007245750805b601f850160051c820191505b81811015620007455782815560010162000730565b5050505b505050565b81516001600160401b038111156200076a576200076a620005cb565b62000782816200077b8454620006bf565b84620006fb565b602080601f831160018114620007ba5760008415620007a15750858301515b600019600386901b1c1916600185901b17855562000745565b600085815260208120601f198616915b82811015620007eb57888601518255948401946001909101908401620007ca565b50858210156200080a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082e818460208801620005e1565b83519083019062000844818360208801620005e1565b01949350505050565b613450806200085d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b604051610082929190610701565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261018091908101906107f9565b6040516020016101909190610842565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610883565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261027691908101906107f9565b905060006102c4600760405160200161028f919061096a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905283906105b2565b9050600061031260076040516020016102dd91906109c9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905284906105b2565b6040805173ffffffffffffffffffffffffffffffffffffffff8086166020830152831691810191909152909150606001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529550737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b5050505061041160035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561043957505060035473ffffffffffffffffffffffffffffffffffffffff16949293505050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a919061046e60208201610686565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526104b091908a90602001610a28565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016104dc929190610a57565b6020604051808303816000875af11580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f9190610a95565b95507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561059257600080fd5b505af11580156105a6573d6000803e3d6000fd5b50505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906106079086908690600401610ab2565b6000604051808303816000875af1158015610626573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261066c91908101906107f9565b80602001905181019061067f9190610a95565b9392505050565b61293a80610ae183390190565b60005b838110156106ae578181015183820152602001610696565b50506000910152565b600081518084526106cf816020860160208601610693565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061073060408301846106b7565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561078257610782610738565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156107c8576107c8610738565b816040528093508581528686860111156107e157600080fd5b6107ef866020830187610693565b5050509392505050565b60006020828403121561080b57600080fd5b815167ffffffffffffffff81111561082257600080fd5b8201601f8101841361083357600080fd5b61073084825160208401610767565b60008251610854818460208701610693565b7f2f636f6e6669672f6163726f73732e6a736f6e00000000000000000000000000920191825250601301919050565b60208152600061067f60208301846106b7565b8054600090600181811c90808316806108b057607f831692505b602080841082036108ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b8180156108fe57600181146109315761095e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284151585028901965061095e565b60008881526020902060005b868110156109565781548b82015290850190830161093d565b505084890196505b50505050505092915050565b7f2e000000000000000000000000000000000000000000000000000000000000008152600061099c6001830184610896565b7f2e6163726f737353706f6b65506f6f6c0000000000000000000000000000000081526010019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006109fb6001830184610896565b7f2e7765746800000000000000000000000000000000000000000000000000000081526005019392505050565b60008351610a3a818460208801610693565b835190830190610a4e818360208801610693565b01949350505050565b82815260406020820152600061073060408301846106b7565b73ffffffffffffffffffffffffffffffffffffffff81168114610a9257600080fd5b50565b600060208284031215610aa757600080fd5b815161067f81610a70565b604081526000610ac560408301856106b7565b8281036020840152610ad781856106b7565b9594505050505056fe60c06040523480156200001157600080fd5b506040516200293a3803806200293a833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612869620000d1600039600061065401526000818161068201526106ad01526128696000f3fe6080604052600436106100295760003560e01c80634eefe3a51461002e578063ba66bd9a14610043575b600080fd5b61004161003c366004612230565b610056565b005b6100416100513660046122dc565b61029b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612383565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104e5565b60c08b01526102588a8861062d565b504791506000905082821161026e576000610278565b6102788383612383565b9050801561028c5761028c600085836107fd565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610316576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103273447612383565b90508461034c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610383576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103fe576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561043c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561047a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048c88608001518960c00151610833565b6104a48861049f368a90038a018a612396565b61062d565b50479150600090508282116104ba5760006104c4565b6104c48383612383565b905080156104d8576104d8600085836107fd565b5050600090925550505050565b600082808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610530600185612383565b81811061053f5761053f6123b2565b905060200281019061055191906123e1565b61056290608081019060600161241f565b9050600061056f826109a9565b905073ffffffffffffffffffffffffffffffffffffffff8216610599576105963482612383565b90505b60006105a58888610a62565b90506105b18888610b6e565b6105be8a89898985610bcf565b6000826105ca856109a9565b6105d49190612383565b90508981101561061f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff81161590811561067857507f00000000000000000000000000000000000000000000000000000000000000006106ab565b6106ab84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f81565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166349228978836106f35760006106f9565b8560c001515b60a087015160c088015160e0808a0151895160208b01516040519388901b7fffffffff0000000000000000000000000000000000000000000000000000000016845273ffffffffffffffffffffffffffffffffffffffff958616600485015294891660248401526044830193909352606482015267ffffffffffffffff909116608482015263ffffffff90911660a482015260c4016000604051808303818588803b1580156107a757600080fd5b505af11580156107bb573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107ef91906124a8565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610829576108248383836110cc565b505050565b61082482826111fb565b73ffffffffffffffffffffffffffffffffffffffff821661088c5780341015610888576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036108c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095791906125bb565b90508181101561099d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b61082483333085611325565b600073ffffffffffffffffffffffffffffffffffffffff821615610a5a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5591906125bb565b610a5c565b475b92915050565b60608160008167ffffffffffffffff811115610a8057610a80611f29565b604051908082528060200260200182016040528015610aa9578160200160208202803683370190505b5090506000805b83811015610b6357868682818110610aca57610aca6123b2565b9050602002810190610adc91906123e1565b610aed90608081019060600161241f565b9150610af8826109a9565b838281518110610b0a57610b0a6123b2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b5b5734838281518110610b4357610b436123b2565b60200260200101818151610b579190612383565b9052505b600101610ab0565b509095945050505050565b60005b81811015610824576000838383818110610b8d57610b8d6123b2565b9050602002810190610b9f91906123e1565b610ba8906125d4565b90508060c0015115610bc657610bc681604001518260800151610833565b50600101610b71565b838383838260018114610e9c5760008585610beb600185612383565b818110610bfa57610bfa6123b2565b9050602002810190610c0c91906123e1565b610c1d90608081019060600161241f565b9050600089815b81811015610dc857368d8d83818110610c3f57610c3f6123b2565b9050602002810190610c5191906123e1565b9050610c80610c66606083016040840161241f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ce35750610ce3610c99604083016020840161241f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cfa5750610cfa610c99602083018361241f565b8015610d7f5750610d7f610d1160a0830183612679565b610d20916004916000916126e5565b610d299161270f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610db5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dbf8f8261153f565b50600101610c24565b505060005b610dd8600185612383565b811015610e94576000888883818110610df357610df36123b2565b9050602002810190610e0591906123e1565b610e1690608081019060600161241f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e8b57858281518110610e5d57610e5d6123b2565b6020026020010151610e6e826109a9565b610e789190612383565b92508215610e8b57610e8b8188856107fd565b50600101610dcd565b505050610f75565b8760005b81811015610f7257368b8b83818110610ebb57610ebb6123b2565b9050602002810190610ecd91906123e1565b9050610ee2610c66606083016040840161241f565b80610efb5750610efb610c99604083016020840161241f565b8015610f125750610f12610c99602083018361241f565b8015610f295750610f29610d1160a0830183612679565b610f5f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f698d8261153f565b50600101610ea0565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fa157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108891906125bb565b9050818110156110c6576110c684846110c1847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612383565b611855565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611119576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa91906125bb565b9050808211156111f0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b6110c68484846119d1565b73ffffffffffffffffffffffffffffffffffffffff8216611248576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561128b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610616565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112e5576040519150601f19603f3d011682016040523d82523d6000602084013e6112ea565b606091505b5050905080610824576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611372576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113bf576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611430573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145491906125bb565b905061146282868686611a27565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f691906125bb565b6115009190612383565b14611537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61155561154f602083018361241f565b3b151590565b61158b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115cb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115e0610c66606085016040860161241f565b6115eb5760006115f1565b82608001355b9050600061160d611608606086016040870161241f565b6109a9565b90506000611624611608608087016060880161241f565b90508260000361165b5761165b611641606087016040880161241f565b611651604088016020890161241f565b8760800135610f81565b84608001358210156116a6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610616565b6000806116b6602088018861241f565b73ffffffffffffffffffffffffffffffffffffffff16856116da60a08a018a612679565b6040516116e8929190612757565b60006040518083038185875af1925050503d8060008114611725576040519150601f19603f3d011682016040523d82523d6000602084013e61172a565b606091505b50915091508161177557600061173f82611a85565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612767565b600061178a61160860808a0160608b0161241f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117bb60208b018b61241f565b6117cb60608c0160408d0161241f565b6117db60808d0160608e0161241f565b8c608001358987116117ed57866117f7565b6117f78a88612383565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156118cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f091906125bb565b6118fa919061277a565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506110c69085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b03565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108249084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161194f565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110c69085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161194f565b6060604482511015611aca57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ae66004808551611ade9190612383565b859190611c0f565b905080806020019051810190611afc919061278d565b9392505050565b6000611b65826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d299092919063ffffffff16565b8051909150156108245780806020019051810190611b839190612804565b610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610616565b606081611c1d81601f61277a565b1015611c55576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c5f828461277a565b84511015611c99576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cb85760405191506000825260208201604052611d20565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611cf1578051835260209283019201611cd9565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611d388484600085611d40565b949350505050565b606082471015611dd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610616565b73ffffffffffffffffffffffffffffffffffffffff85163b611e50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610616565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e799190612821565b60006040518083038185875af1925050503d8060008114611eb6576040519150601f19603f3d011682016040523d82523d6000602084013e611ebb565b606091505b5091509150611ecb828286611ed6565b979650505050505050565b60608315611ee5575081611afc565b825115611ef55782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612767565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f7c57611f7c611f29565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f7c57611f7c611f29565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fec57611fec611f29565b604052919050565b600067ffffffffffffffff82111561200e5761200e611f29565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261204b57600080fd5b813561205e61205982611ff4565b611fa5565b81815284602083860101111561207357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120b457600080fd5b919050565b80151581146120c757600080fd5b50565b80356120b4816120b9565b600061014082840312156120e857600080fd5b6120f0611f58565b905081358152602082013567ffffffffffffffff8082111561211157600080fd5b61211d8583860161203a565b6020840152604084013591508082111561213657600080fd5b506121438482850161203a565b60408301525061215560608301612090565b606082015261216660808301612090565b608082015261217760a08301612090565b60a082015260c082013560c082015260e082013560e082015261010061219e8184016120ca565b908201526101206121b08382016120ca565b9082015292915050565b6000604082840312156121cc57600080fd5b6040516040810167ffffffffffffffff82821081831117156121f0576121f0611f29565b8160405282935084359150808216821461220957600080fd5b508152602083013563ffffffff8116811461222357600080fd5b6020919091015292915050565b6000806000806080858703121561224657600080fd5b843567ffffffffffffffff8082111561225e57600080fd5b61226a888389016120d5565b9550602087013591508082111561228057600080fd5b818701915087601f83011261229457600080fd5b8135818111156122a357600080fd5b8860208260051b85010111156122b857600080fd5b6020830195508094505050506122d186604087016121ba565b905092959194509250565b60008082840360608112156122f057600080fd5b833567ffffffffffffffff81111561230757600080fd5b612313868287016120d5565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561234657600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a5c57610a5c612354565b6000604082840312156123a857600080fd5b611afc83836121ba565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261241557600080fd5b9190910192915050565b60006020828403121561243157600080fd5b611afc82612090565b60005b8381101561245557818101518382015260200161243d565b50506000910152565b6000815180845261247681602086016020860161243a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124d161016085018361245e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261250c838261245e565b9250506060850151612536608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125a98187018315159052565b90950151151593019290925250919050565b6000602082840312156125cd57600080fd5b5051919050565b600060e082360312156125e657600080fd5b6125ee611f82565b6125f783612090565b815261260560208401612090565b602082015261261660408401612090565b604082015261262760608401612090565b60608201526080830135608082015260a083013567ffffffffffffffff81111561265057600080fd5b61265c3682860161203a565b60a08301525061266e60c084016120ca565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126ae57600080fd5b83018035915067ffffffffffffffff8211156126c957600080fd5b6020019150368190038213156126de57600080fd5b9250929050565b600080858511156126f557600080fd5b8386111561270257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561274f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611afc602083018461245e565b80820180821115610a5c57610a5c612354565b60006020828403121561279f57600080fd5b815167ffffffffffffffff8111156127b657600080fd5b8201601f810184136127c757600080fd5b80516127d561205982611ff4565b8181528560208385010111156127ea57600080fd5b6127fb82602083016020860161243a565b95945050505050565b60006020828403121561281657600080fd5b8151611afc816120b9565b6000825161241581846020870161243a56fea264697066735822122073794cbc9a9c0e698c07a269bbf7e05c7202b6475fc7784daf759119d0fa08f564736f6c63430008110033a26469706673582212206fae0853868463466856c16d4e03f740b66b1cadec1389e35f8a28636b6ba0cd64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
