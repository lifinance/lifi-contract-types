/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ReceiverAcrossV3,
  ReceiverAcrossV3Interface,
} from "../ReceiverAcrossV3";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_executor",
        type: "address",
        internalType: "address",
      },
      {
        name: "_spokepool",
        type: "address",
        internalType: "address",
      },
      {
        name: "_recoverGas",
        type: "uint256",
        internalType: "uint256",
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
    name: "cancelOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "confirmOwnershipTransfer",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executor",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IExecutor",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleV3AcrossMessage",
    inputs: [
      {
        name: "tokenSent",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "message",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
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
    name: "pendingOwner",
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
    name: "pullToken",
    inputs: [
      {
        name: "assetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "recoverGas",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "spokepool",
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
    name: "transferOwnership",
    inputs: [
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "LiFiGenericSwapCompleted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "integrator",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "referrer",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "toAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiSwappedGeneric",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "integrator",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "referrer",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "fromAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "toAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferCompleted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "receivingAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferRecovered",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "receivingAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferStarted",
    inputs: [
      {
        name: "bridgeData",
        type: "tuple",
        indexed: false,
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferRequested",
    inputs: [
      {
        name: "_from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ExternalCallFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "InsufficientGasLimit",
    inputs: [],
  },
  {
    type: "error",
    name: "NewOwnerMustNotBeSelf",
    inputs: [],
  },
  {
    type: "error",
    name: "NoNullOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NoPendingOwnershipTransfer",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPendingOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405161122238038061122283398101604081905261002f9161007b565b600080546001600160a01b0319166001600160a01b0395861617905591831660805290911660a05260c0526100c6565b80516001600160a01b038116811461007657600080fd5b919050565b6000806000806080858703121561009157600080fd5b61009a8561005f565b93506100a86020860161005f565b92506100b66040860161005f565b6060959095015193969295505050565b60805160a05160c0516110f561012d600039600081816101ca015281816107b5015281816108d1015261094e01526000818161012a015261048f01526000818161020c015281816108290152818161086b015281816108a70152610a4301526110f56000f3fe6080604052600436106100b55760003560e01c80638da5cb5b11610069578063c34c08e51161004e578063c34c08e5146101fa578063e30c39781461022e578063f2fde38b1461025b57600080fd5b80638da5cb5b1461018b578063bcf225e6146101b857600080fd5b80633a5be8cb1161009a5780633a5be8cb146100f8578063430a5df7146101185780637200b8291461017657600080fd5b806323452b9c146100c15780632e144579146100d857600080fd5b366100bc57005b600080fd5b3480156100cd57600080fd5b506100d661027b565b005b3480156100e457600080fd5b506100d66100f3366004610adb565b610345565b34801561010457600080fd5b506100d6610113366004610c09565b610477565b34801561012457600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018257600080fd5b506100d661051b565b34801561019757600080fd5b5060005461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101c457600080fd5b506101ec7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161016d565b34801561020657600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561023a57600080fd5b5060015461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026757600080fd5b506100d6610276366004610cb8565b610601565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102cc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661031b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610396576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104515760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461040b576040519150601f19603f3d011682016040523d82523d6000602084013e610410565b606091505b505090508061044b576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61047273ffffffffffffffffffffffffffffffffffffffff8416838361075f565b505050565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806000838060200190518101906104ff9190610d6d565b925092509250610512838389848a6107ae565b50505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461056d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610652576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661069f576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106ee576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166107a4576390b8ec186000526004601cfd5b6000603452505050565b60005a90507f000000000000000000000000000000000000000000000000000000000000000081101561080d576040517f60ee124700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61084f73ffffffffffffffffffffffffffffffffffffffff85167f00000000000000000000000000000000000000000000000000000000000000006000610a71565b61089073ffffffffffffffffffffffffffffffffffffffff85167f000000000000000000000000000000000000000000000000000000000000000084610a71565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b6108f67f000000000000000000000000000000000000000000000000000000000000000084610efa565b888888886040518663ffffffff1660e01b81526004016109199493929190610f84565b600060405180830381600088803b15801561093357600080fd5b5087f193505050508015610945575060015b610a27575a90507f000000000000000000000000000000000000000000000000000000000000000081116109a5576040517f60ee124700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109c673ffffffffffffffffffffffffffffffffffffffff8516848461075f565b6040805173ffffffffffffffffffffffffffffffffffffffff80871682528516602082015290810183905242606082015286907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610a6973ffffffffffffffffffffffffffffffffffffffff85167f00000000000000000000000000000000000000000000000000000000000000006000610a71565b505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166107a457633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610ad857600080fd5b50565b600080600060608486031215610af057600080fd5b8335610afb81610ab6565b92506020840135610b0b81610ab6565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610b6e57610b6e610b1c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610bbb57610bbb610b1c565b604052919050565b600067ffffffffffffffff821115610bdd57610bdd610b1c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008060008060808587031215610c1f57600080fd5b8435610c2a81610ab6565b9350602085013592506040850135610c4181610ab6565b9150606085013567ffffffffffffffff811115610c5d57600080fd5b8501601f81018713610c6e57600080fd5b8035610c81610c7c82610bc3565b610b74565b818152886020838501011115610c9657600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600060208284031215610cca57600080fd5b8135610cd581610ab6565b9392505050565b8051610ce781610ab6565b919050565b60005b83811015610d07578181015183820152602001610cef565b50506000910152565b600082601f830112610d2157600080fd5b8151610d2f610c7c82610bc3565b818152846020838601011115610d4457600080fd5b610d55826020830160208701610cec565b949350505050565b80518015158114610ce757600080fd5b600080600060608486031215610d8257600080fd5b8351925060208085015167ffffffffffffffff80821115610da257600080fd5b818701915087601f830112610db657600080fd5b815181811115610dc857610dc8610b1c565b8060051b610dd7858201610b74565b918252838101850191858101908b841115610df157600080fd5b86860192505b83831015610edb57825185811115610e0e57600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610e4257600080fd5b610e4a610b4b565b610e55898301610cdc565b8152610e6360408301610cdc565b89820152610e7360608301610cdc565b6040820152610e8460808301610cdc565b606082015260a0820151608082015260c082015187811115610ea65760008081fd5b610eb48f8b83860101610d10565b60a083015250610ec660e08301610d5d565b60c08201528352509186019190860190610df7565b80985050505050505050610ef160408501610cdc565b90509250925092565b81810381811115610f34577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b60008151808452610f52816020860160208601610cec565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b8381101561106f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061104382870182610f3a565b91505060c080830151925061105b8187018415159052565b509587019593505090850190600101610fb2565b505073ffffffffffffffffffffffffffffffffffffffff8a166040890152955061109a945050505050565b73ffffffffffffffffffffffffffffffffffffffff831660608301529594505050505056fea264697066735822122027783c55e19b39aa68101b3ac01145b2b84a0fb88ad5a1926432e70a0963f34764736f6c63430008110033";

type ReceiverAcrossV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverAcrossV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiverAcrossV3__factory extends ContractFactory {
  constructor(...args: ReceiverAcrossV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _spokepool: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReceiverAcrossV3> {
    return super.deploy(
      _owner,
      _executor,
      _spokepool,
      _recoverGas,
      overrides || {}
    ) as Promise<ReceiverAcrossV3>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _spokepool: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _executor,
      _spokepool,
      _recoverGas,
      overrides || {}
    );
  }
  override attach(address: string): ReceiverAcrossV3 {
    return super.attach(address) as ReceiverAcrossV3;
  }
  override connect(signer: Signer): ReceiverAcrossV3__factory {
    return super.connect(signer) as ReceiverAcrossV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverAcrossV3Interface {
    return new utils.Interface(_abi) as ReceiverAcrossV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReceiverAcrossV3 {
    return new Contract(address, _abi, signerOrProvider) as ReceiverAcrossV3;
  }
}
