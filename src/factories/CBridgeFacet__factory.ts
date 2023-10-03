/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacet, CBridgeFacetInterface } from "../CBridgeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICBridge",
        name: "_cBridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotBridgeToSameNetwork",
    type: "error",
  },
  {
    inputs: [],
    name: "ContractCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "CumulativeSlippageTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "ExternalCallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "InformationMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContract",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReceiver",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapDataProvided",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapFromZeroBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "UnAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CBridgeRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referrer",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
    ],
    name: "LiFiGenericSwapCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referrer",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
    ],
    name: "LiFiSwappedGeneric",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferRecovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct ILiFi.BridgeData",
        name: "bridgeData",
        type: "tuple",
      },
    ],
    name: "LiFiTransferStarted",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaCBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "requiresDeposit",
            type: "bool",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "maxSlippage",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct CBridgeFacet.CBridgeData",
        name: "_cBridgeData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaCBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_callTo",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "triggerRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002d5c38038062002d5c833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612cb4620000a86000396000818160e00152818161095101528181610a500152610a7b0152612cb46000f3fe6080604052600436106100345760003560e01c80630d19e51914610039578063482c6a851461005b578063ae0b91e51461006e575b600080fd5b34801561004557600080fd5b506100596100543660046123eb565b610081565b005b6100596100693660046126f6565b610298565b61005961007c3660046127a2565b6104ca565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100c7576100c76106ee565b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461014c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516101759291906127f1565b6000604051808303816000865af19150503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b505080915050806101f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610218578361021a565b335b905061022785828561078e565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f8560405161028691815260200190565b60405180910390a35050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610313576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103243447612830565b905086806101000151610363576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103a1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103c48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103fb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610439576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610476576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b8a600001518b60c001518b8b336107c4565b60c08b015261049a8a8861090c565b5047915050818111156104bc576104bc6000846104b78585612830565b61078e565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610545576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105563447612830565b90508480610100015115610596576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156105d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866105f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561062e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361066c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106a9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106bb88608001518960c00151610bd6565b6106c5888861090c565b5047915050818111156106e2576106e26000846104b78585612830565b50506000909155505050565b600080357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff90911615151461078b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8316156107ba576107b5838383610d4c565b505050565b6107b58282610ece565b600082808203610800576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080f600185612830565b81811061081e5761081e612843565b90506020028101906108309190612872565b6108419060808101906060016128b0565b9050600061084e82610ff8565b905073ffffffffffffffffffffffffffffffffffffffff8216610878576108753482612830565b90505b600061088488886110b1565b905061089088886111bd565b61089d8a8989898561122a565b6000826108a985610ff8565b6108b39190612830565b9050898110156108fe576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610a465760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692633f2e5fc3929091829061098c60408801602089016128cd565b61099960208901896128f7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9095166004860152602485019390935267ffffffffffffffff918216604485015216606483015263ffffffff16608482015260a4016000604051808303818588803b158015610a2857600080fd5b505af1158015610a3c573d6000803e3d6000fd5b5050505050610b9b565b610a7982608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516115dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a5977fbb8360a0015184608001518560c001518660e00151866020016020810190610adc91906128cd565b610ae960208901896128f7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff9687166004820152959094166024860152604485019290925267ffffffffffffffff908116606485015216608483015263ffffffff1660a482015260c401600060405180830381600087803b158015610b8257600080fd5b505af1158015610b96573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bca919061298b565b60405180910390a15050565b80600003610c10576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c695780341015610c65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610cd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfa9190612a9e565b905081811015610d40576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b6107b58333308561171f565b73ffffffffffffffffffffffffffffffffffffffff8316610d99576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610de6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e779190612a9e565b905080821115610ebd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016108f5565b610ec8848484611939565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f1b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f5e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016108f5565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610fb8576040519150601f19603f3d011682016040523d82523d6000602084013e610fbd565b606091505b50509050806107b5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156110a9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a49190612a9e565b6110ab565b475b92915050565b60608160008167ffffffffffffffff8111156110cf576110cf61249c565b6040519080825280602002602001820160405280156110f8578160200160208202803683370190505b5090506000805b838110156111b25786868281811061111957611119612843565b905060200281019061112b9190612872565b61113c9060808101906060016128b0565b915061114782610ff8565b83828151811061115957611159612843565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111aa573483828151811061119257611192612843565b602002602001018181516111a69190612830565b9052505b6001016110ff565b509095945050505050565b60005b818110156107b557368383838181106111db576111db612843565b90506020028101906111ed9190612872565b90506111ff60e0820160c08301612ab7565b156112215761122161121760608301604084016128b0565b8260800135610bd6565b506001016111c0565b8383838382600181146114f75760008585611246600185612830565b81811061125557611255612843565b90506020028101906112679190612872565b6112789060808101906060016128b0565b9050600089815b8181101561142357368d8d8381811061129a5761129a612843565b90506020028101906112ac9190612872565b90506112db6112c160608301604084016128b0565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061133e575061133e6112f460408301602084016128b0565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561135557506113556112f460208301836128b0565b80156113da57506113da61136c60a0830183612ad4565b61137b91600491600091612b40565b61138491612b6a565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611410576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61141a8f82611a0d565b5060010161127f565b505060005b611433600185612830565b8110156114ef57600088888381811061144e5761144e612843565b90506020028101906114609190612872565b6114719060808101906060016128b0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114e6578582815181106114b8576114b8612843565b60200260200101516114c982610ff8565b6114d39190612830565b925082156114e6576114e681888561078e565b50600101611428565b5050506115d0565b8760005b818110156115cd57368b8b8381811061151657611516612843565b90506020028101906115289190612872565b905061153d6112c160608301604084016128b0565b8061155657506115566112f460408301602084016128b0565b801561156d575061156d6112f460208301836128b0565b8015611584575061158461136c60a0830183612ad4565b6115ba576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115c48d82611a0d565b506001016114fb565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115fc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611649576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e29190612a9e565b10156107b5576116f483836000611d23565b6107b583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d23565b73ffffffffffffffffffffffffffffffffffffffff841661176c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117b9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561182a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184e9190612a9e565b905061185c82868686611ea5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f09190612a9e565b6118fa9190612830565b14611931576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611f03565b611a23611a1d60208301836128b0565b3b151590565b611a59576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a99576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611aae6112c160608501604086016128b0565b611ab9576000611abf565b82608001355b90506000611adb611ad660608601604087016128b0565b610ff8565b90506000611af2611ad660808701606088016128b0565b905082600003611b2957611b29611b0f60608701604088016128b0565b611b1f60408801602089016128b0565b87608001356115dc565b8460800135821015611b74576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016108f5565b600080611b8460208801886128b0565b73ffffffffffffffffffffffffffffffffffffffff1685611ba860a08a018a612ad4565b604051611bb69291906127f1565b60006040518083038185875af1925050503d8060008114611bf3576040519150601f19603f3d011682016040523d82523d6000602084013e611bf8565b606091505b509150915081611c43576000611c0d82612012565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f59190612bb2565b6000611c58611ad660808a0160608b016128b0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c8960208b018b6128b0565b611c9960608c0160408d016128b0565b611ca960808d0160608e016128b0565b8c60800135898711611cbb5786611cc5565b611cc58a88612830565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611dc357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611d9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dc19190612a9e565b155b611e4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016108f5565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b59084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161198b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ec89085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161198b565b6000611f65826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120909092919063ffffffff16565b9050805160001480611f86575080806020019051810190611f869190612bc5565b6107b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016108f5565b606060448251101561205757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000612073600480855161206b9190612830565b8591906120a7565b9050808060200190518101906120899190612be2565b9392505050565b606061209f84846000856121c1565b949350505050565b6060816120b581601f612c59565b10156120ed576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6120f78284612c59565b84511015612131576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561215057604051915060008252602082016040526121b8565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612189578051835260209283019201612171565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015612253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016108f5565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161227c9190612c6c565b60006040518083038185875af1925050503d80600081146122b9576040519150601f19603f3d011682016040523d82523d6000602084013e6122be565b606091505b50915091506122cf878383876122da565b979650505050505050565b606083156123705782516000036123695773ffffffffffffffffffffffffffffffffffffffff85163b612369576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016108f5565b508161209f565b61209f83838151156123855781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f59190612bb2565b73ffffffffffffffffffffffffffffffffffffffff8116811461078b57600080fd5b80356123e6816123b9565b919050565b60008060008060008060a0878903121561240457600080fd5b863561240f816123b9565b9550602087013567ffffffffffffffff8082111561242c57600080fd5b818901915089601f83011261244057600080fd5b81358181111561244f57600080fd5b8a602082850101111561246157600080fd5b602083019750809650505050604087013561247b816123b9565b9250612489606088016123db565b9150608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156124ef576124ef61249c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561253c5761253c61249c565b604052919050565b600067ffffffffffffffff82111561255e5761255e61249c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261259b57600080fd5b81356125ae6125a982612544565b6124f5565b8181528460208386010111156125c357600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461078b57600080fd5b80356123e6816125e0565b6000610140828403121561260c57600080fd5b6126146124cb565b905081358152602082013567ffffffffffffffff8082111561263557600080fd5b6126418583860161258a565b6020840152604084013591508082111561265a57600080fd5b506126678482850161258a565b604083015250612679606083016123db565b606082015261268a608083016123db565b608082015261269b60a083016123db565b60a082015260c082013560c082015260e082013560e08201526101006126c28184016125ee565b908201526101206126d48382016125ee565b9082015292915050565b6000604082840312156126f057600080fd5b50919050565b6000806000806080858703121561270c57600080fd5b843567ffffffffffffffff8082111561272457600080fd5b612730888389016125f9565b9550602087013591508082111561274657600080fd5b818701915087601f83011261275a57600080fd5b81358181111561276957600080fd5b8860208260051b850101111561277e57600080fd5b60208301955080945050505061279786604087016126de565b905092959194509250565b600080606083850312156127b557600080fd5b823567ffffffffffffffff8111156127cc57600080fd5b6127d8858286016125f9565b9250506127e884602085016126de565b90509250929050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156110ab576110ab612801565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126128a657600080fd5b9190910192915050565b6000602082840312156128c257600080fd5b8135612089816123b9565b6000602082840312156128df57600080fd5b813567ffffffffffffffff8116811461208957600080fd5b60006020828403121561290957600080fd5b813563ffffffff8116811461208957600080fd5b60005b83811015612938578181015183820152602001612920565b50506000910152565b6000815180845261295981602086016020860161291d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526129b4610160850183612941565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526129ef8382612941565b9250506060850151612a19608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612a8c8187018315159052565b90950151151593019290925250919050565b600060208284031215612ab057600080fd5b5051919050565b600060208284031215612ac957600080fd5b8135612089816125e0565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612b0957600080fd5b83018035915067ffffffffffffffff821115612b2457600080fd5b602001915036819003821315612b3957600080fd5b9250929050565b60008085851115612b5057600080fd5b83861115612b5d57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612baa5780818660040360031b1b83161692505b505092915050565b6020815260006120896020830184612941565b600060208284031215612bd757600080fd5b8151612089816125e0565b600060208284031215612bf457600080fd5b815167ffffffffffffffff811115612c0b57600080fd5b8201601f81018413612c1c57600080fd5b8051612c2a6125a982612544565b818152856020838501011115612c3f57600080fd5b612c5082602083016020860161291d565b95945050505050565b808201808211156110ab576110ab612801565b600082516128a681846020870161291d56fea2646970667358221220d9db037d4eb4f083eb5e48e83d257596ef0b970370ec68a2673165ce7ea98e2e64736f6c63430008110033";

type CBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CBridgeFacet__factory extends ContractFactory {
  constructor(...args: CBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _cBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CBridgeFacet> {
    return super.deploy(_cBridge, overrides || {}) as Promise<CBridgeFacet>;
  }
  override getDeployTransaction(
    _cBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_cBridge, overrides || {});
  }
  override attach(address: string): CBridgeFacet {
    return super.attach(address) as CBridgeFacet;
  }
  override connect(signer: Signer): CBridgeFacet__factory {
    return super.connect(signer) as CBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CBridgeFacetInterface {
    return new utils.Interface(_abi) as CBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as CBridgeFacet;
  }
}
