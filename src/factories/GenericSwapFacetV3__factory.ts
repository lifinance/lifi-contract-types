/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GenericSwapFacetV3,
  GenericSwapFacetV3Interface,
} from "../GenericSwapFacetV3";

const _abi = [
  {
    type: "function",
    name: "swapTokensMultipleV3ERC20ToERC20",
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
        name: "_minAmountOut",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapTokensMultipleV3ERC20ToNative",
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
        name: "_minAmountOut",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapTokensMultipleV3NativeToERC20",
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
        name: "_minAmountOut",
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
    type: "function",
    name: "swapTokensSingleV3ERC20ToERC20",
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
        name: "_minAmountOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_swapData",
        type: "tuple",
        internalType: "struct LibSwap.SwapData",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapTokensSingleV3ERC20ToNative",
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
        name: "_minAmountOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_swapData",
        type: "tuple",
        internalType: "struct LibSwap.SwapData",
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
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "swapTokensSingleV3NativeToERC20",
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
        name: "_minAmountOut",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_swapData",
        type: "tuple",
        internalType: "struct LibSwap.SwapData",
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
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506120a8806100206000396000f3fe6080604052600436106100655760003560e01c8063733214a311610043578063733214a3146100cc578063736eac0b146100ec578063af7060fd146100ff57600080fd5b80632c57e8841461006a5780634666fc801461008c5780635fd9ae2e146100ac575b600080fd5b34801561007657600080fd5b5061008a610085366004611b88565b610112565b005b34801561009857600080fd5b5061008a6100a7366004611c79565b610144565b3480156100b857600080fd5b5061008a6100c7366004611b88565b61034f565b3480156100d857600080fd5b5061008a6100e7366004611c79565b610376565b61008a6100fa366004611b88565b610359565b61008a61010d366004611c79565b610539565b61011c82826108c3565b61012882828b87610952565b610139898989898989898989610f73565b505050505050505050565b61014e8184611164565b60006101606080830160608401611d3b565b905060006101746060840160408501611d3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102089190611d5f565b905084811015610253576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b61027473ffffffffffffffffffffffffffffffffffffffff841687836114cf565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102a86020880188611d3b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161033999989796959493929190611dc1565b60405180910390a2505050505050505050505050565b61035982826108c3565b61036582828b87610952565b61013989898989898989898961158e565b6103808184611164565b47828110156103c5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018490526024810182905260440161024a565b60008473ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461041f576040519150601f19603f3d011682016040523d82523d6000602084013e610424565b606091505b505090508061045f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104716060850160408601611d3b565b905060808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6104a76020880188611d3b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015290851690820152600060608201526080810183905260a081018690524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c886000898d60405161033999989796959493929190611dc1565b60006105486020830183611d3b565b90506105988173ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561061d575061061d6105af60a0840184611e2c565b6105be91600491600091611e91565b6105c791611ebb565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610653576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff83163461067b60a0870187611e2c565b604051610689929190611f03565b60006040518083038185875af1925050503d80600081146106c6576040519150601f19603f3d011682016040523d82523d6000602084013e6106cb565b606091505b5091509150816106de576106de81611767565b6106e786611771565b60006106f96080860160608701611d3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078d9190611d5f565b9050868110156107d3576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018890526024810182905260440161024a565b6107f473ffffffffffffffffffffffffffffffffffffffff831689836114cf565b604080518e815273ffffffffffffffffffffffffffffffffffffffff87811660208301526000828401528416606082015260808881013590820181905260a082018490524260c083015291517f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b389181900360e00190a18d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e60008a898b6040516108ab99989796959493929190611dc1565b60405180910390a25050505050505050505050505050565b803660005b8281101561094b578484828181106108e2576108e2611f13565b90506020028101906108f49190611f42565b915061090660e0830160c08401611f80565b1561094357610943333060808501356109256060870160408801611d3b565b73ffffffffffffffffffffffffffffffffffffffff16929190611818565b6001016108c8565b5050505050565b82600080803681606081805b88811015610f64578c8c8281811061097857610978611f13565b905060200281019061098a9190611f42565b945061099c6060860160408701611d3b565b96506109ae6060860160408701611d3b565b97506109c06080860160608701611d3b565b9550610a1c6109d26020870187611d3b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610a355750610a336105af60a0870187611e2c565b155b15610a6c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a796020860186611d3b565b73ffffffffffffffffffffffffffffffffffffffff16610a9f6040870160208801611d3b565b73ffffffffffffffffffffffffffffffffffffffff1614158015610ad35750610ad16109d26040870160208801611d3b565b155b15610b0a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8716610bff57610b326020860186611d3b565b73ffffffffffffffffffffffffffffffffffffffff166080860135610b5a60a0880188611e2c565b604051610b68929190611f03565b60006040518083038185875af1925050503d8060008114610ba5576040519150601f19603f3d011682016040523d82523d6000602084013e610baa565b606091505b50909450925083610bbe57610bbe83611767565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610bfa57610bfa8a611771565b610e22565b73ffffffffffffffffffffffffffffffffffffffff881663dd62ed3e30610c2c6040890160208a01611d3b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610c9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc09190611d5f565b91508460800135821015610d5157610d00610ce16040870160208801611d3b565b73ffffffffffffffffffffffffffffffffffffffff8a169060006118d7565b610d51610d136040870160208801611d3b565b73ffffffffffffffffffffffffffffffffffffffff8a16907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118d7565b610d5e6020860186611d3b565b73ffffffffffffffffffffffffffffffffffffffff16610d8160a0870187611e2c565b604051610d8f929190611f03565b6000604051808303816000865af19150503d8060008114610dcc576040519150601f19603f3d011682016040523d82523d6000602084013e610dd1565b606091505b50909450925083610de557610de583611767565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610e2257610e22888b611990565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388b610e516020880188611d3b565b898960808a013573ffffffffffffffffffffffffffffffffffffffff821615610f07576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8d16906370a0823190602401602060405180830381865afa158015610ede573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f029190611d5f565b610f09565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a160010161095e565b50505050505050505050505050565b610f9460405180606001604052806024815260200161204f60249139611a66565b4783811015610fd9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018590526024810182905260440161024a565b60008573ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611033576040519150601f19603f3d011682016040523d82523d6000602084013e611038565b606091505b50509050806110b15761107f6040518060400160405280600481526020017f4845594100000000000000000000000000000000000000000000000000000000815250611a66565b6040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a60008181106110eb576110eb611f13565b90506020028101906110fd9190611f42565b61110e906060810190604001611d3b565b60008c8c600081811061112357611123611f13565b90506020028101906111359190611f42565b608001358b60405161114f99989796959493929190611dc1565b60405180910390a25050505050505050505050565b60006111766060840160408501611d3b565b9050608083013561119f73ffffffffffffffffffffffffffffffffffffffff8316333084611818565b60006111ae6020860186611d3b565b905060006111c26040870160208801611d3b565b90503660006111d460a0890189611e2c565b915091506112268473ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561123e575061123e6105be600460008486611e91565b611274576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156112f5575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b1561132c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919088169063dd62ed3e90604401602060405180830381865afa1580156113a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c69190611d5f565b9050858110156114395780156113f8576113f873ffffffffffffffffffffffffffffffffffffffff88168560006118d7565b61143973ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118d7565b6000808673ffffffffffffffffffffffffffffffffffffffff168585604051611463929190611f03565b6000604051808303816000865af19150503d80600081146114a0576040519150601f19603f3d011682016040523d82523d6000602084013e6114a5565b606091505b5091509150816114b8576114b881611767565b6114c2898b611990565b5050505050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015260640161024a565b50505050565b6000828261159d600182611fa2565b8181106115ac576115ac611f13565b90506020028101906115be9190611f42565b6115cf906080810190606001611d3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561163f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116639190611d5f565b9050848110156116a9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018690526024810182905260440161024a565b6116ca73ffffffffffffffffffffffffffffffffffffffff831687836114cf565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061170457611704611f13565b90506020028101906117169190611f42565b611727906060810190604001611d3b565b898c8c600081811061173b5761173b611f13565b905060200281019061174d9190611f42565b608001358a60405161114f99989796959493929190611dc1565b8051602082018181fd5b4780156118145760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117d2576040519150601f19603f3d011682016040523d82523d6000602084013e6117d7565b606091505b5050905080611812576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061094b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161024a565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611588576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c4544000000000000000000000000000000000000604482015260640161024a565b73ffffffffffffffffffffffffffffffffffffffff821615611814576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611a19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3d9190611d5f565b905080156118125761181273ffffffffffffffffffffffffffffffffffffffff841683836114cf565b611af581604051602401611a7a9190611fe2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052611af8565b50565b611af58180516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008083601f840112611b2f57600080fd5b50813567ffffffffffffffff811115611b4757600080fd5b602083019150836020828501011115611b5f57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611af557600080fd5b600080600080600080600080600060c08a8c031215611ba657600080fd5b8935985060208a013567ffffffffffffffff80821115611bc557600080fd5b611bd18d838e01611b1d565b909a50985060408c0135915080821115611bea57600080fd5b611bf68d838e01611b1d565b909850965060608c01359150611c0b82611b66565b90945060808b0135935060a08b01359080821115611c2857600080fd5b818c0191508c601f830112611c3c57600080fd5b813581811115611c4b57600080fd5b8d60208260051b8501011115611c6057600080fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060c0898b031215611c9557600080fd5b88359750602089013567ffffffffffffffff80821115611cb457600080fd5b611cc08c838d01611b1d565b909950975060408b0135915080821115611cd957600080fd5b611ce58c838d01611b1d565b909750955060608b01359150611cfa82611b66565b90935060808a0135925060a08a01359080821115611d1757600080fd5b50890160e0818c031215611d2a57600080fd5b809150509295985092959890939650565b600060208284031215611d4d57600080fd5b8135611d5881611b66565b9392505050565b600060208284031215611d7157600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611dd560e083018b8d611d78565b8281036020840152611de8818a8c611d78565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e6157600080fd5b83018035915067ffffffffffffffff821115611e7c57600080fd5b602001915036819003821315611b5f57600080fd5b60008085851115611ea157600080fd5b83861115611eae57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611efb5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611f7657600080fd5b9190910192915050565b600060208284031215611f9257600080fd5b81358015158114611d5857600080fd5b81810381811115611fdc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600060208083528351808285015260005b8181101561200f57858101830151858201604001528201611ff3565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fe696e205f7472616e736665724e6174697665546f6b656e73416e64456d69744576656e74a2646970667358221220602c80bbeb779353cd3ef36ac7525f62cf0eef6a61a5ecf08b2f44bcce6569c164736f6c63430008110033";

type GenericSwapFacetV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenericSwapFacetV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenericSwapFacetV3__factory extends ContractFactory {
  constructor(...args: GenericSwapFacetV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GenericSwapFacetV3> {
    return super.deploy(overrides || {}) as Promise<GenericSwapFacetV3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GenericSwapFacetV3 {
    return super.attach(address) as GenericSwapFacetV3;
  }
  override connect(signer: Signer): GenericSwapFacetV3__factory {
    return super.connect(signer) as GenericSwapFacetV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericSwapFacetV3Interface {
    return new utils.Interface(_abi) as GenericSwapFacetV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericSwapFacetV3 {
    return new Contract(address, _abi, signerOrProvider) as GenericSwapFacetV3;
  }
}
