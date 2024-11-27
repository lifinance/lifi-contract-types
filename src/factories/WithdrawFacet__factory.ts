/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WithdrawFacet,
  WithdrawFacetInterface,
} from "../WithdrawFacet.js";

const _abi = [
  {
    type: "function",
    name: "executeCallAndWithdraw",
    inputs: [
      {
        name: "_callTo",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "_callData",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_assetAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "_assetAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "LogWithdraw",
    inputs: [
      {
        name: "_assetAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InsufficientBalance",
    inputs: [
      {
        name: "required",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NotAContract",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "WithdrawFailed",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bce806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e6100493660046109c3565b610063565b005b61004e61005e366004610a74565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fc565b6000863b1515806100e6576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010d929190610ab5565b6000604051808303816000865af19150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b5090925050811561016a5761016585858561029c565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361029c565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610299576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c057826102c2565b335b90506102cf848284610328565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83161561034f576101f7838383610359565b6101f782826104e0565b73ffffffffffffffffffffffffffffffffffffffff83166103a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190610ac5565b9050808211156104cf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104da84848461060a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661052d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610570576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016104c6565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146105ca576040519150601f19603f3d011682016040523d82523d6000602084013e6105cf565b606091505b50509050806101f7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101f7928692916000916106d5918516908490610782565b90508051600014806106f65750808060200190518101906106f69190610ade565b6101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104c6565b60606107918484600085610799565b949350505050565b60608247101561082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104c6565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108549190610b2b565b60006040518083038185875af1925050503d8060008114610891576040519150601f19603f3d011682016040523d82523d6000602084013e610896565b606091505b50915091506108a7878383876108b2565b979650505050505050565b606083156109485782516000036109415773ffffffffffffffffffffffffffffffffffffffff85163b610941576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c6565b5081610791565b610791838381511561095d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c69190610b47565b73ffffffffffffffffffffffffffffffffffffffff8116811461029957600080fd5b80356109be81610991565b919050565b60008060008060008060a087890312156109dc57600080fd5b86356109e781610991565b9550602087013567ffffffffffffffff80821115610a0457600080fd5b818901915089601f830112610a1857600080fd5b813581811115610a2757600080fd5b8a6020828501011115610a3957600080fd5b6020830197508096505050506040870135610a5381610991565b9250610a61606088016109b3565b9150608087013590509295509295509295565b600080600060608486031215610a8957600080fd5b8335610a9481610991565b92506020840135610aa481610991565b929592945050506040919091013590565b8183823760009101908152919050565b600060208284031215610ad757600080fd5b5051919050565b600060208284031215610af057600080fd5b81518015158114610b0057600080fd5b9392505050565b60005b83811015610b22578181015183820152602001610b0a565b50506000910152565b60008251610b3d818460208701610b07565b9190910192915050565b6020815260008251806020840152610b66816040850160208701610b07565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122015f9e992669e0d35fe95e1d61341103aa4c17c5cca1baae8ea4bdffc52b88c0b64736f6c63430008110033";

type WithdrawFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawFacet__factory extends ContractFactory {
  constructor(...args: WithdrawFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<WithdrawFacet> {
    return super.deploy(overrides || {}) as Promise<WithdrawFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WithdrawFacet {
    return super.attach(address) as WithdrawFacet;
  }
  override connect(signer: Signer): WithdrawFacet__factory {
    return super.connect(signer) as WithdrawFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawFacetInterface {
    return new utils.Interface(_abi) as WithdrawFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawFacet {
    return new Contract(address, _abi, signerOrProvider) as WithdrawFacet;
  }
}
