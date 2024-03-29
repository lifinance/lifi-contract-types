/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMultichainERC20,
  IMultichainERC20Interface,
} from "../../MultichainFacet.sol/IMultichainERC20";

const _abi = [
  {
    type: "function",
    name: "Swapout",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "bindaddr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IMultichainERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IMultichainERC20Interface {
    return new utils.Interface(_abi) as IMultichainERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMultichainERC20 {
    return new Contract(address, _abi, signerOrProvider) as IMultichainERC20;
  }
}
