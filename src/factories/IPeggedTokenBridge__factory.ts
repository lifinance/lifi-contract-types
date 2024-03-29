/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPeggedTokenBridge,
  IPeggedTokenBridgeInterface,
} from "../IPeggedTokenBridge";

const _abi = [
  {
    type: "function",
    name: "burn",
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
        name: "_withdrawAccount",
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
    name: "mint",
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
] as const;

export class IPeggedTokenBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IPeggedTokenBridgeInterface {
    return new utils.Interface(_abi) as IPeggedTokenBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPeggedTokenBridge {
    return new Contract(address, _abi, signerOrProvider) as IPeggedTokenBridge;
  }
}
