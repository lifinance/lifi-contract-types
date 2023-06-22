/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibAccess, LibAccessInterface } from "../LibAccess";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "method",
        type: "bytes4",
      },
    ],
    name: "AccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "method",
        type: "bytes4",
      },
    ],
    name: "AccessRevoked",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ed0c043e4778a83c791a759178f532fdf954061162638f69d25b74871dfb446664736f6c63430008110033";

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
