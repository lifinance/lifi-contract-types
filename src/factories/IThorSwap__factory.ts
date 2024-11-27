/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IThorSwap, IThorSwapInterface } from "../IThorSwap.js";

const _abi = [
  {
    type: "function",
    name: "depositWithExpiry",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "asset",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "memo",
        type: "string",
        internalType: "string",
      },
      {
        name: "expiration",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class IThorSwap__factory {
  static readonly abi = _abi;
  static createInterface(): IThorSwapInterface {
    return new utils.Interface(_abi) as IThorSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IThorSwap {
    return new Contract(address, _abi, signerOrProvider) as IThorSwap;
  }
}
