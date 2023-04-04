/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AxelarExecutor,
  AxelarExecutorInterface,
} from "../AxelarExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "ExecutionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotApprovedByGateway",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [],
    name: "UnAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "callTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "AxelarExecutionComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "callTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recoveryAddress",
        type: "address",
      },
    ],
    name: "AxelarExecutionFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "gateway",
        type: "address",
      },
    ],
    name: "AxelarGatewaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IAxelarGateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
    ],
    name: "setAxelarGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b2a38038062001b2a8339810160408190526200003491620001f8565b600080546001600160a01b0319166001600160a01b038316179055620000616200005b3390565b620000a8565b6200006c82620000fa565b6040516001600160a01b038216907f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232490600090a2505062000230565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001046200017d565b6001600160a01b0381166200016f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200017a81620000a8565b50565b6001546001600160a01b03163314620001d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000166565b565b80516001600160a01b0381168114620001f357600080fd5b919050565b600080604083850312156200020c57600080fd5b6200021783620001db565b91506200022760208401620001db565b90509250929050565b6118ea80620002406000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063491606581161005b57806349160658146100f3578063715018a6146101065780638da5cb5b1461010e578063f2fde38b1461012c57600080fd5b8063116191b6146100825780631a98b2e0146100cb578063214ac8d4146100e0575b600080fd5b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100de6100d936600461142b565b61013f565b005b6100de6100ee366004611527565b6102f1565b6100de61010136600461154b565b610366565b6100de6104d9565b60015473ffffffffffffffffffffffffffffffffffffffff166100a2565b6100de61013a366004611527565b6104ed565b600085856040516101519291906115ef565b6040519081900381206000547f1876eed900000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690631876eed9906101be908e908e908e908e908e9089908d908d908d90600401611648565b6020604051808303816000875af11580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020191906116a7565b610237576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e48a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a92506105a9915050565b5050505050505050505050565b6102f9610949565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405190917f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232491a250565b600082826040516103789291906115ef565b6040519081900381206000547f5f6970c300000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690635f6970c3906103df908b908b908b908b908b9089906004016116c9565b6020604051808303816000875af11580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042291906116a7565b610458576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104cf87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892508791506109ca9050565b5050505050505050565b6104e1610949565b6104eb6000610c46565b565b6104f5610949565b73ffffffffffffffffffffffffffffffffffffffff811661059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105a681610c46565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610624576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f870181900481028201810190925285815260009161066d91839189908990819084018382808284376000920191909152509293925050610cbd9050565b905060006106b5601488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610cbd9050565b905060006106c6876028818b61170a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525080546040517f935b13f6000000000000000000000000000000000000000000000000000000008152959650909473ffffffffffffffffffffffffffffffffffffffff909116935063935b13f6925061075391508a90600401611758565b602060405180830381865afa158015610770573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079491906117a9565b60005490915073ffffffffffffffffffffffffffffffffffffffff858116911614806107bf5750833b155b156107e2576107d9846107d1846117c6565b83868a610d23565b5050505061093d565b61080473ffffffffffffffffffffffffffffffffffffffff8216856000610de1565b61082573ffffffffffffffffffffffffffffffffffffffff82168588610de1565b600061084c5a73ffffffffffffffffffffffffffffffffffffffff87169060008087610fe6565b509050806108735761086985610861856117c6565b84878b610d23565b505050505061093d565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301526000919084169063dd62ed3e90604401602060405180830381865afa1580156108e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090d9190611816565b905080156109365761093673ffffffffffffffffffffffffffffffffffffffff84168683611071565b5050505050505b60009055505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610594565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a45576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f8501819004810282018101909252838152600091610a8e91839187908790819084018382808284376000920191909152509293925050610cbd9050565b60005490915073ffffffffffffffffffffffffffffffffffffffff90811690821603610ae6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803b610b1e576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b2d846014818861170a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939450610b89925050505a73ffffffffffffffffffffffffffffffffffffffff85169060008086610fe6565b50905080610bc3576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83167f3efa8a28be57a02aacda95a46a91a4c0607199f0a57d01f4f42f9f39faff244c610c04846117c6565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390a2505060009091555050505050565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610cca82601461182f565b83511015610d04576040517f8f95a28a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50818101602001516c0100000000000000000000000090045b92915050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008616815273ffffffffffffffffffffffffffffffffffffffff84811660208301528716917fcb85a171cc205c04807f94b4de952be30e9acd28e44f63bf7b11bc69741bec83910160405180910390a2610db973ffffffffffffffffffffffffffffffffffffffff8416866000610de1565b610dda73ffffffffffffffffffffffffffffffffffffffff84168383611071565b5050505050565b801580610e8157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610e5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7f9190611816565b155b610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610594565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610fe19084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526110c7565b505050565b6000606060008060008661ffff1667ffffffffffffffff81111561100c5761100c611869565b6040519080825280601f01601f191660200182016040528015611036576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115611057578692505b828152826000602083013e90999098509650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610fe19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610f5f565b6000611129826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111d39092919063ffffffff16565b805190915015610fe1578080602001905181019061114791906116a7565b610fe1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610594565b60606111e284846000856111ea565b949350505050565b60608247101561127c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610594565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112a59190611898565b60006040518083038185875af1925050503d80600081146112e2576040519150601f19603f3d011682016040523d82523d6000602084013e6112e7565b606091505b50915091506112f887838387611303565b979650505050505050565b606083156113995782516000036113925773ffffffffffffffffffffffffffffffffffffffff85163b611392576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610594565b50816111e2565b6111e283838151156113ae5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105949190611758565b60008083601f8401126113f457600080fd5b50813567ffffffffffffffff81111561140c57600080fd5b60208301915083602082850101111561142457600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561144a57600080fd5b8a35995060208b013567ffffffffffffffff8082111561146957600080fd5b6114758e838f016113e2565b909b50995060408d013591508082111561148e57600080fd5b61149a8e838f016113e2565b909950975060608d01359150808211156114b357600080fd5b6114bf8e838f016113e2565b909750955060808d01359150808211156114d857600080fd5b506114e58d828e016113e2565b9150809450508092505060a08b013590509295989b9194979a5092959850565b73ffffffffffffffffffffffffffffffffffffffff811681146105a657600080fd5b60006020828403121561153957600080fd5b813561154481611505565b9392505050565b60008060008060008060006080888a03121561156657600080fd5b87359650602088013567ffffffffffffffff8082111561158557600080fd5b6115918b838c016113e2565b909850965060408a01359150808211156115aa57600080fd5b6115b68b838c016113e2565b909650945060608a01359150808211156115cf57600080fd5b506115dc8a828b016113e2565b989b979a50959850939692959293505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b89815260c06020820152600061166260c083018a8c6115ff565b828103604084015261167581898b6115ff565b905086606084015282810360808401526116908186886115ff565b9150508260a08301529a9950505050505050505050565b6000602082840312156116b957600080fd5b8151801515811461154457600080fd5b8681526080602082015260006116e36080830187896115ff565b82810360408401526116f68186886115ff565b915050826060830152979650505050505050565b6000808585111561171a57600080fd5b8386111561172757600080fd5b5050820193919092039150565b60005b8381101561174f578181015183820152602001611737565b50506000910152565b6020815260008251806020840152611777816040850160208701611734565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000602082840312156117bb57600080fd5b815161154481611505565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561180e5780818460040360031b1b83161693505b505050919050565b60006020828403121561182857600080fd5b5051919050565b80820180821115610d1d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082516118aa818460208701611734565b919091019291505056fea264697066735822122047ef966b9391047464d02b0f7dad384f84365d9fd442643b5666748a2402f50e64736f6c63430008110033";

type AxelarExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AxelarExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AxelarExecutor__factory extends ContractFactory {
  constructor(...args: AxelarExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AxelarExecutor> {
    return super.deploy(
      _owner,
      _gateway,
      overrides || {}
    ) as Promise<AxelarExecutor>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _gateway, overrides || {});
  }
  override attach(address: string): AxelarExecutor {
    return super.attach(address) as AxelarExecutor;
  }
  override connect(signer: Signer): AxelarExecutor__factory {
    return super.connect(signer) as AxelarExecutor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AxelarExecutorInterface {
    return new utils.Interface(_abi) as AxelarExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AxelarExecutor {
    return new Contract(address, _abi, signerOrProvider) as AxelarExecutor;
  }
}
