/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransactionManager,
  ITransactionManagerInterface,
} from "../ITransactionManager.js";

const _abi = [
  {
    type: "function",
    name: "prepare",
    inputs: [
      {
        name: "args",
        type: "tuple",
        internalType: "struct ITransactionManager.PrepareArgs",
        components: [
          {
            name: "invariantData",
            type: "tuple",
            internalType: "struct ITransactionManager.InvariantTransactionData",
            components: [
              {
                name: "receivingChainTxManagerAddress",
                type: "address",
                internalType: "address",
              },
              {
                name: "user",
                type: "address",
                internalType: "address",
              },
              {
                name: "router",
                type: "address",
                internalType: "address",
              },
              {
                name: "initiator",
                type: "address",
                internalType: "address",
              },
              {
                name: "sendingAssetId",
                type: "address",
                internalType: "address",
              },
              {
                name: "receivingAssetId",
                type: "address",
                internalType: "address",
              },
              {
                name: "sendingChainFallback",
                type: "address",
                internalType: "address",
              },
              {
                name: "receivingAddress",
                type: "address",
                internalType: "address",
              },
              {
                name: "callTo",
                type: "address",
                internalType: "address",
              },
              {
                name: "sendingChainId",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "receivingChainId",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "callDataHash",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "transactionId",
                type: "bytes32",
                internalType: "bytes32",
              },
            ],
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "expiry",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "encryptedCallData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "encodedBid",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "bidSignature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "encodedMeta",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ITransactionManager.TransactionData",
        components: [
          {
            name: "receivingChainTxManagerAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "user",
            type: "address",
            internalType: "address",
          },
          {
            name: "router",
            type: "address",
            internalType: "address",
          },
          {
            name: "initiator",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingChainFallback",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "callDataHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "sendingChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "receivingChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "expiry",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "preparedBlockNumber",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "payable",
  },
] as const;

export class ITransactionManager__factory {
  static readonly abi = _abi;
  static createInterface(): ITransactionManagerInterface {
    return new utils.Interface(_abi) as ITransactionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransactionManager {
    return new Contract(address, _abi, signerOrProvider) as ITransactionManager;
  }
}
