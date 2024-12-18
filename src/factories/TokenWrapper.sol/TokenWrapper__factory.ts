/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenWrapper,
  TokenWrapperInterface,
} from "../../TokenWrapper.sol/TokenWrapper";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_wrappedToken",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "deposit",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "wrappedToken",
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
    type: "error",
    name: "WithdrawFailure",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105ac3803806105ac83398101604081905261002f916100bb565b600080546001600160a01b0319166001600160a01b03831690811790915560405163095ea7b360e01b8152306004820152600019602482015263095ea7b3906044016020604051808303816000875af1158015610090573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b491906100eb565b505061010d565b6000602082840312156100cd57600080fd5b81516001600160a01b03811681146100e457600080fd5b9392505050565b6000602082840312156100fd57600080fd5b815180151581146100e457600080fd5b6104908061011c6000396000f3fe6080604052600436106100385760003560e01c80633ccfd60b14610044578063996c6cc31461005b578063d0e30db0146100b157600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100596100b9565b005b34801561006757600080fd5b506000546100889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596102f9565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014c9190610418565b6000546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810183905291925073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303816000875af11580156101ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ee9190610431565b506000546040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401600060405180830381600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b50506040516000925033915083908381818185875af1925050503d80600081146102b5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ba565b606091505b50509050806102f5576040517f1a0263ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561036157600080fd5b505af1158015610375573d6000803e3d6000fd5b50506000546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015234602482015273ffffffffffffffffffffffffffffffffffffffff909116935063a9059cbb925060440190506020604051808303816000875af11580156103f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104159190610431565b50565b60006020828403121561042a57600080fd5b5051919050565b60006020828403121561044357600080fd5b8151801515811461045357600080fd5b939250505056fea26469706673582212205adf63eab885b714010b2a74328cc11dd09f9fa6b72bad962528560651a9933c64736f6c63430008110033";

type TokenWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenWrapper__factory extends ContractFactory {
  constructor(...args: TokenWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wrappedToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenWrapper> {
    return super.deploy(
      _wrappedToken,
      overrides || {}
    ) as Promise<TokenWrapper>;
  }
  override getDeployTransaction(
    _wrappedToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wrappedToken, overrides || {});
  }
  override attach(address: string): TokenWrapper {
    return super.attach(address) as TokenWrapper;
  }
  override connect(signer: Signer): TokenWrapper__factory {
    return super.connect(signer) as TokenWrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenWrapperInterface {
    return new utils.Interface(_abi) as TokenWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenWrapper {
    return new Contract(address, _abi, signerOrProvider) as TokenWrapper;
  }
}
