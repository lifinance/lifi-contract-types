/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFTV2, IOFTV2Interface } from "../../IOFT.sol/IOFTV2";

const _abi = [
  {
    type: "function",
    name: "estimateSendFee",
    inputs: [
      {
        name: "_dstChainId",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "_toAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_useZro",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "_adapterParams",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "nativeFee",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "zroFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sendFrom",
    inputs: [
      {
        name: "_from",
        type: "address",
        internalType: "address",
      },
      {
        name: "_dstChainId",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "_toAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_callParams",
        type: "tuple",
        internalType: "struct IOFTV2.LzCallParams",
        components: [
          {
            name: "refundAddress",
            type: "address",
            internalType: "address payable",
          },
          {
            name: "zroPaymentAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "adapterParams",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IOFTV2__factory {
  static readonly abi = _abi;
  static createInterface(): IOFTV2Interface {
    return new utils.Interface(_abi) as IOFTV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOFTV2 {
    return new Contract(address, _abi, signerOrProvider) as IOFTV2;
  }
}
