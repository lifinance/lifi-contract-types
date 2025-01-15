/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAllowanceTransfer,
  IAllowanceTransferInterface,
} from "../IAllowanceTransfer.js";

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
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "expiration",
        type: "uint48",
        internalType: "uint48",
      },
      {
        name: "nonce",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "expiration",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "invalidateNonces",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "newNonce",
        type: "uint48",
        internalType: "uint48",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lockdown",
    inputs: [
      {
        name: "approvals",
        type: "tuple[]",
        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
        components: [
          {
            name: "token",
            type: "address",
            internalType: "address",
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "permitBatch",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitBatch",
        components: [
          {
            name: "details",
            type: "tuple[]",
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            components: [
              {
                name: "token",
                type: "address",
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint160",
                internalType: "uint160",
              },
              {
                name: "expiration",
                type: "uint48",
                internalType: "uint48",
              },
              {
                name: "nonce",
                type: "uint48",
                internalType: "uint48",
              },
            ],
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "sigDeadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "permitSingle",
        type: "tuple",
        internalType: "struct IAllowanceTransfer.PermitSingle",
        components: [
          {
            name: "details",
            type: "tuple",
            internalType: "struct IAllowanceTransfer.PermitDetails",
            components: [
              {
                name: "token",
                type: "address",
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint160",
                internalType: "uint160",
              },
              {
                name: "expiration",
                type: "uint48",
                internalType: "uint48",
              },
              {
                name: "nonce",
                type: "uint48",
                internalType: "uint48",
              },
            ],
          },
          {
            name: "spender",
            type: "address",
            internalType: "address",
          },
          {
            name: "sigDeadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "transferDetails",
        type: "tuple[]",
        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
        components: [
          {
            name: "from",
            type: "address",
            internalType: "address",
          },
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint160",
            internalType: "uint160",
          },
          {
            name: "token",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint160",
        indexed: false,
        internalType: "uint160",
      },
      {
        name: "expiration",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Lockdown",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NonceInvalidation",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newNonce",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
      {
        name: "oldNonce",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint160",
        indexed: false,
        internalType: "uint160",
      },
      {
        name: "expiration",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
      {
        name: "nonce",
        type: "uint48",
        indexed: false,
        internalType: "uint48",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AllowanceExpired",
    inputs: [
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ExcessiveInvalidation",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientAllowance",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
] as const;

export class IAllowanceTransfer__factory {
  static readonly abi = _abi;
  static createInterface(): IAllowanceTransferInterface {
    return new utils.Interface(_abi) as IAllowanceTransferInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAllowanceTransfer {
    return new Contract(address, _abi, signerOrProvider) as IAllowanceTransfer;
  }
}
