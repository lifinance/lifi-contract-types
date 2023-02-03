/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployAmarokFacet.s.sol/DeployScript";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IS_SCRIPT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "run",
    outputs: [
      {
        internalType: "contract AmarokFacet",
        name: "deployed",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "constructorArgs",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600b81526a105b585c9bdad19858d95d60aa1b60208201529051634bca482160e11b815260008051602062003f628339815191529063979490429062000090906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d691906200057f565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003f628339815191529063ffa18649906024016020604051808303816000875af11580156200012d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000153919062000599565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003f628339815191529063350d56bf906064016020604051808303816000875af1158015620001f1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000217919062000599565b60405163f877cb1960e01b815290915060009060008051602062003f628339815191529063f877cb1990620002679060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000287573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b1919081019062000607565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000347919081019062000607565b6006906200035690826200074e565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003f628339815191529063f877cb19906064016000604051808303816000875af1158015620003bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e6919081019062000607565b600790620003f590826200074e565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003f628339815191529063f877cb19906064016000604051808303816000875af11580156200045f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000489919081019062000607565b6008906200049890826200074e565b508083604051602001620004ae9291906200081a565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa1580156200052f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000555919062000599565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084d915050565b6000602082840312156200059257600080fd5b5051919050565b600060208284031215620005ac57600080fd5b81516001600160a01b0381168114620005c457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005fe578181015183820152602001620005e4565b50506000910152565b6000602082840312156200061a57600080fd5b81516001600160401b03808211156200063257600080fd5b818401915084601f8301126200064757600080fd5b8151818111156200065c576200065c620005cb565b604051601f8201601f19908116603f01168101908382118183101715620006875762000687620005cb565b81604052828152876020848701011115620006a157600080fd5b620006b4836020830160208801620005e1565b979650505050505050565b600181811c90821680620006d457607f821691505b602082108103620006f557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074957600081815260208120601f850160051c81016020861015620007245750805b601f850160051c820191505b81811015620007455782815560010162000730565b5050505b505050565b81516001600160401b038111156200076a576200076a620005cb565b62000782816200077b8454620006bf565b84620006fb565b602080601f831160018114620007ba5760008415620007a15750858301515b600019600386901b1c1916600185901b17855562000745565b600085815260208120601f198616915b82811015620007eb57888601518255948401946001909101908401620007ca565b50858210156200080a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082e818460208801620005e1565b83519083019062000844818360208801620005e1565b01949350505050565b613705806200085d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b604051610082929190610701565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261018091908101906107f9565b6040516020016101909190610842565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610883565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261027691908101906107f9565b905060006102c4600760405160200161028f919061096a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905283906105b2565b9050600061031260076040516020016102dd91906109c9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905284906105b2565b6040805173ffffffffffffffffffffffffffffffffffffffff8086166020830152831691810191909152909150606001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529550737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156103d757600080fd5b505af11580156103eb573d6000803e3d6000fd5b5050505061041160035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561043957505060035473ffffffffffffffffffffffffffffffffffffffff16949293505050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a919061046e60208201610686565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190526104b091908a90602001610a28565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016104dc929190610a57565b6020604051808303816000875af11580156104fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051f9190610a95565b95507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561059257600080fd5b505af11580156105a6573d6000803e3d6000fd5b50505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906106079086908690600401610ab2565b6000604051808303816000875af1158015610626573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261066c91908101906107f9565b80602001905181019061067f9190610a95565b9392505050565b612bef80610ae183390190565b60005b838110156106ae578181015183820152602001610696565b50506000910152565b600081518084526106cf816020860160208601610693565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061073060408301846106b7565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561078257610782610738565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156107c8576107c8610738565b816040528093508581528686860111156107e157600080fd5b6107ef866020830187610693565b5050509392505050565b60006020828403121561080b57600080fd5b815167ffffffffffffffff81111561082257600080fd5b8201601f8101841361083357600080fd5b61073084825160208401610767565b60008251610854818460208701610693565b7f2f636f6e6669672f616d61726f6b2e6a736f6e00000000000000000000000000920191825250601301919050565b60208152600061067f60208301846106b7565b8054600090600181811c90808316806108b057607f831692505b602080841082036108ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b8180156108fe57600181146109315761095e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284151585028901965061095e565b60008881526020902060005b868110156109565781548b82015290850190830161093d565b505084890196505b50505050505092915050565b7f2e000000000000000000000000000000000000000000000000000000000000008152600061099c6001830184610896565b7f2e636f6e6e65787448616e646c657200000000000000000000000000000000008152600f019392505050565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006109fb6001830184610896565b7f2e646f6d61696e0000000000000000000000000000000000000000000000000081526007019392505050565b60008351610a3a818460208801610693565b835190830190610a4e818360208801610693565b01949350505050565b82815260406020820152600061073060408301846106b7565b73ffffffffffffffffffffffffffffffffffffffff81168114610a9257600080fd5b50565b600060208284031215610aa757600080fd5b815161067f81610a70565b604081526000610ac560408301856106b7565b8281036020840152610ad781856106b7565b9594505050505056fe60c06040523480156200001157600080fd5b5060405162002bef38038062002bef833981016040819052620000349162000051565b6001600160a01b0390911660805263ffffffff1660a052620000a3565b600080604083850312156200006557600080fd5b82516001600160a01b03811681146200007d57600080fd5b602084015190925063ffffffff811681146200009857600080fd5b809150509250929050565b60805160a051612b22620000cd600039600050506000818161087f01526108ce0152612b226000f3fe6080604052600436106100345760003560e01c8063280c6deb1461003957806364a74ee21461005b578063ef27dc6f1461006e575b600080fd5b34801561004557600080fd5b50610059610054366004612156565b610081565b005b610059610069366004612438565b61011c565b61005961007c3660046124f7565b6103c7565b610089610690565b60007feb4198458a814793befc1a2917bf545aff2a1c03cd5d74bd029e61245d484aaf60008481526020829052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff871690811790915590519293509185917ff7d9e84ed3fcc363e379b957a2727eab9d6cb676f99533cbe3b68dadc0153dd991a3505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610197576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101a83447612593565b9050868061010001516101e7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761020a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610241576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361027f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102bc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102df816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610316576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896101200151151561032788610705565b151514610360576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103758a600001518b60c001518b8b3361071c565b60c08b01526103848a88610864565b504791506000905082821161039a5760006103a4565b6103a48383612593565b905080156103b8576103b8600085836109b3565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610442576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104533447612593565b905061045e856125a6565b8061010001511561049b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a4866125a6565b60a081015173ffffffffffffffffffffffffffffffffffffffff166104f5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610533576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610570576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610579876125a6565b608081015173ffffffffffffffffffffffffffffffffffffffff166105ca576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105dc61014089016101208a016125b2565b15156105e788610705565b151514610620576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063d61063360a08a0160808b016125cf565b8960c001356109e9565b61064f610649896125a6565b88610864565b504791506000905082821161066557600061066f565b61066f8383612593565b9050801561068357610683600085836109b3565b5050600090925550505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610703576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60008061071283806125ea565b9050119050919050565b600082808203610758576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610767600185612593565b81811061077657610776612656565b90506020028101906107889190612685565b6107999060808101906060016125cf565b905060006107a682610b5f565b905073ffffffffffffffffffffffffffffffffffffffff82166107d0576107cd3482612593565b90505b60006107dc8888610c18565b90506107e88888610d24565b6107f58a89898985610d85565b60008261080185610b5f565b61080b9190612593565b905089811015610856576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60006108738360e00151611137565b90506108a883608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516111b5565b60a0830151608084015160c085015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692638aac16ba9260408701359286929190829060608a01356109108b806125ea565b6040518a63ffffffff1660e01b81526004016109339897969594939291906126c3565b60206040518083038185885af1158015610951573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610976919061275f565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109a691906127e6565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316156109df576109da838383611300565b505050565b6109da828261142f565b73ffffffffffffffffffffffffffffffffffffffff8216610a425780341015610a3e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610a7c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0d919061275f565b905081811015610b53576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161084d565b6109da83333085611559565b600073ffffffffffffffffffffffffffffffffffffffff821615610c10576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0b919061275f565b610c12565b475b92915050565b60608160008167ffffffffffffffff811115610c3657610c3661218f565b604051908082528060200260200182016040528015610c5f578160200160208202803683370190505b5090506000805b83811015610d1957868682818110610c8057610c80612656565b9050602002810190610c929190612685565b610ca39060808101906060016125cf565b9150610cae82610b5f565b838281518110610cc057610cc0612656565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d115734838281518110610cf957610cf9612656565b60200260200101818151610d0d9190612593565b9052505b600101610c66565b509095945050505050565b60005b818110156109da576000838383818110610d4357610d43612656565b9050602002810190610d559190612685565b610d5e906128f9565b90508060c0015115610d7c57610d7c816040015182608001516109e9565b50600101610d27565b8383838382600181146110525760008585610da1600185612593565b818110610db057610db0612656565b9050602002810190610dc29190612685565b610dd39060808101906060016125cf565b9050600089815b81811015610f7e57368d8d83818110610df557610df5612656565b9050602002810190610e079190612685565b9050610e36610e1c60608301604084016125cf565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e995750610e99610e4f60408301602084016125cf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610eb05750610eb0610e4f60208301836125cf565b8015610f355750610f35610ec760a08301836125ea565b610ed69160049160009161299e565b610edf916129c8565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f6b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f758f82611773565b50600101610dda565b505060005b610f8e600185612593565b81101561104a576000888883818110610fa957610fa9612656565b9050602002810190610fbb9190612685565b610fcc9060808101906060016125cf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110415785828151811061101357611013612656565b602002602001015161102482610b5f565b61102e9190612593565b92508215611041576110418188856109b3565b50600101610f83565b50505061112b565b8760005b8181101561112857368b8b8381811061107157611071612656565b90506020028101906110839190612685565b9050611098610e1c60608301604084016125cf565b806110b157506110b1610e4f60408301602084016125cf565b80156110c857506110c8610e4f60208301836125cf565b80156110df57506110df610ec760a08301836125ea565b611115576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61111f8d82611773565b50600101611056565b50505b50505050505050505050565b60008181527feb4198458a814793befc1a2917bf545aff2a1c03cd5d74bd029e61245d484aaf6020819052604082205463ffffffff168083036111ae576040517f34d1a6a800000000000000000000000000000000000000000000000000000000815263ffffffff8216600482015260240161084d565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff83166111d557505050565b73ffffffffffffffffffffffffffffffffffffffff8216611222576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611298573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bc919061275f565b9050818110156112fa576112fa84846112f5847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612593565b611a89565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661134d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113de919061275f565b905080821115611424576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161084d565b6112fa848484611c05565b73ffffffffffffffffffffffffffffffffffffffff821661147c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114bf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161084d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611519576040519150601f19603f3d011682016040523d82523d6000602084013e61151e565b606091505b50509050806109da576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611664573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611688919061275f565b905061169682868686611c5b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172a919061275f565b6117349190612593565b1461176b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61178961178360208301836125cf565b3b151590565b6117bf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117ff576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611814610e1c60608501604086016125cf565b61181f576000611825565b82608001355b9050600061184161183c60608601604087016125cf565b610b5f565b9050600061185861183c60808701606088016125cf565b90508260000361188f5761188f61187560608701604088016125cf565b61188560408801602089016125cf565b87608001356111b5565b84608001358210156118da576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161084d565b6000806118ea60208801886125cf565b73ffffffffffffffffffffffffffffffffffffffff168561190e60a08a018a6125ea565b60405161191c929190612a10565b60006040518083038185875af1925050503d8060008114611959576040519150601f19603f3d011682016040523d82523d6000602084013e61195e565b606091505b5091509150816119a957600061197382611cb9565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d9190612a20565b60006119be61183c60808a0160608b016125cf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119ef60208b018b6125cf565b6119ff60608c0160408d016125cf565b611a0f60808d0160608e016125cf565b8c60800135898711611a215786611a2b565b611a2b8a88612593565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611b00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b24919061275f565b611b2e9190612a33565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506112fa9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d30565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109da9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b83565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112fa9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b83565b6060604482511015611cfe57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611d1a6004808551611d129190612593565b859190611e3c565b9050808060200190518101906111ae9190612a46565b6000611d92826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f569092919063ffffffff16565b8051909150156109da5780806020019051810190611db09190612abd565b6109da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161084d565b606081611e4a81601f612a33565b1015611e82576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e8c8284612a33565b84511015611ec6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ee55760405191506000825260208201604052611f4d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611f1e578051835260209283019201611f06565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611f658484600085611f6d565b949350505050565b606082471015611fff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161084d565b73ffffffffffffffffffffffffffffffffffffffff85163b61207d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161084d565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120a69190612ada565b60006040518083038185875af1925050503d80600081146120e3576040519150601f19603f3d011682016040523d82523d6000602084013e6120e8565b606091505b50915091506120f8828286612103565b979650505050505050565b606083156121125750816111ae565b8251156121225782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d9190612a20565b6000806040838503121561216957600080fd5b82359150602083013563ffffffff8116811461218457600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156121e2576121e261218f565b60405290565b60405160e0810167ffffffffffffffff811182821017156121e2576121e261218f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122525761225261218f565b604052919050565b600067ffffffffffffffff8211156122745761227461218f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126122b157600080fd5b81356122c46122bf8261225a565b61220b565b8181528460208386010111156122d957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461231a57600080fd5b919050565b801515811461232d57600080fd5b50565b803561231a8161231f565b6000610140828403121561234e57600080fd5b6123566121be565b905081358152602082013567ffffffffffffffff8082111561237757600080fd5b612383858386016122a0565b6020840152604084013591508082111561239c57600080fd5b506123a9848285016122a0565b6040830152506123bb606083016122f6565b60608201526123cc608083016122f6565b60808201526123dd60a083016122f6565b60a082015260c082013560c082015260e082013560e0820152610100612404818401612330565b90820152610120612416838201612330565b9082015292915050565b600060a0828403121561243257600080fd5b50919050565b6000806000806060858703121561244e57600080fd5b843567ffffffffffffffff8082111561246657600080fd5b6124728883890161233b565b9550602087013591508082111561248857600080fd5b818701915087601f83011261249c57600080fd5b8135818111156124ab57600080fd5b8860208260051b85010111156124c057600080fd5b6020830195508094505060408701359150808211156124de57600080fd5b506124eb87828801612420565b91505092959194509250565b6000806040838503121561250a57600080fd5b823567ffffffffffffffff8082111561252257600080fd5b90840190610140828703121561253757600080fd5b9092506020840135908082111561254d57600080fd5b5061255a85828601612420565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c1257610c12612564565b6000610c12368361233b565b6000602082840312156125c457600080fd5b81356111ae8161231f565b6000602082840312156125e157600080fd5b6111ae826122f6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261261f57600080fd5b83018035915067ffffffffffffffff82111561263a57600080fd5b60200191503681900382131561264f57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126126b957600080fd5b9190910192915050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b60006020828403121561277157600080fd5b5051919050565b60005b8381101561279357818101518382015260200161277b565b50506000910152565b600081518084526127b4816020860160208601612778565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261280f61016085018361279c565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261284a838261279c565b9250506060850151612874608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128e78187018315159052565b90950151151593019290925250919050565b600060e0823603121561290b57600080fd5b6129136121e8565b61291c836122f6565b815261292a602084016122f6565b602082015261293b604084016122f6565b604082015261294c606084016122f6565b60608201526080830135608082015260a083013567ffffffffffffffff81111561297557600080fd5b612981368286016122a0565b60a08301525061299360c08401612330565b60c082015292915050565b600080858511156129ae57600080fd5b838611156129bb57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a085780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006111ae602083018461279c565b80820180821115610c1257610c12612564565b600060208284031215612a5857600080fd5b815167ffffffffffffffff811115612a6f57600080fd5b8201601f81018413612a8057600080fd5b8051612a8e6122bf8261225a565b818152856020838501011115612aa357600080fd5b612ab4826020830160208601612778565b95945050505050565b600060208284031215612acf57600080fd5b81516111ae8161231f565b600082516126b981846020870161277856fea2646970667358221220635f153545eab76ee202266d98f80e79c3f488b6f11da26ba2ec2e1f5a514f3464736f6c63430008110033a2646970667358221220bf16876877af64a5993b62ab7f2241552d273733b7d25bdfdfaf297b961230c164736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

type DeployScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployScriptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployScript__factory extends ContractFactory {
  constructor(...args: DeployScriptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeployScript> {
    return super.deploy(overrides || {}) as Promise<DeployScript>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployScript {
    return super.attach(address) as DeployScript;
  }
  override connect(signer: Signer): DeployScript__factory {
    return super.connect(signer) as DeployScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployScriptInterface {
    return new utils.Interface(_abi) as DeployScriptInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployScript {
    return new Contract(address, _abi, signerOrProvider) as DeployScript;
  }
}
