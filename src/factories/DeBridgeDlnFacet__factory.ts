/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DeBridgeDlnFacet,
  DeBridgeDlnFacetInterface,
} from "../DeBridgeDlnFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_dlnSource",
        type: "address",
        internalType: "contract IDlnSource",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "dlnSource",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDlnSource",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startBridgeTokensViaDeBridgeDln",
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
        name: "_deBridgeDlnData",
        type: "tuple",
        internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData",
        components: [
          {
            name: "exampleParam",
            type: "string",
            internalType: "string",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmountOut",
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
    name: "swapAndStartBridgeTokensViaDeBridgeDln",
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
        name: "_deBridgeDlnData",
        type: "tuple",
        internalType: "struct DeBridgeDlnFacet.DeBridgeDlnData",
        components: [
          {
            name: "exampleParam",
            type: "string",
            internalType: "string",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmountOut",
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
    name: "DeBridgeDLNInitialized",
    inputs: [],
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
  "0x60a06040523480156200001157600080fd5b5060405162002c7f38038062002c7f833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612bd7620000a860003960008181606001528181610879015281816108df01526109a20152612bd76000f3fe6080604052600436106100345760003560e01c8063587639eb146100395780638f4bef1c1461004e578063ac26bb5d146100ab575b600080fd5b61004c6100473660046124c2565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004612526565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612614565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610514565b6102b98888610694565b5047915050818111156102db576102db6000846102d68585612614565b610a5b565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103733447612614565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104da8a600001518b60c001518b8b33610a8c565b60c08b01526104e98a88610694565b504791505081811115610506576105066000846102d68585612614565b505060009091555050505050565b8060000361054e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a757803410156105a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106389190612627565b905081811015610683576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61068f83333085610bcf565b505050565b6000604051806101600160405280846080015173ffffffffffffffffffffffffffffffffffffffff1681526020018460c0015181526020018360200160208101906106df9190612640565b60405160200161071a919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b6040516020818303038152906040528152602001836040013581526020018460e0015181526020018460a00151604051602001610782919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405281526020018460a0015173ffffffffffffffffffffffffffffffffffffffff1681526020018460a001516040516020016107f6919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604051602081830303815290604052815260200160405180602001604052806000815250815260200160405180602001604052806000815250815260200160405180602001604052806000815250815250905061086b836080015173ffffffffffffffffffffffffffffffffffffffff161590565b610960576108a283608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610de9565b6040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063fbe16ca7906109179084906000906004016126c9565b6020604051808303816000875af1158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a9190612627565b50610a1f565b60c08301516040517ffbe16ca700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163fbe16ca7916109da9085906000906004016126c9565b60206040518083038185885af11580156109f8573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a1d9190612627565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610a4e9190612853565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a825761068f838383610f2c565b61068f82826110ae565b600082808203610ac8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610ad7600185612614565b818110610ae657610ae6612966565b9050602002810190610af89190612995565b610b09906080810190606001612640565b90506000610b16826111d8565b905073ffffffffffffffffffffffffffffffffffffffff8216610b4057610b3d3482612614565b90505b6000610b4c8888611291565b9050610b58888861139d565b610b658a8989898561140a565b600082610b71856111d8565b610b7b9190612614565b905089811015610bc1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161067a565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c1c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c69576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610cda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfe9190612627565b9050610d0c828686866117bc565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da09190612627565b610daa9190612614565b14610de1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e0957505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e56576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ecb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eef9190612627565b101561068f57610f0183836000611898565b61068f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611898565b73ffffffffffffffffffffffffffffffffffffffff8316610f79576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611033573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110579190612627565b90508082111561109d576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b6110a8848484611a1a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110fb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561113e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611198576040519150601f19603f3d011682016040523d82523d6000602084013e61119d565b606091505b505090508061068f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611289576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112849190612627565b61128b565b475b92915050565b60608160008167ffffffffffffffff8111156112af576112af61223c565b6040519080825280602002602001820160405280156112d8578160200160208202803683370190505b5090506000805b83811015611392578686828181106112f9576112f9612966565b905060200281019061130b9190612995565b61131c906080810190606001612640565b9150611327826111d8565b83828151811061133957611339612966565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661138a573483828151811061137257611372612966565b602002602001018181516113869190612614565b9052505b6001016112df565b509095945050505050565b60005b8181101561068f57368383838181106113bb576113bb612966565b90506020028101906113cd9190612995565b90506113df60e0820160c083016129d3565b15611401576114016113f76060830160408401612640565b8260800135610514565b506001016113a0565b8383838382600181146116d75760008585611426600185612614565b81811061143557611435612966565b90506020028101906114479190612995565b611458906080810190606001612640565b9050600089815b8181101561160357368d8d8381811061147a5761147a612966565b905060200281019061148c9190612995565b90506114bb6114a16060830160408401612640565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061151e575061151e6114d46040830160208401612640565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561153557506115356114d46020830183612640565b80156115ba57506115ba61154c60a08301836129f0565b61155b91600491600091612a5c565b61156491612a86565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6115f0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115fa8f82611a70565b5060010161145f565b505060005b611613600185612614565b8110156116cf57600088888381811061162e5761162e612966565b90506020028101906116409190612995565b611651906080810190606001612640565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116c65785828151811061169857611698612966565b60200260200101516116a9826111d8565b6116b39190612614565b925082156116c6576116c6818885610a5b565b50600101611608565b5050506117b0565b8760005b818110156117ad57368b8b838181106116f6576116f6612966565b90506020028101906117089190612995565b905061171d6114a16060830160408401612640565b8061173657506117366114d46040830160208401612640565b801561174d575061174d6114d46020830183612640565b8015611764575061176461154c60a08301836129f0565b61179a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117a48d82611a70565b506001016116db565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110a89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d86565b80158061193857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611912573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119369190612627565b155b6119c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161067a565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611816565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611816565b611a86611a806020830183612640565b3b151590565b611abc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611afc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611b116114a16060850160408601612640565b611b1c576000611b22565b82608001355b90506000611b3e611b396060860160408701612640565b6111d8565b90506000611b55611b396080870160608801612640565b905082600003611b8c57611b8c611b726060870160408801612640565b611b826040880160208901612640565b8760800135610de9565b8460800135821015611bd7576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b600080611be76020880188612640565b73ffffffffffffffffffffffffffffffffffffffff1685611c0b60a08a018a6129f0565b604051611c19929190612ace565b60006040518083038185875af1925050503d8060008114611c56576040519150601f19603f3d011682016040523d82523d6000602084013e611c5b565b606091505b509150915081611ca6576000611c7082611e95565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612ade565b6000611cbb611b3960808a0160608b01612640565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611cec60208b018b612640565b611cfc60608c0160408d01612640565b611d0c60808d0160608e01612640565b8c60800135898711611d1e5786611d28565b611d288a88612614565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611de8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f139092919063ffffffff16565b9050805160001480611e09575080806020019051810190611e099190612af1565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b6060604482511015611eda57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ef66004808551611eee9190612614565b859190611f2a565b905080806020019051810190611f0c9190612b0e565b9392505050565b6060611f228484600085612044565b949350505050565b606081611f3881601f612b7c565b1015611f70576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f7a8284612b7c565b84511015611fb4576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611fd3576040519150600082526020820160405261203b565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561200c578051835260209283019201611ff4565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060824710156120d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120ff9190612b8f565b60006040518083038185875af1925050503d806000811461213c576040519150601f19603f3d011682016040523d82523d6000602084013e612141565b606091505b50915091506121528783838761215d565b979650505050505050565b606083156121f35782516000036121ec5773ffffffffffffffffffffffffffffffffffffffff85163b6121ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611f22565b611f2283838151156122085781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612ade565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561228f5761228f61223c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122dc576122dc61223c565b604052919050565b600067ffffffffffffffff8211156122fe576122fe61223c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261233b57600080fd5b813561234e612349826122e4565b612295565b81815284602083860101111561236357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146123a457600080fd5b919050565b80151581146123b757600080fd5b50565b80356123a4816123a9565b600061014082840312156123d857600080fd5b6123e061226b565b905081358152602082013567ffffffffffffffff8082111561240157600080fd5b61240d8583860161232a565b6020840152604084013591508082111561242657600080fd5b506124338482850161232a565b60408301525061244560608301612380565b606082015261245660808301612380565b608082015261246760a08301612380565b60a082015260c082013560c082015260e082013560e082015261010061248e8184016123ba565b908201526101206124a08382016123ba565b9082015292915050565b6000606082840312156124bc57600080fd5b50919050565b600080604083850312156124d557600080fd5b823567ffffffffffffffff808211156124ed57600080fd5b6124f9868387016123c5565b9350602085013591508082111561250f57600080fd5b5061251c858286016124aa565b9150509250929050565b6000806000806060858703121561253c57600080fd5b843567ffffffffffffffff8082111561255457600080fd5b612560888389016123c5565b9550602087013591508082111561257657600080fd5b818701915087601f83011261258a57600080fd5b81358181111561259957600080fd5b8860208260051b85010111156125ae57600080fd5b6020830195508094505060408701359150808211156125cc57600080fd5b506125d9878288016124aa565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561128b5761128b6125e5565b60006020828403121561263957600080fd5b5051919050565b60006020828403121561265257600080fd5b611f0c82612380565b60005b8381101561267657818101518382015260200161265e565b50506000910152565b6000815180845261269781602086016020860161265b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b608081526126f060808201845173ffffffffffffffffffffffffffffffffffffffff169052565b602083015160a0820152600060408401516101608060c08501526127186101e085018361267f565b9150606086015160e08501526080860151610100818187015260a088015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8061012081888703018189015261276f868561267f565b955060c08a0151935061014061279c818a018673ffffffffffffffffffffffffffffffffffffffff169052565b60e08b015194508289880301868a01526127b6878661267f565b9650838b0151955082898803016101808a01526127d3878761267f565b9650818b0151955082898803016101a08a01526127f0878761267f565b9650808b01519550505080878603016101c0880152505050612812828261267f565b915050828103602084015261282b816000815260200190565b63ffffffff851660408501529050828103606084015260008152602081015b95945050505050565b60208152815160208201526000602083015161014080604085015261287c61016085018361267f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128b7838261267f565b92505060608501516128e1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129548187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126129c957600080fd5b9190910192915050565b6000602082840312156129e557600080fd5b8135611f0c816123a9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a2557600080fd5b83018035915067ffffffffffffffff821115612a4057600080fd5b602001915036819003821315612a5557600080fd5b9250929050565b60008085851115612a6c57600080fd5b83861115612a7957600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ac65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611f0c602083018461267f565b600060208284031215612b0357600080fd5b8151611f0c816123a9565b600060208284031215612b2057600080fd5b815167ffffffffffffffff811115612b3757600080fd5b8201601f81018413612b4857600080fd5b8051612b56612349826122e4565b818152856020838501011115612b6b57600080fd5b61284a82602083016020860161265b565b8082018082111561128b5761128b6125e5565b600082516129c981846020870161265b56fea2646970667358221220fff5ae2ff25f8907f2bf36b65d7cc0a9b19f7ae38eacf76e9d1308b921c7877c64736f6c63430008110033";

type DeBridgeDlnFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeBridgeDlnFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeBridgeDlnFacet__factory extends ContractFactory {
  constructor(...args: DeBridgeDlnFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _dlnSource: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeBridgeDlnFacet> {
    return super.deploy(
      _dlnSource,
      overrides || {}
    ) as Promise<DeBridgeDlnFacet>;
  }
  override getDeployTransaction(
    _dlnSource: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_dlnSource, overrides || {});
  }
  override attach(address: string): DeBridgeDlnFacet {
    return super.attach(address) as DeBridgeDlnFacet;
  }
  override connect(signer: Signer): DeBridgeDlnFacet__factory {
    return super.connect(signer) as DeBridgeDlnFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeBridgeDlnFacetInterface {
    return new utils.Interface(_abi) as DeBridgeDlnFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeBridgeDlnFacet {
    return new Contract(address, _abi, signerOrProvider) as DeBridgeDlnFacet;
  }
}
