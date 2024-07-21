/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Intent, IntentInterface } from "../../Intent.sol/Intent";

const _abi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "config",
    inputs: [],
    outputs: [
      {
        name: "intentId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "factory",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountOutMin",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "executed",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        name: "calls",
        type: "tuple[]",
        internalType: "struct IIntent.Call[]",
        components: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "implementation",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "init",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawAll",
    inputs: [
      {
        name: "tokens",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "IntentExecuted",
    inputs: [
      {
        name: "intentId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "tokenOut",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountOut",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AlreadyExecuted",
    inputs: [],
  },
  {
    type: "error",
    name: "ExecutionFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientOutputAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidParams",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5030608052608051610cf76100366000396000818160be01526102580152610cf76000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac5780636568a2791461010a57806379502c551461012a57600080fd5b80630c165e921461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610a16565b6101d6565b005b34801561009857600080fd5b5061008a6100a7366004610a7a565b610388565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5061008a610125366004610a7a565b6107dc565b34801561013657600080fd5b5060005460015460025460035460045460055460065460075461017b97969573ffffffffffffffffffffffffffffffffffffffff908116958116941692919060ff1688565b60408051988952602089019790975273ffffffffffffffffffffffffffffffffffffffff9586169688019690965292841660608701529216608085015260a084019190915260c083015260ff1660e082015261010001610101565b806040516020016101e79190610ae5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009161027e917f000000000000000000000000000000000000000000000000000000000000000091906108f7565b90503073ffffffffffffffffffffffffffffffffffffffff8216146102cf576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556102e46040830160208401610b45565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556103396060830160408401610b45565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60035473ffffffffffffffffffffffffffffffffffffffff1633146103d9576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075460ff1615610416576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561058e57600083838381811061046057610460610b67565b90506020028101906104729190610b96565b610480906020810190610b45565b73ffffffffffffffffffffffffffffffffffffffff168484848181106104a8576104a8610b67565b90506020028101906104ba9190610b96565b602001358585858181106104d0576104d0610b67565b90506020028101906104e29190610b96565b6104f0906040810190610bd4565b6040516104fe929190610c39565b60006040518083038185875af1925050503d806000811461053b576040519150601f19603f3d011682016040523d82523d6000602084013e610540565b606091505b505090508061057b576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508061058681610c49565b915050610444565b5060045473ffffffffffffffffffffffffffffffffffffffff16158015610672576005544710156105eb576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025461060d9073ffffffffffffffffffffffffffffffffffffffff16610954565b6000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301524782820152517f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59181900360600190a2505050565b600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925260009173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156106e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070a9190610ca8565b600554909150811015610749576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004546002546107729173ffffffffffffffffffffffffffffffffffffffff9081169116610973565b506000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015281018390527f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59060600160405180910390a2505b505050565b60035473ffffffffffffffffffffffffffffffffffffffff16331461082d576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156107d757600083838381811061084c5761084c610b67565b90506020020160208101906108619190610b45565b73ffffffffffffffffffffffffffffffffffffffff16036108a65760025461089e9073ffffffffffffffffffffffffffffffffffffffff16610954565b600101610830565b6108ee8383838181106108bb576108bb610b67565b90506020020160208101906108d09190610b45565b60025473ffffffffffffffffffffffffffffffffffffffff16610973565b50600101610830565b60008061093e8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061094b8185856109f4565b95945050505050565b60003860003847855af16109705763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d11166109a3576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166109e9576390b8ec186000526004601cfd5b600060345292915050565b600060ff60005350603592835260601b60015260155260556000908120915290565b600060a08284031215610a2857600080fd5b50919050565b60008083601f840112610a4057600080fd5b50813567ffffffffffffffff811115610a5857600080fd5b6020830191508360208260051b8501011115610a7357600080fd5b9250929050565b60008060208385031215610a8d57600080fd5b823567ffffffffffffffff811115610aa457600080fd5b610ab085828601610a2e565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610ae057600080fd5b919050565b8135815260a08101610af960208401610abc565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610b2360408701610abc565b1660408501525050606083013560608301526080830135608083015292915050565b600060208284031215610b5757600080fd5b610b6082610abc565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610bca57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610c0957600080fd5b83018035915067ffffffffffffffff821115610c2457600080fd5b602001915036819003821315610a7357600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ca1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610cba57600080fd5b505191905056fea26469706673582212204c6f058729c7db39f533bee593a2ffdd98fd5bbd18a8942bf12b22d633459c3364736f6c63430008110033";

type IntentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Intent__factory extends ContractFactory {
  constructor(...args: IntentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Intent> {
    return super.deploy(overrides || {}) as Promise<Intent>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Intent {
    return super.attach(address) as Intent;
  }
  override connect(signer: Signer): Intent__factory {
    return super.connect(signer) as Intent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntentInterface {
    return new utils.Interface(_abi) as IntentInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Intent {
    return new Contract(address, _abi, signerOrProvider) as Intent;
  }
}
