/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  StandardizedCallFacet,
  StandardizedCallFacetInterface,
} from "../StandardizedCallFacet";

const _abi = [
  {
    type: "function",
    name: "standardizedBridgeCall",
    inputs: [
      {
        name: "callData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "standardizedCall",
    inputs: [
      {
        name: "callData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "standardizedSwapAndBridgeCall",
    inputs: [
      {
        name: "callData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "standardizedSwapCall",
    inputs: [
      {
        name: "callData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "error",
    name: "FunctionDoesNotExist",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102bb806100206000396000f3fe60806040526004361061003f5760003560e01c80630510f6bf14610044578063a548ec5f14610044578063d6a4bc5014610044578063d903b91714610044575b600080fd5b610057610052366004610166565b610059565b005b61006281610065565b50565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6000818161009385610235565b7fffffffff0000000000000000000000000000000000000000000000000000000016815260208101919091526040016000205473ffffffffffffffffffffffffffffffffffffffff16905080610115576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080845160208601845af43d6000803e808015610132573d6000f35b3d6000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561017857600080fd5b813567ffffffffffffffff8082111561019057600080fd5b818401915084601f8301126101a457600080fd5b8135818111156101b6576101b6610137565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101fc576101fc610137565b8160405282815287602084870101111561021557600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815160208301517fffffffff000000000000000000000000000000000000000000000000000000008082169350600483101561027d5780818460040360031b1b83161693505b50505091905056fea26469706673582212203318702cad4f1913cf497537efe462e37bf7950589d6e5398babbe7676d618cb64736f6c63430008110033";

type StandardizedCallFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StandardizedCallFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StandardizedCallFacet__factory extends ContractFactory {
  constructor(...args: StandardizedCallFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StandardizedCallFacet> {
    return super.deploy(overrides || {}) as Promise<StandardizedCallFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StandardizedCallFacet {
    return super.attach(address) as StandardizedCallFacet;
  }
  override connect(signer: Signer): StandardizedCallFacet__factory {
    return super.connect(signer) as StandardizedCallFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StandardizedCallFacetInterface {
    return new utils.Interface(_abi) as StandardizedCallFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardizedCallFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StandardizedCallFacet;
  }
}
