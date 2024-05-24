/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibDiamond, LibDiamondInterface } from "../LibDiamond";

const _abi = [
  {
    type: "event",
    name: "DiamondCut",
    inputs: [
      {
        name: "_diamondCut",
        type: "tuple[]",
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        components: [
          {
            name: "facetAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "action",
            type: "uint8",
            internalType: "enum IDiamondCut.FacetCutAction",
          },
          {
            name: "functionSelectors",
            type: "bytes4[]",
            internalType: "bytes4[]",
          },
        ],
      },
      {
        name: "_init",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_calldata",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
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
    name: "CalldataEmptyButInitNotZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetAddressIsNotZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetAddressIsZero",
    inputs: [],
  },
  {
    type: "error",
    name: "FacetContainsNoCode",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionAlreadyExists",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionDoesNotExist",
    inputs: [],
  },
  {
    type: "error",
    name: "FunctionIsImmutable",
    inputs: [],
  },
  {
    type: "error",
    name: "IncorrectFacetCutAction",
    inputs: [],
  },
  {
    type: "error",
    name: "InitReverted",
    inputs: [],
  },
  {
    type: "error",
    name: "InitZeroButCalldataNotEmpty",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSelectorsInFace",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220adf281a5560ba5aede73678c53c16159d810c8102a1427e9d6cb2993e39c63f964736f6c63430008110033";

type LibDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibDiamond__factory extends ContractFactory {
  constructor(...args: LibDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibDiamond> {
    return super.deploy(overrides || {}) as Promise<LibDiamond>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibDiamond {
    return super.attach(address) as LibDiamond;
  }
  override connect(signer: Signer): LibDiamond__factory {
    return super.connect(signer) as LibDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibDiamondInterface {
    return new utils.Interface(_abi) as LibDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibDiamond {
    return new Contract(address, _abi, signerOrProvider) as LibDiamond;
  }
}
