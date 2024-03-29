/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDeBridgeGate, IDeBridgeGateInterface } from "../IDeBridgeGate";

const _abi = [
  {
    type: "function",
    name: "getChainToConfig",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IDeBridgeGate.ChainSupportInfo",
        components: [
          {
            name: "fixedNativeFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "isSupported",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "transferFeeBps",
            type: "uint16",
            internalType: "uint16",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "globalFixedNativeFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "send",
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_chainIdTo",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_receiver",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_permit",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_useAssetFee",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "_referralCode",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_autoParams",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IDeBridgeGate__factory {
  static readonly abi = _abi;
  static createInterface(): IDeBridgeGateInterface {
    return new utils.Interface(_abi) as IDeBridgeGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDeBridgeGate {
    return new Contract(address, _abi, signerOrProvider) as IDeBridgeGate;
  }
}
