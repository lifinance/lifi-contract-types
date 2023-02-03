/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ReentrancyChecker,
  ReentrancyCheckerInterface,
} from "../../TestBase.sol/ReentrancyChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "facetAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "callFacet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161087038038061087083398101604081905261002f9161015e565b600080546001600160a01b0319166001600160a01b03831690811790915560405163095ea7b360e01b81526004810191909152600019602482015273a0b86991c6218b36c1d19d4a2e9eb0ce3606eb489063095ea7b3906044016020604051808303816000875af11580156100a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100cc919061018e565b5060005460405163095ea7b360e01b81526001600160a01b0390911660048201526000196024820152736b175474e89094c44da98b954eedeac495271d0f9063095ea7b3906044016020604051808303816000875af1158015610133573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610157919061018e565b50506101b0565b60006020828403121561017057600080fd5b81516001600160a01b038116811461018757600080fd5b9392505050565b6000602082840312156101a057600080fd5b8151801515811461018757600080fd5b6106b1806101bf6000396000f3fe6080604052600436106100225760003560e01c80634d9bb762146101be57600080fd5b366101b95760008054604051829173ffffffffffffffffffffffffffffffffffffffff1690678ac7230489e800009061005d906001906103cc565b60006040518083038185875af1925050503d806000811461009a576040519150601f19603f3d011682016040523d82523d6000602084013e61009f565b606091505b5091509150816101b7576040517f29f745a70000000000000000000000000000000000000000000000000000000060208201526024016040516020818303038152906040528051906020012081805190602001200361012a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f5265656e7472616e63792041747461636b20546573743a207265656e7472616e60448201527f742063616c6c206661696c65640000000000000000000000000000000000000060648201526084015b60405180910390fd5b005b600080fd5b3480156101ca57600080fd5b506101b76101d9366004610460565b60016101e6828483610550565b5060008054604051829173ffffffffffffffffffffffffffffffffffffffff1690678ac7230489e800009061021e908790879061066b565b60006040518083038185875af1925050503d806000811461025b576040519150601f19603f3d011682016040523d82523d6000602084013e610260565b606091505b509150915081610373576040517f5a046737000000000000000000000000000000000000000000000000000000006020820152602401604051602081830303815290604052805190602001208180519060200120036102eb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f5265656e7472616e63792041747461636b20546573743a20696e697469616c2060448201527f63616c6c206661696c656400000000000000000000000000000000000000000060648201526084016101ae565b50505050565b600181811c9082168061038d57607f821691505b6020821081036103c6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008083546103da81610379565b600182811680156103f2576001811461042557610454565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450610454565b8760005260208060002060005b8581101561044b5781548a820152908401908201610432565b50505082870194505b50929695505050505050565b6000806020838503121561047357600080fd5b823567ffffffffffffffff8082111561048b57600080fd5b818501915085601f83011261049f57600080fd5b8135818111156104ae57600080fd5b8660208285010111156104c057600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f82111561054b57600081815260208120601f850160051c810160208610156105285750805b601f850160051c820191505b8181101561054757828155600101610534565b5050505b505050565b67ffffffffffffffff831115610568576105686104d2565b61057c836105768354610379565b83610501565b6000601f8411600181146105ce57600085156105985750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355610664565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101561061d57868501358255602094850194600190920191016105fd565b5086821015610658577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b818382376000910190815291905056fea26469706673582212208acafa9a0811d54bb209b6a70be17f10e145779b598d63a04543cd61a967147064736f6c63430008110033";

type ReentrancyCheckerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrancyCheckerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrancyChecker__factory extends ContractFactory {
  constructor(...args: ReentrancyCheckerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    facetAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentrancyChecker> {
    return super.deploy(
      facetAddress,
      overrides || {}
    ) as Promise<ReentrancyChecker>;
  }
  override getDeployTransaction(
    facetAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(facetAddress, overrides || {});
  }
  override attach(address: string): ReentrancyChecker {
    return super.attach(address) as ReentrancyChecker;
  }
  override connect(signer: Signer): ReentrancyChecker__factory {
    return super.connect(signer) as ReentrancyChecker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyCheckerInterface {
    return new utils.Interface(_abi) as ReentrancyCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyChecker {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyChecker;
  }
}
