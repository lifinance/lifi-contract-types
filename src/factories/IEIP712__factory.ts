/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEIP712, IEIP712Interface } from "../IEIP712.js";

const _abi = [
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IEIP712__factory {
  static readonly abi = _abi;
  static createInterface(): IEIP712Interface {
    return new utils.Interface(_abi) as IEIP712Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEIP712 {
    return new Contract(address, _abi, signerOrProvider) as IEIP712;
  }
}
