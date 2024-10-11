/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";

const _abi = [
  {
    type: "function",
    name: "initHop",
    inputs: [
      {
        name: "configs",
        type: "tuple[]",
        internalType: "struct HopFacet.Config[]",
        components: [
          {
            name: "assetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "bridge",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerBridge",
    inputs: [
      {
        name: "assetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "bridge",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startBridgeTokensViaHop",
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
        name: "_hopData",
        type: "tuple",
        internalType: "struct HopFacet.HopData",
        components: [
          {
            name: "bonderFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationAmountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationDeadline",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "relayer",
            type: "address",
            internalType: "address",
          },
          {
            name: "relayerFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "nativeFee",
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
    name: "swapAndStartBridgeTokensViaHop",
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
        name: "_hopData",
        type: "tuple",
        internalType: "struct HopFacet.HopData",
        components: [
          {
            name: "bonderFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationAmountOutMin",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationDeadline",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "relayer",
            type: "address",
            internalType: "address",
          },
          {
            name: "relayerFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "nativeFee",
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
    name: "HopBridgeRegistered",
    inputs: [
      {
        name: "assetId",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "bridge",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "HopInitialized",
    inputs: [
      {
        name: "configs",
        type: "tuple[]",
        indexed: false,
        internalType: "struct HopFacet.Config[]",
        components: [
          {
            name: "assetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "bridge",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
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
    name: "InvalidConfig",
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
    name: "OnlyContractOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyError",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612ba2806100206000396000f3fe60806040526004361061003f5760003560e01c80633961d1ed1461004457806367fdd71e14610066578063a01fe78414610086578063b3b6358714610099575b600080fd5b34801561005057600080fd5b5061006461005f366004612340565b6100ac565b005b34801561007257600080fd5b50610064610081366004612373565b6101ad565b610064610094366004612606565b610356565b6100646100a73660046126b3565b61058d565b6100b46107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff8216610122576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b56107b1565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b860005b828110156103175760008484838181106101f5576101f56126fa565b905060400201602001602081019061020d9190612729565b73ffffffffffffffffffffffffffffffffffffffff160361025a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026c5761026c6126fa565b90506040020160200160208101906102849190612729565b826000868685818110610299576102996126fa565b6102af9260206040909202019081019150612729565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790558061030f8161277a565b9150506101d9565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde383836040516103499291906127b2565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103e23447612821565b905086806101000151610421576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561045f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610534576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054e8a600001518b60c001518b8b338c60e00135610826565b60c08b015261055d8a886109c6565b50479150508181111561057f5761057f60008461057a8585612821565b610c85565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610608576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006106193447612821565b90508480610100015115610659576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610697576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106ba8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106f1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361076c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077e88608001518960c00151610cbb565b61078888886109c6565b5047915050818111156107a5576107a560008461057a8585612821565b50506000909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610824576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600083808203610862576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610871600185612821565b818110610880576108806126fa565b90506020028101906108929190612834565b6108a3906080810190606001612729565b905060006108b082610e31565b905073ffffffffffffffffffffffffffffffffffffffff82166108da576108d73482612821565b90505b60006108e68989610eea565b90506108f28989610ff6565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261092d818b8b85611063565b60008361093986610e31565b6109439190612821565b905073ffffffffffffffffffffffffffffffffffffffff851661096d5761096a8882612821565b90505b8b8110156109b6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff80821660009081527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205460c086015191921690610a2a9084908390611454565b600073ffffffffffffffffffffffffffffffffffffffff841615610a52578460e00135610a65565b60c0860151610a659060e0870135612872565b90504660011480610a765750466005145b15610b74578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610ac49190612729565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4016000604051808303818588803b158015610b5657600080fd5b505af1158015610b6a573d6000803e3d6000fd5b5050505050610c46565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104016000604051808303818588803b158015610c2c57600080fd5b505af1158015610c40573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c7591906128f3565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610cb157610cac838383611597565b505050565b610cac8282611719565b80600003610cf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d4e5780341015610d4a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610dbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddf9190612a06565b905081811015610e25576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016109ad565b610cac83333085611843565b600073ffffffffffffffffffffffffffffffffffffffff821615610ee2576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610eb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edd9190612a06565b610ee4565b475b92915050565b60608160008167ffffffffffffffff811115610f0857610f086123e8565b604051908082528060200260200182016040528015610f31578160200160208202803683370190505b5090506000805b83811015610feb57868682818110610f5257610f526126fa565b9050602002810190610f649190612834565b610f75906080810190606001612729565b9150610f8082610e31565b838281518110610f9257610f926126fa565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fe35734838281518110610fcb57610fcb6126fa565b60200260200101818151610fdf9190612821565b9052505b600101610f38565b509095945050505050565b60005b81811015610cac5736838383818110611014576110146126fa565b90506020028101906110269190612834565b905061103860e0820160c08301612a1f565b1561105a5761105a6110506060830160408401612729565b8260800135610cbb565b50600101610ff9565b60208401516040850151849184918490836001811461136d576000868661108b600185612821565b81811061109a5761109a6126fa565b90506020028101906110ac9190612834565b6110bd906080810190606001612729565b9050600089815b8181101561126a57368d8d838181106110df576110df6126fa565b90506020028101906110f19190612834565b90506111206111066060830160408401612729565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061118357506111836111396040830160208401612729565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561119a575061119a6111396020830183612729565b801561121f575061121f6111b160a0830183612a3c565b6111c091600491600091612aa8565b6111c991612ad2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611255576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e516112619082611a5d565b506001016110c4565b505060005b61127a600185612821565b811015611365576000898983818110611295576112956126fa565b90506020028101906112a79190612834565b6112b8906080810190606001612729565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461135c578682815181106112ff576112ff6126fa565b602002602001015161131082610e31565b61131a9190612821565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611341576000611343565b865b9050831561135a5761135a828a61057a8488612821565b505b5060010161126f565b505050611448565b8760005b8181101561144557368b8b8381811061138c5761138c6126fa565b905060200281019061139e9190612834565b90506113b36111066060830160408401612729565b806113cc57506113cc6111396040830160208401612729565b80156113e357506113e36111396020830183612729565b80156113fa57506113fa6111b160a0830183612a3c565b611430576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161143c9082611a5d565b50600101611371565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661147457505050565b73ffffffffffffffffffffffffffffffffffffffff82166114c1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611536573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155a9190612a06565b1015610cac5761156c83836000611d3b565b610cac83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d3b565b73ffffffffffffffffffffffffffffffffffffffff83166115e4576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611631576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561169e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c29190612a06565b905080821115611708576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016109ad565b611713848484611f3b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611766576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156117a9576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016109ad565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611803576040519150601f19603f3d011682016040523d82523d6000602084013e611808565b606091505b5050905080610cac576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611890576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118dd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561194e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119729190612a06565b905061198082868686611f91565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a149190612a06565b611a1e9190612821565b14611a55576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a73611a6d6020830183612729565b3b151590565b611aa9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611ae9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611afe6111066060850160408601612729565b611b09576000611b0f565b82608001355b90506000611b2b611b266060860160408701612729565b610e31565b90506000611b42611b266080870160608801612729565b905082600003611b7957611b79611b5f6060870160408801612729565b611b6f6040880160208901612729565b8760800135611454565b8460800135821015611bc4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016109ad565b600080611bd46020880188612729565b73ffffffffffffffffffffffffffffffffffffffff1685611bf860a08a018a612a3c565b604051611c06929190612b1a565b60006040518083038185875af1925050503d8060008114611c43576040519150601f19603f3d011682016040523d82523d6000602084013e611c48565b606091505b509150915081611c5b57611c5b81611fef565b6000611c70611b2660808a0160608b01612729565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ca160208b018b612729565b611cb160608c0160408d01612729565b611cc160808d0160608e01612729565b8c60800135898711611cd35786611cdd565b611cdd8a88612821565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611ddb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd99190612a06565b155b611e67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016109ad565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cac9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ff9565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cac9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611eb9565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117139085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611eb9565b8051602082018181fd5b600061205b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121089092919063ffffffff16565b905080516000148061207c57508080602001905181019061207c9190612b2a565b610cac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109ad565b6060612117848460008561211f565b949350505050565b6060824710156121b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016109ad565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516121da9190612b47565b60006040518083038185875af1925050503d8060008114612217576040519150601f19603f3d011682016040523d82523d6000602084013e61221c565b606091505b509150915061222d87838387612238565b979650505050505050565b606083156122ce5782516000036122c75773ffffffffffffffffffffffffffffffffffffffff85163b6122c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109ad565b5081612117565b61211783838151156122e35781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ad9190612b59565b803573ffffffffffffffffffffffffffffffffffffffff8116811461233b57600080fd5b919050565b6000806040838503121561235357600080fd5b61235c83612317565b915061236a60208401612317565b90509250929050565b6000806020838503121561238657600080fd5b823567ffffffffffffffff8082111561239e57600080fd5b818501915085601f8301126123b257600080fd5b8135818111156123c157600080fd5b8660208260061b85010111156123d657600080fd5b60209290920196919550909350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561243b5761243b6123e8565b60405290565b600082601f83011261245257600080fd5b813567ffffffffffffffff8082111561246d5761246d6123e8565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156124b3576124b36123e8565b816040528381528660208588010111156124cc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b80151581146124fa57600080fd5b50565b803561233b816124ec565b6000610140828403121561251b57600080fd5b612523612417565b905081358152602082013567ffffffffffffffff8082111561254457600080fd5b61255085838601612441565b6020840152604084013591508082111561256957600080fd5b5061257684828501612441565b60408301525061258860608301612317565b606082015261259960808301612317565b60808201526125aa60a08301612317565b60a082015260c082013560c082015260e082013560e08201526101006125d18184016124fd565b908201526101206125e38382016124fd565b9082015292915050565b6000610100828403121561260057600080fd5b50919050565b600080600080610140858703121561261d57600080fd5b843567ffffffffffffffff8082111561263557600080fd5b61264188838901612508565b9550602087013591508082111561265757600080fd5b818701915087601f83011261266b57600080fd5b81358181111561267a57600080fd5b8860208260051b850101111561268f57600080fd5b6020830195508094505050506126a886604087016125ed565b905092959194509250565b60008061012083850312156126c757600080fd5b823567ffffffffffffffff8111156126de57600080fd5b6126ea85828601612508565b92505061236a84602085016125ed565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561273b57600080fd5b61274482612317565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036127ab576127ab61274b565b5060010190565b6020808252818101839052600090604080840186845b878110156128145773ffffffffffffffffffffffffffffffffffffffff806127ef84612317565b168452806127fe878501612317565b16848701525091830191908301906001016127c8565b5090979650505050505050565b81810381811115610ee457610ee461274b565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261286857600080fd5b9190910192915050565b80820180821115610ee457610ee461274b565b60005b838110156128a0578181015183820152602001612888565b50506000910152565b600081518084526128c1816020860160208601612885565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261291c6101608501836128a9565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261295783826128a9565b9250506060850151612981608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129f48187018315159052565b90950151151593019290925250919050565b600060208284031215612a1857600080fd5b5051919050565b600060208284031215612a3157600080fd5b8135612744816124ec565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a7157600080fd5b83018035915067ffffffffffffffff821115612a8c57600080fd5b602001915036819003821315612aa157600080fd5b9250929050565b60008085851115612ab857600080fd5b83861115612ac557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612b125780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612b3c57600080fd5b8151612744816124ec565b60008251612868818460208701612885565b60208152600061274460208301846128a956fea2646970667358221220c1b6254f12f9c6fef53d5939781002047f50321906ab3ac9a5ac754dbb8b20ef64736f6c63430008110033";

type HopFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HopFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HopFacet__factory extends ContractFactory {
  constructor(...args: HopFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HopFacet> {
    return super.deploy(overrides || {}) as Promise<HopFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HopFacet {
    return super.attach(address) as HopFacet;
  }
  override connect(signer: Signer): HopFacet__factory {
    return super.connect(signer) as HopFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HopFacetInterface {
    return new utils.Interface(_abi) as HopFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HopFacet {
    return new Contract(address, _abi, signerOrProvider) as HopFacet;
  }
}
