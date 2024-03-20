/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HyphenFacet, HyphenFacetInterface } from "../HyphenFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_router",
        type: "address",
        internalType: "contract IHyphenRouter",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startBridgeTokensViaHyphen",
    inputs: [
      {
        name: "_bridgeData",
        type: "tuple",
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
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapAndStartBridgeTokensViaHyphen",
    inputs: [
      {
        name: "_bridgeData",
        type: "tuple",
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
    ],
    outputs: [],
    stateMutability: "payable",
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
    type: "error",
    name: "CannotBridgeToSameNetwork",
    inputs: [],
  },
  {
    type: "error",
    name: "ContractCallNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "CumulativeSlippageTooHigh",
    inputs: [
      {
        name: "minAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receivedAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InformationMismatch",
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
    name: "InvalidContract",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSwapDataProvided",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSwapFromZeroBalance",
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
  {
    type: "error",
    name: "ReentrancyError",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOverflow",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200293138038062002931833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161288f620000a260003960008181610652015281816106cc0152610786015261288f6000f3fe6080604052600436106100295760003560e01c80638bf6ef991461002e5780639feb673114610043575b600080fd5b61004161003c366004612277565b610056565b005b6100416100513660046122ac565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612375565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d8585612375565b610828565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447612375565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610859565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d8585612375565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc9190612388565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106238333308561099c565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff161561073a5761067b81608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610bb6565b60e0810151608082015160a083015160c08401516040517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016946355d735959461070394919390926004016123a1565b600060405180830381600087803b15801561071d57600080fd5b505af1158015610731573d6000803e3d6000fd5b505050506107ee565b60c081015160a082015160e08301516040517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363ea3684219390926107bb9260040161241a565b6000604051808303818588803b1580156107d457600080fd5b505af11580156107e8573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161081d91906124e7565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561084f57610623838383610cf9565b6106238282610e7b565b600082808203610895576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108a4600185612375565b8181106108b3576108b36125fa565b90506020028101906108c59190612629565b6108d6906080810190606001612667565b905060006108e382610fa5565b905073ffffffffffffffffffffffffffffffffffffffff821661090d5761090a3482612375565b90505b6000610919888861105e565b9050610925888861116a565b6109328a898989856111d7565b60008261093e85610fa5565b6109489190612375565b90508981101561098e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109e9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a36576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610aa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acb9190612388565b9050610ad982868686611589565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6d9190612388565b610b779190612375565b14610bae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bd657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c23576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc9190612388565b101561062357610cce83836000611665565b61062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611665565b73ffffffffffffffffffffffffffffffffffffffff8316610d46576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d93576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610e00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e249190612388565b905080821115610e6a576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610e758484846117e7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ec8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610f0b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f65576040519150601f19603f3d011682016040523d82523d6000602084013e610f6a565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611056576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561102d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110519190612388565b611058565b475b92915050565b60608160008167ffffffffffffffff81111561107c5761107c612009565b6040519080825280602002602001820160405280156110a5578160200160208202803683370190505b5090506000805b8381101561115f578686828181106110c6576110c66125fa565b90506020028101906110d89190612629565b6110e9906080810190606001612667565b91506110f482610fa5565b838281518110611106576111066125fa565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611157573483828151811061113f5761113f6125fa565b602002602001018181516111539190612375565b9052505b6001016110ac565b509095945050505050565b60005b818110156106235736838383818110611188576111886125fa565b905060200281019061119a9190612629565b90506111ac60e0820160c08301612682565b156111ce576111ce6111c46060830160408401612667565b82608001356104a8565b5060010161116d565b8383838382600181146114a457600085856111f3600185612375565b818110611202576112026125fa565b90506020028101906112149190612629565b611225906080810190606001612667565b9050600089815b818110156113d057368d8d83818110611247576112476125fa565b90506020028101906112599190612629565b905061128861126e6060830160408401612667565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112eb57506112eb6112a16040830160208401612667565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561130257506113026112a16020830183612667565b8015611387575061138761131960a083018361269f565b6113289160049160009161270b565b61133191612735565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113bd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113c78f8261183d565b5060010161122c565b505060005b6113e0600185612375565b81101561149c5760008888838181106113fb576113fb6125fa565b905060200281019061140d9190612629565b61141e906080810190606001612667565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461149357858281518110611465576114656125fa565b602002602001015161147682610fa5565b6114809190612375565b9250821561149357611493818885610828565b506001016113d5565b50505061157d565b8760005b8181101561157a57368b8b838181106114c3576114c36125fa565b90506020028101906114d59190612629565b90506114ea61126e6060830160408401612667565b8061150357506115036112a16040830160208401612667565b801561151a575061151a6112a16020830183612667565b8015611531575061153161131960a083018361269f565b611567576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115718d8261183d565b506001016114a8565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e759085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b53565b80158061170557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117039190612388565b155b611791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161060e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e3565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115e3565b61185361184d6020830183612667565b3b151590565b611889576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036118c9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118de61126e6060850160408601612667565b6118e95760006118ef565b82608001355b9050600061190b6119066060860160408701612667565b610fa5565b905060006119226119066080870160608801612667565b9050826000036119595761195961193f6060870160408801612667565b61194f6040880160208901612667565b8760800135610bb6565b84608001358210156119a4576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b6000806119b46020880188612667565b73ffffffffffffffffffffffffffffffffffffffff16856119d860a08a018a61269f565b6040516119e692919061277d565b60006040518083038185875af1925050503d8060008114611a23576040519150601f19603f3d011682016040523d82523d6000602084013e611a28565b606091505b509150915081611a73576000611a3d82611c62565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e919061278d565b6000611a8861190660808a0160608b01612667565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ab960208b018b612667565b611ac960608c0160408d01612667565b611ad960808d0160608e01612667565b8c60800135898711611aeb5786611af5565b611af58a88612375565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611bb5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ce09092919063ffffffff16565b9050805160001480611bd6575080806020019051810190611bd691906127a0565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b6060604482511015611ca757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611cc36004808551611cbb9190612375565b859190611cf7565b905080806020019051810190611cd991906127bd565b9392505050565b6060611cef8484600085611e11565b949350505050565b606081611d0581601f612834565b1015611d3d576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d478284612834565b84511015611d81576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611da05760405191506000825260208201604052611e08565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dd9578051835260209283019201611dc1565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611ea3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ecc9190612847565b60006040518083038185875af1925050503d8060008114611f09576040519150601f19603f3d011682016040523d82523d6000602084013e611f0e565b606091505b5091509150611f1f87838387611f2a565b979650505050505050565b60608315611fc0578251600003611fb95773ffffffffffffffffffffffffffffffffffffffff85163b611fb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611cef565b611cef8383815115611fd55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e919061278d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561205c5761205c612009565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120a9576120a9612009565b604052919050565b600067ffffffffffffffff8211156120cb576120cb612009565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261210857600080fd5b813561211b612116826120b1565b612062565b81815284602083860101111561213057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217157600080fd5b919050565b801515811461218457600080fd5b50565b803561217181612176565b600061014082840312156121a557600080fd5b6121ad612038565b905081358152602082013567ffffffffffffffff808211156121ce57600080fd5b6121da858386016120f7565b602084015260408401359150808211156121f357600080fd5b50612200848285016120f7565b6040830152506122126060830161214d565b60608201526122236080830161214d565b608082015261223460a0830161214d565b60a082015260c082013560c082015260e082013560e082015261010061225b818401612187565b9082015261012061226d838201612187565b9082015292915050565b60006020828403121561228957600080fd5b813567ffffffffffffffff8111156122a057600080fd5b611cef84828501612192565b6000806000604084860312156122c157600080fd5b833567ffffffffffffffff808211156122d957600080fd5b6122e587838801612192565b945060208601359150808211156122fb57600080fd5b818601915086601f83011261230f57600080fd5b81358181111561231e57600080fd5b8760208260051b850101111561233357600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561105857611058612346565b60006020828403121561239a57600080fd5b5051919050565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a0608083015261241060a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611cef60608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60005b8381101561249457818101518382015260200161247c565b50506000910152565b600081518084526124b5816020860160208601612479565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261251061016085018361249d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261254b838261249d565b9250506060850151612575608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e88187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261265d57600080fd5b9190910192915050565b60006020828403121561267957600080fd5b611cd98261214d565b60006020828403121561269457600080fd5b8135611cd981612176565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126d457600080fd5b83018035915067ffffffffffffffff8211156126ef57600080fd5b60200191503681900382131561270457600080fd5b9250929050565b6000808585111561271b57600080fd5b8386111561272857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127755780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611cd9602083018461249d565b6000602082840312156127b257600080fd5b8151611cd981612176565b6000602082840312156127cf57600080fd5b815167ffffffffffffffff8111156127e657600080fd5b8201601f810184136127f757600080fd5b8051612805612116826120b1565b81815285602083850101111561281a57600080fd5b61282b826020830160208601612479565b95945050505050565b8082018082111561105857611058612346565b6000825161265d81846020870161247956fea264697066735822122050ef564a49dc00ad7af061151b7afd3b826b60dd142dab39e6fa1eca866caace64736f6c63430008110033";

type HyphenFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HyphenFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HyphenFacet__factory extends ContractFactory {
  constructor(...args: HyphenFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HyphenFacet> {
    return super.deploy(_router, overrides || {}) as Promise<HyphenFacet>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override attach(address: string): HyphenFacet {
    return super.attach(address) as HyphenFacet;
  }
  override connect(signer: Signer): HyphenFacet__factory {
    return super.connect(signer) as HyphenFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HyphenFacetInterface {
    return new utils.Interface(_abi) as HyphenFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HyphenFacet {
    return new Contract(address, _abi, signerOrProvider) as HyphenFacet;
  }
}
