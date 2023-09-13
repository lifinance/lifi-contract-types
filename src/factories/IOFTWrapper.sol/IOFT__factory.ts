/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOFT, IOFTInterface } from "../../IOFTWrapper.sol/IOFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_useZro",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "_adapterParams",
        type: "bytes",
      },
    ],
    name: "estimateSendFee",
    outputs: [
      {
        internalType: "uint256",
        name: "nativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zroFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOFT__factory {
  static readonly abi = _abi;
  static createInterface(): IOFTInterface {
    return new utils.Interface(_abi) as IOFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOFT {
    return new Contract(address, _abi, signerOrProvider) as IOFT;
  }
}