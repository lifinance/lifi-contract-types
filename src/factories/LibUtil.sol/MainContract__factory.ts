/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MainContract,
  MainContractInterface,
} from "../../LibUtil.sol/MainContract";

const _abi = [
  {
    type: "function",
    name: "topLevelFunction1",
    inputs: [
      {
        name: "callTo",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "topLevelFunction2",
    inputs: [
      {
        name: "callTo",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610265806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633af5bfff1461003b578063f24a1c9214610050575b600080fd5b61004e6100493660046101c3565b610063565b005b61004e61005e3660046101c3565b61013b565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb0bea725000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b6000604051808303816000865af19150503d806000811461011e576040519150601f19603f3d011682016040523d82523d6000602084013e610123565b606091505b50915091508161013657610136816101b9565b505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f591a2a69000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b8051602082018181fd5b6000602082840312156101d557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101f957600080fd5b9392505050565b6000825160005b818110156102215760208186018101518583015201610207565b50600092019182525091905056fea2646970667358221220041b2b240ce23cf9c03340c187d567a1f69e6f97418514fe030a46dbee7cca2f64736f6c63430008110033";

type MainContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainContract__factory extends ContractFactory {
  constructor(...args: MainContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MainContract> {
    return super.deploy(overrides || {}) as Promise<MainContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MainContract {
    return super.attach(address) as MainContract;
  }
  override connect(signer: Signer): MainContract__factory {
    return super.connect(signer) as MainContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainContractInterface {
    return new utils.Interface(_abi) as MainContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainContract {
    return new Contract(address, _abi, signerOrProvider) as MainContract;
  }
}