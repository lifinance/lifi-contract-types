/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGlacisAirlift,
  IGlacisAirliftInterface,
} from "../IGlacisAirlift";

const _abi = [
  {
    type: "function",
    name: "addSelectorsToToken",
    inputs: [
      {
        name: "diamondSelectors",
        type: "bytes4[]",
        internalType: "bytes4[]",
      },
      {
        name: "facetSelectors",
        type: "bytes4[]",
        internalType: "bytes4[]",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "quoteSend",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "refundAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "msgValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct QuoteSendInfo",
        components: [
          {
            name: "gmpFee",
            type: "tuple",
            internalType: "struct Fee",
            components: [
              {
                name: "nativeFee",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "tokenFee",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "amountSent",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "valueSent",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "AirliftFeeInfo",
            type: "tuple",
            internalType: "struct AirliftFeeInfo",
            components: [
              {
                name: "airliftFee",
                type: "tuple",
                internalType: "struct Fee",
                components: [
                  {
                    name: "nativeFee",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "tokenFee",
                    type: "uint256",
                    internalType: "uint256",
                  },
                ],
              },
              {
                name: "correctedAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "correctedValue",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "send",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "refundAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendAfterApproval",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "refundAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IGlacisAirlift__factory {
  static readonly abi = _abi;
  static createInterface(): IGlacisAirliftInterface {
    return new utils.Interface(_abi) as IGlacisAirliftInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGlacisAirlift {
    return new Contract(address, _abi, signerOrProvider) as IGlacisAirlift;
  }
}
