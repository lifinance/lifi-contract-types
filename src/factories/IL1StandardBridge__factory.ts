/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IL1StandardBridge,
  IL1StandardBridgeInterface,
} from "../IL1StandardBridge.js";

const _abi = [
  {
    type: "function",
    name: "depositERC20To",
    inputs: [
      {
        name: "_l1Token",
        type: "address",
        internalType: "address",
      },
      {
        name: "_l2Token",
        type: "address",
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_l2Gas",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "depositETHTo",
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_l2Gas",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "depositTo",
    inputs: [
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IL1StandardBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IL1StandardBridgeInterface {
    return new utils.Interface(_abi) as IL1StandardBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IL1StandardBridge {
    return new Contract(address, _abi, signerOrProvider) as IL1StandardBridge;
  }
}
