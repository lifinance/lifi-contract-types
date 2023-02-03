/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployGravityFacet.s.sol/DeployScript";

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
        internalType: "contract GravityFacet",
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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600c81526b11dc985d9a5d1e519858d95d60a21b60208201529051634bca482160e11b815260008051602062003bc18339815191529063979490429062000091906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d7919062000580565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062003bc18339815191529063ffa18649906024016020604051808303816000875af11580156200012e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015491906200059a565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062003bc18339815191529063350d56bf906064016020604051808303816000875af1158015620001f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021891906200059a565b60405163f877cb1960e01b815290915060009060008051602062003bc18339815191529063f877cb1990620002689060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af115801562000288573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b2919081019062000608565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200031e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000348919081019062000608565b6006906200035790826200074f565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062003bc18339815191529063f877cb19906064016000604051808303816000875af1158015620003bd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003e7919081019062000608565b600790620003f690826200074f565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062003bc18339815191529063f877cb19906064016000604051808303816000875af115801562000460573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048a919081019062000608565b6008906200049990826200074f565b508083604051602001620004af9291906200081b565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055691906200059a565b600380546001600160a01b0319166001600160a01b0392909216919091179055506200084e915050565b6000602082840312156200059357600080fd5b5051919050565b600060208284031215620005ad57600080fd5b81516001600160a01b0381168114620005c557600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620005ff578181015183820152602001620005e5565b50506000910152565b6000602082840312156200061b57600080fd5b81516001600160401b03808211156200063357600080fd5b818401915084601f8301126200064857600080fd5b8151818111156200065d576200065d620005cc565b604051601f8201601f19908116603f01168101908382118183101715620006885762000688620005cc565b81604052828152876020848701011115620006a257600080fd5b620006b5836020830160208801620005e2565b979650505050505050565b600181811c90821680620006d557607f821691505b602082108103620006f657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074a57600081815260208120601f850160051c81016020861015620007255750805b601f850160051c820191505b81811015620007465782815560010162000731565b5050505b505050565b81516001600160401b038111156200076b576200076b620005cc565b62000783816200077c8454620006c0565b84620006fc565b602080601f831160018114620007bb5760008415620007a25750858301515b600019600386901b1c1916600185901b17855562000746565b600085815260208120601f198616915b82811015620007ec57888601518255948401946001909101908401620007cb565b50858210156200080b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600083516200082f818460208801620005e2565b83519083019062000845818360208801620005e2565b01949350505050565b613363806200085e6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf47146100a1575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100be565b6040516100829291906106a5565b6000546100ae9060ff1681565b6040519015158152602001610082565b6000606060007f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff1663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801561013a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610180919081019061079d565b60405160200161019091906107e6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f60f9bb110000000000000000000000000000000000000000000000000000000082529150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906360f9bb1190610211908590600401610827565b6000604051808303816000875af1158015610230573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610276919081019061079d565b905060006102c4600760405160200161028f919061083a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610556565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015291925001604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152908290526001547fce817d4700000000000000000000000000000000000000000000000000000000835260048301529450737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050506103b760035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156103de57505060035473ffffffffffffffffffffffffffffffffffffffff169391925050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906104136020820161062a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905261045591908990602001610967565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610481929190610996565b6020604051808303816000875af11580156104a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c491906109d4565b94507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b505050505050509091565b6040517f85940ef1000000000000000000000000000000000000000000000000000000008152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d906385940ef1906105ab90869086906004016109f1565b6000604051808303816000875af11580156105ca573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610610919081019061079d565b80602001905181019061062391906109d4565b9392505050565b61290e80610a2083390190565b60005b8381101561065257818101518382015260200161063a565b50506000910152565b60008151808452610673816020860160208601610637565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006106d4604083018461065b565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115610726576107266106dc565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561076c5761076c6106dc565b8160405280935085815286868601111561078557600080fd5b610793866020830187610637565b5050509392505050565b6000602082840312156107af57600080fd5b815167ffffffffffffffff8111156107c657600080fd5b8201601f810184136107d757600080fd5b6106d48482516020840161070b565b600082516107f8818460208701610637565b7f2f636f6e6669672f677261766974792e6a736f6e000000000000000000000000920191825250601401919050565b602081526000610623602083018461065b565b7f2e00000000000000000000000000000000000000000000000000000000000000815260006001600084548181841c90508382168061087a57607f821691505b602080831082036108b2577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b8180156108c657600181146108fd5761092e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516878a01528684151585028a0101955061092e565b60008a81526020902060005b858110156109245781548b82018a0152908801908301610909565b505086848a010195505b505050505061095c817f2e67726176697479526f757465720000000000000000000000000000000000009052565b600e01949350505050565b60008351610979818460208801610637565b83519083019061098d818360208801610637565b01949350505050565b8281526040602082015260006106d4604083018461065b565b73ffffffffffffffffffffffffffffffffffffffff811681146109d157600080fd5b50565b6000602082840312156109e657600080fd5b8151610623816109af565b604081526000610a04604083018561065b565b8281036020840152610a16818561065b565b9594505050505056fe60a06040523480156200001157600080fd5b506040516200290e3803806200290e833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128736200009b60003960008181610717015261078901526128736000f3fe6080604052600436106100295760003560e01c806331191ec31461002e578063eca3735c14610043575b600080fd5b61004161003c366004612218565b610056565b005b61004161005136600461227c565b6102ed565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761236a565b90508480610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610258816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561028f576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a189608001518a60c0015161058d565b6102ab898961070d565b5047925060009150508282116102c25760006102cc565b6102cc838361236a565b905080156102e0576102e06000858361082e565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610368576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610379344761236a565b9050868061010001516103b8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104198160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610450576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361048e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104cb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104ee816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610525576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053a8b600001518c60c001518c8c3361085f565b60c08c01526105498b8961070d565b50479250600091505082821161056057600061056a565b61056a838361236a565b9050801561057e5761057e6000858361082e565b50506000909255505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166105e657803410156105e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610620576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b1919061237d565b9050818110156106fc576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610708833330856109a2565b505050565b61074082608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bbc565b6080820151815160c08401516040517f0f21235700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001693630f212357936107c1939192909190600401612404565b600060405180830381600087803b1580156107db57600080fd5b505af11580156107ef573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108229190612443565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561085557610708838383610d07565b6107088282610e36565b60008280820361089b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108aa60018561236a565b8181106108b9576108b9612556565b90506020028101906108cb9190612585565b6108dc9060808101906060016125c3565b905060006108e982610f60565b905073ffffffffffffffffffffffffffffffffffffffff821661091357610910348261236a565b90505b600061091f8888611019565b905061092b8888611125565b6109388a89898985611186565b60008261094485610f60565b61094e919061236a565b905089811015610994576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106f3565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109ef576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a3c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad1919061237d565b9050610adf82868686611538565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b73919061237d565b610b7d919061236a565b14610bb4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bdc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c29576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc3919061237d565b905081811015610d0157610d018484610cfc847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61236a565b611614565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d54576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de5919061237d565b905080821115610e2b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106f3565b610d01848484611712565b73ffffffffffffffffffffffffffffffffffffffff8216610e83576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ec6576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106f3565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f20576040519150601f19603f3d011682016040523d82523d6000602084013e610f25565b606091505b5050905080610708576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611011576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fe8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100c919061237d565b611013565b475b92915050565b60608160008167ffffffffffffffff81111561103757611037611f22565b604051908082528060200260200182016040528015611060578160200160208202803683370190505b5090506000805b8381101561111a5786868281811061108157611081612556565b90506020028101906110939190612585565b6110a49060808101906060016125c3565b91506110af82610f60565b8382815181106110c1576110c1612556565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661111257348382815181106110fa576110fa612556565b6020026020010181815161110e919061236a565b9052505b600101611067565b509095945050505050565b60005b8181101561070857600083838381811061114457611144612556565b90506020028101906111569190612585565b61115f906125de565b90508060c001511561117d5761117d8160400151826080015161058d565b50600101611128565b83838383826001811461145357600085856111a260018561236a565b8181106111b1576111b1612556565b90506020028101906111c39190612585565b6111d49060808101906060016125c3565b9050600089815b8181101561137f57368d8d838181106111f6576111f6612556565b90506020028101906112089190612585565b905061123761121d60608301604084016125c3565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061129a575061129a61125060408301602084016125c3565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112b157506112b161125060208301836125c3565b801561133657506113366112c860a0830183612683565b6112d7916004916000916126ef565b6112e091612719565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61136c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113768f82611768565b506001016111db565b505060005b61138f60018561236a565b81101561144b5760008888838181106113aa576113aa612556565b90506020028101906113bc9190612585565b6113cd9060808101906060016125c3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114425785828151811061141457611414612556565b602002602001015161142582610f60565b61142f919061236a565b925082156114425761144281888561082e565b50600101611384565b50505061152c565b8760005b8181101561152957368b8b8381811061147257611472612556565b90506020028101906114849190612585565b905061149961121d60608301604084016125c3565b806114b257506114b261125060408301602084016125c3565b80156114c957506114c961125060208301836125c3565b80156114e057506114e06112c860a0830183612683565b611516576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115208d82611768565b50600101611457565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d019085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a7e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa15801561168b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116af919061237d565b6116b99190612761565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d019085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611592565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107089084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611592565b61177e61177860208301836125c3565b3b151590565b6117b4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117f4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061180961121d60608501604086016125c3565b61181457600061181a565b82608001355b9050600061183661183160608601604087016125c3565b610f60565b9050600061184d61183160808701606088016125c3565b9050826000036118845761188461186a60608701604088016125c3565b61187a60408801602089016125c3565b8760800135610bbc565b84608001358210156118cf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106f3565b6000806118df60208801886125c3565b73ffffffffffffffffffffffffffffffffffffffff168561190360a08a018a612683565b604051611911929190612774565b60006040518083038185875af1925050503d806000811461194e576040519150601f19603f3d011682016040523d82523d6000602084013e611953565b606091505b50915091508161199e57600061196882611b8a565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f39190612784565b60006119b361183160808a0160608b016125c3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119e460208b018b6125c3565b6119f460608c0160408d016125c3565b611a0460808d0160608e016125c3565b8c60800135898711611a165786611a20565b611a208a8861236a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ae0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c089092919063ffffffff16565b8051909150156107085780806020019051810190611afe9190612797565b610708576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106f3565b6060604482511015611bcf57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611beb6004808551611be3919061236a565b859190611c1f565b905080806020019051810190611c0191906127b4565b9392505050565b6060611c178484600085611d39565b949350505050565b606081611c2d81601f612761565b1015611c65576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c6f8284612761565b84511015611ca9576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cc85760405191506000825260208201604052611d30565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d01578051835260209283019201611ce9565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611dcb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106f3565b73ffffffffffffffffffffffffffffffffffffffff85163b611e49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106f3565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e72919061282b565b60006040518083038185875af1925050503d8060008114611eaf576040519150601f19603f3d011682016040523d82523d6000602084013e611eb4565b606091505b5091509150611ec4828286611ecf565b979650505050505050565b60608315611ede575081611c01565b825115611eee5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f39190612784565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f7557611f75611f22565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f7557611f75611f22565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fe557611fe5611f22565b604052919050565b600067ffffffffffffffff82111561200757612007611f22565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261204457600080fd5b813561205761205282611fed565b611f9e565b81815284602083860101111561206c57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120ad57600080fd5b919050565b80151581146120c057600080fd5b50565b80356120ad816120b2565b600061014082840312156120e157600080fd5b6120e9611f51565b905081358152602082013567ffffffffffffffff8082111561210a57600080fd5b61211685838601612033565b6020840152604084013591508082111561212f57600080fd5b5061213c84828501612033565b60408301525061214e60608301612089565b606082015261215f60808301612089565b608082015261217060a08301612089565b60a082015260c082013560c082015260e082013560e08201526101006121978184016120c3565b908201526101206121a98382016120c3565b9082015292915050565b6000602082840312156121c557600080fd5b6040516020810167ffffffffffffffff82821081831117156121e9576121e9611f22565b81604052829350843591508082111561220157600080fd5b5061220e85828601612033565b8252505092915050565b6000806040838503121561222b57600080fd5b823567ffffffffffffffff8082111561224357600080fd5b61224f868387016120ce565b9350602085013591508082111561226557600080fd5b50612272858286016121b3565b9150509250929050565b6000806000806060858703121561229257600080fd5b843567ffffffffffffffff808211156122aa57600080fd5b6122b6888389016120ce565b955060208701359150808211156122cc57600080fd5b818701915087601f8301126122e057600080fd5b8135818111156122ef57600080fd5b8860208260051b850101111561230457600080fd5b60208301955080945050604087013591508082111561232257600080fd5b5061232f878288016121b3565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110135761101361233b565b60006020828403121561238f57600080fd5b5051919050565b60005b838110156123b1578181015183820152602001612399565b50506000910152565b600081518084526123d2816020860160208601612396565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff8416815260606020820152600061243360608301856123ba565b9050826040830152949350505050565b60208152815160208201526000602083015161014080604085015261246c6101608501836123ba565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124a783826123ba565b92505060608501516124d1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125448187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125b957600080fd5b9190910192915050565b6000602082840312156125d557600080fd5b611c0182612089565b600060e082360312156125f057600080fd5b6125f8611f7b565b61260183612089565b815261260f60208401612089565b602082015261262060408401612089565b604082015261263160608401612089565b60608201526080830135608082015260a083013567ffffffffffffffff81111561265a57600080fd5b61266636828601612033565b60a08301525061267860c084016120c3565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126b857600080fd5b83018035915067ffffffffffffffff8211156126d357600080fd5b6020019150368190038213156126e857600080fd5b9250929050565b600080858511156126ff57600080fd5b8386111561270c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127595780818660040360031b1b83161692505b505092915050565b808201808211156110135761101361233b565b8183823760009101908152919050565b602081526000611c0160208301846123ba565b6000602082840312156127a957600080fd5b8151611c01816120b2565b6000602082840312156127c657600080fd5b815167ffffffffffffffff8111156127dd57600080fd5b8201601f810184136127ee57600080fd5b80516127fc61205282611fed565b81815285602083850101111561281157600080fd5b612822826020830160208601612396565b95945050505050565b600082516125b981846020870161239656fea26469706673582212207ce45aacef4f74cfd6927f76bad39fcc118b35e8af3ac1b522dc1aa8b36ebb2d64736f6c63430008110033a2646970667358221220e2c8396c974cf422a2ca1dc6b770bd556123fb2b537edc152fea7e2f6518cba964736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
