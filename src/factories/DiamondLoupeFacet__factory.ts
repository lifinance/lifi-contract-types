/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DiamondLoupeFacet,
  DiamondLoupeFacetInterface,
} from "../DiamondLoupeFacet";

const _abi = [
  {
    type: "function",
    name: "facetAddress",
    inputs: [
      {
        name: "_functionSelector",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "facetAddress_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facetAddresses",
    inputs: [],
    outputs: [
      {
        name: "facetAddresses_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facetFunctionSelectors",
    inputs: [
      {
        name: "_facet",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
        internalType: "bytes4[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "facets",
    inputs: [],
    outputs: [
      {
        name: "facets_",
        type: "tuple[]",
        internalType: "struct IDiamondLoupe.Facet[]",
        components: [
          {
            name: "facetAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "functionSelectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "_interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f5ffd5b506107c38061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610064575f3560e01c80637a0ed6271161004d5780637a0ed627146100f5578063adfca15e1461010a578063cdffacc61461012a575f5ffd5b806301ffc9a71461006857806352ef6b2c146100e0575b5f5ffd5b6100cb610076366004610546565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100e86101c5565b6040516100d7919061058c565b6100fd610254565b6040516100d79190610640565b61011d6101183660046106ee565b61044a565b6040516100d79190610721565b6101a0610138366004610546565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d7565b60605f7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6002810180546040805160208084028201810190925282815293945083018282801561024957602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161021e575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e546060907fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c908067ffffffffffffffff8111156102b4576102b4610733565b6040519080825280602002602001820160405280156102f957816020015b604080518082019091525f8152606060208201528152602001906001900390816102d25790505b5092505f5b81811015610444575f83600201828154811061031c5761031c610760565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508085838151811061035957610359610760565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff92831690529082165f9081526001860182526040908190208054825181850281018501909352808352919290919083018282801561041657602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116103c35790505b505050505085838151811061042d5761042d610760565b6020908102919091018101510152506001016102fe565b50505090565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d602090815260409182902080548351818402810184019094528084526060937fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c939092919083018282801561053957602002820191905f5260205f20905f905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116104e65790505b5050505050915050919050565b5f60208284031215610556575f5ffd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610585575f5ffd5b9392505050565b602080825282518282018190525f918401906040840190835b818110156105d957835173ffffffffffffffffffffffffffffffffffffffff168352602093840193909201916001016105a5565b509095945050505050565b5f8151808452602084019350602083015f5b828110156106365781517fffffffff00000000000000000000000000000000000000000000000000000000168652602095860195909101906001016105f6565b5093949350505050565b5f602082016020835280845180835260408501915060408160051b8601019250602086015f5b828110156106e2577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0878603018452815173ffffffffffffffffffffffffffffffffffffffff815116865260208101519050604060208701526106cc60408701826105e4565b9550506020938401939190910190600101610666565b50929695505050505050565b5f602082840312156106fe575f5ffd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610585575f5ffd5b602081525f61058560208301846105e4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220f78f98ea10744eb0527585369a6c7febb42314fc50c80a710439f608a95abd9764736f6c634300081d0033";

type DiamondLoupeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondLoupeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondLoupeFacet__factory extends ContractFactory {
  constructor(...args: DiamondLoupeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondLoupeFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondLoupeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondLoupeFacet {
    return super.attach(address) as DiamondLoupeFacet;
  }
  override connect(signer: Signer): DiamondLoupeFacet__factory {
    return super.connect(signer) as DiamondLoupeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondLoupeFacetInterface {
    return new utils.Interface(_abi) as DiamondLoupeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondLoupeFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondLoupeFacet;
  }
}
