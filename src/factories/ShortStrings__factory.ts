/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ShortStrings, ShortStringsInterface } from "../ShortStrings";

const _abi = [
  {
    type: "error",
    name: "InvalidShortString",
    inputs: [],
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        name: "str",
        type: "string",
        internalType: "string",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220616813bcc4102051375814bc64ee3c7ef621130ad593e45c1801078d61ff602c64736f6c634300081d0033";

type ShortStringsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShortStringsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShortStrings__factory extends ContractFactory {
  constructor(...args: ShortStringsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ShortStrings> {
    return super.deploy(overrides || {}) as Promise<ShortStrings>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ShortStrings {
    return super.attach(address) as ShortStrings;
  }
  override connect(signer: Signer): ShortStrings__factory {
    return super.connect(signer) as ShortStrings__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortStringsInterface {
    return new utils.Interface(_abi) as ShortStringsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortStrings {
    return new Contract(address, _abi, signerOrProvider) as ShortStrings;
  }
}
