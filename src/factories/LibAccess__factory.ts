/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAccess, LibAccessInterface } from "../LibAccess";

const _abi = [
  {
    type: "event",
    name: "AccessGranted",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "method",
        type: "bytes4",
        indexed: true,
        internalType: "bytes4",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AccessRevoked",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "method",
        type: "bytes4",
        indexed: true,
        internalType: "bytes4",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea264697066735822122080716fedf50c8689d2199c78076e4fe05a048126b49b28b0e54df11ccf98eba264736f6c63430008160033";

type LibAccessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibAccessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibAccess__factory extends ContractFactory {
  constructor(...args: LibAccessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibAccess> {
    return super.deploy(overrides || {}) as Promise<LibAccess>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibAccess {
    return super.attach(address) as LibAccess;
  }
  override connect(signer: Signer): LibAccess__factory {
    return super.connect(signer) as LibAccess__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibAccessInterface {
    return new utils.Interface(_abi) as LibAccessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibAccess {
    return new Contract(address, _abi, signerOrProvider) as LibAccess;
  }
}
