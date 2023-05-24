/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  L2_AmmWrapper,
  L2_AmmWrapperInterface,
} from "../../HopFacetPacked.sol/L2_AmmWrapper";

const _abi = [
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2CanonicalToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class L2_AmmWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): L2_AmmWrapperInterface {
    return new utils.Interface(_abi) as L2_AmmWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2_AmmWrapper {
    return new Contract(address, _abi, signerOrProvider) as L2_AmmWrapper;
  }
}
