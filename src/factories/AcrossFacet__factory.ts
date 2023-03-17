/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAcrossSpokePool",
        name: "_spokePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedNative",
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
    name: "QuoteTimeout",
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
            internalType: "uint64",
            name: "relayerFeePct",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "quoteTimestamp",
            type: "uint32",
          },
        ],
        internalType: "struct AcrossFacet.AcrossData",
        name: "_acrossData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaAcross",
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
            internalType: "uint64",
            name: "relayerFeePct",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "quoteTimestamp",
            type: "uint32",
          },
        ],
        internalType: "struct AcrossFacet.AcrossData",
        name: "_acrossData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaAcross",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200294938038062002949833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612878620000d1600039600061065401526000818161068201526106ad01526128786000f3fe6080604052600436106100295760003560e01c80634eefe3a51461002e578063ba66bd9a14610043575b600080fd5b61004161003c36600461223f565b610056565b005b6100416100513660046122eb565b61029b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612392565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104e5565b60c08b01526102588a8861062d565b504791506000905082821161026e576000610278565b6102788383612392565b9050801561028c5761028c600085836107fd565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610316576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103273447612392565b90508461034c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610383576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103c1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103fe576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561043c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561047a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048c88608001518960c00151610833565b6104a48861049f368a90038a018a6123a5565b61062d565b50479150600090508282116104ba5760006104c4565b6104c48383612392565b905080156104d8576104d8600085836107fd565b5050600090925550505050565b600082808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610530600185612392565b81811061053f5761053f6123c1565b905060200281019061055191906123f0565b61056290608081019060600161242e565b9050600061056f826109a9565b905073ffffffffffffffffffffffffffffffffffffffff8216610599576105963482612392565b90505b60006105a58888610a62565b90506105b18888610b6e565b6105be8a89898985610bcf565b6000826105ca856109a9565b6105d49190612392565b90508981101561061f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff81161590811561067857507f00000000000000000000000000000000000000000000000000000000000000006106ab565b6106ab84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f81565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166349228978836106f35760006106f9565b8560c001515b60a087015160c088015160e0808a0151895160208b01516040519388901b7fffffffff0000000000000000000000000000000000000000000000000000000016845273ffffffffffffffffffffffffffffffffffffffff958616600485015294891660248401526044830193909352606482015267ffffffffffffffff909116608482015263ffffffff90911660a482015260c4016000604051808303818588803b1580156107a757600080fd5b505af11580156107bb573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107ef91906124b7565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610829576108248383836110cc565b505050565b61082482826111fb565b73ffffffffffffffffffffffffffffffffffffffff821661088c5780341015610888576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036108c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610933573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095791906125ca565b90508181101561099d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b61082483333085611325565b600073ffffffffffffffffffffffffffffffffffffffff821615610a5a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5591906125ca565b610a5c565b475b92915050565b60608160008167ffffffffffffffff811115610a8057610a80611f38565b604051908082528060200260200182016040528015610aa9578160200160208202803683370190505b5090506000805b83811015610b6357868682818110610aca57610aca6123c1565b9050602002810190610adc91906123f0565b610aed90608081019060600161242e565b9150610af8826109a9565b838281518110610b0a57610b0a6123c1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b5b5734838281518110610b4357610b436123c1565b60200260200101818151610b579190612392565b9052505b600101610ab0565b509095945050505050565b60005b81811015610824576000838383818110610b8d57610b8d6123c1565b9050602002810190610b9f91906123f0565b610ba8906125e3565b90508060c0015115610bc657610bc681604001518260800151610833565b50600101610b71565b838383838260018114610e9c5760008585610beb600185612392565b818110610bfa57610bfa6123c1565b9050602002810190610c0c91906123f0565b610c1d90608081019060600161242e565b9050600089815b81811015610dc857368d8d83818110610c3f57610c3f6123c1565b9050602002810190610c5191906123f0565b9050610c80610c66606083016040840161242e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ce35750610ce3610c99604083016020840161242e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cfa5750610cfa610c99602083018361242e565b8015610d7f5750610d7f610d1160a0830183612688565b610d20916004916000916126f4565b610d299161271e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610db5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dbf8f8261153f565b50600101610c24565b505060005b610dd8600185612392565b811015610e94576000888883818110610df357610df36123c1565b9050602002810190610e0591906123f0565b610e1690608081019060600161242e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e8b57858281518110610e5d57610e5d6123c1565b6020026020010151610e6e826109a9565b610e789190612392565b92508215610e8b57610e8b8188856107fd565b50600101610dcd565b505050610f75565b8760005b81811015610f7257368b8b83818110610ebb57610ebb6123c1565b9050602002810190610ecd91906123f0565b9050610ee2610c66606083016040840161242e565b80610efb5750610efb610c99604083016020840161242e565b8015610f125750610f12610c99602083018361242e565b8015610f295750610f29610d1160a0830183612688565b610f5f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f698d8261153f565b50600101610ea0565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fa157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108891906125ca565b9050818110156110c6576110c684846110c1847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612392565b611855565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611119576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111aa91906125ca565b9050808211156111f0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610616565b6110c68484846119d1565b73ffffffffffffffffffffffffffffffffffffffff8216611248576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561128b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610616565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112e5576040519150601f19603f3d011682016040523d82523d6000602084013e6112ea565b606091505b5050905080610824576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611372576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113bf576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611430573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145491906125ca565b905061146282868686611a27565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f691906125ca565b6115009190612392565b14611537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61155561154f602083018361242e565b3b151590565b61158b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115cb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115e0610c66606085016040860161242e565b6115eb5760006115f1565b82608001355b9050600061160d611608606086016040870161242e565b6109a9565b90506000611624611608608087016060880161242e565b90508260000361165b5761165b611641606087016040880161242e565b611651604088016020890161242e565b8760800135610f81565b84608001358210156116a6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610616565b6000806116b6602088018861242e565b73ffffffffffffffffffffffffffffffffffffffff16856116da60a08a018a612688565b6040516116e8929190612766565b60006040518083038185875af1925050503d8060008114611725576040519150601f19603f3d011682016040523d82523d6000602084013e61172a565b606091505b50915091508161177557600061173f82611a85565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612776565b600061178a61160860808a0160608b0161242e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117bb60208b018b61242e565b6117cb60608c0160408d0161242e565b6117db60808d0160608e0161242e565b8c608001358987116117ed57866117f7565b6117f78a88612392565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156118cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f091906125ca565b6118fa9190612789565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506110c69085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b03565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108249084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161194f565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110c69085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161194f565b6060604482511015611aca57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ae66004808551611ade9190612392565b859190611c0f565b905080806020019051810190611afc919061279c565b9392505050565b6000611b65826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d299092919063ffffffff16565b8051909150156108245780806020019051810190611b839190612813565b610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610616565b606081611c1d81601f612789565b1015611c55576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c5f8284612789565b84511015611c99576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cb85760405191506000825260208201604052611d20565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611cf1578051835260209283019201611cd9565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611d388484600085611d40565b949350505050565b606082471015611dd2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610616565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dfb9190612830565b60006040518083038185875af1925050503d8060008114611e38576040519150601f19603f3d011682016040523d82523d6000602084013e611e3d565b606091505b5091509150611e4e87838387611e59565b979650505050505050565b60608315611eef578251600003611ee85773ffffffffffffffffffffffffffffffffffffffff85163b611ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610616565b5081611d38565b611d388383815115611f045781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106169190612776565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f8b57611f8b611f38565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f8b57611f8b611f38565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611ffb57611ffb611f38565b604052919050565b600067ffffffffffffffff82111561201d5761201d611f38565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261205a57600080fd5b813561206d61206882612003565b611fb4565b81815284602083860101111561208257600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120c357600080fd5b919050565b80151581146120d657600080fd5b50565b80356120c3816120c8565b600061014082840312156120f757600080fd5b6120ff611f67565b905081358152602082013567ffffffffffffffff8082111561212057600080fd5b61212c85838601612049565b6020840152604084013591508082111561214557600080fd5b5061215284828501612049565b6040830152506121646060830161209f565b60608201526121756080830161209f565b608082015261218660a0830161209f565b60a082015260c082013560c082015260e082013560e08201526101006121ad8184016120d9565b908201526101206121bf8382016120d9565b9082015292915050565b6000604082840312156121db57600080fd5b6040516040810167ffffffffffffffff82821081831117156121ff576121ff611f38565b8160405282935084359150808216821461221857600080fd5b508152602083013563ffffffff8116811461223257600080fd5b6020919091015292915050565b6000806000806080858703121561225557600080fd5b843567ffffffffffffffff8082111561226d57600080fd5b612279888389016120e4565b9550602087013591508082111561228f57600080fd5b818701915087601f8301126122a357600080fd5b8135818111156122b257600080fd5b8860208260051b85010111156122c757600080fd5b6020830195508094505050506122e086604087016121c9565b905092959194509250565b60008082840360608112156122ff57600080fd5b833567ffffffffffffffff81111561231657600080fd5b612322868287016120e4565b93505060407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561235557600080fd5b506020830190509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a5c57610a5c612363565b6000604082840312156123b757600080fd5b611afc83836121c9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261242457600080fd5b9190910192915050565b60006020828403121561244057600080fd5b611afc8261209f565b60005b8381101561246457818101518382015260200161244c565b50506000910152565b60008151808452612485816020860160208601612449565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124e061016085018361246d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261251b838261246d565b9250506060850151612545608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125b88187018315159052565b90950151151593019290925250919050565b6000602082840312156125dc57600080fd5b5051919050565b600060e082360312156125f557600080fd5b6125fd611f91565b6126068361209f565b81526126146020840161209f565b60208201526126256040840161209f565b60408201526126366060840161209f565b60608201526080830135608082015260a083013567ffffffffffffffff81111561265f57600080fd5b61266b36828601612049565b60a08301525061267d60c084016120d9565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126bd57600080fd5b83018035915067ffffffffffffffff8211156126d857600080fd5b6020019150368190038213156126ed57600080fd5b9250929050565b6000808585111561270457600080fd5b8386111561271157600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561275e5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611afc602083018461246d565b80820180821115610a5c57610a5c612363565b6000602082840312156127ae57600080fd5b815167ffffffffffffffff8111156127c557600080fd5b8201601f810184136127d657600080fd5b80516127e461206882612003565b8181528560208385010111156127f957600080fd5b61280a826020830160208601612449565b95945050505050565b60006020828403121561282557600080fd5b8151611afc816120c8565b6000825161242481846020870161244956fea264697066735822122064a91670c09054a56eb791667978e2ec6b12d3e828dc698f4fee38fbc19d6ccc64736f6c63430008110033";

type AcrossFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AcrossFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AcrossFacet__factory extends ContractFactory {
  constructor(...args: AcrossFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _spokePool: PromiseOrValue<string>,
    _wrappedNative: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AcrossFacet> {
    return super.deploy(
      _spokePool,
      _wrappedNative,
      overrides || {}
    ) as Promise<AcrossFacet>;
  }
  override getDeployTransaction(
    _spokePool: PromiseOrValue<string>,
    _wrappedNative: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _spokePool,
      _wrappedNative,
      overrides || {}
    );
  }
  override attach(address: string): AcrossFacet {
    return super.attach(address) as AcrossFacet;
  }
  override connect(signer: Signer): AcrossFacet__factory {
    return super.connect(signer) as AcrossFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AcrossFacetInterface {
    return new utils.Interface(_abi) as AcrossFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AcrossFacet {
    return new Contract(address, _abi, signerOrProvider) as AcrossFacet;
  }
}
