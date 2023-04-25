/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICircleBridgeProxy,
  ICircleBridgeProxyInterface,
} from "../ICircleBridgeProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_dstChid",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "_mintRecipient",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_burnToken",
        type: "address",
      },
    ],
    name: "depositForBurn",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICircleBridgeProxy__factory {
  static readonly abi = _abi;
  static createInterface(): ICircleBridgeProxyInterface {
    return new utils.Interface(_abi) as ICircleBridgeProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICircleBridgeProxy {
    return new Contract(address, _abi, signerOrProvider) as ICircleBridgeProxy;
  }
}
