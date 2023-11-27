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
import type { Receiver, ReceiverInterface } from "../Receiver";

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
        name: "_sgRouter",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amarokRouter",
        type: "address",
        internalType: "address",
      },
      {
        name: "_executor",
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
    name: "amarokRouter",
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
    name: "sgReceive",
    inputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_token",
        type: "address",
        internalType: "address",
      },
      {
        name: "_amountLD",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_payload",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sgRouter",
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
    name: "swapAndCompleteBridgeTokens",
    inputs: [
      {
        name: "_transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
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
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
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
    ],
    outputs: [],
    stateMutability: "payable",
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
    type: "function",
    name: "xReceive",
    inputs: [
      {
        name: "_transferId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_asset",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_callData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AmarokRouterSet",
    inputs: [
      {
        name: "router",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExecutorSet",
    inputs: [
      {
        name: "executor",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
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
    type: "event",
    name: "RecoverGasSet",
    inputs: [
      {
        name: "recoverGas",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StargateRouterSet",
    inputs: [
      {
        name: "router",
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
    name: "InsufficientBalance",
    inputs: [
      {
        name: "required",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balance",
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
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NotPendingOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyError",
    inputs: [],
  },
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027a4380380620027a4833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b6125f980620001ab6000396000f3fe6080604052600436106100d65760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610236578063e30c397814610263578063f2fde38b14610290578063fd614f41146102b057600080fd5b80638da5cb5b146101c5578063ab8236f3146101f2578063bcf225e61461021257600080fd5b80634f91bc2b116100b05780634f91bc2b146101705780637200b829146101835780637aacd8f81461019857600080fd5b80630517cb76146100e257806323452b9c146101395780632e1445791461015057600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b5060025461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014557600080fd5b5061014e6102d0565b005b34801561015c57600080fd5b5061014e61016b366004611c3e565b61039a565b61014e61017e366004611dff565b6104cc565b34801561018f57600080fd5b5061014e610638565b3480156101a457600080fd5b5060055461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d157600080fd5b5060005461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fe57600080fd5b5061014e61020d366004611f91565b61071e565b34801561021e57600080fd5b5061022860045481565b604051908152602001610130565b34801561024257600080fd5b5060035461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026f57600080fd5b5060015461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029c57600080fd5b5061014e6102ab366004612035565b610869565b3480156102bc57600080fd5b5061014e6102cb366004612059565b6109c7565b60005473ffffffffffffffffffffffffffffffffffffffff163314610321576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610370576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103eb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104a65760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610460576040519150601f19603f3d011682016040523d82523d6000602084013e610465565b606091505b50509050806104a0576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6104c773ffffffffffffffffffffffffffffffffffffffff84168383610adf565b505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610547576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661057a5761057585858585346000610bb3565b61062e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156105ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061191906120dc565b905061061d8482611034565b61062c86868686856000610bb3565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461068a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610799576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff1633146107ee576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060008480602001905181019061080791906122bb565b925092509250600061081983886111af565b90506108588482600084511161082f578a61084f565b8360008151811061084257610842612316565b6020026020010151604001515b858b6001610bb3565b505060009092555050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108ba576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610907576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610956576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a42576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610a97576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610aae9190612345565b915091506000610abe838a6111af565b9050610acf8a828a858d6000610bb3565b5050600090915550505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611400565b600081610bc1576000610bc5565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610e795760005a9050828015610bf357508181105b15610cfa5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610c52576040519150601f19603f3d011682016040523d82523d6000602084013e610c57565b606091505b5050905080610c92576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250505061102c565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610d2385856123c6565b908b8b8b8b6040518763ffffffff1660e01b8152600401610d479493929190612429565b6000604051808303818589803b158015610d6057600080fd5b5088f19450505050508015610d73575060015b610e735760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610dd1576040519150601f19603f3d011682016040523d82523d6000602084013e610dd6565b606091505b5050905080610e11576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b5061102a565b60005a6003549091508690610ea99073ffffffffffffffffffffffffffffffffffffffff8084169116600061150f565b838015610eb557508282105b15610edb57610c9273ffffffffffffffffffffffffffffffffffffffff82168787610adf565b600354610f029073ffffffffffffffffffffffffffffffffffffffff838116911687611691565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610f2a85856123c6565b8b8b8b8b6040518663ffffffff1660e01b8152600401610f4d9493929190612429565b600060405180830381600088803b158015610f6757600080fd5b5087f193505050508015610f79575060015b610fff57610f9e73ffffffffffffffffffffffffffffffffffffffff82168787610adf565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b6003546110279073ffffffffffffffffffffffffffffffffffffffff8381169116600061150f565b50505b505b505050505050565b8060000361106e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c757803410156110c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611134573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115891906120dc565b9050818110156111a3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104c78333308561178a565b6060825167ffffffffffffffff8111156111cb576111cb611c7f565b60405190808252806020026020018201604052801561124f57816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816111e95790505b5090506040518060e001604052808460008151811061127057611270612316565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168152602001846000815181106112aa576112aa612316565b60200260200101516020015173ffffffffffffffffffffffffffffffffffffffff168152602001846000815181106112e4576112e4612316565b60200260200101516040015173ffffffffffffffffffffffffffffffffffffffff1681526020018460008151811061131e5761131e612316565b60200260200101516060015173ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018460008151811061135e5761135e612316565b602002602001015160a0015181526020018460008151811061138257611382612316565b602002602001015160c001511515815250816000815181106113a6576113a6612316565b602090810291909101015260015b83518110156113f9578381815181106113cf576113cf612316565b60200260200101518282815181106113e9576113e9612316565b60200260200101819052506113b4565b5092915050565b6000611462826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661199c9092919063ffffffff16565b90508051600014806114835750808060200190518101906114839190612564565b6104c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161119a565b8015806115af57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ad91906120dc565b155b61163b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161119a565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610b31565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611707573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172b91906120dc565b90506104a0847f095ea7b3000000000000000000000000000000000000000000000000000000008561175d8686612581565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610b31565b73ffffffffffffffffffffffffffffffffffffffff84166117d7576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611824576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b991906120dc565b90506118c7828686866119b3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195b91906120dc565b61196591906123c6565b1461102c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606119ab8484600085611a11565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104a09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610b31565b606082471015611aa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161119a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611acc9190612594565b60006040518083038185875af1925050503d8060008114611b09576040519150601f19603f3d011682016040523d82523d6000602084013e611b0e565b606091505b5091509150611b1f87838387611b2a565b979650505050505050565b60608315611bc0578251600003611bb95773ffffffffffffffffffffffffffffffffffffffff85163b611bb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161119a565b50816119ab565b6119ab8383815115611bd55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119a91906125b0565b73ffffffffffffffffffffffffffffffffffffffff81168114611c2b57600080fd5b50565b8035611c3981611c09565b919050565b600080600060608486031215611c5357600080fd5b8335611c5e81611c09565b92506020840135611c6e81611c09565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611cd157611cd1611c7f565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d1e57611d1e611c7f565b604052919050565b600067ffffffffffffffff821115611d4057611d40611c7f565b5060051b60200190565b600067ffffffffffffffff821115611d6457611d64611c7f565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611da157600080fd5b8135611db4611daf82611d4a565b611cd7565b818152846020838601011115611dc957600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611c2b57600080fd5b8035611c3981611de6565b60008060008060808587031215611e1557600080fd5b84359350602085013567ffffffffffffffff80821115611e3457600080fd5b818701915087601f830112611e4857600080fd5b8135611e56611daf82611d26565b8082825260208201915060208360051b86010192508a831115611e7857600080fd5b602085015b83811015611f63578481351115611e9357600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611ec957600080fd5b611ed1611cae565b611edd60208301611c2e565b8152611eeb60408301611c2e565b6020820152611efc60608301611c2e565b6040820152611f0d60808301611c2e565b606082015260a0820135608082015260c082013587811115611f2e57600080fd5b611f3d8f602083860101611d90565b60a083015250611f4f60e08301611df4565b60c082015284525060209283019201611e7d565b508097505050505050611f7860408601611c2e565b9150611f8660608601611c2e565b905092959194509250565b60008060008060008060c08789031215611faa57600080fd5b863561ffff81168114611fbc57600080fd5b9550602087013567ffffffffffffffff80821115611fd957600080fd5b611fe58a838b01611d90565b96506040890135955060608901359150611ffe82611c09565b9093506080880135925060a0880135908082111561201b57600080fd5b5061202889828a01611d90565b9150509295509295509295565b60006020828403121561204757600080fd5b813561205281611c09565b9392505050565b60008060008060008060c0878903121561207257600080fd5b8635955060208701359450604087013561208b81611c09565b9350606087013561209b81611c09565b9250608087013563ffffffff811681146120b457600080fd5b915060a087013567ffffffffffffffff8111156120d057600080fd5b61202889828a01611d90565b6000602082840312156120ee57600080fd5b5051919050565b8051611c3981611c09565b60005b8381101561211b578181015183820152602001612103565b50506000910152565b600082601f83011261213557600080fd5b8151612143611daf82611d4a565b81815284602083860101111561215857600080fd5b6119ab826020830160208701612100565b8051611c3981611de6565b600082601f83011261218557600080fd5b81516020612195611daf83611d26565b82815260059290921b840181019181810190868411156121b457600080fd5b8286015b848110156122b057805167ffffffffffffffff808211156121d95760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156122125760008081fd5b61221a611cae565b6122258885016120f5565b815260406122348186016120f5565b8983015260606122458187016120f5565b82840152608091506122588287016120f5565b818401525060a0808601518284015260c09150818601518581111561227d5760008081fd5b61228b8f8c838a0101612124565b82850152505061229c838601612169565b9082015286525050509183019183016121b8565b509695505050505050565b6000806000606084860312156122d057600080fd5b83519250602084015167ffffffffffffffff8111156122ee57600080fd5b6122fa86828701612174565b925050604084015161230b81611c09565b809150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000806040838503121561235857600080fd5b825167ffffffffffffffff81111561236f57600080fd5b61237b85828601612174565b925050602083015161238c81611c09565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156123d9576123d9612397565b92915050565b600081518084526123f7816020860160208601612100565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015612514577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e0898601819052906124e8828701826123df565b91505060c08083015192506125008187018415159052565b509587019593505090850190600101612457565b505073ffffffffffffffffffffffffffffffffffffffff8a166040890152955061253f945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b60006020828403121561257657600080fd5b815161205281611de6565b808201808211156123d9576123d9612397565b600082516125a6818460208701612100565b9190910192915050565b60208152600061205260208301846123df56fea26469706673582212207561f8a81041398bc5e521535452a5a341085edbad3fa73f631876a9d979eac564736f6c63430008110033";

type ReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Receiver__factory extends ContractFactory {
  constructor(...args: ReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _sgRouter: PromiseOrValue<string>,
    _amarokRouter: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Receiver> {
    return super.deploy(
      _owner,
      _sgRouter,
      _amarokRouter,
      _executor,
      _recoverGas,
      overrides || {}
    ) as Promise<Receiver>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _sgRouter: PromiseOrValue<string>,
    _amarokRouter: PromiseOrValue<string>,
    _executor: PromiseOrValue<string>,
    _recoverGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _sgRouter,
      _amarokRouter,
      _executor,
      _recoverGas,
      overrides || {}
    );
  }
  override attach(address: string): Receiver {
    return super.attach(address) as Receiver;
  }
  override connect(signer: Signer): Receiver__factory {
    return super.connect(signer) as Receiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverInterface {
    return new utils.Interface(_abi) as ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Receiver {
    return new Contract(address, _abi, signerOrProvider) as Receiver;
  }
}
