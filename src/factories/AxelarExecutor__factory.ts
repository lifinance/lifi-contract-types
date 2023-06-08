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
  "0x60806040523480156200001157600080fd5b5060405162001a9738038062001a978339810160408190526200003491620001f8565b600080546001600160a01b0319166001600160a01b038316179055620000616200005b3390565b620000a8565b6200006c82620000fa565b6040516001600160a01b038216907f77113c61b80db60b60930e435e0f6727862501ceee7400d7a765a1dd951b232490600090a2505062000230565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620001046200017d565b6001600160a01b0381166200016f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200017a81620000a8565b50565b6001546001600160a01b03163314620001d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000166565b565b80516001600160a01b0381168114620001f357600080fd5b919050565b600080604083850312156200020c57600080fd5b6200021783620001db565b91506200022760208401620001db565b90509250929050565b61185780620002406000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063715018a611610050578063715018a6146100e85780638da5cb5b146100f0578063f2fde38b1461010e57600080fd5b8063116191b6146100775780631a98b2e0146100c057806349160658146100d5575b600080fd5b6000546100979073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100d36100ce366004611398565b610121565b005b6100d36100e3366004611472565b6102d3565b6100d3610446565b60015473ffffffffffffffffffffffffffffffffffffffff16610097565b6100d361011c366004611538565b61045a565b6000858560405161013392919061155c565b6040519081900381206000547f1876eed900000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690631876eed9906101a0908e908e908e908e908e9089908d908d908d906004016115b5565b6020604051808303816000875af11580156101bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e39190611614565b610219576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102c68a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525050604080516020601f8b018190048102820181019092528981528c93508b9250908a908a90819084018382808284376000920191909152508a9250610516915050565b5050505050505050505050565b600082826040516102e592919061155c565b6040519081900381206000547f5f6970c300000000000000000000000000000000000000000000000000000000835290925073ffffffffffffffffffffffffffffffffffffffff1690635f6970c39061034c908b908b908b908b908b908990600401611636565b6020604051808303816000875af115801561036b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038f9190611614565b6103c5576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043c87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892508791506108b69050565b5050505050505050565b61044e610b32565b6104586000610bb3565b565b610462610b32565b73ffffffffffffffffffffffffffffffffffffffff811661050a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61051381610bb3565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610591576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f87018190048102820181019092528581526000916105da91839189908990819084018382808284376000920191909152509293925050610c2a9050565b90506000610622601488888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050610c2a9050565b90506000610633876028818b611677565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525080546040517f935b13f6000000000000000000000000000000000000000000000000000000008152959650909473ffffffffffffffffffffffffffffffffffffffff909116935063935b13f692506106c091508a906004016116c5565b602060405180830381865afa1580156106dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107019190611716565b60005490915073ffffffffffffffffffffffffffffffffffffffff8581169116148061072c5750833b155b1561074f576107468461073e84611733565b83868a610c90565b505050506108aa565b61077173ffffffffffffffffffffffffffffffffffffffff8216856000610d4e565b61079273ffffffffffffffffffffffffffffffffffffffff82168588610d4e565b60006107b95a73ffffffffffffffffffffffffffffffffffffffff87169060008087610f53565b509050806107e0576107d6856107ce85611733565b84878b610c90565b50505050506108aa565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff86811660248301526000919084169063dd62ed3e90604401602060405180830381865afa158015610856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087a9190611783565b905080156108a3576108a373ffffffffffffffffffffffffffffffffffffffff84168683610fde565b5050505050505b60009055505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610931576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155604080516020601f850181900481028201810190925283815260009161097a91839187908790819084018382808284376000920191909152509293925050610c2a9050565b60005490915073ffffffffffffffffffffffffffffffffffffffff908116908216036109d2576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803b610a0a576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a198460148188611677565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939450610a75925050505a73ffffffffffffffffffffffffffffffffffffffff85169060008086610f53565b50905080610aaf576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83167f3efa8a28be57a02aacda95a46a91a4c0607199f0a57d01f4f42f9f39faff244c610af084611733565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390a2505060009091555050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610501565b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610c3782601461179c565b83511015610c71576040517f8f95a28a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50818101602001516c0100000000000000000000000090045b92915050565b604080517fffffffff000000000000000000000000000000000000000000000000000000008616815273ffffffffffffffffffffffffffffffffffffffff84811660208301528716917fcb85a171cc205c04807f94b4de952be30e9acd28e44f63bf7b11bc69741bec83910160405180910390a2610d2673ffffffffffffffffffffffffffffffffffffffff8416866000610d4e565b610d4773ffffffffffffffffffffffffffffffffffffffff84168383610fde565b5050505050565b801580610dee57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610dc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dec9190611783565b155b610e7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610501565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f4e9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611034565b505050565b6000606060008060008661ffff1667ffffffffffffffff811115610f7957610f796117d6565b6040519080825280601f01601f191660200182016040528015610fa3576020820181803683370190505b5090506000808751602089018b8e8ef191503d925086831115610fc4578692505b828152826000602083013e90999098509650505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f4e9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610ecc565b6000611096826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166111409092919063ffffffff16565b805190915015610f4e57808060200190518101906110b49190611614565b610f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610501565b606061114f8484600085611157565b949350505050565b6060824710156111e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610501565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516112129190611805565b60006040518083038185875af1925050503d806000811461124f576040519150601f19603f3d011682016040523d82523d6000602084013e611254565b606091505b509150915061126587838387611270565b979650505050505050565b606083156113065782516000036112ff5773ffffffffffffffffffffffffffffffffffffffff85163b6112ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610501565b508161114f565b61114f838381511561131b5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050191906116c5565b60008083601f84011261136157600080fd5b50813567ffffffffffffffff81111561137957600080fd5b60208301915083602082850101111561139157600080fd5b9250929050565b60008060008060008060008060008060c08b8d0312156113b757600080fd5b8a35995060208b013567ffffffffffffffff808211156113d657600080fd5b6113e28e838f0161134f565b909b50995060408d01359150808211156113fb57600080fd5b6114078e838f0161134f565b909950975060608d013591508082111561142057600080fd5b61142c8e838f0161134f565b909750955060808d013591508082111561144557600080fd5b506114528d828e0161134f565b9150809450508092505060a08b013590509295989b9194979a5092959850565b60008060008060008060006080888a03121561148d57600080fd5b87359650602088013567ffffffffffffffff808211156114ac57600080fd5b6114b88b838c0161134f565b909850965060408a01359150808211156114d157600080fd5b6114dd8b838c0161134f565b909650945060608a01359150808211156114f657600080fd5b506115038a828b0161134f565b989b979a50959850939692959293505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461051357600080fd5b60006020828403121561154a57600080fd5b813561155581611516565b9392505050565b8183823760009101908152919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b89815260c0602082015260006115cf60c083018a8c61156c565b82810360408401526115e281898b61156c565b905086606084015282810360808401526115fd81868861156c565b9150508260a08301529a9950505050505050505050565b60006020828403121561162657600080fd5b8151801515811461155557600080fd5b86815260806020820152600061165060808301878961156c565b828103604084015261166381868861156c565b915050826060830152979650505050505050565b6000808585111561168757600080fd5b8386111561169457600080fd5b5050820193919092039150565b60005b838110156116bc5781810151838201526020016116a4565b50506000910152565b60208152600082518060208401526116e48160408501602087016116a1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561172857600080fd5b815161155581611516565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561177b5780818460040360031b1b83161693505b505050919050565b60006020828403121561179557600080fd5b5051919050565b80820180821115610c8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082516118178184602087016116a1565b919091019291505056fea26469706673582212205f7bf56c0d3f3d547f0e1a49dd6d170e2e91388a432b2316450919ba0c945a6b64736f6c63430008110033";

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
