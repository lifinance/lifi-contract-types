/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DeBridgeFacet, DeBridgeFacetInterface } from "../DeBridgeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IDeBridgeGate",
        name: "_deBridgeGate",
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
            internalType: "bytes",
            name: "permit",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "useAssetFee",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "referralCode",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "flags",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "fallbackAddress",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct DeBridgeFacet.SubmissionAutoParamsTo",
            name: "autoParams",
            type: "tuple",
          },
        ],
        internalType: "struct DeBridgeFacet.DeBridgeData",
        name: "_deBridgeData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaDeBridge",
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
            internalType: "bytes",
            name: "permit",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "useAssetFee",
            type: "bool",
          },
          {
            internalType: "uint32",
            name: "referralCode",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "flags",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "fallbackAddress",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct DeBridgeFacet.SubmissionAutoParamsTo",
            name: "autoParams",
            type: "tuple",
          },
        ],
        internalType: "struct DeBridgeFacet.DeBridgeData",
        name: "_deBridgeData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaDeBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002bdb38038062002bdb833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b406200009b600039600081816106fa01526107250152612b406000f3fe6080604052600436106100295760003560e01c80633031d53c1461002e578063d53582b014610043575b600080fd5b61004161003c3660046122ea565b610056565b005b6100416100513660046123a9565b6102a3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612445565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020089876104cc565b61021a89600001518a60c001518a8a338b60200135610531565b60c08a0152608089015173ffffffffffffffffffffffffffffffffffffffff166102585785602001358960c0018181516102549190612445565b9052505b61026289876106a9565b504790506000828211610276576000610280565b6102808383612445565b9050801561029457610294600085836108c6565b50506000909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061032f3447612445565b905061033a85612458565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661038b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610406576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040f86612458565b8061010001511561044c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045e61045888612458565b876104cc565b61047b61047160a0890160808a01612464565b8860c001356108fc565b61048d61048788612458565b876106a9565b5047905060008282116104a15760006104ab565b6104ab8383612445565b905080156104bf576104bf600085836108c6565b5050600090925550505050565b610120820151151560006104e3608084018461247f565b6104f19060608101906124bd565b90501115151461052d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60008380820361056d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000868661057c600185612445565b81811061058b5761058b612529565b905060200281019061059d9190612558565b6105ae906080810190606001612464565b905060006105bb82610a6e565b905073ffffffffffffffffffffffffffffffffffffffff82166105e5576105e23482612445565b90505b60006105f18989610b27565b90506105fd8989610c33565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610638818b8b85610c94565b60008361064486610a6e565b61064e9190612445565b90508b811015610699576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60006106cd836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050602082013581156106f05760c08401516106e9908261258c565b9050610723565b61072384608001517f00000000000000000000000000000000000000000000000000000000000000008660c0015161108a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663be2974768286608001518760c001518860e001518960a001516040516020016107af919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526107e78a806124bd565b6107f760608d0160408e0161259f565b61080760808e0160608f016125bc565b61081460808f018f61247f565b604051602001610824919061268f565b6040516020818303038152906040526040518b63ffffffff1660e01b815260040161085799989796959493929190612785565b6000604051808303818588803b15801561087057600080fd5b505af1158015610884573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516108b891906127fe565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108f2576108ed8383836111d5565b505050565b6108ed8282611304565b73ffffffffffffffffffffffffffffffffffffffff8216610951578034101561052d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361098b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c9190612911565b905081811015610a62576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610690565b6108ed8333308561142e565b600073ffffffffffffffffffffffffffffffffffffffff821615610b1f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190612911565b610b21565b475b92915050565b60608160008167ffffffffffffffff811115610b4557610b45612041565b604051908082528060200260200182016040528015610b6e578160200160208202803683370190505b5090506000805b83811015610c2857868682818110610b8f57610b8f612529565b9050602002810190610ba19190612558565b610bb2906080810190606001612464565b9150610bbd82610a6e565b838281518110610bcf57610bcf612529565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c205734838281518110610c0857610c08612529565b60200260200101818151610c1c9190612445565b9052505b600101610b75565b509095945050505050565b60005b818110156108ed576000838383818110610c5257610c52612529565b9050602002810190610c649190612558565b610c6d9061292a565b90508060c0015115610c8b57610c8b816040015182608001516108fc565b50600101610c36565b602084015160408501518491849184908360018114610fa35760008686610cbc600185612445565b818110610ccb57610ccb612529565b9050602002810190610cdd9190612558565b610cee906080810190606001612464565b9050600089815b81811015610e9b57368d8d83818110610d1057610d10612529565b9050602002810190610d229190612558565b9050610d51610d376060830160408401612464565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610db45750610db4610d6a6040830160208401612464565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dcb5750610dcb610d6a6020830183612464565b8015610e505750610e50610de260a08301836124bd565b610df1916004916000916129cf565b610dfa916129f9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e86576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e929082611648565b50600101610cf5565b505060005b610eab600185612445565b811015610f9b576000898983818110610ec657610ec6612529565b9050602002810190610ed89190612558565b610ee9906080810190606001612464565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f9257868281518110610f3057610f30612529565b6020026020010151610f4182610a6e565b610f4b9190612445565b9250600073ffffffffffffffffffffffffffffffffffffffff821615610f72576000610f74565b865b90508315610f9057610f90828a610f8b8488612445565b6108c6565b505b50600101610ea0565b50505061107e565b8760005b8181101561107b57368b8b83818110610fc257610fc2612529565b9050602002810190610fd49190612558565b9050610fe9610d376060830160408401612464565b806110025750611002610d6a6040830160208401612464565b80156110195750611019610d6a6020830183612464565b80156110305750611030610de260a08301836124bd565b611066576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516110729082611648565b50600101610fa7565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110aa57505050565b73ffffffffffffffffffffffffffffffffffffffff82166110f7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561116d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111919190612911565b9050818110156111cf576111cf84846111ca847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612445565b61195e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611222576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190612911565b9050808211156112f9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610690565b6111cf848484611ada565b73ffffffffffffffffffffffffffffffffffffffff8216611351576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611394576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610690565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113ee576040519150601f19603f3d011682016040523d82523d6000602084013e6113f3565b606091505b50509050806108ed576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661147b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114c8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611539573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155d9190612911565b905061156b82868686611b30565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ff9190612911565b6116099190612445565b14611640576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61165e6116586020830183612464565b3b151590565b611694576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116d4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006116e9610d376060850160408601612464565b6116f45760006116fa565b82608001355b905060006117166117116060860160408701612464565b610a6e565b9050600061172d6117116080870160608801612464565b9050826000036117645761176461174a6060870160408801612464565b61175a6040880160208901612464565b876080013561108a565b84608001358210156117af576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610690565b6000806117bf6020880188612464565b73ffffffffffffffffffffffffffffffffffffffff16856117e360a08a018a6124bd565b6040516117f1929190612a41565b60006040518083038185875af1925050503d806000811461182e576040519150601f19603f3d011682016040523d82523d6000602084013e611833565b606091505b50915091508161187e57600061184882611b8e565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190612a51565b600061189361171160808a0160608b01612464565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118c460208b018b612464565b6118d460608c0160408d01612464565b6118e460808d0160608e01612464565b8c608001358987116118f65786611900565b6119008a88612445565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156119d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f99190612911565b611a03919061258c565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506111cf9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c0c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108ed9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a58565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111cf9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a58565b6060604482511015611bd357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bef6004808551611be79190612445565b859190611d18565b905080806020019051810190611c059190612a64565b9392505050565b6000611c6e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e329092919063ffffffff16565b8051909150156108ed5780806020019051810190611c8c9190612adb565b6108ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610690565b606081611d2681601f61258c565b1015611d5e576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d68828461258c565b84511015611da2576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611dc15760405191506000825260208201604052611e29565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611dfa578051835260209283019201611de2565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e418484600085611e49565b949350505050565b606082471015611edb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610690565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f049190612af8565b60006040518083038185875af1925050503d8060008114611f41576040519150601f19603f3d011682016040523d82523d6000602084013e611f46565b606091505b5091509150611f5787838387611f62565b979650505050505050565b60608315611ff8578251600003611ff15773ffffffffffffffffffffffffffffffffffffffff85163b611ff1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610690565b5081611e41565b611e41838381511561200d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106909190612a51565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561209457612094612041565b60405290565b60405160e0810167ffffffffffffffff8111828210171561209457612094612041565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561210457612104612041565b604052919050565b600067ffffffffffffffff82111561212657612126612041565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261216357600080fd5b81356121766121718261210c565b6120bd565b81815284602083860101111561218b57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121cc57600080fd5b919050565b80151581146121df57600080fd5b50565b80356121cc816121d1565b6000610140828403121561220057600080fd5b612208612070565b905081358152602082013567ffffffffffffffff8082111561222957600080fd5b61223585838601612152565b6020840152604084013591508082111561224e57600080fd5b5061225b84828501612152565b60408301525061226d606083016121a8565b606082015261227e608083016121a8565b608082015261228f60a083016121a8565b60a082015260c082013560c082015260e082013560e08201526101006122b68184016121e2565b908201526101206122c88382016121e2565b9082015292915050565b600060a082840312156122e457600080fd5b50919050565b6000806000806060858703121561230057600080fd5b843567ffffffffffffffff8082111561231857600080fd5b612324888389016121ed565b9550602087013591508082111561233a57600080fd5b818701915087601f83011261234e57600080fd5b81358181111561235d57600080fd5b8860208260051b850101111561237257600080fd5b60208301955080945050604087013591508082111561239057600080fd5b5061239d878288016122d2565b91505092959194509250565b600080604083850312156123bc57600080fd5b823567ffffffffffffffff808211156123d457600080fd5b9084019061014082870312156123e957600080fd5b909250602084013590808211156123ff57600080fd5b5061240c858286016122d2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b2157610b21612416565b6000610b2136836121ed565b60006020828403121561247657600080fd5b611c05826121a8565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818336030181126124b357600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124f257600080fd5b83018035915067ffffffffffffffff82111561250d57600080fd5b60200191503681900382131561252257600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124b357600080fd5b80820180821115610b2157610b21612416565b6000602082840312156125b157600080fd5b8135611c05816121d1565b6000602082840312156125ce57600080fd5b813563ffffffff81168114611c0557600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261261757600080fd5b830160208101925035905067ffffffffffffffff81111561263757600080fd5b80360382131561252257600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152813560208201526020820135604082015260006126b360408401846125e2565b608060608501526126c860a085018284612646565b9150506126d860608501856125e2565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301608086015261270d838284612646565b9695505050505050565b60005b8381101561273257818101518382015260200161271a565b50506000910152565b60008151808452612753816020860160208601612717565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600061010073ffffffffffffffffffffffffffffffffffffffff8c1683528a60208401528960408401528060608401526127c18184018a61273b565b905082810360808401526127d681888a612646565b905085151560a084015263ffffffff851660c084015282810360e0840152610699818561273b565b60208152815160208201526000602083015161014080604085015261282761016085018361273b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612862838261273b565b925050606085015161288c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128ff8187018315159052565b90950151151593019290925250919050565b60006020828403121561292357600080fd5b5051919050565b600060e0823603121561293c57600080fd5b61294461209a565b61294d836121a8565b815261295b602084016121a8565b602082015261296c604084016121a8565b604082015261297d606084016121a8565b60608201526080830135608082015260a083013567ffffffffffffffff8111156129a657600080fd5b6129b236828601612152565b60a0830152506129c460c084016121e2565b60c082015292915050565b600080858511156129df57600080fd5b838611156129ec57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a395780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c05602083018461273b565b600060208284031215612a7657600080fd5b815167ffffffffffffffff811115612a8d57600080fd5b8201601f81018413612a9e57600080fd5b8051612aac6121718261210c565b818152856020838501011115612ac157600080fd5b612ad2826020830160208601612717565b95945050505050565b600060208284031215612aed57600080fd5b8151611c05816121d1565b600082516124b381846020870161271756fea26469706673582212203e5605bb7eae506a0eb17b7946e8653162422626341bfa4de0c3c74e78beb1e764736f6c63430008110033";

type DeBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeBridgeFacet__factory extends ContractFactory {
  constructor(...args: DeBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _deBridgeGate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DeBridgeFacet> {
    return super.deploy(
      _deBridgeGate,
      overrides || {}
    ) as Promise<DeBridgeFacet>;
  }
  override getDeployTransaction(
    _deBridgeGate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_deBridgeGate, overrides || {});
  }
  override attach(address: string): DeBridgeFacet {
    return super.attach(address) as DeBridgeFacet;
  }
  override connect(signer: Signer): DeBridgeFacet__factory {
    return super.connect(signer) as DeBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeBridgeFacetInterface {
    return new utils.Interface(_abi) as DeBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as DeBridgeFacet;
  }
}
