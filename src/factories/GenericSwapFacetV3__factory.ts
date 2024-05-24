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
    stateMutability: "payable",
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
    stateMutability: "payable",
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
    stateMutability: "payable",
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
    stateMutability: "payable",
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
  "0x608060405234801561001057600080fd5b50612307806100206000396000f3fe6080604052600436106100655760003560e01c8063733214a311610043578063733214a3146100a5578063736eac0b146100b8578063af7060fd146100cb57600080fd5b80632c57e8841461006a5780634666fc801461007f5780635fd9ae2e14610092575b600080fd5b61007d610078366004611cf4565b6100de565b005b61007d61008d366004611de5565b610110565b61007d6100a0366004611cf4565b61031b565b61007d6100b3366004611de5565b610342565b61007d6100c6366004611cf4565b610325565b61007d6100d9366004611de5565b61052f565b6100e88282610922565b6100f482828b876109b1565b610105898989898989898989611061565b505050505050505050565b61011a81846111f3565b600061012c6080830160608401611ea7565b905060006101406060840160408501611ea7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156101b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d49190611ec4565b90508481101561021f576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b61024073ffffffffffffffffffffffffffffffffffffffff84168783611560565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102746020880188611ea7565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161030599989796959493929190611f26565b60405180910390a2505050505050505050505050565b6103258282610922565b61033182828b876109b1565b610105898989898989898989611619565b61034c81846111f3565b4782811015610391576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810184905260248101829052604401610216565b60008473ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103eb576040519150601f19603f3d011682016040523d82523d6000602084013e6103f0565b606091505b505090508061042b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061043d6080850160608601611ea7565b905060006104516060860160408701611ea7565b905060808501357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388d6104876020890189611ea7565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281861690830152851660608201526080810183905260a081018790524260c082015260e00160405180910390a18c7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378d8d8d8d8d888a898e60405161051899989796959493929190611f26565b60405180910390a250505050505050505050505050565b600061053e6020830183611ea7565b905061058e8173ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561061357506106136105a560a0840184611f91565b6105b491600491600091611ff6565b6105bd91612020565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610649576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff83163461067160a0870187611f91565b60405161067f929190612068565b60006040518083038185875af1925050503d80600081146106bc576040519150601f19603f3d011682016040523d82523d6000602084013e6106c1565b606091505b50915091508161070c5760006106d6826117f2565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610216919061209c565b61071586611870565b60006107276080860160608701611ea7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bb9190611ec4565b905086811015610801576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810188905260248101829052604401610216565b61082273ffffffffffffffffffffffffffffffffffffffff83168983611560565b60006108346060880160408901611ea7565b90506000876080013590507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388f8884878588426040516108c1979695949392919096875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385166040870152919093166060850152608084019290925260a083019190915260c082015260e00190565b60405180910390a18e7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378f8f8f8f8f888b898c60405161090999989796959493929190611f26565b60405180910390a2505050505050505050505050505050565b8060005b818110156109ab5736848483818110610941576109416120ed565b9050602002810190610953919061211c565b905061096560e0820160c0830161215a565b156109a2576109a2333060808401356109846060860160408701611ea7565b73ffffffffffffffffffffffffffffffffffffffff16929190611917565b50600101610926565b50505050565b8260005b8181101561105957368686838181106109d0576109d06120ed565b90506020028101906109e2919061211c565b905060006109f66060830160408401611ea7565b9050610a52610a086020840184611ea7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610a6b5750610a696105a560a0840184611f91565b155b15610aa2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610aaf6020830183611ea7565b73ffffffffffffffffffffffffffffffffffffffff16610ad56040840160208501611ea7565b73ffffffffffffffffffffffffffffffffffffffff1614158015610b095750610b07610a086040840160208501611ea7565b155b15610b40576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b6d610b536060840160408501611ea7565b73ffffffffffffffffffffffffffffffffffffffff161590565b15610ca157600080610b826020850185611ea7565b73ffffffffffffffffffffffffffffffffffffffff166080850135610baa60a0870187611f91565b604051610bb8929190612068565b60006040518083038185875af1925050503d8060008114610bf5576040519150601f19603f3d011682016040523d82523d6000602084013e610bfa565b606091505b509150915081610c4057610c0d816117f2565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610216919061209c565b610c506080850160608601611ea7565b73ffffffffffffffffffffffffffffffffffffffff16610c766060860160408701611ea7565b73ffffffffffffffffffffffffffffffffffffffff1614610c9a57610c9a87611870565b5050610eea565b600073ffffffffffffffffffffffffffffffffffffffff821663dd62ed3e30610cd06040870160208801611ea7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610d40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d649190611ec4565b90508260800135811015610df557610da4610d856040850160208601611ea7565b73ffffffffffffffffffffffffffffffffffffffff84169060006119dd565b610df5610db76040850160208601611ea7565b73ffffffffffffffffffffffffffffffffffffffff8416907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119dd565b600080610e056020860186611ea7565b73ffffffffffffffffffffffffffffffffffffffff16610e2860a0870187611f91565b604051610e36929190612068565b6000604051808303816000865af19150503d8060008114610e73576040519150601f19603f3d011682016040523d82523d6000602084013e610e78565b606091505b509150915081610e8b57610c0d816117f2565b610e9b6080860160608701611ea7565b73ffffffffffffffffffffffffffffffffffffffff16610ec16060870160408801611ea7565b73ffffffffffffffffffffffffffffffffffffffff1614610ee657610ee68489611a96565b5050505b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3886610f196020850185611ea7565b610f296060860160408701611ea7565b610f396080870160608801611ea7565b60808701803590610f5190610b539060608b01611ea7565b610ffa57610f656080890160608a01611ea7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff59190611ec4565b610ffc565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a150506001016109b5565b505050505050565b47838110156110a6576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810185905260248101829052604401610216565b60008573ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611100576040519150601f19603f3d011682016040523d82523d6000602084013e611105565b606091505b5050905080611140576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061117a5761117a6120ed565b905060200281019061118c919061211c565b61119d906060810190604001611ea7565b60008c8c60008181106111b2576111b26120ed565b90506020028101906111c4919061211c565b608001358b6040516111de99989796959493929190611f26565b60405180910390a25050505050505050505050565b60006112056060840160408501611ea7565b9050608083013561122e73ffffffffffffffffffffffffffffffffffffffff8316333084611917565b600061123d6020860186611ea7565b905060006112516040870160208801611ea7565b905036600061126360a0890189611f91565b915091506112b58473ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112cd57506112cd6105b4600460008486611ff6565b611303576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611384575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b156113bb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919088169063dd62ed3e90604401602060405180830381865afa158015611431573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114559190611ec4565b9050858110156114c85780156114875761148773ffffffffffffffffffffffffffffffffffffffff88168560006119dd565b6114c873ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119dd565b6000808673ffffffffffffffffffffffffffffffffffffffff1685856040516114f2929190612068565b6000604051808303816000865af19150503d806000811461152f576040519150601f19603f3d011682016040523d82523d6000602084013e611534565b606091505b5091509150816115495760006106d6826117f2565b611553898b611a96565b5050505050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610216565b600082826116286001826121ab565b818110611637576116376120ed565b9050602002810190611649919061211c565b61165a906080810190606001611ea7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156116ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ee9190611ec4565b905084811015611734576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810186905260248101829052604401610216565b61175573ffffffffffffffffffffffffffffffffffffffff83168783611560565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061178f5761178f6120ed565b90506020028101906117a1919061211c565b6117b2906060810190604001611ea7565b898c8c60008181106117c6576117c66120ed565b90506020028101906117d8919061211c565b608001358a6040516111de99989796959493929190611f26565b606060448251101561183757505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611853600480855161184b91906121ab565b859190611b6c565b90508080602001905181019061186991906121f3565b9392505050565b4780156119135760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146118d1576040519150601f19603f3d011682016040523d82523d6000602084013e6118d6565b606091505b5050905080611911576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806119d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610216565b5050505050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c45440000000000000000000000000000000000006044820152606401610216565b73ffffffffffffffffffffffffffffffffffffffff821615611913576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611b1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b439190611ec4565b905080156119115761191173ffffffffffffffffffffffffffffffffffffffff84168383611560565b606081611b7a81601f6122be565b1015611bb2576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bbc82846122be565b84511015611bf6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611c155760405191506000825260208201604052611c7d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611c4e578051835260209283019201611c36565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f840112611c9857600080fd5b50813567ffffffffffffffff811115611cb057600080fd5b602083019150836020828501011115611cc857600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611cf157600080fd5b50565b600080600080600080600080600060c08a8c031215611d1257600080fd5b8935985060208a013567ffffffffffffffff80821115611d3157600080fd5b611d3d8d838e01611c86565b909a50985060408c0135915080821115611d5657600080fd5b611d628d838e01611c86565b909850965060608c01359150611d7782611ccf565b90945060808b0135935060a08b01359080821115611d9457600080fd5b818c0191508c601f830112611da857600080fd5b813581811115611db757600080fd5b8d60208260051b8501011115611dcc57600080fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060c0898b031215611e0157600080fd5b88359750602089013567ffffffffffffffff80821115611e2057600080fd5b611e2c8c838d01611c86565b909950975060408b0135915080821115611e4557600080fd5b611e518c838d01611c86565b909750955060608b01359150611e6682611ccf565b90935060808a0135925060a08a01359080821115611e8357600080fd5b50890160e0818c031215611e9657600080fd5b809150509295985092959890939650565b600060208284031215611eb957600080fd5b813561186981611ccf565b600060208284031215611ed657600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611f3a60e083018b8d611edd565b8281036020840152611f4d818a8c611edd565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fc657600080fd5b83018035915067ffffffffffffffff821115611fe157600080fd5b602001915036819003821315611cc857600080fd5b6000808585111561200657600080fd5b8386111561201357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120605780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b8381101561209357818101518382015260200161207b565b50506000910152565b60208152600082518060208401526120bb816040850160208701612078565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261215057600080fd5b9190910192915050565b60006020828403121561216c57600080fd5b8135801515811461186957600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156121be576121be61217c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561220557600080fd5b815167ffffffffffffffff8082111561221d57600080fd5b818401915084601f83011261223157600080fd5b815181811115612243576122436121c4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715612289576122896121c4565b816040528281528760208487010111156122a257600080fd5b6122b3836020830160208801612078565b979650505050505050565b808201808211156121be576121be61217c56fea2646970667358221220ece1dd6b9b1b1e15527d3020a53ec24a96c7eb684a5cb9c81e1d998a871d543c64736f6c63430008110033";

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
