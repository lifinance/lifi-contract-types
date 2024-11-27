/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWrapper,
  IWrapperInterface,
} from "../../TokenWrapper.sol/IWrapper.js";

const _abi = [
  {
    type: "function",
    name: "deposit",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "wad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): IWrapperInterface {
    return new utils.Interface(_abi) as IWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWrapper {
    return new Contract(address, _abi, signerOrProvider) as IWrapper;
  }
}
