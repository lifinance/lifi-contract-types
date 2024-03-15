/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GenericSwapFacet,
  GenericSwapFacetInterface,
} from "../GenericSwapFacet";

const _abi = [
  {
    type: "function",
    name: "swapTokensGeneric",
    inputs: [
      {
        name: "_transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_integrator",
        type: "string",
        internalType: "string",
      },
      {
        name: "_referrer",
        type: "string",
        internalType: "string",
      },
      {
        name: "_receiver",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "_minAmount",
        type: "uint256",
        internalType: "uint256",
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
  "0x608060405234801561001057600080fd5b506121a3806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611c2b565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611d4b565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61024b565b905060008686610133600182611d4b565b81811061014257610142611d5e565b90506020028101906101549190611d8d565b610165906080810190606001611dcb565b9050610172818a84610393565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac611d5e565b90506020028101906101be9190611d8d565b6101cf906060810190604001611dcb565b888f8f60008181106101e3576101e3611d5e565b90506020028101906101f59190611d8d565b608001358b60405161020f99989796959493929190611e31565b60405180910390a25047905081811115610238576102386000846102338585611d4b565b610393565b5050600090915550505050505050505050565b600082808203610287576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610296600185611d4b565b8181106102a5576102a5611d5e565b90506020028101906102b79190611d8d565b6102c8906080810190606001611dcb565b905060006102d5826103c9565b905073ffffffffffffffffffffffffffffffffffffffff82166102ff576102fc3482611d4b565b90505b600061030b8888610482565b9050610317888861058e565b6103248a898989856105fb565b600082610330856103c9565b61033a9190611d4b565b905089811015610385576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103bf576103ba8383836109ad565b505050565b6103ba8282610b2f565b600073ffffffffffffffffffffffffffffffffffffffff82161561047a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190611e9c565b61047c565b475b92915050565b60608160008167ffffffffffffffff8111156104a0576104a0611eb5565b6040519080825280602002602001820160405280156104c9578160200160208202803683370190505b5090506000805b83811015610583578686828181106104ea576104ea611d5e565b90506020028101906104fc9190611d8d565b61050d906080810190606001611dcb565b9150610518826103c9565b83828151811061052a5761052a611d5e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661057b573483828151811061056357610563611d5e565b602002602001018181516105779190611d4b565b9052505b6001016104d0565b509095945050505050565b60005b818110156103ba57368383838181106105ac576105ac611d5e565b90506020028101906105be9190611d8d565b90506105d060e0820160c08301611ef2565b156105f2576105f26105e86060830160408401611dcb565b8260800135610c59565b50600101610591565b8383838382600181146108c85760008585610617600185611d4b565b81811061062657610626611d5e565b90506020028101906106389190611d8d565b610649906080810190606001611dcb565b9050600089815b818110156107f457368d8d8381811061066b5761066b611d5e565b905060200281019061067d9190611d8d565b90506106ac6106926060830160408401611dcb565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061070f575061070f6106c56040830160208401611dcb565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561072657506107266106c56020830183611dcb565b80156107ab57506107ab61073d60a0830183611f0f565b61074c91600491600091611f74565b61075591611f9e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107e1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107eb8f82610dcf565b50600101610650565b505060005b610804600185611d4b565b8110156108c057600088888381811061081f5761081f611d5e565b90506020028101906108319190611d8d565b610842906080810190606001611dcb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108b75785828151811061088957610889611d5e565b602002602001015161089a826103c9565b6108a49190611d4b565b925082156108b7576108b7818885610393565b506001016107f9565b5050506109a1565b8760005b8181101561099e57368b8b838181106108e7576108e7611d5e565b90506020028101906108f99190611d8d565b905061090e6106926060830160408401611dcb565b8061092757506109276106c56040830160208401611dcb565b801561093e575061093e6106c56020830183611dcb565b8015610955575061095561073d60a0830183611f0f565b61098b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109958d82610dcf565b506001016108cc565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109fa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a47576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190611e9c565b905080821115610b1e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b610b298484846110e5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b7c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610bbf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161037c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610c19576040519150601f19603f3d011682016040523d82523d6000602084013e610c1e565b606091505b50509050806103ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610c93576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cec5780341015610ce8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7d9190611e9c565b905081811015610dc3576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161037c565b6103ba833330856111b9565b610de5610ddf6020830183611dcb565b3b151590565b610e1b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e5b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e706106926060850160408601611dcb565b610e7b576000610e81565b82608001355b90506000610e9d610e986060860160408701611dcb565b6103c9565b90506000610eb4610e986080870160608801611dcb565b905082600003610eeb57610eeb610ed16060870160408801611dcb565b610ee16040880160208901611dcb565b87608001356113e4565b8460800135821015610f36576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161037c565b600080610f466020880188611dcb565b73ffffffffffffffffffffffffffffffffffffffff1685610f6a60a08a018a611f0f565b604051610f78929190611fe6565b60006040518083038185875af1925050503d8060008114610fb5576040519150601f19603f3d011682016040523d82523d6000602084013e610fba565b606091505b509150915081611005576000610fcf82611527565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c919061201a565b600061101a610e9860808a0160608b01611dcb565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961104b60208b018b611dcb565b61105b60608c0160408d01611dcb565b61106b60808d0160608e01611dcb565b8c6080013589871161107d5786611087565b6110878a88611d4b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ba9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526115a5565b73ffffffffffffffffffffffffffffffffffffffff8416611206576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611253576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156112c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e89190611e9c565b90506112f6828686866116b4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa158015611367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138b9190611e9c565b6113959190611d4b565b9050836113a382600161206b565b10156113db576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661140457505050565b73ffffffffffffffffffffffffffffffffffffffff8216611451576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156114c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ea9190611e9c565b10156103ba576114fc83836000611712565b6103ba83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611712565b606060448251101561156c57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061158860048085516115809190611d4b565b859190611894565b90508080602001905181019061159e919061207e565b9392505050565b6000611607826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119ae9092919063ffffffff16565b9050805160001480611628575080806020019051810190611628919061213e565b6103ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161037c565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610b299085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611137565b8015806117b257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561178c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b09190611e9c565b155b61183e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161037c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103ba9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611137565b6060816118a281601f61206b565b10156118da576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118e4828461206b565b8451101561191e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561193d57604051915060008252602082016040526119a5565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561197657805183526020928301920161195e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606119bd84846000856119c5565b949350505050565b606082471015611a57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161037c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a80919061215b565b60006040518083038185875af1925050503d8060008114611abd576040519150601f19603f3d011682016040523d82523d6000602084013e611ac2565b606091505b5091509150611ad387838387611ade565b979650505050505050565b60608315611b74578251600003611b6d5773ffffffffffffffffffffffffffffffffffffffff85163b611b6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161037c565b50816119bd565b6119bd8383815115611b895781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c919061201a565b60008083601f840112611bcf57600080fd5b50813567ffffffffffffffff811115611be757600080fd5b602083019150836020828501011115611bff57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c2857600080fd5b50565b600080600080600080600080600060c08a8c031215611c4957600080fd5b8935985060208a013567ffffffffffffffff80821115611c6857600080fd5b611c748d838e01611bbd565b909a50985060408c0135915080821115611c8d57600080fd5b611c998d838e01611bbd565b909850965060608c01359150611cae82611c06565b90945060808b0135935060a08b01359080821115611ccb57600080fd5b818c0191508c601f830112611cdf57600080fd5b813581811115611cee57600080fd5b8d60208260051b8501011115611d0357600080fd5b6020830194508093505050509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561047c5761047c611d1c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dc157600080fd5b9190910192915050565b600060208284031215611ddd57600080fd5b813561159e81611c06565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611e4560e083018b8d611de8565b8281036020840152611e58818a8c611de8565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b600060208284031215611eae57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611c2857600080fd5b600060208284031215611f0457600080fd5b813561159e81611ee4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f4457600080fd5b83018035915067ffffffffffffffff821115611f5f57600080fd5b602001915036819003821315611bff57600080fd5b60008085851115611f8457600080fd5b83861115611f9157600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611fde5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b83811015612011578181015183820152602001611ff9565b50506000910152565b6020815260008251806020840152612039816040850160208701611ff6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b8082018082111561047c5761047c611d1c565b60006020828403121561209057600080fd5b815167ffffffffffffffff808211156120a857600080fd5b818401915084601f8301126120bc57600080fd5b8151818111156120ce576120ce611eb5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561211457612114611eb5565b8160405282815287602084870101111561212d57600080fd5b611ad3836020830160208801611ff6565b60006020828403121561215057600080fd5b815161159e81611ee4565b60008251611dc1818460208701611ff656fea26469706673582212202a7d55c28baa2ae6f7294e6ff5705ea7a32c016b0f813c845f9592aa6e719ecb64736f6c63430008110033";

type GenericSwapFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenericSwapFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenericSwapFacet__factory extends ContractFactory {
  constructor(...args: GenericSwapFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GenericSwapFacet> {
    return super.deploy(overrides || {}) as Promise<GenericSwapFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GenericSwapFacet {
    return super.attach(address) as GenericSwapFacet;
  }
  override connect(signer: Signer): GenericSwapFacet__factory {
    return super.connect(signer) as GenericSwapFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericSwapFacetInterface {
    return new utils.Interface(_abi) as GenericSwapFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericSwapFacet {
    return new Contract(address, _abi, signerOrProvider) as GenericSwapFacet;
  }
}
