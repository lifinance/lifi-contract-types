/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  OwnershipFacet,
  OwnershipFacetInterface,
} from "../OwnershipFacet";

const _abi = [
  {
    type: "function",
    name: "cancelOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "confirmOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "owner_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferRequested",
    inputs: [
      {
        name: "_from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "NewOwnerMustNotBeSelf",
    inputs: [],
  },
  {
    type: "error",
    name: "NoNullOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NoPendingOwnershipTransfer",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPendingOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyContractOwner",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105e9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806323452b9c146100515780637200b8291461005b5780638da5cb5b14610063578063f2fde38b14610094575b600080fd5b6100596100a7565b005b610059610146565b61006b610281565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100596100a2366004610576565b6102c6565b6100af610447565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff1661011e576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b805473ffffffffffffffffffffffffffffffffffffffff163381146101b8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661020d7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3610258816104bc565b5080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60006102c17fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6102ce610447565b7fcf2fba1a5c9c61959b11f2f1f88658271468c6fcc649cb2a6868473d3cd07f8b73ffffffffffffffffffffffffffffffffffffffff821661033c576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103d8576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117825560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a35050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146104ba576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c132080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8481169182179093556040517fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60006020828403121561058857600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146105ac57600080fd5b939250505056fea26469706673582212207c0129c2e3dbf14d8f27d2bdc2bb047c6864ab1324dcc0471a60649cae2ba2c664736f6c63430008110033";

type OwnershipFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnershipFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnershipFacet__factory extends ContractFactory {
  constructor(...args: OwnershipFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnershipFacet> {
    return super.deploy(overrides || {}) as Promise<OwnershipFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnershipFacet {
    return super.attach(address) as OwnershipFacet;
  }
  override connect(signer: Signer): OwnershipFacet__factory {
    return super.connect(signer) as OwnershipFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnershipFacetInterface {
    return new utils.Interface(_abi) as OwnershipFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnershipFacet {
    return new Contract(address, _abi, signerOrProvider) as OwnershipFacet;
  }
}
