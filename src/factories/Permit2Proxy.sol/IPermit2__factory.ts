/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPermit2,
  IPermit2Interface,
} from "../../Permit2Proxy.sol/IPermit2";

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

export class IPermit2__factory {
  static readonly abi = _abi;
  static createInterface(): IPermit2Interface {
    return new utils.Interface(_abi) as IPermit2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPermit2 {
    return new Contract(address, _abi, signerOrProvider) as IPermit2;
  }
}
