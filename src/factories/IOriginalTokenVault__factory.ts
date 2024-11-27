/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOriginalTokenVault,
  IOriginalTokenVaultInterface,
} from "../IOriginalTokenVault.js";

const _abi = [
  {
    type: "function",
    name: "deposit",
    inputs: [
      {
        name: "_token",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_mintChainId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_mintAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "_nonce",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "depositNative",
    inputs: [
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_mintChainId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_mintAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "_nonce",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "records",
    inputs: [
      {
        name: "recordId",
        type: "bytes32",
        internalType: "bytes32",
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
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "_request",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_sigs",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "_signers",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_powers",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IOriginalTokenVault__factory {
  static readonly abi = _abi;
  static createInterface(): IOriginalTokenVaultInterface {
    return new utils.Interface(_abi) as IOriginalTokenVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOriginalTokenVault {
    return new Contract(address, _abi, signerOrProvider) as IOriginalTokenVault;
  }
}
