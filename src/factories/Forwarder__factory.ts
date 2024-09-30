/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Forwarder, ForwarderInterface } from "../Forwarder";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "diamond",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "_diamond",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withDiamondDeposit",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "bs",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withForwarderDeposit",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "bs",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "error",
    name: "InsufficientBalance",
    inputs: [
      {
        name: "want",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "got",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAValidSpender",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60c060405260001960a05234801561001657600080fd5b50604051610e4c380380610e4c83398101604081905261003591610046565b6001600160a01b0316608052610076565b60006020828403121561005857600080fd5b81516001600160a01b038116811461006f57600080fd5b9392505050565b60805160a051610d9e6100ae6000396000610133015260008181606b0152818160cf01528181610112015261021b0152610d9e6000f3fe6080604052600436106100385760003560e01c80633fd72335146100445780635786c7e3146100595780638867835a146100b657600080fd5b3661003f57005b600080fd5b610057610052366004610ba7565b6100c9565b005b34801561006557600080fd5b5061008d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100576100c4366004610ba7565b610102565b6100f3837f0000000000000000000000000000000000000000000000000000000000000000610157565b6100fd8282610216565b505050565b61010c8330610157565b6100f3837f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006102c9565b73ffffffffffffffffffffffffffffffffffffffff821615610212576040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156101e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102049190610c45565b90506100fd8333848461040c565b5050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16348585604051610261929190610c5e565b60006040518083038185875af1925050503d806000811461029e576040519150601f19603f3d011682016040523d82523d6000602084013e6102a3565b606091505b5091509150816102c35780516000036102bb57600080fd5b805181602001fd5b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166102e957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610336576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156103ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cf9190610c45565b10156100fd576103e183836000610626565b6100fd83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610626565b73ffffffffffffffffffffffffffffffffffffffff8416610459576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166104a6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610517573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053b9190610c45565b90506105498286868661082b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156105b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105dd9190610c45565b6105e79190610c6e565b1461061e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b8015806106c657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156106a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c49190610c45565b155b610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526100fd9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610889565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526102c39085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016107a9565b60006108eb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166109989092919063ffffffff16565b905080516000148061090c57508080602001905181019061090c9190610cae565b6100fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161074e565b60606109a784846000856109af565b949350505050565b606082471015610a41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161074e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610a6a9190610cfb565b60006040518083038185875af1925050503d8060008114610aa7576040519150601f19603f3d011682016040523d82523d6000602084013e610aac565b606091505b5091509150610abd87838387610ac8565b979650505050505050565b60608315610b5e578251600003610b575773ffffffffffffffffffffffffffffffffffffffff85163b610b57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161074e565b50816109a7565b6109a78383815115610b735781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e9190610d17565b600080600060408486031215610bbc57600080fd5b833573ffffffffffffffffffffffffffffffffffffffff81168114610be057600080fd5b9250602084013567ffffffffffffffff80821115610bfd57600080fd5b818601915086601f830112610c1157600080fd5b813581811115610c2057600080fd5b876020828501011115610c3257600080fd5b6020830194508093505050509250925092565b600060208284031215610c5757600080fd5b5051919050565b8183823760009101908152919050565b81810381811115610ca8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600060208284031215610cc057600080fd5b81518015158114610cd057600080fd5b9392505050565b60005b83811015610cf2578181015183820152602001610cda565b50506000910152565b60008251610d0d818460208701610cd7565b9190910192915050565b6020815260008251806020840152610d36816040850160208701610cd7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122072ce2ade5cd9bef484c71f8c3824d94b806eaf8830b4f665992680c9d3b0ffc864736f6c63430008110033";

type ForwarderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ForwarderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Forwarder__factory extends ContractFactory {
  constructor(...args: ForwarderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Forwarder> {
    return super.deploy(diamond, overrides || {}) as Promise<Forwarder>;
  }
  override getDeployTransaction(
    diamond: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(diamond, overrides || {});
  }
  override attach(address: string): Forwarder {
    return super.attach(address) as Forwarder;
  }
  override connect(signer: Signer): Forwarder__factory {
    return super.connect(signer) as Forwarder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForwarderInterface {
    return new utils.Interface(_abi) as ForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Forwarder {
    return new Contract(address, _abi, signerOrProvider) as Forwarder;
  }
}
