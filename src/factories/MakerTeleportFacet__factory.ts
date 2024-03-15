/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MakerTeleportFacet,
  MakerTeleportFacetInterface,
} from "../MakerTeleportFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_teleportGateway",
        type: "address",
        internalType: "contract ITeleportGateway",
      },
      {
        name: "_dai",
        type: "address",
        internalType: "address",
      },
      {
        name: "_dstChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_l1Domain",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startBridgeTokensViaMakerTeleport",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapAndStartBridgeTokensViaMakerTeleport",
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
    name: "InvalidDestinationChain",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidSendingToken",
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
  "0x6101006040523480156200001257600080fd5b5060405162002af138038062002af1833981016040819052620000359162000070565b60c0919091526001600160a01b03928316608052911660a05260e052620000bd565b6001600160a01b03811681146200006d57600080fd5b50565b600080600080608085870312156200008757600080fd5b8451620000948162000057565b6020860151909450620000a78162000057565b6040860151606090960151949790965092505050565b60805160a05160c05160e0516129d76200011a600039600061085201526000818161024401526105500152600081816102a3015281816105af0152818161063c01526107ca0152600081816107eb015261081601526129d76000f3fe6080604052600436106100295760003560e01c80632201536d1461002e57806351ba4f7514610043575b600080fd5b61004161003c366004612497565b610063565b005b34801561004f57600080fd5b5061004161005e366004612531565b610384565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef3447612595565b9050856101148160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561014b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610189576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101000151610203576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610241576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f0000000000000000000000000000000000000000000000000000000000000000808260e00151146102a0576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461032b576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103408d600001518e60c001518e8e3361067d565b60c08e015261034e8d6107c5565b50505050505050600047905081811115610377576103776000846103728585612595565b61095a565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ff576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0820151829073ffffffffffffffffffffffffffffffffffffffff16610456576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610494576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061010001511561050f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b838061012001511561054d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f0000000000000000000000000000000000000000000000000000000000000000808260e00151146105ac576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b867f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610637576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106657f00000000000000000000000000000000000000000000000000000000000000008a60c00151610990565b61066e896107c5565b50506000909555505050505050565b6000828082036106b9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106c8600185612595565b8181106106d7576106d76125a8565b90506020028101906106e991906125d7565b6106fa906080810190606001612615565b9050600061070782610b06565b905073ffffffffffffffffffffffffffffffffffffffff82166107315761072e3482612595565b90505b600061073d8888610bbf565b90506107498888610ccb565b6107568a89898985610d38565b60008261076285610b06565b61076c9190612595565b9050898110156107b7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6108147f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c001516110ea565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166389282b877f00000000000000000000000000000000000000000000000000000000000000008360a001516108838560c0015161122d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff90911660248301526fffffffffffffffffffffffffffffffff166044820152606401600060405180830381600087803b15801561090857600080fd5b505af115801561091c573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161094f919061269e565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610986576109818383836112d3565b505050565b6109818282611455565b806000036109ca576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a235780341015610a1f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab491906127b1565b905081811015610afa576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ae565b6109818333308561157f565b600073ffffffffffffffffffffffffffffffffffffffff821615610bb7576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb291906127b1565b610bb9565b475b92915050565b60608160008167ffffffffffffffff811115610bdd57610bdd612229565b604051908082528060200260200182016040528015610c06578160200160208202803683370190505b5090506000805b83811015610cc057868682818110610c2757610c276125a8565b9050602002810190610c3991906125d7565b610c4a906080810190606001612615565b9150610c5582610b06565b838281518110610c6757610c676125a8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cb85734838281518110610ca057610ca06125a8565b60200260200101818151610cb49190612595565b9052505b600101610c0d565b509095945050505050565b60005b818110156109815736838383818110610ce957610ce96125a8565b9050602002810190610cfb91906125d7565b9050610d0d60e0820160c083016127ca565b15610d2f57610d2f610d256060830160408401612615565b8260800135610990565b50600101610cce565b8383838382600181146110055760008585610d54600185612595565b818110610d6357610d636125a8565b9050602002810190610d7591906125d7565b610d86906080810190606001612615565b9050600089815b81811015610f3157368d8d83818110610da857610da86125a8565b9050602002810190610dba91906125d7565b9050610de9610dcf6060830160408401612615565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e4c5750610e4c610e026040830160208401612615565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e635750610e63610e026020830183612615565b8015610ee85750610ee8610e7a60a08301836127e7565b610e8991600491600091612853565b610e929161287d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f1e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f288f826117a9565b50600101610d8d565b505060005b610f41600185612595565b811015610ffd576000888883818110610f5c57610f5c6125a8565b9050602002810190610f6e91906125d7565b610f7f906080810190606001612615565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ff457858281518110610fc657610fc66125a8565b6020026020010151610fd782610b06565b610fe19190612595565b92508215610ff457610ff481888561095a565b50600101610f36565b5050506110de565b8760005b818110156110db57368b8b83818110611024576110246125a8565b905060200281019061103691906125d7565b905061104b610dcf6060830160408401612615565b806110645750611064610e026040830160208401612615565b801561107b575061107b610e026020830183612615565b80156110925750611092610e7a60a08301836127e7565b6110c8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110d28d826117a9565b50600101611009565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661110a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611157576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f091906127b1565b10156109815761120283836000611abf565b61098183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611abf565b60006fffffffffffffffffffffffffffffffff8211156112cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f323820626974730000000000000000000000000000000000000000000000000060648201526084016107ae565b5090565b73ffffffffffffffffffffffffffffffffffffffff8316611320576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661136d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fe91906127b1565b905080821115611444576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016107ae565b61144f848484611cbf565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114a2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114e5576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016107ae565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461153f576040519150601f19603f3d011682016040523d82523d6000602084013e611544565b606091505b5050905080610981576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115cc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611619576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561168a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ae91906127b1565b90506116bc82868686611d15565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa15801561172d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061175191906127b1565b61175b9190612595565b9050836117698260016128c5565b116117a0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b6117bf6117b96020830183612615565b3b151590565b6117f5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611835576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061184a610dcf6060850160408601612615565b61185557600061185b565b82608001355b905060006118776118726060860160408701612615565b610b06565b9050600061188e6118726080870160608801612615565b9050826000036118c5576118c56118ab6060870160408801612615565b6118bb6040880160208901612615565b87608001356110ea565b8460800135821015611910576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016107ae565b6000806119206020880188612615565b73ffffffffffffffffffffffffffffffffffffffff168561194460a08a018a6127e7565b6040516119529291906128d8565b60006040518083038185875af1925050503d806000811461198f576040519150601f19603f3d011682016040523d82523d6000602084013e611994565b606091505b5091509150816119df5760006119a982611d73565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ae91906128e8565b60006119f461187260808a0160608b01612615565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2560208b018b612615565b611a3560608c0160408d01612615565b611a4560808d0160608e01612615565b8c60800135898711611a575786611a61565b611a618a88612595565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b5f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b5d91906127b1565b155b611beb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016107ae565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109819084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611df1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109819084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c3d565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261144f9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c3d565b6060604482511015611db857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611dd46004808551611dcc9190612595565b859190611f00565b905080806020019051810190611dea91906128fb565b9392505050565b6000611e53826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661201a9092919063ffffffff16565b9050805160001480611e74575080806020019051810190611e749190612972565b610981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107ae565b606081611f0e81601f6128c5565b1015611f46576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f5082846128c5565b84511015611f8a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611fa95760405191506000825260208201604052612011565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611fe2578051835260209283019201611fca565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606120298484600085612031565b949350505050565b6060824710156120c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016107ae565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120ec919061298f565b60006040518083038185875af1925050503d8060008114612129576040519150601f19603f3d011682016040523d82523d6000602084013e61212e565b606091505b509150915061213f8783838761214a565b979650505050505050565b606083156121e05782516000036121d95773ffffffffffffffffffffffffffffffffffffffff85163b6121d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ae565b5081612029565b61202983838151156121f55781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ae91906128e8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561227c5761227c612229565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122c9576122c9612229565b604052919050565b600067ffffffffffffffff8211156122eb576122eb612229565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261232857600080fd5b813561233b612336826122d1565b612282565b81815284602083860101111561235057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461239157600080fd5b919050565b80151581146123a457600080fd5b50565b803561239181612396565b600061014082840312156123c557600080fd5b6123cd612258565b905081358152602082013567ffffffffffffffff808211156123ee57600080fd5b6123fa85838601612317565b6020840152604084013591508082111561241357600080fd5b5061242084828501612317565b6040830152506124326060830161236d565b60608201526124436080830161236d565b608082015261245460a0830161236d565b60a082015260c082013560c082015260e082013560e082015261010061247b8184016123a7565b9082015261012061248d8382016123a7565b9082015292915050565b6000806000604084860312156124ac57600080fd5b833567ffffffffffffffff808211156124c457600080fd5b6124d0878388016123b2565b945060208601359150808211156124e657600080fd5b818601915086601f8301126124fa57600080fd5b81358181111561250957600080fd5b8760208260051b850101111561251e57600080fd5b6020830194508093505050509250925092565b60006020828403121561254357600080fd5b813567ffffffffffffffff81111561255a57600080fd5b612029848285016123b2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bb957610bb9612566565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261260b57600080fd5b9190910192915050565b60006020828403121561262757600080fd5b611dea8261236d565b60005b8381101561264b578181015183820152602001612633565b50506000910152565b6000815180845261266c816020860160208601612630565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526126c7610160850183612654565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127028382612654565b925050606085015161272c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061279f8187018315159052565b90950151151593019290925250919050565b6000602082840312156127c357600080fd5b5051919050565b6000602082840312156127dc57600080fd5b8135611dea81612396565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261281c57600080fd5b83018035915067ffffffffffffffff82111561283757600080fd5b60200191503681900382131561284c57600080fd5b9250929050565b6000808585111561286357600080fd5b8386111561287057600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128bd5780818660040360031b1b83161692505b505092915050565b80820180821115610bb957610bb9612566565b8183823760009101908152919050565b602081526000611dea6020830184612654565b60006020828403121561290d57600080fd5b815167ffffffffffffffff81111561292457600080fd5b8201601f8101841361293557600080fd5b8051612943612336826122d1565b81815285602083850101111561295857600080fd5b612969826020830160208601612630565b95945050505050565b60006020828403121561298457600080fd5b8151611dea81612396565b6000825161260b81846020870161263056fea2646970667358221220b8674228c6e2636cd39df6a5cc9de1d820fd9233b989cf40a681157593d421cd64736f6c63430008110033";

type MakerTeleportFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MakerTeleportFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MakerTeleportFacet__factory extends ContractFactory {
  constructor(...args: MakerTeleportFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _teleportGateway: PromiseOrValue<string>,
    _dai: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _l1Domain: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MakerTeleportFacet> {
    return super.deploy(
      _teleportGateway,
      _dai,
      _dstChainId,
      _l1Domain,
      overrides || {}
    ) as Promise<MakerTeleportFacet>;
  }
  override getDeployTransaction(
    _teleportGateway: PromiseOrValue<string>,
    _dai: PromiseOrValue<string>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _l1Domain: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _teleportGateway,
      _dai,
      _dstChainId,
      _l1Domain,
      overrides || {}
    );
  }
  override attach(address: string): MakerTeleportFacet {
    return super.attach(address) as MakerTeleportFacet;
  }
  override connect(signer: Signer): MakerTeleportFacet__factory {
    return super.connect(signer) as MakerTeleportFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MakerTeleportFacetInterface {
    return new utils.Interface(_abi) as MakerTeleportFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MakerTeleportFacet {
    return new Contract(address, _abi, signerOrProvider) as MakerTeleportFacet;
  }
}
