/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDlnSource, IDlnSourceInterface } from "../IDlnSource.js";

const _abi = [
  {
    type: "function",
    name: "createOrder",
    inputs: [
      {
        name: "_orderCreation",
        type: "tuple",
        internalType: "struct IDlnSource.OrderCreation",
        components: [
          {
            name: "giveTokenAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "giveAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "takeTokenAddress",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "takeAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "takeChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "receiverDst",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "givePatchAuthoritySrc",
            type: "address",
            internalType: "address",
          },
          {
            name: "orderAuthorityAddressDst",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "allowedTakerDst",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "externalCall",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "allowedCancelBeneficiarySrc",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "_affiliateFee",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_referralCode",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_permitEnvelope",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "orderId",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "payable",
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
    stateMutability: "nonpayable",
  },
] as const;

export class IDlnSource__factory {
  static readonly abi = _abi;
  static createInterface(): IDlnSourceInterface {
    return new utils.Interface(_abi) as IDlnSourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDlnSource {
    return new Contract(address, _abi, signerOrProvider) as IDlnSource;
  }
}
