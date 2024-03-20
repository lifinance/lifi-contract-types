/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_thorchainRouter",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startBridgeTokensViaThorSwap",
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
        name: "_thorSwapData",
        type: "tuple",
        internalType: "struct ThorSwapFacet.ThorSwapData",
        components: [
          {
            name: "vault",
            type: "address",
            internalType: "address",
          },
          {
            name: "memo",
            type: "string",
            internalType: "string",
          },
          {
            name: "expiration",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapAndStartBridgeTokensViaThorSwap",
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
      {
        name: "_thorSwapData",
        type: "tuple",
        internalType: "struct ThorSwapFacet.ThorSwapData",
        components: [
          {
            name: "vault",
            type: "address",
            internalType: "address",
          },
          {
            name: "memo",
            type: "string",
            internalType: "string",
          },
          {
            name: "expiration",
            type: "uint256",
            internalType: "uint256",
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
  "0x60a06040523480156200001157600080fd5b50604051620028a0380380620028a0833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128056200009b60003960008181610654015261067f01526128056000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c3660046121eb565b610056565b005b61004161005136600461224f565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761233d565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561233d565b610784565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761233d565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336107b5565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561233d565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190612350565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610627833330856108f8565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061067d5761067d827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b12565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b826106c55760006106cb565b8560c001515b6106d86020870187612369565b608088015160c08901516106ef60208a018a612384565b8a604001356040518863ffffffff1660e01b8152600401610715969594939291906123f0565b6000604051808303818588803b15801561072e57600080fd5b505af1158015610742573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161077691906124e4565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107ab57610627838383610c55565b6106278282610dd7565b6000828082036107f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080060018561233d565b81811061080f5761080f6125f7565b90506020028101906108219190612626565b610832906080810190606001612369565b9050600061083f82610f01565b905073ffffffffffffffffffffffffffffffffffffffff821661086957610866348261233d565b90505b60006108758888610fba565b905061088188886110c6565b61088e8a89898985611133565b60008261089a85610f01565b6108a4919061233d565b9050898110156108ea576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610945576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610992576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a279190612350565b9050610a35828686866114e5565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac99190612350565b610ad3919061233d565b14610b0a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3257505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b7f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610bf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c189190612350565b101561062757610c2a838360006115c1565b61062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115c1565b73ffffffffffffffffffffffffffffffffffffffff8316610ca2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cef576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610d5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d809190612350565b905080821115610dc6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610dd1848484611743565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e24576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610e67576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ec1576040519150601f19603f3d011682016040523d82523d6000602084013e610ec6565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610fb2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fad9190612350565b610fb4565b475b92915050565b60608160008167ffffffffffffffff811115610fd857610fd8611f65565b604051908082528060200260200182016040528015611001578160200160208202803683370190505b5090506000805b838110156110bb57868682818110611022576110226125f7565b90506020028101906110349190612626565b611045906080810190606001612369565b915061105082610f01565b838281518110611062576110626125f7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110b3573483828151811061109b5761109b6125f7565b602002602001018181516110af919061233d565b9052505b600101611008565b509095945050505050565b60005b8181101561062757368383838181106110e4576110e46125f7565b90506020028101906110f69190612626565b905061110860e0820160c08301612664565b1561112a5761112a6111206060830160408401612369565b82608001356104ac565b506001016110c9565b838383838260018114611400576000858561114f60018561233d565b81811061115e5761115e6125f7565b90506020028101906111709190612626565b611181906080810190606001612369565b9050600089815b8181101561132c57368d8d838181106111a3576111a36125f7565b90506020028101906111b59190612626565b90506111e46111ca6060830160408401612369565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061124757506112476111fd6040830160208401612369565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561125e575061125e6111fd6020830183612369565b80156112e357506112e361127560a0830183612384565b61128491600491600091612681565b61128d916126ab565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611319576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113238f82611799565b50600101611188565b505060005b61133c60018561233d565b8110156113f8576000888883818110611357576113576125f7565b90506020028101906113699190612626565b61137a906080810190606001612369565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113ef578582815181106113c1576113c16125f7565b60200260200101516113d282610f01565b6113dc919061233d565b925082156113ef576113ef818885610784565b50600101611331565b5050506114d9565b8760005b818110156114d657368b8b8381811061141f5761141f6125f7565b90506020028101906114319190612626565b90506114466111ca6060830160408401612369565b8061145f575061145f6111fd6040830160208401612369565b801561147657506114766111fd6020830183612369565b801561148d575061148d61127560a0830183612384565b6114c3576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114cd8d82611799565b50600101611404565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610dd19085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aaf565b80158061166157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561163b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165f9190612350565b155b6116ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610612565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161153f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161153f565b6117af6117a96020830183612369565b3b151590565b6117e5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611825576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061183a6111ca6060850160408601612369565b61184557600061184b565b82608001355b905060006118676118626060860160408701612369565b610f01565b9050600061187e6118626080870160608801612369565b9050826000036118b5576118b561189b6060870160408801612369565b6118ab6040880160208901612369565b8760800135610b12565b8460800135821015611900576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b6000806119106020880188612369565b73ffffffffffffffffffffffffffffffffffffffff168561193460a08a018a612384565b6040516119429291906126f3565b60006040518083038185875af1925050503d806000811461197f576040519150601f19603f3d011682016040523d82523d6000602084013e611984565b606091505b5091509150816119cf57600061199982611bbe565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129190612703565b60006119e461186260808a0160608b01612369565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a1560208b018b612369565b611a2560608c0160408d01612369565b611a3560808d0160608e01612369565b8c60800135898711611a475786611a51565b611a518a8861233d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b11826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c3c9092919063ffffffff16565b9050805160001480611b32575080806020019051810190611b329190612716565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b6060604482511015611c0357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c1f6004808551611c17919061233d565b859190611c53565b905080806020019051810190611c359190612733565b9392505050565b6060611c4b8484600085611d6d565b949350505050565b606081611c6181601f6127aa565b1015611c99576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ca382846127aa565b84511015611cdd576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cfc5760405191506000825260208201604052611d64565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d35578051835260209283019201611d1d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611dff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e2891906127bd565b60006040518083038185875af1925050503d8060008114611e65576040519150601f19603f3d011682016040523d82523d6000602084013e611e6a565b606091505b5091509150611e7b87838387611e86565b979650505050505050565b60608315611f1c578251600003611f155773ffffffffffffffffffffffffffffffffffffffff85163b611f15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611c4b565b611c4b8383815115611f315781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129190612703565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fb857611fb8611f65565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561200557612005611f65565b604052919050565b600067ffffffffffffffff82111561202757612027611f65565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261206457600080fd5b81356120776120728261200d565b611fbe565b81815284602083860101111561208c57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120cd57600080fd5b919050565b80151581146120e057600080fd5b50565b80356120cd816120d2565b6000610140828403121561210157600080fd5b612109611f94565b905081358152602082013567ffffffffffffffff8082111561212a57600080fd5b61213685838601612053565b6020840152604084013591508082111561214f57600080fd5b5061215c84828501612053565b60408301525061216e606083016120a9565b606082015261217f608083016120a9565b608082015261219060a083016120a9565b60a082015260c082013560c082015260e082013560e08201526101006121b78184016120e3565b908201526101206121c98382016120e3565b9082015292915050565b6000606082840312156121e557600080fd5b50919050565b600080604083850312156121fe57600080fd5b823567ffffffffffffffff8082111561221657600080fd5b612222868387016120ee565b9350602085013591508082111561223857600080fd5b50612245858286016121d3565b9150509250929050565b6000806000806060858703121561226557600080fd5b843567ffffffffffffffff8082111561227d57600080fd5b612289888389016120ee565b9550602087013591508082111561229f57600080fd5b818701915087601f8301126122b357600080fd5b8135818111156122c257600080fd5b8860208260051b85010111156122d757600080fd5b6020830195508094505060408701359150808211156122f557600080fd5b50612302878288016121d3565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fb457610fb461230e565b60006020828403121561236257600080fd5b5051919050565b60006020828403121561237b57600080fd5b611c35826120a9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123b957600080fd5b83018035915067ffffffffffffffff8211156123d457600080fd5b6020019150368190038213156123e957600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b83811015612491578181015183820152602001612479565b50506000910152565b600081518084526124b2816020860160208601612476565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261250d61016085018361249a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612548838261249a565b9250506060850151612572608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261265a57600080fd5b9190910192915050565b60006020828403121561267657600080fd5b8135611c35816120d2565b6000808585111561269157600080fd5b8386111561269e57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126eb5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c35602083018461249a565b60006020828403121561272857600080fd5b8151611c35816120d2565b60006020828403121561274557600080fd5b815167ffffffffffffffff81111561275c57600080fd5b8201601f8101841361276d57600080fd5b805161277b6120728261200d565b81815285602083850101111561279057600080fd5b6127a1826020830160208601612476565b95945050505050565b80820180821115610fb457610fb461230e565b6000825161265a81846020870161247656fea264697066735822122013474040fb183958c8bda4367795c6d26a122a949433db53841f005575a5aca564736f6c63430008110033";

type ThorSwapFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ThorSwapFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ThorSwapFacet__factory extends ContractFactory {
  constructor(...args: ThorSwapFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _thorchainRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ThorSwapFacet> {
    return super.deploy(
      _thorchainRouter,
      overrides || {}
    ) as Promise<ThorSwapFacet>;
  }
  override getDeployTransaction(
    _thorchainRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_thorchainRouter, overrides || {});
  }
  override attach(address: string): ThorSwapFacet {
    return super.attach(address) as ThorSwapFacet;
  }
  override connect(signer: Signer): ThorSwapFacet__factory {
    return super.connect(signer) as ThorSwapFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ThorSwapFacetInterface {
    return new utils.Interface(_abi) as ThorSwapFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ThorSwapFacet {
    return new Contract(address, _abi, signerOrProvider) as ThorSwapFacet;
  }
}
