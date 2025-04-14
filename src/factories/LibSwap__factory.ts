/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LibSwap, LibSwapInterface } from "../LibSwap";

const _abi = [
  {
    type: "event",
    name: "AssetSwapped",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "dex",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "toAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea2646970667358221220b84168df152aaf0ccbe478211601c97bbca1f3ea33b7a404b9ad8f367f16877a64736f6c634300081d0033";

type LibSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibSwap__factory extends ContractFactory {
  constructor(...args: LibSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibSwap> {
    return super.deploy(overrides || {}) as Promise<LibSwap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibSwap {
    return super.attach(address) as LibSwap;
  }
  override connect(signer: Signer): LibSwap__factory {
    return super.connect(signer) as LibSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibSwapInterface {
    return new utils.Interface(_abi) as LibSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibSwap {
    return new Contract(address, _abi, signerOrProvider) as LibSwap;
  }
}
