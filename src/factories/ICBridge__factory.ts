/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICBridge, ICBridgeInterface } from "../ICBridge.js";

const _abi = [
  {
    type: "function",
    name: "send",
    inputs: [
      {
        name: "_receiver",
        type: "address",
        internalType: "address",
      },
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
        name: "_dstChainId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_nonce",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_maxSlippage",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendNative",
    inputs: [
      {
        name: "_receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_dstChainId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_nonce",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_maxSlippage",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class ICBridge__factory {
  static readonly abi = _abi;
  static createInterface(): ICBridgeInterface {
    return new utils.Interface(_abi) as ICBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICBridge {
    return new Contract(address, _abi, signerOrProvider) as ICBridge;
  }
}
