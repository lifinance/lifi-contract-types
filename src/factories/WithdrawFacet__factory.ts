/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "UnAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LogWithdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_callTo",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "executeCallAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bcb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631458d7ad1461003b578063d9caed1214610050575b600080fd5b61004e6100493660046109c0565b610063565b005b61004e61005e366004610a71565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a9576100a96101fc565b6000863b1515806100e6576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010d929190610ab2565b6000604051808303816000865af19150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b5090925050811561016a5761016585858561029c565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f783838361029c565b505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610299576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff8316156102c057826102c2565b335b90506102cf848284610328565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff83161561034f576101f7838383610359565b6101f782826104e0565b73ffffffffffffffffffffffffffffffffffffffff83166103a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190610ac2565b9050808211156104cf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104da84848461060a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661052d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610570576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016104c6565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146105ca576040519150601f19603f3d011682016040523d82523d6000602084013e6105cf565b606091505b50509050806101f7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101f7928692916000916106d591851690849061077f565b8051909150156101f757808060200190518101906106f39190610adb565b6101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104c6565b606061078e8484600085610796565b949350505050565b606082471015610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104c6565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108519190610b28565b60006040518083038185875af1925050503d806000811461088e576040519150601f19603f3d011682016040523d82523d6000602084013e610893565b606091505b50915091506108a4878383876108af565b979650505050505050565b6060831561094557825160000361093e5773ffffffffffffffffffffffffffffffffffffffff85163b61093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104c6565b508161078e565b61078e838381511561095a5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c69190610b44565b73ffffffffffffffffffffffffffffffffffffffff8116811461029957600080fd5b80356109bb8161098e565b919050565b60008060008060008060a087890312156109d957600080fd5b86356109e48161098e565b9550602087013567ffffffffffffffff80821115610a0157600080fd5b818901915089601f830112610a1557600080fd5b813581811115610a2457600080fd5b8a6020828501011115610a3657600080fd5b6020830197508096505050506040870135610a508161098e565b9250610a5e606088016109b0565b9150608087013590509295509295509295565b600080600060608486031215610a8657600080fd5b8335610a918161098e565b92506020840135610aa18161098e565b929592945050506040919091013590565b8183823760009101908152919050565b600060208284031215610ad457600080fd5b5051919050565b600060208284031215610aed57600080fd5b81518015158114610afd57600080fd5b9392505050565b60005b83811015610b1f578181015183820152602001610b07565b50506000910152565b60008251610b3a818460208701610b04565b9190910192915050565b6020815260008251806020840152610b63816040850160208701610b04565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220bc1d8e74fa6adab0a7d2296f3b65aa8874694687dc89f451e8e97406d8b0c18364736f6c63430008110033";

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawFacet> {
    return super.deploy(overrides || {}) as Promise<WithdrawFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
