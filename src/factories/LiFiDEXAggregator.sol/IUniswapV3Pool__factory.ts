/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3Pool,
  IUniswapV3PoolInterface,
} from "../../LiFiDEXAggregator.sol/IUniswapV3Pool.js";

const _abi = [
  {
    type: "function",
    name: "swap",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "zeroForOne",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "amountSpecified",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "sqrtPriceLimitX96",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "amount0",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "amount1",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "token0",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "token1",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IUniswapV3Pool__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3Pool {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV3Pool;
  }
}
