/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployDexManagerFacet.s.sol/DeployScript";

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
        internalType: "contract DexManagerFacet",
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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b50604080518082018252600f81526e11195e13585b9859d95c919858d95d608a1b60208201529051634bca482160e11b815260008051602062001c108339815191529063979490429062000094906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000da919062000583565b60018190556040516001625e79b760e01b03198152600481019190915260008051602062001c108339815191529063ffa18649906024016020604051808303816000875af115801562000131573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015791906200059d565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f41444452455353000000000000000000604482015260009060008051602062001c108339815191529063350d56bf906064016020604051808303816000875af1158015620001f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021b91906200059d565b60405163f877cb1960e01b815290915060009060008051602062001c108339815191529063f877cb19906200026b9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b591908101906200060b565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000321573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034b91908101906200060b565b6006906200035a908262000752565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b604482015260008051602062001c108339815191529063f877cb19906064016000604051808303816000875af1158015620003c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003ea91908101906200060b565b600790620003f9908262000752565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b604482015260008051602062001c108339815191529063f877cb19906064016000604051808303816000875af115801562000463573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200048d91908101906200060b565b6008906200049c908262000752565b508083604051602001620004b29291906200081e565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055991906200059d565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000851915050565b6000602082840312156200059657600080fd5b5051919050565b600060208284031215620005b057600080fd5b81516001600160a01b0381168114620005c857600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000602578181015183820152602001620005e8565b50506000910152565b6000602082840312156200061e57600080fd5b81516001600160401b03808211156200063657600080fd5b818401915084601f8301126200064b57600080fd5b815181811115620006605762000660620005cf565b604051601f8201601f19908116603f011681019083821181831017156200068b576200068b620005cf565b81604052828152876020848701011115620006a557600080fd5b620006b8836020830160208801620005e5565b979650505050505050565b600181811c90821680620006d857607f821691505b602082108103620006f957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200074d57600081815260208120601f850160051c81016020861015620007285750805b601f850160051c820191505b81811015620007495782815560010162000734565b5050505b505050565b81516001600160401b038111156200076e576200076e620005cf565b62000786816200077f8454620006c3565b84620006ff565b602080601f831160018114620007be5760008415620007a55750858301515b600019600386901b1c1916600185901b17855562000749565b600085815260208120601f198616915b82811015620007ef57888601518255948401946001909101908401620007ce565b50858210156200080e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000832818460208801620005e5565b83519083019062000848818360208801620005e5565b01949350505050565b6113af80620008616000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b6110068061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b50610fe6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639afc19c71161005b5780639afc19c7146100f0578063c3a6a96b14610103578063fbb2d38114610116578063fcd8e49e1461012b57600080fd5b8063124f1ead1461008d5780632d2506a9146100a257806344e2b18c146100ca578063536db266146100dd575b600080fd5b6100a061009b366004610ccc565b61013e565b005b6100b56100b0366004610d3e565b6101d1565b60405190151581526020015b60405180910390f35b6100a06100d8366004610db5565b61022c565b6100a06100eb366004610ccc565b610327565b6100a06100fe366004610e09565b610409565b6100a0610111366004610e4b565b610501565b61011e6105b9565b6040516100c19190610e7e565b6100a0610139366004610e09565b6105c8565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101845761018461073a565b61018d816107da565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7890600090a250565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604081205460ff165b92915050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146102725761027261073a565b8160005b8181101561032057600085858381811061029257610292610ed8565b90506020020160208101906102a79190610d3e565b905083156102bd576102b8816109fe565b6102c6565b6102c681610a88565b604051841515907fffffffff000000000000000000000000000000000000000000000000000000008316907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a350600101610276565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461036d5761036d61073a565b3073ffffffffffffffffffffffffffffffffffffffff8216036103bc576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c581610ab0565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461044f5761044f61073a565b8060005b818110156104fb5761048a84848381811061047057610470610ed8565b90506020020160208101906104859190610ccc565b6107da565b83838281811061049c5761049c610ed8565b90506020020160208101906104b19190610ccc565b73ffffffffffffffffffffffffffffffffffffffff167f78e0a2ffcdfbbb49ba5c8050d8630fab2176d825e8360809db049cd98f462a7860405160405180910390a2600101610453565b50505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146105475761054761073a565b801561055b57610556826109fe565b610564565b61056482610a88565b604051811515907fffffffff000000000000000000000000000000000000000000000000000000008416907f9167f6a23d52a4522e9211205d62ce63f02d928227ae0fe00326f51e152a3c4590600090a35050565b60606105c3610b9d565b905090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff16331461060e5761060e61073a565b8060005b818110156104fb57600084848381811061062e5761062e610ed8565b90506020020160208101906106439190610ccc565b90503073ffffffffffffffffffffffffffffffffffffffff821603610694576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16156106e75750610612565b6106f081610ab0565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f7e0058dd0cbc0a8b7beaa013a4825655d8e9e81a5e2cc6582818deded0a41b9990600090a250600101610612565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff9091161515146107d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1661082d575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208290526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556002820154905b818110156104fb578373ffffffffffffffffffffffffffffffffffffffff168360020182815481106108b3576108b3610ed8565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109ec57600283016108e9600184610f36565b815481106108f9576108f9610ed8565b60009182526020909120015460028401805473ffffffffffffffffffffffffffffffffffffffff909216918390811061093457610934610ed8565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260020180548061098f5761098f610f49565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190556104fb565b806109f681610f78565b91505061087f565b60017f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e5b7fffffffff000000000000000000000000000000000000000000000000000000009290921660009081526001909201602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60007f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e610a22565b610ab981610c2e565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610b0d575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b60607f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e600201805480602002602001604051908101604052809291908181526020018280548015610c2457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610bf9575b5050505050905090565b73ffffffffffffffffffffffffffffffffffffffff8116610c7b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036107d7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215610cde57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610d0257600080fd5b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610d3957600080fd5b919050565b600060208284031215610d5057600080fd5b610d0282610d09565b60008083601f840112610d6b57600080fd5b50813567ffffffffffffffff811115610d8357600080fd5b6020830191508360208260051b8501011115610d9e57600080fd5b9250929050565b80358015158114610d3957600080fd5b600080600060408486031215610dca57600080fd5b833567ffffffffffffffff811115610de157600080fd5b610ded86828701610d59565b9094509250610e00905060208501610da5565b90509250925092565b60008060208385031215610e1c57600080fd5b823567ffffffffffffffff811115610e3357600080fd5b610e3f85828601610d59565b90969095509350505050565b60008060408385031215610e5e57600080fd5b610e6783610d09565b9150610e7560208401610da5565b90509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610ecc57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e9a565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561022657610226610f07565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610fa957610fa9610f07565b506001019056fea2646970667358221220ae0852ce5f0bdd4049b6dc6b1c4212b718a37df6b4f9dd0c8cf0c7028446957e64736f6c63430008110033a2646970667358221220000f1df75df21365b7ab33ac202662fb797736453039b62d25278d7f010dd2fa64736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
