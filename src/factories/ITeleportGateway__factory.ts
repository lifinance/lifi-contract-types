/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITeleportGateway,
  ITeleportGatewayInterface,
} from "../ITeleportGateway";

const _abi = [
  {
    type: "function",
    name: "initiateTeleport",
    inputs: [
      {
        name: "targetDomain",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class ITeleportGateway__factory {
  static readonly abi = _abi;
  static createInterface(): ITeleportGatewayInterface {
    return new utils.Interface(_abi) as ITeleportGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITeleportGateway {
    return new Contract(address, _abi, signerOrProvider) as ITeleportGateway;
  }
}
