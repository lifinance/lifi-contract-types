/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IntentFactory, IntentFactoryInterface } from "../IntentFactory";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_implementation",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deployAndExecuteIntent",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "_calls",
        type: "tuple[]",
        internalType: "struct IIntent.Call[]",
        components: [
          {
            name: "to",
            type: "address",
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deployAndWithdrawAll",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "tokens",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getIntentAddress",
    inputs: [
      {
        name: "_initData",
        type: "tuple",
        internalType: "struct IIntent.InitData",
        components: [
          {
            name: "intentId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "tokenOut",
            type: "address",
            internalType: "address",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
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
    name: "implementation",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516108b13803806108b183398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161081261009f6000396000818160560152818161010e0152818161027801526102d701526108126000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635c60da1b14610051578063716b2df9146100a15780638760b86b146100b6578063926d43eb146100c9575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100b46100af36600461051f565b6100dc565b005b6100786100c4366004610573565b610247565b6100b46100d736600461051f565b6102a5565b6000836040516020016100ef91906105b8565b60405160208183030381529060405280519060200120905060006101337f0000000000000000000000000000000000000000000000000000000000000000836103d7565b6040517ffe0cd20000000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fe0cd200906101889088906004016105b8565b600060405180830381600087803b1580156101a257600080fd5b505af11580156101b6573d6000803e3d6000fd5b50506040517f6568a27900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250636568a279915061020e908790879060040161060e565b600060405180830381600087803b15801561022857600080fd5b505af115801561023c573d6000803e3d6000fd5b505050505050505050565b6000808260405160200161025b91906105b8565b60405160208183030381529060405280519060200120905061029e7f000000000000000000000000000000000000000000000000000000000000000082306103e5565b9392505050565b6000836040516020016102b891906105b8565b60405160208183030381529060405280519060200120905060006102fc7f0000000000000000000000000000000000000000000000000000000000000000836103d7565b6040517ffe0cd20000000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063fe0cd200906103519088906004016105b8565b600060405180830381600087803b15801561036b57600080fd5b505af115801561037f573d6000803e3d6000fd5b50506040517f3f707e6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169250633f707e6b915061020e9087908790600401610667565b600061029e60008484610442565b60008061042c8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b9050610439818585610499565b95945050505050565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f590508061048d5763301164256000526004601cfd5b60006021529392505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b6000608082840312156104cd57600080fd5b50919050565b60008083601f8401126104e557600080fd5b50813567ffffffffffffffff8111156104fd57600080fd5b6020830191508360208260051b850101111561051857600080fd5b9250929050565b600080600060a0848603121561053457600080fd5b61053e85856104bb565b9250608084013567ffffffffffffffff81111561055a57600080fd5b610566868287016104d3565b9497909650939450505050565b60006080828403121561058557600080fd5b61029e83836104bb565b803573ffffffffffffffffffffffffffffffffffffffff811681146105b357600080fd5b919050565b81358152608081016105cc6020840161058f565b73ffffffffffffffffffffffffffffffffffffffff8082166020850152806105f66040870161058f565b16604085015250506060830135606083015292915050565b60208082528181018390526000908460408401835b8681101561065c5773ffffffffffffffffffffffffffffffffffffffff6106498461058f565b1682529183019190830190600101610623565b509695505050505050565b60208082528181018390526000906040808401600586901b8501820187855b888110156107ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18b36030181126106e757600080fd5b8a01606073ffffffffffffffffffffffffffffffffffffffff6107098361058f565b1685528782013588860152868201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe183360301811261074857600080fd5b90910187810191903567ffffffffffffffff81111561076657600080fd5b80360383131561077557600080fd5b8188870152808287015260809150808383880137600086820183015295880195601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909401909301925090850190600101610686565b50909897505050505050505056fea2646970667358221220cccca1f7bd606d9bd94bb6fc8a17929dcf6c29936e1bca387b3656e2a7cb84c964736f6c63430008110033";

type IntentFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntentFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IntentFactory__factory extends ContractFactory {
  constructor(...args: IntentFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IntentFactory> {
    return super.deploy(
      _implementation,
      overrides || {}
    ) as Promise<IntentFactory>;
  }
  override getDeployTransaction(
    _implementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_implementation, overrides || {});
  }
  override attach(address: string): IntentFactory {
    return super.attach(address) as IntentFactory;
  }
  override connect(signer: Signer): IntentFactory__factory {
    return super.connect(signer) as IntentFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntentFactoryInterface {
    return new utils.Interface(_abi) as IntentFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IntentFactory {
    return new Contract(address, _abi, signerOrProvider) as IntentFactory;
  }
}
