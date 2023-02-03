/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DeployScript,
  DeployScriptInterface,
} from "../../DeployAccessManagerFacet.s.sol/DeployScript";

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
        internalType: "contract AccessManagerFacet",
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
  "0x60806040526000805460ff191660011790553480156200001e57600080fd5b5060408051808201825260128152711058d8d95cdcd3585b9859d95c919858d95d60721b60208201529051634bca482160e11b8152600080516020620011cd8339815191529063979490429062000097906004016020808252600b908201526a505249564154455f4b455960a81b604082015260600190565b6020604051808303816000875af1158015620000b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000dd919062000586565b60018190556040516001625e79b760e01b031981526004810191909152600080516020620011cd8339815191529063ffa18649906024016020604051808303816000875af115801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a9190620005a0565b600280546001600160a01b0319166001600160a01b039290921691909117905560405163350d56bf60e01b815260206004820152601760248201527f435245415445335f464143544f52595f414444524553530000000000000000006044820152600090600080516020620011cd8339815191529063350d56bf906064016020604051808303816000875af1158015620001f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021e9190620005a0565b60405163f877cb1960e01b8152909150600090600080516020620011cd8339815191529063f877cb19906200026e9060040160208082526004908201526314d0531560e21b604082015260600190565b6000604051808303816000875af11580156200028e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002b891908101906200060e565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b031663d930a0e66040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000324573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200034e91908101906200060e565b6006906200035d908262000755565b5060405163f877cb1960e01b81526020600482015260076024820152664e4554574f524b60c81b6044820152600080516020620011cd8339815191529063f877cb19906064016000604051808303816000875af1158015620003c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620003ed91908101906200060e565b600790620003fc908262000755565b5060405163f877cb1960e01b815260206004820152600b60248201526a08c92988abea6aa8c8c92b60ab1b6044820152600080516020620011cd8339815191529063f877cb19906064016000604051808303816000875af115801562000466573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200049091908101906200060e565b6008906200049f908262000755565b508083604051602001620004b592919062000821565b60408051808303601f190181529082905280516020909101206005819055600480546001600160a01b0319166001600160a01b03868116918217835560025463143c711960e21b865216918401919091526024830191909152906350f1c46490604401602060405180830381865afa15801562000536573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055c9190620005a0565b600380546001600160a01b0319166001600160a01b03929092169190911790555062000854915050565b6000602082840312156200059957600080fd5b5051919050565b600060208284031215620005b357600080fd5b81516001600160a01b0381168114620005cb57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000605578181015183820152602001620005eb565b50506000910152565b6000602082840312156200062157600080fd5b81516001600160401b03808211156200063957600080fd5b818401915084601f8301126200064e57600080fd5b815181811115620006635762000663620005d2565b604051601f8201601f19908116603f011681019083821181831017156200068e576200068e620005d2565b81604052828152876020848701011115620006a857600080fd5b620006bb836020830160208801620005e8565b979650505050505050565b600181811c90821680620006db57607f821691505b602082108103620006fc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200075057600081815260208120601f850160051c810160208610156200072b5750805b601f850160051c820191505b818110156200074c5782815560010162000737565b5050505b505050565b81516001600160401b03811115620007715762000771620005d2565b6200078981620007828454620006c6565b8462000702565b602080601f831160018114620007c15760008415620007a85750858301515b600019600386901b1c1916600185901b1785556200074c565b600085815260208120601f198616915b82811015620007f257888601518255948401946001909101908401620007d1565b5085821015620008115787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000835162000835818460208801620005e8565b8351908301906200084b818360208801620005e8565b01949350505050565b61096980620008646000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610093575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100616100b0565b6000546100a09060ff1681565b6040519015158152602001610082565b6001546040517fce817d47000000000000000000000000000000000000000000000000000000008152600091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163ce817d47916101089160040190815260200190565b600060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b5050505061015c60035473ffffffffffffffffffffffffffffffffffffffff163b151590565b1561017e575060035473ffffffffffffffffffffffffffffffffffffffff1690565b60045460055460405173ffffffffffffffffffffffffffffffffffffffff9092169163cdcb760a91906101b3602082016102b5565b6020820181038252601f19601f820116604052506040518363ffffffff1660e01b81526004016101e49291906102c2565b6020604051808303816000875af1158015610203573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102279190610336565b90507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029a57600080fd5b505af11580156102ae573d6000803e3d6000fd5b5050505090565b6105c08061037483390190565b82815260006020604081840152835180604085015260005b818110156102f6578581018301518582016060015282016102da565b5060006060828601015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509392505050565b60006020828403121561034857600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461036c57600080fd5b939250505056fe608060405234801561001057600080fd5b506105a0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063612ad9cb1461003b578063a4c3366e146100d7575b600080fd5b6100c36100493660046104eb565b7fffffffff000000000000000000000000000000000000000000000000000000009190911660009081527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b604051901515815260200160405180910390f35b6100ea6100e536600461051e565b6100ec565b005b3073ffffffffffffffffffffffffffffffffffffffff83160361013b576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61014361023b565b806101575761015283836102b0565b610161565b6101618383610377565b80156101d1576040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907fd97cb52d6a919c35d1a9848f69806a32611c1381fa1078e5ea866186ee4c46c790600090a3505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000084169073ffffffffffffffffffffffffffffffffffffffff8416907f2fb75e73eca07a04ac148df401d1f013ddb4c8177a453af29c97c88037bac84890600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146102ae576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fffffffff00000000000000000000000000000000000000000000000000000000821660008181527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555191939290917f4e2965fe48abf86ff779f17f9368d20e8eb4eebd1473e650a0aae103adc4b68b9190a3505050565b3073ffffffffffffffffffffffffffffffffffffffff8216036103c6576040517fa9cefcae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e7fffffffff00000000000000000000000000000000000000000000000000000000841660008181526020838152604080832073ffffffffffffffffffffffffffffffffffffffff8816808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555193945091927fcdd2f8ab598ea828ea63b4a6cfc86ccf7d40784556f0783753603ba712c83b009190a3505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146104c257600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104c257600080fd5b600080604083850312156104fe57600080fd5b61050783610492565b9150610515602084016104c7565b90509250929050565b60008060006060848603121561053357600080fd5b61053c84610492565b925061054a602085016104c7565b91506040840135801515811461055f57600080fd5b80915050925092509256fea264697066735822122059cce4c91b2520fd6fae2759f92b74a090d88abd984323940694b18687b44ef564736f6c63430008110033a264697066735822122082abcf033e1d334cb58a757d8b670380e47cd3df25908c23ff4aba95aee43f2364736f6c634300081100330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

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
