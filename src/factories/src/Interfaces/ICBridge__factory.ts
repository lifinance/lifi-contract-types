/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICBridge,
  ICBridgeInterface,
} from "../../../src/Interfaces/ICBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_dstChainId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_maxSlippage",
        type: "uint32",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_dstChainId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_nonce",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_maxSlippage",
        type: "uint32",
      },
    ],
    name: "sendNative",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

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
