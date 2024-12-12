/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  OptimismBridgeFacet,
  OptimismBridgeFacetInterface,
} from "../OptimismBridgeFacet";

const _abi = [
  {
    type: "function",
    name: "initOptimism",
    inputs: [
      {
        name: "configs",
        type: "tuple[]",
        internalType: "struct OptimismBridgeFacet.Config[]",
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
      {
        name: "standardBridge",
        type: "address",
        internalType: "contract IL1StandardBridge",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerOptimismBridge",
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
    name: "startBridgeTokensViaOptimismBridge",
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
        name: "_optimismData",
        type: "tuple",
        internalType: "struct OptimismBridgeFacet.OptimismData",
        components: [
          {
            name: "assetIdOnL2",
            type: "address",
            internalType: "address",
          },
          {
            name: "l2Gas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "isSynthetix",
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
    name: "swapAndStartBridgeTokensViaOptimismBridge",
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
        name: "_optimismData",
        type: "tuple",
        internalType: "struct OptimismBridgeFacet.OptimismData",
        components: [
          {
            name: "assetIdOnL2",
            type: "address",
            internalType: "address",
          },
          {
            name: "l2Gas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "isSynthetix",
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
    type: "event",
    name: "OptimismBridgeRegistered",
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
    name: "OptimismInitialized",
    inputs: [
      {
        name: "configs",
        type: "tuple[]",
        indexed: false,
        internalType: "struct OptimismBridgeFacet.Config[]",
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
    type: "error",
    name: "AlreadyInitialized",
    inputs: [],
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
    name: "NotInitialized",
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
  "0x608060405234801561001057600080fd5b50612d53806100206000396000f3fe60806040526004361061003f5760003560e01c80635bb5d44814610044578063899cc31714610059578063ce8a97a514610079578063decb09d71461008c575b600080fd5b6100576100523660046126d8565b6100ac565b005b34801561006557600080fd5b50610057610074366004612784565b6102de565b61005761008736600461280a565b610557565b34801561009857600080fd5b506100576100a7366004612859565b61077b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061013834476128c1565b905086806101000151610177576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61029f8a600001518b60c001518b8b336108f0565b60c08b01526102ae8a88610a38565b5047915050818111156102d0576102d06000846102cb85856128c1565b610dc1565b505060009091555050505050565b6102e6610df7565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff161561037c576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b838110156104bd57600085858381811061039b5761039b6128d4565b90506040020160200160208101906103b39190612903565b73ffffffffffffffffffffffffffffffffffffffff1603610400576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848482818110610412576104126128d4565b905060400201602001602081019061042a9190612903565b82600087878581811061043f5761043f6128d4565b6104559260206040909202019081019150612903565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055806104b581612927565b91505061037f565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c9156890610549908690869061295f565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105d2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105e334476128c1565b90508480610100015115610623576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610661576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106848160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106f9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610736576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074888608001518960c00151610e6c565b6107528888610a38565b50479150508181111561076f5761076f6000846102cb85856128c1565b50506000909155505050565b610783610df7565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff16610818576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610865576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381166000818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b60008280820361092c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561093b6001856128c1565b81811061094a5761094a6128d4565b905060200281019061095c91906129d2565b61096d906080810190606001612903565b9050600061097a82610fe2565b905073ffffffffffffffffffffffffffffffffffffffff82166109a4576109a134826128c1565b90505b60006109b0888861109b565b90506109bc88886111a7565b6109c98a89898985611214565b6000826109d585610fe2565b6109df91906128c1565b905089811015610a2a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff90811660009081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a955781610ab1565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ad5856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610bae5760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610b126040890160208a01612a10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff16602482015260606044820152600060648201526084016000604051808303818588803b158015610b9057600080fd5b505af1158015610ba4573d6000803e3d6000fd5b5050505050610d83565b610bc18560800151828760c001516115c6565b610bd16060850160408601612a36565b15610c885760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c519260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610c6b57600080fd5b505af1158015610c7f573d6000803e3d6000fd5b50505050610d83565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610cb86020880188612903565b60a089015160c08a0151610cd260408b0160208c01612a10565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a4820152600060c482015260e401600060405180830381600087803b158015610d6a57600080fd5b505af1158015610d7e573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610db29190612ac1565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610ded57610de8838383611709565b505050565b610de8828261188b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e6a576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b80600003610ea6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eff5780341015610efb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610f6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f909190612bd4565b905081811015610fd6576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a21565b610de8833330856119b5565b600073ffffffffffffffffffffffffffffffffffffffff821615611093576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561106a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108e9190612bd4565b611095565b475b92915050565b60608160008167ffffffffffffffff8111156110b9576110b9612489565b6040519080825280602002602001820160405280156110e2578160200160208202803683370190505b5090506000805b8381101561119c57868682818110611103576111036128d4565b905060200281019061111591906129d2565b611126906080810190606001612903565b915061113182610fe2565b838281518110611143576111436128d4565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611194573483828151811061117c5761117c6128d4565b6020026020010181815161119091906128c1565b9052505b6001016110e9565b509095945050505050565b60005b81811015610de857368383838181106111c5576111c56128d4565b90506020028101906111d791906129d2565b90506111e960e0820160c08301612a36565b1561120b5761120b6112016060830160408401612903565b8260800135610e6c565b506001016111aa565b8383838382600181146114e157600085856112306001856128c1565b81811061123f5761123f6128d4565b905060200281019061125191906129d2565b611262906080810190606001612903565b9050600089815b8181101561140d57368d8d83818110611284576112846128d4565b905060200281019061129691906129d2565b90506112c56112ab6060830160408401612903565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061132857506113286112de6040830160208401612903565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561133f575061133f6112de6020830183612903565b80156113c457506113c461135660a0830183612bed565b61136591600491600091612c59565b61136e91612c83565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113fa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114048f82611bcf565b50600101611269565b505060005b61141d6001856128c1565b8110156114d9576000888883818110611438576114386128d4565b905060200281019061144a91906129d2565b61145b906080810190606001612903565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114d0578582815181106114a2576114a26128d4565b60200260200101516114b382610fe2565b6114bd91906128c1565b925082156114d0576114d0818885610dc1565b50600101611412565b5050506115ba565b8760005b818110156115b757368b8b83818110611500576115006128d4565b905060200281019061151291906129d2565b90506115276112ab6060830160408401612903565b8061154057506115406112de6040830160208401612903565b801561155757506115576112de6020830183612903565b801561156e575061156e61135660a0830183612bed565b6115a4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ae8d82611bcf565b506001016114e5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115e657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611633576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cc9190612bd4565b1015610de8576116de83836000611ead565b610de883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ead565b73ffffffffffffffffffffffffffffffffffffffff8316611756576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117a3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611810573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118349190612bd4565b90508082111561187a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a21565b6118858484846120ad565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166118d8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561191b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a21565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611975576040519150601f19603f3d011682016040523d82523d6000602084013e61197a565b606091505b5050905080610de8576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611a02576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a4f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611ac0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae49190612bd4565b9050611af282868686612103565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611b62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b869190612bd4565b611b9091906128c1565b14611bc7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611be5611bdf6020830183612903565b3b151590565b611c1b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611c5b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611c706112ab6060850160408601612903565b611c7b576000611c81565b82608001355b90506000611c9d611c986060860160408701612903565b610fe2565b90506000611cb4611c986080870160608801612903565b905082600003611ceb57611ceb611cd16060870160408801612903565b611ce16040880160208901612903565b87608001356115c6565b8460800135821015611d36576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a21565b600080611d466020880188612903565b73ffffffffffffffffffffffffffffffffffffffff1685611d6a60a08a018a612bed565b604051611d78929190612ccb565b60006040518083038185875af1925050503d8060008114611db5576040519150601f19603f3d011682016040523d82523d6000602084013e611dba565b606091505b509150915081611dcd57611dcd81612161565b6000611de2611c9860808a0160608b01612903565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611e1360208b018b612903565b611e2360608c0160408d01612903565b611e3360808d0160608e01612903565b8c60800135898711611e455786611e4f565b611e4f8a886128c1565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611f4d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611f27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f4b9190612bd4565b155b611fd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a21565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610de89084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261216b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610de89084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161202b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118859085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161202b565b8051602082018181fd5b60006121cd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661227a9092919063ffffffff16565b90508051600014806121ee5750808060200190518101906121ee9190612cdb565b610de8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a21565b60606122898484600085612291565b949350505050565b606082471015612323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a21565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161234c9190612cf8565b60006040518083038185875af1925050503d8060008114612389576040519150601f19603f3d011682016040523d82523d6000602084013e61238e565b606091505b509150915061239f878383876123aa565b979650505050505050565b606083156124405782516000036124395773ffffffffffffffffffffffffffffffffffffffff85163b612439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a21565b5081612289565b61228983838151156124555781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a219190612d0a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156124dc576124dc612489565b60405290565b600082601f8301126124f357600080fd5b813567ffffffffffffffff8082111561250e5761250e612489565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561255457612554612489565b8160405283815286602085880101111561256d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146125af57600080fd5b50565b80356125bd8161258d565b919050565b80151581146125af57600080fd5b80356125bd816125c2565b600061014082840312156125ee57600080fd5b6125f66124b8565b905081358152602082013567ffffffffffffffff8082111561261757600080fd5b612623858386016124e2565b6020840152604084013591508082111561263c57600080fd5b50612649848285016124e2565b60408301525061265b606083016125b2565b606082015261266c608083016125b2565b608082015261267d60a083016125b2565b60a082015260c082013560c082015260e082013560e08201526101006126a48184016125d0565b908201526101206126b68382016125d0565b9082015292915050565b6000606082840312156126d257600080fd5b50919050565b60008060008060a085870312156126ee57600080fd5b843567ffffffffffffffff8082111561270657600080fd5b612712888389016125db565b9550602087013591508082111561272857600080fd5b818701915087601f83011261273c57600080fd5b81358181111561274b57600080fd5b8860208260051b850101111561276057600080fd5b60208301955080945050505061277986604087016126c0565b905092959194509250565b60008060006040848603121561279957600080fd5b833567ffffffffffffffff808211156127b157600080fd5b818601915086601f8301126127c557600080fd5b8135818111156127d457600080fd5b8760208260061b85010111156127e957600080fd5b602092830195509350508401356127ff8161258d565b809150509250925092565b6000806080838503121561281d57600080fd5b823567ffffffffffffffff81111561283457600080fd5b612840858286016125db565b92505061285084602085016126c0565b90509250929050565b6000806040838503121561286c57600080fd5b82356128778161258d565b915060208301356128878161258d565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561109557611095612892565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561291557600080fd5b81356129208161258d565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361295857612958612892565b5060010190565b6020808252818101839052600090604080840186845b878110156129c55781356129888161258d565b73ffffffffffffffffffffffffffffffffffffffff908116845282860135906129b08261258d565b16838601529183019190830190600101612975565b5090979650505050505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a0657600080fd5b9190910192915050565b600060208284031215612a2257600080fd5b813563ffffffff8116811461292057600080fd5b600060208284031215612a4857600080fd5b8135612920816125c2565b60005b83811015612a6e578181015183820152602001612a56565b50506000910152565b60008151808452612a8f816020860160208601612a53565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612aea610160850183612a77565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b258382612a77565b9250506060850151612b4f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612bc28187018315159052565b90950151151593019290925250919050565b600060208284031215612be657600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612c2257600080fd5b83018035915067ffffffffffffffff821115612c3d57600080fd5b602001915036819003821315612c5257600080fd5b9250929050565b60008085851115612c6957600080fd5b83861115612c7657600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612cc35780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612ced57600080fd5b8151612920816125c2565b60008251612a06818460208701612a53565b6020815260006129206020830184612a7756fea2646970667358221220359475f4eaacd924ad7f0222ecc123b2650f546f46b14d1cb119f9b556bfdaff64736f6c63430008110033";

type OptimismBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OptimismBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OptimismBridgeFacet__factory extends ContractFactory {
  constructor(...args: OptimismBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OptimismBridgeFacet> {
    return super.deploy(overrides || {}) as Promise<OptimismBridgeFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OptimismBridgeFacet {
    return super.attach(address) as OptimismBridgeFacet;
  }
  override connect(signer: Signer): OptimismBridgeFacet__factory {
    return super.connect(signer) as OptimismBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OptimismBridgeFacetInterface {
    return new utils.Interface(_abi) as OptimismBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OptimismBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as OptimismBridgeFacet;
  }
}
