/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployDiamondLoupeFacet.s.sol/DeployScript";

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
        internalType: "contract DiamondLoupeFacet",
        name: "deployed",
        type: "address",
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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b506040805180820182526011815270111a585b5bdb99131bdd5c19519858d95d607a1b60208201529051634bca482160e11b8152600080516020620015418339815191529063979490429062000096906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000dc919062000585565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620015418339815191529063ffa18649906024016020604051808303816000875af115801562000133573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015991906200059f565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620015418339815191529063350d56bf906064016020604051808303816000875af1158015620001f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021d91906200059f565b60405163f877cb1960e01b8152909150600090600080516020620015418339815191529063f877cb19906200026d9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b791908101906200060d565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000323573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034d91908101906200060d565b6006906200035c908262000754565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620015418339815191529063f877cb19906064016000604051808303816000875af1158015620003c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003ec91908101906200060d565b600790620003fb908262000754565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620015418339815191529063f877cb19906064016000604051808303816000875af115801562000465573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048f91908101906200060d565b6008906200049e908262000754565b508083604051602001620004b492919062000820565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000535573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055b91906200059f565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000853915050565b6000602082840312156200059857600080fd5b5051919050565b600060208284031215620005b257600080fd5b81516001600160a01b0381168114620005ca57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000604578181015183820152602001620005ea565b50506000910152565b6000602082840312156200062057600080fd5b81516001600160401b03808211156200063857600080fd5b818401915084601f8301126200064d57600080fd5b815181811115620006625762000662620005d1565b604051601f8201601f19908116603f011681019083821181831017156200068d576200068d620005d1565b81604052828152876020848701011115620006a757600080fd5b620006ba836020830160208801620005e7565b979650505050505050565b600181811c90821680620006da57607f821691505b602082108103620006fb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074f57600081815260208120601f850160051c810160208610156200072a5750805b601f850160051c820191505b818110156200074b5782815560010162000736565b5050505b505050565b81516001600160401b03811115620007705762000770620005d1565b6200078881620007818454620006c5565b8462000701565b602080601f831160018114620007c05760008415620007a75750858301515b600019600386901b1c1916600185901b1785556200074b565b600085815260208120601f198616915b82811015620007f157888601518255948401946001909101908401620007d0565b5085821015620008105787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000834818460208801620005e7565b8351908301906200084a818360208801620005e7565b01949350505050565b610cde80620008636000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050600480546001546040517fffa18649000000000000000000000000000000000000000000000000000000008152928301526000935073ffffffffffffffffffffffffffffffffffffffff1691506350f1c46490737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa18649906024016020604051808303816000875af11580156101c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ed91906103f5565b6005546040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381865afa15801561025e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028291906103f5565b90506102a660035473ffffffffffffffffffffffffffffffffffffffff163b151590565b156102b057919050565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906102e5602082016103e8565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b8152600401610316929190610432565b6020604051808303816000875af1158015610335573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035991906103f5565b91507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103cc57600080fd5b505af11580156103e0573d6000803e3d6000fd5b505050505090565b610802806104a783390190565b60006020828403121561040757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461042b57600080fd5b9392505050565b82815260006020604081840152835180604085015260005b818110156104665785810183015185820160600152820161044a565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010192505050939250505056fe608060405234801561001057600080fd5b506107e2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80637a0ed627116100505780637a0ed627146100fa578063adfca15e1461010f578063cdffacc61461012f57600080fd5b806301ffc9a71461006c57806352ef6b2c146100e5575b600080fd5b6100d061007a36600461055d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100ed6101cb565b6040516100dc91906105a6565b61010261025d565b6040516100dc919061065d565b61012261011d366004610705565b61045d565b6040516100dc919061073b565b6101a661013d36600461055d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100dc565b606060007fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561025257602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610227575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff8111156102bd576102bd61074e565b60405190808252806020026020018201604052801561030357816020015b6040805180820190915260008152606060208201528152602001906001900390816102db5790505b50925060005b818110156104575760008360020182815481106103285761032861077d565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050808583815181106103685761036861077d565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff928316905290821660009081526001860182526040908190208054825181850281018501909352808352919290919083018282801561042957602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103d65790505b50505050508583815181106104405761044061077d565b602090810291909101810151015250600101610309565b50505090565b73ffffffffffffffffffffffffffffffffffffffff811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561055057602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104fd5790505b5050505050915050919050565b60006020828403121561056f57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461059f57600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b818110156105f457835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016105c2565b50909695505050505050565b600081518084526020808501945080840160005b838110156106525781517fffffffff000000000000000000000000000000000000000000000000000000001687529582019590820190600101610614565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156106f7578883037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00185528151805173ffffffffffffffffffffffffffffffffffffffff1684528701518784018790526106e487850182610600565b9588019593505090860190600101610684565b509098975050505050505050565b60006020828403121561071757600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461059f57600080fd5b60208152600061059f6020830184610600565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220bc74530ed0a9f854376d86a5b7fc78d0e6c8323fa2283fa66ff9869873ecbe7f64736f6c63430008110033a26469706673582212206e7e42a2387babedfdad91b942f2e2e10286b3d3f05ce13dd7d4b04af1d52fb764736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
