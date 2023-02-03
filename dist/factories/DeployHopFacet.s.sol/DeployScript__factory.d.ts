import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DeployScript, DeployScriptInterface } from "../../DeployHopFacet.s.sol/DeployScript";
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
    static readonly bytecode = "0x60806040526000805460ff191660011790553480156200001e57600080fd5b506040805180820182526008815267121bdc119858d95d60c21b60208201529051634bca482160e11b815260008051602062003ae2833981519152906397949042906200008d906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000ad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d391906200057c565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003ae28339815191529063ffa18649906024016020604051808303816000875af11580156200012a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000150919062000596565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003ae28339815191529063350d56bf906064016020604051808303816000875af1158015620001ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000214919062000596565b60405163f877cb1960e01b815290915060009060008051602062003ae28339815191529063f877cb1990620002649060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000284573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002ae919081019062000604565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000344919081019062000604565b6006906200035390826200074b565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003ae28339815191529063f877cb19906064016000604051808303816000875af1158015620003b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e3919081019062000604565b600790620003f290826200074b565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003ae28339815191529063f877cb19906064016000604051808303816000875af11580156200045c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000486919081019062000604565b6008906200049590826200074b565b508083604051602001620004ab92919062000817565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000552919062000596565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084a915050565b6000602082840312156200058f57600080fd5b5051919050565b600060208284031215620005a957600080fd5b81516001600160a01b0381168114620005c157600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fb578181015183820152602001620005e1565b50506000910152565b6000602082840312156200061757600080fd5b81516001600160401b03808211156200062f57600080fd5b818401915084601f8301126200064457600080fd5b815181811115620006595762000659620005c8565b604051601f8201601f19908116603f01168101908382118183101715620006845762000684620005c8565b816040528281528760208487010111156200069e57600080fd5b620006b1836020830160208801620005de565b979650505050505050565b600181811c90821680620006d157607f821691505b602082108103620006f257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074657600081815260208120601f850160051c81016020861015620007215750805b601f850160051c820191505b8181101562000742578281556001016200072d565b5050505b505050565b81516001600160401b03811115620007675762000767620005c8565b6200077f81620007788454620006bc565b84620006f8565b602080601f831160018114620007b757600084156200079e5750858301515b600019600386901b1c1916600185901b17855562000742565b600085815260208120601f198616915b82811015620007e857888601518255948401946001909101908401620007c7565b5085821015620008075787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082b818460208801620005de565b83519083019062000841818360208801620005de565b01949350505050565b613288806200085a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b612edf8061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b50612ebf806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063e55f811014610086578063fa904c1214610099575b600080fd5b34801561005057600080fd5b5061006461005f36600461245f565b6100ac565b005b34801561007257600080fd5b50610064610081366004612492565b610209565b6100646100943660046127df565b61043e565b6100646100a736600461288b565b610683565b6100b46108cd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff16610131576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661017e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6102116108cd565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b9547f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b89060ff161561028f576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b828110156103d05760008484838181106102ae576102ae612903565b90506040020160200160208101906102c69190612932565b73ffffffffffffffffffffffffffffffffffffffff1603610313576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061032557610325612903565b905060400201602001602081019061033d9190612932565b82600086868581811061035257610352612903565b6103689260206040909202019081019150612932565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806103c88161297c565b915050610292565b50600181810180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690911790556040517f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde39061043190859085906129b4565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104b9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104ca3447612a23565b905086806101000151610509576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610547576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861056a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361061c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106318a600001518b60c001518b8b33610942565b60c08b01526106408a88610a8a565b5047915060009050828211610656576000610660565b6106608383612a23565b905080156106745761067460008583610d0a565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106fe576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061070f3447612a23565b9050848061010001511561074f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561078d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866107b08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156107e7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610825576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610862576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087488608001518960c00151610d40565b61088c88610887368a90038a018a612a36565b610a8a565b50479150600090508282116108a25760006108ac565b6108ac8383612a23565b905080156108c0576108c060008583610d0a565b5050600090925550505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610940576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008280820361097e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561098d600185612a23565b81811061099c5761099c612903565b90506020028101906109ae9190612a52565b6109bf906080810190606001612932565b905060006109cc82610eb6565b905073ffffffffffffffffffffffffffffffffffffffff82166109f6576109f33482612a23565b90505b6000610a028888610f6f565b9050610a0e888861107b565b610a1b8a898989856110dc565b600082610a2785610eb6565b610a319190612a23565b905089811015610a7c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660009081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610aee908490839061148e565b600073ffffffffffffffffffffffffffffffffffffffff841615610b13576000610b19565b8560c001515b905046600103610bec5760e086015160a087015160c0880151606088015160808901516040517fdeace8f5000000000000000000000000000000000000000000000000000000008152600481019590955273ffffffffffffffffffffffffffffffffffffffff9384166024860152604485019290925260648401526084830152600060a4830181905260c483015283169063deace8f590839060e4016000604051808303818588803b158015610bce57600080fd5b505af1158015610be2573d6000803e3d6000fd5b5050505050610ccb565b60e086015160a087015160c0880151875160208901516040808b015160608c015160808d015192517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019890985273ffffffffffffffffffffffffffffffffffffffff968716602489015260448801959095526064870193909352608486019190915260a485019190915260c484019190915260e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610cb157600080fd5b505af1158015610cc5573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610cfa9190612afe565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610d3657610d318383836115d9565b505050565b610d318282611708565b73ffffffffffffffffffffffffffffffffffffffff8216610d995780341015610d95576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610dd3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610e40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e649190612c11565b905081811015610eaa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a73565b610d3183333085611832565b600073ffffffffffffffffffffffffffffffffffffffff821615610f67576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f629190612c11565b610f69565b475b92915050565b60608160008167ffffffffffffffff811115610f8d57610f8d612507565b604051908082528060200260200182016040528015610fb6578160200160208202803683370190505b5090506000805b8381101561107057868682818110610fd757610fd7612903565b9050602002810190610fe99190612a52565b610ffa906080810190606001612932565b915061100582610eb6565b83828151811061101757611017612903565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611068573483828151811061105057611050612903565b602002602001018181516110649190612a23565b9052505b600101610fbd565b509095945050505050565b60005b81811015610d3157600083838381811061109a5761109a612903565b90506020028101906110ac9190612a52565b6110b590612c2a565b90508060c00151156110d3576110d381604001518260800151610d40565b5060010161107e565b8383838382600181146113a957600085856110f8600185612a23565b81811061110757611107612903565b90506020028101906111199190612a52565b61112a906080810190606001612932565b9050600089815b818110156112d557368d8d8381811061114c5761114c612903565b905060200281019061115e9190612a52565b905061118d6111736060830160408401612932565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111f057506111f06111a66040830160208401612932565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561120757506112076111a66020830183612932565b801561128c575061128c61121e60a0830183612ccf565b61122d91600491600091612d3b565b61123691612d65565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112c2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112cc8f82611a4c565b50600101611131565b505060005b6112e5600185612a23565b8110156113a157600088888381811061130057611300612903565b90506020028101906113129190612a52565b611323906080810190606001612932565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113985785828151811061136a5761136a612903565b602002602001015161137b82610eb6565b6113859190612a23565b9250821561139857611398818885610d0a565b506001016112da565b505050611482565b8760005b8181101561147f57368b8b838181106113c8576113c8612903565b90506020028101906113da9190612a52565b90506113ef6111736060830160408401612932565b8061140857506114086111a66040830160208401612932565b801561141f575061141f6111a66020830183612932565b8015611436575061143661121e60a0830183612ccf565b61146c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114768d82611a4c565b506001016113ad565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114ae57505050565b73ffffffffffffffffffffffffffffffffffffffff82166114fb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611571573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115959190612c11565b9050818110156115d3576115d384846115ce847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612a23565b611d62565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611626576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611693573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116b79190612c11565b9050808211156116fd576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a73565b6115d3848484611ede565b73ffffffffffffffffffffffffffffffffffffffff8216611755576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611798576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a73565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117f2576040519150601f19603f3d011682016040523d82523d6000602084013e6117f7565b606091505b5050905080610d31576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661187f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118cc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561193d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119619190612c11565b905061196f82868686611f34565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a039190612c11565b611a0d9190612a23565b14611a44576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a62611a5c6020830183612932565b3b151590565b611a98576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ad8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aed6111736060850160408601612932565b611af8576000611afe565b82608001355b90506000611b1a611b156060860160408701612932565b610eb6565b90506000611b31611b156080870160608801612932565b905082600003611b6857611b68611b4e6060870160408801612932565b611b5e6040880160208901612932565b876080013561148e565b8460800135821015611bb3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a73565b600080611bc36020880188612932565b73ffffffffffffffffffffffffffffffffffffffff1685611be760a08a018a612ccf565b604051611bf5929190612dad565b60006040518083038185875af1925050503d8060008114611c32576040519150601f19603f3d011682016040523d82523d6000602084013e611c37565b606091505b509150915081611c82576000611c4c82611f92565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a739190612dbd565b6000611c97611b1560808a0160608b01612932565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611cc860208b018b612932565b611cd860608c0160408d01612932565b611ce860808d0160608e01612932565b8c60800135898711611cfa5786611d04565b611d048a88612a23565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611dd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfd9190612c11565b611e079190612dd0565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506115d39085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612010565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d319084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e5c565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115d39085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611e5c565b6060604482511015611fd757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ff36004808551611feb9190612a23565b85919061211c565b9050808060200190518101906120099190612de3565b9392505050565b6000612072826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122369092919063ffffffff16565b805190915015610d3157808060200190518101906120909190612e5a565b610d31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a73565b60608161212a81601f612dd0565b1015612162576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61216c8284612dd0565b845110156121a6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156121c5576040519150600082526020820160405261222d565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121fe5780518352602092830192016121e6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060612245848460008561224d565b949350505050565b6060824710156122df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a73565b73ffffffffffffffffffffffffffffffffffffffff85163b61235d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a73565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123869190612e77565b60006040518083038185875af1925050503d80600081146123c3576040519150601f19603f3d011682016040523d82523d6000602084013e6123c8565b606091505b50915091506123d88282866123e3565b979650505050505050565b606083156123f2575081612009565b8251156124025782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a739190612dbd565b803573ffffffffffffffffffffffffffffffffffffffff8116811461245a57600080fd5b919050565b6000806040838503121561247257600080fd5b61247b83612436565b915061248960208401612436565b90509250929050565b600080602083850312156124a557600080fd5b823567ffffffffffffffff808211156124bd57600080fd5b818501915085601f8301126124d157600080fd5b8135818111156124e057600080fd5b8660208260061b85010111156124f557600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561255a5761255a612507565b60405290565b60405160e0810167ffffffffffffffff8111828210171561255a5761255a612507565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156125ca576125ca612507565b604052919050565b600067ffffffffffffffff8211156125ec576125ec612507565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261262957600080fd5b813561263c612637826125d2565b612583565b81815284602083860101111561265157600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461267c57600080fd5b50565b803561245a8161266e565b6000610140828403121561269d57600080fd5b6126a5612536565b905081358152602082013567ffffffffffffffff808211156126c657600080fd5b6126d285838601612618565b602084015260408401359150808211156126eb57600080fd5b506126f884828501612618565b60408301525061270a60608301612436565b606082015261271b60808301612436565b608082015261272c60a08301612436565b60a082015260c082013560c082015260e082013560e082015261010061275381840161267f565b9082015261012061276583820161267f565b9082015292915050565b600060a0828403121561278157600080fd5b60405160a0810181811067ffffffffffffffff821117156127a4576127a4612507565b806040525080915082358152602083013560208201526040830135604082015260608301356060820152608083013560808201525092915050565b60008060008060e085870312156127f557600080fd5b843567ffffffffffffffff8082111561280d57600080fd5b6128198883890161268a565b9550602087013591508082111561282f57600080fd5b818701915087601f83011261284357600080fd5b81358181111561285257600080fd5b8860208260051b850101111561286757600080fd5b602083019550809450505050612880866040870161276f565b905092959194509250565b60008082840360c081121561289f57600080fd5b833567ffffffffffffffff8111156128b657600080fd5b6128c28682870161268a565b93505060a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0820112156128f557600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561294457600080fd5b61200982612436565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036129ad576129ad61294d565b5060010190565b6020808252818101839052600090604080840186845b87811015612a165773ffffffffffffffffffffffffffffffffffffffff806129f184612436565b16845280612a00878501612436565b16848701525091830191908301906001016129ca565b5090979650505050505050565b81810381811115610f6957610f6961294d565b600060a08284031215612a4857600080fd5b612009838361276f565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a8657600080fd5b9190910192915050565b60005b83811015612aab578181015183820152602001612a93565b50506000910152565b60008151808452612acc816020860160208601612a90565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612b27610160850183612ab4565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b628382612ab4565b9250506060850151612b8c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612bff8187018315159052565b90950151151593019290925250919050565b600060208284031215612c2357600080fd5b5051919050565b600060e08236031215612c3c57600080fd5b612c44612560565b612c4d83612436565b8152612c5b60208401612436565b6020820152612c6c60408401612436565b6040820152612c7d60608401612436565b60608201526080830135608082015260a083013567ffffffffffffffff811115612ca657600080fd5b612cb236828601612618565b60a083015250612cc460c0840161267f565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612d0457600080fd5b83018035915067ffffffffffffffff821115612d1f57600080fd5b602001915036819003821315612d3457600080fd5b9250929050565b60008085851115612d4b57600080fd5b83861115612d5857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612da55780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006120096020830184612ab4565b80820180821115610f6957610f6961294d565b600060208284031215612df557600080fd5b815167ffffffffffffffff811115612e0c57600080fd5b8201601f81018413612e1d57600080fd5b8051612e2b612637826125d2565b818152856020838501011115612e4057600080fd5b612e51826020830160208601612a90565b95945050505050565b600060208284031215612e6c57600080fd5b81516120098161266e565b60008251612a86818460208701612a9056fea2646970667358221220b6ddeac1f4e62aa1c43a3969cc6364aea733b9c4418ef9c56b08ed433f0bb74264736f6c63430008110033a2646970667358221220a82b9308aa9fa722ec3959af318e121b16992e643fcbfc3dfca6c7425059e42964736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";
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
